"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";

const CursorFollower = dynamic(() => import("@/components/ui/CursorFollower"), {
  ssr: false,
});

function canUseCursorFollower() {
  if (typeof window === "undefined") return false;
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const finePointer = window.matchMedia?.("(pointer: fine)")?.matches;
  const canHover = window.matchMedia?.("(hover: hover)")?.matches;
  return !reduceMotion && !!finePointer && !!canHover;
}

export default function ClientEffects() {
  const [enableCursor, setEnableCursor] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let idleId: number | null = null;

    const enableWhenIdle = () => {
      if (cancelled) return;
      setEnableCursor(canUseCursorFollower());
    };

    // Defer heavy client-only effects so they don't block initial render
    const w = window as any;
    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(enableWhenIdle, { timeout: 1500 });
    } else {
      timeoutId = setTimeout(enableWhenIdle, 600);
    }

    // Keep in sync with user settings/device changes
    const mqReduce = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const mqPointer = window.matchMedia?.("(pointer: fine)");
    const mqHover = window.matchMedia?.("(hover: hover)");
    const onChange = () => setEnableCursor(canUseCursorFollower());

    mqReduce?.addEventListener?.("change", onChange);
    mqPointer?.addEventListener?.("change", onChange);
    mqHover?.addEventListener?.("change", onChange);

    return () => {
      cancelled = true;
      if (idleId != null && typeof (window as any).cancelIdleCallback === "function") {
        (window as any).cancelIdleCallback(idleId);
      }
      if (timeoutId != null) {
        clearTimeout(timeoutId);
      }
      mqReduce?.removeEventListener?.("change", onChange);
      mqPointer?.removeEventListener?.("change", onChange);
      mqHover?.removeEventListener?.("change", onChange);
    };
  }, []);

  return (
    <>
      <SmoothScrollProvider />
      {enableCursor ? <CursorFollower /> : null}
    </>
  );
}



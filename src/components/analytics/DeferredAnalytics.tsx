"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * Loads Google Analytics (gtag.js, ~175 KB) only AFTER the first user
 * interaction or a short idle delay — keeping it off the critical rendering
 * path. This removes GA's download + main-thread cost from initial load
 * (the largest single JS contributor in Lighthouse) without losing tracking:
 * by the time a visitor scrolls/taps or 5s pass, GA is loaded, so lead and
 * engagement events still fire. Purely a performance change — no SEO/content
 * impact (analytics scripts are not indexable content).
 */
export default function DeferredAnalytics({ gaId }: { gaId: string }) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) return;
    const trigger = () => setLoad(true);
    const events = ["scroll", "pointerdown", "keydown", "touchstart", "mousemove"];
    events.forEach((e) =>
      window.addEventListener(e, trigger, { once: true, passive: true })
    );
    // Fallback so analytics still fires for users who don't interact (bouncers).
    const timer = window.setTimeout(trigger, 8000);
    return () => {
      events.forEach((e) => window.removeEventListener(e, trigger));
      window.clearTimeout(timer);
    };
  }, [load]);

  return load ? <GoogleAnalytics gaId={gaId} /> : null;
}

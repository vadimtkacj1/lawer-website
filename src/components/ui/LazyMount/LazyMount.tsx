"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type LazyMountProps = {
  children: ReactNode;
  /**
   * How early to start loading before the element enters the viewport.
   * Example: "400px 0px"
   */
  rootMargin?: string;
  /**
   * Optional placeholder to keep layout stable.
   */
  placeholder?: ReactNode;
};

export default function LazyMount({
  children,
  rootMargin = "400px 0px",
  placeholder = null,
}: LazyMountProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;
    const el = hostRef.current;
    if (!el) return;

    // No IO support (very old browsers) — just mount.
    if (typeof IntersectionObserver === "undefined") {
      setMounted(true);
      return;
    }

    // On mobile, load components closer to viewport for better performance
    const isMobile = 'ontouchstart' in window ||
      window.navigator.maxTouchPoints > 0 ||
      window.innerWidth <= 768;

    // Reduce rootMargin on mobile to load only when closer to viewport
    const optimizedRootMargin = isMobile ? "100px 0px" : rootMargin;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setMounted(true);
            obs.disconnect();
            break;
          }
        }
      },
      { root: null, rootMargin: optimizedRootMargin, threshold: 0.01 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted, rootMargin]);

  return <div ref={hostRef}>{mounted ? children : placeholder}</div>;
}



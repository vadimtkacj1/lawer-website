"use client";

import { RefObject, useEffect } from "react";

const TOUCH_QUERY = "(hover: none) and (pointer: coarse)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** Pixels per second — roughly the pace of the desktop CSS marquee. */
const DEFAULT_SPEED = 26;

/** How long the strip stays still after the visitor stops dragging it. */
const RESUME_DELAY = 2500;

/**
 * Keeps a marquee moving on touch devices by scrolling its viewport, not by
 * transforming its track.
 *
 * The CSS transform animation is deliberately off on touch (see mobile.css): a
 * continuously transformed element is held by the compositor as one texture the
 * size of the *whole* track — thousands of pixels wide — and exhausting the GPU
 * budget that way is what made the page blink mid-scroll. A native scroll
 * container has no such cost: only the tiles near the viewport are rasterised.
 *
 * The element must contain exactly two identical copies of the list, so wrapping
 * by one copy width is invisible.
 */
export function useMarqueeAutoScroll(
  ref: RefObject<HTMLElement | null>,
  direction: "left" | "right" = "left",
  speed: number = DEFAULT_SPEED,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Desktop keeps the CSS animation, and a visitor who asked for reduced
    // motion gets a strip that only moves when they swipe it.
    if (!window.matchMedia(TOUCH_QUERY).matches) return;
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    let frame = 0;
    let previous = 0;
    let heldUntil = 0;
    let held = false;
    let onScreen = true;
    let stalePosition = false;

    // Width of one copy of the list, and the current offset — both kept in
    // variables so the frame loop only ever *writes*. Reading `scrollWidth` or
    // `scrollLeft` per frame forces a synchronous layout every frame, which is
    // the cost this whole approach exists to avoid. They are re-read from the
    // DOM only when the visitor has moved the strip themselves or it resizes.
    let span = el.scrollWidth / 2;
    // A right-moving row starts one copy in, so it has somewhere to travel to.
    let position = direction === "right" ? span : 0;
    el.scrollLeft = position;

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);

      const elapsed = previous ? now - previous : 0;
      previous = now;

      if (held || now < heldUntil || !onScreen || document.hidden) return;
      if (span <= 0) return;

      // One read, on the first frame after a swipe: picks up wherever the
      // finger (and its momentum) left the strip instead of snapping back.
      if (stalePosition) {
        position = el.scrollLeft;
        stalePosition = false;
      }

      // Capped so a single long frame drifts instead of jumping.
      position += (Math.min(elapsed, 50) / 1000) * speed * (direction === "left" ? 1 : -1);

      if (position >= span) position -= span;
      else if (position < 0) position += span;

      el.scrollLeft = position;
    };

    // While a finger is down — and for a moment after, so momentum can play out
    // — the visitor owns the scroll position.
    const hold = () => {
      held = true;
      stalePosition = true;
    };
    const release = () => {
      held = false;
      heldUntil = performance.now() + RESUME_DELAY;
    };

    el.addEventListener("touchstart", hold, { passive: true });
    el.addEventListener("touchend", release, { passive: true });
    el.addEventListener("touchcancel", release, { passive: true });

    // Nothing is written while the row is off-screen, so scrolling past the
    // section costs nothing.
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
      },
      { rootMargin: "100px 0px" },
    );
    observer.observe(el);

    // Re-measure only when the strip actually changes size — a breakpoint
    // change swaps the card width, an orientation change swaps the viewport.
    const resizeObserver = new ResizeObserver(() => {
      span = el.scrollWidth / 2;
      stalePosition = true;
    });
    resizeObserver.observe(el);
    if (el.firstElementChild) resizeObserver.observe(el.firstElementChild);

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      el.removeEventListener("touchstart", hold);
      el.removeEventListener("touchend", release);
      el.removeEventListener("touchcancel", release);
    };
  }, [ref, direction, speed]);
}

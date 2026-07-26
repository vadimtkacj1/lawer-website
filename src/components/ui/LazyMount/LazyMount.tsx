"use client";

import { CSSProperties, ReactNode } from "react";

type LazyMountProps = {
  children: ReactNode;
  /**
   * @deprecated Kept for API compatibility. No longer gates rendering.
   * Previously controlled the IntersectionObserver trigger distance.
   */
  rootMargin?: string;
  /**
   * @deprecated Kept for API compatibility. No longer rendered.
   * Content is now present in the server HTML, so no placeholder is needed.
   */
  placeholder?: ReactNode;
  /**
   * Intrinsic size hint for `content-visibility: auto`, used to keep the
   * scrollbar stable while the section is still offscreen. The `auto` keyword
   * lets the browser remember the real size after the first render.
   */
  intrinsicSize?: string;
};

type LazySectionStyle = CSSProperties & { "--lazy-section-size"?: string };

/**
 * Renders its children directly in the server-rendered HTML so the content is
 * crawlable and indexable by search engines and AI crawlers (which do not
 * scroll), while still skipping layout/paint work for offscreen sections via
 * CSS `content-visibility: auto`.
 *
 * This replaces the previous IntersectionObserver mount-gating, which only set
 * `mounted = true` after a real user scrolled the element into view. Because
 * SSR (and Googlebot's initial fetch) ran with `mounted = false`, the actual
 * section content never appeared in the HTML — the homepage shipped only empty
 * placeholders, hiding body text, internal links, the visible FAQ and the
 * testimonials that back the review schema from search engines.
 *
 * The skipping itself lives in the `.lazy-section` class rather than in an
 * inline style, so it can be turned off for touch devices — on mobile the
 * re-layout of a skipped section entering the viewport is visible as a blank
 * flash and a scroll jump.
 */
export default function LazyMount({
  children,
  intrinsicSize = "auto 600px",
}: LazyMountProps) {
  return (
    <div
      className="lazy-section"
      style={{ "--lazy-section-size": intrinsicSize } as LazySectionStyle}
    >
      {children}
    </div>
  );
}

"use client";

import { ReactNode } from "react";

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
 */
export default function LazyMount({
  children,
  intrinsicSize = "auto 600px",
}: LazyMountProps) {
  return (
    <div
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: intrinsicSize,
      }}
    >
      {children}
    </div>
  );
}

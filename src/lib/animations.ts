import { Variants } from "framer-motion";

/**
 * Scroll-reveal motion.
 *
 * These variants deliberately never start at `opacity: 0`. Two reasons, both
 * still true after this refresh:
 *
 * 1. SSR safety / SEO. `AnimatedSection` (and the ~90 direct consumers) render
 *    with `initial="hidden"`, so the hidden variant is what ends up in the
 *    server HTML. If it carried `opacity: 0`, crawlers and no-JS visitors would
 *    receive invisible content — unacceptable on this SEO-first site. A hidden
 *    state of `opacity: 1` + a transform keeps every word painted in the markup;
 *    without JS the block simply sits a few px off and never animates.
 *
 * 2. No "blink-in" on fast scroll. A fade that starts transparent is visibly
 *    translucent for hundreds of ms while it crosses the viewport. Carrying the
 *    reveal on a transform instead means the content is at full strength from
 *    the first frame; only its position/scale animates, which can never leave a
 *    blank band no matter how fast the user scrolls.
 *
 * What changed: the motion used to be a barely-there 8-10px nudge over 220ms.
 * It now reads as a proper, graceful reveal — a longer rise (and a subtle
 * scale-settle on cards) over ~500ms on an ease-out cubic, with a visible
 * stagger so grids cascade in rather than snapping as one block. The curve is
 * an ease-out *cubic* (not expo/quint): expo leaves at near-full speed and
 * stops abruptly, which reads as a flick; cubic decelerates gently, so the
 * reveal registers as content settling into place.
 *
 * All of this runs on desktop only — `AnimatedSection` returns a plain div on
 * touch devices and `MotionProvider` forces reduced-motion there — so the
 * richer timing costs nothing on the phones this site targets.
 */

const EASE = [0.33, 1, 0.68, 1] as const;

// One rhythm for the whole site. Sections settle over `SLIDE`; individual
// items (grid/stagger children) settle a touch quicker so a cascade still
// finishes promptly.
const SLIDE = { duration: 0.5, ease: EASE };
const SLIDE_ITEM = { duration: 0.44, ease: EASE };

// Same transition for the handful of places that animate inline instead of
// through the variants below, so the whole site settles at one speed.
export const slideTransition = SLIDE;

// `margin` maps to IntersectionObserver's rootMargin: a positive bottom value
// grows the root downwards so the reveal starts just before the element rises
// into view and is settling by the time it is comfortably on screen.
export const viewportOptions = {
  once: true,
  margin: "0px 0px 220px 0px",
};

export const viewportEarly = {
  once: true,
  margin: "0px 0px 320px 0px",
};

export const viewportDelayed = {
  once: true,
  margin: "0px 0px 100px 0px",
};

export const fadeInUp: Variants = {
  hidden: { opacity: 1, y: 24 },
  visible: { opacity: 1, y: 0, transition: SLIDE },
};

export const fadeInUpFast: Variants = {
  hidden: { opacity: 1, y: 16 },
  visible: { opacity: 1, y: 0, transition: SLIDE_ITEM },
};

// Directional variants stay on the vertical axis: a horizontal translate can
// contribute to the scrollable overflow region (a transient horizontal
// scrollbar), and in RTL the "from" side is easy to get backwards. Keeping them
// as a rise keeps the whole page revealing in one coherent direction.
export const fadeInRight: Variants = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, y: 0, transition: SLIDE },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, y: 0, transition: SLIDE },
};

export const fadeIn: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

// Cards get a rise plus a subtle scale-settle — the element grows the last 3%
// into place, which reads as it "arriving" rather than just sliding. Opacity
// stays at 1 throughout, so it remains SSR/no-JS safe.
export const scaleIn: Variants = {
  hidden: { opacity: 1, y: 18, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: SLIDE },
};

// A visible-but-brief cascade. The old 0.03s step was imperceptible; 0.07s lets
// the eye follow items in without the tail dragging (a 4-item row is fully
// settled ~0.7s after the first item starts).
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.02 },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 1, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: SLIDE_ITEM },
};

// Kept for API compatibility — no actual parallax applied
export const parallaxVariants = (_speed: number = 0.5): Variants => ({
  hidden: { y: 0 },
  visible: { y: 0, transition: { duration: 0 } },
});

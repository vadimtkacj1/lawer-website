import { Variants } from "framer-motion";

/**
 * Scroll-reveal motion.
 *
 * These variants deliberately never start at `opacity: 0`.
 *
 * A reveal that fades from transparent can only avoid being seen mid-fade if it
 * finishes before the element reaches the viewport. At a normal scroll speed
 * (~3000px/s measured) a 400-500ms fade cannot: the element is on screen for
 * hundreds of milliseconds while still translucent, which reads as content
 * blinking in. Widening the IntersectionObserver margin does not fix it either
 * — the pre-roll needed is so large the animation would play entirely offscreen.
 *
 * So the motion is carried by a short upward translate instead. Text is painted
 * at full strength from the first frame, and the only thing that animates is
 * position, which cannot produce a blank band no matter how fast the user
 * scrolls.
 *
 * The travel is deliberately small and the curve is an ease-out cubic rather
 * than an ease-out expo: expo leaves at near-full speed and stops abruptly,
 * which reads as a flick at these short distances. Cubic decelerates gently, so
 * the reveal registers as content settling rather than as a separate animation.
 */

const EASE = [0.33, 1, 0.68, 1] as const;
const SLIDE = { duration: 0.22, ease: EASE };

// Same transition for the handful of places that animate inline instead of
// through the variants below, so the whole site settles at one speed.
export const slideTransition = SLIDE;

// `margin` maps to IntersectionObserver's rootMargin: a positive bottom value
// grows the root downwards so the slide starts just before the element rises
// into view.
export const viewportOptions = {
  once: true,
  margin: "0px 0px 200px 0px",
};

export const viewportEarly = {
  once: true,
  margin: "0px 0px 300px 0px",
};

export const viewportDelayed = {
  once: true,
  margin: "0px 0px 80px 0px",
};

export const fadeInUp: Variants = {
  hidden: { opacity: 1, y: 10 },
  visible: { opacity: 1, y: 0, transition: SLIDE },
};

export const fadeInUpFast: Variants = {
  hidden: { opacity: 1, y: 8 },
  visible: { opacity: 1, y: 0, transition: SLIDE },
};

// Fade-only variants (no x translation — kept for API compatibility)
export const fadeInRight: Variants = {
  hidden: { opacity: 1, y: 8 },
  visible: { opacity: 1, y: 0, transition: SLIDE },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 1, y: 8 },
  visible: { opacity: 1, y: 0, transition: SLIDE },
};

export const fadeIn: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 1, y: 8 },
  visible: { opacity: 1, y: 0, transition: SLIDE },
};

// Stagger is kept short. The previous 0.08s step plus a 0.5s child fade meant a
// six-item grid took over a second to finish arriving, and every item below the
// first was visibly translucent for most of it. At 0.03s a six-item grid is
// fully settled ~370ms after the first item starts.
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0 },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 1, y: 8 },
  visible: { opacity: 1, y: 0, transition: SLIDE },
};

// Kept for API compatibility — no actual parallax applied
export const parallaxVariants = (_speed: number = 0.5): Variants => ({
  hidden: { y: 0 },
  visible: { y: 0, transition: { duration: 0 } },
});

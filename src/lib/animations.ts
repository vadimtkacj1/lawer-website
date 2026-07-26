import { Variants } from "framer-motion";

// Viewport defaults — once:true so elements animate in only once.
//
// `margin` maps to IntersectionObserver's rootMargin, so a POSITIVE bottom
// value grows the root downwards and the reveal starts while the element is
// still below the fold. The previous values did the opposite: `amount: 0.2`
// waited until a fifth of the block was on screen, and the negative margins
// shrank the root so it fired even later. Either way the top of the section
// was already visible at opacity 0 — read by the user as a blink on scroll.
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInUpFast: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Fade-only variants (no x translation — kept for API compatibility)
export const fadeInRight: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Kept for API compatibility — no actual parallax applied
export const parallaxVariants = (_speed: number = 0.5): Variants => ({
  hidden: { y: 0 },
  visible: { y: 0, transition: { duration: 0 } },
});

import { Variants } from "framer-motion";

// Mobile detection - animations will be completely disabled on mobile for better performance
const isMobile = typeof window !== 'undefined' && (
  'ontouchstart' in window || 
  window.navigator.maxTouchPoints > 0 || 
  window.innerWidth <= 768
);

// Check for reduced motion preference
const prefersReducedMotion = typeof window !== 'undefined' && 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Disable animations if user prefers reduced motion
const shouldAnimate = !isMobile && !prefersReducedMotion;

// Fade in from bottom with scale - DISABLED on mobile and reduced motion for performance
export const fadeInUp: Variants = {
  hidden: {
    opacity: shouldAnimate ? 0 : 1,
    y: shouldAnimate ? 50 : 0,
    scale: 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: shouldAnimate ? 0.4 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from bottom - faster version for headings - DISABLED on mobile and reduced motion
export const fadeInUpFast: Variants = {
  hidden: {
    opacity: shouldAnimate ? 0 : 1,
    y: shouldAnimate ? 30 : 0,
    scale: 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: shouldAnimate ? 0.5 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from right (for RTL Hebrew sites) - DISABLED on mobile and reduced motion
export const fadeInRight: Variants = {
  hidden: {
    opacity: shouldAnimate ? 0 : 1,
    x: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: shouldAnimate ? 0.5 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from left (for RTL Hebrew sites) - DISABLED on mobile and reduced motion
export const fadeInLeft: Variants = {
  hidden: {
    opacity: shouldAnimate ? 0 : 1,
    x: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: shouldAnimate ? 0.5 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Simple fade in - DISABLED on mobile and reduced motion
export const fadeIn: Variants = {
  hidden: {
    opacity: shouldAnimate ? 0 : 1,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: shouldAnimate ? 0.4 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Scale and fade in - for images - DISABLED on mobile and reduced motion
export const scaleIn: Variants = {
  hidden: {
    opacity: shouldAnimate ? 0 : 1,
    scale: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: shouldAnimate ? 0.5 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Stagger container - for lists of items - DISABLED on mobile and reduced motion
export const staggerContainer: Variants = {
  hidden: { opacity: shouldAnimate ? 0 : 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldAnimate ? 0.08 : 0,
      delayChildren: shouldAnimate ? 0.05 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fast stagger for many items - DISABLED on mobile and reduced motion
export const staggerContainerFast: Variants = {
  hidden: { opacity: shouldAnimate ? 0 : 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldAnimate ? 0.1 : 0,
      delayChildren: shouldAnimate ? 0.08 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Item to be used inside stagger container - DISABLED on mobile and reduced motion
export const staggerItem: Variants = {
  hidden: {
    opacity: shouldAnimate ? 0 : 1,
    y: 0,
    scale: 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: shouldAnimate ? 0.5 : 0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Parallax scroll effect helper
export const parallaxVariants = (speed: number = 0.5): Variants => ({
  hidden: { y: 0 },
  visible: {
    y: 0,
    transition: {
      duration: 0,
    },
  },
});

// View transition helper for scroll-triggered animations - optimized for performance
export const viewportOptions = {
  once: true, // Only animate once for better performance
  margin: shouldAnimate ? "0px" : "0px", // Reduced margin for better performance
  amount: shouldAnimate ? 0.2 : 0.1, // Less strict trigger when animations disabled
};

// Aggressive viewport for elements that should animate early
export const viewportEarly = {
  once: true,
  margin: "-40px",
  amount: 0.15,
};

// Delayed viewport for elements that should wait
export const viewportDelayed = {
  once: true,
  margin: "-150px",
  amount: 0.4,
};

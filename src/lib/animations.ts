import { Variants } from "framer-motion";

// Fade in from bottom with scale - optimized for performance
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from bottom - faster version for headings - optimized
export const fadeInUpFast: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from right (for RTL Hebrew sites)
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // Ultra-smooth easing
    },
  },
};

// Fade in from left (for RTL Hebrew sites)
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // Ultra-smooth easing
    },
  },
};

// Simple fade in
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Ultra-smooth easing
    },
  },
};

// Scale and fade in - for images
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1], // Ultra-smooth easing
    },
  },
};

// Stagger container - for lists of items - optimized for performance
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fast stagger for many items
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
      ease: [0.22, 1, 0.36, 1], // Ultra-smooth easing
    },
  },
};

// Item to be used inside stagger container - optimized for performance
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
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
  margin: "0px", // Reduced margin for better performance
  amount: 0.2, // Optimized amount
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

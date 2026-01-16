import { Variants } from "framer-motion";

// Mobile-optimized animations with reduced values for better performance
const isMobile = typeof window !== 'undefined' && (
  'ontouchstart' in window || 
  window.navigator.maxTouchPoints > 0 || 
  window.innerWidth <= 768
);

// Fade in from bottom with scale - optimized for performance
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: isMobile ? 20 : 50,
    scale: isMobile ? 0.98 : 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: isMobile ? 0.25 : 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from bottom - faster version for headings - optimized
export const fadeInUpFast: Variants = {
  hidden: {
    opacity: 0,
    y: isMobile ? 15 : 30,
    scale: isMobile ? 0.99 : 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: isMobile ? 0.3 : 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from right (for RTL Hebrew sites)
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: isMobile ? -20 : -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: isMobile ? 0.3 : 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from left (for RTL Hebrew sites)
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: isMobile ? 20 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: isMobile ? 0.3 : 0.5,
      ease: [0.22, 1, 0.36, 1],
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
      duration: isMobile ? 0.25 : 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Scale and fade in - for images
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: isMobile ? 0.95 : 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: isMobile ? 0.3 : 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Stagger container - for lists of items - optimized for performance
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isMobile ? 0.05 : 0.08,
      delayChildren: isMobile ? 0.02 : 0.05,
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
    y: isMobile ? 15 : 25,
    scale: isMobile ? 0.98 : 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: isMobile ? 0.3 : 0.5,
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
  margin: isMobile ? "0px" : "0px", // Reduced margin for better performance
  amount: isMobile ? 0.1 : 0.2, // Less strict trigger for mobile
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

import { Variants } from "framer-motion";

// Mobile detection - animations will be completely disabled on mobile for better performance
const isMobile = typeof window !== 'undefined' && (
  'ontouchstart' in window || 
  window.navigator.maxTouchPoints > 0 || 
  window.innerWidth <= 768
);

// Log animation status for debugging
if (typeof window !== 'undefined') {
  console.log('🎬 Animation System:', isMobile ? '📱 Mobile Mode - Animations DISABLED' : '🖥️ Desktop Mode - Animations ENABLED');
}

// Fade in from bottom with scale - DISABLED on mobile for performance
export const fadeInUp: Variants = {
  hidden: {
    opacity: isMobile ? 1 : 0,
    y: isMobile ? 0 : 50,
    scale: 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: isMobile ? 0 : 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from bottom - faster version for headings - DISABLED on mobile
export const fadeInUpFast: Variants = {
  hidden: {
    opacity: isMobile ? 1 : 0,
    y: isMobile ? 0 : 30,
    scale: 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: isMobile ? 0 : 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from right (for RTL Hebrew sites) - DISABLED on mobile
export const fadeInRight: Variants = {
  hidden: {
    opacity: isMobile ? 1 : 0,
    x: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: isMobile ? 0 : 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from left (for RTL Hebrew sites) - DISABLED on mobile
export const fadeInLeft: Variants = {
  hidden: {
    opacity: isMobile ? 1 : 0,
    x: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: isMobile ? 0 : 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Simple fade in - DISABLED on mobile
export const fadeIn: Variants = {
  hidden: {
    opacity: isMobile ? 1 : 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: isMobile ? 0 : 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Scale and fade in - for images - DISABLED on mobile
export const scaleIn: Variants = {
  hidden: {
    opacity: isMobile ? 1 : 0,
    scale: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: isMobile ? 0 : 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Stagger container - for lists of items - DISABLED on mobile
export const staggerContainer: Variants = {
  hidden: { opacity: isMobile ? 1 : 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isMobile ? 0 : 0.08,
      delayChildren: isMobile ? 0 : 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fast stagger for many items - DISABLED on mobile
export const staggerContainerFast: Variants = {
  hidden: { opacity: isMobile ? 1 : 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isMobile ? 0 : 0.1,
      delayChildren: isMobile ? 0 : 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Item to be used inside stagger container - DISABLED on mobile
export const staggerItem: Variants = {
  hidden: {
    opacity: isMobile ? 1 : 0,
    y: 0,
    scale: 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: isMobile ? 0 : 0.5,
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

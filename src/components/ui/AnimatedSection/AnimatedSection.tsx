"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, viewportOptions } from "@/lib/animations";
import { usePerformanceSettings } from "@/lib/usePerformanceSettings";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  viewport?: typeof viewportOptions;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  variants = fadeInUp,
  viewport = viewportOptions,
  delay = 0,
}: AnimatedSectionProps) {
  const { shouldDisableAnimations, shouldReduceAnimations, isMobile } = usePerformanceSettings();

  // CRITICAL: Completely disable animations on mobile for performance
  // Return plain div to avoid ANY framer-motion overhead
  if (shouldDisableAnimations || isMobile) {
    return <div className={className}>{children}</div>;
  }

  // Optimize viewport settings for mobile
  const optimizedViewport = isMobile
    ? {
        once: true,
        margin: "0px",
        amount: 0.05 // Much lower threshold for mobile
      }
    : viewport;

  // Add delay to variants if specified
  const variantsWithDelay = delay > 0
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible as any).transition,
            delay: shouldReduceAnimations ? delay * 0.3 : delay, // Even shorter delays
          },
        },
      }
    : variants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={optimizedViewport}
      variants={variantsWithDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

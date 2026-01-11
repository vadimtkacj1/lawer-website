"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, viewportOptions } from "@/lib/animations";

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
  // Add delay to variants if specified
  const variantsWithDelay = delay > 0
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible as any).transition,
            delay,
          },
        },
      }
    : variants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variantsWithDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

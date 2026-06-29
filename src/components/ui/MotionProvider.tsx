"use client";

import { MotionConfig, LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

// Wraps the app in LazyMotion so all components use the lightweight `m`
// components and only the `domAnimation` feature set (~17 KB) is bundled,
// instead of the full framer-motion runtime. MotionConfig preserves the
// reduced-motion preference. Must be a client component because `domAnimation`
// is a function and cannot cross the server/client boundary as a prop.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}

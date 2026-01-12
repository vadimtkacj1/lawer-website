"use client";

import { memo, useEffect, useState } from "react";

interface DecorativeShapesProps {
  variant?: "default" | "hero" | "services" | "contact";
}

function DecorativeShapes({ variant = "default" }: DecorativeShapesProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only render on desktop and if user hasn't disabled animations
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    
    // Skip on mobile, reduced motion, or low-end devices
    if (isMobile || prefersReducedMotion || isLowEnd) {
      setShouldRender(false);
      return;
    }

    // Delay render to not block initial paint
    const timer = setTimeout(() => setShouldRender(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Simplified shapes - NO blur, just gradients (much cheaper)
  const shapes = {
    hero: (
      <>
        <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-blue-dk/2 to-transparent rounded-full opacity-60" />
        <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-tl from-blue-dk/2 to-transparent rounded-full opacity-60" />
      </>
    ),
    services: (
      <>
        <div className="absolute top-0 right-0 w-80 md:w-96 h-80 md:h-96 bg-gradient-to-bl from-blue-dk/2 to-transparent rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 w-80 md:w-96 h-80 md:h-96 bg-gradient-to-tr from-blue-dk/2 to-transparent rounded-full opacity-50" />
      </>
    ),
    contact: (
      <>
        <div className="absolute top-1/3 left-0 w-96 md:w-[32rem] h-96 md:h-[32rem] bg-gradient-to-r from-blue-dk/3 via-blue-dk/2 to-transparent rounded-full opacity-40" />
        <div className="absolute bottom-1/3 right-0 w-96 md:w-[32rem] h-96 md:h-[32rem] bg-gradient-to-l from-blue-dk/3 via-blue-dk/2 to-transparent rounded-full opacity-40" />
      </>
    ),
    default: (
      <>
        <div className="absolute top-0 left-0 w-80 md:w-96 h-80 md:h-96 bg-gradient-to-br from-blue-dk/2 to-transparent rounded-full opacity-50" />
        <div className="absolute bottom-0 right-0 w-80 md:w-96 h-80 md:h-96 bg-gradient-to-tl from-blue-dk/2 to-transparent rounded-full opacity-50" />
      </>
    ),
  };

  if (!shouldRender) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes[variant]}
    </div>
  );
}

export default memo(DecorativeShapes);

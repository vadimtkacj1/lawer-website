"use client";

import { useEffect, useState, useMemo } from "react";

export default function FullScreenLoader() {
  const [isLoading, setIsLoading] = useState(true);

  // Generate random dots positions and animations only once - reduced from 20 to 5 for performance
  const dots = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 6,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 2.5 + 2,
      delay: Math.random() * 1.5,
    }));
  }, []);

  useEffect(() => {
    // Hide loader when page is fully loaded
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-cream flex items-center justify-center overflow-hidden">
      {/* Gray dots only */}
      <div className="absolute inset-0 opacity-30">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full bg-gray-400 loader-float-dot"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animationDuration: `${dot.duration}s`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

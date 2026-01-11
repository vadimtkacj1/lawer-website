"use client";

import { useEffect, useState, useMemo } from "react";

export default function FullScreenLoader() {
  const [isLoading, setIsLoading] = useState(true);

  // Generate random dots positions and animations only once
  const dots = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 4,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
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
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-30">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full bg-blue-dk loader-float-dot"
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

      {/* Main spinner container */}
      <div className="relative flex flex-col items-center gap-4">
        {/* Multiple spinning rings */}
        <div className="relative w-24 h-24">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-dk rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
          {/* Middle ring */}
          <div className="absolute inset-2 border-4 border-transparent border-t-orange rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
          {/* Inner ring */}
          <div className="absolute inset-4 border-4 border-transparent border-t-blue-dk/60 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-orange rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="flex items-center gap-2">
          <span className="text-blue-dk font-black text-xl">טוען</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-orange rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
            <span className="w-2 h-2 bg-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-orange rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>
      </div>

    </div>
  );
}

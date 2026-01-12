"use client";
import React, { useMemo, memo } from "react";

interface MarqueeProps {
  dataArray: string[];
  dataType?: "image" | "text";
  speed?: number; // Чим більше число, тим повільніше (секунди на повне коло)
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
}

function InfiniteMarquee({
  dataArray,
  dataType = "image",
  speed = 20,
  direction = "left",
  className = "",
  pauseOnHover = true,
}: MarqueeProps) {
  // Подвоюємо масив для нескінченної анімації
  const duplicatedData = useMemo(() => [...dataArray, ...dataArray], [dataArray]);
  
  // Використовуємо CSS анімацію замість framer-motion для кращої продуктивності
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";
  const animationClass = `marquee-${direction}`;

  return (
    <>
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .marquee-container {
          animation: ${animationName} ${speed}s linear infinite;
        }

        .marquee-container:hover {
          animation-play-state: ${pauseOnHover ? "paused" : "running"};
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-container {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>
      
      <div className={`relative w-full overflow-hidden bg-transparent py-6 ${className}`}>
        {/* Градієнтне затінення по краях */}
        <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className={`flex w-max gap-12 px-6 marquee-container ${animationClass}`}>
          {duplicatedData.map((item, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center"
            >
              {dataType === "image" ? (
                <img
                  src={item}
                  alt={`logo-${index}`}
                  className="h-12 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-[opacity,filter] duration-200"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="text-2xl font-bold whitespace-nowrap text-gray-800">
                  {item}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default memo(InfiniteMarquee);
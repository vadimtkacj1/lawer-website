"use client";
import React, { useMemo, memo } from "react";
import { m } from "framer-motion";
import { usePerformanceSettings } from "@/lib/usePerformanceSettings";

interface MarqueeItem {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface MarqueeProps {
  dataArray: (string | MarqueeItem)[];
  dataType?: "image" | "text";
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  preserveColors?: boolean;
}

function InfiniteMarquee({
  dataArray,
  dataType = "image",
  speed = 40,
  direction = "left",
  className = "",
  preserveColors = false,
}: MarqueeProps) {
  // Triple the data to ensure there's always enough content to fill the screen during animation
  const duplicatedData = useMemo(() => [...dataArray, ...dataArray, ...dataArray], [dataArray]);
  const { isMobile } = usePerformanceSettings();

  // Adjust duration based on performance settings
  const duration = isMobile ? speed * 1.5 : speed;

  return (
    <div 
      className={`relative w-full overflow-hidden py-6 md:py-12 ${className}`}
      style={{ 
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        direction: 'ltr' 
      }}
    >
      <m.div
        className="flex w-max items-center gap-8 md:gap-20"
        initial={{ x: direction === "left" ? 0 : "-33.33%" }}
        animate={{ x: direction === "left" ? "-33.33%" : 0 }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        // Only pause on hover if device has a mouse
        whileHover={{ animationPlayState: "paused" }} 
      >
        {duplicatedData.map((item, index) => (
          <div key={index} className="flex-shrink-0 flex items-center justify-center">
            {dataType === "image" ? (
              <img
                src={typeof item === 'string' ? item : item.src}
                alt={typeof item === 'string' ? "" : (item.alt || "")}
                width={typeof item !== 'string' ? item.width : undefined}
                height={typeof item !== 'string' ? item.height : undefined}
                className={`h-8 md:h-14 w-auto object-contain transition-all duration-500 
                  ${preserveColors ? "grayscale-0 opacity-100" : "grayscale opacity-60 hover:grayscale-0 hover:opacity-100"}
                  hover:scale-110 active:scale-110`}
                loading="eager"
              />
            ) : (
              <p className="whitespace-nowrap rounded-full border border-white/20 bg-[#141414] px-6 py-3 font-semibold text-white md:text-lg">
                {typeof item === 'string' ? item : ''}
              </p>
            )}
          </div>
        ))}
      </m.div>
    </div>
  );
}

export default memo(InfiniteMarquee);
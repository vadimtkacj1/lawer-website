"use client";
import React, { useMemo, memo } from "react";

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

/**
 * Driven by a CSS keyframe rather than Framer Motion.
 *
 * Framer could not run this strip on a phone at all: the mobile stylesheet
 * forces `transform: none` on every `[data-projection-id]` element, and
 * MotionProvider reports reduced motion on touch devices — between the two, the
 * track was pinned at its initial offset and the logos just sat there. A CSS
 * animation is not subject to either, composites off the main thread, and the
 * strip is small enough (a few thousand pixels of 32px-tall logos) that holding
 * it as a compositor texture costs a fraction of what the testimonial rows did.
 */
function InfiniteMarquee({
  dataArray,
  dataType = "image",
  speed = 40,
  direction = "left",
  className = "",
  preserveColors = false,
}: MarqueeProps) {
  // Tripled so there is always enough content to fill the screen; the keyframe
  // travels exactly -33.333%, which lands on the start of the second copy.
  const duplicatedData = useMemo(() => [...dataArray, ...dataArray, ...dataArray], [dataArray]);

  return (
    <div
      className={`relative w-full overflow-hidden py-6 md:py-12 ${className}`}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        direction: 'ltr'
      }}
    >
      <div
        className="logo-marquee-track flex w-max items-center gap-8 md:gap-20 animate-banks-scroll hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{
          animationDuration: `${speed}s`,
          // "right" is the same keyframe played backwards, so it also starts
          // one copy in — no separate keyframe needed.
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
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
                loading="lazy"
                decoding="async"
              />
            ) : (
              <p className="whitespace-nowrap rounded-full border border-white/20 bg-[#141414] px-6 py-3 font-semibold text-white md:text-lg">
                {typeof item === 'string' ? item : ''}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(InfiniteMarquee);

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  dataArray: string[];
  dataType?: "image" | "text";
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function InfiniteMarquee({
  dataArray,
  dataType = "image",
  speed = 30,
  direction = "right",
  className = "",
}: MarqueeProps) {
  // Увеличиваем количество повторений, чтобы заполнить любой экран без дырок
  const items = [...dataArray, ...dataArray, ...dataArray, ...dataArray];
  
  // Состояние для паузы
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className={`flex overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex flex-nowrap shrink-0 items-center gap-12"
        initial={{ x: direction === "right" ? "-50%" : "0%" }}
        animate={{ x: direction === "right" ? "0%" : "-50%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        // Эта строка заставляет анимацию замирать при наведении
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center justify-center px-4"
          >
            {dataType === "image" ? (
              <img
                src={item}
                alt={`logo-${index}`}
                className="h-10 w-auto max-w-[130px] object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ) : (
              <span className="text-xl font-bold">{item}</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
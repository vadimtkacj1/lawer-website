"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Instant tracking for inner dot
  const innerX = cursorX;
  const innerY = cursorY;

  // Smooth spring animation for outer circle (with lag)
  const springConfig = { damping: 30, stiffness: 200 };
  const outerX = useSpring(cursorX, springConfig);
  const outerY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.style.cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer large circle - follows with smooth lag */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-40"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: isHovering ? 60 : 50,
            height: isHovering ? 60 : 50,
            backgroundColor: isHovering ? "#1c3664" : "#f26722",
            opacity: isHovering ? 0.25 : 0.15,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
        />
      </motion.div>

      {/* Inner small dot - follows cursor instantly */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50"
        style={{
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: isHovering ? 10 : 8,
            height: isHovering ? 10 : 8,
            backgroundColor: "#f26722",
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 400,
          }}
        />
      </motion.div>
    </>
  );
}

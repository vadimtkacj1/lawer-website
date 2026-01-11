"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const rafRef = useRef<number | null>(null);
  const lastPointRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const lastHoverCheckAtRef = useRef<number>(0);

  // Instant tracking for inner dot
  const innerX = cursorX;
  const innerY = cursorY;

  // Smooth spring animation for outer circle (with lag) - оптимізована конфігурація
  const springConfig = { damping: 35, stiffness: 150 };
  const outerX = useSpring(cursorX, springConfig);
  const outerY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const update = () => {
      rafRef.current = null;
      cursorX.set(lastPointRef.current.x);
      cursorY.set(lastPointRef.current.y);
    };

    const onPointerMove = (e: PointerEvent) => {
      lastPointRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(update);
      }

      // Hover detection is expensive if done too often; check at most ~10x/sec
      const now = performance.now();
      if (now - lastHoverCheckAtRef.current < 100) return;
      lastHoverCheckAtRef.current = now;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        target.getAttribute("role") === "button";

      setIsHovering(interactive);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
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
          willChange: "transform",
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
            damping: 25,
            stiffness: 250,
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
          willChange: "transform",
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
            damping: 30,
            stiffness: 350,
          }}
        />
      </motion.div>
    </>
  );
}
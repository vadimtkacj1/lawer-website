"use client";

import { m } from "framer-motion";
import { usePerformanceSettings } from "@/lib/usePerformanceSettings";

export default function CityBackgroundSVG() {
  const { isMobile } = usePerformanceSettings();
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Modern Office Buildings - Back Layer */}
      <g opacity="0.5">
        <rect x="50" y="500" width="120" height="400" fill="#0F2344" rx="4" />
        <rect x="200" y="400" width="140" height="500" fill="#0F2344" rx="4" />
        <rect x="370" y="450" width="110" height="450" fill="#0F2344" rx="4" />
        <rect x="510" y="350" width="160" height="550" fill="#0F2344" rx="4" />
        <rect x="700" y="300" width="130" height="600" fill="#0F2344" rx="4" />
        <rect x="860" y="380" width="150" height="520" fill="#0F2344" rx="4" />
        <rect x="1040" y="320" width="140" height="580" fill="#0F2344" rx="4" />
        <rect x="1210" y="420" width="120" height="480" fill="#0F2344" rx="4" />
        <rect x="1360" y="480" width="130" height="420" fill="#0F2344" rx="4" />
      </g>

      {/* Modern Office Buildings - Front Layer with Windows */}
      <g opacity="0.75">
        {/* Building 1 */}
        <rect x="80" y="520" width="150" height="380" fill="#1a3a5c" rx="6" />
        <g fill="#F1662A" opacity="0.85">
          {[...Array(5)].map((_, i) =>
            [...Array(7)].map((_, j) => (
              <rect
                key={`b1-${i}-${j}`}
                x={95 + i * 28}
                y={540 + j * 50}
                width="18"
                height="28"
                rx="2"
              />
            ))
          )}
        </g>

        {/* Building 2 - Tall */}
        <rect x="280" y="280" width="180" height="620" fill="#1a3a5c" rx="6" />
        <g fill="#F1662A" opacity="0.9">
          {[...Array(6)].map((_, i) =>
            [...Array(11)].map((_, j) => (
              <rect
                key={`b2-${i}-${j}`}
                x={300 + i * 28}
                y={300 + j * 52}
                width="18"
                height="30"
                rx="2"
              />
            ))
          )}
        </g>

        {/* Building 3 */}
        <rect x="500" y="380" width="140" height="520" fill="#1a3a5c" rx="6" />
        <g fill="#F1662A" opacity="0.88">
          {[...Array(4)].map((_, i) =>
            [...Array(9)].map((_, j) => (
              <rect
                key={`b3-${i}-${j}`}
                x={518 + i * 30}
                y={400 + j * 54}
                width="20"
                height="32"
                rx="2"
              />
            ))
          )}
        </g>

        {/* Building 4 - Modern Tower */}
        <rect x="680" y="200" width="190" height="700" fill="#1a3a5c" rx="6" />
        <g fill="#F1662A" opacity="0.92">
          {[...Array(6)].map((_, i) =>
            [...Array(13)].map((_, j) => (
              <rect
                key={`b4-${i}-${j}`}
                x={702 + i * 30}
                y={220 + j * 50}
                width="20"
                height="30"
                rx="2"
              />
            ))
          )}
        </g>

        {/* Building 5 */}
        <rect x="910" y="340" width="160" height="560" fill="#1a3a5c" rx="6" />
        <g fill="#F1662A" opacity="0.87">
          {[...Array(5)].map((_, i) =>
            [...Array(10)].map((_, j) => (
              <rect
                key={`b5-${i}-${j}`}
                x={928 + i * 30}
                y={360 + j * 52}
                width="20"
                height="32"
                rx="2"
              />
            ))
          )}
        </g>

        {/* Building 6 */}
        <rect x="1110" y="280" width="170" height="620" fill="#1a3a5c" rx="6" />
        <g fill="#F1662A" opacity="0.9">
          {[...Array(5)].map((_, i) =>
            [...Array(11)].map((_, j) => (
              <rect
                key={`b6-${i}-${j}`}
                x={1130 + i * 30}
                y={300 + j * 52}
                width="20"
                height="30"
                rx="2"
              />
            ))
          )}
        </g>

        {/* Building 7 */}
        <rect x="1320" y="420" width="150" height="480" fill="#1a3a5c" rx="6" />
        <g fill="#F1662A" opacity="0.86">
          {[...Array(4)].map((_, i) =>
            [...Array(8)].map((_, j) => (
              <rect
                key={`b7-${i}-${j}`}
                x={1340 + i * 32}
                y={440 + j * 56}
                width="22"
                height="34"
                rx="2"
              />
            ))
          )}
        </g>
      </g>

      {/* Floating Abstract Shapes for Commercial/Financial Feel */}
      <g opacity="0.45">
        {/* Circles */}
        <circle cx="1400" cy="150" r="60" fill="#F1662A" opacity="0.6" />
        <circle cx="200" cy="200" r="80" fill="#F1662A" opacity="0.5" />
        <circle cx="1500" cy="350" r="45" fill="#0F2344" opacity="0.7" />

        {/* Triangles */}
        <path d="M 100 100 L 180 100 L 140 40 Z" fill="#F1662A" opacity="0.6" />
        <path d="M 1300 100 L 1400 100 L 1350 20 Z" fill="#0F2344" opacity="0.65" />

        {/* Lines representing growth/charts */}
        <path
          d="M 50 700 L 200 650 L 350 680 L 500 600 L 650 550 L 800 580 L 950 520 L 1100 500 L 1250 530 L 1400 480 L 1550 450"
          stroke="#F1662A"
          strokeWidth="4"
          fill="none"
          opacity="0.7"
          strokeLinecap="round"
        />
        <path
          d="M 50 750 L 200 720 L 350 740 L 500 680 L 650 650 L 800 670 L 950 620 L 1100 600 L 1250 630 L 1400 590 L 1550 560"
          stroke="#0F2344"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
          strokeLinecap="round"
        />
      </g>

      {/* Animated dots/particles - Disabled on mobile for performance */}
      {!isMobile && [...Array(30)].map((_, i) => (
        <m.circle
          key={`dot-${i}`}
          cx={100 + (i * 50) % 1500}
          cy={50 + ((i * 137) % 800)}
          r={3 + (i % 4)}
          fill={i % 2 === 0 ? "#F1662A" : "#0F2344"}
          opacity={0.7}
          animate={{
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </svg>
  );
}

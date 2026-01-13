"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUpFast, staggerContainer, staggerItem } from "@/lib/animations";

// Optimized viewport - only animate once for better performance
const optimizedViewport = {
  once: true,
  margin: "0px",
  amount: 0.2,
};

const commercialServices = [
  {
    title: "איחוד הלוואות",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
      </svg>
    ),
  },
  {
    title: "מיחזור משכנתא",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
      </svg>
    ),
  },
  {
    title: "משכנתא ראשונה",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
        <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z" />
      </svg>
    ),
  },
  {
    title: "פתרונות מורכבים",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514Z" />
        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1V1Z" />
        <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
      </svg>
    ),
  },
  {
    title: "ייעוץ מקצועי",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
      </svg>
    ),
  },
];

export default function CommercialHero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Анимация текста при скролле - уходит вверх
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center bg-cream z-10 py-16 lg:py-24 overflow-hidden">
      {/* Animated Background with Commercial Theme */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none">
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

          {/* Animated dots/particles */}
          {[...Array(30)].map((_, i) => (
            <motion.circle
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
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-20">
        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
          style={{ y: textY, opacity: textOpacity }}
        >
          <div className="w-full text-center space-y-6 lg:space-y-8">
            <motion.h1
              className="font-noto-sans-hebrew font-black leading-[1.1]
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         text-blue-dk
                         mb-6 sm:mb-8
                         [text-shadow:_0_2px_20px_rgb(249_245_231_/_90%),_0_4px_40px_rgb(249_245_231_/_70%)]
                         relative px-4 py-2"
              variants={staggerItem}
            >
              יועץ משכנתאות בחולון והמרכז: המומחיות של יוצא מערכת הבנקאות אצלכם בכיס
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUpFast, staggerContainer, staggerItem } from "@/lib/animations";
import CityBackgroundSVG from "@/components/CityBackgroundSVG";

// Optimized viewport - only animate once for better performance
const optimizedViewport = {
  once: true,
  margin: "0px",
  amount: 0.2,
};

export default function DebtHero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Анимация текста при скролле - уходит вверх
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Функция для плавного скролла вниз
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center bg-cream z-10 py-16 lg:py-24 overflow-hidden">
      {/* Animated Background with City Theme */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none">
        <CityBackgroundSVG />
      </div>

      {/* Main Content Container */}
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
              משכנתא לכל מטרה: <br/>
              להפוך את הבית לכספומט <br/>
              הכי זול שתפגשו
            </motion.h1>
          </div>
        </motion.div>
      </div>

      {/* Scroll Button */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute bottom-6 left-0 right-0 flex flex-col items-center cursor-pointer z-30 group"
        onClick={scrollToNext}
      >
        {/* Text Label */}
        <motion.span
          animate={{ opacity: [0.8, 1, 0.8], y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="font-noto-sans-hebrew font-bold text-blue-dk text-xl sm:text-2xl mb-4 group-hover:text-orange-600 transition-colors"
        >
          המשך לקרוא
        </motion.span>

        <div className="relative flex items-center justify-center">
          {/* Animated Glow Halo */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
            className="absolute w-16 h-16 bg-orange-600/30 rounded-full"
          />

          {/* Bouncing Arrow */}
          <motion.div
            animate={{
                y: [0, 20, 0],
                scaleY: [1, 0.85, 1.15, 1]
            }}
            transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut"
            }}
            className="text-orange-600 drop-shadow-[0_5px_15px_rgba(241,102,42,0.4)]"
          >
            <svg
              width="65"
              height="65"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C12.5523 2 13 2.44772 13 3V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V3C11 2.44772 11.4477 2 12 2Z" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

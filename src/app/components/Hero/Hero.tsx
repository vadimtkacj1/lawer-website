"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, easeIn } from "framer-motion";

/**
 * HERO COMPONENT
 * Layout: Image on the left (lg:w-[65%]), Text on the right.
 * Background: Updated to Cream (#f9f7f4).
 */
export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // --- Scroll Animations ---
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -100], { ease: easeIn });
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0], { ease: easeIn });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const imageFilter = useTransform(scrollYProgress, [0, 0.6], ["brightness(1)", "brightness(0.35)"]);

  // Добавлено "as const", чтобы TypeScript не ругался на формат ease
  const entranceTransition = { duration: 1, ease: [0.22, 1, 0.36, 1] } as const;

  return (
    <section
      ref={sectionRef}
      // Main background set to Cream
      className="relative w-full min-h-[100dvh] lg:h-[110vh] overflow-hidden bg-cream"
      dir="rtl"
    >
      {/* --- BACKGROUND IMAGE --- */}
      <motion.div 
        className="absolute inset-y-0 left-0 w-full lg:w-[65%] z-10"
        style={{ y: imageY, scale: imageScale, filter: imageFilter }}
      >
        <div className="relative w-full h-full">
          {/* Mobile Overlay: Gradient transition to Cream background at the bottom */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-cream via-cream/60 to-transparent lg:hidden" />

          {/* Desktop Overlay: Gradient transition to Cream background on the right side */}
          <div className="absolute inset-y-0 right-0 w-1/2 z-20 bg-gradient-to-l from-cream to-transparent hidden lg:block" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <Image
              src="/images/expert.jpeg"
              alt="Expert Advisor"
              fill
              priority
              className="object-cover object-top" 
            />
          </motion.div>
        </div>
      </motion.div>

      {/* --- TEXT CONTENT --- */}
      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <motion.div 
          className="flex flex-col items-start text-right justify-end pb-24 lg:justify-center lg:pb-0 min-h-[100dvh] lg:h-full lg:pt-0"
          style={{ y: textY, opacity: textOpacity }}
        >
          <div className="w-full lg:w-[50%] lg:ml-auto lg:pr-12 3xl:pr-16 4xl:pr-20 5xl:pr-24 relative">
            
            <motion.h1
              className="font-black leading-[1.1] mb-6 3xl:mb-8 4xl:mb-10 text-[2.4rem] md:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl 5xl:text-[10rem] text-[#0F2344] drop-shadow-sm"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...entranceTransition, delay: 0.2 }}
            >
              הביטחון שלך <br />
              <span className="text-[#F1662A]">במשכנתא חסכונית</span>
            </motion.h1>

            <motion.p
              className="font-medium leading-relaxed mb-10 3xl:mb-12 4xl:mb-16 text-lg md:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl text-[#0F2344]/90"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...entranceTransition, delay: 0.5 }}
            >
              אנחנו דואגים שהכסף יישאר אצלכם, לא בבנק. <br />
              חיסכון ממוצע של{" "}
              <span className="text-[#0F2344] font-black border-b-4 3xl:border-b-[5px] 4xl:border-b-[6px] border-[#F1662A]/20">
                180,000 ש״ח
              </span>{" "}
              למשפחה בתכנון נכון.
            </motion.p>

            {/* --- CTA BUTTON --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...entranceTransition, delay: 0.8 }}
              className="w-full sm:w-auto"
            >
              <motion.a
                href="#contact"
                className="relative inline-flex items-center justify-center gap-4 3xl:gap-6 4xl:gap-8 w-full sm:w-auto bg-blue-dk text-white px-12 3xl:px-16 4xl:px-20 5xl:px-24 py-5 3xl:py-6 4xl:py-8 5xl:py-10 text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-extrabold shadow-2xl shadow-blue-dk/30 transition-all hover:brightness-110 active:scale-95 group overflow-hidden"
              >
                {/* Shine effect animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
                
                <span className="relative z-10">בדיקת זכאות חינם</span>
                <svg className="w-6 h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-10 5xl:h-10 rotate-180 group-hover:-translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
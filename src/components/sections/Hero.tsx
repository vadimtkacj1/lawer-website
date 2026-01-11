"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpFast } from "@/lib/animations";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";

const banks = [
  "/images/bank1.png", "/images/bank2.png", "/images/bank3.svg",
  "/images/bank4.png", "/images/bank5.png", "/images/bank6.png",
  "/images/bank7.png", "/images/bank8.png",
];

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
      dir="rtl" 
    >
      {/* КАРТИНКА - ЗЛІВА */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[65%] z-10"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/expert.jpeg"
            alt="אבי - יועץ משכנתאות מומחה"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover"
            style={{ objectPosition: 'center 5%' }} 
          />
          
          <div 
            className="absolute inset-0 z-20 hidden lg:block"
            style={{
              background: 'linear-gradient(to right, transparent 60%, rgba(249, 247, 244, 0.8) 80%, rgba(249, 247, 244, 1) 100%)'
            }}
          />
          <div className="absolute inset-0 z-20 lg:hidden bg-gradient-to-t from-cream via-cream/30 to-transparent" />
        </div>
      </div>

      {/* ТЕКСТ - СПРАВА */}
      <div className="container mx-auto px-4 md:px-8 h-full relative z-30">
        <div className="flex justify-start items-center h-full">
          
          <div
            className="w-full lg:w-[45%] flex flex-col items-start text-right py-12 lg:py-0"
          >
            <motion.h1
              className="font-heebo font-black leading-[1.1] mb-6 text-4xl md:text-6xl xl:text-7xl text-blue-dk"
              initial="hidden" animate="visible" variants={fadeInUpFast}
            >
              הביטחון שלך <br />
              <span className="text-orange">במשכנתא חסכונית</span>
            </motion.h1>

            <motion.p
              className="font-bold leading-relaxed mb-8 text-lg md:text-xl xl:text-2xl text-blue-dk/90"
              initial="hidden" animate="visible"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }}}
            >
              אנחנו דואגים שהכסף יישאר אצלכם, לא בבנק. <br />
              חיסכון ממוצע של <span className="text-blue-dk font-black">180,000 ש״ח</span> למשפחה בתכנון נכון.
            </motion.p>

            {/* CTA button */}
            <a
              href="#contact"
              className="bg-orange text-white px-10 py-5 text-xl md:text-2xl font-black rounded-xl shadow-lg transition-all group flex items-center gap-4 relative overflow-hidden
                         hover:brightness-110 hover:scale-[1.02] active:scale-[0.99]"
            >
              <span className="relative z-10">בדיקת זכאות חינם</span>
              <svg className="w-6 h-6 rotate-180 group-hover:-translate-x-2 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              
              {/* Спрощений блік для кращої продуктивності */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer" />
            </a>

            <div className="mt-12 w-full max-w-sm">
              <InfiniteMarquee dataType="image" dataArray={banks} speed={30} direction="right" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

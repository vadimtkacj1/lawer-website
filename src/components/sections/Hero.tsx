"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ArrowIcon from "@/components/icons/ArrowIcon";

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-[100vh] lg:min-h-[120vh] flex items-center overflow-hidden bg-cream"
      dir="rtl"
    >
      {/* IMAGE - LEFT SIDE */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] z-10">
        <div className="relative w-full h-full">
          <Image
            src="/images/expert.jpeg"
            alt="Expert Mortgage Advisor"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover"
            style={{ objectPosition: 'center 5%' }} 
          />
          
          {/* Side gradient for desktop (blends image into text area) */}
          <div 
            className="absolute inset-0 z-20 hidden lg:block"
            style={{
              background: 'linear-gradient(to right, transparent 60%, rgba(249, 247, 244, 0.8) 80%, rgba(249, 247, 244, 1) 100%)'
            }}
          />

          {/* BOTTOM GRADIENT - Smooth fade to next section */}
          <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 lg:h-48 z-20 bg-gradient-to-t from-cream via-cream/95 to-transparent" />

          {/* Mobile gradient overlay - more opaque for better text visibility */}
          <div className="absolute inset-0 z-20 lg:hidden bg-gradient-to-t from-cream via-cream/80 to-cream/30" />
        </div>
      </div>

      {/* TEXT - RIGHT SIDE */}
      <div className="container mx-auto px-4 md:px-8 h-full relative z-30">
        <div className="flex justify-start items-center h-full">
          
          <div className="w-full lg:w-[45%] flex flex-col items-start text-right py-12 lg:py-0">
            <motion.h1
              className="font-heebo font-black leading-[1.1] mb-6 text-4xl md:text-6xl xl:text-7xl text-blue-dk"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              הביטחון שלך <br />
              <span className="text-orange">במשכנתא חסכונית</span>
            </motion.h1>

            <motion.p
              className="font-bold leading-relaxed mb-8 text-lg md:text-xl xl:text-2xl text-blue-dk/90"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              אנחנו דואגים שהכסף יישאר אצלכם, לא בבנק. <br />
              חיסכון ממוצע של <span className="text-blue-dk font-black">180,000 ש״ח</span> למשפחה בתכנון נכון.
            </motion.p>

            {/* CTA button */}
            <motion.div className="relative inline-block">
              {/* Пульсирующее свечение вокруг кнопки */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-orange blur-xl opacity-60"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Второй слой свечения для усиления эффекта */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-orange blur-2xl opacity-40"
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              />

              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-orange via-orange to-orange-600 text-white px-10 py-5 text-xl md:text-2xl font-black rounded-lg shadow-2xl transition-[brightness,transform] duration-200 group flex items-center gap-4 relative overflow-hidden
                           hover:brightness-110 hover:scale-[1.05] active:scale-[0.98] border-2 border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.3 },
                  y: { duration: 0.4, delay: 0.3 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Внутреннее свечение */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-50" />

                <span className="relative z-10 drop-shadow-lg">בדיקת זכאות חינם</span>
                <ArrowIcon className="w-6 h-6 rotate-180 group-hover:-translate-x-2 transition-transform relative z-10 drop-shadow-lg" />

                {/* Shimmer effect - более яркий */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                />

                {/* Пульсирующая подсветка краёв */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-white/30"
                  animate={{
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
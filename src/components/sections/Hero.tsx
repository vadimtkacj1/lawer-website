"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpFast, scaleIn } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-cream z-10 pt-20 md:pt-24 lg:pt-20">
      <div className="flex flex-col lg:flex-row h-full min-h-[80vh]">
          
          {/* Expert Image - Left Side */}
          <motion.div
            className="w-full lg:w-1/2 relative order-2 lg:order-2 -mt-20 lg:mt-0 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
          >
            <div className="relative h-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[calc(80vh+5rem)] flex items-end">
              <Image
                src="/images/expert.jpeg"
                alt="אבי - יועץ משכנתאות מומחה"
                width={600}
                height={800}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover object-center"
                style={{
                  objectPosition: 'center top',
                }}
              />
              {/* Плавный градиент на правом крае для полного перетекания в cream background */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, transparent 0%, transparent 60%, rgba(249, 247, 244, 0.15) 75%, rgba(249, 247, 244, 0.4) 85%, rgba(249, 247, 244, 0.7) 92%, rgba(249, 247, 244, 0.9) 97%, rgba(249, 247, 244, 1) 100%)',
                }}
              />
              {/* Плавный градиент на верхнем и нижнем краях - только на десктопе */}
              <div 
                className="hidden lg:block absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, rgba(249, 247, 244, 0.5) 0%, rgba(249, 247, 244, 0.2) 4%, rgba(249, 247, 244, 0.05) 8%, transparent 12%, transparent 88%, rgba(249, 247, 244, 0.05) 92%, rgba(249, 247, 244, 0.2) 96%, rgba(249, 247, 244, 0.5) 100%)',
                }}
              />
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <div className="w-full lg:w-1/2 flex items-center lg:items-start order-1 lg:order-1 px-4 md:px-6 lg:px-12 pt-8 pb-6 md:pt-12 md:pb-8 lg:py-20">
            <div className="w-full">
              <div className="flex flex-col items-start text-right w-full">

              {/* Main Heading */}
              <motion.h1
                className="font-heebo font-black text-blue-dk leading-tight mb-4 md:mb-3 lg:mb-2"
                style={{
                  fontSize: "clamp(32px, 7vw, 100px)",
                }}
                initial="hidden"
                animate="visible"
                variants={fadeInUpFast}
              >
                הביטחון שלך
                <br />
                במשכנתא חסכונית
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-base md:text-xl lg:text-3xl font-bold text-blue-dk/90 mb-5 md:mb-6 lg:mb-4 leading-relaxed"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      delay: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
              >
                אנחנו דואגים שהכסף יישאר אצלכם, לא בבנק. חיסכון ממוצע של{" "}
                <strong className="text-blue-dk font-black">180,000 ש״ח</strong> למשפחה
                בתכנון נכון ומקצועי.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                className="bg-orange text-white px-6 py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 
                           text-lg md:text-xl lg:text-3xl font-black rounded-md
                           shadow-[0_12px_30px_rgba(242,103,34,0.3)]
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(242,103,34,0.4)]
                           focus:outline-none focus:ring-4 focus:ring-orange/30
                           flex items-center gap-2 md:gap-3 relative overflow-hidden hero-cta-button w-full md:w-auto justify-center
                           animate-pulse-slow"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                בדיקת זכאות חינם
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex-shrink-0 rotate-180"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
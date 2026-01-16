"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  fadeInUpFast,
  fadeInRight,
  staggerContainer,
  staggerItem,
  viewportOptions,
} from "@/lib/animations";
import DecorativeShapes from "@/components/ui/DecorativeShapes";
import { usePerformanceSettings } from "@/lib/usePerformanceSettings";

/**
 * Optimized viewport settings for mobile triggers
 */
const mobileViewport = { ...viewportOptions, once: true, amount: 0.1 };

const mobileFadeIn: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const highlights = [
  {
    iconPath: <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />,
    text: "ליווי משפטי מלא לאורך כל התהליך",
  },
  {
    iconPath: <path d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />,
    text: 'התמחיות בתיקי "מסורבי בנק"',
  },
  {
    iconPath: <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />,
    text: "מעל 1,000 משפחות שחסכו מאות אלפי שקלים",
  },
];

export default function ExpertBio() {
  const { shouldDisableAnimations, isMobile } = usePerformanceSettings();
  const initialPresence = shouldDisableAnimations ? "visible" : "hidden";

  return (
    <section 
      id="about-expert" 
      dir="rtl" 
      className="relative py-12 md:py-20 overflow-hidden bg-[#f9f7f4]"
    >
      <DecorativeShapes variant="default" />
      
      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Expert Image */}
          <motion.div
            className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-none flex-1 mx-auto will-change-transform"
            initial={initialPresence}
            whileInView="visible"
            viewport={isMobile ? mobileViewport : viewportOptions}
            variants={isMobile ? mobileFadeIn : fadeInRight}
          >
            <Image
              src="/images/second_expert.jpeg"
              alt="Avi - Financial Lawyer"
              width={500}
              height={625}
              priority
              quality={90}
              className="w-full aspect-[4/5] object-cover object-top rounded-3xl shadow-xl"
            />
          </motion.div>

          {/* Bio Content */}
          <div className="flex-[1.3] text-center lg:text-right w-full">
            <motion.h2
              className="font-noto-sans-hebrew font-black text-blue-dk mb-6 leading-[1.2]
                         text-3xl sm:text-4xl lg:text-6xl"
              initial={initialPresence}
              whileInView="visible"
              viewport={isMobile ? mobileViewport : viewportOptions}
              variants={isMobile ? mobileFadeIn : fadeInUpFast}
            >
              הכוח המשפטי מאחורי <br className="sm:hidden" />
              המשכנתא שלכם
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg lg:text-xl font-bold text-blue-dk/90
                         leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-noto-sans-hebrew"
              initial={initialPresence}
              whileInView="visible"
              viewport={isMobile ? mobileViewport : viewportOptions}
              variants={mobileFadeIn}
            >
              שלום, אני אבי. כמשפטן פיננסי המתמחה בדיני בנקאות, אני לא רק בונה
              לכם תמהיל חסכוני — אני מוודא שכל אות בחוזה משרתת את האינטרסים שלכם.
            </motion.p>

            {/* Adjusted Highlights List */}
            <motion.ul
              className="inline-flex flex-col items-start space-y-4 mb-10 text-right"
              initial={initialPresence}
              whileInView="visible"
              viewport={isMobile ? mobileViewport : viewportOptions}
              variants={isMobile ? {} : staggerContainer}
            >
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-base sm:text-lg lg:text-xl font-extrabold font-noto-sans-hebrew group"
                  variants={isMobile ? mobileFadeIn : staggerItem}
                >
                  {/* Smaller, more refined icon container */}
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-orange/10 text-orange rounded-lg transition-colors group-hover:bg-orange/20">
                    <svg className="w-5 h-5 sm:w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                      {item.iconPath}
                    </svg>
                  </span>
                  {/* Text remains prominent */}
                  <span className="text-blue-dk">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.div
              initial={initialPresence}
              whileInView="visible"
              viewport={isMobile ? mobileViewport : viewportOptions}
              variants={mobileFadeIn}
              className="flex justify-center lg:justify-start"
            >
              <Link
                href="/about"
                className="inline-block px-10 py-4 bg-blue-dk text-white
                           text-lg font-black transition-all duration-200 rounded-xl
                           shadow-lg hover:bg-blue-dk/90 active:scale-95 font-noto-sans-hebrew"
              >
                קראו עוד על הניסיון שלי
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
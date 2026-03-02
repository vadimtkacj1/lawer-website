"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpFast, fadeInLeft, staggerContainer } from "@/lib/animations";

const optimizedViewport = {
  once: true,
  margin: "0px",
  amount: 0.2,
};

export default function CommercialAbout() {
  return (
    <section className="relative bg-cream z-10 py-16 lg:py-20 overflow-hidden">
      
      {/* --- DECORATION 1: STABILITY LINES (LEFT SIDE - BEHIND/NEAR IMAGE) --- */}
      {/* These subtle vertical lines represent legal pillars and stability.
          They are positioned on the far left to balance the layout.
      */}
      <div className="absolute top-0 left-0 h-full w-[150px] pointer-events-none -z-10 hidden lg:block opacity-[0.15]">
        <svg viewBox="0 0 100 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-dk">
          <line x1="30" y1="0" x2="30" y2="800" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="0" x2="60" y2="800" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* --- DECORATION 2: SCALES OF JUSTICE + ACCENT (RIGHT SIDE - BEHIND TEXT) --- */}
      {/* Moving the main legal icon to the right side, away from the image.
          Added a faint circular border to add more detail to the right side as requested.
      */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none -z-10 
                      hidden md:block 
                      md:w-[350px] md:h-[350px] md:translate-x-1/4
                      lg:w-[500px] lg:h-[500px] lg:translate-x-1/4">
        
        {/* Additional decorative circle accent on the right */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-dk/5 rounded-full" />
        
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-blue-dk/10" 
        >
          <path
            d="M12 3V21M12 3L4 7M12 3L20 7M4 7C4 9.20914 5.79086 11 8 11C10.2091 11 12 9.20914 12 7M4 7H12M20 7C20 9.20914 18.2091 11 16 11C13.7909 11 12 9.20914 12 7M20 7H12M8 11V13C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13V11"
            stroke="currentColor"
            strokeWidth="0.3" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
        >
          {/* Layout: Image on Left, Text on Right (in RTL mode) */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Content Section (Right side in RTL) */}
            <motion.div
              className="flex-1 text-center lg:text-right"
              variants={fadeInUpFast}
              dir="rtl"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-noto-sans-hebrew font-black text-blue-dk mb-6 leading-tight">
                אבי בוקעי
              </h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-dk/90 leading-relaxed">
                  נעים להכיר, אני אבי בוקעי, הבעלים של <span className="font-black text-orange">"אבי - הבית למשכנתאות"</span>. עם ניסיון של מעל 7 שנים, תואר ראשון במנהל עסקים (התמחות בנדל"ן ותשתיות) ורקע כיוצא המערכת הבנקאית, אני כאן כדי להפוך את הבירוקרטיה המורכבת לחיסכון של עשרות ואף מאות אלפי שקלים.
                </p>
              </div>
            </motion.div>

            {/* Image Section (Left side in RTL) */}
            <motion.div
              className="flex-1 w-full max-w-[500px] lg:max-w-none"
              variants={fadeInLeft}
            >
              <div className="relative">
                {/* Visual shadow anchor */}
                <div className="absolute -inset-4 rounded-full -z-10" />
                
                {/* Mobile Image - Optimized */}
                <div className="lg:hidden">
                  <Image
                    src="/images/avi_photo.png"
                    alt="Avi Bukai - Mortgage Consultant"
                    width={500}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 400px, 500px"
                    className="w-full aspect-[5/6] object-cover rounded-3xl relative z-10"
                  />
                </div>
                
                {/* Desktop Image - Original Quality */}
                <div className="hidden lg:block">
                  <Image
                    src="/images/avi_photo.png"
                    alt="Avi Bukai - Mortgage Consultant"
                    width={500}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 400px, 500px"
                    className="w-full aspect-[5/6] object-cover rounded-3xl relative z-10"
                    quality={100}
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
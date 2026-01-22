"use client";

import { motion } from "framer-motion";
/* Ensure these variants exist in your @/lib/animations file */
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function RenovationProblemSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#1c3664] overflow-hidden" dir="rtl">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* 1. MAIN CONTENT (Left side in LTR, Right side in RTL) */}
          <div className="lg:col-span-8 space-y-6 md:space-y-10">
            <motion.h2 
              variants={staggerItem}
              className="font-noto-sans-hebrew font-black text-4xl md:text-5xl lg:text-7xl text-white leading-tight"
            >
              אתם מסתכלים על המטבח הישן <br className="hidden md:block" />
              <span className="text-orange">וכבר מדמיינים את האי החדש?</span>
            </motion.h2>

            <motion.div variants={staggerItem} className="space-y-6">
              <p className="text-lg md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed">
                או אולי המשפחה התרחבה ואתם חייבים להוסיף עוד חדר, או סתם בא לכם לרענן את הריצוף והאמבטיה. 
                השיפוץ הוא חלום, אבל המימון שלו יכול להפוך מהר מאוד לסיוט כלכלי אם לא עושים אותו נכון.
              </p>
              
              <p className="text-lg md:text-xl lg:text-2xl text-white/70 font-light leading-relaxed">
                נעים להכיר, אני אבי בוקעי, הבעלים של "אבי - הבית למשכנתאות". 
                כיוצא המערכת הבנקאית, אני רואה את זה קורה המון: אנשים בחולון ואיזור המרכז לוקחים "הלוואה לכל מטרה" מהירה באפליקציה כדי לשפץ, ומשלמים על כך ביוקר.
              </p>
            </motion.div>
          </div>

          {/* 2. SIDEBAR QUOTE (Matching the image style) */}
          <motion.div 
            variants={staggerItem}
            className="lg:col-span-4 border-r-4 md:border-r-8 border-orange pr-6 md:pr-8 py-2"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-bold italic leading-tight">
              "אני כאן כדי להראות לכם שיש דרך אחרת. דרך זולה יותר, חכמה יותר ורגועה יותר: משכנתא לשיפוץ."
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* SUBTLE BACKGROUND DETAIL */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
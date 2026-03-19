"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function WhyChooseMeSection() {
  return (
    <section dir="rtl" className="relative py-14 md:py-20 lg:py-40 bg-cream overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-why-me" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-why-me)"/>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          
          <motion.div variants={staggerItem} className="mb-14 md:mb-20">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-7xl text-[#1c3664] leading-tight">
              למה דווקא אני?
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerItem}
            className="space-y-8 md:space-y-12 max-w-6xl"
          >
            <p className="text-xl md:text-3xl text-[#1c3664] font-medium leading-relaxed">
              בתיקים של מסורבי משכנתא, <span className="font-black text-orange">אין מקום לניסוי וטעייה</span>. יועץ לא מנוסה יכול לגרום נזק בלתי הפיך לדירוג האשראי שלכם.
            </p>

            <motion.div 
              variants={staggerItem}
              className="border-r-4 md:border-r-8 border-orange pr-6 md:pr-12 py-6 md:py-8 bg-white/50 rounded-lg"
            >
              <p className="text-xl md:text-3xl text-[#1c3664] font-medium leading-relaxed">
                ההיכרות שלי עם המערכת הבנקאית מבפנים מאפשרת לי לדעת איזה בנק "סלחן" יותר לחריגות בחשבון, ואיזה בנק מעדיף להימנע מלקוחות עם בעיות בעבר. אני לא "יורה באפלה", אלא מגיש את התיק בדיוק למקום שבו הסיכוי לאישור הוא הגבוה ביותר, ומייצר פתרון למסורבי משכנתא שמותאם אישית למידותיכם.

              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

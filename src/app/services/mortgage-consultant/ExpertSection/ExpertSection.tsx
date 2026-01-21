"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

export default function ExpertSection() {
  return (
    <section className="relative py-20 lg:py-40 bg-cream overflow-hidden border-b border-[#1c3664]/10">
      {/* 1. ARCHITECTURAL GRID: Subtle blueprint */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.12]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="grid-expert" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-expert)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Main Title Section */}
          <div className="lg:col-span-7 space-y-10">
            <h1 className="font-noto-sans-hebrew font-black text-4xl md:text-6xl lg:text-8xl 3xl:text-9xl text-[#1c3664] leading-[1.1]">
              העסקה הכלכלית <br />
              <span className="text-orange border-b-[10px] 3xl:border-b-[16px] border-orange pb-3 inline-block">הגדולה בחייכם</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl 3xl:text-4xl text-[#1c3664] font-light leading-relaxed max-w-4xl ml-auto">
              בין אם אתם זוג צעיר בחולון או משפחה שזקוקה לאיחוד הלוואות – אתם צריכים מישהו שמדבר את השפה של הבנק, אבל עובד בשבילכם.
            </p>
          </div>

          {/* Expert Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-10 md:p-14 border-r-[8px] 3xl:border-r-[15px] border-orange bg-white/40 backdrop-blur-sm shadow-2xl">
              <h2 className="text-3xl lg:text-4xl 3xl:text-5xl font-black text-[#1c3664] mb-6">נעים להכיר, אבי בוקעי</h2>
              <p className="text-lg lg:text-xl 3xl:text-2xl text-[#1c3664]/80 font-medium leading-relaxed mb-8">
                בעלים של "אבי - הבית למשכנתאות", יוצא בנק דיסקונט וחבר בהתאחדות יועצי המשכנתאות. עם ניסיון של מעל 7 שנים ותואר ראשון במנהל עסקים.
              </p>
              <div className="pt-6 border-t border-[#1c3664]/10 flex justify-end">
                <span className="text-orange font-bold text-lg 3xl:text-2xl italic">הכוח שלכם בתוך המערכת</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function WhyRefusedSection() {
  return (
    <section dir="rtl" className="relative py-14 md:py-20 lg:py-40 bg-cream overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-refused" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-refused)"/>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          
          <motion.div variants={staggerItem} className="mb-14 md:mb-20">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-7xl text-[#1c3664] leading-tight">
              למה הבנק סירב לי?
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerItem}
            className="space-y-8 md:space-y-12 max-w-6xl"
          >
            <p className="text-lg md:text-2xl lg:text-3xl text-[#1c3664]/80 font-light leading-relaxed">
              מאז כניסת "חוק נתוני האשראי", הבנקים לא סומכים רק על ההיכרות האישית איתכם. הם לוחצים על כפתור ומקבלים דוח נתונים (BDI) שמציג להם "רמזור":
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div variants={staggerItem} className="relative">
                <div className="relative z-10 pr-5 md:pr-8 border-r-4 md:border-r-6 border-green-500 py-4">
                  <h4 className="font-noto-sans-hebrew font-bold text-2xl md:text-4xl text-green-600 mb-4">
                    ירוק
                  </h4>
                  <p className="text-base md:text-xl text-[#1c3664]/70 font-light leading-relaxed">
                    הכל תקין.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="relative">
                <div className="relative z-10 pr-5 md:pr-8 border-r-4 md:border-r-6 border-red-500 py-4">
                  <h4 className="font-noto-sans-hebrew font-bold text-2xl md:text-4xl text-red-600 mb-4">
                    אדום
                  </h4>
                  <p className="text-base md:text-xl text-[#1c3664]/70 font-light leading-relaxed">
                    סירוב מיידי.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={staggerItem}
              className="border-r-4 md:border-r-8 border-orange pr-6 md:pr-12 py-6 md:py-8 bg-white/50 rounded-lg"
            >
              <p className="text-xl md:text-3xl text-[#1c3664] font-medium leading-relaxed">
                הבעיה היא שהמערכת הבנקאית היא <span className="font-black text-orange">אוטומטית וקרה</span>. היא יכולה לפסול אתכם בגלל צ'ק אחד שחזר לפני שנתיים בטעות, בגלל הוראת קבע שלא כובדה כי המשכורת נכנסה יום באיחור, או בגלל ניצול גבוה של מסגרת האשראי. מבחינת המחשב של הבנק אתם "לקוח מסוכן". <span className="font-black not-italic">מבחינתי? אתם משפחה נורמטיבית שקרתה לה תקלה נקודתית שאפשר להסביר אותה.</span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

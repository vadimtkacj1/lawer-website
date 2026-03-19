"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function FinancialPressureSection() {
  return (
    <section 
      dir="rtl" 
      className="relative py-12 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={staggerContainer} 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <div className="lg:col-span-8 space-y-4 md:space-y-10">
            <motion.h2 
              variants={staggerItem}
              className="font-noto-sans-hebrew font-black text-xl md:text-6xl lg:text-7xl text-white leading-[1.2] md:leading-[1.15]"
            >
              דמיינו שאתם יושבים על ארגז מלא בזהב, <br />
              <span className="text-orange border-b-2 md:border-b-8 border-orange pb-1 md:pb-2 inline-block mt-1">
                אבל הולכים לבקש נדבות ברחוב.
              </span>
            </motion.h2>
            
            <motion.p 
              variants={staggerItem}
              className="text-base md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-5xl"
            >
              זה בדיוק מה שקורה כשבעלי דירות לוקחים "הלוואה לכל מטרה" רגילה מהבנק או מחברת האשראי, במקום לקחת הלוואה כנגד נכס קיים ששווה מיליונים.
            </motion.p>
            
            <motion.p 
              variants={staggerItem}
              className="text-base md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-5xl mt-4"
            >
             <a href="https://www.avi-mashkanta.com/services/mortgage-for-purchase" className="hyper-link" target="_blank" title="משכנתא לרכישת דירה | אבי בוקעי - הבית למשכנתאות">בין אם אתם רוצים לעזור לילד עם הון עצמי לדירה משלו</a>, לממן אירוע משפחתי גדול, לסגור מינוס לוחץ או לקנות רכב חדש - הבנק ישמח לתת לכם הלוואה "רגילה". הבעיה? הריבית תהיה גבוהה, וההחזר החודשי יחנוק אתכם כי הפריסה קצרה (בדרך כלל עד 5-7 שנים). הפתרון החכם יותר הוא משכנתא כנגד נכס קיים.
            </motion.p>
          </div>

          <motion.div variants={staggerItem} className="lg:col-span-4 relative mt-6 lg:mt-0">
            <div className="border-r-2 md:border-r-8 border-orange pr-4 md:pr-10 py-1 md:py-2">
              <p className="text-base md:text-2xl lg:text-3xl text-white font-bold italic leading-snug">
                "נעים להכיר, אני אבי בוקעי, הבעלים של 'אבי - הבית למשכנתאות'. כיוצא מערכת הבנקאות ובעל תואר אקדמי במנהל עסקים והתמחות בנדל״ן ותשתיות, אני כאן כדי לגלות לכם את האלטרנטיבה החכמה שהבנקים לא תמיד דוחפים לקדמת הבמה: משכנתא לכל מטרה."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
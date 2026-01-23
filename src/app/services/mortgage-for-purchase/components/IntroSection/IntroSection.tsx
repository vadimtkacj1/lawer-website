"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function IntroSection() {
  return (
    <section dir="rtl" className="relative py-12 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={staggerContainer} 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <div className="lg:col-span-12 space-y-6 md:space-y-10">
            <motion.p 
              variants={staggerItem}
              className="text-base md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-6xl"
            >
              לקנות דירה בישראל זה מסע. זה מתחיל בחלום, עובר דרך חיפושים מתישים ביד2, ויכוחים עם מתווכים, ולחץ בבטן כשחותמים על הזיכרון דברים. אבל הרגע המכריע באמת – זה שיקבע את איכות החיים שלכם ב-20 או 30 השנים הבאות – הוא הרגע שבו אתם לוקחים את המשכנתא.
            </motion.p>
            
            <motion.p 
              variants={staggerItem}
              className="text-base md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-6xl"
            >
              הטעות הכי גדולה של רוכשים היא להתייחס למשכנתא כאל "מוצר מדף" שקונים בסופר ("כמה ריבית קיבלת?"). האמת היא שמשכנתא היא חליפה פיננסית. אם היא תהיה גדולה עליכם – היא תחנוק אתכם. אם היא תהיה קטנה מדי – היא תקרע.
            </motion.p>

            <motion.div 
              variants={staggerItem}
              className="border-r-2 md:border-r-8 border-orange pr-4 md:pr-10 py-2 md:py-4 mt-8 md:mt-12 max-w-4xl"
            >
              <p className="text-lg md:text-3xl lg:text-4xl text-white font-bold leading-snug">
                נעים להכיר, אני אבי בוקעי, בעל תואר ראשון במנהל עסקים והתמחות בנדל"ן ותשתיות, ויוצא המערכת הבנקאית. אני כאן כדי להסביר לכם איך בונים משכנתא לרכישת דירה בצורה שתשאיר אתכם עם כסף פנוי לחיות, ולא רק "לשרוד" את החודש.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


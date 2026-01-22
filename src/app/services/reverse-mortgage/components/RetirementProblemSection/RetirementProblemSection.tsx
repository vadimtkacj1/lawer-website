"use client";

import { motion } from "framer-motion";
/* Ensure these variants exist in your @/lib/animations file */
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function RetirementProblemSection() {
  return (
    // Збільшив вертикальні відступи для десктопу (md:py-32)
    <section className="relative py-16 md:py-32 bg-[#1c3664] overflow-hidden" dir="rtl">
      {/* Збільшив максимальну ширину контейнера (max-w-[1400px]) для більших екранів */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-[1400px] text-right">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          // Збільшив горизонтальний відступ (lg:gap-24) і змінив пропорції колонок
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-24 items-center"
        >
          {/* 1. MAIN CONTENT (Right side in RTL on Desktop) */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            <motion.h2
              variants={staggerItem}
              // Збільшив leading для заголовка
              className="font-noto-sans-hebrew font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.2] tracking-tight"
            >
              עם משכנתא הפוכה, הנכס שלכם יכול להניב לכם כסף נזיל{" "}
              <br className="hidden md:block" />
              <span className="text-orange relative inline-block">
                 ולהעניק לכם את הנזילות הפיננסית שאתם צריכים
              </span>
            </motion.h2>

            <motion.div variants={staggerItem} className="space-y-8 md:space-y-10">
              {/* Збільшив розмір шрифту та leading для параграфів */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-loose">
                לשמירה על רמת החיים, סיוע לילדים או מימון הוצאות בלתי צפויות,
                מבלי לוותר על הבעלות או לעבור דירה.
              </p>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-light leading-loose">
                נעים להכיר, אני אבי בוקעי, הבעלים של "אבי – הבית למשכנתאות". עם
                ניסיון של מעל 7 שנים ורקע כיוצא המערכת הבנקאית, אני פוגש לא מעט
                פנסיונרים שיושבים על "מכרה זהב" – הבית שלהם – אך חיים בצמצום.
              </p>
            </motion.div>
          </div>

          {/* 2. SIDEBAR QUOTE (Left side in RTL on Desktop) */}
          {/* lg:order-last гарантує, що цей блок буде зліва в RTL */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-5 relative group lg:order-last"
          >
            {/* Стиль для десктопу: прозорий фон, жирна лінія справа (border-r-8), великий відступ справа (pr-12) */}
            <div className="
              relative overflow-hidden
              bg-[#234073] rounded-2xl p-8 border-t-4 border-orange shadow-lg
              lg:bg-transparent lg:rounded-none lg:p-0 lg:border-t-0 lg:border-r-8 lg:border-orange lg:pr-12 lg:shadow-none
              transition-all duration-300
            ">
               {/* Іконка цитати тільки для мобільного */}
               <span className="absolute top-0 right-4 text-[10rem] leading-none text-white/5 pointer-events-none select-none font-serif lg:hidden">
                 ״
               </span>

              <p className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] text-white font-bold italic leading-tight lg:leading-[1.3]">
                "הבשורה הטובה: יש פתרון. משכנתא הפוכה מאפשרת לכם להשתמש בכסף
                שצברתם בקירות הבית, מבלי לעבור דירה וללא החזר חודשי."
              </p>
            </div>
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
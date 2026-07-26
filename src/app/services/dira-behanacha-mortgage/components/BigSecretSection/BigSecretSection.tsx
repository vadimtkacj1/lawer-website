"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function BigSecretSection() {
  return (
    <section dir="rtl" className="relative py-14 md:py-20 lg:py-40 bg-cream overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-secret" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-secret)"/>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px 200px 0px" }} variants={staggerContainer}>
          
          <m.div variants={staggerItem} className="mb-14 md:mb-20">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-7xl text-[#1c3664] leading-tight mb-8">
              הסוד הגדול:
            </h2>
            <h3 className="font-noto-sans-hebrew font-bold text-2xl md:text-4xl lg:text-5xl text-orange leading-tight">
               הבנק רואה דירה למשתכן כ"שווה יותר"
            </h3>
          </m.div>

          <m.div 
            variants={staggerItem}
            className="space-y-8 md:space-y-12 max-w-6xl"
          >
            <p className="text-lg md:text-2xl lg:text-3xl text-[#1c3664]/80 font-light leading-relaxed">
             זה היתרון הכי גדול של התוכנית, והרבה זוכים לא מבינים אותו עד הסוף. במשכנתא רגילה, הבנק נותן מימון לפי המחיר בחוזה. בתוכניות דיור למשתכן או "דירה בהנחה", הבנק רשאי לתת לכם מימון לפי שווי השוק האמיתי של הדירה (לפי הערכת שמאי), ולא לפי המחיר המוזל ששילמתם בפועל (בכפוף למגבלות רגולציה מסוימות).
            </p>

            <m.div 
              variants={staggerItem}
              className="border-r-4 md:border-r-8 border-orange pr-6 md:pr-12 py-6 md:py-8 bg-white/50 rounded-lg"
            >
              <h4 className="font-noto-sans-hebrew font-bold text-xl md:text-3xl text-[#1c3664] mb-4">
                למה זה קריטי?
              </h4>
              <p className="text-lg md:text-2xl text-[#1c3664] font-medium leading-relaxed">
                זה מאפשר לכם להביא <span className="font-black text-orange">הון עצמי נמוך משמעותית</span> מהבית. בעוד שבשוק החופשי זוג צריך להביא 25% מהבית, ב"דירה בהנחה" ובפרויקטים של מחיר למשתכן ניתן לעיתים להגיע למצב שבו אתם מביאים סכום התחלתי קטן מאוד (למשל 100,000 ש"ח או 10%), ואת כל השאר הבנק מממן.
              </p>
            </m.div>

            <m.div 
              variants={staggerItem}
              className="bg-blue-dk/5 border-r-4 border-blue-dk pr-6 py-6 rounded-lg"
            >
              <p className="text-base md:text-xl text-[#1c3664]/90 font-medium leading-relaxed italic">
                <span className="font-black not-italic text-orange">הערה חשובה:</span> כדי לנצל את הטבה הזו, צריך לדעת איך להגיש את התיק לבנק ואיך "לדבר" עם השמאות. כאן הידע שלי כמי שמגיע מתחום הנדל"ן נותן לכם יתרון עצום.
              </p>
            </m.div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

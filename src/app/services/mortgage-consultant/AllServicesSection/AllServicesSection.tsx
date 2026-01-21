"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const services = [
  { t: "איחוד הלוואות", sub: "להחזיר את האוויר לנשימה", d: "מינוף נכס קיים לאיחוד הלוואות יקרות למשכנתא אחת מסודרת בריבית נמוכה. חיסכון של אלפי שקלים בהחזר החודשי." },
  { t: "מיחזור משכנתא", sub: "למה שתשלמו יותר?", d: "בדיקת כדאיות ללא עלות! שינויים בריביות או בסטטוס הכלכלי יכולים לחסוך לכם עשרות אלפי שקלים לאורך חיי המשכנתא." },
  { t: "זוגות צעירים והציבור החרדי", sub: "אחוזי מימון מקסימליים", d: "ליווי בתוכניות 'מחיר למשתכן' ופתרונות יצירתיים לציבור החרדי במרכז ובפריסה ארצית (כולל נתיבות)." },
  { t: "מסורבי בנקים ו-BDI שלילי", sub: "הופכים 'לא' ל'כן'", d: "בנייה מחדש של התיק ופנייה לגורמי המימון הנכונים. סירוב מהבנק הוא לא סוף העולם - יש לנו את הכלים לפתור זאת." }
];

export default function AllServicesSection() {
  return (
    <section className="relative py-12 md:py-24 lg:py-40 bg-cream overflow-hidden">
      {/* 1. BOLD GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.12]">
        <svg width="100%" height="100%"><defs><pattern id="grid-all-fixed" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.2"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid-all-fixed)"/></svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          
          <motion.div variants={staggerItem} className="mb-12 md:mb-24">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-8xl 3xl:text-9xl text-[#1c3664] leading-tight">
              השירותים שלנו: <br />
              <span className="text-orange border-b-4 md:border-b-8 border-orange pb-2">מעטפת פיננסית מלאה</span>
            </h2>
          </motion.div>

          {/* 2. SERVICES GRID: Corrected for mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-12 md:gap-y-24 items-start">
            {services.map((service, i) => (
              <motion.div key={i} variants={staggerItem} className="relative pt-12 md:pt-20 lg:pt-28">
                
                {/* ADJUSTED ORANGE NUMBERS FOR MOBILE */}
                <span className="absolute top-0 left-0 font-black text-[6rem] md:text-[10rem] lg:text-[14rem] 3xl:text-[20rem] text-orange opacity-[0.20] z-0 select-none leading-none">
                  0{i + 1}
                </span>

                <div className="relative z-10 pr-6 md:pr-10 border-r-4 md:border-r-[8px] 3xl:border-r-[15px] border-orange">
                  <h3 className="font-noto-sans-hebrew font-bold text-xl md:text-3xl lg:text-5xl 3xl:text-6xl text-[#1c3664] mb-2 md:mb-4">
                    {service.t}
                  </h3>
                  <h4 className="text-base md:text-xl lg:text-2xl 3xl:text-3xl text-orange font-bold italic mb-4 md:mb-6">
                    {service.sub}
                  </h4>
                  <p className="text-base md:text-xl lg:text-2xl 3xl:text-3xl text-[#1c3664]/80 font-light leading-relaxed">
                    {service.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
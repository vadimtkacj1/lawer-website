"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const recyclingSigns = [
  { 
    t: "לקחתם משכנתא לפני יותר מ-3 שנים?", 
    d: "(הריביות והמסלולים השתנו)." 
  },
  { 
    t: "ההכנסות שלכם גדלו משמעותית?", 
    d: "(אפשר לקצר שנים ולחסוך ריביות בתהליך של מחזור משכנתא)." 
  },
  { 
    t: "המשכנתא שלכם צמודה למדד והקרן לא יורדת?", 
    d: "(מצב מסוכן שחייבים לטפל בו)." 
  },
  { 
    t: "הסטטוס המשפחתי השתנה?", 
    d: "" // כאן ריק כי לא סיפקת טקסט בסוגריים עבור סעיף זה
  }
];

export default function AllServicesSection() {
  return (
    <section className="relative py-12 md:py-24 lg:py-40 bg-cream overflow-hidden">
      {/* 1. BOLD GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.12]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-all-fixed" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-all-fixed)"/>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right" dir="rtl">
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          
          <m.div variants={staggerItem} className="mb-12 md:mb-24 max-w-4xl ml-auto">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-7xl 3xl:text-8xl text-[#1c3664] leading-tight mb-6">
              מתי כדאי לעשות <br />
              <span className="text-orange border-b-4 md:border-b-8 border-orange pb-2">מחזור משכנתא?</span>
            </h2>
            <p className="text-lg md:text-2xl text-[#1c3664]/90 font-medium leading-relaxed mb-8">
              גם אם אין לכם הלוואות נוספות, ייתכן שהמשכנתא שלכם פשוט לא מותאמת למציאות של היום. 
              מחזור משכנתא הוא תהליך שבו אנחנו מחליפים את המשכנתא הישנה בחדשה, בתנאים טובים יותר.
            </p>
            <h3 className="font-noto-sans-hebrew font-bold text-xl md:text-3xl text-[#1c3664]">
              סימנים שאתם חייבים לבדוק כדאיות מחזור משכנתא:
            </h3>
          </m.div>

          {/* 2. SIGNS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-12 md:gap-y-24 items-start">
            {recyclingSigns.map((sign, i) => (
              <m.div key={i} variants={staggerItem} className="relative pt-12 md:pt-20 lg:pt-28">
                
                {/* BACKGROUND NUMBERS */}
                <span className="absolute top-0 right-0 font-black text-[6rem] md:text-[10rem] lg:text-[14rem] 3xl:text-[20rem] text-orange opacity-[0.20] z-0 select-none leading-none">
                  0{i + 1}
                </span>

                <div className="relative z-10 pr-6 md:pr-10 border-r-4 md:border-r-[8px] 3xl:border-r-[15px] border-orange">
                  <h3 className="font-noto-sans-hebrew font-bold text-xl md:text-3xl lg:text-4xl 3xl:text-5xl text-[#1c3664] mb-4">
                    {sign.t}
                  </h3>
                  {sign.d && (
                    <p className="text-base md:text-xl lg:text-2xl 3xl:text-3xl text-[#1c3664]/80 font-light leading-relaxed">
                      {sign.d}
                    </p>
                  )}
                </div>
              </m.div>
            ))}
          </div>

        </m.div>
      </div>
    </section>
  );
}
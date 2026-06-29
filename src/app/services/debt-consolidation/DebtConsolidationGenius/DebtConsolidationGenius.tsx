"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const consolidationBenefits = [
  { t: "הריבית", d: "נכון, הריבית במסלול משכנתא לכל מטרה מעט גבוהה יותר ממשכנתא לרכישת דירה, אבל היא עדיין נמוכה משמעותית (בפער של 3%-5% ואף יותר) מכל הלוואה מסחרית רגילה ('הלוואת סולו') שתקבלו בבנק." },
  { t: "הפריסה", d: "הלוואה רגילה מחזירים תוך 5 שנים, מה שמייצר החזר חודשי גבוה מאוד. משכנתא לכל מטרה ניתן לפרוס ל-20 ואף 30 שנה!" },
  { t: "התוצאה", d: "במקום לשלם 4,000 ₪ בחודש על הלוואה של 200,000 ₪, תשלמו כמה מאות שקלים בודדים בחודש בתוך המשכנתא." }
];

export default function DebtConsolidationGenius() {
  return (
    <section dir="rtl" className="relative py-14 md:py-20 lg:py-40 bg-cream overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <svg width="100%" height="100%"><defs><pattern id="grid-unification" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid-unification)"/></svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          
          <m.div variants={staggerItem} className="mb-14 md:mb-32">
            <h2 className="font-noto-sans-hebrew font-black text-xl md:text-7xl lg:text-8xl text-[#1c3664] leading-tight">
              מה זה "משכנתא לכל מטרה" <br />
              <span className="text-orange border-b-2 md:border-b-8 border-orange pb-2 md:pb-3 inline-block mt-1">ולמה זה משתלם?</span>
            </h2>
            <p className="text-base md:text-2xl lg:text-3xl text-[#1c3664]/80 font-light leading-relaxed mt-6 md:mt-12">
              בפשטות: תהליך של הלוואה לכל מטרה כנגד שיעבוד דירה אומר שאנחנו ממשכנים את הנכס הקיים שלכם (או מרחיבים את המשכנתא הקיימת) כדי לקבל כסף לחשבון הבנק לשימוש חופשי.
            </p>
            <h3 className="font-noto-sans-hebrew font-bold text-lg md:text-4xl lg:text-5xl text-[#1c3664] mt-8 md:mt-16 mb-4 md:mb-8">
              למה זה עדיף על הלוואה רגילה? המספרים מדברים:
            </h3>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {consolidationBenefits.map((item, i) => (
              <m.div key={i} variants={staggerItem} className="relative pt-10 md:pt-28">
                {/* Responsive Numbers */}
                <span className="absolute top-0 right-0 font-black text-5xl md:text-[14rem] lg:text-[20rem] text-orange opacity-[0.20] z-0 leading-none">
                  0{i + 1}
                </span>

                <div className="relative z-10 pr-5 md:pr-10 border-r-2 md:border-r-8 border-orange">
                  <h3 className="font-noto-sans-hebrew font-bold text-lg md:text-4xl lg:text-5xl text-[#1c3664] mb-2 md:mb-6">
                    {item.t}
                  </h3>
                  <p className="text-base md:text-2xl lg:text-3xl text-[#1c3664]/80 font-light leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
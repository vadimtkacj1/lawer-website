"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const reasons = [
  { 
    t: "האיש שלכם מבפנים", 
    d: "אני מכיר את הנהלים של הבנקים, את \"האותיות הקטנות\" בחוזים ואת הגמישות הניהולית של מנהלי הסניפים. אני יודע מתי ה\"לא\" הוא סופי ומתי הוא רק פתיחה למשא ומתן." 
  },
  { 
    t: "התמחות בנדל\"ן", 
    d: "התואר שלי במנהל עסקים ונדל\"ן מאפשר לי לתת לכם ערך מוסף – אני יכול לחוות דעה מקצועית על שווי הנכס והכדאיות הכלכלית של העסקה, עוד לפני שהשמאי מגיע." 
  },
  { 
    t: "שקט נפשי", 
    d: "קניית דירה היא אירוע מלחיץ. התפקיד שלי הוא להיות המבוגר האחראי שמוריד מכם את הלחץ הבירוקרטי והפיננסי." 
  }
];

export default function WhyChooseSection() {
  return (
    <section dir="rtl" className="relative py-14 md:py-20 lg:py-40 bg-cream overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-why" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-why)"/>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px 200px 0px" }} variants={staggerContainer}>
          
          <m.div variants={staggerItem} className="mb-14 md:mb-20">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-7xl text-[#1c3664] leading-tight">
              למה לבחור דווקא בי <br />
              <span className="text-orange border-b-2 md:border-b-8 border-orange pb-2 inline-block mt-2">
                לליווי הרכישה?
              </span>
            </h2>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {reasons.map((item, i) => (
              <m.div key={i} variants={staggerItem} className="relative pt-10 md:pt-20">
                <span className="absolute top-0 right-0 font-black text-5xl md:text-[10rem] lg:text-[14rem] text-orange opacity-[0.15] z-0 leading-none">
                  0{i + 1}
                </span>

                <div className="relative z-10 pr-5 md:pr-8 border-r-2 md:border-r-6 border-orange">
                  <h3 className="font-noto-sans-hebrew font-bold text-xl md:text-3xl lg:text-4xl text-[#1c3664] mb-4">
                    {item.t}
                  </h3>
                  <p className="text-base md:text-xl lg:text-2xl text-[#1c3664]/80 font-light leading-relaxed">
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


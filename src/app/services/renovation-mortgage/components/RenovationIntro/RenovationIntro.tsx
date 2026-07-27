"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem, viewportOptions } from "@/lib/animations";

// This section used to define its own variants that faded from `opacity: 0`
// over 0.8s with a 0.2s stagger, behind a viewport margin of "-50px" (the
// observer fired only once the element was already 50px inside the viewport).
// At normal scroll speed that guarantees the content is on screen while still
// transparent — the blink. It now uses the shared variants, which carry the
// motion with a short translate at full opacity and pre-roll the trigger.
const optimizedViewport = viewportOptions;

export default function RenovationIntro() {
  return (
    <section className="relative py-16 md:py-24 lg:py-36 bg-cream overflow-hidden" dir="rtl">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.35]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-bg" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1c3664" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-bg)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
          className="flex flex-col space-y-12 md:space-y-16"
        >
          {/* Main Hook Paragraph */}
          <m.div variants={staggerItem} className="w-full max-w-5xl mx-auto text-right">
            <h2 className="font-noto-sans-hebrew text-2xl md:text-4xl lg:text-5xl leading-[1.4] text-blue-dk font-light">
              אתם מסתכלים על המטבח הישן וכבר מדמיינים את האי החדש. או אולי המשפחה התרחבה ואתם חייבים להוסיף עוד חדר, או סתם בא לכם לרענן את הריצוף והאמבטיה. השיפוץ הוא חלום, אבל המימון שלו יכול להפוך מהר מאוד לסיוט כלכלי אם לא עושים אותו נכון.
            </h2>
          </m.div>

          {/* Expert Introduction Card */}
          <m.div
            variants={staggerItem}
            className="relative bg-white/95 backdrop-blur-md border border-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(28,54,100,0.08)] overflow-hidden"
          >
            {/* Subtle brand accent on the right */}
            <div className="absolute top-0 right-0 w-2 h-full bg-orange hidden md:block" />
            
            <div className="relative z-10 flex flex-col items-start">
              <div className="space-y-6 md:space-y-8 text-right w-full">
                <p className="font-noto-sans-hebrew text-lg md:text-2xl leading-relaxed text-blue-dk">
                  נעים להכיר, אני אבי בוקעי, הבעלים של "אבי - הבית למשכנתאות". כיוצא המערכת הבנקאית, אני רואה את זה קורה המון: אנשים בחולון ואיזור המרכז לוקחים "הלוואה לכל מטרה" מהירה באפליקציה כדי לשפץ, ומשלמים על כך ביוקר. אני כאן כדי להראות לכם שיש דרך אחרת. דרך זולה יותר, חכמה יותר ורגועה יותר: משכנתא לשיפוץ דירה.
                </p>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
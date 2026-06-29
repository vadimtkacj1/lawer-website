"use client";

import { useRef, useEffect, useState } from "react";
import { m, useScroll, useTransform, useSpring } from "framer-motion";
/* וודא שהווריאנטים קיימים בקובץ האנימציות שלך */
import { staggerContainer, staggerItem } from "@/lib/animations";

const diffs = [
  {
    t: "פרוצדורה מורכבת (אזרחות)",
    d: "התהליך הבירוקרטי ארוך ומורכב יותר מאשר לישראלי מקומי. ישנה גם חשיבות קריטית לשאלה האם יש לכם אזרחות ישראלית (תעודת זהות) או שאתם אזרחים זרים בלבד – נתון שמשפיע דרמטית על אופי הבדיקה בבנק."
  },
  {
    t: "בדיקת הכנסות קפדנית",
    d: "הבנק הישראלי יבקש מכם הררי מסמכים שקשורים לשכר, דוחות מס והוכחות על התנהלות פיננסית. הבנק צריך \"לתרגם\" את היציבות הכלכלית שלכם בחו\"ל לשפה שהוא מבין בארץ."
  },
  {
    t: "אחוזי מימון וריביות",
    d: "ברוב המקרים, אחוז המימון המקסימלי לתושבי חוץ עומד על 50% (לעומת עד 75% לישראלים), וגם הריביות עשויות להיות מעט גבוהות יותר, שכן הבנק מתמחר את העסקה כבעלת סיכון גבוה יותר."
  },
  {
    t: "המומחיות עושה את ההבדל",
    d: "לא כל יועץ משכנתאות מתמחה בתחום של משכנתאות לתושבי חוץ או יודע לנהל תיק כזה. נדרשת כאן הבנה מעמיקה ברגולציה ובנהלים הספציפיים. הגשה לא נכונה עלולה להוביל לסירוב או לריביות יקרות – חובה לעשות את זה נכון מהרגע הראשון."
  }
];

export default function DifferencesSection() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const driftAmount = isMobile ? 0 : 150;
  
  const yLeft = useTransform(scrollYProgress, [0, 1], [driftAmount, -driftAmount]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-driftAmount, driftAmount]);
  
  const smoothYLeft = useSpring(yLeft, { stiffness: 70, damping: 25 });
  const smoothYRight = useSpring(yRight, { stiffness: 70, damping: 25 });

  return (
    <section ref={containerRef} className="relative py-24 md:py-48 lg:py-64 bg-[#1c3664] overflow-hidden" dir="rtl">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="parallax-grid-final" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#parallax-grid-final)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl 3xl:max-w-[110rem]">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-right mb-20 md:mb-40 space-y-8"
        >
          <m.h2 
            variants={staggerItem} 
            className="font-noto-sans-hebrew font-black text-4xl md:text-6xl lg:text-8xl text-white leading-tight"
          >
            מה שונה במשכנתא <br />
            <span className="text-orange underline decoration-white/10 underline-offset-8">לתושבי חוץ?</span>
          </m.h2>
          
          <m.p 
            variants={staggerItem}
            className="font-noto-sans-hebrew text-xl md:text-3xl text-white/80 font-light max-w-4xl ml-auto leading-relaxed"
          >
            חשוב לשים את הדברים על השולחן: משכנתא לתושב חוץ היא לא עוד משכנתא רגילה, ומדובר במשחק אחר לגמרי שדורש מומחיות ספציפית.
          </m.p>
        </m.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 3xl:gap-32">
          {diffs.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <m.div
                key={i}
                style={{ y: isLeft ? smoothYLeft : smoothYRight }}
                className="relative group"
              >
                <div className="relative z-10 p-8 md:p-14 lg:p-20 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-700 hover:border-orange/30 hover:bg-white/[0.01]">
                    
                    <span className="absolute -top-10 -left-6 md:-top-16 md:-left-12 font-black text-[10rem] md:text-[18rem] 3xl:text-[24rem] text-white opacity-[0.04] z-0 select-none leading-none group-hover:opacity-[0.08] transition-opacity">
                        0{i + 1}
                    </span>
                    
                    <div className="relative z-10 text-right">
                        <h3 className="font-noto-sans-hebrew font-bold text-2xl md:text-4xl lg:text-5xl text-orange mb-6 md:mb-10">
                          {item.t}
                        </h3>
                        <p className="font-noto-sans-hebrew text-lg md:text-2xl lg:text-3xl text-white/70 font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                          {item.d}
                        </p>
                    </div>

                    <div className="absolute top-8 left-8 w-3 h-3 border border-orange/40 rounded-full" />
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
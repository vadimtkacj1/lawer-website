"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
/* Ensure animation variants are in your @/lib/animations file */
import { staggerContainer, staggerItem } from "@/lib/animations";

const diffs = [
  {
    t: "פרוצדורה מורכבת (אזרחות)",
    d: "התהליך ארוך ומורכב יותר מאשר לישראלי מקומי. קיימת חשיבות קריטית לשאלה האם יש לכם אזרחות ישראלית או שאתם אזרחים זרים בלבד."
  },
  {
    t: "בדיקת הכנסות קפדנית",
    d: "הבנק הישראלי יבקש הררי מסמכים. הבנק צריך \"לתרגם\" את היציבות הכלכלית שלכם בחו\"ל לשפה שהוא מבין בארץ."
  },
  {
    t: "אחוזי מימון וריביות",
    d: "ברוב המקרים, המימון לתושבי חוץ מוגבל ל-50% והריביות עשויות להיות גבוהות יותר בשל תמחור סיכון שונה."
  },
  {
    t: "המומחיות עושה את ההבדל",
    d: "לא כל יועץ יודע לנהל תיק תושב חוץ. הגשה לא נכונה עלולה להוביל לסירוב. חובה לעשות את זה נכון מהרגע הראשון."
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

  /* PARALLAX LOGIC: 
    If mobile, drift is 0. If desktop, use the full parallax effect.
  */
  const driftAmount = isMobile ? 0 : 150;
  
  const yLeft = useTransform(scrollYProgress, [0, 1], [driftAmount, -driftAmount]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-driftAmount, driftAmount]);
  
  const smoothYLeft = useSpring(yLeft, { stiffness: 70, damping: 25 });
  const smoothYRight = useSpring(yRight, { stiffness: 70, damping: 25 });

  return (
    <section ref={containerRef} className="relative py-20 md:py-48 lg:py-64 bg-[#1c3664] overflow-hidden">
      
      {/* Background Grid: Blueprint texture */}
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-right mb-20 md:mb-40"
        >
          <motion.h2 
            variants={staggerItem} 
            className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-8xl text-white mb-6 leading-tight"
          >
            מה שונה במשכנתא <br />
            <span className="text-orange underline decoration-white/10 underline-offset-8">לתושבי חוץ?</span>
          </motion.h2>
        </motion.div>

        {/* Grid: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 3xl:gap-32">
          {diffs.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                /* Animation is only active on Desktop (driftAmount > 0) */
                style={{ y: isLeft ? smoothYLeft : smoothYRight }}
                className="relative group"
              >
                {/* TRANSPARENT CARD: Clean borders, no background color */}
                <div className="relative z-10 p-8 md:p-14 lg:p-20 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-700 hover:border-orange/30 hover:bg-white/[0.01]">
                    
                    {/* GIANT NUMBERS: Fixed on mobile, drifting on desktop */}
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

                    <div className="absolute top-8 right-8 w-3 h-3 border border-orange/40 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
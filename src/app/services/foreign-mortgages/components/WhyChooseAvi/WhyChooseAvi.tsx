"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const whyAviContent = [
  {
    t: "קשרים עם המחלקות הנכונות",
    d: "לא כל פקיד בנק יודע לטפל בתושבי חוץ. אני עובד ישירות מול מחלקות וסניפים שמתמחים בתיקי משכנתאות לתושבי חוץ, יודעים לקרוא אנגלית, ומבינים את המנטליות והצרכים שלכם."
  },
  {
    t: "טכנולוגיה וזמינות",
    d: "אני מנהל את התהליך מולכם ב-Zoom, בוואטסאפ ובמיילים, בשעות שנוחות לכם. אתם לא צריכים לטוס לישראל רק בשביל חתימה או בירור לגבי משכנתא לתושבי חוץ."
  },
  {
    t: "הכרת השטח ועוצמה ארצית",
    d: "כמי שחי ונושם את הנדל\"ן באזור המרכז (חולון, בת ים, ראשל\"צ, ת\"א והסביבה), אני מעניק לרוכשים באזורים אלו יתרון עצום בניתוח כדאיות העסקה. עם זאת, הכוח שלי מול הבנקים אינו מוגבל גיאוגרפית – אני מטפל בתיקי משכנתא בכל רחבי הארץ, מקרית שמונה ועד אילת."
  }
];

export default function WhyChooseAvi() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-cream overflow-hidden border-t border-[#1c3664]/10" dir="rtl">
      
      {/* 1. ARCHITECTURAL GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.15]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-why-restored" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="3" fill="#1c3664" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-why-restored)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[110rem] text-right">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={staggerContainer}
        >
          
          {/* Section Header */}
          <motion.div variants={staggerItem} className="mb-16 lg:mb-24">
            <h2 className="font-noto-sans-hebrew font-black text-4xl md:text-6xl lg:text-7xl 3xl:text-8xl text-[#1c3664] leading-[1.1]">
              למה לקחת את "אבי - הבית למשכנתאות" <br />
              <span className="text-orange border-b-[8px] 3xl:border-b-[12px] border-orange pb-3 inline-block">כנציג שלכם בישראל?</span>
            </h2>
            <p className="mt-8 text-lg md:text-2xl lg:text-3xl text-[#1c3664] font-medium max-w-5xl ml-auto leading-relaxed italic">
              "כשאתם בחו"ל, אתם לא יכולים להרשות לעצמכם טעויות או עיכובים שיפילו את העסקה."
            </p>
          </motion.div>

          {/* 2. ADVANTAGES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 3xl:gap-24 items-start">
            {whyAviContent.map((step, i) => (
              <motion.div key={i} variants={staggerItem} className="relative pt-16 lg:pt-24">
                
                {/* ORANGE NUMBERS */}
                <span className="absolute top-0 left-0 font-black text-[8rem] lg:text-[11rem] 3xl:text-[15rem] text-orange opacity-[0.20] z-0 select-none leading-none">
                  0{i + 1}
                </span>

                {/* Content Unit */}
                <div className="relative z-10 pr-6 md:pr-8 border-r-[5px] 3xl:border-r-[10px] border-orange">
                  <h3 className="font-noto-sans-hebrew font-bold text-xl md:text-3xl lg:text-4xl 3xl:text-5xl text-[#1c3664] mb-6 leading-tight">
                    {step.t}
                  </h3>
                  <p className="font-noto-sans-hebrew text-base md:text-xl lg:text-2xl 3xl:text-3xl text-[#1c3664]/80 font-light leading-relaxed">
                    {step.d}
                  </p>
                </div>

                {/* Technical Anchor */}
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1c3664]/20" />
              </motion.div>
            ))}
          </div>

          {/* Closing Hook */}
          <motion.div variants={staggerItem} className="mt-20 lg:mt-28 pt-10 border-t border-[#1c3664]/10">
             <p className="font-noto-sans-hebrew text-xl md:text-3xl lg:text-4xl 3xl:text-6xl text-[#1c3664] font-medium max-w-6xl ml-auto leading-tight italic">
              "לא משנה איפה הדירה שאתם קונים – <br className="hidden 3xl:block" />
              <span className="text-orange not-italic font-bold">המימון והתנאים המצוינים שאשיג עבורכם נשארים זהים."</span>
             </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
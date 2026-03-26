"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

export default function ExpertSection() {
  return (
    <section className="relative py-20 lg:py-40 bg-cream overflow-hidden border-b border-[#1c3664]/10">
      {/* 1. ARCHITECTURAL GRID: Subtle blueprint */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.12]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="grid-expert" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-expert)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right" dir="rtl">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Main Title Section */}
          <div className="lg:col-span-7 space-y-10">
            <h2 className="font-noto-sans-hebrew font-black text-4xl md:text-6xl lg:text-7xl 3xl:text-8xl text-[#1c3664] leading-[1.1]">
              ה-1 או ה-10 לחודש מגיע, <br />
              <span className="text-orange border-b-[10px] 3xl:border-b-[16px] border-orange pb-3 inline-block">ואיתו הלחץ בחזה</span>
            </h2>
            <p className="text-xl md:text-2xl lg:text-2xl 3xl:text-3xl text-[#1c3664] font-light leading-relaxed max-w-4xl">
              המשכנתא יורדת, ואחריה ההלוואה של הרכב, ההלוואה שלקחתם לשיפוץ, המינוס בבנק והתשלומים בכרטיסי האשראי. אתם עובדים קשה, מרוויחים יפה, אבל בסוף החודש נשארים עם הלשון בחוץ. <span className="font-bold underline decoration-orange/40">נשמע מוכר?</span>
            </p>
          </div>

          {/* Expert Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-10 md:p-14 border-r-[8px] 3xl:border-r-[15px] border-orange bg-white/40 backdrop-blur-sm shadow-2xl">
              <h3 className="text-3xl lg:text-4xl 3xl:text-5xl font-black text-[#1c3664] mb-6">נעים להכיר, אני אבי בוקעי</h3>
              <div className="space-y-6 text-lg lg:text-xl 3xl:text-2xl text-[#1c3664]/80 font-medium leading-relaxed">
                <p>
                  הבעלים של "אבי - הבית למשכנתאות". כמי שעבד בתוך המערכת הבנקאית, ראיתי אלפי משפחות שנמצאות בדיוק במצב הזה.
                </p>
                <p className="text-[#1c3664] font-bold">
                  הבית שלכם הוא הכלי הפיננסי הכי חזק שיש לכם כדי למחוק את המינוס ולהקטין את ההוצאות ב-3,000 עד 5,000 ש"ח בחודש.
                </p>
                 <p className="text-[#1c3664] font-bold">
                  איך עושים את זה? באמצעות תהליך מקצועי של איחוד הלוואות ומחזור משכנתא.
                </p>
              </div>
              <div className="pt-6 mt-8 border-t border-[#1c3664]/10 flex justify-start">
                <span className="text-orange font-bold text-xl 3xl:text-3xl italic">
                  איחוד הלוואות ומחזור משכנתא
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
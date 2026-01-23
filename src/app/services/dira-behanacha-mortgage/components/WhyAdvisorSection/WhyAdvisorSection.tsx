"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const advantages = [
  "איזה סניף מתמחה בפרויקט הספציפי שזכיתם בו.",
  "איך להוציא את המקסימום משווי השמאות כדי להקטין את ההון העצמי שנדרש מכם.",
  "איך לשלב את \"הלוואות הזכאות\" של המדינה (ריבית מסובסדת) בתוך התמהיל בצורה החכמה ביותר."
];

export default function WhyAdvisorSection() {
  return (
    <section dir="rtl" className="relative py-14 md:py-20 lg:py-40 bg-cream overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-advisor" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-advisor)"/>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          
          <motion.div variants={staggerItem} className="mb-14 md:mb-20">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-7xl text-[#1c3664] leading-tight">
              למה לקחת יועץ פרטי<br />
              <span className="text-orange border-b-2 md:border-b-8 border-orange pb-2 inline-block mt-2">
                אם "זכיתי במחיר קבוע"?
              </span>
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerItem}
            className="space-y-8 md:space-y-12 max-w-6xl"
          >
            <p className="text-xl md:text-3xl text-[#1c3664] font-medium leading-relaxed">
              טעות נפוצה היא לחשוב שבגלל שמחיר הדירה קבוע, גם המשכנתא היא "סטנדרטית". <span className="font-black text-orange">ההפך הוא הנכון.</span>
            </p>

            <p className="text-lg md:text-2xl lg:text-3xl text-[#1c3664]/80 font-light leading-relaxed">
              בנקים מסוימים פחות אוהבים את הפרויקטים האלו ומקשיחים עמדות. אחרים נותנים תנאים מועדפים לזוכים. כמי שמכיר את המערכת מבפנים, אני יודע:
            </p>

            <div className="space-y-6">
              {advantages.map((item, i) => (
                <motion.div key={i} variants={staggerItem} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange flex items-center justify-center">
                    <span className="text-white font-black text-lg md:text-xl">{i + 1}</span>
                  </div>
                  <p className="text-lg md:text-2xl text-[#1c3664] font-medium leading-relaxed pt-1 md:pt-2">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

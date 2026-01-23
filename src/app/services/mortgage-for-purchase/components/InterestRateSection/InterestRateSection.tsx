"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const mixBenefits = [
  { 
    t: "הצמדה למדד", 
    d: "מסלול שנראה זול היום יכול להתייקר באלפי שקלים בחודש אם המדד יעלה." 
  },
  { 
    t: "נקודות יציאה", 
    d: "האם תוכלו לפרוע את המשכנתא בעתיד ללא קנסות מטורפים?" 
  },
  { 
    t: "שינויים בחיים", 
    d: "האם המשכנתא מתאימה לזוג צעיר שצפוי להרחיב את המשפחה ולהגדיל הוצאות?" 
  }
];

export default function InterestRateSection() {
  return (
    <section dir="rtl" className="relative py-14 md:py-20 lg:py-40 bg-cream overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-interest" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-interest)"/>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          
          <motion.div variants={staggerItem} className="mb-14 md:mb-20">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-7xl text-[#1c3664] leading-tight mb-8">
              הריבית היא רק קצה הקרחון
            </h2>
            <h3 className="font-noto-sans-hebrew font-bold text-2xl md:text-4xl lg:text-5xl text-orange leading-tight">
              (למה צריך תמהיל?)
            </h3>
          </motion.div>

          <motion.p 
            variants={staggerItem}
            className="text-lg md:text-2xl lg:text-3xl text-[#1c3664]/80 font-light leading-relaxed mb-12 md:mb-20 max-w-5xl"
          >
            כשאתם נכנסים לבנק לבד, הפקיד (שהוא איש מכירות מצוין, ותפקידו למכור לכם כסף ביוקר) יציג לכם בדרך כלל מסלולים שנראים אטרקטיביים בהתחלה. אבל משכנתא מורכבת מהרבה יותר מריבית:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {mixBenefits.map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="relative">
                <div className="relative z-10 pr-5 md:pr-8 border-r-2 md:border-r-4 border-orange py-4">
                  <h4 className="font-noto-sans-hebrew font-bold text-xl md:text-3xl text-[#1c3664] mb-4">
                    {item.t}
                  </h4>
                  <p className="text-base md:text-xl text-[#1c3664]/70 font-light leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={staggerItem}
            className="mt-16 md:mt-24 border-r-4 md:border-r-8 border-orange pr-6 md:pr-12 max-w-5xl"
          >
            <p className="text-xl md:text-3xl text-[#1c3664] font-medium leading-relaxed italic">
              כשאני בונה עבורכם תמהיל משכנתא, אני משלב בין ידע אקדמי לניסיון בנקאי. אני מערבב בין מסלולים יציבים (לא צמודים) למסלולים גמישים, כדי ליצור <span className="font-black not-italic text-orange">"בולם זעזועים"</span> שיגן עליכם מפני עליות ריבית ואינפלציה בעתיד.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function HolonWhyAdvisorSection() {
  return (
    <section dir="rtl" className="relative py-14 md:py-20 lg:py-40 bg-cream overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-holon-why" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-holon-why)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={staggerItem} className="mb-8 md:mb-12">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-7xl text-[#1c3664] leading-tight mb-6">
              למה קריטי לבחור יועץ משכנתאות{" "}
              <span className="text-orange border-b-2 md:border-b-8 border-orange pb-1 md:pb-2 inline-block">
                שמכיר את חולון?
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-[#F1662A] rounded-full" />
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-base md:text-2xl lg:text-3xl text-[#1c3664]/90 font-light leading-relaxed max-w-6xl mb-8"
          >
            {`כשאתם מחפשים שירותי ייעוץ למשכנתא, ההיכרות של היועץ עם השטח היא כוח אדיר מול הבנק. יש הבדל עצום בין הערכת שמאי לדירת 5 חדרים חדשה בח-300, לבין דירת 3 חדרים ישנה להשקעה בשכונות כמו אגרובנק, תל גיבורים או ג'סי כהן.`}
          </motion.p>
          <motion.p
            variants={staggerItem}
            className="text-base md:text-2xl lg:text-3xl text-[#1c3664]/90 font-light leading-relaxed max-w-6xl"
          >
            {`צוות של יועצי משכנתאות בחולון שמכיר את המחירים האמיתיים בעיר, את פערי השמאות ואת הפוטנציאל הנדל"ני סביב תוואי הרכבת הקלה (הקו הירוק), ידע למנוע מכם ליפול ב"מלכודת השמאות" וישיג לכם את אחוז המימון המקסימלי האפשרי בלי הפתעות של הרגע האחרון.`}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

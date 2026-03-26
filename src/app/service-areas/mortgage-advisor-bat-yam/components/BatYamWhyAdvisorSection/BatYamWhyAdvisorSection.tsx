"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function BatYamWhyAdvisorSection() {
  return (
    <section dir="rtl" className="relative py-14 md:py-20 lg:py-40 bg-cream overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-batyam-why" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-batyam-why)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={staggerItem} className="mb-8 md:mb-12">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-5xl lg:text-6xl text-[#1c3664] leading-tight mb-6">
              למה חייבים לבחור יועץ משכנתאות מומלץ בבת ים{" "}
              <span className="text-orange border-b-2 md:border-b-8 border-orange pb-1 md:pb-2 inline-block">
                שמכיר את השטח?
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-[#F1662A] rounded-full" />
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-base md:text-2xl lg:text-3xl text-[#1c3664]/90 font-light leading-relaxed max-w-6xl"
          >
            {`כשאתם יוצאים לתהליך של ייעוץ למשכנתא, ההיכרות של היועץ עם פערי המחירים בעיר היא קריטית. בת ים מאופיינת בניגודים: מצד אחד דירות ישנות במרכז העיר שעוברות תהליכי פינוי בינוי ותמ"א 38, ומצד שני מגדלי יוקרה חדשים על טיילת בת ים. משרד של יועצי משכנתאות שמכיר את מחירי השוק האמיתיים בעיר יידע להגן עליכם מ"מלכודות שמאות" (מצב שבו השמאי מעריך את הדירה בפחות ממה ששילמתם), וישיג עבורכם את אחוזי המימון המקסימליים מהבנק.`}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

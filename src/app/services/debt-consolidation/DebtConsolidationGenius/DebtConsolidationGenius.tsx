"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const consolidationBenefits = [
  { t: "פריסה ארוכה וחכמה", d: "במקום להחזיר את הכסף ב-3 שנים, פורסים אותו ל-20 או 30 שנה בתוך המשכנתא. זה מפנה כסף פנוי לחיות." },
  { t: "ריבית נמוכה משמעותית", d: "הריבית על משכנתא זולה משמעותית מריבית של הלוואת רכב, אשראי או הלוואה בנקאית רגילה." }
];

export default function DebtConsolidationGenius() {
  return (
    <section dir="rtl" className="relative py-14 md:py-20 lg:py-40 bg-cream overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <svg width="100%" height="100%"><defs><pattern id="grid-unification" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid-unification)"/></svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          
          <motion.div variants={staggerItem} className="mb-14 md:mb-32">
            <h2 className="font-noto-sans-hebrew font-black text-xl md:text-7xl lg:text-8xl text-[#1c3664] leading-tight">
              איחוד הלוואות: <br />
              <span className="text-orange border-b-2 md:border-b-8 border-orange pb-2 md:pb-3 inline-block mt-1">להחזיר את האוויר לנשימה</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {consolidationBenefits.map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="relative pt-10 md:pt-28">
                {/* Responsive Numbers */}
                <span className="absolute top-0 right-0 font-black text-5xl md:text-[14rem] lg:text-[20rem] text-orange opacity-[0.20] z-0 leading-none">
                  0{i + 1}
                </span>

                <div className="relative z-10 pr-5 md:pr-10 border-r-2 md:border-r-8 border-orange">
                  <h3 className="font-noto-sans-hebrew font-bold text-lg md:text-4xl lg:text-5xl text-[#1c3664] mb-2 md:mb-6">
                    {item.t}
                  </h3>
                  <p className="text-base md:text-2xl lg:text-3xl text-[#1c3664]/80 font-light leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function ClosingCTA() {
  return (
    <section dir="rtl" className="relative py-16 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <m.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={staggerContainer} 
          className="text-center space-y-8 md:space-y-12"
        >
          <m.h2 
            variants={staggerItem}
            className="font-noto-sans-hebrew font-black text-3xl md:text-5xl lg:text-6xl text-white leading-[1.2]"
          >
            קונים דירה? <br />
            <span className="text-orange border-b-4 md:border-b-8 border-orange pb-2 inline-block mt-2">
              בואו נעשה את זה נכון
            </span>
          </m.h2>
          
          <m.p 
            variants={staggerItem}
            className="text-lg md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-5xl mx-auto"
          >
            אל תתנו להתרגשות מהדירה החדשה לסנוור אתכם מול הבנק. משכנתא טובה היא הבסיס לחיים כלכליים שקטים. השאירו פרטים בטופס למטה, ואני אחזור אליכם לבניית תוכנית מימון חכמה, חסכונית ומותאמת אישית.
          </m.p>

          <m.div 
            variants={staggerItem}
            className="pt-6"
          >
            <p className="text-2xl md:text-4xl text-orange font-black italic">
              אבי - הבית למשכנתאות 
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}


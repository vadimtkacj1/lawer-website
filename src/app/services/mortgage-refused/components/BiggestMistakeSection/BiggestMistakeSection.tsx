"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function BiggestMistakeSection() {
  return (
    <section dir="rtl" className="relative py-16 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <m.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={staggerContainer} 
          className="space-y-8 md:space-y-12"
        >
          <m.h2 
            variants={staggerItem}
            className="font-noto-sans-hebrew font-black text-3xl md:text-5xl lg:text-6xl text-white leading-[1.2]"
          >
            הטעות הכי גדולה של מסורבים:<br />
            <span className="text-orange border-b-4 md:border-b-8 border-orange pb-2 inline-block mt-2">
              לרוץ לבנק אחר
            </span>
          </m.h2>
          
          <m.p 
            variants={staggerItem}
            className="text-lg md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-6xl"
          >
            כשמקבלים סירוב בבנק אחד, האינסטינקט הוא לרוץ לבנק השני. זו טעות קריטית. כל בדיקה שנעשית במערכת האשראי נרשמת. כשבנק ב' רואה שבנק א' סירב לכם לפני יום, הוא נרתע אוטומטית. ככל שתצברו יותר סירובים, כך הדירוג שלכם יצנח והתיק שלכם "יישרף".
          </m.p>

          <m.div 
            variants={staggerItem}
            className="border-r-2 md:border-r-8 border-orange pr-4 md:pr-10 py-4 md:py-6 bg-orange/10 rounded-lg max-w-4xl"
          >
            <p className="text-xl md:text-3xl lg:text-4xl text-white font-black leading-snug">
              קיבלתם סירוב? עצרו הכל ופנו אלינו לייעוץ מקצועי למציאת פתרון למסורבי משכנתא.

            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function HolonClosingCTA() {
  return (
    <section dir="rtl" className="relative py-16 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-8 md:space-y-12"
        >
          <motion.h2
            variants={staggerItem}
            className="font-noto-sans-hebrew font-black text-3xl md:text-5xl lg:text-6xl text-white leading-[1.2]"
          >
            קונים דירה או ממחזרים בחולון?{" "}
            <span className="text-orange border-b-4 md:border-b-8 border-orange pb-2 inline-block mt-2">בואו נדבר!</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-6xl"
          >
            אל תשאירו את העסקה היקרה בחייכם ליד המקרה או לפקיד הבנק שמייצג את האינטרסים של המערכת. פנו עוד היום אל יועץ משכנתאות בחולון שידאג נטו לכיס שלכם. השאירו פרטים למטה ונצא לדרך לבית החדש בראש שקט ובידיעה שעשיתם את הצעד הכלכלי המשתלם ביותר.
          </motion.p>

          <motion.p variants={staggerItem} className="text-xl md:text-3xl text-orange font-black pt-4">
            אבי - הבית למשכנתאות | אבי בוקעי
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

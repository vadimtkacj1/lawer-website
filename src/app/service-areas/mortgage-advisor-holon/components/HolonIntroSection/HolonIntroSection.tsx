"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function HolonIntroSection() {
  return (
    <section dir="rtl" className="relative py-12 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px 200px 0px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <div className="lg:col-span-12 space-y-6 md:space-y-10">
            <m.p
              variants={staggerItem}
              className="text-base md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-6xl"
            >
              {`חולון עברה בעשור האחרון מהפכה של ממש. משכונות ותיקות שעוברות תנופת התחדשות עירונית, ועד לשכונות חדשות ומבוקשות כמו ח-300 (קרית אילון) והתכנונים של ח-500. עליית מחירי הנדל"ן בעיר דורשת מרוכשי הדירות היערכות פיננסית מדויקת. בדיוק כאן נכנס לתמונה יועץ משכנתאות בחולון. המטרה שלי, כאבי בוקעי – יוצא המערכת הבנקאית, היא לא רק להשיג לכם אישור מהבנק, אלא לבנות עבורכם משכנתא חכמה שתתאים למידות שלכם ולא תחנוק אתכם בהחזר החודשי.`}
            </m.p>
          </div>
        </m.div>
      </div>
    </section>
  );
}

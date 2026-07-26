"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function BatYamIntroSection() {
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
              {`בת ים הפכה בשנים האחרונות לאחת הערים המבוקשות והלוהטות ביותר בגוש דן. עם כניסתו של הקו האדום של הרכבת הקלה, בניית שכונות יוקרה כמו פארק הים, ופרויקטים עצומים של התחדשות עירונית לאורך קו החוף, קניית דירה בעיר היא הזדמנות נדל"נית אדירה. אך ההזדמנות הזו דורשת תכנון פיננסי מדויק. בדיוק כאן נכנס לתמונה יועץ משכנתאות בבת ים. שמי אבי בוקעי, יוצא המערכת הבנקאית, והמטרה שלי היא להשיג לכם מימון בתנאים הטובים ביותר ולבנות עבורכם משכנתא חכמה שתאפשר לכם לישון בשקט בלילה.`}
            </m.p>
          </div>
        </m.div>
      </div>
    </section>
  );
}

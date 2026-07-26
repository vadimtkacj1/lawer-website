"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function RishonClosingCTA() {
  return (
    <section dir="rtl" className="relative py-16 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px 200px 0px" }}
          variants={staggerContainer}
          className="space-y-8 md:space-y-12"
        >
          <m.h2
            variants={staggerItem}
            className="font-noto-sans-hebrew font-black text-3xl md:text-5xl lg:text-6xl text-white leading-[1.2]"
          >
            קונים או ממחזרים בראשון לציון?{" "}
            <span className="text-orange border-b-4 md:border-b-8 border-orange pb-2 inline-block mt-2">בואו נדבר!</span>
          </m.h2>

          <m.p
            variants={staggerItem}
            className="text-lg md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-6xl"
          >
            אל תתנו לבנק להכתיב לכם את העתיד הכלכלי. פנו עוד היום אל יועץ משכנתאות בראשון לציון שיעבוד אך ורק עבורכם. השאירו פרטים בטופס למטה, ונחזור אליכם לשיחת אבחון ראשונית ללא עלות, בדרך למשכנתא חכמה וחסכונית.
          </m.p>

          <m.p variants={staggerItem} className="text-xl md:text-3xl text-orange font-black pt-4">
            אבי - הבית למשכנתאות | אבי בוקעי
          </m.p>
        </m.div>
      </div>
    </section>
  );
}

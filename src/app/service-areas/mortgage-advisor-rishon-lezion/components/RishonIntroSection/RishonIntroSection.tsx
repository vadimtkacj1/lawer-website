"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function RishonIntroSection() {
  return (
    <section dir="rtl" className="relative py-12 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-8 md:space-y-10"
        >
          <m.p
            variants={staggerItem}
            className="text-base md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-6xl"
          >
            {`ראשון לציון היא מזמן לא רק "עיר השינה" של גוש דן. עם תנופת בנייה אדירה בשכונות החדשות במזרח העיר (על שטחי צריפין), התחדשות עירונית במרכז ויוקרה במערב ובנחלת יהודה, ראשון היא המקום שבו כולם רוצים לגור. אך כדי להפוך את החלום למציאות כלכלית יציבה, אתם צריכים יועץ משכנתאות בראשון לציון שיודע לקרוא את המפה הפיננסית של העיר.`}
          </m.p>
          <m.p
            variants={staggerItem}
            className="text-base md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-6xl"
          >
            {`שמי אבי בוקעי, יוצא המערכת הבנקאית וחבר בהתאחדות יועצי משכנתאות, ואני כאן כדי לוודא שאתם לא רק "מקבלים כסף מהבנק", אלא בונים תשתית כלכלית חסכונית שתשרת אתכם עשרות שנים קדימה.`}
          </m.p>
        </m.div>
      </div>
    </section>
  );
}

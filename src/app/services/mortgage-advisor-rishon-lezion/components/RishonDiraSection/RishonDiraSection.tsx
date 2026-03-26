"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function RishonDiraSection() {
  return (
    <section dir="rtl" className="relative py-12 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.h2
            variants={staggerItem}
            className="font-noto-sans-hebrew font-black text-2xl md:text-4xl lg:text-5xl text-white leading-tight"
          >
            {`ייעוץ משכנתאות בראשון לציון לזוכים ב"מחיר למשתכן" ו"דירה בהנחה"`}
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-base md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-6xl"
          >
            {`ראשון לציון מרכזת את אחד הריכוזים הגדולים של זוכי הגרלות המדינה בשכונות נרקיסים ורקפות. אם אתם זוג צעיר הזקוק לפתרון של משכנתא לדירה ראשונה, דעו כי המימון בפרויקטים אלו מורכב יותר. אני מתמחה בליווי זוכים בראשון לציון, תוך ניצול מקסימלי של הטבות שווי השוק כדי להקטין את ההון העצמי הנדרש, ובניית אסטרטגיה שתנטרל את סיכוני מדד תשומות הבנייה המאיימים על הרווח שלכם מהזכייה.`}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

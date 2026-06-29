"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function RishonAdvantagesSection() {
  return (
    <section dir="rtl" className="relative py-14 md:py-20 lg:py-40 bg-cream overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-rishon-adv" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-rishon-adv)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <m.div variants={staggerItem} className="mb-8 md:mb-12">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-5xl lg:text-6xl text-[#1c3664] leading-tight mb-6">
              היתרונות של יועץ משכנתאות מומלץ בראשון לציון{" "}
              <span className="text-orange border-b-2 md:border-b-8 border-orange pb-1 md:pb-2 inline-block">
                שמכיר את השטח
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-[#F1662A] rounded-full" />
          </m.div>

          <m.p
            variants={staggerItem}
            className="text-base md:text-2xl lg:text-3xl text-[#1c3664]/90 font-light leading-relaxed max-w-6xl mb-8"
          >
            {`בתהליך של ייעוץ משכנתאות בראשון לציון, לידע המקומי יש משקל אדיר בכסף. העיר מציגה פערי שווי נכסים משמעותיים: מדירות קבלן חדשות בשכונות נרקיסים ורקפות, דרך מגדלי יוקרה במערב ועד לנכסים עם פוטנציאל פינוי בינוי במרכז ובמזרח העיר.`}
          </m.p>
          <m.p
            variants={staggerItem}
            className="text-base md:text-2xl lg:text-3xl text-[#1c3664]/90 font-light leading-relaxed max-w-6xl"
          >
            {`כשאתם בוחרים יועץ משכנתאות מומלץ, אתם מקבלים הגנה מפני "מלכודות שמאות" שכיחות בראשל"צ. הכרה עמוקה של השכונות, מהמרכז הישן ועד לנחלת יהודה המבוקשת, מאפשרת לנו להגיש תיק מדויק לבנק, להשיג אחוזי מימון מקסימליים ולחסוך לכם עשרות אלפי שקלים בריביות שהייתם משלמים אילו הייתם ניגשים לבנק ללא ייצוג מקצועי.`}
          </m.p>
        </m.div>
      </div>
    </section>
  );
}

"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  {
    t: "תכנון אסטרטגי",
    d: "בחינה מעמיקה של הפרופיל הפיננסי שלכם כדי לתכנן משכנתא חכמה המותאמת אישית ליכולותיכם.",
  },
  {
    t: "אישור עקרוני ומהיר",
    d: "הגשה מדויקת של התיק לבנקים כדי לקבל אישור עקרוני חזק ויציב.",
  },
  {
    t: "מכרז ריביות ארצי",
    d: "משא ומתן אגרסיבי בין מגוון בנקים כדי להשיג את התנאים הזולים והטובים ביותר בשוק.",
  },
  {
    t: "ליווי בירוקרטי",
    d: "טיפול מלא בכל הניירת, שמאים, רשם המשכונות ועורכי הדין, עד שהכסף עובר.",
  },
];

export default function BatYamProcessSection() {
  return (
    <section className="py-20 lg:py-40 bg-[#FAF7F2] overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <div className="mb-16 md:mb-20 flex flex-col items-start">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-7xl text-[#1c3664] mb-4 leading-[1.15]">
              איך עובד תהליך העבודה מולנו?
            </h2>
            <div className="h-1.5 w-24 bg-[#F1662A] rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {steps.map((step, i) => (
              <m.div key={i} variants={staggerItem} className="relative group flex flex-col items-start">
                <div className="text-6xl lg:text-8xl font-black text-[#F1662A]/20 mb-6 group-hover:text-[#F1662A]/40 transition-colors duration-500 select-none">
                  0{i + 1}
                </div>
                <div className="border-r-2 border-[#1c3664]/10 pr-6 group-hover:border-[#F1662A] transition-colors duration-500 text-right">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1c3664] mb-4 leading-tight">{step.t}</h3>
                  <p className="text-lg lg:text-xl text-[#1c3664]/70 font-light leading-relaxed">{step.d}</p>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}

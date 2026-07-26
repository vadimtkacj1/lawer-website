"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  {
    t: "אבחון צרכים ותכנון",
    d: "בניית משכנתא חכמה המותאמת להכנסות שלכם כיום ולתוכניות העתידיות של המשפחה.",
  },
  {
    t: "אישור עקרוני חזק",
    d: 'הגשה מקצועית של התיק לקבלת אישור מהיר, ללא "ניסוי וטעייה" בסניפי הבנקים.',
  },
  {
    t: "מכרז ריביות אגרסיבי",
    d: "אנו מנהלים משא ומתן מול מספר בנקים כדי להביא לכם את ההצעה הזולה ביותר בישראל.",
  },
  {
    t: "ליווי עד המפתח",
    d: "טיפול בשמאים, ביטוחים, ורישומים בטאבו/רשם המשכונות, כדי שאתם תגיעו רק לחתימה הסופית.",
  },
];

export default function RishonProcessSection() {
  return (
    <section className="py-20 lg:py-40 bg-[#FAF7F2] overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px 200px 0px" }} variants={staggerContainer}>
          <m.div variants={staggerItem} className="mb-12 md:mb-16 flex flex-col items-start">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-5xl lg:text-6xl text-[#1c3664] mb-4 leading-[1.15]">
              מה כולל תהליך הליווי של יועצי משכנתאות בראשון לציון?
            </h2>
            <div className="h-1.5 w-24 bg-[#F1662A] rounded-full mb-8" />
            <p className="text-lg md:text-xl lg:text-2xl text-[#1c3664]/80 font-light leading-relaxed max-w-5xl">
              {`התהליך ב"אבי - הבית למשכנתאות" הוא שקוף, מהיר ונטול בירוקרטיה מבחינתכם:`}
            </p>
          </m.div>

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

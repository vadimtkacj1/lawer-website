"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  {
    t: "אבחון ותכנון",
    d: "אנחנו יושבים יחד (פיזית או בזום), מנתחים את ההכנסות, ההוצאות והתוכניות העתידיות שלכם ושל המשפחה.",
  },
  {
    t: "אישור עקרוני",
    d: 'אני מכין ומגיש את התיק לבנקים בצורה מוקפדת ו"אפויה" היטב שמונעת סירובים או עיכובים מיותרים.',
  },
  {
    t: "מכרז ריביות",
    d: "אני לוקח את התמהיל המדויק שבנינו ומבצע משא ומתן אגרסיבי מול הבנקים השונים כדי להשיג את הריביות הנמוכות ביותר.",
  },
  {
    t: "חתימות ובירוקרטיה",
    d: "אני מלווה אתכם צעד אחר צעד עד לקבלת המפתח, וחוסך לכם את ההתרוצצות המתישה מול פקידים, שמאים ועורכי דין",
  },
];

export default function HolonProcessSection() {
  return (
    <section className="py-20 lg:py-40 bg-[#FAF7F2] overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <div className="mb-16 md:mb-20 flex flex-col items-start">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-7xl text-[#1c3664] mb-4 leading-[1.15]">
              איך עובד תהליך ייעוץ המשכנתאות איתנו?
            </h2>
            <div className="h-1.5 w-24 bg-[#F1662A] rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {steps.map((step, i) => (
              <motion.div key={i} variants={staggerItem} className="relative group flex flex-col items-start">
                <div className="text-6xl lg:text-8xl font-black text-[#F1662A]/20 mb-6 group-hover:text-[#F1662A]/40 transition-colors duration-500 select-none">
                  0{i + 1}
                </div>
                <div className="border-r-2 border-[#1c3664]/10 pr-6 group-hover:border-[#F1662A] transition-colors duration-500 text-right">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1c3664] mb-4 leading-tight">{step.t}</h3>
                  <p className="text-lg lg:text-xl text-[#1c3664]/70 font-light leading-relaxed">{step.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

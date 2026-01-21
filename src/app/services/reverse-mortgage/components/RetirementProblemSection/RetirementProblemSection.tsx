"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function RetirementProblemSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-8 space-y-6 md:space-y-10">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-5xl lg:text-7xl text-white leading-tight">
              הפנסיה לא מספיקה <br />
              <span className="text-orange">לרמת החיים שחלמתם?</span>
            </h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-5xl ml-auto">
              עבדתם קשה כל החיים, והיום יש בבעלותכם נכס ששווה מיליונים. אך לעיתים קרובות הפנסיה לא מספיקה לעזור לילדים או למימון הוצאות בלתי צפויות.
            </p>
          </div>
          <div className="lg:col-span-4 border-r-8 border-orange pr-8">
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-bold italic">
              "אתם יושבים על מכרה זהב - אני כאן כדי לעזור לכם להשתמש בו בחוכמה."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
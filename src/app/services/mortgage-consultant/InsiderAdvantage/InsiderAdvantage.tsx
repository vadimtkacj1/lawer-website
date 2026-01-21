"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function InsiderAdvantage() {
  return (
    /* SECTION: Deep blue background, compact vertical spacing */
    <section className="relative py-12 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[110rem] text-right">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
        >
          {/* Main Statement */}
          <div className="lg:col-span-8 space-y-4 md:space-y-6">
            <h2 className="font-noto-sans-hebrew font-black text-2xl md:text-5xl lg:text-7xl 3xl:text-8xl text-white leading-tight">
              היתרון של איש מבפנים: <br />
              <span className="text-orange border-b-4 md:border-b-8 border-orange pb-2 inline-block">הבנק דואג לבנק, אני דואג לכם.</span>
            </h2>
          </div>

          {/* Expert Insight */}
          <div className="lg:col-span-4 relative">
            <div className="border-r-4 md:border-r-8 border-orange pr-6 md:pr-10 py-2">
              <p className="text-lg md:text-2xl lg:text-3xl 3xl:text-4xl text-white/90 font-light leading-relaxed">
                היועץ בבנק עובד עבור הבנק. המטרה שלו היא למכור לכם כסף ביוקר. כמי שהגיע מתוך המערכת (יוצא בנק דיסקונט), אני יודע על אילו ריביות אפשר להתמקח ואיך להפוך את ה"לא" ל"כן".
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
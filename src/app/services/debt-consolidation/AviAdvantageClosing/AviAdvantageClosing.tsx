"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function AviAdvantageClosing() {
  return (
    <section 
      dir="rtl" 
      className="relative py-12 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start lg:items-center"
        >
          <div className="lg:col-span-8">
            <motion.h2 
              variants={staggerItem}
              className="font-noto-sans-hebrew font-black text-xl md:text-5xl lg:text-7xl text-white leading-[1.3] md:leading-tight"
            >
              הפקיד בבנק מייצג את הבנק. <br />
              <span className="text-orange inline-block mt-1">
                אני מייצג את האינטרס שלכם.
              </span>
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerItem}
            className="lg:col-span-4 border-r-2 md:border-r-8 border-orange pr-4 md:pr-8 mt-6 lg:mt-0"
          >
            <p className="text-base md:text-xl lg:text-2xl text-white font-medium italic leading-relaxed opacity-95">
              "כיוצא המערכת (בנק דיסקונט), אני יודע בדיוק עד לאן אפשר ללחוץ את הבנק בריביות כדי שתחזרו לישון טוב בלילה."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
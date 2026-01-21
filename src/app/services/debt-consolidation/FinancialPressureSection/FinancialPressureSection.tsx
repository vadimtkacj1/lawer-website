"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function FinancialPressureSection() {
  return (
    <section 
      dir="rtl" 
      className="relative py-12 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={staggerContainer} 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <div className="lg:col-span-8 space-y-4 md:space-y-10">
            <motion.h2 
              variants={staggerItem}
              className="font-noto-sans-hebrew font-black text-xl md:text-6xl lg:text-7xl text-white leading-[1.2] md:leading-[1.15]"
            >
              ה-1 או ה-10 לחודש מגיע, <br />
              <span className="text-orange border-b-2 md:border-b-8 border-orange pb-1 md:pb-2 inline-block mt-1">
                ואיתו הלחץ בחזה.
              </span>
            </motion.h2>
            
            <motion.p 
              variants={staggerItem}
              className="text-base md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-5xl"
            >
              אתם עובדים קשה ומרוויחים יפה, אבל בסוף החודש נשארים עם הלשון בחוץ. הבית שלכם הוא לא רק מקום לגור בו, הוא הכלי הפיננסי הכי חזק שיש לכם כדי למחוק את המינוס.
            </motion.p>
          </div>

          <motion.div variants={staggerItem} className="lg:col-span-4 relative mt-6 lg:mt-0">
            <div className="border-r-2 md:border-r-8 border-orange pr-4 md:pr-10 py-1 md:py-2">
              <p className="text-base md:text-2xl lg:text-3xl text-white font-bold italic leading-snug">
                "אני כאן כדי לגלות לכם סוד: אפשר להקטין את ההוצאות ב-3,000 עד 5,000 שקלים בכל חודש."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Clock, TrendingDown } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function MortgageRecycleSection() {
  return (
    <section 
      dir="rtl" 
      className="relative py-12 md:py-32 lg:py-40 bg-cream overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          
          <motion.div variants={staggerItem} className="mb-12 md:mb-24 text-center">
            <h2 className="font-noto-sans-hebrew font-black text-xl md:text-6xl lg:text-8xl text-[#1c3664] leading-tight">
              מיחזור משכנתא: <br />
              <span className="text-orange relative inline-block mt-1">
                מתי חייבים לבדוק כדאיות?
                <span className="absolute -bottom-1 left-0 w-full h-1 md:h-3 bg-orange/30 rounded-full" />
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 lg:gap-32">
            <motion.div variants={staggerItem} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 md:w-24 md:h-24 rounded-full border-2 border-orange/20 flex items-center justify-center text-orange mb-4 md:mb-8">
                <Clock className="w-7 h-7 md:w-16 md:h-16" strokeWidth={1.2} />
              </div>
              <h3 className="font-noto-sans-hebrew font-bold text-lg md:text-3xl lg:text-4xl text-[#1c3664] mb-2 md:mb-6">
                המשכנתא בת יותר מ-3 שנים?
              </h3>
              <p className="text-base md:text-xl lg:text-2xl text-[#1c3664]/70 font-light leading-relaxed max-w-md">
                הריביות והמסלולים בשוק השתנו מקצה לקצה. ייתכן שאתם משלמים אלפי שקלים מיותרים בכל שנה בגלל מסלולים לא מעודכנים.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 md:w-24 md:h-24 rounded-full border-2 border-[#1c3664]/10 flex items-center justify-center text-[#1c3664] mb-4 md:mb-8">
                <TrendingDown className="w-7 h-7 md:w-16 md:h-16" strokeWidth={1.2} />
              </div>
              <h3 className="font-noto-sans-hebrew font-bold text-lg md:text-3xl lg:text-4xl text-[#1c3664] mb-2 md:mb-6">
                הקרן לא יורדת?
              </h3>
              <p className="text-base md:text-xl lg:text-2xl text-[#1c3664]/70 font-light leading-relaxed max-w-md">
                אם המשכנתא צמודה למדד והחוב שלכם לא קטן, אתם נמצאים במצב מסוכן שחייבים לטפל בו מיידית לפני שהחוב יתפח.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
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
          
          <motion.div variants={staggerItem} className="mb-12 md:mb-24">
            <h2 className="font-noto-sans-hebrew font-black text-xl md:text-6xl lg:text-8xl text-[#1c3664] leading-tight">
              מתי כדאי להשתמש <br />
              <span className="text-orange relative inline-block mt-1">
                בפתרון הזה?
                <span className="absolute -bottom-1 left-0 w-full h-1 md:h-3 bg-orange/30 rounded-full" />
              </span>
            </h2>
            <p className="text-base md:text-2xl lg:text-3xl text-[#1c3664]/80 font-light leading-relaxed mt-6 md:mt-12 max-w-5xl">
              כמי שמלווה מאות משפחות באיזור המרכז והסביבה, אני רואה 3 שימושים עיקריים ונפוצים:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <motion.div variants={staggerItem} className="flex flex-col">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-orange/10 flex items-center justify-center text-orange mb-4 md:mb-6">
                <span className="font-black text-2xl md:text-4xl">1</span>
              </div>
              <h3 className="font-noto-sans-hebrew font-bold text-lg md:text-2xl lg:text-3xl text-[#1c3664] mb-3 md:mb-4">
                עזרה לילדים (הון עצמי)
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-[#1c3664]/70 font-light leading-relaxed">
                הילד מתחתן ורוצה לקנות דירה? במקום לתת לו את החסכונות שלכם, אתם לוקחים כסף זול על הבית שלכם ועוזרים לו להגיע לדירה, מבלי לפגוע ברמת החיים השוטפת שלכם.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-col">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-orange/10 flex items-center justify-center text-orange mb-4 md:mb-6">
                <span className="font-black text-2xl md:text-4xl">2</span>
              </div>
              <h3 className="font-noto-sans-hebrew font-bold text-lg md:text-2xl lg:text-3xl text-[#1c3664] mb-3 md:mb-4">
               <a href="https://www.avi-mashkanta.com/services/loan-consolidation" className="hyper-link" target="_blank" title="מחזור ואיחוד הלוואות | אבי בוקעי - הבית למשכנתאות">איחוד הלוואות </a>(סגירת מינוס)
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-[#1c3664]/70 font-light leading-relaxed">
                אם צברתם הלוואות קטנות ויקרות, זה הפתרון הקלאסי "לנקות שולחן" ולהתחיל מחדש עם תזרים חיובי.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-col">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-orange/10 flex items-center justify-center text-orange mb-4 md:mb-6">
                <span className="font-black text-2xl md:text-4xl">3</span>
              </div>
              <h3 className="font-noto-sans-hebrew font-bold text-lg md:text-2xl lg:text-3xl text-[#1c3664] mb-3 md:mb-4">
               <a href="https://www.avi-mashkanta.com/services/mortgage-for-purchase" className="hyper-link" target="_blank" title="משכנתא לרכישת דירה | אבי בוקעי - הבית למשכנתאות">השקעה עסקיות או נדל"ן</a>
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-[#1c3664]/70 font-light leading-relaxed">
                שימוש בכסף זול מהבית הפרטי כדי למנף השקעה שמניבה תשואה גבוהה יותר מהריבית שאתם משלמים.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
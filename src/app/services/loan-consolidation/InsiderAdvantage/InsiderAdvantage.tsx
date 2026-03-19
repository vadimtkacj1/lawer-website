"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowLeftRight, CalendarClock, Percent, AlertCircle } from "lucide-react";

export default function InsiderAdvantage() {
  return (
    <section className="relative py-24 lg:py-40 bg-[#1c3664] overflow-hidden text-right" dir="rtl">
      {/* Мягкие световые акценты на фоне (без резких границ) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange/20 blur-[150px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-24"
        >
          {/* Header & Problem Intro */}
          <div className="max-w-5xl">
            <motion.h2 
              variants={staggerItem}
              className="font-noto-sans-hebrew font-black text-5xl md:text-7xl text-white leading-tight mb-10"
            >
              מה זה בעצם <br />
              <span className="text-orange">"איחוד הלוואות"?</span>
            </motion.h2>
            
            <motion.div variants={staggerItem} className="space-y-6">
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                רוב הישראלים מחזיקים במה שאני מגדיר כ<span className="font-bold text-white">"הלוואות לא יעילות"</span>. 
                הבעיה היא לא עצם לקיחת הכסף, אלא איך לקחתם אותו: מדובר בהלוואות שמאופיינות בריביות גבוהות מאוד, 
                וחשוב מכך – בפריסה לא מותאמת או כתוצאה מתכנון פיננסי לא נכון.
              </p>
              <div className="flex gap-4 items-start border-r-2 border-orange/50 pr-6 py-2">
                <p className="text-lg md:text-xl text-white/70 italic leading-relaxed">
                  כשדוחסים התחייבות גדולה (כמו רכב או שיפוץ) לתקופה קצרה מדי ובריבית יקרה, 
                  ההחזר החודשי מזנק וחונק את העו"ש – גם אם המשכורות שלכם יפות.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Solution Grid (Transparent Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-white/10 pt-16">
            {/* The Strategy */}
            <motion.div variants={staggerItem} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-orange/10 rounded-lg">
                  <ArrowLeftRight className="text-orange w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white">הפתרון שלי:</h3>
              </div>
              <p className="text-xl text-white/80 leading-relaxed">
                בתהליך של איחוד הלוואות, אנחנו לוקחים את כל ההלוואות הקטנות והמעיקות האלו, ומכניסים אותן לתוך המשכנתא של הבית. 
                <span className="text-orange font-bold mr-2">למה זה גאוני?</span>
              </p>
            </motion.div>

            {/* Practical Benefits */}
            <motion.div variants={staggerItem} className="grid grid-cols-1 gap-8">
              <div className="flex gap-6 border border-white/10 p-6 rounded-2xl hover:border-orange/30 transition-colors">
                <CalendarClock className="text-orange shrink-0 w-10 h-10" />
                <div>
                  <h4 className="text-white font-bold text-2xl mb-2">פריסה ארוכה:</h4>
                  <p className="text-white/60 text-lg">במקום להחזיר את הכסף ב-3 שנים, פורסים אותו ל-20 או 30 שנה.</p>
                </div>
              </div>

              <div className="flex gap-6 border border-white/10 p-6 rounded-2xl hover:border-orange/30 transition-colors">
                <Percent className="text-orange shrink-0 w-10 h-10" />
                <div>
                  <h4 className="text-white font-bold text-2xl mb-2">ריבית נמוכה:</h4>
                  <p className="text-white/60 text-lg">הריבית על משכנתא זולה משמעותית מריבית של הלוואה בנקאית רגילה או הלוואה מחברת אשראי.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Final Result Statement */}
          <motion.div 
            variants={staggerItem}
            className="pt-16 border-t border-white/10"
          >
            <div className="max-w-4xl space-y-8">
              <h4 className="text-orange font-bold tracking-widest uppercase text-sm">התוצאה הסופית:</h4>
              <p className="text-3xl md:text-5xl font-black text-white leading-tight">
                סגרנו את המינוס, מחקנו את ההלוואות הקטנות, ונשארנו עם 
                <span className="text-orange"> תשלום חודשי אחד נמוך ומסודר.</span>
              </p>
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                פתאום יש כסף פנוי לחיות - בסיס יציב שיעזור לכם מעתה והלאה להתנהל בצורה נכונה, 
                מתוכננת ואחראית יותר.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
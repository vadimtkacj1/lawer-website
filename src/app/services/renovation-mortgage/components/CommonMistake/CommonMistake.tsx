"use client";

import { motion } from "framer-motion";
/* Анимации из вашей библиотеки */
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const optimizedViewport = {
  once: true,
  margin: "0px 0px -100px 0px",
  amount: 0.2,
};

const advantages = [
  {
    title: "פריסה ארוכה",
    description: "ניתן לפרוס את הסכום ל-20 או 30 שנה.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
  },
  {
    title: "החזר חודשי נמוך",
    description: "במקום לשלם 4,000 ₪ בחודש על הלוואה קצרה, תשלמו כמה מאות שקלים בודדים בחודש.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path>
      </svg>
    ),
  },
  {
    title: "ריבית זולה",
    description: "הריביות במשכנתא לשיפוץ נמוכות משמעותית מריביות של הלוואות רגילות.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
  },
];

export default function CommonMistake() {
  return (
    <section className="py-20 lg:py-32 bg-blue-dk relative overflow-hidden">
      {/* Blueprint Grid - сделана чуть ярче для текстуры */}
      <div className="absolute inset-0 opacity-[0.08] z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-mistake" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-mistake)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
        >
          {/* Section Title */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
              הטעות הנפוצה: <br className="md:hidden" />
              <span className="text-orange">הלוואה רגילה</span> מול משכנתא
            </h2>
          </motion.div>

          {/* Problem Block - Теперь без сплошного фона, только рамка */}
          <motion.div 
            variants={staggerItem} 
            className="border-y border-white/10 py-10 mb-20"
          >
            <p className="font-noto-sans-hebrew text-xl md:text-2xl text-white/80 leading-relaxed text-center max-w-4xl mx-auto">
              כשאתם לוקחים הלוואה בנקאית רגילה לשיפוץ, הבנק דורש החזר תוך{" "}
              <span className="text-orange font-bold">5 עד 7 שנים</span>. <br />
              זה גורם ל<span className="text-white font-bold underline decoration-orange underline-offset-8">החזר חודשי גבוה</span> שחונק את התקציב המשפחתי.
            </p>
          </motion.div>

          {/* Advantages Grid - Блоки центрированы, без фона */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle - Прозрачный круг с бордером */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full border border-white/10 text-orange group-hover:border-orange group-hover:bg-orange/5 transition-all duration-300">
                  {advantage.icon}
                </div>

                <h4 className="font-noto-sans-hebrew font-bold text-2xl text-white mb-4 group-hover:text-orange transition-colors">
                  {advantage.title}
                </h4>
                
                {/* Разделитель вместо фона */}
                <div className="w-12 h-0.5 bg-orange/30 mb-4 group-hover:w-20 transition-all" />

                <p className="font-noto-sans-hebrew text-lg text-white/60 leading-relaxed max-w-xs">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Решение (Текст снизу для баланса) */}
          <motion.div variants={staggerItem} className="mt-20 text-center">
            <p className="font-noto-sans-hebrew text-xl text-white/40">
              מכיוון שיש לכם נכס, אנחנו יכולים להרחיב את המשכנתא הקיימת בצורה חכמה.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
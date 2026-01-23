"use client";

import { motion } from "framer-motion";
import { Coins, CalendarDays, HandCoins } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const moneyOptions = [
  {
    t: "סכום חד-פעמי",
    d: "מתאים למטרות גדולות ומוגדרות מראש, כמו שיפוץ מקיף של הבית או רכישת רכב חדש, המאפשר לכם לקבל את כל ההון הדרוש ברגע אחד.",
    icon: Coins
  },
  {
    t: "קצבה חודשית",
    d: "פתרון אידיאלי להשלמת ההכנסה החודשית. הכסף מועבר אליכם מדי חודש, מה שמאפשר לכם לנהל אורח חיים שקט, ברור ובטוח כלכלית.",
    icon: CalendarDays
  },
  {
    t: "מסגרת אשראי",
    d: "גמישות פיננסית מקסימלית. אתם מקבלים מסגרת כספית ומושכים ממנה רק את מה שאתם צריכים ובזמן שאתם צריכים, בשליטה מלאה שלכם.",
    icon: HandCoins
  }
];

export default function AviAdvantageReverse() {
  return (
    <section className="relative py-20 md:py-32 bg-[#1c3664] overflow-hidden" dir="rtl">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          {/* Header Section */}
          <motion.div variants={staggerItem} className="max-w-4xl mb-20">
            <h2 className="font-noto-sans-hebrew font-black text-4xl md:text-6xl text-white leading-tight mb-8">
              כסף לכל מטרה – <br />
              <span className="text-orange">אתם מחליטים</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl">
              רוצים לשפץ את הבית, לעזור לילדים לקנות דירה, לסגור חובות ישנים או אפילו לטוס לטיול מסביב לעולם? הכסף הוא שלכם ואתם מחליטים איך להשתמש בו.
            </p>
          </motion.div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {moneyOptions.map((item, i) => (
              <motion.div 
                key={i} 
                variants={staggerItem} 
                className="group flex flex-col items-start"
              >
                {/* Icon Container */}
                <div className="mb-6 p-3 bg-white/5 rounded-2xl group-hover:bg-orange/10 transition-colors duration-300">
                  <item.icon className="w-10 h-10 md:w-12 md:h-12 text-orange" strokeWidth={1.5} />
                </div>

                {/* Content Block */}
                <div className="border-r-4 border-orange pr-6 flex-1">
                  <h3 className="font-noto-sans-hebrew font-bold text-2xl text-white mb-4">
                    {item.t}
                  </h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Text */}
          <motion.div variants={staggerItem} className="max-w-3xl">
            <p className="text-xl md:text-2xl text-orange font-medium">
              כך אתם נהנים מנזילות פיננסית מלאה, בלי להתחייב לתשלומים חודשיים, ובשליטה מלאה על הכסף שלכם.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
    </section>
  );
}
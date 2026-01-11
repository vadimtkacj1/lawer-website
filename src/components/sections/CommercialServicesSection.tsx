"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * TypeScript Interfaces
 */
interface IconProps {
  className?: string;
}

interface ServiceItem {
  title: string;
  description: string;
  Art: React.FC<IconProps>;
}

/**
 * --- Artistic Line Art Components ---
 */

const LegalStabilityArt: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" className={className}>
    <path d="M100 20V180M60 40H140M70 180H130" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M40 80C60 60 140 60 160 80C180 100 120 140 100 140C80 140 20 100 40 80Z" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <circle cx="100" cy="80" r="15" stroke="currentColor" strokeWidth="1" className="text-orange" />
  </svg>
);

const BalanceArt: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" className={className}>
    <path d="M100 40L100 160M40 100L160 100" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M160 100C160 133.137 133.137 160 100 160C66.8629 160 40 133.137 40 100C40 66.8629 66.8629 40 100 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M100 40L120 20M100 40L80 20" stroke="currentColor" strokeWidth="2" className="text-orange" />
    <circle cx="100" cy="100" r="4" fill="currentColor" className="text-orange" />
  </svg>
);

const TreeHouseArt: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" className={className}>
    <path d="M100 170V110M100 170L80 185M100 170L120 185" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M60 110L100 70L140 110H60Z" stroke="currentColor" strokeWidth="1.5" className="text-orange" />
    <circle cx="100" cy="70" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
    <path d="M70 60C50 40 100 20 130 50" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const OpportunityArt: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" className={className}>
    <rect x="60" y="40" width="80" height="120" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M140 100H170M170 100L155 85M170 100L155 115" stroke="currentColor" strokeWidth="2" className="text-orange" />
    <circle cx="90" cy="100" r="10" stroke="currentColor" strokeWidth="1" />
    <line x1="60" y1="160" x2="140" y2="160" stroke="currentColor" strokeWidth="4" opacity="0.2" />
  </svg>
);

const services: ServiceItem[] = [
  {
    title: "איחוד הלוואות – להחזיר את האוויר לנשימה",
    description: "אנחנו מתמחים במינוף הנכס הקיים כדי לאחד את כל ההלוואות הקטנות והיקרות למשכנתא אחת מסודרת, בפריסה ארוכה ובריבית נמוכה משמעותית. המטרה: להקטין את החזר החודשי באלפי שקלים.",
    Art: LegalStabilityArt,
  },
  {
    title: "מיחזור משכנתא – למה שתשלמו יותר?",
    description: "בדיקת כדאיות למיחזור שאנו מבצעים ללא עלות יכולה לחסוך לכם הון לאורך חיי המשכנתא. אנחנו בודקים את הסטטוס הכלכלי ומתאימים את התנאים להיום.",
    Art: BalanceArt,
  },
  {
    title: "משכנתא לזוגות צעירים ולציבור החרדי",
    description: "אנו מתמחים בהשגת אחוזי מימון מקסימליים ומכירים לעומק את צרכי המגזרים השונים, כולל טיפול בתוכניות 'מחיר למשתכן' וסיוע בקבלת משכנתא ראשונה.",
    Art: TreeHouseArt,
  },
  {
    title: "פתרונות למסורבי בנקים (BDI שלילי)",
    description: "קיבלתם סירוב מהבנק? בזכות ההיכרות המעמיקה עם המערכת המשפטית והבנקאית, אנו יודעים איך לבנות את התיק מחדש ולהפוך את ה'לא' ל'כן'.",
    Art: OpportunityArt,
  },
];

export default function CommercialServicesSection() {
  return (
    <section className="relative bg-[#FCFBF8] py-24 lg:py-40 overflow-hidden text-right" dir="rtl">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-dk/[0.02] -skew-x-12 transform origin-top shadow-inner pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div className="mb-24 lg:mb-32 text-center" variants={staggerItem}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heebo font-black text-blue-dk mb-8 leading-tight">
              השירותים שלנו: <br />
              <span className="text-orange">דיוק פיננסי</span> וליווי משפטי
            </h2>
            <p className="text-xl md:text-2xl text-blue-dk/70 max-w-2xl mx-auto font-medium leading-relaxed">
              אנחנו לא רק יועצים, אנחנו השותפים שלכם לדרך לביטחון כלכלי ושקט נפשי.
            </p>
          </motion.div>

          {/* Services Content - Vertical Stack */}
          <div className="space-y-32 lg:space-y-48">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex flex-col items-center text-center"
                >
                  {/* 1. Text Side (Now on Top) */}
                  <div className="w-full mb-12 space-y-6">
                    <h3 className="text-3xl lg:text-5xl font-bold text-blue-dk leading-tight">
                      {service.title}
                    </h3>
                    <div className="w-16 h-1 bg-orange mx-auto" />
                    <p className="text-lg lg:text-xl text-blue-dk/80 leading-relaxed font-medium max-w-3xl mx-auto">
                      {service.description}
                    </p>
                  </div>

                  {/* 2. Art Component Side (Now Below) */}
                  <div className="w-full flex justify-center items-center relative">
                    {/* Large Background Number */}
                    <span className="absolute text-[10rem] lg:text-[15rem] font-black text-blue-dk/[0.03] select-none pointer-events-none -z-10">
                      0{index + 1}
                    </span>
                    
                    <div className="w-64 h-64 lg:w-80 lg:h-80 text-blue-dk drop-shadow-2xl">
                       <service.Art className="w-full h-full transform hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
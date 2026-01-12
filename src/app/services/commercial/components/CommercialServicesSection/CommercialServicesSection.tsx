"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * --- Artistic Line Art Components ---
 */
const LegalStabilityArt: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" className={className}>
    <path d="M100 20V180M60 40H140M70 180H130" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
    <path d="M40 80C60 60 140 60 160 80C180 100 120 140 100 140C80 140 20 100 40 80Z" stroke="currentColor" strokeWidth="3" opacity="0.8" />
    <circle cx="100" cy="80" r="15" stroke="currentColor" strokeWidth="6" className="text-orange" />
  </svg>
);

const BalanceArt: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" className={className}>
    <path d="M100 40L100 160M40 100L160 100" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
    <path d="M160 100C160 133.137 133.137 160 100 160C66.8629 160 40 133.137 40 100C40 66.8629 66.8629 40 100 40" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
    <path d="M100 40L120 20M100 40L80 20" stroke="currentColor" strokeWidth="7" className="text-orange" strokeLinecap="round" />
    <circle cx="100" cy="100" r="8" fill="currentColor" className="text-orange" />
  </svg>
);

const TreeHouseArt: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" className={className}>
    <path d="M100 170V110M100 170L80 185M100 170L120 185" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
    <path d="M60 110L100 70L140 110H60Z" stroke="currentColor" strokeWidth="6" className="text-orange" strokeLinejoin="round" />
    <circle cx="100" cy="70" r="50" stroke="currentColor" strokeWidth="4" strokeDasharray="10 5" opacity="0.9" />
  </svg>
);

const OpportunityArt: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" className={className}>
    <rect x="60" y="40" width="80" height="120" rx="6" stroke="currentColor" strokeWidth="5" />
    <path d="M140 100H175M175 100L155 80M175 100L155 120" stroke="currentColor" strokeWidth="7" className="text-orange" strokeLinecap="round" />
    <circle cx="90" cy="100" r="14" stroke="currentColor" strokeWidth="5" />
  </svg>
);

const services = [
  { title: "איחוד הלוואות – להחזיר את האוויר לנשימה", description: "אנחנו מתמחים במינוף הנכס הקיים כדי לאחד את כל ההלוואות הקטנות והיקרות למשכנתא אחת מסודרת.", Art: LegalStabilityArt },
  { title: "מיחזור משכנתא – למה שתשלמו יותר?", description: "בדיקת כדאיות למיחזור שאנו מבצעים ללא עלות יכולה לחסוך לכם הון לאורך חיי המשכנתא.", Art: BalanceArt },
  { title: "משכנתא לזוגות צעירים ולציבור החרדי", description: "אנו מתמחים בהשגת אחוזי מימון מקסימליים ומכירים לעומק את צרכי המגזרים השונים.", Art: TreeHouseArt },
  { title: "פתרונות למסורבי בנקים (BDI שלילי)", description: "קיבלתם סירוב מהבנק? בזכות ההיכרות המעמיקה עם המערכת, אנו נהפוך את ה'לא' ל'כן'.", Art: OpportunityArt },
];

export default function CommercialServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // לוגיקה להתקדמות הקו
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 60%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative bg-[#f9f7f4] py-10 md:py-24 lg:py-40 overflow-hidden text-right" dir="rtl">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="mb-12 md:mb-24 lg:mb-40 text-center"
        >
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl lg:text-7xl font-heebo font-black text-blue-dk mb-4 md:mb-8 leading-tight">
            השירותים שלנו: <br />
            <span className="text-orange">דיוק פיננסי</span> וליווי משפטי
          </motion.h2>
          <motion.div variants={staggerItem} className="w-16 md:w-24 h-1.5 bg-orange mx-auto rounded-full" />
        </motion.div>

        {/* Services Area */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* הקו האחורי (אפור בהיר) - רק בדסקטופ */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-dk/5 hidden lg:block -translate-x-1/2" />
          
          {/* הקו הצומח (כתום) - רק בדסקטופ */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-orange hidden lg:block -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(242,101,34,0.3)]"
          />

          <div className="space-y-12 md:space-y-32 lg:space-y-64">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              
              // חישוב מתי הנקודה צריכה להידלק
              const threshold = index / (services.length - 1);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const dotColor = useTransform(scrollYProgress, [threshold - 0.05, threshold], ["#e5e7eb", "#F26522"]);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col items-center gap-2 md:gap-12 lg:gap-24 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* נקודת ציון אינטראקטיבית על הקו */}
                  <motion.div 
                    style={{ backgroundColor: dotColor }}
                    className="absolute hidden lg:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-[#f9f7f4] z-30 shadow-sm transition-colors duration-300"
                  />
                  
                  {/* Art & Number Side */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center relative h-40 md:h-56 lg:h-80">
                    <span className="absolute text-[6rem] md:text-[10rem] lg:text-[18rem] font-black text-blue-dk/[0.08] select-none font-heebo leading-none">
                      0{index + 1}
                    </span>
                    <div className="relative z-10 w-32 h-32 md:w-52 md:h-52 lg:w-80 lg:h-80 text-blue-dk drop-shadow-md">
                      <service.Art className="w-full h-full" />
                    </div>
                  </div>

                  {/* Text Content Side */}
                  <div className={`w-full lg:w-1/2 space-y-3 md:space-y-6 text-center ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <h3 className="text-xl md:text-4xl lg:text-5xl font-bold text-blue-dk leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-lg lg:text-xl text-blue-dk/80 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 px-4 md:px-0">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * Custom hook for SVG drawing animation
 */
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 2.5, bounce: 0 },
      opacity: { duration: 0.5 }
    }
  }
};

/**
 * --- Premium Abstract Legal Art ---
 */

const ArtConsolidation = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-blue-dk">
    <motion.path d="M40 100 L100 40 L160 100 L100 160 Z" stroke="currentColor" strokeWidth="1" fill="none" variants={draw} />
    <motion.path d="M40 100 H160" stroke="currentColor" strokeWidth="0.5" opacity="0.3" variants={draw} />
    <motion.path d="M100 40 V160" stroke="currentColor" strokeWidth="0.5" opacity="0.3" variants={draw} />
    <motion.circle cx="100" cy="100" r="10" fill="currentColor" className="text-orange" initial={{ scale: 0 }} whileInView={{ scale: 1 }} />
  </svg>
);

const ArtRecycle = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-blue-dk">
    <motion.circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" variants={draw} />
    <motion.path d="M100 40 V160 M40 100 H160" stroke="currentColor" strokeWidth="1" variants={draw} />
    <motion.path d="M140 60 L160 40 M160 40 H130 M160 40 V70" stroke="currentColor" strokeWidth="2" className="text-orange" variants={draw} />
  </svg>
);

const ArtTreeHouse = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-blue-dk">
    <motion.path d="M100 160 V100 M70 130 L100 100 L130 130" stroke="currentColor" strokeWidth="1.5" variants={draw} />
    <motion.path d="M60 100 C60 60, 140 60, 140 100" stroke="currentColor" strokeWidth="1" className="text-orange" variants={draw} />
    <motion.path d="M100 60 V40" stroke="currentColor" strokeWidth="1" variants={draw} />
  </svg>
);

const ArtRefusal = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-blue-dk">
    <motion.rect x="60" y="60" width="80" height="80" stroke="currentColor" strokeWidth="1" variants={draw} />
    <motion.path d="M140 100 H180 M165 85 L180 100 L165 115" stroke="currentColor" strokeWidth="2" className="text-orange" variants={draw} />
    <motion.circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="0.5" opacity="0.4" variants={draw} />
  </svg>
);

const services = [
  {
    title: "איחוד הלוואות – להחזיר את האוויר לנשימה",
    description: "מינוף נכס קיים לאיחוד הלוואות יקרות למשכנתא אחת מסודרת בפריסה ארוכה. אנחנו מקטינים את ההחזר החודשי באלפי שקלים ומחזירים לכם את השקט הכלכלי.",
    Art: ArtConsolidation,
  },
  {
    title: "מיחזור משכנתא – למה שתשלמו יותר?",
    description: "בדיקת כדאיות מקיפה ללא עלות. אנחנו בוחנים את הסטטוס הכלכלי העדכני שלכם ומתאימים את תנאי המשכנתא לריביות האופטימליות בשוק כיום.",
    Art: ArtRecycle,
  },
  {
    title: "משכנתא לזוגות צעירים ולציבור החרדי",
    description: "השגת אחוזי מימון מקסימליים וטיפול בתוכניות 'מחיר למשתכן'. מומחיות ייחודית בליווי המגזר החרדי וזוגות בתחילת דרכם.",
    Art: ArtTreeHouse,
  },
  {
    title: "פתרונות למסורבי בנקים (BDI שלילי)",
    description: "גם אם קיבלתם סירוב - זה לא סוף הדרך. בזכות היכרות עמוקה עם המערכת המשפטית והבנקאית, אנו בונים את התיק מחדש כדי להשיג אישור.",
    Art: ArtRefusal,
  },
];

export default function CommercialServicesSection() {
  return (
    <section className="relative bg-[#F9F8F6] py-24 lg:py-48 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Header Area */}
          <motion.div className="mb-32 text-right" variants={staggerItem}>
            <span className="text-orange font-bold tracking-[0.2em] text-sm uppercase block mb-4">Our Expertise</span>
            <h2 className="text-5xl lg:text-8xl font-black text-blue-dk leading-none tracking-tighter">
              השירותים <br /> <span className="text-orange">שלנו</span>
            </h2>
          </motion.div>

          {/* List Area */}
          <div className="space-y-40 lg:space-y-64">
            {services.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32`}
                >
                  {/* Art side with large Outlined Number */}
                  <div className="w-full lg:w-1/2 relative group">
                    {/* The Number - Now with high-end Outline style */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`absolute -top-16 ${isEven ? '-right-10' : '-left-10'} select-none z-0`}
                    >
                      <span className="text-[12rem] lg:text-[20rem] font-black leading-none text-transparent stroke-blue-dk stroke-1 opacity-[0.07]" style={{ WebkitTextStroke: '1px var(--blue-dk)' }}>
                        0{index + 1}
                      </span>
                    </motion.div>

                    {/* SVG Holder */}
                    <motion.div 
                      className="relative z-10 w-64 h-64 lg:w-[400px] lg:h-[400px] mx-auto"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <item.Art />
                    </motion.div>
                  </div>

                  {/* Content side */}
                  <div className="w-full lg:w-1/2 text-right space-y-6">
                    <motion.div variants={staggerItem}>
                       <h3 className="text-3xl lg:text-6xl font-black text-blue-dk leading-tight mb-6">
                        {item.title}
                      </h3>
                      <div className="w-20 h-1 bg-orange mb-8" />
                      <p className="text-xl lg:text-2xl text-blue-dk/70 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
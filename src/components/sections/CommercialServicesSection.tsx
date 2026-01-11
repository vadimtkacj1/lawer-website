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
 * --- SOLID & BOLD ART COMPONENTS ---
 * Thicker lines (strokeWidth 3-4) for maximum visibility.
 */

const ArtConsolidation: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className || "w-full h-full text-blue-dk"}>
    <rect x="40" y="150" width="120" height="10" fill="currentColor" opacity="0.2" />
    <motion.path 
      d="M100 30 L160 80 V150 H40 V80 L100 30Z" 
      stroke="currentColor" 
      strokeWidth="3" 
      fill="none" 
    />
    <motion.path 
      d="M70 110 H130" 
      stroke="currentColor" 
      strokeWidth="4" 
      className="text-orange" 
    />
    <circle cx="100" cy="75" r="15" fill="currentColor" className="text-orange" />
  </svg>
);

const ArtRecycle: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className || "w-full h-full text-blue-dk"}>
    <path d="M160 100 A60 60 0 1 1 40 100 A60 60 0 1 1 160 100" stroke="currentColor" strokeWidth="3" strokeDasharray="10 5" />
    <path d="M100 60 V140 M60 100 H140" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <motion.path 
      d="M130 50 L160 50 V80" 
      stroke="currentColor" 
      strokeWidth="4" 
      className="text-orange" 
      strokeLinecap="round" 
    />
  </svg>
);

const ArtTreeHouse: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className || "w-full h-full text-blue-dk"}>
    <path d="M100 170 V100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M50 100 L100 50 L150 100" stroke="currentColor" strokeWidth="4" className="text-orange" />
    <path d="M100 50 C140 10, 180 60, 150 100" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    <path d="M100 50 C60 10, 20 60, 50 100" stroke="currentColor" strokeWidth="2" opacity="0.4" />
  </svg>
);

const ArtRefusal: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className || "w-full h-full text-blue-dk"}>
    <rect x="50" y="40" width="100" height="130" stroke="currentColor" strokeWidth="3" fill="none" />
    <circle cx="100" cy="105" r="25" stroke="currentColor" strokeWidth="4" className="text-orange" />
    <path d="M100 105 L120 125" stroke="currentColor" strokeWidth="4" className="text-orange" strokeLinecap="round" />
  </svg>
);

const services: ServiceItem[] = [
  {
    title: "איחוד הלוואות – להחזיר את האוויר לנשימה",
    description: "אנחנו מומחים במינוף הנכס הקיים כדי לאחד את כל ההלוואות היקרות למשכנתא אחת מסודרת. המטרה שלנו היא להקטין את ההחזר החודשי באלפי שקלים ולהעניק לכם שקט נפשי.",
    Art: ArtConsolidation,
  },
  {
    title: "מיחזור משכנתא – למה שתשלמו יותר?",
    description: "בדיקת כדאיות מקיפה ללא עלות. אנחנו בוחנים את הסטטוס הכלכלי העדכני שלכם ומתאימים את תנאי המשכנתא לריביות האופטימליים בשוק כיום כדי לחסוך לכם הון.",
    Art: ArtRecycle,
  },
  {
    title: "משכנתא לזוגות צעירים ולציבור החרדי",
    description: "השגת אחוזי מימון מקסימליים וטיפול בתוכניות 'מחיר למשתכן'. מומחיות ייחודית בליווי המגזר החרדי וזוגות בתחילת דרכם להשגת הבית הראשון.",
    Art: ArtTreeHouse,
  },
  {
    title: "פתרונות למסורבי בנקים (BDI שלילי)",
    description: "אל תוותרו על החלום. בזכות היכרות עמוקה עם המערכת המשפטית והבנקאית, אנו בונים את התיק מחדש בצורה מקצועית כדי להפוך סירוב לאישור.",
    Art: ArtRefusal,
  },
];

export default function CommercialServicesSection() {
  return (
    <section className="relative bg-white py-24 lg:py-48 text-right overflow-hidden" dir="rtl">
      {/* Structural divider line for Desktop */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-blue-dk/10 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Main Header */}
          <motion.div className="mb-32 lg:mb-56 border-b-4 border-blue-dk pb-12" variants={staggerItem}>
            <div className="flex flex-col lg:flex-row justify-between items-baseline gap-8">
              <h2 className="text-6xl lg:text-[140px] font-black text-blue-dk leading-none tracking-tighter">
                SERVICES
              </h2>
              <p className="text-2xl lg:text-4xl font-bold text-orange italic">
                הכוח הפיננסי בידיים שלכם
              </p>
            </div>
          </motion.div>

          {/* Service Items */}
          <div className="space-y-32 lg:space-y-0">
            {services.map((item, index) => {
              const isEven = index % 2 === 0;
              const ServiceArt = item.Art;
              return (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  className={`flex flex-col lg:flex-row items-stretch min-h-[500px] border-b border-blue-dk/10 last:border-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Visual Column */}
                  <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col items-center justify-center relative bg-[#fafafa]">
                    {/* Number - Clearly visible */}
                    <div className="absolute top-10 left-10">
                      <span className="text-8xl lg:text-[180px] font-black text-blue-dk/10 leading-none select-none">
                        0{index + 1}
                      </span>
                    </div>
                    
                    <div className="w-64 h-64 lg:w-96 lg:h-96 relative z-10">
                      <ServiceArt />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="w-full lg:w-1/2 p-12 lg:p-24 space-y-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <h3 className="text-4xl lg:text-6xl font-black text-blue-dk leading-tight">
                        {item.title}
                      </h3>
                      <div className="w-20 h-2 bg-orange rounded-full" />
                    </div>
                    <p className="text-xl lg:text-3xl text-blue-dk/70 leading-relaxed font-medium">
                      {item.description}
                    </p>
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
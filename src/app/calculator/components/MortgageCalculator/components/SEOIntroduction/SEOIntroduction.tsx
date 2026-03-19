"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUpFast, viewportOptions } from "@/lib/animations";

export default function SEOIntroduction() {
  return (
    <motion.div
      className="w-full max-w-5xl px-4 md:px-6 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUpFast}
      dir="rtl"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-dk pb-5 md:pb-6 leading-tight">
       מחשבון משכנתא פשוט ומהיר: גלו את ההחזר החודשי שלכם
      </h1>
      <p className="text-base md:text-lg text-blue-dk/70 leading-relaxed max-w-3xl mx-auto">
        מתכננים קניית דירה? בעזרת מחשבון משכנתא פשוט וידידותי, תוכלו לבצע חישוב משכנתא אמין ולקבל תמונת מצב מיידית. בניגוד אל מחשבון הלוואות בסיסי, מחשבון משכנתאות זה מותאם במיוחד לרכישת נכסים ולתכנון ההון העצמי הנדרש. הזינו את הנתונים אל מחשבון משכנתא למטה וקבלו הערכה ראשונית.

        <p className="text-base md:text-lg text-blue-dk/70 leading-relaxed max-w-3xl mx-auto">
        זכרו: <span className="font-bold text-orange">כדי להשיג את הריביות הטובות ביותר שמותאמות בדיוק לפרופיל ולמקצוע שלכם, אנחנו כאן בשבילכם! </span>
        </p>
        
      </p>
    </motion.div>
  );
}


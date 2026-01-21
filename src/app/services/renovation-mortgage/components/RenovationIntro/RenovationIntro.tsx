"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const optimizedViewport = {
  once: true,
  margin: "0px 0px -50px 0px",
  amount: 0.1,
};

export default function RenovationIntro() {
  return (
    <section className="relative py-16 md:py-24 lg:py-36 bg-cream overflow-hidden">
      
      {/* Background Pattern
         - Increased opacity from 0.15 to 0.35 for better visibility.
         - Increased strokeWidth inside the SVG from 0.5 to 1 for thicker lines.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.35]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-bg" width="40" height="40" patternUnits="userSpaceOnUse">
              {/* strokeWidth increased to "1" here */}
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1c3664" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-bg)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
          className="flex flex-col space-y-12 md:space-y-16"
        >
          {/* Main Hook Paragraph */}
          <motion.div variants={staggerItem} className="w-full max-w-5xl mx-auto text-right">
            <h2 className="font-noto-sans-hebrew text-2xl md:text-4xl lg:text-5xl leading-[1.4] text-blue-dk font-light">
              אתם מסתכלים על המטבח הישן וכבר מדמיינים את האי החדש. או אולי המשפחה התרחבה ואתם חייבים להוסיף עוד חדר, או סתם בא לכם לרענן את הריצוף והאמבטיה. <br />
              <span className="font-bold text-blue-dk italic block mt-4 lg:mt-6">
                 השיפוץ הוא חלום,
              </span>
              אבל המימון שלו יכול להפוך מהר מאוד לסיוט כלכלי אם לא עושים אותו נכון.
            </h2>
          </motion.div>

          {/* Expert Introduction Card */}
          <motion.div
            variants={staggerItem}
            className="relative bg-white/95 backdrop-blur-md border border-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(28,54,100,0.08)] overflow-hidden"
          >
            {/* Subtle brand accent on the right */}
            <div className="absolute top-0 right-0 w-2 h-full bg-orange hidden md:block" />
            
            <div className="relative z-10 flex flex-col items-end">
              <h3 className="font-noto-sans-hebrew text-3xl md:text-5xl font-black text-blue-dk mb-8 text-right leading-tight">
                נעים להכיר, אני <span className="text-orange">אבי בוקעי</span>
              </h3>

              <div className="space-y-6 md:space-y-8 text-right">
                <p className="font-noto-sans-hebrew text-lg md:text-2xl leading-relaxed text-blue-dk/80">
                  הבעלים של "אבי - הבית למשכנתאות". כיוצא המערכת הבנקאית, אני רואה את זה קורה המון: אנשים בחולון ואיזור המרכז לוקחים "הלוואה לכל מטרה" מהירה באפליקציה כדי לשפץ, ומשלמים על כך ביוקר.
                </p>
                
                <p className="font-noto-sans-hebrew text-lg md:text-2xl leading-relaxed text-blue-dk">
                  אני כאן כדי להראות לכם שיש דרך אחרת. דרך זולה יותר, חכמה יותר ורגועה יותר:
                  <span className="font-bold text-orange relative inline-block mr-2">
                    משכנתא לשיפוץ.
                    <span className="absolute bottom-1 left-0 w-full h-2 bg-orange/10 -z-10" />
                  </span>
                </p>
              </div>

              {/* Action Button */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 md:mt-14 w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-blue-dk text-white px-10 md:px-14 py-4 md:py-6 rounded-full font-bold text-lg md:xl shadow-xl shadow-blue-dk/20 hover:bg-orange hover:shadow-orange/30 transition-all duration-300">
                  בואו נבדוק את האפשרויות שלכם
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
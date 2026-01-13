"use client";

import { motion } from "framer-motion";
import { fadeInUpFast, staggerContainer } from "@/lib/animations";

export default function CommercialWhySection() {
  return (
    <section className="relative bg-cream py-24 lg:py-40 overflow-hidden">
      
      {/* --- BACKGROUND WATERMARK (DARK & SUBTLE) --- */}
      {/* Text: אבי בוקעי
          Color: Changed from orange to 'blue-dk' (your main dark color).
          Opacity: Set to a very low 0.03 (3%) for a subtle, premium watermark effect.
          Size: Large [40vw] to fill the space.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-blue-dk/[0.03] select-none pointer-events-none whitespace-nowrap z-0">
        אבי בוקעי
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* 1. TITLE SECTION */}
          <motion.div className="text-center mb-24 lg:mb-40" variants={fadeInUpFast}>
            <h2 className="text-5xl lg:text-8xl font-noto-sans-hebrew font-black text-blue-dk leading-tight">
              למה דווקא <span className="text-orange">אבי</span>?
            </h2>
            
            {/* BOLD ORANGE LINE */}
            <div className="mt-10 w-32 h-2.5 bg-orange mx-auto rounded-full shadow-sm" />
          </motion.div>

          {/* 2. TWO-COLUMN CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32" dir="rtl">
            
            {/* Item 01 */}
            <motion.div 
              className="flex flex-col items-start text-right"
              variants={fadeInUpFast}
            >
              <div className="mb-8 flex items-center gap-5">
                 <span className="text-orange font-black text-4xl lg:text-5xl">01.</span>
                 <h3 className="text-3xl lg:text-5xl font-black text-blue-dk">
                   אני עובד עבורכם, לא עבור הבנק
                 </h3>
              </div>
              
              <p className="text-xl lg:text-2xl font-bold text-blue-dk/80 leading-relaxed pr-10 border-r-8 border-orange">
                יועץ המשכנתאות בבנק מחויב לאינטרסים של המערכת. אני מחויב אך ורק לכם. 
                זה ההבדל המהותי שחוסך לכם <span className="text-blue-dk font-black text-2xl lg:text-4xl">עשרות אלפי שקלים</span> לאורך תקופת ההלוואה.
              </p>
            </motion.div>

            {/* Item 02 */}
            <motion.div 
              className="flex flex-col items-start text-right"
              variants={fadeInUpFast}
            >
              <div className="mb-8 flex items-center gap-5">
                 <span className="text-orange font-black text-4xl lg:text-5xl">02.</span>
                 <h3 className="text-3xl lg:text-5xl font-black text-blue-dk">
                    הכוח של איש מבפנים
                 </h3>
              </div>

              <p className="text-xl lg:text-2xl font-bold text-blue-dk/80 leading-relaxed pr-10 border-r-8 border-orange">
                כיוצא <span className="text-blue-dk font-black text-2xl lg:text-4xl">בנק דיסקונט</span>, אני מכיר את המערכת מהצд השני. 
                אני יודע בדיוק איפה המרווחים של הבנק נמצאים, איפה אפשר ללחוץ ואיך להשיג אישור גם בתיקים המורכבים ביותר.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
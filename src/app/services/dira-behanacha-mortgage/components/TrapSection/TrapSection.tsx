"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function TrapSection() {
  return (
    <section dir="rtl" className="relative py-16 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <m.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "0px 0px 200px 0px" }} 
          variants={staggerContainer} 
          className="space-y-8 md:space-y-12"
        >
          <m.h2 
            variants={staggerItem}
            className="font-noto-sans-hebrew font-black text-3xl md:text-5xl lg:text-6xl text-white leading-[1.2]"
          >
            המוקש:<br />
            <span className="text-orange border-b-4 md:border-b-8 border-orange pb-2 inline-block mt-2">
              "מדד תשומות הבנייה" והכפל התזרימי
            </span>
          </m.h2>
          
          <m.p 
            variants={staggerItem}
            className="text-lg md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-6xl"
          >
            האתגר הגדול ביותר ברכישת דירה למשתכן הוא שלרוב הדירה תהיה מוכנה רק בעוד 3, 4 או 5 שנים. בזמן הזה אתם חשופים לשתי סכנות:
          </m.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl">
            <m.div 
              variants={staggerItem}
              className="border-r-4 md:border-r-6 border-orange pr-6 md:pr-8 py-6"
            >
              <h3 className="text-xl md:text-3xl text-orange font-black mb-4">
                תשלום כפול
              </h3>
              <p className="text-base md:text-xl text-white/90 font-light leading-relaxed">
                אתם משלמים גם שכירות על הדירה הנוכחית וגם מתחילים לשלם החזרים על המשכנתא.
              </p>
            </m.div>

            <m.div 
              variants={staggerItem}
              className="border-r-4 md:border-r-6 border-orange pr-6 md:pr-8 py-6"
            >
              <h3 className="text-xl md:text-3xl text-orange font-black mb-4">
                מדד תשומות הבנייה
              </h3>
              <p className="text-base md:text-xl text-white/90 font-light leading-relaxed">
                החוב שלכם לקבלן צמוד למדד. אם המדד עולה, המחיר של הדירה עולה, ואתם מפסידים כסף.
              </p>
            </m.div>
          </div>

          <m.div 
            variants={staggerItem}
            className="mt-12"
          >
            <h3 className="text-2xl md:text-4xl text-white font-black mb-6">
              הפתרון של אבי: אסטרטגיית "הקדמת תשלומים"
            </h3>
            <p className="text-base md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-5xl mb-8">
              כיועץ שמסתכל על התמונה הכוללת, אני בונה עבורכם אסטרטגיה שתנטרל את הסיכונים האלו:
            </p>

            <div className="space-y-6 max-w-5xl">
              <div className="bg-orange/10 border-r-4 border-orange pr-6 py-5 rounded-lg">
                <h4 className="text-xl md:text-2xl text-orange font-bold mb-3">
                  הקדמת תשלומים
                </h4>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  במקום לחכות, אנחנו לוקחים את המשכנתא מוקדם ומשלמים לקבלן את כל הסכום (או רובו) כבר בהתחלה. כך אנחנו "מקבעים" את מחיר הדירה וחוסכים עשרות אלפי שקלים שהיו הולכים למדד תשומות הבנייה.
                </p>
              </div>

              <div className="bg-orange/10 border-r-4 border-orange pr-6 py-5 rounded-lg">
                <h4 className="text-xl md:text-2xl text-orange font-bold mb-3">
                  "גרייס" (תשלום דחוי)
                </h4>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  כדי שלא תקרסו מתשלום כפול (שכירות + משכנתא), אני בונה מול הבנק מסלול שבו אתם משלמים בהתחלה רק את הריבית (סכום נמוך) או לא משלמים כלל, ומתחילים לשלם את המשכנתא המלאה רק כשאתם נכנסים לדירה החדשה.
                </p>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

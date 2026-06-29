"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function TransparencyCTA() {
  return (
    // רקע קרם לכל הסקשן
    <section className="py-24 lg:py-40 bg-[#FAF7F2] overflow-hidden text-right font-noto-sans-hebrew">
      <div className="container mx-auto px-6 max-w-7xl">
        <m.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
        >
          
          {/* --- עמודת תוכן: שקיפות --- */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <m.div variants={staggerItem} className="relative">
              <h2 className="text-4xl md:text-7xl font-black text-[#1c3664] leading-[1.1] mb-10">
                רגע של שקיפות: <br />
                <span className="text-[#F1662A]">מתי זה לא מתאים?</span>
              </h2>
              
              <div className="space-y-8 text-xl md:text-2xl text-[#1c3664]/90 leading-relaxed font-light">
                <p className="border-r-4 border-[#F1662A] pr-6">
                  במשרד שלי, האמינות והיושר מעל הכל. חשוב שתדעו: <span className="font-bold text-[#1c3664]">משכנתא הפוכה אינה פתרון קסם לכולם.</span> הריבית גבוהה יותר, מה שאומר שהחוב גדל עם השנים.
                </p>
                <p className="pr-7">
                  אם המטרה שלכם היא להוריש נכס נקי מחובות לילדים, כדאי לשקול את הצעד הזה בכובד ראש ולבחון חלופות. 
                </p>
                <p className="pr-7 italic text-[#1c3664]/70">
                  בדיוק בשביל זה אני כאן – כדי לבדוק את כל האפשרויות, להציג לכם את התמונה המלאה, ולתכנן את העסקה כך שתשרת אתכם בצורה הטובה ביותר.
                </p>
              </div>
            </m.div>
          </div>

          {/* --- עמודת CTA: ללא רקע (Background-less) --- */}
          <m.div 
            variants={staggerItem}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            {/* הבלוק כאן ללא bg-white וללא shadow */}
            <div className="p-2 relative">
              <h3 className="text-3xl lg:text-5xl font-black text-[#1c3664] mb-8 leading-tight">
                רוצים לבדוק כמה כסף הבית יכול לתת לכם?
              </h3>
              
              <p className="text-xl lg:text-2xl text-[#1c3664]/70 mb-12 leading-relaxed font-light">
                אני אבצע עבורכם בדיקת זכאות מקצועית, נשווה חלופות שונות, ונבנה יחד את המסלול שיתאים בדיוק לצרכים שלכם.
              </p>

              <button className="w-full py-6 px-8 bg-[#1c3664] text-white rounded-2xl font-bold text-xl hover:bg-[#1c3664]/90 transition-all duration-300 mb-12 shadow-xl shadow-[#1c3664]/10">
                השאירו פרטים לשיחה אישית
              </button>
              
              <div className="flex flex-col items-start pt-8 border-t border-[#1c3664]/10">
                <span className="text-2xl font-black text-[#1c3664]">אבי בוקעי</span>
                <span className="text-[#1c3664]/60 font-medium text-lg">אבי - הבית למשכנתאות</span>
              </div>
            </div>
          </m.div>

        </m.div>
      </div>
    </section>
  );
}
"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  { t: "זכאות", d: "הלוואה זמינה ליחיד או זוג מעל גיל 55" },
  { t: "אחוז המימון", d: "סכום ההלוואה נע בין 20% ל־60% משווי הבית, בהתאם לגיל הלווים" },
  { t: "בחירת מסלול", d: "ניתן לבחור מסלול: ללא החזר חודשי, תשלום ריבית בלבד או החזר מלא של קרן וריבית" },
  { t: "פירעון גמיש", d: "ניתן לפרוע את ההלוואה בכל עת ללא קנסות, דרך מכירת הבית או מקורות אחרים" }
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-44 bg-[#FAF7F2] overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <m.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          {/* תיקון כותרת: הוספת leading למניעת חפיפת טקסט וסידור שבירה במובייל */}
          <div className="mb-24 flex flex-col items-start">
            <h2 className="font-noto-sans-hebrew font-black text-4xl md:text-7xl text-[#1c3664] mb-4 leading-[1.15] md:whitespace-nowrap">
              איך זה עובד?
            </h2>
            <div className="h-1.5 w-24 bg-[#F1662A] rounded-full" />
          </div>

          {/* גריד של שלבים - יישור עקבי RTL */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-32">
            {steps.map((step, i) => (
              <m.div key={i} variants={staggerItem} className="relative group flex flex-col items-start">
                {/* מספרים גדולים בכתום שקוף */}
                <div className="text-6xl lg:text-8xl font-black text-[#F1662A]/20 mb-6 group-hover:text-[#F1662A]/40 transition-colors duration-500 select-none">
                  0{i + 1}
                </div>
                
                {/* תוכן השלב עם יישור "ברזל" לימין */}
                <div className="border-r-2 border-[#1c3664]/10 pr-6 group-hover:border-[#F1662A] transition-colors duration-500 text-right">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1c3664] mb-4 leading-tight">
                    {step.t}
                  </h3>
                  <p className="text-xl text-[#1c3664]/70 font-light leading-relaxed">
                    {step.d}
                  </p>
                </div>
              </m.div>
            ))}
          </div>

          {/* פסקת סיכום - תיקון גובה שורה ויישור */}
          <m.div variants={staggerItem} className="max-w-5xl border-r-4 border-[#F1662A] pr-10 lg:pr-16 text-right">
            <p className="text-2xl lg:text-4xl text-[#1c3664] font-medium leading-[1.3] italic">
              משכנתא הפוכה מאפשרת לכם <span className="font-black not-italic text-[#F1662A]">גמישות פיננסית</span>, תכנון מותאם אישית ושקט נפשי, הכל מבלי לוותר על הבית.
            </p>
            <p className="text-xl lg:text-2xl text-[#1c3664]/50 mt-6 font-light leading-relaxed">
                הכסף – שלכם ולמה שחשוב לכם.
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
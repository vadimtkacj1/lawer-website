"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const advantages = [
  { 
    t: "שקט נפשי ללא תשלום חודשי", 
    d: "אין החזרים חודשיים חובה. הריבית והקרן נצברות ומשולמות רק כאשר הנכס נמכר או לאחר תקופה ארוכה. המשמעות – כסף נזיל לחשבון, בלי להגדיל את ההוצאות החודשיות שלכם." 
  },
  { 
    t: "הבית נשאר שלכם במלואו", 
    d: "הבית נשאר בבעלותכם המלאה, אתם ממשיכים לגור בו, ואף אחד לא יכול להוציא אתכם (כמובן כל עוד עומדים בתנאי החוזה)." 
  }
];

export default function MortgageAdvantages() {
  return (
    <section className="py-24 lg:py-44 bg-[#FAF7F2] overflow-hidden text-right font-noto-sans-hebrew" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl 3xl:max-w-[110rem]">
        <m.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          {/* תיקון כותרת: הוספת leading למניעת חפיפה והגבלת ה-nowrap רק למסכים גדולים */}
          <div className="mb-24 flex flex-col items-start text-right">
            <h2 className="font-black text-3xl md:text-5xl lg:text-7xl text-[#1c3664] mb-6 leading-[1.15] md:whitespace-nowrap">
              יתרונות המשכנתא ההפוכה
            </h2>
            <div className="h-1.5 w-24 bg-[#F1662A] rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            {advantages.map((advantage, i) => (
              <m.div key={i} variants={staggerItem} className="flex flex-col items-start group relative">
                
                {/* מספרים גדולים בכתום שקוף ברקע - יישור לימין התחלה */}
                <div className="text-7xl lg:text-9xl font-black text-[#F1662A]/20 mb-6 group-hover:text-[#F1662A]/40 transition-colors duration-500 select-none">
                  0{i+1}
                </div>
                
                {/* תוכן היתרון עם יישור מושלם לימין */}
                <div className="border-r-4 border-[#F1662A] pr-8 transition-all duration-500 group-hover:pr-10 text-right">
                  <h3 className="text-2xl lg:text-4xl font-bold text-[#1c3664] mb-4 leading-tight">
                    {advantage.t}
                  </h3>
                  <p className="text-xl lg:text-2xl text-[#1c3664]/70 font-light leading-relaxed">
                    {advantage.d}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
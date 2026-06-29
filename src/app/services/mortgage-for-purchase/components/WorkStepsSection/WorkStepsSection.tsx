"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  { 
    t: "אישור עקרוני – לפני שרואים דירות", 
    d: "אסור לחתום על חוזה רכישה לפני שיש אישור עקרוני מהבנק! זהו הצ'ק פתוח שלכם. אני מגיש עבורכם את הבקשה בצורה המקצועית ביותר כדי למקסם את גובה האישור, לבחון זכאות למשכנתא לדירה ראשונה על פי הנהלים המעודכנים, ולוודא שאתם לא מבזבזים זמן על דירות שאין לכם יכולת לממן." 
  },
  { 
    t: "אסטרטגיה ותכנון פיננסי", 
    d: "כאן נכנס היתרון האקדמי שלי. אנחנו לא סתם \"לוקחים כסף\". אנחנו מנתחים את העסקה: האם מחיר הדירה (במרכז או בפריפריה) ראלי? כמה הון עצמי לדירה ראשונה כדאי להביא מהבית וכמה למנף מהבנק? האם צפויים להשתחרר כספים בעתיד (קרנות השתלמות)?" 
  },
  { 
    t: "מכרז ריביות (\"השוק\")", 
    d: "כיוצא המערכת הבנקאית, אני יודע איך לדבר עם המערכת. אני לוקח את התמהיל שבנינו ומבצע מכרז אגרסיבי בין הבנקים השונים. מכיוון שהבנקים יודעים שאני מביא איתי תיקים \"אפויים\" ומסודרים, אני מצליח להשיג ללקוחות שלי ריביות ותנאים שלקוח פרטי פשוט לא יכול לקבל." 
  },
  { 
    t: "בירוקרטיה עד המפתח", 
    d: "שמאים, עורכי דין, ביטוח חיים, ביטוח נכס, רשם המשכונות... הרשימה ארוכה. אני מלווה אתכם ומטפל בניירת כדי שהתהליך ירוץ חלק ולא תיתקעו בגלל חוסר במסמך כזה או אחר." 
  }
];

export default function WorkStepsSection() {
  return (
    <section className="py-20 lg:py-40 bg-[#FAF7F2] overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <m.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          <div className="mb-20 flex flex-col items-start">
            <h2 className="font-noto-sans-hebrew font-black text-4xl md:text-7xl text-[#1c3664] mb-4 leading-[1.15]">
              שלבי העבודה עם "אבי - הבית למשכנתאות"
            </h2>
            <div className="h-1.5 w-24 bg-[#F1662A] rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {steps.map((step, i) => (
              <m.div key={i} variants={staggerItem} className="relative group flex flex-col items-start">
                <div className="text-6xl lg:text-8xl font-black text-[#F1662A]/20 mb-6 group-hover:text-[#F1662A]/40 transition-colors duration-500 select-none">
                  0{i + 1}
                </div>
                
                <div className="border-r-2 border-[#1c3664]/10 pr-6 group-hover:border-[#F1662A] transition-colors duration-500 text-right">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1c3664] mb-4 leading-tight">
                    {step.t}
                  </h3>
                  <p className="text-lg lg:text-xl text-[#1c3664]/70 font-light leading-relaxed">
                    {step.d}
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


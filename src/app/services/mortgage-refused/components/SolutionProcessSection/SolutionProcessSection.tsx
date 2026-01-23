"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  { 
    t: "הוצאת דוח נתוני אשראי גולמי", 
    d: "אני לא מסתמך על מה שאתם \"חושבים\" שהבעיה, אלא מוציא את הדוח האמיתי שהבנקים רואים." 
  },
  { 
    t: "ניתוח ומציאת שורש הבעיה", 
    d: "אני מבודד את האירוע שיצר את הכתם. האם זה עיקול ישן? צ'קים שחזרו? או אולי סתם יחס החזר לא הגיוני?" 
  },
  { 
    t: "בניית הסיפור מחדש", 
    d: "בנקאים הם בסוף בני אדם. אם אני מגיע למנהל הסניף ומציג לו את התיק לא כ\"לווה בעייתי\" אלא כ\"אירוע חד פעמי שתוקן\" בצירוף אסמכתאות והסברים משפטיים/כלכליים - התמונה משתנה." 
  },
  { 
    t: "פתרונות חוץ-בנקאיים (במידת הצורך)", 
    d: "אם הדלת בבנק חסומה כרגע לחלוטין, אני יודע לתפור \"הלוואת גישור\" מגוף חוץ-בנקאי מוסדר, לקנות את הדירה, ולמחזר את המשכנתא חזרה לבנק בעוד שנה-שנתיים כשהדירוג שלכם יתנקה." 
  }
];

export default function SolutionProcessSection() {
  return (
    <section className="py-20 lg:py-40 bg-[#FAF7F2] overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          <div className="mb-20 flex flex-col items-start">
            <h2 className="font-noto-sans-hebrew font-black text-4xl md:text-7xl text-[#1c3664] mb-4 leading-[1.15]">
              איך אבי - הבית למשכנתאות<br />
              פותר תיקים מורכבים?
            </h2>
            <div className="h-1.5 w-24 bg-[#F1662A] rounded-full" />
            <p className="text-xl md:text-3xl text-[#1c3664]/70 mt-8 font-light leading-relaxed max-w-5xl">
              כאן נכנס לתמונה היתרון הכפול שלי: בנקאי לשעבר + השכלה אקדמית ופיננסית. התהליך אצלי עובד כמו ניתוח כירורגי:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {steps.map((step, i) => (
              <motion.div key={i} variants={staggerItem} className="relative group flex flex-col items-start">
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

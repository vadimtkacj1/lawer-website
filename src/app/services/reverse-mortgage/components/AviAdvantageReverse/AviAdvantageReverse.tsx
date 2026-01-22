"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Calculator, LayoutGrid } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const aviReasons = [
  {
    t: "טיפול בירוקרטי מלא",
    d: "משכנתא לשיפוץ דורשת אישורים, שמאות, ולעיתים שחרור כספים בשלבים (פעימות) לפי התקדמות הבנייה. כמי שמכיר את המערכת הבנקאית מבפנים, אני יודע איך לנהל את התהליך מול הבנק כך שהכסף יגיע בזמן לקבלן, בלי שתצטרכו לרדוף אחרי פקידים.",
    icon: ClipboardCheck
  },
  {
    t: "תכנון תקציב נכון",
    d: "רוב האנשים חורגים בתקציב השיפוץ ב-20% לפחות. הניסיון שלי (גם בתחום הנדל\"ן והתשתיות) מאפשר לי לעזור לכם לתכנן את מסגרת האשראי כך שלא תיתקעו באמצע השיפוץ בלי כסף.",
    icon: Calculator
  },
  {
    t: "ראייה רחבה",
    d: "אני אבדוק אם כדאי לשלב את משכנתת השיפוץ עם מיחזור המשכנתא הקיימת, וכך אולי לחסוך לכם כסף פעמיים – גם בשיפוץ וגם במשכנתא הישנה.",
    icon: LayoutGrid
  }
];

export default function AviAdvantageRenovation() {
  return (
    <section className="relative py-20 md:py-32 bg-[#1c3664] overflow-hidden" dir="rtl">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          {/* Header Section */}
          <motion.div variants={staggerItem} className="max-w-4xl mb-20">
            <h2 className="font-noto-sans-hebrew font-black text-4xl md:text-6xl text-white leading-tight mb-8">
              למה לבצע את התהליך עם <br />
              <span className="text-orange">"אבי - הבית למשכנתאות"?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl">
              שיפוץ הוא פרויקט מלחיץ בפני עצמו – אבק, רעש, קבלנים. <br className="hidden md:block" />
              אתם לא צריכים גם כאב ראש מהבנק.
            </p>
          </motion.div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {aviReasons.map((item, i) => (
              <motion.div 
                key={i} 
                variants={staggerItem} 
                className="group flex flex-col items-start"
              >
                {/* Icon Container */}
                <div className="mb-6 p-3 bg-white/5 rounded-2xl group-hover:bg-orange/10 transition-colors duration-300">
                  <item.icon className="w-10 h-10 md:w-12 md:h-12 text-orange" strokeWidth={1.5} />
                </div>

                {/* Content Block */}
                <div className="border-r-4 border-orange pr-6 flex-1">
                  <h3 className="font-noto-sans-hebrew font-bold text-2xl text-white mb-4">
                    {item.t}
                  </h3>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
    </section>
  );
}
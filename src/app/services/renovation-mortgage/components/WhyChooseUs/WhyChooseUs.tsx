"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const optimizedViewport = {
  once: true,
  margin: "0px 0px -100px 0px",
  amount: 0.2,
};

const reasons = [
  {
    title: "טיפול בירוקרטי מלא",
    description: `טיפול בירוקרטי מלא ושחרור כסף מיידי: משכנתא רגילה לשיפוץ דורשת בדרך כלל שמאויות חוזרות ושחרור כספים מעיק ב"פעימות" לפי התקדמות הבנייה. כאן הניסיון שלי חוסך לכם המון כאב ראש: בסכומים של עד 500,000 ₪, אני יודע לבצע תהליך מואץ מול הבנק ולדאוג שתקבלו את הכסף בפעימה אחת לחשבון, על סמך הצעת מחיר בלבד. זוהי מומחיות ייחודית שלא כל יועץ יודע לבצע, והיא מבטיחה לכם שקט נפשי וכסף נזיל לשלם לקבלן בזמן, בלי לרדוף אחרי פקידים.`,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "תכנון תקציב ריאלי",
    description: "רוב האנשים חורגים ב-20% מתקציב השיפוץ. הניסיון שלי בתשתיות מאפשר לי לבנות לכם מסגרת אשראי חכמה שתמנע עצירה של הפרויקט באמצע.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "ראייה פיננסית רחבה",
    description: (
      <>
        אני בוחן את כדאיות שילוב משכנתת השיפוץ עם{" "}
        <a href="https://www.avi-mashkanta.com/services/loan-consolidation" className="hyper-link" title="מחזור ואיחוד הלוואות | אבי בוקעי - הבית למשכנתאות" target="_blank" rel="noopener noreferrer">
          מיחזור המשכנתא
        </a>
        {" "}הקיימת – מה שעשוי לחסוך לכם עשרות אלפי שקלים בשתי ההלוואות במקביל.
      </>
    ),
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-36 bg-cream overflow-hidden" dir="rtl">
      
      {/* DECORATIVE ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-[10%] text-orange/20 text-4xl font-light">+</div>
        <div className="absolute bottom-40 left-[15%] text-blue-dk/10 text-6xl font-thin">+</div>
        <svg className="absolute top-0 left-0 w-64 h-64 opacity-[0.05] text-blue-dk" viewBox="0 0 100 100">
          <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-20 lg:mb-28">
            <h2 className="font-noto-sans-hebrew font-black text-4xl md:text-5xl lg:text-6xl text-blue-dk mb-8 leading-tight">
              למה לבצע את התהליך עם <span className="text-orange">אבי</span>?
            </h2>
            <div className="h-0.5 w-32 bg-orange/40 mx-auto mb-10" />
            <p className="font-noto-sans-hebrew text-xl md:text-2xl text-blue-dk/70 max-w-4xl mx-auto leading-relaxed">
              שיפוץ הוא פרויקט מלחיץ – אבק, רעש, קבלנים. <br className="hidden md:block" />
              אתם לא צריכים גם כאב ראש מהבנק. בשביל זה אני כאן.
            </p>
          </motion.div>

          {/* Grid עם התאמה ל-RTL */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0 lg:divide-x lg:divide-x-reverse lg:divide-blue-dk/10">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="px-8 lg:px-12 py-10 transition-all duration-300 group hover:translate-y-[-4px]"
              >
                <div className="w-16 h-16 text-orange mb-10 mx-auto lg:mr-0 lg:ml-auto flex items-center justify-center">
                  {reason.icon}
                </div>

                <div className="text-center lg:text-right">
                  <h3 className="font-noto-sans-hebrew font-bold text-2xl lg:text-3xl text-blue-dk mb-6 group-hover:text-orange transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="font-noto-sans-hebrew text-lg lg:text-xl text-blue-dk/60 leading-relaxed font-light">
                    {reason.description}
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
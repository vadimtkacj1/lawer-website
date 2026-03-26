"use client";

import { motion } from "framer-motion";
import { fadeInUpFast, staggerContainer } from "@/lib/animations";

const optimizedViewport = {
  once: true,
  margin: "0px",
  amount: 0.2,
};

export default function StorySection() {
  return (
    <section className="relative bg-cream py-20 lg:py-32 overflow-hidden" dir="rtl">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-dk/5 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
        >
          <div className="space-y-16 lg:space-y-20">
            {/* Story Section */}
            <motion.div
              className="space-y-6"
              variants={fadeInUpFast}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-noto-sans-hebrew font-black text-blue-dk leading-tight">
                <span className="inline-block bg-gradient-to-l from-blue-dk via-blue-dk to-orange bg-clip-text text-transparent">
                  יועץ משכנתא שמכיר את המערכת מבפנים:
                </span>
                <br />
                <span className="text-orange">הסיפור שלי</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-dk/80 leading-relaxed font-medium">
                הסיפור שלי מתחיל עמוק בתוך המערכת הבנקאית. במשך תקופה ארוכה ישבתי מעברו השני של השולחן וראיתי אלפי משפחות שמגיעות לבקש משכנתא. ראיתי זוגות צעירים שקונים דירה ראשונה ומשפחות שמחפשות אוויר לנשימה כדי לשפר דיור או לאחד חובות. אבל ראיתי שם גם משהו שהפריע לי: ראיתי איך הפער בידע גורם לאנשים לשלם מאות אלפי שקלים מיותרים לבנקים. הבנתי שבעולם של משכנתאות, הלקוח הממוצע פשוט הולך לאיבוד מול מערכת אוטומטית, קרה ומורכבת.
              </p>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              className="space-y-6"
              variants={fadeInUpFast}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-noto-sans-hebrew font-black leading-tight">
                <span className="text-orange">החזון:</span>{" "}
                <span className="text-blue-dk">ייעוץ משכנתאות מקצועי שמשמש כמגן הפיננסי שלכם</span>
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-dk/80 leading-relaxed font-medium">
                ההבנה הזו היא שהובילה אותי לעשות שינוי, לצאת מהבנק ולהפוך להיות יועץ משכנתא פרטי שעובד אך ורק עבור האינטרסים שלכם. החלטתי לקחת את כל הידע שצברתי "מבפנים", לשלב אותו עם התואר האקדמי שלי במנהל עסקים והתמחות בנדל"ן, ולהקים בית מקצועי שמעניק שירותי ייעוץ משכנתאות בגובה העיניים. המטרה שלי הייתה ברורה: להיות המגן הפיננסי שלכם מול פקידי הבנק, ולתרגם את השפה הבנקאית המסובכת לחיסכון אמיתי בכסף שלכם.
              </p>
            </motion.div>

            {/* Professional Commitment Section */}
            <motion.div
              className="space-y-6"
              variants={fadeInUpFast}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-noto-sans-hebrew font-black leading-tight">
                <span className="text-orange">מחויבות למקצועיות:</span>{" "}
                <span className="text-blue-dk">חבר בהתאחדות יועצי משכנתאות</span>
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-dk/80 leading-relaxed font-medium">
                היום, כדי להבטיח שהלקוחות שלי מקבלים את השירות המקצועי, האמין והמעודכן ביותר, אני גאה לפעול תחת הסטנדרטים המחמירים כחבר בהתאחדות יועצי משכנתאות. מעבר לחיסכון הכלכלי הטהור, החזון שלי הוא להעניק לכם שקט נפשי. כשאתם מפקידים בידיי את העסקה הגדולה בחייכם, אתם יודעים שיש איש מקצוע אמין שעומד לצידכם, נלחם על כל עשירית אחוז, ודואג שהדרך לבית החדש תהיה גם בטוחה וגם משתלמת.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

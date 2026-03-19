"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function AviAdvantageClosing() {
  return (
    <section 
      dir="rtl" 
      className="relative py-12 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-6 max-w-7xl text-right">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem} className="mb-12 md:mb-20">
            <h2 className="font-noto-sans-hebrew font-black text-xl md:text-5xl lg:text-7xl text-white leading-tight mb-6 md:mb-10">
              למה לבצע את התהליך עם <br />
              <span className="text-orange">"אבי - הבית למשכנתאות"?</span>
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
              לקחת משכנתא לכל מטרה זה לא "זבנג וגמרנו".  יש כאן רגולציה ומגבלות שצריך להכיר כשמבקשים הלוואה לכל מטרה כנגד שיעבוד דירה.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20">
            <motion.div variants={staggerItem} className="border-r-4 border-orange pr-6 md:pr-8">
              <h3 className="font-noto-sans-hebrew font-bold text-lg md:text-2xl lg:text-3xl text-white mb-3 md:mb-5">
                מקסום אחוזי המימון
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-white/80 font-light leading-relaxed">
                בנק ישראל מגביל את המשכנתא לכל מטרה עד ל-50% משווי הנכס. כמי שמגיע מתוך המערכת, אני יודע איך להציג את הבקשה ואיך להעריך את שווי הנכס נכון מול השמאי, כדי שתוכלו לקבל את הסכום המקסימלי שאתם צריכים ולא שקל פחות.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="border-r-4 border-orange pr-6 md:pr-8">
              <h3 className="font-noto-sans-hebrew font-bold text-lg md:text-2xl lg:text-3xl text-white mb-3 md:mb-5">
                הגדרת "מטרת ההלוואה"
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-white/80 font-light leading-relaxed">
                הבנק רוצה לדעת לאן הולך הכסף. הצגת המטרה בצורה לא נכונה יכולה להוביל לסירוב או לריבית גבוהה יותר. אני מנחה אתכם בדיוק איך להגדיר את הצורך (אסמכתאות) כדי שהתיק יעבור חלק בוועדות האשראי.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="border-r-4 border-orange pr-6 md:pr-8">
              <h3 className="font-noto-sans-hebrew font-bold text-lg md:text-2xl lg:text-3xl text-white mb-3 md:mb-5">
                ראייה אקדמית וכלכלית
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-white/80 font-light leading-relaxed">
                בזכות התואר שלי במנהל עסקים וההתמחות בנדל"ן, אני לא סתם נותן לכם כסף. אני בודק יחד איתכם האם המהלך הזה כלכלי עבורכם. האם נכון למשכן את הבית בשביל רכב יוקרה? אולי. האם נכון לעשות זאת בשביל לסגור מינוס? בדרך כלל כן. אני כאן כדי לשקף לכם את האמת הכלכלית.
              </p>
            </motion.div>
          </div>

          <motion.div variants={staggerItem} className="bg-cream/10 backdrop-blur-sm rounded-3xl p-6 md:p-10 lg:p-12 border-2 border-orange/30 max-w-4xl mx-auto">
            <blockquote className="text-base md:text-xl lg:text-2xl text-white font-light italic leading-relaxed text-center">
              "הכסף שלכם נמצא בקירות – בואו נוציא אותו. תושבי המרכז וכל הארץ, אל תתפשרו על הלוואות יקרות כשיש לכם נכס ביד."
            </blockquote>
            <p className="text-center mt-6 md:mt-8 text-orange font-bold text-base md:text-xl">
              — אבי בוקעי, הבית למשכנתאות
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
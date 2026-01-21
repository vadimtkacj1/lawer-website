"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const reverseBenefits = [
  { t: "שקט ללא תשלום חודשי", d: "לא חייבים לשלם שקל כל חודש. הריבית והקרן משולמות רק במכירה או לאחר אריכות ימים." },
  { t: "הבית נשאר שלכם ב-100%", d: "אתם ממשיכים לגור בבית בבעלותכם המלאה. אף אחד לא יכול להוציא אתכם ממנו." },
  { t: "כסף לכל מטרה", d: "שיפוץ, עזרה לילדים או טיול. ניתן לקבל כסכום חד-פעמי, קצבה חודשית או מסגרת אשראי." },
  { t: "רשת ביטחון ליורשים", d: "נון-ריקורס: החוב מוגבל לשווי הבית בלבד. היורשים לעולם לא יצטרכו להביא כסף מהבית." }
];

export default function ReverseMortgageBenefits() {
  return (
    <section className="py-20 lg:py-40 bg-[#f9f9f9] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl text-[#1c3664] mb-24">יתרונות המשכנתא ההפוכה</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {reverseBenefits.map((benefit, i) => (
              <motion.div key={i} variants={staggerItem} className="flex flex-col items-end group">
                <span className="text-orange/20 text-7xl lg:text-9xl font-black mb-4 group-hover:text-orange transition-colors">0{i+1}</span>
                <div className="border-r-8 border-orange pr-8">
                  <h3 className="text-2xl lg:text-4xl font-bold text-[#1c3664] mb-4">{benefit.t}</h3>
                  <p className="text-lg lg:text-2xl text-[#1c3664]/70 font-light leading-relaxed">{benefit.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function IntroRefusedSection() {
  return (
    <section dir="rtl" className="relative py-12 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <m.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "0px 0px 200px 0px" }} 
          variants={staggerContainer} 
          className="space-y-8 md:space-y-12"
        >
          <m.p 
            variants={staggerItem}
            className="text-base md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-6xl"
          >
            אין תחושה מתסכלת יותר מזו: מצאתם את <a href="https://avi-mashkanta.com/services/mortgage-for-purchase" className="hyper-link" target="_blank" title="משכנתא לרכישת דירה | אבי בוקעי - הבית למשכנתאות">דירת החלומות</a>, כבר ראיתם את עצמכם גרים בה, הגשתם בקשה למשכנתא בביטחון מלא - ואז קיבלתם טלפון מהפקיד שאומר: "מצטערים, הבקשה סורבה". או גרוע מזה - קיבלתם "סירוב עקרוני" עוד בשלב המחשב, והפכתם רשמית לסטטוס של מסורבי בנקים.
          </m.p>
          
          <m.p 
            variants={staggerItem}
            className="text-base md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-6xl"
          >
            באותו רגע, התחושה היא שסומנתם ב"אות קין". שאתם "ברשימה השחורה". אז רגע לפני שאתם מתייאשים ומוותרים על הדירה, או רצים לקחת הלוואות בשוק האפור בריביות רצחניות - עצרו רגע, קחו נשימה, ותמשיכו לקרוא. חשוב שתדעו שתמיד יש פתרון למסורבי משכנתא.
          </m.p>

          <m.div 
            variants={staggerItem}
            className="border-r-2 md:border-r-8 border-orange pr-4 md:pr-10 py-2 md:py-4 mt-8 md:mt-12 max-w-4xl"
          >
            <p className="text-lg md:text-3xl lg:text-4xl text-white font-bold leading-snug">
              שמי אבי בוקעי, ואני מכיר את המערכת הזו מבפנים. כמי שעבד במערכת הבנקאית, אני יודע בדיוק מה הפקיד רואה על המסך כשהוא אומר לכם "לא". והחדשות הטובות? במקרים רבים, ה"לא" הזה הוא רק ההתחלה של משא ומתן, אם יודעים איך לנהל אותו כדי להשיג משכנתא למסורבים.
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

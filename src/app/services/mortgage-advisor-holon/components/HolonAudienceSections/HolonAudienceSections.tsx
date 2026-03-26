"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function HolonAudienceSections() {
  return (
    <section dir="rtl" className="relative py-12 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="space-y-16 md:space-y-24"
        >
          <motion.article variants={staggerItem} className="space-y-6">
            <h3 className="font-noto-sans-hebrew font-black text-2xl md:text-4xl lg:text-5xl text-white leading-tight">
              משכנתא לדירה ראשונה ומשפרי דיור בעיר
            </h3>
            <p className="text-base md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-6xl">
              משפחות צעירות רבות מבקשות לשדרג את איכות החיים ולעבור לדירה גדולה יותר בעיר. אני מלווה אתכם בתהליך של בניית האסטרטגיה הפיננסית: כמה הון עצמי באמת נדרש להביא מהבית, איך למנף נכון את הנכס הקיים, ומתי כדאי למכור כדי לא להיכנס ללחץ של תשלומי גישור יקרים.
            </p>
          </motion.article>

          <motion.article variants={staggerItem} className="space-y-6 border-t border-white/20 pt-16 md:pt-24">
            <h3 className="font-noto-sans-hebrew font-black text-2xl md:text-4xl lg:text-5xl text-white leading-tight">
              משכנתא לשיפוץ והתחדשות עירונית בחולון
            </h3>
            <p className="text-base md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-6xl">
              לא כולם רוצים לעזוב את השכונה המוכרת בקרית שרת או בנאות רחל. במקום לקנות דירה חדשה ויקרה, הרבה משפחות בוחרות להישאר ולשפץ. בניגוד למה שחלק קטן מאותם יועצי משכנתאות עשויים להציע בפתרונות יקרים, אני יודע לתפור עבורכם משכנתא ייעודית לשיפוץ כנגד הנכס בתנאים מצוינים, שחוסכת לכם את הריביות המטורפות של הלוואות מסחריות קצרות.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}

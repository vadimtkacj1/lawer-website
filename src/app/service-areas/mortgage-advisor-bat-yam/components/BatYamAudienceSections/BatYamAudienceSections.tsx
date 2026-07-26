"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function BatYamAudienceSections() {
  return (
    <section dir="rtl" className="relative py-12 md:py-24 lg:py-32 bg-[#1c3664] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem] text-right">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px 200px 0px" }}
          variants={staggerContainer}
          className="space-y-16 md:space-y-24"
        >
          <m.article variants={staggerItem} className="space-y-6">
            <h3 className="font-noto-sans-hebrew font-black text-2xl md:text-4xl lg:text-5xl text-white leading-tight">
              דירות להשקעה ותושבי חוץ בבת ים
            </h3>
            <p className="text-base md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-6xl">
              {`בת ים היא מגנט אדיר למשקיעים, הן מישראל והן מחו"ל (תושבי חוץ). בין אם אתם קונים דירה קטנה ליד הים להשקעה או נכס בפרויקט חדש, אנחנו נתפור לכם משכנתא לדירה להשקעה בבת ים שתמנף את ההון העצמי שלכם ותמקסם את התשואה החודשית מהשכירות.`}
            </p>
          </m.article>

          <m.article variants={staggerItem} className="space-y-6 border-t border-white/20 pt-16 md:pt-24">
            <h3 className="font-noto-sans-hebrew font-black text-2xl md:text-4xl lg:text-5xl text-white leading-tight">
              משפרי דיור במעבר לדירה חדשה
            </h3>
            <p className="text-base md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-6xl">
              משפחות רבות בבת ים מבקשות להשתדרג ולעבור מדירה ישנה לדירה מרווחת יותר בשכונות החדשות. המומחיות שלנו היא לספק לכם פתרונות מימון יצירתיים (כמו הלוואות גישור) כדי שתוכלו לקנות את הדירה החדשה ברוגע, מבלי להיחנק כלכלית עד שתמכרו את הישנה.
            </p>
          </m.article>
        </m.div>
      </div>
    </section>
  );
}

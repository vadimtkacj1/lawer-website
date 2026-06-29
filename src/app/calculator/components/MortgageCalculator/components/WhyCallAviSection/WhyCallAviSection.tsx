"use client";

import React from "react";
import { m } from "framer-motion";
import { PhoneCall, Briefcase, TrendingUp, Building2, CheckCircle } from "lucide-react";
import { fadeInUpFast, viewportOptions } from "@/lib/animations";

export default function WhyCallAviSection() {
  return (
    <div className="w-full px-4 md:px-6">
      <m.div
        className="w-full max-w-4xl mx-auto bg-[#f26722] rounded-3xl p-8 md:p-12 text-white shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={fadeInUpFast}
        dir="rtl"
      >
        <h3 className="text-3xl md:text-4xl font-black mb-8 text-center text-white">
          למה חשוב לדבר עם יועץ משכנתאות לפני שמחליטים?
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#d95a1c] rounded-2xl p-6 border-2 border-white">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="w-8 h-8 text-white" strokeWidth={2.5} />
              <h4 className="text-xl font-black text-white">חישוב לפי מקצוע</h4>
            </div>
            <p className="text-white leading-relaxed">
              רופאים, מורים, עובדי הייטק, עצמאים ועובדי מדינה — כל מקצוע מקבל תנאים שונים לגמרי.
              המחשבון הכללי נותן הערכה, אבל הוא לא יודע מה המקצוע שלכם, מה הוותק, ואילו הטבות מגיעות לכם בפועל.
              אבי בודק את הפרופיל ומכוון לתמהיל ולבנק שייתנו לכם את התנאים הטובים ביותר.
            </p>
          </div>
          <div className="bg-[#d95a1c] rounded-2xl p-6 border-2 border-white">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-white" strokeWidth={2.5} />
              <h4 className="text-xl font-black text-white">אחוזי ריבית אישיים</h4>
            </div>
            <p className="text-white leading-relaxed">
              הריבית המדויקת תלויה בהיסטוריה האישית שלכם, גיל, ותק בעבודה, מצב האשראי וההתחייבויות הקיימות.
              שינוי קטן בריבית או בתמהיל יכול לחסוך עשרות אלפי שקלים לאורך השנים.
              אבי יודע איפה ואיך לנהל את המו״מ כדי להוריד ריביות ולשפר תנאים.
            </p>
          </div>
          <div className="bg-[#d95a1c] rounded-2xl p-6 border-2 border-white">
            <div className="flex items-center gap-3 mb-3">
              <Building2 className="w-8 h-8 text-white" strokeWidth={2.5} />
              <h4 className="text-xl font-black text-white">השוואת בנקים</h4>
            </div>
            <p className="text-white leading-relaxed">
              כל בנק מציע תנאים שונים לפרופילים שונים — ומה שנראה "טוב" בבנק אחד, יכול להיות יקר בבנק אחר.
              אבי מכיר את ההבדלים, מציג חלופות, ומשווה בין הצעות כדי להגיע לתנאים שמשרתים אתכם לאורך זמן.
            </p>
          </div>
          <div className="bg-[#d95a1c] rounded-2xl p-6 border-2 border-white">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-8 h-8 text-white" strokeWidth={2.5} />
              <h4 className="text-xl font-black text-white">מקרים מורכבים</h4>
            </div>
            <p className="text-white leading-relaxed">
              עצמאים? תושב חוץ? סורבתם בבנק? יש לכם הלוואות נוספות?
              במקרים מורכבים צריך לבנות תיק נכון, לתקן נקודות חולשה ולהציג את העסקה בצורה שתעבור אישור.
              אבי מתמחה במקרים כאלה ויודע למצוא פתרונות גם כשהבנק אומר "לא".
            </p>
          </div>
        </div>

        <div className="text-center bg-[#d95a1c] rounded-2xl p-8 border-2 border-white">
          <p className="text-3xl font-black mb-4 text-white">
            קבלו חישוב אישי ומדויק - בחינם!
          </p>
          <p className="text-xl text-white mb-6 leading-relaxed">
            שיחת ייעוץ ראשונית של 15 דקות יכולה לחסוך לכם עשרות אלפי שקלים
          </p>
          <a
            href="tel:0544729513"
            className="inline-flex items-center gap-3 bg-white text-orange hover:bg-gray-100 px-8 py-4 rounded-xl text-xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            <PhoneCall className="w-6 h-6" />
            <span>התקשרו עכשיו: 054-472-9513</span>
          </a>
          <p className="text-sm text-white mt-4 font-bold">
            זמינים בימים א׳-ה׳ 9:00-20:00 | ללא התחייבות
          </p>
        </div>
      </m.div>
    </div>
  );
}


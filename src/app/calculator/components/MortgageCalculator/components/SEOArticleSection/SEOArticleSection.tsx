"use client";

import React from "react";
import { m } from "framer-motion";
import { fadeInUpFast, viewportOptions } from "@/lib/animations";

export default function SEOArticleSection() {
  return (
    <m.div
      className="w-full max-w-4xl px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUpFast}
      dir="rtl"
    >
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-blue-dk/10">
        <h3 className="text-2xl md:text-3xl font-black text-blue-dk mb-6">
          מה כדאי לדעת לפני שלוקחים משכנתא?
        </h3>
        <div className="space-y-6 text-blue-dk leading-relaxed text-base md:text-lg">
          <p>
            <strong className="text-blue-dk font-black">משכנתא היא החלטה פיננסית משמעותית</strong> שמשפיעה על העתיד הכלכלי שלכם לעשרות שנים.
            המחשבון שלנו נותן לכם נקודת התחלה טובה, אבל התשובה האמיתית תלויה בפרמטרים אישיים רבים.
          </p>

          <div>
            <h4 className="text-lg md:text-xl font-black text-blue-dk mb-2">
              למה מחשבון הוא רק התחלה?
            </h4>
            <p className="text-blue-dk/80">
              מחשבון משכנתא נותן <strong className="font-black">הערכה ראשונית</strong> — אבל הבנק לא עובד לפי "ממוצעים".
              הריבית והתנאים נקבעים לפי פרופיל אישי, מקצוע, יציבות תעסוקתית, היסטוריית אשראי, גיל, סוג הנכס ועוד.
            </p>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-black text-blue-dk mb-2">
              מה משפיע הכי הרבה על ההחזר החודשי?
            </h4>
            <ul className="list-disc ps-5 space-y-2 text-blue-dk/80">
              <li><strong className="font-black">ריבית (והתמהיל)</strong> – שינוי קטן בריבית יכול להזיז אלפי שקלים בשנה.</li>
              <li><strong className="font-black">תקופת ההלוואה</strong> – קצר = יותר החזר חודשי, ארוך = יותר ריבית לאורך זמן.</li>
              <li><strong className="font-black">הון עצמי</strong> – משפיע על אחוז מימון, סיכון בעיני הבנק ותנאים.</li>
              <li><strong className="font-black">הכנסות והתחייבויות</strong> – מה נשאר לכם "נטו" אחרי כל ההחזרים.</li>
            </ul>
          </div>
          <p>
            <strong className="text-blue-dk font-black">כל מקרה הוא ייחודי.</strong> הגיל שלכם, הוותק בעבודה, ההיסטוריה האשראית,
            הלוואות קיימות, מצב משפחתי - כל הפרמטרים האלה משפיעים על התנאים שתקבלו.
            אבי, עם ניסיון של שנים בתחום, יודע בדיוק איך למקסם את התנאים עבורכם.
          </p>
          <p className="text-orange font-black text-lg md:text-xl">
            אל תסתפקו בחישוב כללי — קבלו ייעוץ מקצועי שיתאים בדיוק לכם. התקשרו עכשיו!
          </p>
        </div>
      </div>
    </m.div>
  );
}


"use client";

import React, { useState } from "react";
import { m } from "framer-motion";
import { fadeInUpFast, viewportOptions } from "@/lib/animations";

const faqItems = [
  {
    q: "איך מחשבים החזר חודשי למשכנתא?",
    a: "החזר חודשי למשכנתא מחושב על פי סכום ההלוואה, תקופת ההחזר (שנים), וריבית הבנק. המחשבון שלנו משתמש במכפילים סטנדרטיים לכל תקופת הלוואה. לחישוב מדויק יש צורך לבדוק עם יועץ משכנתאות את הריבית האישית שלכם."
  },
  {
    q: "כמה הון עצמי צריך למשכנתא?",
    a: "בדרך כלל נדרשים לפחות 25-30% הון עצמי ממחיר הנכס. עם זאת, לצעירים ולתושבי חוץ עשויים להיות תנאים שונים. אבי יכול לעזור לכם למצוא את האפשרויות הטובות ביותר גם עם הון עצמי נמוך יותר."
  },
  {
    q: "מה ההבדל בין משכנתא ל-10 שנים למשכנתא ל-30 שנים?",
    a: "משכנתא קצרה יותר (10-15 שנים) תהיה עם החזר חודשי גבוה יותר, אבל תשלמו פחות ריבית בסך הכל. משכנתא ארוכה יותר (25-30 שנים) תהיה עם החזר חודשי נמוך יותר, אבל תשלמו יותר ריבית לאורך השנים. אבי יכול לעזור לכם לבחור את התקופה המתאימה לכם."
  },
  {
    q: "האם יש הבדל בתנאי משכנתא בין מקצועות שונים?",
    a: "כן! רופאים, מורים, עובדי הייטק ועובדי מדינה זכאים לתנאי משכנתא מיוחדים וריבית נמוכה יותר. כל בנק מציע תנאים שונים לפרופילים שונים. אבי עובד עם כל הבנקים ויודע בדיוק איפה תקבלו את התנאים הכי טובים."
  },
  {
    q: "מה עושים אם סירבו לי למשכנתא בבנק?",
    a: "אל תתייאשו! אבי מתמחה במקרים מורכבים ומסורבי בנקים. יש אפשרויות רבות - בנקים שונים, תנאים שונים, ודרכים יצירתיות לקבל אישור. התקשרו לקבלת ייעוץ חינם."
  },
  {
    q: "האם המחשבון מדויק?",
    a: "המחשבון נותן הערכה ראשונית טובה, אבל החישוב הסופי תלוי בפרמטרים רבים: הגיל שלכם, המקצוע, ההיסטוריה האשראית, הבנק, ועוד. לחישוב מדויק ומותאם אישית, התקשרו לאבי לייעוץ חינם - 054-472-9513"
  }
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <m.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUpFast}
      style={{ backgroundColor: "#f9f7f4" }}
    >
      <div className="container py-16 md:py-20">
        <div className="max-w-7xl" dir="rtl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* FAQ Title */}
            <div className="w-full lg:w-1/3">
              <div className="text-center lg:text-right">
                <div className="flex items-center gap-2 pb-4 justify-center lg:justify-start">
                  <span className="text-sm font-bold text-orange uppercase tracking-wider">
                    שאלות ותשובות
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-dk pb-4">
                  שאלות נפוצות
                </h3>
                <p className="text-base md:text-lg font-bold text-blue-dk/80 leading-relaxed">
                  ריכזנו עבורכם את התשובות לכל השאלות הכי חשובות על מחשבון המשכנתא.
                </p>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="w-full lg:w-2/3">
              {faqItems.map((faq, index) => (
                <div key={index} className={`border-b-2 border-blue-dk/10 ${index === faqItems.length - 1 ? 'border-b-0' : ''}`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-right transition-colors hover:text-orange focus:outline-none"
                  >
                    <span className="flex-grow text-base md:text-lg lg:text-xl font-black text-blue-dk pe-4 leading-tight">
                      {index + 1}. {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-dk text-white flex items-center justify-center transition-transform hover:scale-110">
                      {openFaq === index ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm md:text-base lg:text-lg font-bold text-blue-dk/85 leading-relaxed pe-12">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}


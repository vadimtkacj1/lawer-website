"use client";

import { useState } from "react";
import DecorativeShapes from "@/components/ui/DecorativeShapes";

const faqItems = [
  {
    question: "כמה הון עצמי אני צריך להביא?",
    answer:
      "לפי הנחיות בנק ישראל: דירה ראשונה: מינימום 25% הון עצמי (75% משכנתא). משפרי דיור (מחליפים דירה): מינימום 30% הון עצמי (70% משכנתא). דירה להשקעה (דירה שנייה ומעלה): מינימום 50% הון עצמי. תוכנית \"דירה בהנחה\": ניתן להגיע להון עצמי נמוך יותר (לעיתים 10% או 100K ₪), תלוי בשווי השוק של הדירה.",
  },
  {
    question: "מה קורה אם השמאי מעריך את הדירה בפחות מהמחיר ששילמתי?",
    answer:
      "זוהי \"מלכודת השמאות\". הבנק נותן משכנתא לפי הנמוך מבין השניים (החוזה או השמאות). אם השמאי העריך נמוך, תצטרכו להשלים כסף מהבית. הפתרון שלי: בגלל ההיכרות שלי עם השטח והמחירים (במיוחד באזור המרכז), אני אעזור לכם לבצע הערכה מקדימה (שמאות מוקדמת) כדי למנוע הפתעות לא נעימות כאלו.",
  },
  {
    question: "האם כדאי לקחת \"מסלול פריים\" מלא?",
    answer:
      "פעם זה היה הלהיט, היום זה סיכון. מסלול הפריים תנודתי מאוד. תמהיל נכון חייב להיות מאוזן בין פריים (גמיש אך תנודתי) לבין מסלולים קבועים (יציבים אך לעיתים יקרים יותר או עם קנסות יציאה). האיזון המדויק תלוי ב\"פרופיל הסיכון\" שלכם.",
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div
      className={`border-b-2 border-blue-dk/10 ${
        index === faqItems.length - 1 ? "border-b-0" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4 md:py-5 text-right
                   transition-colors hover:text-orange focus:outline-none active:text-orange"
        aria-expanded={isOpen}
      >
        <span className="flex-grow text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black text-blue-dk pe-2 sm:pe-3 md:pe-4 leading-tight sm:leading-normal">
          {index + 1}. {question}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-blue-dk text-white
                      flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          {isOpen ? (
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          )}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
                    ${isOpen ? "max-h-[800px] opacity-100 pb-4 sm:pb-5" : "max-h-0 opacity-0"}`}
      >
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-dk/85 leading-relaxed pe-2 sm:pe-4 md:pe-8 lg:pe-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function PurchaseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32" 
      style={{ backgroundColor: "#FAF7F2" }}
    >
      <DecorativeShapes variant="default" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-right">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-start">
            
            <div className="w-full lg:w-1/3 lg:sticky lg:top-24 self-start z-30">
              <div className="h-fit text-center lg:text-right">
                <div className="flex items-center gap-2 mb-3 md:mb-4 justify-center lg:justify-start">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-orange" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                  <span className="text-xs md:text-sm font-semibold text-orange uppercase tracking-wider">
                    שאלות ותשובות
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-blue-dk mb-3 sm:mb-4 md:mb-6 leading-[0.9] lg:leading-[0.85]">
                  שאלות <br />
                  נפוצות <br />
                  רוכשי דירות
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-blue-dk/80 leading-relaxed max-w-md mx-auto lg:mx-0 px-2 sm:px-0 mt-6">
                  התשובות לכל השאלות הכי חשובות לפני שאתם קונים את הדירה החדשה שלכם.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/3 order-2 min-h-[400px]">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => toggleItem(index)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}



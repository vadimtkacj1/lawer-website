"use client";

import { useState } from "react";
import DecorativeShapes from "@/components/ui/DecorativeShapes";

const faqItems = [
  {
    question: "איחוד הלוואות",
    answer:
      "ממנפים את הנכס הקיים כדי לאחד הלוואות (רכב, אשראי, מינוס) למשכנתא אחת בריבית נמוכה. המטרה: להקטין את ההחזר החודשי באלפי שקלים.",
  },
  {
    question: "מיחזור משכנתא",
    answer:
      "בדיקת כדאיות למיחזור (ללא עלות) יכולה לחסוך הון לאורך חיי המשכנתא. אידיאלי אם הריביות השתנו או הסטטוס הכלכלי השתפר.",
  },
  {
    question: "משכנתא לזוגות צעירים וציבור חרדי",
    answer:
      "מתמחים בהשגת אחוזי מימון מקסימליים ומכירים לעומק את צרכי הציבור החרדי. הליווי כולל תוכניות \"מחיר למשתכן\" ומשכנתא ראשונה.",
  },
  {
    question: "פתרונות למסורבי בנקים",
    answer:
      "בעלי ניסיון בבניית תיקים מחדש למסורבי בנק ובעלי BDI שלילי. מוצאים את גורמי המימון הנכונים כדי להפוך סירוב לאישור.",
  },
];

function AccordionItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
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
          className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-orange text-white
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
        className={`overflow-hidden transition-[max-height] duration-200 ease-out
                    ${isOpen ? "max-h-96 pb-4 sm:pb-5 md:pb-6" : "max-h-0"}`}
      >
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-dk/85 leading-relaxed pe-2 sm:pe-4 md:pe-8 lg:pe-12">
          {answer}
        </p>
      </div>
    </div>
  );
}
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-8 md:py-12 lg:py-16" style={{ backgroundColor: "#f9f7f4" }}>
      <DecorativeShapes variant="default" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* FAQ Section */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-start">

            {/* Левая колонка - Заголовок - Sticky только на десктопе */}
            <div className="w-full lg:w-1/3 lg:sticky lg:top-16 self-start z-30 pb-4 sm:pb-6 lg:pb-0">
              <div className="h-fit text-center lg:text-right">
                <div className="flex items-center gap-2 mb-3 md:mb-4 justify-center lg:justify-start">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-orange" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.995 4.995 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                  </svg>
                  <span className="text-xs md:text-sm font-semibold text-orange uppercase tracking-wider">
                    השאלות שלנו
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-blue-dk mb-3 sm:mb-4 md:mb-6">
                  FAQ
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-blue-dk/80 mb-0 sm:mb-2 md:mb-4 lg:mb-6 leading-relaxed max-w-md mx-auto lg:mx-0 px-2 sm:px-0">
                  אנחנו צוות ייעוץ משכנתאות המתמקד בתוצאות ועוזר למשפחות לפתוח יעילות.
                </p>
              </div>
            </div>

            {/* Правая колонка - Аккордеон */}
            <div className="w-full lg:w-2/3 order-2 lg:order-2">
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

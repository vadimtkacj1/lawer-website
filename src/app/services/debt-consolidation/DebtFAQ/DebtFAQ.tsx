"use client";

import { useState } from "react";
import DecorativeShapes from "@/components/ui/DecorativeShapes";

// Updated FAQ data for Debt Consolidation
const faqItems = [
  {
    question: "אבי, האם איחוד הלוואות לא מגדיל את סך החוב שלי בסופו של דבר?",
    answer:
      "שאלה מצוינת. כשפורסים הלוואה להרבה שנים, סך תשלום הריבית אכן עולה ('ריבית דריבית'). אבל, וזה אבל גדול – האלטרנטיבה היא להישאר במינוס שבו הריבית רצחנית, או לקרוס כלכלית. המטרה באיחוד היא לייצר יציבות תזרימית עכשיו. במקרים רבים, החיסכון המיידי בריביות 'הלא יעילות' (של האוברדרפט והאשראי) מקזז את העלות לטווח הארוך.",
  },
  {
    question: "כמה עולה לבדוק אם כדאי לי למחזר?",
    answer:
      "אצלי ב'אבי - הבית למשכנתאות', בדיקת הכדאיות הראשונית היא ללא עלות וללא התחייבות. אני מזין את הנתונים למחשבון, ואם אין חיסכון משמעותי – אני אהיה הראשון להגיד לכם 'אל תיגעו במשכנתא'.",
  },
  {
    question: "האם חייבים להגיע לסניף הבנק?",
    answer:
      "את העבודה הקשה והבירוקרטיה אני עושה עבורכם מול הבנקים והמערכות הדיגיטליות. אתם מגיעים לחתימות הסופיות.",
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

export default function DebtFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32" 
      style={{ backgroundColor: "#f9f7f4" }}
    >
      <DecorativeShapes variant="default" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Multi-line header */}
            <div className="w-full lg:w-1/3 lg:sticky lg:top-24 self-start z-30">
              <div className="h-fit text-center lg:text-right">
                <div className="flex items-center gap-2 mb-3 md:mb-4 justify-center lg:justify-start">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-orange" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.995 4.995 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                  </svg>
                  <span className="text-xs md:text-sm font-semibold text-orange uppercase tracking-wider">
                    שאלות ותשובות
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-blue-dk mb-3 sm:mb-4 md:mb-6 leading-[0.9] lg:leading-[0.85]">
                  שאלות <br />
                  נפוצות <br />
                  אבי עונה
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-blue-dk/80 leading-relaxed max-w-md mx-auto lg:mx-0 px-2 sm:px-0 mt-6">
                  ריכזנו עבורכם את התשובות לכל השאלות הכי חשובות בדרך למשכנתא האופטימלית שלכם.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive FAQ Accordion */}
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
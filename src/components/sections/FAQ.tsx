"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "למה אני צריך יועץ משכנתאות?",
    answer:
      "יועץ הבנק עובד עבור הבנק. אני עובד עבורכם - מוריד ריביות, בונה תמהיל חסכוני ומגן על האינטרסים שלכם בכל שלב.",
  },
  {
    question: "כמה כסף אפשר לחסוך?",
    answer:
      "בממוצע, הלקוחות שלי חוסכים בין 120,000 ל-250,000 ש״ח לאורך חיי המשכנתא בזכות תכנון נכון ומשא ומתן מקצועי.",
  },
  {
    question: "כמה זמן לוקח התהליך?",
    answer:
      "מרגע קבלת המסמכים ועד אישור עקרוני - כ-10 ימי עבודה. אני מטפל בכל הבירוקרטיה מולכם ומול הבנק.",
  },
  {
    question: "מה ההבדל בין משכנתא רגילה למחזור?",
    answer:
      "מחזור משכנתא זה לשפר משכנתא קיימת - להוריד ריבית, לקצר תקופה או להוריד החזר חודשי. זה תהליך פשוט שחוסך המון כסף.",
  },
  {
    question: "עוזרים גם למסורבי בנק?",
    answer:
      "בהחלט. כמשפטן פיננסי, יש לי כלים מקצועיים לטפל במקרים מורכבים ולמצוא פתרונות יצירתיים לקבלת אישור.",
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
        className="w-full flex items-center justify-between py-6 text-right
                   transition-colors hover:text-orange focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="flex-grow text-2xl font-black text-blue-dk pe-4">
          {index + 1}. {question}
        </span>
        <span
          className="flex-shrink-0 w-10 h-10 rounded-full bg-orange text-white
                      flex items-center justify-center transition-all duration-300"
        >
          {isOpen ? (
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

      <div
        className={`overflow-hidden transition-all duration-300 ease-out
                    ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
      >
        <p className="text-xl font-bold text-blue-dk/85 leading-relaxed pe-12">
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
    <section id="faq" className="pt-20 pb-48" style={{ backgroundColor: "#f9f7f4" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side - Title */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-6 h-6 text-orange"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.995 4.995 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                </svg>
                <span className="text-sm font-semibold text-orange uppercase tracking-wider">
                  השאלות שלנו
                </span>
              </div>

              <h2 className="text-7xl md:text-8xl font-black text-blue-dk mb-6">
                FAQ
              </h2>

              <p className="text-xl md:text-2xl font-bold text-blue-dk/80 mb-6 leading-relaxed">
                אנחנו צוות ייעוץ משכנתאות המתמקד בתוצאות ועוזר למשפחות לפתוח
                יעילות.
              </p>

            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="lg:w-2/3">
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

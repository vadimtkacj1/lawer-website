"use client";

import { useState } from "react";
import type { ArticleFaq } from "../data";

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
  isLast,
}: {
  item: ArticleFaq;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div className={`border-b-2 border-blue-dk/10 ${isLast ? "border-b-0" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 sm:gap-4 py-4 sm:py-5 text-right
                   transition-colors hover:text-orange focus:outline-none active:text-orange"
        aria-expanded={isOpen}
      >
        <span className="flex-grow text-base sm:text-lg md:text-xl font-black text-blue-dk pe-2 leading-snug">
          {item.q}
        </span>
        <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-dk text-white flex items-center justify-center transition-transform duration-200">
          {isOpen ? (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          )}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
                    ${isOpen ? "max-h-[800px] opacity-100 pb-4 sm:pb-5" : "max-h-0 opacity-0"}`}
      >
        <p className="text-base sm:text-lg font-medium text-blue-dk/85 leading-8 pe-2 sm:pe-4">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function BlogFAQ({ faq }: { faq: ArticleFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faq?.length) return null;

  return (
    <section aria-labelledby="article-faq-title" className="mt-10 sm:mt-14">
      <h2 id="article-faq-title" className="text-2xl sm:text-3xl font-black text-blue-dk mb-4 sm:mb-6">
        שאלות נפוצות
      </h2>
      <div className="rounded-2xl bg-white-card border border-blue-dk/10 px-5 sm:px-7 shadow-sm">
        {faq.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            isLast={index === faq.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

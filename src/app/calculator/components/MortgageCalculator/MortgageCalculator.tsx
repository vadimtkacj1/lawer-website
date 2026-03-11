"use client";

import React, { useState } from "react";
import type { CalculatorData } from "./types";
import BackgroundLayer from "./components/BackgroundLayer";
import SEOIntroduction from "./components/SEOIntroduction";
import CalculatorCard from "./components/CalculatorCard";
import ContactForm from "./components/ContactForm";
import ArticlesSection from "./components/ArticlesSection";
import ServicesSection from "./components/ServicesSection";
import SEOArticleSection from "./components/SEOArticleSection";
import WhyCallAviSection from "./components/WhyCallAviSection";
import FAQSection from "./components/FAQSection";

export default function MortgageCalculator() {
  const [calculatorData, setCalculatorData] = useState<CalculatorData | undefined>();

  return (
    <section className="relative bg-[#FDFCF9] overflow-hidden w-full py-6 md:py-8">
      <BackgroundLayer />

      <div className="relative z-10 w-full flex flex-col items-center gap-6 md:gap-8">
        <SEOIntroduction />

        {/* Calculator + Contact Form (form left, calculator right on md+) */}
        <div className="w-full max-w-4xl px-4 md:px-6" dir="ltr">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <CalculatorCard onDataChange={setCalculatorData} />
            <ContactForm calculatorData={calculatorData} />
          </div>
        </div>

        <ArticlesSection />
        <ServicesSection />
        <SEOArticleSection />
        <WhyCallAviSection />
        <FAQSection />
      </div>

      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          height: 38px;
          width: 38px;
          border-radius: 50%;
          background: #f26722;
          cursor: pointer;
          border: 5px solid white;
          box-shadow: 0 6px 15px rgba(242, 103, 34, 0.3);
          transition: transform 0.2s ease;
        }
        input[type='range']::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        input[type='range']::-moz-range-thumb {
          height: 38px;
          width: 38px;
          border-radius: 50%;
          background: #f26722;
          cursor: pointer;
          border: 5px solid white;
          box-shadow: 0 6px 15px rgba(242, 103, 34, 0.3);
        }
      `}</style>
    </section>
  );
}

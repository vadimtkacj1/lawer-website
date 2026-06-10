"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { fadeInUpFast, viewportOptions } from "@/lib/animations";
import type { LoanTerm } from "../../types";
import { LOAN_MULTIPLIERS, MAX_PROPERTY, MAX_EQUITY, STEP } from "../../constants";
import { formatNumber, calculateMonthlyPayment, calculateMortgageAmount } from "../../utils";

interface CalculatorCardProps {
  onDataChange?: (data: {
    apartmentPrice: number;
    equity: number;
    mortgageAmount: number;
    selectedTerm: LoanTerm;
    monthlyPayment: number;
  }) => void;
}

export default function CalculatorCard({ onDataChange }: CalculatorCardProps) {
  const [apartmentPrice, setApartmentPrice] = useState<number>(0);
  const [equity, setEquity] = useState<number>(0);
  const [selectedTerm, setSelectedTerm] = useState<LoanTerm>(20);

  const mortgageAmount = calculateMortgageAmount(apartmentPrice, equity);
  const monthlyPayment = calculateMonthlyPayment(mortgageAmount, selectedTerm);
  const salaryNeeded = apartmentPrice * 0.00975;
  const downPaymentNeeded = apartmentPrice * 0.2795 + 15000;

  const multiplier = LOAN_MULTIPLIERS[selectedTerm];
  const monthlyPaymentTooltip = `חישוב: (( ${formatNumber(mortgageAmount)} * ${multiplier} ) / ${selectedTerm}) / 12 = ${formatNumber(monthlyPayment)}`;
  const mortgageAmountTooltip = `חישוב: ${formatNumber(apartmentPrice)} - ${formatNumber(equity)} = ${formatNumber(mortgageAmount)}`;
  const salaryTooltip = `חישוב: ${formatNumber(apartmentPrice)} * 0.00975 = ${formatNumber(salaryNeeded)}`;
  const downPaymentTooltip = `חישוב: ${formatNumber(apartmentPrice)} * 0.2795 + 15,000 = ${formatNumber(downPaymentNeeded)}`;

  React.useEffect(() => {
    onDataChange?.({
      apartmentPrice,
      equity,
      mortgageAmount,
      selectedTerm,
      monthlyPayment,
    });
  }, [apartmentPrice, equity, mortgageAmount, selectedTerm, monthlyPayment, onDataChange]);

  return (
    <motion.div
      key="mortgage-calculator-card"
      className="bg-white/95 backdrop-blur-3xl rounded-[2.5rem] border-2 border-blue-dk/10 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.2)] p-6 md:p-8 md:order-2"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUpFast}
      dir="rtl"
    >
      <div className="flex flex-col items-center mb-6 relative" dir="rtl">
        <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-2">
          <Calculator className="text-orange w-6 h-6" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-blue-dk tracking-tight">מחשבון משכנתא</h2>
      </div>

      <div className="space-y-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex flex-col items-center" dir="rtl">
              <span className="text-blue-dk/60 font-black text-xs md:text-sm uppercase tracking-[0.15em] mb-1">מחיר הנכס</span>
              <div className="text-3xl md:text-5xl font-black text-blue-dk tabular-nums leading-none tracking-tighter">
                <span className="text-xl ml-1 opacity-20">₪</span>
                {formatNumber(apartmentPrice)}
              </div>
            </div>

            <div className="relative px-2" dir="ltr">
              <input
                type="range"
                min="0"
                max={MAX_PROPERTY}
                step={STEP}
                value={apartmentPrice}
                onChange={(e) => setApartmentPrice(Number(e.target.value))}
                className="w-full h-4 appearance-none cursor-pointer outline-none rounded-full"
                style={{
                  background: `linear-gradient(to right, #f26722 0%, #f26722 ${(apartmentPrice / MAX_PROPERTY) * 100}%, rgba(15, 32, 67, 0.1) ${(apartmentPrice / MAX_PROPERTY) * 100}%, rgba(15, 32, 67, 0.1) 100%)`
                }}
              />
              <div className="flex justify-between text-[11px] text-blue-dk/30 font-bold mt-3 tabular-nums uppercase tracking-widest">
                <span>0 ILS</span>
                <span>{formatNumber(MAX_PROPERTY)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col items-center" dir="rtl">
              <span className="text-blue-dk/60 font-black text-xs md:text-sm uppercase tracking-[0.15em] mb-1">הון עצמי</span>
              <div className="text-3xl md:text-5xl font-black text-blue-dk tabular-nums leading-none tracking-tighter">
                <span className="text-xl ml-1 opacity-20">₪</span>
                {formatNumber(equity)}
              </div>
            </div>

            <div className="relative px-2" dir="ltr">
              <input
                type="range"
                min="0"
                max={MAX_EQUITY}
                step={STEP}
                value={equity}
                onChange={(e) => setEquity(Number(e.target.value))}
                className="w-full h-4 appearance-none cursor-pointer outline-none rounded-full"
                style={{
                  background: `linear-gradient(to right, #f26722 0%, #f26722 ${(equity / MAX_EQUITY) * 100}%, rgba(15, 32, 67, 0.1) ${(equity / MAX_EQUITY) * 100}%, rgba(15, 32, 67, 0.1) 100%)`
                }}
              />
              <div className="flex justify-between text-[11px] text-blue-dk/30 font-bold mt-3 tabular-nums uppercase tracking-widest">
                <span>0</span>
                <span>{formatNumber(MAX_EQUITY)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3" dir="rtl">
            <div className="text-center">
              <span className="text-blue-dk/60 font-black text-xs md:text-sm uppercase tracking-wider">
                תקופת ההלוואה
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {(Object.keys(LOAN_MULTIPLIERS) as unknown as LoanTerm[]).map((term) => (
                <button
                  key={term}
                  onClick={() => setSelectedTerm(term)}
                  className={`py-2 px-1 rounded-xl font-black text-sm md:text-base transition-all ${
                    selectedTerm === term
                      ? "bg-orange text-white shadow-lg scale-105"
                      : "bg-white text-blue-dk hover:bg-blue-dk/5"
                  }`}
                >
                  {term}
                </button>
              ))}
            </div>
            <div className="text-center text-xs text-blue-dk/40 font-bold">שנים</div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t-2 border-blue-dk/5" dir="rtl">
            <div className="text-center border-l-2 border-blue-dk/5" title={mortgageAmountTooltip}>
              <p className="text-blue-dk/60 text-xs md:text-sm font-black uppercase tracking-wider mb-2">סכום המשכנתא</p>
              <div className="text-lg md:text-2xl font-black text-blue-dk tabular-nums">
                <span className="text-base mr-1 opacity-20">₪</span>
                {formatNumber(mortgageAmount)}
              </div>
            </div>
            <div className="text-center" title={monthlyPaymentTooltip}>
              <p className="text-blue-dk/60 text-xs md:text-sm font-black uppercase tracking-wider mb-2">החזר חודשי</p>
              <div className="text-lg md:text-2xl font-black text-orange tabular-nums">
                <span className="text-base mr-1 opacity-40">₪</span>
                {formatNumber(monthlyPayment)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4" dir="rtl">
            <div className="text-center border-l-2 border-blue-dk/5" title={salaryTooltip}>
              <p className="text-blue-dk/60 text-xs md:text-sm font-black uppercase tracking-wider mb-2">משכורת נדרשת</p>
              <div className="text-lg md:text-2xl font-black text-blue-dk tabular-nums">
                <span className="text-base mr-1 opacity-20">₪</span>
                {formatNumber(salaryNeeded)}
              </div>
            </div>
            <div className="text-center" title={downPaymentTooltip}>
              <p className="text-blue-dk/60 text-xs md:text-sm font-black uppercase tracking-wider mb-2">מקדמה נדרשת</p>
              <div className="text-lg md:text-2xl font-black text-blue-dk tabular-nums">
                <span className="text-base mr-1 opacity-20">₪</span>
                {formatNumber(downPaymentNeeded)}
              </div>
            </div>
          </div>

          <div className="text-center pt-6 px-2" dir="rtl">
            <p className="text-blue-dk/50 text-xs leading-relaxed">
              <span className="text-orange font-black text-sm">*</span> זהו חישוב לדוגמה בלבד. פרמטרים רבים משפיעים על התוצאה הסופית, ורק יועץ משכנתאות מקצועי יכול לספק לך מידע מדויק ומותאם אישית.
            </p>
            <p className="text-blue-dk/70 text-xs font-bold mt-2">
              זכאים לייעוץ ראשוני חינם מאבי -{" "}
              <a href="tel:0544729513" className="text-orange hover:underline mr-1">054-472-9513</a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          height: 28px;
          width: 28px;
          border-radius: 50%;
          background: #f26722;
          cursor: pointer;
          border: 4px solid white;
          box-shadow: 0 4px 10px rgba(242, 103, 34, 0.4);
          transition: transform 0.2s ease;
        }

        input[type='range']::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }

        input[type='range']::-moz-range-thumb {
          height: 28px;
          width: 28px;
          border-radius: 50%;
          background: #f26722;
          cursor: pointer;
          border: 4px solid white;
          box-shadow: 0 4px 10px rgba(242, 103, 34, 0.4);
        }
      `}</style>
    </motion.div>
  );
}
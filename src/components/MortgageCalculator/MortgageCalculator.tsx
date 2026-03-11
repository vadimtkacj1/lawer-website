"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, AlertTriangle, RotateCcw, Home, TrendingUp, 
  Landmark, Coins, Wallet, Building2, Key, ShieldCheck, Banknote 
} from "lucide-react";
import { fadeInUpFast, viewportOptions } from "@/lib/animations";

interface FloatingIconProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

// --- Configuration Constants ---
const STEP = 100000;
const MAX_PRICE = 10000000;
const MAX_EQUITY = 5000000;

/**
 * FloatingIcon Component
 * Decorative background elements
 */
const FloatingIcon = ({ children, className, delay = 0, duration = 8 } : FloatingIconProps) => (
  <motion.div
    key={`floating-icon-${className}-${delay}`}
    className={`absolute text-blue-dk/20 pointer-events-none z-0 ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      opacity: [0.1, 0.2, 0.1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

export default function MortgageSliderCalculator() {
  const [apartmentPrice, setApartmentPrice] = useState<number>(0);
  const [equity, setEquity] = useState<number>(0);
  const [mortgageAmount, setMortgageAmount] = useState<number>(0);
  const [monthlyRepayment, setMonthlyRepayment] = useState<number>(0);

  useEffect(() => {
    const p = apartmentPrice - equity;
    const calculatedMortgage = p > 0 ? p : 0;
    const calculatedRepayment = calculatedMortgage * 0.005;

    setMortgageAmount(calculatedMortgage);
    setMonthlyRepayment(calculatedRepayment);
  }, [apartmentPrice, equity]);

  const formatCurrency = (num: number) => new Intl.NumberFormat("he-IL").format(num);
  const handleReset = () => { setApartmentPrice(0); setEquity(0); };
  const isEquityTooHigh = equity > apartmentPrice && apartmentPrice > 0;

  return (
    <section className="relative py-8 md:py-12 bg-[#FDFCF9] overflow-hidden w-full flex items-center justify-center min-h-screen">
      
      {/* --- BOLD BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        
        {/* Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.12]" 
             style={{ 
               backgroundImage: `linear-gradient(#2D3648 2px, transparent 2px), linear-gradient(90deg, #2D3648 2px, transparent 2px)`,
               backgroundSize: '80px 80px' 
             }} 
        />

        {/* Heavy Corners */}
        <svg className="absolute top-8 left-8 w-20 h-20 text-blue-dk/30" viewBox="0 0 100 100">
          <path d="M0 40 V0 H40" fill="none" stroke="currentColor" strokeWidth="6" />
        </svg>
        <svg className="absolute top-8 right-8 w-20 h-20 text-blue-dk/30 rotate-90" viewBox="0 0 100 100">
          <path d="M0 40 V0 H40" fill="none" stroke="currentColor" strokeWidth="6" />
        </svg>

        {/* Left Graphics */}
        <div className="absolute left-[3%] top-1/2 -translate-y-1/2 opacity-[0.15] text-blue-dk flex flex-col items-center">
            <Coins size={160} strokeWidth={2} />
            <span className="text-[120px] font-black leading-none mt-[-20px]">₪</span>
        </div>

        {/* Right Graphics */}
        <div className="absolute right-[3%] top-1/2 -translate-y-1/2 opacity-[0.15] text-orange flex flex-col items-center">
            <Building2 size={160} strokeWidth={1.5} />
            <Banknote size={100} strokeWidth={2} className="mt-4 rotate-12" />
        </div>

        {/* Bottom Wave */}
        <svg className="absolute bottom-0 left-0 w-full h-auto opacity-[0.15] text-blue-dk" viewBox="0 0 1440 200">
          <path fill="currentColor" d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96V200H0Z"></path>
        </svg>
      </div>

      {/* --- CALCULATOR CARD --- */}
      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        <motion.div
          key="mortgage-calculator-card"
          className="w-full max-w-2xl bg-white/95 backdrop-blur-3xl rounded-[3.5rem] p-8 md:p-12 border border-blue-dk/5 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.12)]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpFast}
        >
          {/* Header */}
          <div className="flex flex-col items-center mb-8 relative" dir="rtl">
            <button 
              onClick={handleReset}
              className="absolute top-0 left-0 flex items-center gap-1.5 text-blue-dk/40 hover:text-orange transition-all font-bold text-sm group"
            >
              <RotateCcw size={18} className="group-hover:rotate-[-180deg] transition-transform duration-500" />
              <span>איפוס</span>
            </button>

            <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mb-3">
              <Calculator className="text-orange w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-blue-dk tracking-tight">מחשבון משכנתא</h2>
          </div>

          <div className="space-y-12">
            
            {/* Apartment Price Slider Section */}
            <div className="space-y-4">
              <div className="flex flex-col items-center" dir="rtl">
                {/* LARGER LABEL HERE */}
                <span className="text-blue-dk/60 font-black text-sm md:text-lg uppercase tracking-[0.15em] mb-1">מחיר הנכס</span>
                <div className="text-5xl md:text-7xl font-black text-blue-dk tabular-nums leading-none tracking-tighter">
                  <span className="text-2xl ml-1 opacity-20">₪</span>
                  {formatCurrency(apartmentPrice)}
                </div>
              </div>
              
              <div className="relative px-2" dir="ltr">
                <input
                  type="range"
                  min="0"
                  max={MAX_PRICE}
                  step={STEP}
                  value={apartmentPrice}
                  onChange={(e) => setApartmentPrice(Number(e.target.value))}
                  className="w-full h-4 bg-blue-dk/10 appearance-none cursor-pointer accent-orange outline-none rounded-full"
                />
                <div className="flex justify-between text-[11px] text-blue-dk/30 font-bold mt-3 tabular-nums uppercase tracking-widest">
                  <span>0 ILS</span>
                  <span>{formatCurrency(MAX_PRICE)}</span>
                </div>
              </div>
            </div>

            {/* Equity Slider Section */}
            <div className="space-y-4">
              <div className="flex flex-col items-center" dir="rtl">
                {/* LARGER LABEL HERE */}
                <span className="text-blue-dk/60 font-black text-sm md:text-lg uppercase tracking-[0.15em] mb-1">הון עצמי</span>
                <div className="text-5xl md:text-7xl font-black text-blue-dk tabular-nums leading-none tracking-tighter">
                  <span className="text-2xl ml-1 opacity-20">₪</span>
                  {formatCurrency(equity)}
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
                  className="w-full h-4 bg-blue-dk/10 appearance-none cursor-pointer accent-orange outline-none rounded-full"
                />
                <div className="flex justify-between text-[11px] text-blue-dk/30 font-bold mt-3 tabular-nums uppercase tracking-widest">
                  <span>START</span>
                  <span>{formatCurrency(MAX_EQUITY)}</span>
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="h-6 flex justify-center" dir="rtl">
              <AnimatePresence>
                {isEquityTooHigh && (
                  <motion.div
                    key="mortgage-calculator-error"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-red-600 font-bold text-xs bg-red-50 px-6 py-2 rounded-xl border border-red-100"
                  >
                    <AlertTriangle size={14} />
                    <span>ההון העצמי גבוה ממחיר הנכס</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t-2 border-blue-dk/5" dir="rtl">
              <div className="text-center border-l-2 border-blue-dk/5">
                {/* LARGER RESULT LABEL */}
                <p className="text-blue-dk/60 text-sm md:text-base font-black uppercase tracking-wider mb-3">סכום המשכנתא</p>
                <div className="text-2xl md:text-4xl font-black text-blue-dk tabular-nums">
                   <span className="text-lg mr-1 opacity-20">₪</span>
                   {formatCurrency(mortgageAmount)}
                </div>
              </div>
              <div className="text-center">
                {/* LARGER RESULT LABEL */}
                <p className="text-blue-dk/60 text-sm md:text-base font-black uppercase tracking-wider mb-3">החזר חודשי</p>
                <div className="text-2xl md:text-4xl font-black text-orange tabular-nums">
                   <span className="text-lg mr-1 opacity-40">₪</span>
                   {formatCurrency(monthlyRepayment)}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
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
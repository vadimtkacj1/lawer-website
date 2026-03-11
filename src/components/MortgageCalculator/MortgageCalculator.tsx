"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calculator, Coins, Building2, Banknote, ArrowLeft
} from "lucide-react";
import { fadeInUpFast, viewportOptions } from "@/lib/animations";

export default function MortgageSliderCalculator() {

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-[#FDFCF9] overflow-hidden w-full flex items-center justify-center min-h-screen">

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

      {/* --- CALCULATOR CTA CARD --- */}
      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        <motion.div
          key="mortgage-calculator-card"
          className="w-full max-w-xl bg-white/95 backdrop-blur-3xl rounded-[3.5rem] p-12 md:p-14 lg:p-16 border border-blue-dk/5 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.12)]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpFast}
        >
          <div className="text-center" dir="rtl">
            <div className="w-20 h-20 rounded-3xl bg-orange/10 flex items-center justify-center mb-6 mx-auto">
              <Calculator className="text-orange w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-dk mb-5 leading-tight">מחשבון משכנתא מתקדם</h2>
            <p className="text-lg md:text-xl text-blue-dk/70 mb-8 max-w-xl mx-auto leading-relaxed px-4">
              חשבו החזר חודשי מדויק לפי תקופת ההלוואה, השוו בין מסלולים שונים וקבלו תוצאות מפורטות
            </p>
            <div className="flex justify-center mt-4">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-4 bg-orange hover:bg-orange/90 text-white px-12 py-6 rounded-2xl text-lg md:text-xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-6 h-6 rotate-180" />
                <span>למחשבון המלא</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
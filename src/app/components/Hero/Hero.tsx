"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

/**
 * HERO COMPONENT
 * * Features:
 * 1. Professional Highlights: Replaced social icons with text badges (7+ years experience).
 * 2. Position: Text block is lowered (pt-[55vh] on mobile, lg:pt-24 on desktop).
 * 3. Mobile Contrast: Highlights are white with a backdrop-blur on mobile for legibility against the suit.
 * 4. RTL Support: Fully optimized for Hebrew.
 */
export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[100dvh] overflow-hidden bg-cream"
      dir="rtl"
    >
      {/* --- BACKGROUND IMAGE SECTION --- */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] z-10">
        <div className="relative w-full h-full">
          {/* Mobile Overlay: High opacity at the bottom to ensure text readability */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-cream via-cream/95 via-35% to-transparent to-60% lg:hidden" />

          {/* Desktop Overlay */}
          <div className="absolute inset-y-0 right-0 w-1/2 z-20 bg-gradient-to-l from-cream to-transparent hidden lg:block" />

          <div className="w-full h-full">
            <Image
              src="/images/expert.jpeg"
              alt="Expert Advisor"
              fill
              priority
              loading="eager"
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 65vw"
              quality={85}
              style={{
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            />
          </div>
        </div>
      </div>

      {/* --- TEXT CONTENT SECTION --- */}
      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <div className="flex flex-col items-start text-right justify-start pt-[55vh] pb-12 lg:justify-center lg:pt-24 lg:pb-0 min-h-[100dvh]">
          <div className="w-full lg:w-[50%] lg:ml-auto lg:pr-12 3xl:pr-16 4xl:pr-20 5xl:pr-24 relative">
            
            {/* --- PROFESSIONAL HIGHLIGHTS (Replaced Social Icons) --- */}
            <div className="flex flex-wrap gap-3 mb-5">
              {[
                "מעל 7 שנות ניסיון", // Over 7 years of experience
                "ליווי אישי ומקצועי"  // Personal & professional guidance
              ].map((text, index) => (
                <div 
                  key={index}
                  className="
                    flex items-center gap-2 px-3 py-1.5 rounded-full
                    text-white bg-[#0F2344]/40 backdrop-blur-md border border-white/20
                    lg:text-[#0F2344] lg:bg-transparent lg:border-none lg:p-0 lg:backdrop-blur-none
                    text-sm md:text-lg font-bold drop-shadow-sm
                  "
                >
                  <CheckCircle2 size={18} className="text-[#F1662A] lg:w-5 lg:h-5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="font-black leading-[1.1] mb-5 3xl:mb-8 4xl:mb-10 text-[2.1rem] md:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl 5xl:text-[10rem] text-[#0F2344] drop-shadow-sm [text-shadow:_0_1px_20px_rgb(255_255_255_/_40%)]">
              הביטחון שלך <br />
              <span className="text-[#F1662A]">במשכנתא חסכונית</span>
            </h1>

            {/* Subtext Description */}
            <p className="font-medium leading-relaxed mb-8 md:mb-12 text-base md:text-2xl text-[#0F2344] [text-shadow:_0_1px_10px_rgb(255_255_255_/_50%)]">
              אנחנו דואגים שהכסף יישאר אצלכם, לא בבנק. <br />
              חיסכון ממוצע של{" "}
              <span className="text-[#0F2344] font-black border-b-2 border-[#F1662A]/40">
                180,000 ש״ח
              </span>{" "}
              למשפחה בתכנון נכון.
            </p>

            {/* --- CALL TO ACTION BUTTON & SECONDARY LINK --- */}
            <div className="flex flex-col items-start gap-4">
              <div className="w-full sm:w-auto">
                <a
                  href="#contact"
                  className="relative inline-flex items-center justify-center gap-3 bg-blue-dk text-white px-7 py-3.5 md:px-12 md:py-5 text-base md:text-xl font-extrabold shadow-lg hover:brightness-105 active:scale-[0.98] transition-all"
                >
                  <span className="relative z-10">בדיקת זכאות חינם</span>
                  <svg className="w-5 h-5 md:w-6 md:h-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Secondary link with >> arrows */}
              <a 
                href="#about" 
                className="text-[#0F2344] font-bold text-sm md:text-xl hover:text-[#F1662A] transition-colors mr-1 drop-shadow-sm"
              >
                עוד עליי &gt;&gt;
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
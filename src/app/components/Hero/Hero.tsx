"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

/**
 * HERO COMPONENT
 * Focused on mortgage consulting services.
 */
export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[100dvh] overflow-hidden bg-cream"
      dir="rtl"
    >
      {/* --- BACKGROUND IMAGE SECTION --- */}
      {/* Added 'pointer-events-none' to prevent click/tap lag. 
          The browser will ignore interactions with the image area.
      */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 z-10 pointer-events-none select-none">
        <div className="relative w-full h-full">
          {/* Mobile Overlay: Fades the bottom of the image into the background color */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-cream via-cream/95 via-35% to-transparent to-60% lg:hidden" />

          {/* Desktop Overlay: Fades the right side of the image into the background color */}
          <div className="absolute inset-y-0 right-0 w-1/2 z-20 bg-gradient-to-l from-cream to-transparent hidden lg:block" />

          <div className="w-full h-full">
            <Image
              src="/images/expert.jpeg"
              alt="Expert Mortgage Advisor"
              fill
              priority
              loading="eager"
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
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
        <div className="flex flex-col items-start text-right justify-start pt-[52vh] pb-12 lg:justify-start lg:pt-40 lg:pb-24 min-h-[100dvh]">
          
          <div className="w-full lg:w-[65%] lg:ml-auto relative">
            
            {/* --- PROFESSIONAL HIGHLIGHTS (Badges) --- */}
            <div className="flex flex-wrap gap-2 mb-5">
              {[
                "מעל 7 שנות ניסיון", 
                "יוצא מערכת הבנקאות",
                "חבר התאחדות יועצי המשכנתאות"
              ].map((text, index) => (
                <div 
                  key={index}
                  className="
                    flex items-center gap-1.5 px-3 py-1 rounded-full
                    text-white bg-[#0F2344]/50 backdrop-blur-md border border-white/20
                    lg:text-[#0F2344] lg:bg-transparent lg:border-none lg:p-0 lg:backdrop-blur-none
                    text-[11px] md:text-sm lg:text-base font-bold drop-shadow-sm
                  "
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F1662A] lg:w-4 lg:h-4" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* --- MAIN HEADLINE --- */}
            {/* Reduced mobile font size from 1.8rem to 1.5rem (approx 24px) 
                to prevent overcrowding on small devices.
            */}
            <h1 className="font-black leading-[1.2] mb-6 text-[#0F2344] drop-shadow-sm [text-shadow:_0_1px_20px_rgb(255_255_255_/_40%)]">
              <span className="block text-[1.5rem] md:text-5xl xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-[8.5rem]">
                משכנתא לא חייבת להיות הימור
              </span>
              <span className="block text-[#F1662A] text-[1.5rem] md:text-5xl xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-[8.5rem]">
                בואו נהפוך אותה לחיסכון המחושב ביותר שלכם
              </span>
            </h1>

            {/* --- SUBTEXT DESCRIPTION --- */}
            <p className="font-medium leading-relaxed mb-8 text-sm md:text-lg lg:text-xl text-[#0F2344] [text-shadow:_0_1px_10px_rgb(255_255_255_/_50%)] max-w-2xl">
              תכנון משכנתא מדויק וניהול מו״מ מול הבנקים, במטרה להשיג עבורכם פתרון פיננסי נכון יותר, 
              עם תנאים שמשרתים אתכם גם היום וגם בעתיד.
            </p>

            {/* --- CALL TO ACTION BUTTONS --- */}
            <div className="flex flex-col items-start gap-5">
              <div className="w-full sm:w-auto">
                <a
                  href="#contact"
                  className="relative inline-flex items-center justify-center gap-3 bg-[#0F2344] text-white px-8 py-4 md:px-12 md:py-5 text-base md:text-xl font-extrabold shadow-lg hover:brightness-105 active:scale-[0.98] transition-all"
                >
                  <span className="relative z-10">בדיקת זכאות חינם</span>
                  <svg className="w-5 h-5 md:w-6 md:h-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              <a 
                href="#about-expert" 
                className="text-[#0F2344] font-bold text-sm md:text-lg hover:text-[#F1662A] transition-colors mr-1 drop-shadow-sm"
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
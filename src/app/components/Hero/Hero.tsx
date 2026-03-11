"use client";

import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full sm:min-h-[105vh] lg:min-h-[100dvh] overflow-hidden bg-cream"
      dir="rtl"
    >
  <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 z-10 pointer-events-none select-none">
  <div className="relative w-full h-full flex items-start lg:items-center justify-center">
    
    <div className="relative w-full h-[60vh] md:h-full">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/expert-poster.webp"
        className="w-full h-full object-cover scale-[1.05] sm:scale-100 lg:scale-100 object-top lg:object-center transition-transform duration-700"
        style={{
          transformOrigin: 'top center',
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        <source src="/images/new-expert-optimized.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/images/new-expert.mp4" type="video/mp4" />
      </video>

      <div className="absolute bottom-0 left-0 right-0 h-[20vh] z-[25] lg:hidden">
        <div className="absolute inset-0 backdrop-blur-md [mask-image:linear-gradient(to_top,black_5%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_5%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/80 to-transparent" />
      </div>

    </div>

    {/* Градиент для десктопа (остается на уровне корневого флекса) */}
    <div className="absolute inset-y-0 right-0 w-1/2 z-20 bg-gradient-to-l from-cream to-transparent hidden lg:block" />

  </div>
</div>

      <div className="container mx-auto px-2 sm:px-6 md:px-12 relative z-30">
        {/* Изменен pt-[40vh] на pt-[55vh] чтобы опустить текст ниже */}
        <div className="flex flex-col items-start text-right justify-start pt-[50vh] sm:pt-[52vh] md:pt-[50vh] pb-3 sm:pb-10 md:pb-12 lg:justify-start lg:pt-40 lg:pb-24 sm:min-h-[105vh] lg:min-h-[100dvh]">
          <div className="w-full lg:w-[65%] lg:ml-auto relative">
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-5">
              {[
                "מעל 7 שנות ניסיון",
                "יוצא מערכת הבנקאות",
                "חבר התאחדות יועצי המשכנתאות"
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-white bg-[#0f3244]/50 backdrop-blur-md border border-white/20 lg:text-[#0f3244] lg:bg-transparent lg:border-none lg:p-0 lg:backdrop-blur-none text-[10px] sm:text-[11px] md:text-sm lg:text-base font-bold drop-shadow-sm"
                >
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F1662A] lg:w-4 lg:h-4" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <h1 className="font-black leading-[1.15] sm:leading-[1.2] mb-2 sm:mb-5 md:mb-6 text-[#0f3244] drop-shadow-sm [text-shadow:_0_1px_20px_rgb(255_255_255_/_40%)]">
              <span className="block text-[1.35rem] sm:text-[1.65rem] md:text-5xl xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-[8.5rem]">
                משכנתא לא חייבת להיות הימור
              </span>
              <span className="block text-[#F1662A] text-[1.35rem] sm:text-[1.65rem] md:text-5xl xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-[8.5rem]">
                בואו נהפוך אותה לחיסכון המחושב ביותר שלכם
              </span>
            </h1>

            <p className="font-medium leading-relaxed mb-3 sm:mb-7 md:mb-8 text-[0.9rem] sm:text-base md:text-lg lg:text-xl text-[#0f3244] [text-shadow:_0_1px_10px_rgb(255_255_255_/_50%)] max-w-2xl">
              תכנון משכנתא מדויק וניהול מו״מ מול הבנקים, במטרה להשיג עבורכם פתרון פיננסי נכון יותר,
              עם תנאים שמשרתים אתכם גם היום וגם בעתיד.
            </p>

            <div className="flex flex-col items-start gap-2 sm:gap-4 md:gap-5">
              <div className="w-full sm:w-auto">
                <a
                  href="#contact"
                  className="relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#1c3664] text-white px-6 py-3.5 sm:px-8 sm:py-4 md:px-12 md:py-5 text-sm sm:text-base md:text-xl font-extrabold shadow-lg hover:brightness-110 active:scale-[0.98] transition-all w-full sm:w-auto"
                >
                  <span className="relative z-10">בדיקת זכאות חינם</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              <a
                href="#about-expert"
                className="text-[#0f3244] font-bold text-xs sm:text-sm md:text-lg hover:text-[#F1662A] transition-colors mr-1 drop-shadow-sm"
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
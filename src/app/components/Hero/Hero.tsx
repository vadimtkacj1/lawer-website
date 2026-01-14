"use client";

import Image from "next/image";

/**
 * HERO COMPONENT
 * Simplified to remove heavy animations and keep scroll stable.
 */
export default function Hero() {
  return (
    <section
      // Set to min-h-screen to ensure full coverage without scroll-parallax extra height
      className="relative w-full min-h-[100dvh] overflow-hidden bg-cream"
      dir="rtl"
    >
      {/* --- BACKGROUND IMAGE SECTION --- */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] z-10">
        <div className="relative w-full h-full">
          {/* Mobile Overlay: Vertical gradient for readability on small screens */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-cream via-cream/60 to-transparent lg:hidden" />

          {/* Desktop Overlay: Horizontal gradient to blend the image into the text area */}
          <div className="absolute inset-y-0 right-0 w-1/2 z-20 bg-gradient-to-l from-cream to-transparent hidden lg:block" />

          <div className="w-full h-full">
            <Image
              src="/images/expert.jpeg"
              alt="Expert Advisor"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* --- TEXT CONTENT SECTION --- */}
      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <div className="flex flex-col items-start text-right justify-end pb-24 lg:justify-center lg:pb-0 min-h-[100dvh]">
          <div className="w-full lg:w-[50%] lg:ml-auto lg:pr-12 3xl:pr-16 4xl:pr-20 5xl:pr-24 relative">
            
            {/* Main Headline */}
            <h1 className="font-black leading-[1.1] mb-6 3xl:mb-8 4xl:mb-10 text-[2.4rem] md:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl 5xl:text-[10rem] text-[#0F2344] drop-shadow-sm">
              הביטחון שלך <br />
              <span className="text-[#F1662A]">במשכנתא חסכונית</span>
            </h1>

            {/* Subtext/Description */}
            <p className="font-medium leading-relaxed mb-10 3xl:mb-12 4xl:mb-16 text-lg md:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl text-[#0F2344]/90">
              אנחנו דואגים שהכסף יישאר אצלכם, לא בבנק. <br />
              חיסכון ממוצע של{" "}
              <span className="text-[#0F2344] font-black border-b-4 3xl:border-b-[5px] 4xl:border-b-[6px] border-[#F1662A]/20">
                180,000 ש״ח
              </span>{" "}
              למשפחה בתכנון נכון.
            </p>

            {/* --- CALL TO ACTION BUTTON --- */}
            <div className="w-full sm:w-auto">
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center gap-4 3xl:gap-6 4xl:gap-8 w-full sm:w-auto bg-blue-dk text-white px-12 3xl:px-16 4xl:px-20 5xl:px-24 py-5 3xl:py-6 4xl:py-8 5xl:py-10 text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-extrabold shadow-2xl shadow-blue-dk/30 hover:brightness-105 active:scale-[0.99] transition-none"
              >
                <span className="relative z-10">בדיקת זכאות חינם</span>
                {/* RTL Arrow Icon */}
                <svg className="w-6 h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-10 5xl:h-10 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
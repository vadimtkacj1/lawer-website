"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const optimizedViewport = {
  once: true,
  margin: "0px 0px -100px 0px",
  amount: 0.2,
};

export default function RenovationCTA() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 lg:py-40 bg-cream relative overflow-hidden" dir="rtl">
      
      {/* DECORATIVE SVG BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
        <svg className="absolute top-0 left-0 w-96 h-96 opacity-[0.15] text-[#1c3664] -scale-x-100" viewBox="0 0 100 100">
          <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" strokeWidth="0.8" />
          <line x1="90" y1="0" x2="90" y2="100" stroke="currentColor" strokeWidth="0.8" />
          {[10, 20, 30, 40, 50, 60, 70, 80].map((pos) => (
            <line key={pos} x1={pos} y1="8" x2={pos} y2="12" stroke="currentColor" strokeWidth="0.6" />
          ))}
        </svg>
        <div className="absolute top-1/4 right-[12%] text-[#1c3664] opacity-25 text-6xl font-thin">+</div>
        <div className="absolute bottom-1/4 left-[18%] text-orange opacity-35 text-5xl font-light">+</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <m.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
        >
          <m.h2
            variants={staggerItem}
            className="font-noto-sans-hebrew font-black text-4xl md:text-5xl lg:text-7xl text-[#1c3664] mb-8 leading-tight"
          >
            חולמים על בית מחודש?
          </m.h2>

          <m.h3
            variants={staggerItem}
            className="font-noto-sans-hebrew font-bold text-2xl md:text-3xl lg:text-4xl text-orange mb-12"
          >
            בואו נדאג למימון לשיפוץ שלכם
          </m.h3>

          <m.div variants={staggerItem} className="space-y-6 mb-16">
            <p className="font-noto-sans-hebrew text-xl md:text-2xl text-[#1c3664]/80 leading-relaxed font-light">
              תושבי חולון, בת ים, ראשון לציון, תל אביב והסביבה – לפני שאתם שוברים את הקיר הראשון, בואו נשב לקפה.
            </p>
            <p className="font-noto-sans-hebrew text-xl md:text-2xl text-[#1c3664]/80 leading-relaxed font-light">
              נבדוק כמה כסף אפשר לגייס לטובת השיפוץ, נבנה תמהיל שלא יכביד עליכם בחודש, ונדאג שהבית שלכם יהיה גם יפה יותר וגם חכם כלכלית.
            </p>
          </m.div>

          <m.div variants={staggerItem}>
            <button
              onClick={scrollToContact}
              className="font-noto-sans-hebrew font-bold text-xl md:text-2xl px-14 py-6 bg-[#1c3664] text-white rounded-full shadow-[0_20px_40px_-10px_rgba(28,54,100,0.3)] hover:bg-[#15294a] hover:shadow-[0_25px_50px_-12px_rgba(28,54,100,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-transparent hover:border-white/20"
            >
              השאירו פרטים לבדיקת זכאות
            </button>
          </m.div>

        </m.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
/* Animation variants should be exported from your @/lib/animations file */
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * Viewport configuration for scroll-triggered animations.
 * Ensures animations start when 20% of the section is visible.
 */
const optimizedViewport = {
  once: true,
  margin: "0px 0px -100px 0px",
  amount: 0.2,
};

export default function RenovationCTA() {
  /**
   * Smoothly scrolls the user to the contact form section.
   */
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    /* MAIN SECTION: Solid cream background without gradients or cards */
    <section className="py-24 lg:py-40 bg-cream relative overflow-hidden">
      
      {/* 1. DECORATIVE SVG BACKGROUND: High-visibility architectural blueprint elements */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
        
        {/* Large Corner Ruler: Represents legal and financial precision */}
        <svg className="absolute top-0 right-0 w-96 h-96 opacity-[0.18] text-[#1c3664]" viewBox="0 0 100 100">
          <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" strokeWidth="0.8" />
          <line x1="90" y1="0" x2="90" y2="100" stroke="currentColor" strokeWidth="0.8" />
          {/* Ruler ticks for added detail */}
          {[10, 20, 30, 40, 50, 60, 70, 80].map((pos) => (
            <line key={pos} x1={pos} y1="8" x2={pos} y2="12" stroke="currentColor" strokeWidth="0.6" />
          ))}
        </svg>

        {/* Floating Plus Symbols: High-contrast accents */}
        <div className="absolute top-1/4 left-[12%] text-[#1c3664] opacity-25 text-6xl font-thin">+</div>
        <div className="absolute bottom-1/4 right-[18%] text-orange opacity-35 text-5xl font-light">+</div>
        
        {/* Abstract Circular Blueprint: Positioned in the bottom-left corner */}
        <svg className="absolute -bottom-20 -left-20 w-80 h-80 opacity-[0.15] text-[#1c3664]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.4" fill="none" />
          <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.4" fill="none" strokeDasharray="3 3" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.4" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.4" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
        >
          {/* Main Heading: High-contrast professional branding color */}
          <motion.h2
            variants={staggerItem}
            className="font-noto-sans-hebrew font-black text-4xl md:text-5xl lg:text-7xl text-[#1c3664] mb-8 leading-tight"
          >
            חולמים על בית מחודש?
          </motion.h2>

          {/* Subheading: Bright orange accent to highlight the goal */}
          <motion.h3
            variants={staggerItem}
            className="font-noto-sans-hebrew font-bold text-2xl md:text-3xl lg:text-4xl text-orange mb-12"
          >
            בואו נדאג למימון לשיפוץ שלכם
          </motion.h3>

          {/* Text Content: Focus on local expertise and financial wisdom */}
          <motion.div variants={staggerItem} className="space-y-6 mb-16">
            <p className="font-noto-sans-hebrew text-xl md:text-2xl text-[#1c3664]/80 leading-relaxed font-light">
              תושבי חולון והסביבה – לפני שאתם שוברים את הקיר הראשון, בואו נשב לקפה.
            </p>
            <p className="font-noto-sans-hebrew text-xl md:text-2xl text-[#1c3664]/80 leading-relaxed font-light">
              נבנה תמהיל שלא יכביד עליכם בחודש, ונדאג שהבית שלכם יהיה גם יפה יותר וגם חכם כלכלית.
            </p>
          </motion.div>

          {/* CTA BUTTON: Primary brand color #1c3664 with high-impact styling */}
          <motion.div variants={staggerItem}>
            <button
              onClick={scrollToContact}
              className="font-noto-sans-hebrew font-bold text-xl md:text-2xl px-14 py-6 bg-[#1c3664] text-white rounded-full shadow-[0_20px_40px_-10px_rgba(28,54,100,0.3)] hover:bg-[#15294a] hover:shadow-[0_25px_50px_-12px_rgba(28,54,100,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-transparent hover:border-white/20"
            >
              השאירו פרטים לבדיקת זכאות
            </button>
          </motion.div>

          {/* Footer Branding: Minimalist divider and signature */}
          <motion.div
            variants={staggerItem}
            className="mt-20 pt-10 border-t border-[#1c3664]/10"
          >
            <p className="font-noto-sans-hebrew text-lg md:text-xl text-[#1c3664]/40 tracking-wide">
              אבי - הבית למשכנתאות | אבי בוקעי
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
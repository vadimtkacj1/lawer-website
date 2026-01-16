"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Users,
  FileCheck,
  Handshake,
  PenTool
} from "lucide-react";
import {
  fadeInUpFast,
  staggerContainer,
  staggerItem,
  viewportOptions,
} from "@/lib/animations";
import { usePerformanceSettings } from "@/lib/usePerformanceSettings";

const steps = [
  { id: "01", title: "שיחת אפיון והיכרות ראשונית", Icon: Phone },
  { id: "02", title: "ליווי מלא מול הגופים הבנקאיים", Icon: Users },
  { id: "03", title: "קבלת אישור עקרוני", Icon: FileCheck },
  { id: "04", title: "ניהול משא ומתן להשגת תנאים מיטביים", Icon: Handshake },
  { id: "05", title: "חתימה סופית וקבלת המשכנתא", Icon: PenTool },
];

export default function HowItWorks() {
  const { shouldReduceAnimations } = usePerformanceSettings();

  return (
    <section className="relative py-16 md:py-20 bg-cream overflow-hidden" dir="rtl">

      {/* --- NEW ABSTRACT SVG BACKGROUND --- */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1c3664" strokeWidth="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {!shouldReduceAnimations && (
            <>
              <motion.circle
                cx="10%" cy="20%" r="15" fill="#f26722" fillOpacity="0.03"
                animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
              />
              <motion.circle
                cx="90%" cy="80%" r="20" fill="#1c3664" fillOpacity="0.02"
                animate={{ scale: [1, 1.1, 1], y: [0, -40, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
              />
            </>
          )}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-center text-4xl md:text-6xl font-black text-blue-dk mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpFast}
        >
          איך זה עובד?
        </motion.h2>

        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-0 relative"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center flex-1 w-full group">
              
              <motion.div 
                variants={staggerItem}
                className="flex flex-col items-center w-full relative"
              >
                {/* LARGE BACKGROUND NUMBERS - Moved right with ml-* classes */}
                <div className="absolute -top-12 md:-top-16 ml-8 md:ml-14 text-7xl md:text-8xl font-black text-blue-dk/[0.07] select-none transition-colors duration-500 group-hover:text-orange/10 z-0">
                  {step.id}
                </div>

                {/* ICON CONTAINER - Changed from rounded-full to rounded-3xl for rounded cube look */}
                <div className="w-24 h-24 md:w-36 md:h-36 rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex items-center justify-center border border-white relative z-20 transition-all duration-500 group-hover:shadow-orange/20 group-hover:-translate-y-1">
                  <step.Icon className="w-10 h-10 md:w-16 md:h-16 text-orange transition-transform duration-500 group-hover:scale-105" strokeWidth={1.2} />
                </div>

                {/* TEXT (reduced margin) */}
                <h3 className="mt-2 md:mt-3 text-blue-dk font-bold text-center text-lg md:text-xl max-w-[180px] leading-tight transition-colors duration-300 group-hover:text-orange relative z-10">
                  {step.title}
                </h3>
              </motion.div>

              {/* CURVED ARROWS */}
              {index !== steps.length - 1 && (
                <>
                  {/* Desktop arrow (curved) */}
                  <div className="hidden lg:block absolute top-[48px] md:top-[72px] -left-12 z-10 w-24 pointer-events-none">
                    <svg width="80" height="20" viewBox="0 0 80 20" fill="none" className="text-orange">
                      {/* Curved line */}
                      <path 
                        d="M78 10 Q 40 0 2 10" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                      />
                      {/* Arrowhead */}
                      <path 
                        d="M2 10L12 2M2 10L12 18" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  
                  {/* Mobile down arrow (curved) */}
                  <div className="lg:hidden my-4 text-orange opacity-60">
                    <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
                      {/* Curved line */}
                      <path d="M10 0 Q 15 20 10 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Arrowhead */}
                      <path d="M10 38L2 30M10 38L18 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
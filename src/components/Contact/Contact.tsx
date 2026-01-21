"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import DecorativeShapes from "@/components/ui/DecorativeShapes";
import Link from "next/link";

// שימוש ב-memoization לסגנון ה-GPU כדי למנוע רינדורים מיותרים
const gpuStyle = { 
  willChange: "transform, opacity", 
  WebkitBackfaceVisibility: "hidden" as const,
  backfaceVisibility: "hidden" as const,
  perspective: 1000,
  transform: "translate3d(0,0,0)" // עדיף על translateZ(0) בחלק מהדפדפנים
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [touched, setTouched] = useState({ name: false, phone: false });

  // ולידציה אופטימלית
  const validateName = (name: string) => {
    if (!name.trim()) return "שם מלא הוא שדה חובה";
    if (name.trim().length < 2) return "שם חייב להכיל לפחות 2 תווים";
    return "";
  };

  const validatePhone = (phone: string) => {
    if (!phone.trim()) return "מספר טלפון הוא שדה חובה";
    const cleanPhone = phone.replace(/[\s\-()]/g, "");
    const phoneRegex = /^(\+?972|0)?([5]\d{8})$/;
    if (!phoneRegex.test(cleanPhone)) return "מספר טלפון לא תקין";
    return "";
  };

  const handleBlur = (field: "name" | "phone") => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(prev => ({ 
      ...prev, 
      [field]: field === "name" ? validateName(formData.name) : validatePhone(formData.phone) 
    }));
  };

  const handleChange = (field: "name" | "phone", value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors(prev => ({ 
        ...prev, 
        [field]: field === "name" ? validateName(value) : validatePhone(value) 
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameErr = validateName(formData.name);
    const phoneErr = validatePhone(formData.phone);
    
    if (nameErr || phoneErr) {
      setErrors({ name: nameErr, phone: phoneErr });
      setTouched({ name: true, phone: true });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ name: "", phone: "" });
        setTouched({ name: false, phone: false });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 md:py-24 overflow-hidden" style={{ backgroundColor: "#e8e4df" }} dir="rtl">
      
      {/* אופטימיזציה לרקע: שימוש ב-CSS במקום SVG Pattern אם אפשר, או SVG פשוט ללא Pattern מורכב */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(#1c3664 0.5px, transparent 0.5px), linear-gradient(90deg, #1c3664 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px',
          opacity: 0.08
        }}></div>
      </div>
      
      {/* DecorativeShapes - מומלץ לבדוק אם יש שם blur ולהסיר אותו במובייל */}
      <DecorativeShapes variant="contact" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-center max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // הפחתת ה-amount לשיפור תגובתיות
          variants={staggerContainer}
          style={gpuStyle}
        >

          {/* Promotional Content */}
          <motion.div variants={staggerItem} className="flex flex-col items-center lg:items-start text-center lg:text-right">
            <div className="relative group w-full max-w-[320px]">
              <div className="absolute -top-3 -right-1 bg-[#1c3664] text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-20 shadow-sm">
                חדש
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-[#1c3664] mb-3 leading-none">משכנתא <br/> חכמה</h3>
              <p className="text-base md:text-lg font-bold text-[#1c3664]/70 mb-6 leading-tight">
                לקיחת משכנתא בחכמה – הכלי המקצועי שלנו לניתוח והגשת מסמכים בצורה בטוחה.
              </p>
              <Link href="/wise" className="group inline-flex items-center gap-3 text-[#1c3664] font-black transition-all hover:opacity-80">
                <span className="text-xl md:text-2xl border-b-2 border-transparent group-hover:border-[#1c3664]">
                  כניסה למערכת
                </span>
                <svg className="w-6 h-6 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Separator - Hidden on very small devices for performance */}
          <motion.div variants={staggerItem} className="flex flex-col items-center justify-center py-4 lg:py-0">
            <div className="hidden lg:block h-20 w-[1px] bg-[#1c3664]/10 mb-4"></div>
            <div className="flex flex-col items-center">
              <span className="text-[#1c3664]/10 font-black text-7xl lg:text-6xl leading-none select-none">או</span>
            </div>
            <div className="hidden lg:block h-20 w-[1px] bg-[#1c3664]/10 mt-4"></div>
          </motion.div>

          {/* Form and Direct Contact */}
          <motion.div variants={staggerItem} className="flex flex-col gap-8 items-center lg:items-end w-full">
            
            <div className="flex flex-col items-center lg:items-end gap-4 w-full">
              <a href="tel:0544729513" className="flex items-center flex-row-reverse gap-4 group">
                <div className="bg-[#1c3664] rounded-lg p-2 text-white shadow-md group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                </div>
                <span className="text-2xl md:text-3xl font-black text-[#1c3664]" dir="ltr">054-472-9513</span>
              </a>

              <a href="mailto:service@avi-mashkanta.com" className="flex items-center flex-row-reverse gap-4 group w-full justify-center lg:justify-end">
                <div className="bg-[#1c3664] rounded-lg p-2 text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                </div>
                <span className="text-base md:text-xl font-black text-[#1c3664] truncate">service@avi-mashkanta.com</span>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-[340px] flex flex-col gap-3" noValidate>
              <input
                type="text"
                placeholder="שם מלא *"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                className={`w-full bg-white border-2 rounded-xl px-4 py-3.5 text-right text-[#1c3664] font-bold shadow-sm outline-none transition-all placeholder:text-[#1c3664]/40 ${
                  errors.name && touched.name ? "border-red-500" : "border-transparent focus:border-[#1c3664]/20"
                }`}
              />
              {errors.name && touched.name && <span className="text-red-500 text-xs font-bold px-1">{errors.name}</span>}
              
              <input
                type="tel"
                placeholder="מספר טלפון *"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                onBlur={() => handleBlur("phone")}
                className={`w-full bg-white border-2 rounded-xl px-4 py-3.5 text-right text-[#1c3664] font-bold shadow-sm outline-none transition-all placeholder:text-[#1c3664]/40 ${
                  errors.phone && touched.phone ? "border-red-500" : "border-transparent focus:border-[#1c3664]/20"
                }`}
              />
              {errors.phone && touched.phone && <span className="text-red-500 text-xs font-bold px-1">{errors.phone}</span>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-xl font-black bg-[#1c3664] text-white rounded-xl hover:bg-[#152a4d] transition-all shadow-lg active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? "שולח..." : "שלח הודעה"}
              </button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
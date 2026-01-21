"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  viewportOptions,
} from "@/lib/animations";
import DecorativeShapes from "@/components/ui/DecorativeShapes";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [touched, setTouched] = useState({ name: false, phone: false });

  // Input validation logic
  const validateName = (name: string): string => {
    if (!name.trim()) return "שם מלא הוא שדה חובה";
    if (name.trim().length < 2) return "שם חייב להכיל לפחות 2 תווים";
    return "";
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) return "מספר טלפון הוא שדה חובה";
    const cleanPhone = phone.replace(/[\s\-()]/g, "");
    const phoneRegex = /^(\+?972|0)?([5]\d{8})$/;
    if (!phoneRegex.test(cleanPhone)) return "מספר טלפון לא תקין";
    return "";
  };

  const handleBlur = (field: "name" | "phone") => {
    setTouched({ ...touched, [field]: true });
    setErrors({ 
      ...errors, 
      [field]: field === "name" ? validateName(formData.name) : validatePhone(formData.phone) 
    });
  };

  const handleChange = (field: "name" | "phone", value: string) => {
    setFormData({ ...formData, [field]: value });
    if (touched[field]) {
      setErrors({ 
        ...errors, 
        [field]: field === "name" ? validateName(value) : validatePhone(value) 
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true });
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    setErrors({ name: nameError, phone: phoneError });

    if (nameError || phoneError) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "" });
        setTouched({ name: false, phone: false });
        setErrors({ name: "", phone: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "#e8e4df" }} dir="rtl">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1c3664" strokeWidth="0.5" opacity="0.12"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <DecorativeShapes variant="contact" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl md:text-8xl font-black text-[#1c3664] mb-4 tracking-tighter">דברו איתי</h2>
          <p className="text-lg md:text-2xl font-bold text-[#1c3664]/80">השאירו פרטים ונחזור אליכם בהקדם</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-6 items-center max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          
          {/* Top Block: Promotional Content */}
          <motion.div variants={staggerItem} className="flex flex-col items-center lg:items-start text-center lg:text-right">
            <div className="relative group max-w-[320px]">
              <div className="absolute -top-4 -right-2 bg-[#1c3664] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-20">
                חדש
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-[#1c3664] mb-4 leading-none">משכנתא <br/> חכמה</h3>
              <p className="text-lg font-bold text-[#1c3664]/70 mb-8 leading-tight">
                לקיחת משכנתא בחכמה – הכלי המקצועי שלנו לניתוח והגשת מסמכים בצורה בטוחה.
              </p>
              <Link href="/wise" className="group inline-flex items-center gap-3 text-[#1c3664] font-black transition-all hover:opacity-80">
                <span className="text-2xl border-b-4 border-transparent group-hover:border-[#1c3664] transition-all">
                  כניסה למערכת
                </span>
                <svg 
                  className="w-8 h-8 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Separator */}
          <motion.div variants={staggerItem} className="flex flex-col items-center justify-center px-4">
            <div className="hidden lg:block h-24 w-[2px] bg-[#1c3664]/10 mb-6"></div>
            <div className="flex flex-col items-center">
              <span className="text-[#1c3664]/20 font-black text-4xl md:text-5xl uppercase">או</span>
              <span className="text-[#1c3664]/60 font-black text-[11px] text-center mt-2 tracking-widest leading-none">מערכת דיגיטלית</span>
            </div>
            <div className="hidden lg:block h-24 w-[2px] bg-[#1c3664]/10 mt-6"></div>
          </motion.div>

          {/* Bottom Block: Form and Direct Contact */}
          <motion.div variants={staggerItem} className="flex flex-col gap-8 items-center lg:items-end w-full">
            
            {/* Contact Details - Fixed Alignment for Mobile */}
            <div className="flex flex-col items-center lg:items-end gap-5 w-full">
              {/* Phone - Link now wraps the whole line for better alignment */}
              <a href="tel:0544729513" className="flex items-center flex-row-reverse gap-4 group">
                <div className="bg-[#1c3664] rounded-lg p-2.5 text-white shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16"><path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                </div>
                <span className="text-2xl md:text-3xl font-black text-[#1c3664]" dir="ltr">054-472-9513</span>
              </a>

              {/* Email */}
              <a href="mailto:service@avi-mashkanta.com" className="flex items-center flex-row-reverse gap-4 group">
                <div className="bg-[#1c3664] rounded-lg p-2.5 text-white shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                </div>
                <span className="text-xl md:text-2xl font-black text-[#1c3664] break-all">service@avi-mashkanta.com</span>
              </a>
            </div>

            {/* Form - Fixed placeholder asterisk placement */}
            <form onSubmit={handleSubmit} className="w-full max-w-[360px] flex flex-col gap-4" noValidate>
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  placeholder="שם מלא *"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={`w-full bg-white border-2 rounded-xl px-5 py-4 text-right text-[#1c3664] font-bold placeholder:text-[#1c3664]/30 focus:outline-none transition-all shadow-sm ${
                    errors.name && touched.name ? "border-red-500" : "border-transparent focus:border-[#1c3664]/20"
                  }`}
                />
              </div>

              <div className="flex flex-col gap-1">
                <input
                  type="tel"
                  placeholder="מספר טלפון *"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onBlur={() => handleBlur("phone")}
                  className={`w-full bg-white border-2 rounded-xl px-5 py-4 text-right text-[#1c3664] font-bold placeholder:text-[#1c3664]/30 focus:outline-none transition-all shadow-sm ${
                    errors.phone && touched.phone ? "border-red-500" : "border-transparent focus:border-[#1c3664]/20"
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 text-2xl font-black bg-[#1c3664] text-white rounded-xl hover:bg-[#152a4d] transition-all shadow-lg active:scale-95 disabled:opacity-50"
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
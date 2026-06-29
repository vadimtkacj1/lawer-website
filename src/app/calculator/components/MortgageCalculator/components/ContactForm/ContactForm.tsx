"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeInUpFast, viewportOptions } from "@/lib/animations";
import type { CalculatorData } from "../../types";
import FormInput from "./FormInput";
import { sendGAEvent } from "@next/third-parties/google";

interface ContactFormProps {
  calculatorData?: CalculatorData;
}

export default function ContactForm({ calculatorData }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [touched, setTouched] = useState({ name: false, phone: false });

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

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/[^\d+]/g, "");
    if (cleaned.startsWith('+972')) {
      const digits = cleaned.slice(4, 13);
      const limited = '+972' + digits;
      const match = limited.match(/^(\+972)(\d{0,2})(\d{0,3})(\d{0,4})$/);
      if (match) {
        return [match[1], match[2], match[3], match[4]]
          .filter(Boolean)
          .join('-');
      }
      return limited;
    } else if (cleaned.startsWith('0')) {
      const limited = cleaned.slice(0, 10);
      const match = limited.match(/^(0\d{0,2})(\d{0,3})(\d{0,4})$/);
      if (match) {
        return [match[1], match[2], match[3]]
          .filter(Boolean)
          .join('-');
      }
      return limited;
    }
    return cleaned.slice(0, 10);
  };

  const handleBlur = (field: "name" | "phone") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]:
        field === "name"
          ? validateName(formData.name)
          : validatePhone(formData.phone),
    }));
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      'Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight',
      'Home', 'End', 'Enter'
    ];
    const allowedChars = /^[0-9+]$/;
    if (!allowedKeys.includes(e.key) && !allowedChars.test(e.key)) {
      e.preventDefault();
    }
  };

  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    const formatted = formatPhone(pastedText);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, phone: validatePhone(formatted) }));
    }
  };

  const handleChange = (field: "name" | "phone", value: string) => {
    const processedValue = field === "phone" ? formatPhone(value) : value;
    setFormData((prev) => ({ ...prev, [field]: processedValue }));
    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: field === "name" ? validateName(processedValue) : validatePhone(processedValue),
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
        body: JSON.stringify({
          ...formData,
          source: "calculator-page",
          calculatorData,
        }),
      });
      if (response.ok) {
        sendGAEvent("event", "generate_lead", { form_location: "calculator_page" });
        setIsSubmitted(true);
        setFormData({ name: "", phone: "" });
        setTouched({ name: false, phone: false });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <m.div
      className="bg-white/95 backdrop-blur-3xl rounded-[2.5rem] border-2 border-blue-dk/10 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.2)] p-5 md:p-6 flex flex-col md:order-1 h-fit"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUpFast}
      dir="rtl"
    >
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <m.div
            key="form"
            exit={{ opacity: 0 }}
          >
            <h3 className="text-lg md:text-xl font-black text-blue-dk mb-2">
              קבלו ייעוץ משכנתאות אישי
            </h3>
            <p className="text-blue-dk/70 font-bold mb-4 text-xs">
              השאירו פרטים ונחזור אליכם תוך 24 שעות עם הצעה מותאמת אישית
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <FormInput
                type="text"
                placeholder="שם מלא *"
                value={formData.name}
                error={errors.name}
                touched={touched.name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
              />

              <FormInput
                type="tel"
                inputMode="tel"
                placeholder="054-472-9513"
                value={formData.phone}
                error={errors.phone}
                touched={touched.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                onBlur={() => handleBlur("phone")}
                onKeyDown={handlePhoneKeyDown}
                onPaste={handlePhonePaste}
                dir="ltr"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 text-sm md:text-base font-black bg-orange text-white rounded-xl hover:bg-orange/90 transition-all shadow-xl active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? "שולח..." : "קבלו ייעוץ חינם"}
              </button>

              <div className="flex items-start gap-2 text-xs text-blue-dk/60 font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-orange" />
                <span>ללא התחייבות • מענה תוך 24 שעות</span>
              </div>
            </form>
          </m.div>
        ) : (
          <m.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-3xl font-black text-blue-dk mb-2">
              תודה רבה!
            </h4>
            <p className="text-blue-dk/70 font-bold">
              הפרטים התקבלו. נחזור אליכם בהקדם
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}


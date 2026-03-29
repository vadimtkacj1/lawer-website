"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import DecorativeShapes from "@/components/ui/DecorativeShapes";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import Link from "next/link";
import { PHONE_NUMBER_RAW, PHONE_NUMBER } from "@/lib/phone";

// Оптимизация для плавности анимаций на мобилках
const gpuStyle = {
  willChange: "transform, opacity",
  WebkitBackfaceVisibility: "hidden" as const,
  backfaceVisibility: "hidden" as const,
  perspective: 1000,
  transform: "translate3d(0,0,0)",
};

// Вспомогательный компонент для инпутов, чтобы не дублировать стили
const FormInput = ({
  error,
  touched,
  ...props
}: {
  error: string;
  touched: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="relative w-full">
    <input
      {...props}
      className={`w-full bg-white border-2 rounded-2xl px-4 py-3 text-right text-[#1c3664] font-semibold text-base shadow-sm outline-none transition-all placeholder:text-[#1c3664]/40 ${
        error && touched
          ? "border-red-500"
          : "border-transparent focus:border-[#1c3664]/20"
      }`}
    />
    <AnimatePresence>
      {error && touched && (
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -bottom-5 right-1 text-red-500 text-xs font-bold"
        >
          {error}
        </motion.span>
      )}
    </AnimatePresence>
  </div>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [touched, setTouched] = useState({ name: false, phone: false });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Валидация
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
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]:
        field === "name"
          ? validateName(formData.name)
          : validatePhone(formData.phone),
    }));
  };

  const handleChange = (field: "name" | "phone", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: field === "name" ? validateName(value) : validatePhone(value),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameErr = validateName(formData.name);
    const phoneErr = validatePhone(formData.phone);

    if (nameErr || phoneErr || !agreedToTerms) {
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
        setIsSubmitted(true);
        setFormData({ name: "", phone: "" });
        setTouched({ name: false, phone: false });
        setAgreedToTerms(false);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Константы стилей для иконок
  const iconContainerClass =
    "bg-[#1c3664] rounded-xl text-white shadow-md group-hover:scale-110 transition-transform w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0";
  const iconSvgClass = "w-5 h-5 sm:w-6 sm:h-6";
  const textClass =
    "text-[16px] xs:text-[18px] sm:text-xl md:text-2xl lg:text-xl font-black text-[#1c3664] leading-none";

  return (
    <section
      id="contact"
      className="relative py-12 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#e8e4df" }}
      dir="rtl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#1c3664 0.5px, transparent 0.5px), linear-gradient(90deg, #1c3664 0.5px, transparent 0.5px)`,
            backgroundSize: "30px 30px",
            opacity: 0.08,
          }}
        ></div>
      </div>

      <DecorativeShapes variant="contact" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          style={gpuStyle}
        >
          {/* Promotional Content */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col items-center lg:items-start text-center lg:text-right"
          >
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -top-4 -right-2 bg-[#1c3664] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                חדש
              </div>
              <h3 className="text-5xl sm:text-6xl md:text-[85px] font-black text-[#1c3664] mb-4 leading-[0.9] tracking-tight">
                משכנתא <br /> חכמה
              </h3>
              <p className="text-lg md:text-xl font-bold text-[#1c3664]/70 mb-8 max-w-[360px]">
                לקיחת משכנתא בחכמה – הכלי המקצועי שלנו לניתוח והגשת מסמכים בצורה
                בטוחה.
              </p>
              <Link
                href="https://app.wisecard.co.il/c/SimulatorPDF/22ea4dade30f?fbclid=IwY2xjawQ1H7NleHRuA2FlbQIxMABicmlkETFqcjltTlNNMnhnalZwbUhCc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHo91iAiUiRK8AG6wrakrYZmOCZUYdmkqndwGtAMH0F9UTAgQqqFPGpO3wox5_aem_N5nDpRDOa-fPEgVD28BzWQ"
                className="group inline-flex items-center gap-4 text-[#1c3664] font-black transition-all hover:opacity-80"
              >
                <span className="text-xl sm:text-2xl md:text-3xl border-b-4 border-transparent group-hover:border-[#1c3664] transition-all text-center">
                  הגשת מסמכים באתר Wise
                </span>
                <svg
                  className="w-8 h-8 transform transition-transform group-hover:-translate-x-2 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3.5"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Separator */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col items-center justify-center h-full"
          >
            <div className="hidden lg:block h-32 w-[1.5px] bg-[#1c3664]/10"></div>
            <span className="text-[#1c3664]/20 font-black text-6xl lg:text-8xl py-6 select-none leading-none">
              או
            </span>
            <div className="hidden lg:block h-32 w-[1.5px] bg-[#1c3664]/10"></div>
          </motion.div>

          {/* Contacts and Form */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col gap-8 items-center lg:items-end w-full overflow-hidden"
          >
            {/* Unified Contact Info */}
            <div className="flex flex-col items-center lg:items-end gap-5 w-full">
              {/* Phone Line */}
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                className="flex items-center gap-3 sm:gap-4 group"
                dir="ltr"
              >
                <div className={iconContainerClass}>
                  <svg
                    className={iconSvgClass}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </div>
                <span className={textClass}>{PHONE_NUMBER}</span>
              </a>

              {/* Email Line */}
              <a
                href="mailto:service@avi-mashkanta.com"
                className="flex items-center gap-3 sm:gap-4 group max-w-full"
                dir="ltr"
              >
                <div className={iconContainerClass}>
                  <svg
                    className={iconSvgClass}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </div>
                <span className={textClass}>service@avi-mashkanta.com</span>
              </a>
            </div>

            {/* Form Area */}
            <div className="w-full max-w-[420px] min-h-[340px] flex items-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-6"
                    noValidate
                  >
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
                      placeholder="מספר טלפון *"
                      value={formData.phone}
                      error={errors.phone}
                      touched={touched.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                    />

                    <label className="flex items-start gap-3 text-right cursor-pointer -mt-3">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-2 border-[#1c3664]/30 text-[#1c3664] focus:ring-2 focus:ring-[#1c3664]/20 cursor-pointer shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-[#1c3664]/80 font-medium">
                        הנכם מאשרים את{" "}
                        <Link href="/privacy" className="text-[#1c3664] font-bold hover:text-orange transition-colors underline">
                          מדיניות פרטיות
                        </Link>
                        {" "}ו
                        <Link href="/terms" className="text-[#1c3664] font-bold hover:text-orange transition-colors underline">
                          תנאי שימוש
                        </Link>
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={isSubmitting || !agreedToTerms}
                      className="w-full mt-2 py-3 text-lg sm:text-xl font-bold bg-[#1c3664] text-white rounded-2xl hover:bg-[#152a4d] transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "שולח..." : "שלח הודעה"}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full bg-white p-8 rounded-3xl shadow-xl border-2 border-[#1c3664]/10 text-center flex flex-col items-center gap-4"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-3xl font-black text-[#1c3664]">
                      תודה!
                    </h4>
                    <p className="text-[#1c3664]/70 font-bold">
                      הפרטים התקבלו בהצלחה.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        {/* Google Map Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-16 max-w-6xl mx-auto"
        >
          <GoogleMap />
        </motion.div>
      </div>
    </section>
  );
}
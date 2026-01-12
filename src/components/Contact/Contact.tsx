"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUpFast,
  staggerContainer,
  staggerItem,
  viewportOptions,
} from "@/lib/animations";
import DecorativeShapes from "@/components/ui/DecorativeShapes";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden" style={{ backgroundColor: "#e8e4df" }}>
      {/* Элегантный декоративный фон для юридического сайта */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1400 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Тонкий геометрический паттерн - профессиональный вид */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1c3664" strokeWidth="0.5" opacity="0.25"/>
            </pattern>
            {/* Градиент для фигур */}
            <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1c3664" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1c3664" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Элегантные геометрические фигуры - профессиональный стиль */}
          <g fill="url(#shapeGradient)" opacity="0.8">
            {/* Большие прямоугольники с закругленными углами */}
            <rect x="100" y="100" width="200" height="200" rx="15" />
            <rect x="1100" y="600" width="180" height="180" rx="15" />
            <rect x="50" y="650" width="150" height="150" rx="12" />
            <rect x="1200" y="150" width="160" height="160" rx="12" />

            {/* Круги для баланса */}
            <circle cx="300" cy="700" r="80" />
            <circle cx="1100" cy="200" r="70" />
            <circle cx="200" cy="300" r="60" />
            <circle cx="1300" cy="750" r="65" />

            {/* Прямоугольники под углом для динамики */}
            <rect x="600" y="50" width="120" height="120" rx="10" transform="rotate(15 660 110)" />
            <rect x="700" y="750" width="100" height="100" rx="10" transform="rotate(-20 750 800)" />
            <rect x="400" y="500" width="140" height="140" rx="12" transform="rotate(10 470 570)" />
          </g>

          {/* Тонкие линии для структуры */}
          <g stroke="#1c3664" strokeWidth="1" opacity="0.2">
            {/* Вертикальные линии */}
            <line x1="150" y1="0" x2="150" y2="900" />
            <line x1="1250" y1="0" x2="1250" y2="900" />
            <line x1="250" y1="0" x2="250" y2="900" />
            <line x1="1150" y1="0" x2="1150" y2="900" />

            {/* Горизонтальные линии */}
            <line x1="0" y1="200" x2="1400" y2="200" />
            <line x1="0" y1="700" x2="1400" y2="700" />
            <line x1="0" y1="100" x2="1400" y2="100" />
            <line x1="0" y1="800" x2="1400" y2="800" />

            {/* Диагональные акценты */}
            <line x1="0" y1="0" x2="300" y2="300" />
            <line x1="1100" y1="0" x2="1400" y2="300" />
            <line x1="0" y1="600" x2="300" y2="900" />
            <line x1="1100" y1="600" x2="1400" y2="900" />
          </g>
        </svg>
      </div>
      
      <DecorativeShapes variant="contact" />
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {/* Contact Details */}
            <motion.div className="text-center" variants={staggerItem}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-9xl font-black text-blue-dk mb-2 sm:mb-3 md:mb-4 3xl:mb-5 4xl:mb-6">
                דברו איתי
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-bold text-blue-dk/80 mb-3 sm:mb-4 md:mb-6 3xl:mb-8 4xl:mb-10 max-w-md 3xl:max-w-2xl 4xl:max-w-3xl 5xl:max-w-4xl mx-auto px-2 sm:px-4 3xl:px-6 4xl:px-8">
                השאירו פרטים ונחזור אליכם בהקדם לשיחת ייעוץ ראשונית ללא
                התחייבות.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 3xl:gap-8 4xl:gap-10 5xl:gap-12">
                {/* Phone */}
                <div className="flex items-center gap-2 sm:gap-3 3xl:gap-4 4xl:gap-5">
                  <div className="bg-blue-dk rounded-lg p-2 sm:p-2.5 md:p-3 3xl:p-4 4xl:p-5 5xl:p-6">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-10 5xl:h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg md:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-black text-blue-dk">
                    050-000-0000
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 sm:gap-3 3xl:gap-4 4xl:gap-5">
                  <div className="bg-blue-dk rounded-lg p-2 sm:p-2.5 md:p-3 3xl:p-4 4xl:p-5 5xl:p-6">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-10 5xl:h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-black text-blue-dk">
                    assistant@avi-mashkanta.com
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="w-full max-w-sm sm:max-w-md"
              noValidate
              variants={staggerItem}
            >
              <div className="flex flex-col gap-2 sm:gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="שם מלא"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-blue-dk/15 rounded-lg
                             px-3 sm:px-4 py-2.5 sm:py-3 text-right text-sm sm:text-base text-blue-dk placeholder:text-blue-dk/40
                             focus:outline-none focus:border-blue-dk/30 transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="מספר טלפון"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-blue-dk/15 rounded-lg
                             px-3 sm:px-4 py-2.5 sm:py-3 text-right text-sm sm:text-base text-blue-dk placeholder:text-blue-dk/40
                             focus:outline-none focus:border-blue-dk/30 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="כתובת אימייל (לא חובה)"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-blue-dk/15 rounded-lg
                             px-3 sm:px-4 py-2.5 sm:py-3 text-right text-sm sm:text-base text-blue-dk placeholder:text-blue-dk/40
                             focus:outline-none focus:border-blue-dk/30 transition-colors"
                />
                <button
                  type="submit"
                  className="btn-primary w-full py-2.5 sm:py-3 text-base sm:text-lg md:text-xl font-black"
                >
                  שלח הודעה
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

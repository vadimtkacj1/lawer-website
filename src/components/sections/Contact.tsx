"use client";

import { useState } from "react";

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
    <section id="contact" className="py-20" style={{ backgroundColor: "#f9f7f4" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            {/* Contact Details */}
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-black text-blue-dk mb-4">
                דברו איתי
              </h2>
              <p className="text-xl md:text-2xl font-bold text-blue-dk/80 mb-6 max-w-md mx-auto">
                השאירו פרטים ונחזור אליכם בהקדם לשיחת ייעוץ ראשונית ללא
                התחייבות.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="bg-blue-dk rounded-lg p-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
                  </div>
                  <span className="text-xl font-black text-blue-dk">
                    050-000-0000
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="bg-blue-dk rounded-lg p-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                  </div>
                  <span className="text-xl font-black text-blue-dk">
                    office@avi-home.co.il
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md"
              noValidate
            >
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="שם מלא"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-blue-dk/15 rounded-lg
                             px-4 py-3 text-right text-blue-dk placeholder:text-blue-dk/40
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
                             px-4 py-3 text-right text-blue-dk placeholder:text-blue-dk/40
                             focus:outline-none focus:border-blue-dk/30 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="כתובת אימייל (לא חובה)"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-blue-dk/15 rounded-lg
                             px-4 py-3 text-right text-blue-dk placeholder:text-blue-dk/40
                             focus:outline-none focus:border-blue-dk/30 transition-colors"
                />
                <button
                  type="submit"
                  className="btn-primary w-full py-3 text-xl font-black"
                >
                  שלח הודעה
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

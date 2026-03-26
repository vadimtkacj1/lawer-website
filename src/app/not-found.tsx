import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "404 - הדף לא נמצא | אבי - הבית למשכנתאות",
  description: "הדף שחיפשת לא נמצא. חזרה לדף הבית או לעמוד השירותים שלנו.",
  robots: {
    index: false,
    follow: true,
  },
};

const HomeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const ServicesIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-black leading-none text-blue-dk opacity-20 select-none">
              404
            </h1>
          </div>

          {/* Main Message */}
          <div className="mb-12 -mt-16 md:-mt-24 lg:-mt-32">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-dk mb-4">
              אופס! הדף לא נמצא
            </h2>
            <p className="text-lg md:text-xl text-blue-muted max-w-lg mx-auto leading-relaxed">
              נראה שהדף שחיפשת לא קיים או שהוסר. אבל אל דאגה - אנחנו כאן כדי לעזור
              לך למצוא את מה שאתה מחפש!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-orange hover:bg-orange-hover text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <HomeIcon />
              <span>חזרה לדף הבית</span>
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-dk hover:bg-opacity-90 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <ServicesIcon />
              <span>כל השירותים</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-blue-dk/10 pt-8">
            <p className="text-sm text-blue-muted mb-4 font-semibold">
              דפים פופולריים:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/services/mortgage-for-purchase"
                className="text-sm text-blue-dk hover:text-orange transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
              >
                משכנתא לרכישה
              </Link>
              <span className="text-blue-muted">•</span>
              <Link
                href="/services/loan-consolidation"
                className="text-sm text-blue-dk hover:text-orange transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
              >
                מחזור משכנתא
              </Link>
              <span className="text-blue-muted">•</span>
              <Link
                href="/calculator"
                className="text-sm text-blue-dk hover:text-orange transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
              >
                מחשבון משכנתא
              </Link>
              <span className="text-blue-muted">•</span>
              <Link
                href="/about"
                className="text-sm text-blue-dk hover:text-orange transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
              >
                אודות
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 bg-white-card rounded-xl shadow-md border border-blue-dk/5">
            <p className="text-blue-dk font-semibold mb-3">
              צריכים עזרה? אנחנו כאן בשבילכם
            </p>
            <a
              href="tel:+972-50-000-0000"
              className="inline-flex items-center gap-2 text-orange hover:text-orange-hover font-bold transition-colors duration-200"
            >
              <PhoneIcon />
              <span className="text-lg">050-000-0000</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

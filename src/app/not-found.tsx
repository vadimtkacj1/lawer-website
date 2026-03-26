import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Home, FileText, Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_NUMBER_RAW } from "@/lib/phone";

export const metadata: Metadata = {
  title: "404 - הדף לא נמצא | אבי - הבית למשכנתאות",
  description: "הדף שחיפשת לא נמצא. חזרה לדף הבית או לעמוד השירותים שלנו.",
  robots: {
    index: false,
    follow: true,
  },
};

const NotFoundIllustration = () => (
  <div className="relative w-full max-w-md mx-auto mb-8">
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <circle cx="200" cy="150" r="120" fill="#f26722" opacity="0.1" />
      <circle cx="200" cy="150" r="90" fill="#1c3664" opacity="0.05" />

      <g transform="translate(150, 80)">
        <rect x="10" y="60" width="80" height="60" fill="#1c3664" rx="4" />
        <path d="M50 30 L5 65 L95 65 Z" fill="#f26722" />
        <rect x="35" y="85" width="30" height="35" fill="#f9f7f4" rx="2" />
        <rect x="20" y="70" width="15" height="15" fill="#f9f7f4" rx="1" />
        <rect x="65" y="70" width="15" height="15" fill="#f9f7f4" rx="1" />
        <circle cx="60" cy="105" r="2" fill="#1c3664" />
      </g>

      <g transform="translate(240, 140)">
        <circle cx="0" cy="0" r="25" stroke="#f26722" strokeWidth="4" fill="none" />
        <line x1="18" y1="18" x2="35" y2="35" stroke="#f26722" strokeWidth="4" strokeLinecap="round" />
        <text x="-8" y="8" fontSize="24" fill="#1c3664" fontWeight="bold">?</text>
      </g>

      <g opacity="0.3">
        <rect x="50" y="40" width="30" height="40" fill="#1c3664" rx="2" transform="rotate(-15 65 60)" />
        <line x1="58" y1="50" x2="72" y2="50" stroke="#f9f7f4" strokeWidth="2" />
        <line x1="58" y1="58" x2="72" y2="58" stroke="#f9f7f4" strokeWidth="2" />
        <line x1="58" y1="66" x2="72" y2="66" stroke="#f9f7f4" strokeWidth="2" />
      </g>

      <g opacity="0.3">
        <rect x="300" y="200" width="30" height="40" fill="#f26722" rx="2" transform="rotate(10 315 220)" />
        <line x1="308" y1="210" x2="322" y2="210" stroke="#f9f7f4" strokeWidth="2" />
        <line x1="308" y1="218" x2="322" y2="218" stroke="#f9f7f4" strokeWidth="2" />
        <line x1="308" y1="226" x2="322" y2="226" stroke="#f9f7f4" strokeWidth="2" />
      </g>
    </svg>
  </div>
);

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          <NotFoundIllustration />

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-dk mb-4">
              אופס! הדף לא נמצא
            </h1>
            <p className="text-lg md:text-xl text-blue-muted max-w-lg mx-auto leading-relaxed">
              נראה שהדף שחיפשת לא קיים או שהוסר. אבל אל דאגה - אנחנו כאן כדי לעזור
              לך למצוא את מה שאתה מחפש!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-orange hover:bg-orange-hover text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <Home className="w-5 h-5" />
              <span>חזרה לדף הבית</span>
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-dk hover:bg-opacity-90 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <FileText className="w-5 h-5" />
              <span>כל השירותים</span>
            </Link>
          </div>

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

          <div className="mt-12 p-6 bg-white-card rounded-xl shadow-md border border-blue-dk/5">
            <p className="text-blue-dk font-semibold mb-3">
              צריכים עזרה? אנחנו כאן בשבילכם
            </p>
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="inline-flex items-center gap-2 text-orange hover:text-orange-hover font-bold transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">{PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

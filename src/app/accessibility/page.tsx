import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "הצהרת נגישות - אבי - הבית למשכנתאות",
  description: "הצהרת נגישות של אתר אבי - הבית למשכנתאות. אנו מחויבים להנגשת האתר לכלל המשתמשים.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AccessibilityPage() {
  return (
    <>
      <Header alwaysWithBackground />
      <main className="min-h-screen bg-white py-16 px-4" dir="rtl">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-black text-blue-dk mb-8">
            הצהרת נגישות
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                מחויבות לנגישות
              </h2>
              <p className="leading-relaxed">
                אבי - הבית למשכנתאות מחויב להנגיש את שירותיו לכלל האוכלוסייה, כולל
                אנשים עם מוגבלויות. אנו עושים מאמצים רבים להבטיח שהאתר שלנו יהיה נגיש
                ושמיש לכל המשתמשים, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות
                (התאמות נגישות לשירות), התשע"ג-2013.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                רמת הנגישות באתר
              </h2>
              <p className="leading-relaxed">
                האתר עומד ברמת AA של תקן WCAG 2.1. התאמות הנגישות באתר כוללות:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>ניווט באמצעות מקלדת</li>
                <li>תמיכה בקוראי מסך</li>
                <li>ניגודיות צבעים מתאימה</li>
                <li>טקסטים חלופיים לתמונות</li>
                <li>מבנה תוכן היררכי וברור</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                פניות והצעות לשיפור
              </h2>
              <p className="leading-relaxed">
                אם נתקלתם בבעיית נגישות באתר או שיש לכם הצעות לשיפור, אנא צרו איתנו
                קשר:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mt-4">
                <p className="font-semibold">רכז נגישות: אבי</p>
                <p>כתובת: חנקין 83, חולון</p>
                <p>
                  טלפון:{" "}
                  <a
                    href="tel:0544729513"
                    className="text-blue-dk hover:underline font-semibold"
                  >
                    054-472-9513
                  </a>
                </p>
                <p>נעשה כל שביכולתנו לטפל בפנייתכם בהקדם האפשרי.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                תאריך עדכון אחרון
              </h2>
              <p className="leading-relaxed">
                הצהרת נגישות זו עודכנה לאחרונה בתאריך: מרץ 2026
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

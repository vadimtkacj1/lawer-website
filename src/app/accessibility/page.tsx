import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "הצהרת נגישות - אבי הבית למשכנתאות",
  description: "הצהרת נגישות מלאה של אתר אבי - הבית למשכנתאות. האתר עומד בדרישות תקן ת״י 5568 ו-WCAG 2.1 ברמת AA.",
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
            הצהרת נגישות - אבי הבית למשכנתאות
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <p className="leading-relaxed text-lg">
                ב&quot;אבי - הבית למשכנתאות&quot;, אנו רואים חשיבות עליונה במתן שירות שוויוני, מכבד ונגיש לכלל הלקוחות ובכלל זה לאנשים עם מוגבלויות. בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות תשנ&quot;ח-1998 ולתקנות שהותקנו מכוחו, מושקעים מאמצים ומשאבים רבים בביצוע התאמות נגישות באתר האינטרנט במטרה לאפשר לכל גולש ולקוח להשתמש בשירותים המוצעים באופן עצמאי, נוח ושוויוני.
              </p>
              <p className="leading-relaxed mt-4">
                אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג 2013.
              </p>
              <p className="leading-relaxed mt-2">
                התאמות הנגישות בוצעו עפ&quot;י המלצות התקן הישראלי (ת&quot;י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG 2.1 הבינלאומי.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                תפריט הנגישות באתר
              </h2>
              <p className="leading-relaxed">
                באתר מוטמע סרגל נגישות מתקדם (מבית Sienna) המאפשר לגולשים להתאים את תצוגת האתר לצרכיהם האישיים. התפריט נפתח בלחיצה על אייקון הנגישות ומאפשר את הפעולות הבאות:
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-dk mb-4">
                    התאמות תוכן וטקסט:
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mr-6">
                    <li className="leading-relaxed">
                      <strong>שינוי גודל פונט:</strong> אפשרות להגדלה והקטנה של הטקסט באחוזים (עד 200%) מבלי לפגוע במבנה הדף.
                    </li>
                    <li className="leading-relaxed">
                      <strong>פונט לדיסלקטים:</strong> שינוי הגופן לגופן קריא וברור יותר המותאם לאנשים עם דיסלקציה.
                    </li>
                    <li className="leading-relaxed">
                      <strong>הדגשת רכיבים:</strong> הדגשת כותרות והדגשת קישורים לשיפור ההתמצאות.
                    </li>
                    <li className="leading-relaxed">
                      <strong>ריווח:</strong> אפשרות לשינוי גובה שורה (Line Height) ומרווח בין אותיות (Letter Spacing) להקלה על הקריאה.
                    </li>
                    <li className="leading-relaxed">
                      <strong>משקל הפונט:</strong> אפשרות לחיזוק והדגשת הטקסט.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-blue-dk mb-4">
                    התאמות צבע ותצוגה:
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mr-6">
                    <li className="leading-relaxed">
                      <strong>ניגודיות (קונטרסט):</strong> אפשרות לשינוי התצוגה ל&quot;ניגודיות כהה&quot;, &quot;ניגודיות בהירה&quot; או &quot;ניגודיות גבוהה&quot; עבור לקויי ראייה.
                    </li>
                    <li className="leading-relaxed">
                      <strong>התאמות צבע:</strong> אפשרות לשינוי רוויית הצבע (גבוהה/נמוכה) או מעבר לתצוגת &quot;מונוכרום&quot; (שחור-לבן).
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                פעולות נוספות לנגישות האתר
              </h2>
              <p className="leading-relaxed mb-4">
                מעבר לתפריט הנגישות, האתר מותאם ומאפשר:
              </p>
              <ul className="list-disc list-inside space-y-3 mr-6">
                <li className="leading-relaxed">ניווט מלא באמצעות מקלדת (Tab, Enter, חיצים).</li>
                <li className="leading-relaxed">תמיכה בשימוש בקוראי מסך נפוצים.</li>
                <li className="leading-relaxed">האתר רספונסיבי ומותאם לגלישה במכשירים ניידים (סמארטפונים) וטאבלטים.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                דרכי פנייה לבקשות והצעות לשיפור בנושא נגישות
              </h2>
              <p className="leading-relaxed mb-4">
                אנו עושים את מירב המאמצים לשמור ולתחזק את האתר והשירות ברמה הטובה ביותר. יחד עם זאת, ייתכן ויתגלו חלקים באתר או תהליכים שטרם הונגשו בצורה מושלמת או שיש בהם תקלות טכניות. אם נתקלתם בבעיה, בקושי בגלישה או שיש לכם הצעה לשיפור, נשמח מאוד לשמוע מכם ולטפל בפנייה בהקדם.
              </p>

              <div className="bg-blue-50 p-8 rounded-xl mt-6 border-2 border-blue-100">
                <h3 className="text-xl font-bold text-blue-dk mb-4">
                  פרטי רכז הנגישות בארגון:
                </h3>
                <div className="space-y-3">
                  <p className="text-lg">
                    <strong>שם רכז הנגישות:</strong> אבי בוקעי
                  </p>
                  <p className="text-lg">
                    <strong>טלפון:</strong>{" "}
                    <a
                      href="tel:0544729513"
                      className="text-blue-dk hover:underline font-semibold"
                    >
                      054-472-9513
                    </a>
                  </p>
                  <p className="text-lg">
                    <strong>דואר אלקטרוני:</strong>{" "}
                    <a
                      href="mailto:avi.mashkanta2022@gmail.com"
                      className="text-blue-dk hover:underline font-semibold"
                    >
                      avi.mashkanta2022@gmail.com
                    </a>
                  </p>
                  <p className="mt-4 leading-relaxed">
                    אנו זמינים לכל פנייה ונשתדל לתת מענה מתאים ומהיר ככל האפשר.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                תאריך עדכון
              </h2>
              <p className="leading-relaxed text-lg">
                ההצהרה תקפה נכון לתאריך <strong>27.01.2026</strong>
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

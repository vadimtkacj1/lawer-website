import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "מדיניות פרטיות - אבי - הבית למשכנתאות",
  description: "מדיניות הפרטיות של אבי - הבית למשכנתאות. מידע על איסוף, שמירה ושימוש במידע אישי.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header alwaysWithBackground />
      <main className="min-h-screen bg-white py-16 px-4" dir="rtl">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-black text-blue-dk mb-8">
            מדיניות פרטיות
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                הקדמה
              </h2>
              <p className="leading-relaxed">
                אבי - הבית למשכנתאות מכבד את פרטיות המשתמשים והלקוחות שלו. מדיניות
                פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                איסוף מידע
              </h2>
              <p className="leading-relaxed mb-4">
                אנו עשויים לאסוף את סוגי המידע הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>שם מלא ופרטי יצירת קשר (טלפון, אימייל)</li>
                <li>מידע פיננסי רלוונטי לצורך מתן שירות</li>
                <li>מידע טכני על השימוש באתר (cookies, IP address)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                שימוש במידע
              </h2>
              <p className="leading-relaxed mb-4">
                אנו משתמשים במידע שנאסף למטרות הבאות:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>מתן שירותי ייעוץ משכנתאות</li>
                <li>שיפור השירות והאתר שלנו</li>
                <li>יצירת קשר בנוגע לשירותים שביקשת</li>
                <li>עמידה בדרישות חוקיות ורגולטוריות</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                שמירה על המידע
              </h2>
              <p className="leading-relaxed">
                אנו נוקטים באמצעי אבטחה מתאימים להגנה על המידע האישי שלך מפני גישה לא
                מורשית, שינוי, חשיפה או השמדה. המידע מאוחסן על שרתים מאובטחים ונשמר
                לתקופה הנדרשת על פי חוק.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                שיתוף מידע עם צדדים שלישיים
              </h2>
              <p className="leading-relaxed">
                אנו לא נמכור, נעביר או נשתף את המידע האישי שלך עם צדדים שלישיים ללא
                הסכמתך, למעט במקרים הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>כאשר נדרש על פי חוק</li>
                <li>לצורך מתן השירות (בנקים, מוסדות פיננסיים)</li>
                <li>עם ספקי שירות שלנו הכפופים לחובת סודיות</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                זכויותיך
              </h2>
              <p className="leading-relaxed mb-4">
                בהתאם לחוק הגנת הפרטיות, זכאי:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>לעיין במידע שנאסף עליך</li>
                <li>לבקש תיקון מידע שגוי</li>
                <li>לבקש מחיקת המידע</li>
                <li>להתנגד לשימוש במידע למטרות שיווקיות</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                עדכונים למדיניות
              </h2>
              <p className="leading-relaxed">
                אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. עדכונים יפורסמו בדף זה.
                מומלץ לבדוק דף זה באופן תקופתי.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                יצירת קשר
              </h2>
              <p className="leading-relaxed">
                לשאלות או בקשות בנוגע למדיניות הפרטיות, ניתן ליצור קשר:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mt-4">
                <p className="font-semibold">אבי - הבית למשכנתאות</p>
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
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                תאריך עדכון אחרון
              </h2>
              <p className="leading-relaxed">
                מדיניות זו עודכנה לאחרונה בתאריך: מרץ 2026
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

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "תנאי שימוש - אבי - הבית למשכנתאות",
  description: "תנאי השימוש באתר אבי - הבית למשכנתאות. כללים והתניות לשימוש בשירותים ובאתר.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return (
    <>
      <Header alwaysWithBackground />
      <main className="min-h-screen bg-white py-16 px-4" dir="rtl">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-black text-blue-dk mb-8">
            תנאי שימוש
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                כללי
              </h2>
              <p className="leading-relaxed">
                תנאי שימוש אלו מסדירים את השימוש באתר ובשירותים של אבי - הבית
                למשכנתאות. השימוש באתר מהווה הסכמה מלאה לתנאים אלה. אם אינך מסכים
                לתנאים, אנא הימנע משימוש באתר.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                השירותים המוצעים
              </h2>
              <p className="leading-relaxed mb-4">
                האתר מספק שירותי מידע וייעוץ בתחום המשכנתאות, לרבות:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>ייעוץ למשכנתאות לרכישת דירה</li>
                <li>מיחזור ואיחוד הלוואות</li>
                <li>פתרונות למסורבי בנקים</li>
                <li>משכנתא הפוכה</li>
                <li>שירותים נוספים כמפורט באתר</li>
              </ul>
              <p className="leading-relaxed mt-4">
                השירותים ניתנים לצורכי מידע בלבד ואינם מהווים תחליף לייעוץ מקצועי או
                חוות דעת משפטית.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                שימוש נאות באתר
              </h2>
              <p className="leading-relaxed mb-4">
                אתה מתחייב:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>להשתמש באתר למטרות חוקיות בלבד</li>
                <li>לא להעביר מידע כוזב או מטעה</li>
                <li>לא לפגוע בתפעול התקין של האתר</li>
                <li>לא להשתמש באתר לצורכי פרסום או שיווק ללא אישור</li>
                <li>לשמור על סודיות פרטי הגישה שלך (במידה ויש)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                קניין רוחני
              </h2>
              <p className="leading-relaxed">
                כל תוכן, עיצוב, טקסט, גרפיקה, לוגו וחומרים אחרים באתר הם קניינו
                הבלעדי של אבי - הבית למשכנתאות ומוגנים בזכויות יוצרים. אין להעתיק,
                לשכפל, להפיץ או לעשות שימוש מסחרי בתוכן ללא אישור מפורש בכתב.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                אחריות ושיפוי
              </h2>
              <p className="leading-relaxed">
                האתר והמידע בו מסופקים "כמות שהם" ללא אחריות מכל סוג. אנו לא נישא
                באחריות לנזקים ישירים או עקיפים הנובעים משימוש באתר או מהסתמכות על
                המידע בו. אנו עושים מאמצים לוודא שהמידע באתר מדויק ועדכני, אך איננו
                ערבים לכך.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                קישורים לאתרי צד שלישי
              </h2>
              <p className="leading-relaxed">
                האתר עשוי לכלול קישורים לאתרים חיצוניים. אנו לא אחראים לתוכן, מדיניות
                הפרטיות או נוהלים של אתרים אלה. השימוש בהם הוא באחריותך הבלעדית.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                שינויים בתנאי השימוש
              </h2>
              <p className="leading-relaxed">
                אנו שומרים לעצמנו את הזכות לעדכן או לשנות תנאי שימוש אלה בכל עת ללא
                הודעה מוקדמת. השימוש המתמשך באתר לאחר ביצוע שינויים מהווה הסכמה
                לתנאים המעודכנים.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                הפסקת שירות
              </h2>
              <p className="leading-relaxed">
                אנו שומרים לעצמנו את הזכות להפסיק, להשעות או להגביל את הגישה לאתר או
                לחלק ממנו בכל עת, ללא הודעה מוקדמת ומכל סיבה שהיא.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                סמכות שיפוט
              </h2>
              <p className="leading-relaxed">
                תנאי שימוש אלה יפורשו בהתאם לדיני מדינת ישראל. סמכות השיפוט הבלעדית
                בכל סכסוך תהיה לבתי המשפט המוסמכים במחוז תל אביב.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-dk mb-4">
                יצירת קשר
              </h2>
              <p className="leading-relaxed">
                לשאלות או בירורים בנוגע לתנאי השימוש, ניתן ליצור קשר:
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
                תנאי שימוש אלה עודכנו לאחרונה בתאריך: מרץ 2026
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

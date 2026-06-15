import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "מדיניות פרטיות - אבי הבית למשכנתאות",
  description: "מדיניות הפרטיות המלאה של אבי - הבית למשכנתאות. מידע מפורט על איסוף, שמירה, שימוש והגנה על המידע האישי שלכם.",
  alternates: {
    canonical: "https://avi-mashkanta.com/privacy",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/privacy",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header alwaysWithBackground />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-white py-16 px-4" dir="rtl">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-black text-blue-dk mb-8">
            מדיניות פרטיות - אבי הבית למשכנתאות
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                1. מבוא ובעלי השליטה במידע
              </h2>
              <p className="leading-relaxed">
                מסמך זה מפרט את המדיניות של &quot;אבי הבית למשכנתאות&quot; (להלן: &quot;החברה&quot; או &quot;האתר&quot;) בכל הנוגע לשמירה על הפרטיות ועיבוד המידע של המשתמשים בכתובת:{" "}
                <a
                  href="https://avi-mashkanta.com"
                  className="text-blue-dk hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://avi-mashkanta.com
                </a>
              </p>
              <p className="leading-relaxed mt-4">
                בכל שאלה או בקשה הנוגעת לפרטיותכם, ניתן לפנות אלינו באמצעות דוא&quot;ל:{" "}
                <a
                  href="mailto:avi.mashkanta2022@gmail.com"
                  className="text-blue-dk hover:underline font-semibold"
                >
                  avi.mashkanta2022@gmail.com
                </a>{" "}
                או בטלפון:{" "}
                <a
                  href="tel:0544729513"
                  className="text-blue-dk hover:underline font-semibold"
                >
                  054-472-9513
                </a>
              </p>
              <p className="leading-relaxed mt-4">
                מדיניות זו חלה על כלל השירותים הדיגיטליים שאנו מציעים, לרבות טפסי יצירת קשר, מחשבונים, הרשמה לדיוור וגלישה באתר.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                2. סוגי המידע הנאסף באתר
              </h2>
              <p className="leading-relaxed mb-6">
                אנו אוספים ומעבדים מידע משני סוגים עיקריים:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-dk mb-4">
                    א. מידע שהמשתמש מוסר באופן יזום:
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mr-6">
                    <li className="leading-relaxed">
                      <strong>פרטי הזדהות:</strong> שם מלא, מספר טלפון, וכתובת דואר אלקטרוני.
                    </li>
                    <li className="leading-relaxed">
                      <strong>נתונים לצורך בדיקת היתכנות פיננסית:</strong> על מנת להעניק שירותי ייעוץ משכנתאות או בדיקת זכאות להלוואה, ייתכן שתתבקשו למסור פרטים אודות מצב תעסוקתי, גובה הכנסה חודשית, מטרת המימון (למשל: רכישת דירה/שיפוץ), והעדפות תקשורת.
                    </li>
                    <li className="leading-relaxed">
                      <strong>מסמכים וקבצים:</strong> במידה ותבחרו להעלות לאתר קבצים (כגון: תלושי שכר, דפי חשבון בנק, אישורי יתרות), אלו יישמרו במערכותינו לצורך הטיפול בבקשתכם.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-blue-dk mb-4">
                    ב. מידע שנאסף באופן אוטומטי (פסיבי):
                  </h3>
                  <ul className="list-disc list-inside space-y-3 mr-6">
                    <li className="leading-relaxed">
                      <strong>נתונים טכניים:</strong> בעת הגלישה נאספים נתונים כגון כתובת ה-IP שלכם, סוג הדפדפן, זמני כניסה ויציאה, ודפים בהם ביקרתם.
                    </li>
                    <li className="leading-relaxed">
                      <strong>כלי ניטור:</strong> אנו עושים שימוש בכלי אנליטיקה (דוגמת Google Analytics) ובפיקסלים של רשתות חברתיות כדי לנתח את התנהגות הגולשים ולשפר את חווית השימוש.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                3. מטרות השימוש במידע
              </h2>
              <p className="leading-relaxed mb-4">
                השימוש במידע שנאסף נעשה למטרות הבאות בלבד:
              </p>
              <ul className="list-disc list-inside space-y-3 mr-6">
                <li className="leading-relaxed">
                  <strong>מתן השירות המבוקש:</strong> בדיקת התאמה למשכנתא, יצירת קשר ראשוני ותיאום פגישת ייעוץ.
                </li>
                <li className="leading-relaxed">
                  <strong>ציות להוראות החוק:</strong> עמידה בדרישות רגולטוריות, מניעת הונאות, וניהול תיעוד כנדרש על פי דין.
                </li>
                <li className="leading-relaxed">
                  <strong>תפעול ואבטחה:</strong> שמירה על תקינות האתר, אבטחת המידע של המשתמשים ושיפור ביצועי המערכת.
                </li>
                <li className="leading-relaxed">
                  <strong>שיווק ודיוור:</strong> בכפוף לקבלת הסכמתכם, נשלח עדכונים מקצועיים, ניוזלטרים והצעות שיווקיות. ניתן לבטל הסכמה זו בכל רגע נתון.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                4. מסירה ושיתוף מידע עם צדדים שלישיים
              </h2>
              <p className="leading-relaxed mb-4">
                אנו מתחייבים לא למכור את המידע האישי שלכם. העברת מידע לצד ג&apos; תעשה רק במקרים הבאים:
              </p>
              <ul className="list-disc list-inside space-y-3 mr-6">
                <li className="leading-relaxed">
                  <strong>ספקי תשתיות:</strong> שירותי אחסון אתרים, מערכות CRM לניהול לקוחות, ושירותי אבטחת מידע.
                </li>
                <li className="leading-relaxed">
                  <strong>גופים פיננסיים:</strong> רק במידה וביקשתם זאת, נעביר את הפרטים הרלוונטיים לגורמים מממנים (בנקים/חברות ביטוח) לצורך קבלת הצעות למשכנתא או הלוואה.
                </li>
                <li className="leading-relaxed">
                  <strong>דרישה חוקית:</strong> במידה ונידרש לכך על פי צו שיפוטי או הוראת רשות מוסמכת.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                5. שמירת המידע ומחיקתו
              </h2>
              <p className="leading-relaxed mb-4">
                אנו שומרים את המידע רק למשך הזמן הנדרש להשגת המטרות שלשמן הוא נאסף, או כפי שנדרש בחוק:
              </p>
              <ul className="list-disc list-inside space-y-3 mr-6">
                <li className="leading-relaxed">
                  <strong>פניות כלליות:</strong> נשמרות לתקופה של עד 3 שנים מסיום הטיפול.
                </li>
                <li className="leading-relaxed">
                  <strong>מסמכי זכאות ועסקאות:</strong> עשויים להישמר עד 7 שנים (תקופת ההתיישנות) לצרכי הגנה משפטית ותיעוד עסקי.
                </li>
                <li className="leading-relaxed">
                  <strong>לוגים טכניים:</strong> נמחקים באופן סדיר (לרוב עד 12 חודשים).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                6. זכויות המשתמש
              </h2>
              <p className="leading-relaxed mb-4">
                על פי דין, עומדות לרשותכם הזכויות הבאות ביחס למידע האישי שלכם:
              </p>
              <ul className="list-disc list-inside space-y-3 mr-6">
                <li className="leading-relaxed">הזכות לעיין במידע השמור אצלנו.</li>
                <li className="leading-relaxed">הזכות לבקש תיקון של מידע שגוי או לא מעודכן.</li>
                <li className="leading-relaxed">הזכות לבקש את מחיקת המידע (&quot;הזכות להישכח&quot;), במקרים בהם אין חובה חוקית לשמרו.</li>
                <li className="leading-relaxed">הזכות להסיר את שמכם מרשימות תפוצה ושיווק בכל עת.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                למימוש זכויות אלו, יש לשלוח פנייה לכתובת המייל המופיעה בראש העמוד.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                7. אבטחת מידע
              </h2>
              <p className="leading-relaxed">
                הנהלת האתר מיישמת נהלי אבטחה מחמירים ואמצעים טכנולוגיים (כגון פרוטוקול הצפנה SSL) כדי להגן על המידע מפני גישה בלתי מורשית. עם זאת, חשוב להבין כי בסביבת האינטרנט לא ניתן להבטיח הגנה הרמטית של 100%, והשימוש באתר נעשה תוך מודעות לסיכונים אלו.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                8. שימוש ב&quot;עוגיות&quot; (Cookies)
              </h2>
              <p className="leading-relaxed">
                האתר עושה שימוש בקבצי &quot;עוגיות&quot; ותגיות מעקב כדי לאפשר תפעול תקין, איסוף נתונים סטטיסטיים והתאמת פרסומות. הגדרות הדפדפן שלכם מאפשרות לכם לחסום או למחוק קבצים אלו בכל עת, אך ייתכן כי הדבר יפגע בחווית הגלישה באתר.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                9. קטינים
              </h2>
              <p className="leading-relaxed">
                השירותים באתר מיועדים לבגירים מעל גיל 18 בלבד. איננו אוספים ביודעין מידע מקטינים. במידה ויתגלה כי נאסף מידע שכזה, הוא יימחק לאלתר ממערכותינו.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                10. שינויים במדיניות
              </h2>
              <p className="leading-relaxed">
                אנו עשויים לעדכן מסמך זה מעת לעת. תאריך העדכון האחרון יופיע בראש העמוד. שינויים מהותיים ילוו בהודעה מתאימה באתר.
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

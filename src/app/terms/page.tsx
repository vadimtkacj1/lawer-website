import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "תנאי שימוש - אבי הבית למשכנתאות",
  description: "תנאי השימוש המלאים באתר אבי - הבית למשכנתאות. כללים, זכויות, התחייבויות והתניות מפורטות לשימוש בשירותים ובאתר.",
  alternates: {
    canonical: "https://avi-mashkanta.com/terms",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/terms",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header alwaysWithBackground />
      <main className="min-h-screen bg-white py-16 px-4" dir="rtl">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-black text-blue-dk mb-8">
            תנאי שימוש - אבי הבית למשכנתאות
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                1. כללי
              </h2>
              <p className="leading-relaxed mb-4">
                אנו מברכים אתכם על כניסתכם לאתר &quot;אבי הבית למשכנתאות&quot; בכתובת:{" "}
                <a
                  href="https://avi-mashkanta.com"
                  className="text-blue-dk hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://avi-mashkanta.com
                </a>{" "}
                (להלן: &quot;האתר&quot;).
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">1.1</h3>
                  <p className="leading-relaxed">
                    למען הסר ספק, מובהר בזאת כי הנהלת האתר איננה גוף מממן ואינה מעניקה הלוואות במישרין. אי לכך, ההתקשרות החוזית של המשתמשים באתר מתבצעת באופן בלעדי מול נותני השירותים. בשום מקרה אין לראות בתכנים או במידע המופיעים באתר משום המלצה או חוות דעת מצד הנהלת האתר בנוגע לטיב המוצר, השירות או כדאיות רכישתם.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">1.2</h3>
                  <p className="leading-relaxed">
                    תנאי השימוש המפורטים להלן חלים על כל שימוש באתר ובמידע הכלול בו, ומהווים הסכם מחייב לכל דבר ועניין בין הגולשים לבין הנהלת האתר. יודגש כי במידה ואינכם מסכימים לתנאי מתנאי השימוש הללו, הנכם מתבקשים להימנע מכל שימוש באתר. יתרה מכך, עצם הגלישה באתר או רכישת שירותים ומוצרים דרכו, מהווה הסכמה מצד המשתמש לקבל ולפעול בהתאם להוראות תקנון זה, וכן הצהרה כי לא תהיה לו או למי מטעמו כל טענה, דרישה או תביעה כנגד האתר, בעליו או עובדיו בכל הנוגע לתנאי השימוש.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">1.3</h3>
                  <p className="leading-relaxed">
                    הנהלת האתר רשאית לשנות ולעדכן את תנאי השימוש מעת לעת, על פי שיקול דעתה הבלעדי, ולפרסם את השינויים באתר בצירוף תאריך העדכון.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">1.4</h3>
                  <p className="leading-relaxed">
                    כפי שצוין, האתר מציע שירותי תוכן ומידע בנושאים פיננסיים. אם ברצונכם לבחון את זכאותכם לשירותים או למוצרים המוצגים באתר, עליכם להזין את פרטיכם האישיים המלאים באתר. בכך, הנהלת האתר תהא רשאית ליצור עמכם קשר ולהציע לכם מוצרים ושירותים שונים בהתאם לשיקול דעתה (להלן: &quot;השירותים&quot; או &quot;המוצרים&quot;).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">1.5</h3>
                  <p className="leading-relaxed">
                    הניסוח בתקנון זה בלשון זכר נעשה מטעמי נוחות בלבד, והוא מתייחס גם ללשון נקבה ולרבים, כמתחייב מההקשר.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">1.6</h3>
                  <p className="leading-relaxed">
                    [סעיף ריק - משמש כמספור בלבד]
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                2. כשרות לשימוש באתר
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">2.1</h3>
                  <p className="leading-relaxed">
                    הזכאות לביצוע רישום באתר נתונה למי שעומד בכל התנאים המצטברים הבאים: גילו 18 ומעלה; מחזיק בתעודת זהות ישראלית תקפה או דרכון זר תקף, או שהוא תאגיד המאוגד ורשום כדין בישראל; מחזיק בכרטיס אשראי תקף (ישראלי או בינלאומי) שהונפק על ידי אחת מחברות האשראי המוכרות; וכן בעל כתובת דואר אלקטרוני פעילה וכתובת מגורים בישראל.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">2.2</h3>
                  <p className="leading-relaxed">
                    השימוש באתר מותר למטרות פרטיות ואישיות בלבד, ואין לעשות בו שימוש למטרות מסחריות. חל איסור מוחלט על שימוש מסחרי כלשהו באתר, בתכניו או בכל חלק ממנו. כמו כן, אין להעתיק, להפיץ או לעשות שימוש בתוכן האתר (לרבות טקסטים, תמונות, קוד, שמות, או כל חומר שיווקי ועיצובי – להלן &quot;התוכן&quot;) לכל מטרה שאיננה אישית, ואין לאפשר לאחרים לבצע פעולות אלו.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                3. מדיניות הגנת הפרטיות
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">3.1</h3>
                  <p className="leading-relaxed">
                    בעת ההרשמה לאתר או במהלך רכישת מוצר/שירות, המשתמש מתבקש לאשר את הצטרפותו לרשימת התפוצה, וזאת על מנת לקבל עדכונים, הודעות ומבצעים. במידה והמשתמש אינו מעוניין להיכלל ברשימת הדיוור, עליו לציין זאת במפורש בכתב. משתמש שבחר שלא להצטרף, או המעוניין להסיר את פרטיו מרשימת התפוצה לאחר שנרשם, רשאי לעשות זאת בכל עת דרך המקום הייעודי לכך באתר.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">3.2</h3>
                  <p className="leading-relaxed">
                    לידיעתכם, האתר עשוי לעשות שימוש ב&quot;עוגיות&quot; (Cookies) ובממשקי סטטיסטיקה פנימיים (כגון Google Analytics). השימוש נעשה לצורך שמירת תיעוד סטטיסטי אנונימי, ניתוח תנועת הגולשים, בדיקת דפוסי גלישה וזמני שהייה באתר.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">3.3</h3>
                  <p className="leading-relaxed">
                    הנהלת האתר שומרת לעצמה את הזכות לאסוף ולהשתמש במידע שנמסר בעת ההרשמה ובמידע שנצבר במהלך השימוש באתר. המטרה היא שיפור, העשרה, שינוי והתאמת האתר והשירותים בו, וכן עדכון המשתמש בדבר מבצעים ושירותים (הן של האתר והן של צדדים שלישיים). עם זאת, הנהלת האתר מתחייבת שלא להעביר את פרטיו האישיים של המשתמש לידי מפרסמים או צדדים שלישיים כפי שצוין.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">3.4</h3>
                  <p className="leading-relaxed">
                    מבלי לגרוע מהאמור לעיל, ובכפוף למסירת הפרטים והסכמת המשתמש לקבלת דיוור ישיר, הנהלת האתר רשאית לשלוח למשתמש (באמצעות דוא&quot;ל או אמצעי תקשורת אחרים) מידע אודות שירותיה, וכן מידע שיווקי ופרסומי (לרבות של צדדים שלישיים). המשתמש רשאי בכל עת לבטל את הסכמתו ולהפסיק לקבל מידע זה באמצעות לחיצה על כפתור &quot;הסר&quot; המופיע בתחתית ההודעות הללו.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">3.5</h3>
                  <p className="leading-relaxed">
                    למען הסר ספק, הנהלת האתר עושה כל שביכולתה כדי להגן על סודיות הנתונים שנמסרו על ידי המשתמשים. האתר נוקט באמצעי זהירות מקובלים ומשתמש בטכנולוגיות אבטחה מתקדמות, ומשקיע משאבים למניעת חדירה ופגיעה בפרטיות. יחד עם זאת, לא ניתן להבטיח חסינות מוחלטת מפני שיבושים או חדירות לאתר באופן הרמטי.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                4. שחרור מאחריות
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">4.1</h3>
                  <p className="leading-relaxed">
                    האתר, על כל תכניו והשירותים הניתנים באמצעותו, מוצעים לשימוש הגולשים כמות שהם (&quot;AS IS&quot;) ובכפוף לזמינותם בפועל. מובהר בזאת כי השימוש באתר נעשה באחריותו הבלעדית והמלאה של המשתמש.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">4.2</h3>
                  <p className="leading-relaxed">
                    מבלי לגרוע מכלליות האמור לעיל, הנהלת האתר פטורה מכל אחריות שהיא, לרבות אך לא רק: כל אחריות הנוגעת לזמינות המידע, דיוקו, עדכניותו, אמינותו, מוסריותו, או עצם האפשרות להשתמש בתוכן האתר. כמו כן, לא תחול על ההנהלה אחריות לגבי מצגים הקשורים לבעלות, זכויות קניין, אי-הפרה, סחירות או התאמה למטרה מסוימת, וכן כל מצג אחר הנובע ממהלך העסקים הרגיל או מהשימוש באתר.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">4.3</h3>
                  <p className="leading-relaxed">
                    יודגש כי החברה אינה אחראית לשירותים הניתנים למשתמשים על ידי ספקי השירות (צדדים שלישיים) במסגרת רכישת מוצרים או שירותים מהם. האמור בסעיף זה יחול, מבלי לגרוע מהאמור לעיל, גם על כל נזק, חבות או הוצאה מכל סוג (ישירים או עקיפים) שייגרמו למשתמש, לאדם אחר או לתאגיד. זאת כתוצאה מטעות, השמטה, פגם בתוכן, מחדל, תקלה טכנית, וירוסים, רוגלות, כשלי תקשורת, גניבה, השמדת רשומות, או גישה ושינוי לא מורשים במידע. הפטור מאחריות תקף לגבי כל עילת תביעה שהיא – לרבות עילה חוזית, נזיקית, רשלנות, לשון הרע או כל עילה אחרת על פי דין.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">4.4</h3>
                  <p className="leading-relaxed">
                    כלל המידע המוצג באתר, ובכלל זה הצעות מסחריות ופרסומי צד ג&apos; לגבי מוצרים שונים (להלן: &quot;המידע&quot;), הינו בגדר מידע כללי בלבד. הנהלת האתר לא תישא באחריות לשום נזק, בין אם ישיר ובין אם עקיף, שעלול להיגרם למשתמש עקב הסתמכות על המידע המופיע באתר (או בכל מקור מידע פנימי/חיצוני אחר), או כתוצאה משימוש במוצרים שנמכרים באמצעותו.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                5. קניין רוחני
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">5.1</h3>
                  <p className="leading-relaxed">
                    כל זכויות הקניין הרוחני באתר, ללא יוצא מן הכלל, לרבות זכויות יוצרים, פטנטים, סימני מסחר, סודות מסחריים, עיצוב האתר, קוד המחשב, קבצים גרפיים, טקסטים וכל חומר אחר הכלול בו (להלן: &quot;זכויות קניין רוחני&quot;), הינם רכושה הבלעדי של הנהלת האתר (או של צדדים שלישיים שהתירו לאתר להשתמש בהם). זכויות אלו מוגנות על פי חוקי מדינת ישראל ועל פי אמנות בינלאומיות.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">5.2</h3>
                  <p className="leading-relaxed">
                    חל איסור מוחלט להעתיק, להפיץ, לשדר, להציג בפומבי, לשכפל, לפרסם, ליצור עבודות נגזרות, או למכור כל חלק מן התוכן והקניין הרוחני שבאתר, ללא קבלת אישור מפורש ובכתב מראש מהנהלת האתר.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">5.3</h3>
                  <p className="leading-relaxed">
                    אין באמור באתר או בתוכנו, באופן מפורש או משתמע, כדי להעניק רישיון או זכות כלשהי להשתמש בקניין הרוחני של האתר ללא אישור בכתב מההנהלה.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">5.4</h3>
                  <p className="leading-relaxed">
                    האתר עשוי להכיל שמות, מותגים ולוגואים של חברות וגופים שונים (להלן: &quot;הסימנים&quot;). סימנים אלו הם קניינם של בעליהם החוקיים ואין לעשות בהם כל שימוש ללא קבלת רשות מפורשת מבעלי הזכויות.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-blue-dk mb-6">
                6. שונות
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">6.1</h3>
                  <p className="leading-relaxed">
                    במקרה של אי-התאמה או סתירה בין ההוראות המופיעות בתנאי שימוש אלו לבין כל פרסום אחר, יגברו הוראות תקנון זה והן אלו שיקבעו. כמו כן, מובהר כי שום מצג או מידע שניתן בדרך אחרת לא יהיה בעל תוקף, אלא אם כן בוצע שינוי מפורש בתנאי השימוש שפורסם כנדרש.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">6.2</h3>
                  <p className="leading-relaxed">
                    שום ויתור, הימנעות מנקיטת צעדים או מתן ארכה מצד הנהלת האתר לא ייחשבו כוויתור על זכויותיה המשפטיות, ולא ישמשו תקדים המחייב את הנהלת האתר לוותר על זכויותיה בעתיד על פי כל דין.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">6.3</h3>
                  <p className="leading-relaxed">
                    הצדדים מסכימים כי הדין החל על תקנון זה ועל כל הנובע ממנו הוא הדין הישראלי בלבד. סמכות השיפוט הבלעדית בכל סכסוך או מחלוקת הנוגעים לשימוש באתר תהיה נתונה אך ורק לבתי המשפט המוסמכים בעיר תל-אביב.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-dk mb-3">6.4</h3>
                  <p className="leading-relaxed">
                    אנו נוקטים במגוון אמצעי אבטחה מתקדמים על מנת להבטיח את שמירת המידע האישי שלכם. אנו עושים שימוש בטכנולוגיות הצפנה להגנה על מידע רגיש המועבר ברשת האינטרנט, וכן מגינים על המידע המאוחסן במערכות המחשוב שלנו (גם במצב Offline). השרתים והמחשבים בהם מאוחסן המידע ממוקמים בסביבה מאובטחת ומוגנת.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

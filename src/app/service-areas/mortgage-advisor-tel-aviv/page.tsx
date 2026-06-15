import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import TelAvivHero from "./components/TelAvivHero/TelAvivHero";

const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "יועץ משכנתאות בתל אביב | ייעוץ מקצועי לשוק הנדל״ן | אבי",
  description:
    "מחפשים יועץ משכנתאות בתל אביב? אבי בוקעי, בנקאי לשעבר, מציע ייעוץ משכנתאות מקצועי לשוק הנדל״ן התל-אביבי. מומחיות ברוכשים ראשונים, משקיעים, תושבי חוץ ואיחוד הלוואות.",
  keywords: [
    "יועץ משכנתאות בתל אביב",
    "יועץ משכנתאות תל אביב",
    "ייעוץ משכנתאות תל אביב",
    "משכנתא תל אביב",
    "יועץ משכנתאות מומלץ תל אביב",
    "משכנתא לדירה בתל אביב",
    "מחזור משכנתא תל אביב",
    "משכנתא לתושבי חוץ תל אביב",
    "איחוד הלוואות תל אביב",
  ],
  alternates: {
    canonical: "https://avi-mashkanta.com/service-areas/mortgage-advisor-tel-aviv",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/service-areas/mortgage-advisor-tel-aviv",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    title: "יועץ משכנתאות בתל אביב | ייעוץ מקצועי לשוק הנדל״ן | אבי",
    description:
      "מחפשים יועץ משכנתאות בתל אביב? אבי בוקעי, בנקאי לשעבר, מציע ייעוץ משכנתאות מקצועי לשוק הנדל״ן התל-אביבי. מומחיות ברוכשים ראשונים, משקיעים ותושבי חוץ.",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "יועץ משכנתאות בתל אביב - אבי הבית למשכנתאות",
      },
    ],
  },
};

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-mashkanta.com/service-areas/mortgage-advisor-tel-aviv#service",
        name: "ייעוץ משכנתאות בתל אביב",
        description:
          "ייעוץ משכנתאות מקצועי בתל אביב: תכנון משכנתא חכמה, מכרז ריביות, משכנתאות לתושבי חוץ, איחוד הלוואות ומחזור – ליווי מלא מול הבנקים.",
        provider: {
          "@id": "https://avi-mashkanta.com/#organization",
        },
        areaServed: [{ "@type": "City", name: "תל אביב" }],
        serviceType: "Financial Service",
        category: "Mortgage advisory",
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/service-areas/mortgage-advisor-tel-aviv#webpage",
        url: "https://avi-mashkanta.com/service-areas/mortgage-advisor-tel-aviv",
        name: "יועץ משכנתאות בתל אביב | ייעוץ מקצועי לשוק הנדל״ן | אבי",
        description:
          "מחפשים יועץ משכנתאות בתל אביב? אבי בוקעי, בנקאי לשעבר, מציע ייעוץ משכנתאות מקצועי לשוק הנדל״ן התל-אביבי.",
        inLanguage: "he-IL",
        isPartOf: { "@id": "https://avi-mashkanta.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "דף הבית",
              item: "https://avi-mashkanta.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "אזורי שירות",
              item: "https://avi-mashkanta.com/service-areas",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "יועץ משכנתאות בתל אביב",
              item: "https://avi-mashkanta.com/service-areas/mortgage-advisor-tel-aviv",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "כמה הון עצמי צריך לדירה בתל אביב?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "לדירה ראשונה נדרשים לפחות 25% הון עצמי. לאור מחירי הנדל\"ן הגבוהים בתל אביב (בממוצע 3-5 מיליון ש\"ח לדירת 3-4 חדרים), מדובר בסכום משמעותי. חשוב מאוד לתכנן מראש לא רק את ה-25%, אלא גם את ההוצאות הנלוות: שמאי, עורך דין, מס רכישה ועמלת תיווך.",
            },
          },
          {
            "@type": "Question",
            name: "האם אפשר לקבל משכנתא לדירה בתל אביב כתושב חוץ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "כן. הבנקים בישראל מעניקים משכנתאות לתושבי חוץ, אך בדרישות שונות: בדרך כלל מינימום 40-50% הון עצמי, ודרישות תיעוד נוספות. כיועץ שמתמחה בתושבי חוץ, אני מטפל בכל הבירוקרטיה מולכם מרחוק ומוודא שתקבלו את ההצעה הטובה ביותר מהבנקים הישראליים.",
            },
          },
          {
            "@type": "Question",
            name: "האם כדאי למחזר משכנתא על דירה בתל אביב?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "בהחלט. מחירי הנדל\"ן בתל אביב עלו דרמטית בשנים האחרונות, כלומר שווי הנכס שלכם גבוה יותר ממה שהיה כשלקחתם את המשכנתא. זה מאפשר לנו לשפר את יחס המימון ולהשיג לכם ריביות טובות יותר במחזור. בדיקת כדאיות מחזור אצלנו היא חינמית לחלוטין.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

const services = [
  {
    num: "01",
    title: "משכנתא לרכישת דירה",
    description:
      "ליווי מלא לזוגות צעירים ומשפרי דיור ברחבי תל אביב, מהאישור העקרוני ועד קבלת המפתח. נתאים תמהיל שמתחשב בעליות מחירים עתידיות ובשינויים צפויים בריבית.",
  },
  {
    num: "02",
    title: "משכנתא לתושבי חוץ ומשקיעים",
    description:
      "תל אביב היא מגנט עולמי למשקיעים ולעולים חדשים. אני אשמש כנציגכם האישי בישראל, אנהל את הבירוקרטיה מול הבנקים ואדאג לעסקה חלקה ומשתלמת גם מרחוק.",
  },
  {
    num: "03",
    title: "מחזור משכנתא בתל אביב",
    description:
      "שווי הדירות בתל אביב עלה בעשרות אחוזים. ננצל את עליית הערך כדי לשפר דרמטית את תנאי המשכנתא הקיימת שלכם ולחסוך לכם עשרות אלפי שקלים.",
  },
  {
    num: "04",
    title: "איחוד הלוואות",
    description:
      "הלוואות מרובות מכבידות? נאחד את כל ההתחייבויות שלכם למשכנתא אחת מסודרת עם ריבית נמוכה ופריסה ארוכה — ונחזיר לכם אוויר לנשימה.",
  },
  {
    num: "05",
    title: "משכנתא לכל מטרה כנגד הנכס",
    description:
      "הדירה שלכם בתל אביב שווה הרבה כסף. נשתמש בה כבטוחה להשגת מימון זול לעזרה לילדים, השקעות נוספות או כל מטרה אחרת.",
  },
  {
    num: "06",
    title: "משכנתא ל\"דירה בהנחה\" (מחיר למשתכן)",
    description:
      "זכיתם בהגרלה? נבנה תמהיל שמנצל את הטבות שווי השוק ומגן עליכם מפני קפיצות מדד תשומות הבנייה עד האכלוס.",
  },
  {
    num: "07",
    title: "משכנתא הפוכה (גיל השלישי)",
    description:
      "בני 60+ בעלי דירה בתל אביב? קבלו כסף נזיל על חשבון ערך הנכס, ללא החזר חודשי שוטף, לשמירה על רמת חיים או עזרה לנכדים.",
  },
  {
    num: "08",
    title: "טיפול במסורבי בנקים",
    description:
      "קיבלתם סירוב? בזכות הניסיון שלי כבנקאי לשעבר אני יודע כיצד לנתח מורכבויות, להגיש את התיק מחדש ולהפוך את ה\"לא\" ל\"כן\".",
  },
];

const processSteps = [
  {
    num: "01",
    title: "אבחון ותכנון",
    description: "ניתוח מעמיק של ההכנסות, ההוצאות והתוכניות העתידיות שלכם, כולל התחשבות בעלויות הגבוהות של תל אביב.",
  },
  {
    num: "02",
    title: "אישור עקרוני",
    description: "הגשת התיק בצורה מוקפדת ו\"אפויה\" שמונעת סירובים ומקסמת את גובה האישור מהבנק.",
  },
  {
    num: "03",
    title: "מכרז ריביות ארצי",
    description: "ניהול משא ומתן אגרסיבי בין מגוון בנקים — לא רק בתל אביב — כדי להשיג את התנאים הזולים ביותר.",
  },
  {
    num: "04",
    title: "ליווי עד המפתח",
    description: "טיפול מלא בניירת, שמאים, ביטוחים ורישום, עד שהכסף עובר וקיבלתם את המפתח לדירה.",
  },
];

export default function MortgageAdvisorTelAvivPage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "אזורי שירות", href: "/service-areas" },
    { label: "יועץ משכנתאות בתל אביב", href: "/service-areas/mortgage-advisor-tel-aviv" },
  ];

  return (
    <>
      <JsonLd />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <TelAvivHero />
        <Breadcrumbs items={breadcrumbItems} />

        {/* Intro */}
        <section className="relative bg-white py-24 lg:py-40" dir="rtl">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <h2 className="font-noto-sans-hebrew font-black text-4xl lg:text-7xl text-blue-dk leading-tight mb-8">
              למה תל אביב דורשת{" "}
              <span className="text-orange">יועץ משכנתאות מומחה?</span>
            </h2>
            <div className="space-y-6 text-blue-dk/75 text-lg lg:text-xl font-semibold leading-relaxed">
              <p>
                תל אביב היא שוק הנדל״ן המורכב והיקר ביותר בישראל. מחירי דירה ממוצעים של 3-5 מיליון ש״ח,
                פערי שמאות משמעותיים בין שכונות, ריבוי פרויקטי התחדשות עירונית ורוכשים מחו״ל — כל אלו
                יוצרים מציאות שבה ניגשים לבנק לבד זה פשוט יקר מאוד.
              </p>
              <p>
                שמי אבי בוקעי, יוצא המערכת הבנקאית, ואני מכיר את הנהלים, את האותיות הקטנות ואת הגמישות
                של מנהלי הסניפים. אני כאן כדי להשיג לכם את ההצעה הטובה ביותר — בין אם אתם זוג צעיר
                שרוכש את הדירה הראשונה בפלורנטין, משקיע שמחפש נכס בצפון הישן, או תושב חוץ שרוצה להשקיע
                בשוק הישראלי.
              </p>
            </div>
          </div>
        </section>

        {/* Why local knowledge matters */}
        <section className="relative bg-cream py-24 lg:py-40" dir="rtl">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <h2 className="font-noto-sans-hebrew font-black text-4xl lg:text-7xl text-blue-dk leading-tight mb-12">
              ידע מקומי ששווה{" "}
              <span className="text-orange">כסף אמיתי</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-blue-dk/10">
                <div className="w-12 h-1.5 bg-orange rounded-full mb-5" />
                <h3 className="font-noto-sans-hebrew font-black text-2xl text-blue-dk mb-4">
                  מניעת מלכודות שמאות
                </h3>
                <p className="text-blue-dk/70 font-semibold leading-relaxed">
                  פערי השמאות בין שכונות תל אביב הם אחד הגדולים בישראל. הכרת מחירי השוק האמיתיים
                  בשכונות כמו נווה צדק, הצפון הישן, פלורנטין ויפו — מאפשרת לי להגן עליכם מהפתעות
                  יקרות ברגע האחרון.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-blue-dk/10">
                <div className="w-12 h-1.5 bg-orange rounded-full mb-5" />
                <h3 className="font-noto-sans-hebrew font-black text-2xl text-blue-dk mb-4">
                  ניסיון עם תיקים מורכבים
                </h3>
                <p className="text-blue-dk/70 font-semibold leading-relaxed">
                  תל אביב מושכת אנשי הייטק עם הכנסות גבוהות אך לא קבועות, עצמאים, תושבי חוץ, ומשקיעים
                  עם מספר נכסים. אני מתמחה בהגשת תיקים מורכבים בצורה שמקסמת את האישור.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-blue-dk/10">
                <div className="w-12 h-1.5 bg-orange rounded-full mb-5" />
                <h3 className="font-noto-sans-hebrew font-black text-2xl text-blue-dk mb-4">
                  משכנתאות לתושבי חוץ
                </h3>
                <p className="text-blue-dk/70 font-semibold leading-relaxed">
                  תל אביב היא יעד מועדף לקהילות יהודיות מצרפת, ארה״ב, רוסיה ועוד. אני משמש כנציג
                  האישי שלכם בישראל, מנהל את כל הבירוקרטיה ומדאג לעסקה חלקה ומשתלמת גם מרחוק.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-blue-dk/10">
                <div className="w-12 h-1.5 bg-orange rounded-full mb-5" />
                <h3 className="font-noto-sans-hebrew font-black text-2xl text-blue-dk mb-4">
                  התחדשות עירונית ותמ״א 38
                </h3>
                <p className="text-blue-dk/70 font-semibold leading-relaxed">
                  תל אביב מובילה בפרויקטי פינוי-בינוי ותמ״א 38. מימון עסקאות אלו מורכב יותר
                  ודורש ניסיון ייחודי — שאני מביא מניסיון עם עשרות תיקים כאלה.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative bg-white py-24 lg:py-40" dir="rtl">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-noto-sans-hebrew font-black text-4xl lg:text-7xl text-blue-dk leading-tight mb-4 text-center">
                שירותי המשכנתא שלנו
              </h2>
              <p className="text-center text-blue-dk/65 text-lg font-semibold mb-16">
                לתושבי תל אביב והסביבה
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service) => (
                  <div key={service.num} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center">
                      <span className="font-noto-sans-hebrew font-black text-orange text-sm">
                        {service.num}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-noto-sans-hebrew font-black text-xl text-blue-dk mb-2">
                        {service.title}
                      </h3>
                      <p className="text-blue-dk/65 font-semibold leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative bg-cream py-24 lg:py-40" dir="rtl">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <h2 className="font-noto-sans-hebrew font-black text-4xl lg:text-7xl text-blue-dk leading-tight mb-16 text-center">
              איך עובד תהליך{" "}
              <span className="text-orange">ייעוץ המשכנתאות</span> איתנו?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-dk text-white font-black font-noto-sans-hebrew text-xl flex items-center justify-center mx-auto mb-5">
                    {step.num}
                  </div>
                  <h3 className="font-noto-sans-hebrew font-black text-xl text-blue-dk mb-3">
                    {step.title}
                  </h3>
                  <p className="text-blue-dk/65 font-semibold text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-blue-dk py-24 lg:py-32 text-center" dir="rtl">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-noto-sans-hebrew font-black text-4xl lg:text-6xl text-white leading-tight mb-6">
              קונים דירה או ממחזרים בתל אביב?
              <br />
              <span className="text-orange">בואו נדבר!</span>
            </h2>
            <p className="text-white/75 text-lg lg:text-xl font-semibold mb-10">
              אל תשאירו את העסקה הכי יקרה בחייכם ליד המקרה. פנו עכשיו לשיחת ייעוץ ראשונית
              ללא עלות וללא התחייבות.
            </p>
          </div>
        </section>

        <Contact />

        {/* FAQ */}
        <section className="relative bg-cream py-24 lg:py-40" dir="rtl">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <h2 className="font-noto-sans-hebrew font-black text-4xl lg:text-6xl text-blue-dk leading-tight mb-12 text-center">
              שאלות נפוצות
              <br />
              <span className="text-orange">לגבי משכנתאות בתל אביב</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "כמה הון עצמי צריך לדירה בתל אביב?",
                  a: 'לדירה ראשונה נדרשים לפחות 25% הון עצמי. לאור מחירי הנדל"ן הגבוהים בתל אביב (בממוצע 3-5 מיליון ש"ח לדירת 3-4 חדרים), מדובר בסכום משמעותי. חשוב מאוד לתכנן מראש לא רק את ה-25%, אלא גם את ההוצאות הנלוות: שמאי, עורך דין, מס רכישה ועמלת תיווך.',
                },
                {
                  q: "האם אפשר לקבל משכנתא לדירה בתל אביב כתושב חוץ?",
                  a: "כן. הבנקים בישראל מעניקים משכנתאות לתושבי חוץ, אך בדרישות שונות: בדרך כלל מינימום 40-50% הון עצמי, ודרישות תיעוד נוספות. כיועץ שמתמחה בתושבי חוץ, אני מטפל בכל הבירוקרטיה מולכם מרחוק ומוודא שתקבלו את ההצעה הטובה ביותר מהבנקים הישראליים.",
                },
                {
                  q: "האם כדאי למחזר משכנתא על דירה בתל אביב?",
                  a: 'בהחלט. מחירי הנדל"ן בתל אביב עלו דרמטית בשנים האחרונות, כלומר שווי הנכס שלכם גבוה יותר ממה שהיה כשלקחתם את המשכנתא. זה מאפשר לנו לשפר את יחס המימון ולהשיג לכם ריביות טובות יותר במחזור. בדיקת כדאיות מחזור אצלנו היא חינמית לחלוטין.',
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 lg:p-8">
                  <h3 className="font-noto-sans-hebrew font-black text-xl text-blue-dk mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-blue-dk/70 font-semibold leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

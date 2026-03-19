import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import RenovationHero from "./components/RenovationHero";
import RenovationIntro from "./components/RenovationIntro";
import CommonMistake from "./components/CommonMistake";
import WhyChooseUs from "./components/WhyChooseUs";
import RenovationFAQ from "./components/RenovationFAQ";
import RenovationCTA from "./components/RenovationCTA";

// Lazy load components for better performance
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: " משכנתא לשיפוץ - אבי - הבית למשכנתאות ",
  description:
    "משכנתא לשיפוץ בריביות נמוכות. שדרגו את הבית ללא הלוואות יקרות. טיפול מלא בשמאויות ושחרור כספים. מומחה משכנתאות מנוסה בחולון והמרכז.",
  keywords: [
    "משכנתא לשיפוץ",
    "משכנתא לשיפוץ דירה",
    "הלוואה לשיפוץ",
    "מימון שיפוץ",
    "שיפוץ דירה משכנתא",
    "הרחבת משכנתא לשיפוץ",
    "משכנתא לשיפוץ בחולון",
    "יועץ משכנתאות שיפוץ",
    "שמאות לשיפוץ",
    "מיחזור משכנתא לשיפוץ",
  ],
  alternates: {
    canonical: "https://avi-home.co.il/services/renovation-mortgage",
  },
  openGraph: {
    title: " משכנתא לשיפוץ - אבי - הבית למשכנתאות ",
    description: "שדרגו את הבית ללא הלוואות יקרות. משכנתא לשיפוץ בריביות נמוכות עם טיפול מלא בשמאויות ושחרור כספים.",
    url: "https://avi-home.co.il/services/renovation-mortgage",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
  },
};

// JSON-LD Structured Data for Renovation Mortgage Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-home.co.il/services/renovation-mortgage#service",
        name: "משכנתא לשיפוץ",
        description: "משכנתא לשיפוץ בריביות נמוכות. שדרגו את הבית ללא הלוואות יקרות. טיפול מלא בשמאויות ושחרור כספים.",
        provider: {
          "@id": "https://avi-home.co.il/#organization"
        },
        areaServed: [
          { "@type": "City", name: "חולון" },
          { "@type": "City", name: "בת ים" },
          { "@type": "City", name: "ראשון לציון" },
          { "@type": "City", name: "תל אביב" }
        ],
        serviceType: "Financial Service",
        category: "Renovation Mortgage"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-home.co.il/services/renovation-mortgage#webpage",
        url: "https://avi-home.co.il/services/renovation-mortgage",
        name: "משכנתא לשיפוץ | אבי - הבית למשכנתאות",
        description: "משכנתא לשיפוץ בריביות נמוכות. טיפול מלא בשמאויות ושחרור כספים.",
        inLanguage: "he-IL",
        isPartOf: { "@id": "https://avi-home.co.il/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "דף הבית",
              item: "https://avi-home.co.il"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "שירותים",
              item: "https://avi-home.co.il/services"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "משכנתא לשיפוץ",
              item: "https://avi-home.co.il/services/renovation-mortgage"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "האם אני חייב להביא שמאי?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ברוב המקרים כן. הבנק ירצה לראות שהכסף אכן הולך להשבחת הנכס ושערך הבית יעלה בעקבות השיפוץ. אני אדריך אתכם בדיוק מתי להזמין את השמאי ואיך להתכונן לביקור שלו."
            }
          },
          {
            "@type": "Question",
            name: "כמה כסף אני יכול לקבל לשיפוץ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "חשוב שתדעו: אם תפנו לבנק לבד, רוב הסיכויים שיגבילו אתכם ל-50% מימון משווי הנכס (כולל המשכנתא הקיימת), כי הבנקים בדרך כלל לא \"אוהבים\" לתת אחוזי מימון גבוהים לשיפוץ. אבל כאן הניסיון שלי נכנס לתמונה: הרגולציה בישראל מאפשרת להגיע עד 75% מימון. כמי שמכיר את המערכת מבפנים, אני יודע איך לבנות ולהגיש את הבקשה כדי למצות את הפוטנציאל המלא ולהשיג לכם את ה-70%-75% שמגיעים לכם, ולא להסתפק בברירת המחדל הנמוכה של הבנק."
            }
          },
          {
            "@type": "Question",
            name: "האם הכסף נכנס ישר לחשבון שלי?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ברוב הבנקים, הנוהל הרגיל הוא לשחרר רק 50% מסכום השיפוץ בהתחלה, ואת ה-50% הנותרים רק בסיום השיפוץ או כנגד קבלות. זה יוצר לא פעם \"בור תזרימי\" מול הקבלנים שרוצים כסף עכשיו. היתרון שלי: הודות להיכרות שלי עם המערכת, במקרים רבים אני יודע לאשר שחרור של פעימה אחת מלאה עד 500,000 ₪ ישר לחשבון. זה נותן לכם שקט נפשי וכוח מיקוח אדיר מול הספקים, בלי לרדוף אחרי קבלות באמצע השיפוץ ובלי להיתקע בלי כסף."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RenovationMortgagePage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "שירותים", href: "/#services" },
    { label: "משכנתא לשיפוץ", href: "/services/renovation-mortgage" },
  ];

  return (
    <>
      <JsonLd />
      <Header alwaysWithBackground />
      <main>
        <RenovationHero />
        <Breadcrumbs items={breadcrumbItems} />
        <RenovationIntro />
        <CommonMistake />
        <WhyChooseUs />
        <RenovationCTA />
        <Contact />
        <RenovationFAQ />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

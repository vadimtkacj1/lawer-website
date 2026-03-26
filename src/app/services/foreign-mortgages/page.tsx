import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
// import RenovationHero from "./components/RenovationHero";
// import RenovationIntro from "./components/RenovationIntro";
// import CommonMistake from "./components/CommonMistake";
// import WhyChooseUs from "./components/WhyChooseUs";
import ForeignFAQ from "./components/ForeignFAQ";
import ForeignHero from "./components/ForeignHero";
import ProblemSection from "./components/ProblemSection";
import DifferencesSection from "./components/DifferencesSection";
import WhyChooseAvi from "./components/WhyChooseAvi/WhyChooseAvi";
import InvestmentFutureSection from "./components/InvestmentFutureSection";
// import RenovationCTA from "./components/RenovationCTA";

// Lazy load components for better performance
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "משכנתא לתושבי חוץ: קונים נכס בישראל בראש שקט | אבי - הבית למשכנתאות",
  description:
    "מתכננים לקנות נכס בארץ? קבלו ייעוץ מקצועי עבור משכנתא לתושבי חוץ. תכנון פיננסי חכם, ניהול משא ומתן וליווי אישי שיחסוך לכם זמן וכסף, גם כשאתם מעבר לים. השאירו פרטים.",
  keywords: [
    "משכנתא לתושבי חוץ",
    "משכנתא לזרים",
    "רכישת דירה בישראל מחו\"ל",
    "יועץ משכנתאות תושבי חוץ",
    "משקיעים בנדל\"ן ישראל",
    "מימון נכס בישראל",
    "ייפוי כוח משכנתא",
  ],
  alternates: {
    canonical: "https://avi-mashkanta.com/services/foreign-mortgages",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/services/foreign-mortgages",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "משכנתא לתושבי חוץ - אבי הבית למשכנתאות",
      },
    ],
  },
};

// JSON-LD Structured Data for Foreign / non-resident mortgages
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-mashkanta.com/services/foreign-mortgages#service",
        name: "משכנתא לתושבי חוץ",
        description:
          "ייעוץ וליווי משכנתא לתושבי חוץ ומשקיעים ברכישת נכס בישראל. ניהול בירוקרטיה מול הבנקים ומשא ומתן",
        provider: {
          "@id": "https://avi-mashkanta.com/#organization"
        },
        areaServed: [
          { "@type": "City", name: "חולון" },
          { "@type": "City", name: "בת ים" },
          { "@type": "City", name: "ראשון לציון" },
          { "@type": "City", name: "תל אביב" }
        ],
        serviceType: "Financial Service",
        category: "Foreign resident mortgage"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/services/foreign-mortgages#webpage",
        url: "https://avi-mashkanta.com/services/foreign-mortgages",
        name: "משכנתא לתושבי חוץ: קונים נכס בישראל בראש שקט | אבי - הבית למשכנתאות",
        description:
          "מתכננים לקנות נכס בארץ? קבלו ייעוץ מקצועי עבור משכנתא לתושבי חוץ. תכנון פיננסי חכם, ניהול משא ומתן וליווי אישי.",
        inLanguage: "he-IL",
        isPartOf: { "@id": "https://avi-mashkanta.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "דף הבית",
              item: "https://avi-mashkanta.com"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "שירותים",
              item: "https://avi-mashkanta.com/services"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "משכנתא לתושבי חוץ",
              item: "https://avi-mashkanta.com/services/foreign-mortgages"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "האם אני חייב להגיע לישראל פיזית כדי לקחת משכנתא?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ברוב השלבים – לא. את רוב התהליך (אישור עקרוני, מו\"מ על ריביות) אני מבצע עבורכם באמצעות ייפוי כוח. בדרך כלל תצטרכו להגיע פעם אחת לחתימות סופיות בבנק ופתיחת חשבון, או לבצע זאת באמצעות קונסוליה/ייפוי כוח נוטריוני ספציפי (תלוי במדיניות הבנק הספציפי)."
            }
          },
          {
            "@type": "Question",
            name: "באיזה מטבע כדאי לקחת את המשכנתא?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "שאלה מצוינת. אם ההכנסה שלכם היא בדולר או ביורו, יש היגיון לשקול מסלול משכנתא צמוד למט\"ח כדי להימנע מסיכוני שער חליפין (שההחזר החודשי יקפוץ פתאום בשקלים). מצד שני, הריביות השקליות לעיתים אטרקטיביות יותר. אני בונה לכם תמהיל שמגן עליכם מתנודות מטבע קיצוניות."
            }
          },
          {
            "@type": "Question",
            name: "כמה זמן לוקח התהליך?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "עבור תושבי חוץ, התהליך ארוך יותר מאשר לישראלים בגלל בדיקות הלבנת הון ואימות מסמכים. לכן קריטי לפנות אליי לפני שחותמים על חוזה הרכישה, כדי שנקבל אישור עקרוני מראש ולא תהיו בלחץ זמנים."
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

export default function ForeignMortgagesPage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "שירותים", href: "/services" },
    { label: "משכנתא לתושבי חוץ", href: "/services/foreign-mortgages" },
  ];

  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <ForeignHero/>
        <Breadcrumbs items={breadcrumbItems} />
        <ProblemSection/>
        <DifferencesSection/>
        <WhyChooseAvi/>
        <InvestmentFutureSection/>
        {/* <RenovationHero />
        <RenovationIntro />
        <CommonMistake />
        <WhyChooseUs />
        <RenovationCTA /> */}
        <Contact />
        <ForeignFAQ />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

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
  title: "משכנתא לתושבי חוץ - אבי - הבית למשכנתאות ",
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
    title: "משכנתא לתושבי חוץ - אבי - הבית למשכנתאות ",
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

export default function RenovationMortgagePage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "שירותים", href: "/#services" },
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

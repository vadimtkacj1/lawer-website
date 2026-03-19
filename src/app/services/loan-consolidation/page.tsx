import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ConsultantHero from "./ConsultantHero";
import ConsultantFAQ from "./ConsultantFAQ";
import AllServicesSection from "./AllServicesSection";
import ExpertSection from "./ExpertSection";
import InsiderAdvantage from "./InsiderAdvantage";
import FinancialControlCTA from "./FinancialControlCTA";
// import RenovationCTA from "./components/RenovationCTA";

// Lazy load components for better performance
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: " איחוד הלוואות ומחזור משכנתא - אבי - הבית למשכנתאות ",
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
    title: " איחוד הלוואות ומחזור משכנתא - אבי - הבית למשכנתאות ",
    description: "שדרגו את הבית ללא הלוואות יקרות. משכנתא לשיפוץ בריביות נמוכות עם טיפול מלא בשמאויות ושחרור כספים.",
    url: "https://avi-home.co.il/services/renovation-mortgage",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
  },
};

// JSON-LD Structured Data for Loan Consolidation Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
<<<<<<< Updated upstream
        "@id": "https://avi-home.co.il/services/renovation-mortgage#service",
        name: "משכנתא לשיפוץ",
        description: "משכנתא לשיפוץ בריביות נמוכות. שדרגו את הבית ללא הלוואות יקרות. טיפול מלא בשמאויות ושחרור כספים.",
=======
        "@id": "https://avi-mashkanta.com/services/loan-consolidation#service",
        name: "איחוד הלוואות ומחזור משכנתא",
        description: "איחוד הלוואות ומחזור משכנתא לחיסכון משמעותי. הורדת החזרים חודשיים, ריביות נמוכות יותר וניהול כלכלי נכון.",
>>>>>>> Stashed changes
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
        category: "Loan Consolidation"
      },
      {
        "@type": "WebPage",
<<<<<<< Updated upstream
        "@id": "https://avi-home.co.il/services/renovation-mortgage#webpage",
        url: "https://avi-home.co.il/services/renovation-mortgage",
        name: "משכנתא לשיפוץ | אבי - הבית למשכנתאות",
        description: "משכנתא לשיפוץ בריביות נמוכות. טיפול מלא בשמאויות ושחרור כספים.",
=======
        "@id": "https://avi-mashkanta.com/services/loan-consolidation#webpage",
        url: "https://avi-mashkanta.com/services/loan-consolidation",
        name: "איחוד הלוואות ומחזור משכנתא | אבי - הבית למשכנתאות",
        description: "איחוד הלוואות ומחזור משכנתא לחיסכון משמעותי והורדת החזרים חודשיים.",
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              name: "משכנתא לשיפוץ",
              item: "https://avi-home.co.il/services/renovation-mortgage"
=======
              name: "איחוד הלוואות ומחזור משכנתא",
              item: "https://avi-mashkanta.com/services/loan-consolidation"
>>>>>>> Stashed changes
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "אבי, האם איחוד הלוואות לא מגדיל את סך החוב שלי בסופו של דבר?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "שאלה מצוינת. כשפורסים הלוואה להרבה שנים, סך תשלום הריבית אכן עולה (\"ריבית דריבית\"). אבל, וזה אבל גדול – האלטרנטיבה היא להישאר במינוס שבו הריבית רצחנית, או לקרוס כלכלית. המטרה באיחוד היא לייצר יציבות תזרימית עכשיו. במקרים רבים, החיסכון המיידי בריביות \"הלא יעילות\" (של האוברדרפט והאשראי) מקזז את העלות לטווח הארוך."
            }
          },
          {
            "@type": "Question",
            name: "כמה עולה לבדוק אם כדאי לי למחזר?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "אצלי ב\"אבי - הבית למשכנתאות\", בדיקת הכדאיות הראשונית היא ללא עלות וללא התחייבות. אני מזין את הנתונים למחשבון, ואם אין חיסכון משמעותי – אני אהיה הראשון להגיד לכם \"אל תיגעו במשכנתא\"."
            }
          },
          {
            "@type": "Question",
            name: "האם חייבים להגיע לסניף הבנק?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "את העבודה הקשה והבירוקרטיה אני עושה עבורכם מול הבנקים והמערכות הדיגיטליות. אתם מגיעים לחתימות הסופיות."
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
    { label: "מחזור ואיחוד הלוואות", href: "/services/loan-consolidation" },
  ];

  return (
    <>
      <JsonLd />
      <Header alwaysWithBackground />
      <main>
        <ConsultantHero />
        <Breadcrumbs items={breadcrumbItems} />
        <ExpertSection/>
        <InsiderAdvantage/>
        <AllServicesSection/>
        <FinancialControlCTA/>
        <Contact />
        <ConsultantFAQ/>
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

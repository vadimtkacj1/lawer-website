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
  title: "איחוד הלוואות ומחזור משכנתא | אבי - הבית למשכנתאות",
  description:
    "ההחזרים החודשיים חונקים? הגיע הזמן לחזור לנשום. תהליך מקצועי של איחוד הלוואות יחד עם מחזור משכנתא יאפשר לכם להוריד את הלחץ הכלכלי. פנו לאבי לבדיקת כדאיות.",
  keywords: [
    "איחוד הלוואות",
    "מחזור משכנתא",
    "מיחזור משכנתא",
    "יועץ משכנתאות",
    "הורדת החזר חודשי",
    "סגירת מינוס",
    "משכנתא בחולון",
    "משכנתא במרכז",
  ],
  alternates: {
    canonical: "https://avi-mashkanta.com/services/loan-consolidation",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/services/loan-consolidation",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "איחוד הלוואות ומחזור משכנתא - אבי הבית למשכנתאות",
      },
    ],
  },
};

// JSON-LD Structured Data for Loan Consolidation Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-mashkanta.com/services/loan-consolidation#service",
        name: "איחוד הלוואות ומחזור משכנתא",
        description: "איחוד הלוואות ומחזור משכנתא לחיסכון משמעותי. הורדת החזרים חודשיים, ריביות נמוכות יותר וניהול כלכלי נכון.",
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
        category: "Loan Consolidation"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/services/loan-consolidation#webpage",
        url: "https://avi-mashkanta.com/services/loan-consolidation",
        name: "איחוד הלוואות ומחזור משכנתא | אבי - הבית למשכנתאות",
        description: "איחוד הלוואות ומחזור משכנתא לחיסכון משמעותי והורדת החזרים חודשיים.",
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
              name: "איחוד הלוואות ומחזור משכנתא",
              item: "https://avi-mashkanta.com/services/loan-consolidation"
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

export default function LoanConsolidationPage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "שירותים", href: "/services" },
    { label: "מחזור ואיחוד הלוואות", href: "/services/loan-consolidation" },
  ];

  return (
    <>
      <JsonLd />
      <Header />
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

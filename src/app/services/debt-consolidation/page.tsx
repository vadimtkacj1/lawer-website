import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import DebtFAQ from "./DebtFAQ";
import DebtHero from "./DebtHero";
import FinancialPressureSection from "./FinancialPressureSection";
import DebtConsolidationGenius from "./DebtConsolidationGenius";
import MortgageRecycleSection from "./MortgageRecycleSection/MortgageRecycleSection";
import AviAdvantageClosing from "./AviAdvantageClosing";

// Lazy load components for better performance
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "משכנתא לכל מטרה בחולון והמרכז | אבי - הבית למשכנתאות",
  description:
    "משכנתא לכל מטרה בריביות נמוכות. הפכו את הבית לכספומט זול. עזרה לילדים, איחוד הלוואות, סגירת מינוס. מומחה משכנתאות מנוסה בחולון והמרכז.",
  keywords: [
    "משכנתא לכל מטרה",
    "משכנתא לעזרה לילדים",
    "מינוף נכס קיים",
    "סגירת מינוס",
    "הרחבת משכנתא",
    "משכנתא להשקעה",
    "משכנתא לכל מטרה בחולון",
    "יועץ משכנתאות",
    "הון עצמי מהבית",
    "הלוואה על הבית",
  ],
  alternates: {
    canonical: "https://avi-mashkanta.com/services/debt-consolidation",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/services/debt-consolidation",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "משכנתא לכל מטרה - אבי הבית למשכנתאות",
      },
    ],
  },
};

// JSON-LD Structured Data for Mortgage for Any Purpose Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-mashkanta.com/services/debt-consolidation#service",
        name: "משכנתא לכל מטרה",
        description: "משכנתא לכל מטרה בריביות נמוכות. הפכו את הבית לכספומט זול. עזרה לילדים, איחוד הלוואות, סגירת מינוס.",
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
        category: "Mortgage for Any Purpose"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/services/debt-consolidation#webpage",
        url: "https://avi-mashkanta.com/services/debt-consolidation",
        name: "משכנתא לכל מטרה | אבי - הבית למשכנתאות",
        description: "משכנתא לכל מטרה בריביות נמוכות. הפכו את הבית לכספומט זול.",
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
              name: "משכנתא לכל מטרה",
              item: "https://avi-mashkanta.com/services/debt-consolidation"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "האם אני מסכן את הבית שלי?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "כל עוד עומדים בהחזרים החודשיים, הבית לא בסכנה. להפך - במקרים רבים, לקיחת הלוואות קצרות טווח שחונקות את העו״ש היא זו שמובילה לקריסה כלכלית. פריסה ארוכה במשכנתא לכל מטרה דווקא מייצרת יציבות וביטחון."
            }
          },
          {
            "@type": "Question",
            name: "כמה מהר אפשר לקבל את הכסף?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "מכיוון שמדובר במשכנתא, זה לוקח יותר זמן מהלוואה באפליקציה. בדרך כלל בין שבועיים לחודש. אבל ההמתנה הזו שווה לכם עשרות אלפי שקלים בחיסכון ריביות."
            }
          },
          {
            "@type": "Question",
            name: "האם אפשר לפרוע את ההלוואה לפני הזמן?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "בוודאי. אני בונה את התמהיל כך שיהיו בו תחנות יציאה גמישות או מסלולים ללא עמלת פירעון מוקדם, למקרה שיתפנה לכם כסף בעתיד (קרן השתלמות, ירושה וכו׳)."
            }
          },
          {
            "@type": "Question",
            name: "למה לא פשוט לקחת הלוואה רגילה מהבנק?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "הלוואה רגילה מגיעה עם ריבית גבוהה ב-3%-5% לפחות, ופריסה של 5-7 שנים בלבד. זה אומר החזר חודשי גבוה מאוד שחונק את התזרים. משכנתא לכל מטרה נותנת לכם ריבית נמוכה משמעותית, פריסה של 20-30 שנה, והחזר חודשי שמאפשר לכם לחיות."
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

export default function DebtConsolidationPage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "שירותים", href: "/services" },
    { label: "משכנתא לכל מטרה", href: "/services/debt-consolidation" },
  ];

  return (
    <>
      <JsonLd />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <DebtHero/>
        <Breadcrumbs items={breadcrumbItems} />
        <FinancialPressureSection/>
        <DebtConsolidationGenius/>
        <MortgageRecycleSection/>
        <AviAdvantageClosing/>
        <Contact />
        <DebtFAQ />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

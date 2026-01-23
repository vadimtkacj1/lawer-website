import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import RefusedHero from "./components/RefusedHero";
import IntroRefusedSection from "./components/IntroRefusedSection";
import WhyRefusedSection from "./components/WhyRefusedSection";
import BiggestMistakeSection from "./components/BiggestMistakeSection";
import SolutionProcessSection from "./components/SolutionProcessSection";
import WhyChooseMeSection from "./components/WhyChooseMeSection";
import RefusedFAQ from "./components/RefusedFAQ";
import ClosingRefusedCTA from "./components/ClosingRefusedCTA";

// Lazy load components for better performance
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "מסורבי משכנתא - פתרונות לסירובים | אבי - הבית למשכנתאות",
  description:
    "קיבלתם סירוב למשכנתא? אני יודע איך להפוך את ה'לא' ל'כן'. בעל ניסיון בנקאי, מומחה לטיפול בתיקים מורכבים ומסורבי משכנתא. ניתוח דוח אשראי ופתרונות מותאמים אישית.",
  keywords: [
    "מסורבי משכנתא",
    "סירוב משכנתא",
    "דוח נתוני אשראי",
    "BDI",
    "פתרון לסירוב משכנתא",
    "יועץ משכנתאות מסורבים",
    "הלוואת גישור",
    "מיחזור משכנתא",
    "דירוג אשראי",
    "פושטי רגל משכנתא",
  ],
  alternates: {
    canonical: "https://avi-home.co.il/services/mortgage-refused",
  },
  openGraph: {
    title: "מסורבי משכנתא - פתרונות לסירובים | אבי - הבית למשכנתאות",
    description: "קיבלתם סירוב למשכנתא? אני יודע איך להפוך את ה'לא' ל'כן'. מומחה לטיפול בתיקים מורכבים ומסורבי משכנתא.",
    url: "https://avi-home.co.il/services/mortgage-refused",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
  },
};

// JSON-LD Structured Data for Mortgage Refused Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-home.co.il/services/mortgage-refused#service",
        name: "מסורבי משכנתא",
        description: "פתרונות מקצועיים למסורבי משכנתא. טיפול בתיקים מורכבים, ניתוח דוח אשראי, והפיכת סירוב לאישור משכנתא.",
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
        category: "Mortgage Refused Solutions"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-home.co.il/services/mortgage-refused#webpage",
        url: "https://avi-home.co.il/services/mortgage-refused",
        name: "מסורבי משכנתא | אבי - הבית למשכנתאות",
        description: "פתרונות מקצועיים למסורבי משכנתא. טיפול בתיקים מורכבים והפיכת סירוב לאישור.",
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
              name: "מסורבי משכנתא",
              item: "https://avi-home.co.il/services/mortgage-refused"
            }
          ]
        }
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

export default function MortgageRefusedPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <RefusedHero />
        <IntroRefusedSection />
        <WhyRefusedSection />
        <BiggestMistakeSection />
        <SolutionProcessSection />
        <WhyChooseMeSection />
        <ClosingRefusedCTA />
        <Contact />
        <RefusedFAQ />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

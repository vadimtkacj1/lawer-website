import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
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
    "איחוד הלוואות",
    "סגירת מינוס",
    "הרחבת משכנתא",
    "משכנתא להשקעה",
    "משכנתא לכל מטרה בחולון",
    "יועץ משכנתאות",
    "מיחזור משכנתא",
    "הלוואה על הבית",
  ],
  alternates: {
    canonical: "https://avi-home.co.il/services/debt-consolidation",
  },
  openGraph: {
    title: "משכנתא לכל מטרה בחולון והמרכז | אבי - הבית למשכנתאות",
    description: "הפכו את הבית לכספומט זול. משכנתא לכל מטרה בריביות נמוכות לעזרה לילדים, איחוד הלוואות וסגירת מינוס.",
    url: "https://avi-home.co.il/services/debt-consolidation",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
  },
};

// JSON-LD Structured Data for Mortgage for Any Purpose Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-home.co.il/services/debt-consolidation#service",
        name: "משכנתא לכל מטרה",
        description: "משכנתא לכל מטרה בריביות נמוכות. הפכו את הבית לכספומט זול. עזרה לילדים, איחוד הלוואות, סגירת מינוס.",
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
        category: "Mortgage for Any Purpose"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-home.co.il/services/debt-consolidation#webpage",
        url: "https://avi-home.co.il/services/debt-consolidation",
        name: "משכנתא לכל מטרה | אבי - הבית למשכנתאות",
        description: "משכנתא לכל מטרה בריביות נמוכות. הפכו את הבית לכספומט זול.",
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
              name: "משכנתא לכל מטרה",
              item: "https://avi-home.co.il/services/debt-consolidation"
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

export default function DebtConsolidationPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <DebtHero/>
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

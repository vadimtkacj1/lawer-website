import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
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
    canonical: "https://avi-mashkanta.com/services/loan-consolidation",
  },
  openGraph: {
    title: " איחוד הלוואות ומחזור משכנתא - אבי - הבית למשכנתאות ",
    description: "שדרגו את הבית ללא הלוואות יקרות. משכנתא לשיפוץ בריביות נמוכות עם טיפול מלא בשמאויות ושחרור כספים.",
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

// JSON-LD Structured Data for Renovation Mortgage Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-mashkanta.com/services/renovation-mortgage#service",
        name: "משכנתא לשיפוץ",
        description: "משכנתא לשיפוץ בריביות נמוכות. שדרגו את הבית ללא הלוואות יקרות. טיפול מלא בשמאויות ושחרור כספים.",
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
        category: "Renovation Mortgage"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/services/renovation-mortgage#webpage",
        url: "https://avi-mashkanta.com/services/renovation-mortgage",
        name: "משכנתא לשיפוץ | אבי - הבית למשכנתאות",
        description: "משכנתא לשיפוץ בריביות נמוכות. טיפול מלא בשמאויות ושחרור כספים.",
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
              name: "משכנתא לשיפוץ",
              item: "https://avi-mashkanta.com/services/renovation-mortgage"
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

export default function RenovationMortgagePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <ConsultantHero />
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

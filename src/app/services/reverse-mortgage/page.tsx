import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import RenovationHero from "./components/ReverseHero";
import ReverseHero from "./components/ReverseHero";
import RetirementProblemSection from "./components/RetirementProblemSection";
import AviAdvantageReverse from "./components/AviAdvantageReverse";
import ReverseMortgageBenefits from "./components/ReverseMortgageBenefits";
import MortgageAdvantages from "./components/MortgageAdvantages";
import HowItWorks from "./components/HowItWorks";
import TransparencyAndCTA from "./components/TransparencyAndCTA";
import ReverseFAQ from "./components/ReverseFAQ";

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
    canonical: "https://avi-mashkanta.com/services/reverse-mortgage",
  },
  openGraph: {
    title: " משכנתא הפוכה - אבי - הבית למשכנתאות ",
    description: "משכנתא הפוכה לגיל הפנסיה. קבלו הכנסה חודשית מהבית שלכם בלי למכור אותו.",
    url: "https://avi-mashkanta.com/services/reverse-mortgage",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "משכנתא הפוכה - אבי הבית למשכנתאות",
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
        <ReverseHero />
        <RetirementProblemSection/>
        <AviAdvantageReverse/>
        <ReverseMortgageBenefits
        />
        <MortgageAdvantages/>
        <HowItWorks/>
        <TransparencyAndCTA/>
        <Contact />
        <ReverseFAQ/>
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

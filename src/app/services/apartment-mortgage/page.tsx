import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import ApartmentHero from "./components/ApartmentHero";
import IntroSection from "./components/IntroSection";
import InterestRateSection from "./components/InterestRateSection";
import WorkStepsSection from "./components/WorkStepsSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ApartmentFAQ from "./components/ApartmentFAQ";
import ClosingCTA from "./components/ClosingCTA";

// Lazy load components for better performance
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "משכנתא לרכישת דירה בחולון והמרכז | אבי - הבית למשכנתאות",
  description:
    "משכנתא לרכישת דירה עם תמהיל מותאם אישית. אישור עקרוני, תכנון פיננסי ומכרז ריביות. ליווי מלא מאישור עקרוני ועד המפתח. מומחה משכנתאות מנוסה בחולון והמרכז.",
  keywords: [
    "משכנתא לרכישת דירה",
    "משכנתא דירה ראשונה",
    "אישור עקרוני משכנתא",
    "תמהיל משכנתא",
    "יועץ משכנתאות",
    "משכנתא בחולון",
    "משכנתא במרכז",
    "מכרז ריביות",
    "הון עצמי משכנתא",
    "שמאות משכנתא",
  ],
  alternates: {
    canonical: "https://avi-mashkanta.com/services/apartment-mortgage",
  },
  openGraph: {
    title: "משכנתא לרכישת דירה בחולון והמרכז | אבי - הבית למשכנתאות",
    description: "משכנתא לרכישת דירה עם תמהיל מותאם אישית. ליווי מלא מאישור עקרוני ועד המפתח.",
    url: "https://avi-mashkanta.com/services/apartment-mortgage",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
  },
};

// JSON-LD Structured Data for Apartment Mortgage Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-mashkanta.com/services/apartment-mortgage#service",
        name: "משכנתא לרכישת דירה",
        description: "משכנתא לרכישת דירה עם תמהיל מותאם אישית. אישור עקרוני, תכנון פיננסי ומכרז ריביות. ליווי מלא מאישור עקרוני ועד המפתח.",
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
        category: "Apartment Mortgage"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/services/apartment-mortgage#webpage",
        url: "https://avi-mashkanta.com/services/apartment-mortgage",
        name: "משכנתא לרכישת דירה | אבי - הבית למשכנתאות",
        description: "משכנתא לרכישת דירה עם תמהיל מותאם אישית. ליווי מלא מאישור עקרוני ועד המפתח.",
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
              name: "משכנתא לרכישת דירה",
              item: "https://avi-mashkanta.com/services/apartment-mortgage"
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

export default function ApartmentMortgagePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <ApartmentHero />
        <IntroSection />
        <InterestRateSection />
        <WorkStepsSection />
        <WhyChooseSection />
        <ClosingCTA />
        <Contact />
        <ApartmentFAQ />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

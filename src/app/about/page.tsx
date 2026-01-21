import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import CommercialHero from "@/app/about/components/CommercialHero";
import CommercialAbout from "@/app/about/components/CommercialAbout";
import CommercialWhySection from "@/app/about/components/CommercialWhySection";
import CommercialServicesSection from "@/app/about/components/CommercialServicesSection";
import AboutFAQ from "@/app/about/components/AboutFAQ";
import AboutCTA from "@/app/about/components/AboutCTA";

// Lazy load components for better performance
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "יועץ משכנתאות בחולון והמרכז | אבי - הבית למשכנתאות",
  description:
    "יועץ משכנתאות בחולון והמרכז. המומחיות של יוצא מערכת הבנקאות אצלכם בכיס. איחוד הלוואות, מיחזור משכנתא, פתרונות למסורבי בנקים ובעלי דירוג אשראי שלילי.",
  keywords: [
    "יועץ משכנתאות חולון",
    "יועץ משכנתאות במרכז",
    "יועץ משכנתאות פרטי",
    "איחוד הלוואות",
    "מיחזור משכנתא",
    "מסורבי בנק",
    "משכנתא לזוגות צעירים",
    "משכנתא לציבור החרדי",
    "משכנתא לבעלי דירוג אשראי שלילי",
    "בדיקת כדאיות למיחזור",
  ],
  alternates: {
    canonical: "https://avi-home.co.il/about",
  },
  openGraph: {
    title: "יועץ משכנתאות בחולון והמרכז | אבי - הבית למשכנתאות",
    description: "המומחיות של יוצא מערכת הבנקאות. איחוד הלוואות, מיחזור משכנתא, פתרונות למסורבי בנקים.",
    url: "https://avi-home.co.il/about",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
  },
};

// JSON-LD Structured Data for Commercial Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-home.co.il/about#service",
        name: "יועץ משכנתאות בחולון והמרכז",
        description: "איחוד הלוואות, מיחזור משכנתא, פתרונות למסורבי בנקים ובעלי דירוג אשראי שלילי",
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
        category: "Mortgage Consultation"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-home.co.il/about#webpage",
        url: "https://avi-home.co.il/about",
        name: "יועץ משכנתאות בחולון והמרכז | אבי - הבית למשכנתאות",
        description: "איחוד הלוואות, מיחזור משכנתא, פתרונות למסורבי בנקים",
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
              name: "יועץ משכנתאות",
              item: "https://avi-home.co.il/about"
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

export default function CommercialPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <CommercialHero />
        <CommercialAbout />
        <CommercialWhySection />
        <CommercialServicesSection />
        <AboutCTA />
        <Contact />
        <AboutFAQ />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}


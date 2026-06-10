import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import MortgageCalculator from "./components/MortgageCalculator";

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32" />,
});

// Page metadata
export const metadata: Metadata = {
  title: "מחשבון משכנתא חכם | אבי - הבית למשכנתאות",
  description:
    "תכננו את ההחזר החודשי שלכם בקליק! מחשבון משכנתא חכם וידידותי לחישוב משכנתא מהיר או איחוד הלוואות. היכנסו עכשיו לקבלת הערכה פיננסית ראשונית.",
  keywords: [
    "מחשבון משכנתא",
    "חישוב משכנתא",
    "החזר חודשי משכנתא",
    "משכורת נדרשת למשכנתא",
    "מקדמה למשכנתא",
    "יועץ משכנתאות",
  ],
  alternates: {
    canonical: "https://avi-mashkanta.com/calculator",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/calculator",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "מחשבון משכנתא - אבי הבית למשכנתאות",
      },
    ],
  },
};

// JSON-LD Structured Data for Calculator Page
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://avi-mashkanta.com/calculator#webapp",
        name: "מחשבון משכנתא",
        description: "מחשבון משכנתא מתקדם - חשבו החזר חודשי, משכורת נדרשת ומקדמה נדרשת",
        url: "https://avi-mashkanta.com/calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web Browser",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "ILS"
        },
        featureList: [
          "חישוב החזר חודשי",
          "חישוב משכורת נדרשת",
          "חישוב מקדמה נדרשת",
          "ייעוץ מקצועי"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/calculator#webpage",
        url: "https://avi-mashkanta.com/calculator",
        name: "מחשבון משכנתא | אבי - הבית למשכנתאות",
        description: "מחשבון משכנתא מתקדם לחישוב החזר חודשי, משכורת נדרשת ומקדמה",
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
              name: "מחשבון משכנתא",
              item: "https://avi-mashkanta.com/calculator"
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

export default function CalculatorPage() {
  return (
    <>
      <JsonLd />
      <div className="bg-cream min-h-screen">
        <Header />
        <main className="pt-[90px] md:pt-[110px]">
          <MortgageCalculator />
        </main>
      </div>

      <Footer />
    </>
  );
}

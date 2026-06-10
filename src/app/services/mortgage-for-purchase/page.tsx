import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import PurchaseHero from "./components/PurchaseHero";
import IntroSection from "./components/IntroSection";
import InterestRateSection from "./components/InterestRateSection";
import WorkStepsSection from "./components/WorkStepsSection";
import WhyChooseSection from "./components/WhyChooseSection";
import PurchaseFAQ from "./components/PurchaseFAQ";
import ClosingCTA from "./components/ClosingCTA";

// Lazy load components for better performance
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "ייעוץ משכנתא לרכישת דירה ראשונה | אבי - הבית למשכנתאות",
  description:
    "קונים דירה? זה הזמן לתכנן נכון את הצעד הכלכלי הגדול בחייכם. אבי, יועץ משכנתאות מומחה, ילווה אתכם בבניית תמהיל משכנתא אישי לרכישת דירה ראשונה או חלופית, ניהול משא ומתן קשוח מול הבנקים והשגת ריביות מעולות.",
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
    canonical: "https://avi-mashkanta.com/services/mortgage-for-purchase",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/services/mortgage-for-purchase",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "משכנתא לרכישת דירה - אבי הבית למשכנתאות",
      },
    ],
  },
};

// JSON-LD Structured Data for Mortgage for Purchase Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-mashkanta.com/services/mortgage-for-purchase#service",
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
        category: "Mortgage for Purchase"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/services/mortgage-for-purchase#webpage",
        url: "https://avi-mashkanta.com/services/mortgage-for-purchase",
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
              item: "https://avi-mashkanta.com/services/mortgage-for-purchase"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "כמה הון עצמי אני צריך להביא?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "לפי הנחיות בנק ישראל: דירה ראשונה: מינימום 25% הון עצמי (75% משכנתא). משפרי דיור (מחליפים דירה): מינימום 30% הון עצמי (70% משכנתא). דירה להשקעה (דירה שנייה ומעלה): מינימום 50% הון עצמי. תוכנית \"דירה בהנחה\": ניתן להגיע להון עצמי נמוך יותר (לעיתים 10% או 100K ₪), תלוי בשווי השוק של הדירה."
            }
          },
          {
            "@type": "Question",
            name: "מה קורה אם השמאי מעריך את הדירה בפחות מהמחיר ששילמתי?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "זוהי \"מלכודת השמאות\". הבנק נותן משכנתא לפי הנמוך מבין השניים (החוזה או השמאות). אם השמאי העריך נמוך, תצטרכו להשלים כסף מהבית. הפתרון שלי: בגלל ההיכרות שלי עם השטח והמחירים (במיוחד באזור המרכז), אני אעזור לכם לבצע הערכה מקדימה (שמאות מוקדמת) כדי למנוע הפתעות לא נעימות כאלו."
            }
          },
          {
            "@type": "Question",
            name: "האם כדאי לקחת \"מסלול פריים\" מלא?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "פעם זה היה הלהיט, היום זה סיכון. מסלול הפריים תנודתי מאוד. תמהיל נכון חייב להיות מאוזן בין פריים (גמיש אך תנודתי) לבין מסלולים קבועים (יציבים אך לעיתים יקרים יותר או עם קנסות יציאה). האיזון המדויק תלוי ב\"פרופיל הסיכון\" שלכם."
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

export default function MortgageForPurchasePage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "שירותים", href: "/services" },
    { label: "משכנתא לרכישת דירה", href: "/services/mortgage-for-purchase" },
  ];

  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <PurchaseHero />
        <Breadcrumbs items={breadcrumbItems} />
        <IntroSection />
        <InterestRateSection />
        <WorkStepsSection />
        <WhyChooseSection />
        <ClosingCTA />
        <Contact />
        <PurchaseFAQ />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

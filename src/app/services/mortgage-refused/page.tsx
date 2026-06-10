import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
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
    "קיבלתם סירוב למשכנתא? אני יודע איך להפוך את הלא לכן. בעל ניסיון בנקאי, מומחה לטיפול בתיקים מורכבים ומסורבי משכנתא. ניתוח דוח אשראי ופתרונות מותאמים אישית.",
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
    canonical: "https://avi-mashkanta.com/services/mortgage-refused",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/services/mortgage-refused",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "מסורבי משכנתא - פתרונות - אבי הבית למשכנתאות",
      },
    ],
  },
};

// JSON-LD Structured Data for Mortgage Refused Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-mashkanta.com/services/mortgage-refused#service",
        name: "מסורבי משכנתא",
        description: "פתרונות מקצועיים למסורבי משכנתא. טיפול בתיקים מורכבים, ניתוח דוח אשראי, והפיכת סירוב לאישור משכנתא.",
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
        category: "Mortgage Refused Solutions"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/services/mortgage-refused#webpage",
        url: "https://avi-mashkanta.com/services/mortgage-refused",
        name: "מסורבי משכנתא | אבי - הבית למשכנתאות",
        description: "פתרונות מקצועיים למסורבי משכנתא. טיפול בתיקים מורכבים והפיכת סירוב לאישור.",
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
              name: "מסורבי משכנתא",
              item: "https://avi-mashkanta.com/services/mortgage-refused"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "האם זה אומר שלעולם לא אקבל משכנתא?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ממש לא. נתוני האשראי השליליים נשמרים ל-3 שנים. אבל גם בתוך התקופה הזו, ניתן לקבל משכנתא אם יודעים להציג \"בטוחות\" חזקות או ערבים תומכים."
            }
          },
          {
            "@type": "Question",
            name: "האם הריבית שלי תהיה גבוהה יותר?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "בכנות? כן. בגלל שהבנק רואה בכם \"סיכון\", הריבית הראשונית עשויה להיות גבוהה מהממוצע. אבל - וזה אבל חשוב: המטרה שלי היא להכניס אתכם לנכס. בעוד שנתיים, כשההתנהלות שלכם תהיה תקינה, אנחנו נבצע מיחזור משכנתא ונחזיר את הריביות לרמה רגילה. זה עדיף מלוותר על הדירה."
            }
          },
          {
            "@type": "Question",
            name: "האם אתה מטפל גם בפושטי רגל?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "אלו מקרים מורכבים מאוד, אך יש פתרונות. גם לאחר פשיטת רגל (חדלות פירעון), ניתן לחזור למעגל האשראי לאחר תקופת צינון מסוימת ועם בנייה נכונה של פרופיל הלקוח."
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

export default function MortgageRefusedPage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "שירותים", href: "/services" },
    { label: "מסורבי בנקים ומורכבות", href: "/services/mortgage-refused" },
  ];

  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <RefusedHero />
        <Breadcrumbs items={breadcrumbItems} />
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

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
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

// JSON-LD Structured Data for Reverse Mortgage Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-mashkanta.com/services/reverse-mortgage#service",
        name: "משכנתא הפוכה",
        description: "משכנתא הפוכה לגיל הפנסיה. קבלו הכנסה חודשית מהבית שלכם בלי למכור אותו. ליווי מקצועי ותכנון פיננסי חכם.",
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
        category: "Reverse Mortgage"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/services/reverse-mortgage#webpage",
        url: "https://avi-mashkanta.com/services/reverse-mortgage",
        name: "משכנתא הפוכה | אבי - הבית למשכנתאות",
        description: "משכנתא הפוכה לגיל הפנסיה. קבלו הכנסה חודשית מהבית שלכם.",
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
              name: "משכנתא הפוכה",
              item: "https://avi-mashkanta.com/services/reverse-mortgage"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "מהי משכנתא הפוכה?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "משכנתא הפוכה היא הלוואה שמאפשרת לנצל את ערך הבית שלכם, מבלי לוותר על הבעלות או לעבור דירה. הכסף ניתן לשימוש אישי, ולרוב אין צורך בהחזר חודשי – החוב נצבר ומשולם רק במכירת הבית או באמצעים אחרים."
            }
          },
          {
            "@type": "Question",
            name: "מי זכאי למשכנתא הפוכה?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "הלוואה זו מיועדת לבעלי נכס מעל גיל 55 – יחיד או זוג (גם הצעיר מבין הזוג צריך להיות מעל גיל 55). הנכס שברשותכם משמש כבטוחה להלוואה."
            }
          },
          {
            "@type": "Question",
            name: "למה כדאי לקחת משכנתא הפוכה דווקא עם יועץ פרטי?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "יועץ פרטי בונה את העסקה לפי האיפיון הכלכלי שלכם, בודק חלופות זולות יותר, שומר על הנכס שתרצו להשאיר לילדים ומטפל בבירוקרטיה – כך שאתם מקבלים תכנון מותאם אישית ושקט נפשי."
            }
          },
          {
            "@type": "Question",
            name: "האם חייבים להחזיר כסף מיד?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "לא. ברוב המקרים אין החזרים חודשיים. ניתן לשלם ריבית בלבד או להחזיר קרן וריבית, לפי המסלול שתבחרו. ההלוואה נפרעת בדרך כלל בעת מכירת הבית או באמצעים אחרים."
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

export default function RenovationMortgagePage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "שירותים", href: "/#services" },
    { label: "משכנתא הפוכה", href: "/services/reverse-mortgage" },
  ];

  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <ReverseHero />
        <Breadcrumbs items={breadcrumbItems} />
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

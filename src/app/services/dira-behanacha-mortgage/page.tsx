import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import DiraHero from "./components/DiraHero";
import IntroDiraSection from "./components/IntroDiraSection";
import BigSecretSection from "./components/BigSecretSection";
import TrapSection from "./components/TrapSection";
import WhyAdvisorSection from "./components/WhyAdvisorSection";
import DiraFAQ from "./components/DiraFAQ";
import ClosingDiraCTA from "./components/ClosingDiraCTA";

// Lazy load components for better performance
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "משכנתא לדירה בהנחה (מחיר למשתכן) | אבי - הבית למשכנתאות",
  description:
    "זכיתם בדירה בהנחה? מדריך מלא למשכנתא לזוכים. הקדמת תשלומים, מדד תשומות בנייה, הלוואת זכאות ואסטרטגיית מימון חכמה. ליווי מקצועי מהאישור ועד המפתח.",
  keywords: [
    "דירה בהנחה",
    "מחיר למשתכן",
    "משכנתא דירה בהנחה",
    "מדד תשומות הבנייה",
    "הלוואת זכאות",
    "הקדמת תשלומים",
    "גרייס משכנתא",
    "יועץ משכנתאות דירה בהנחה",
    "זוכי הגרלה דיור",
    "משכנתא למשתכן",
  ],
  alternates: {
    canonical: "https://avi-mashkanta.com/services/dira-behanacha-mortgage",
  },
  openGraph: {
    title: "משכנתא לדירה בהנחה (מחיר למשתכן) | אבי - הבית למשכנתאות",
    description: "זכיתם בדירה בהנחה? מדריך מלא למשכנתא לזוכים עם אסטרטגיית מימון חכמה וליווי מקצועי.",
    url: "https://avi-mashkanta.com/services/dira-behanacha-mortgage",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "משכנתא לדירה בהנחה - אבי הבית למשכנתאות",
      },
    ],
  },
};

// JSON-LD Structured Data for Dira Behanacha Mortgage Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-mashkanta.com/services/dira-behanacha-mortgage#service",
        name: "משכנתא לדירה בהנחה",
        description: "משכנתא מותאמת לזוכים בדירה בהנחה (מחיר למשתכן). ליווי מקצועי, הקדמת תשלומים, טיפול במדד תשומות הבנייה והלוואת זכאות.",
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
        category: "Dira Behanacha Mortgage"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/services/dira-behanacha-mortgage#webpage",
        url: "https://avi-mashkanta.com/services/dira-behanacha-mortgage",
        name: "משכנתא לדירה בהנחה | אבי - הבית למשכנתאות",
        description: "משכנתא מותאמת לזוכים בדירה בהנחה עם ליווי מקצועי והקדמת תשלומים.",
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
              name: "משכנתא לדירה בהנחה",
              item: "https://avi-mashkanta.com/services/dira-behanacha-mortgage"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "מתי צריך להתחיל את תהליך המשכנתא?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "מיד לאחר הכנס הזוכים ובחירת הדירה. יש לכם לו\"ז צפוף לחתימת חוזה ותשלום ראשון. אל תחכו לרגע האחרון, כי אישורים עקרוניים בפרויקטים האלו לוקחים זמן."
            }
          },
          {
            "@type": "Question",
            name: "האם אפשר למכור את הדירה?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ברוב תוכניות \"דירה בהנחה\" חל איסור למכור את הדירה במשך 5 שנים מקבלת המפתח או 7 שנים מהזכייה (המוקדם מביניהם). עם זאת, ניתן להשכיר אותה. אני עוזר לכם לחשב את הכדאיות הכלכלית של המהלך לטווח הארוך."
            }
          },
          {
            "@type": "Question",
            name: "האם כדאי לקחת את הלוואת הזכאות של משרד השיכון?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "כמעט תמיד כן. הלוואת הזכאות נותנת ריבית צמודה אך נמוכה יחסית, וחשוב מכך - היא מאפשרת פירעון מוקדם ללא קנסות. אני אבדוק עבורכם את גובה הזכאות המדויק ואשלב אותה בתמהיל."
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

export default function DiraBehanaChaMortgagePage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "שירותים", href: "/#services" },
    { label: "מחיר למשתכן", href: "/services/dira-behanacha-mortgage" },
  ];

  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <DiraHero />
        <Breadcrumbs items={breadcrumbItems} />
        <IntroDiraSection />
        <BigSecretSection />
        <TrapSection />
        <WhyAdvisorSection />
        <ClosingDiraCTA />
        <Contact />
        <DiraFAQ />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

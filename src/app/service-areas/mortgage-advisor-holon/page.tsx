import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import HolonHero from "./components/HolonHero/HolonHero";
import HolonIntroSection from "./components/HolonIntroSection/HolonIntroSection";
import HolonWhyAdvisorSection from "./components/HolonWhyAdvisorSection/HolonWhyAdvisorSection";
import HolonAudienceSections from "./components/HolonAudienceSections/HolonAudienceSections";
import HolonServicesSection from "./components/HolonServicesSection/HolonServicesSection";
import HolonProcessSection from "./components/HolonProcessSection/HolonProcessSection";
import HolonClosingCTA from "./components/HolonClosingCTA/HolonClosingCTA";
import HolonFAQ from "./components/HolonFAQ/HolonFAQ";

const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "יועץ משכנתאות מומלץ בחולון | בונים לכם משכנתא חכמה | אבי",
  description:
    "מחפשים יועץ משכנתאות בחולון? אבי בוקעי, בנקאי לשעבר, מציע ייעוץ למשכנתא שיחסוך לכם המון כסף. מומחיות בתכנון משכנתא חכמה, איחוד הלוואות ועוד. השאירו פרטים!",
  keywords: [
    "יועץ משכנתאות בחולון",
    "יועץ משכנתאות מומלץ",
    "יועצי משכנתאות",
    "ייעוץ למשכנתא",
    "יועצי משכנתאות בחולון",
    "איחוד הלוואות",
    "משכנתא חכמה",
  ],
  alternates: {
    canonical: "https://avi-mashkanta.com/service-areas/mortgage-advisor-holon",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/service-areas/mortgage-advisor-holon",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "יועץ משכנתאות בחולון - אבי הבית למשכנתאות",
      },
    ],
  },
};

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-mashkanta.com/service-areas/mortgage-advisor-holon#service",
        name: "ייעוץ משכנתאות בחולון",
        description:
          "ייעוץ משכנתאות מומלץ בחולון: תכנון משכנתא חכמה, מכרז ריביות, איחוד הלוואות ומחזור – ליווי מלא מול הבנקים.",
        provider: {
          "@id": "https://avi-mashkanta.com/#organization",
        },
        areaServed: [{ "@type": "City", name: "חולון" }],
        serviceType: "Financial Service",
        category: "Mortgage advisory",
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/service-areas/mortgage-advisor-holon#webpage",
        url: "https://avi-mashkanta.com/service-areas/mortgage-advisor-holon",
        name: "יועץ משכנתאות מומלץ בחולון | בונים לכם משכנתא חכמה | אבי",
        description:
          "מחפשים יועץ משכנתאות בחולון? אבי בוקעי, בנקאי לשעבר, מציע ייעוץ למשכנתא שיחסוך לכם המון כסף. מומחיות בתכנון משכנתא חכמה, איחוד הלוואות ועוד.",
        inLanguage: "he-IL",
        isPartOf: { "@id": "https://avi-mashkanta.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "דף הבית",
              item: "https://avi-mashkanta.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "אזורי שירות",
              item: "https://avi-mashkanta.com/service-areas",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "יועץ משכנתאות בחולון",
              item: "https://avi-mashkanta.com/service-areas/mortgage-advisor-holon",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "האם אני חייב לקחת משכנתא בסניף בנק בחולון?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ממש לא. כשאנחנו יוצאים למכרז ריביות, אנחנו לא מוגבלים גיאוגרפית כלל. אני בודק סניפים בכל אזור המרכז, ואפילו ברמה הארצית, כדי להביא לכם את ההצעה הטובה והזולה ביותר. התפקיד שלי הוא לדאוג שתקבלו את הכסף בתנאים שלכם, מאיזה סניף שזה לא יהיה.",
            },
          },
          {
            "@type": "Question",
            name: "כמה הון עצמי צריך לדירה ממוצעת בחולון?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "עבור קניית דירה ראשונה תידרשו למינימום 25% הון עצמי. עם זאת, לאור מחירי הנדל\"ן שעולים באזורים המבוקשים בעיר, חשוב לבצע תכנון מקדים ומדויק כדי לוודא שיש לכם את הסכום הדרוש לא רק למשכנתא עצמה, אלא גם להוצאות הנלוות (שמאי, עו\"ד, מיסים, תיווך).",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function MortgageAdvisorHolonPage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "אזורי שירות", href: "/service-areas" },
    { label: "יועץ משכנתאות בחולון", href: "/service-areas/mortgage-advisor-holon" },
  ];

  return (
    <>
      <JsonLd />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HolonHero />
        <Breadcrumbs items={breadcrumbItems} />
        <HolonIntroSection />
        <HolonWhyAdvisorSection />
        <HolonAudienceSections />
        <HolonServicesSection />
        <HolonProcessSection />
        <HolonClosingCTA />
        <Contact />
        <HolonFAQ />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

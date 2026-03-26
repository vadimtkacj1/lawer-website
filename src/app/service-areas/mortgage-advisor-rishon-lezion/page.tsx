import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import RishonHero from "./components/RishonHero/RishonHero";
import RishonIntroSection from "./components/RishonIntroSection/RishonIntroSection";
import RishonAdvantagesSection from "./components/RishonAdvantagesSection/RishonAdvantagesSection";
import RishonDiraSection from "./components/RishonDiraSection/RishonDiraSection";
import RishonServicesSection from "./components/RishonServicesSection/RishonServicesSection";
import RishonProcessSection from "./components/RishonProcessSection/RishonProcessSection";
import RishonClosingCTA from "./components/RishonClosingCTA/RishonClosingCTA";
import RishonFAQ from "./components/RishonFAQ/RishonFAQ";

const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "יועץ משכנתאות בראשון לציון | בונים לכם משכנתא חכמה | אבי",
  description:
    'מחפשים יועץ משכנתאות מומלץ בראשון לציון? אבי בוקעי, בנקאי לשעבר, מציע ייעוץ משכנתאות בראשון לציון שיחסוך לכם המון כסף. מומחיות ב"דירה בהנחה", איחוד הלוואות בראשון לציון ומחזור. פנו עכשיו!',
  keywords: [
    "יועץ משכנתאות בראשון לציון",
    "יועץ משכנתאות מומלץ",
    "ייעוץ משכנתאות בראשון לציון",
    "יועצי משכנתאות ראשון לציון",
    "דירה בהנחה ראשון לציון",
    "מחיר למשתכן ראשון לציון",
    "איחוד הלוואות בראשון לציון",
    "מחזור משכנתא בראשון לציון",
    "משכנתא חכמה",
  ],
  alternates: {
    canonical: "https://avi-mashkanta.com/service-areas/mortgage-advisor-rishon-lezion",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/service-areas/mortgage-advisor-rishon-lezion",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "יועץ משכנתאות בראשון לציון - אבי הבית למשכנתאות",
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
        "@id": "https://avi-mashkanta.com/service-areas/mortgage-advisor-rishon-lezion#service",
        name: "ייעוץ משכנתאות בראשון לציון",
        description:
          "ייעוץ משכנתאות בראשון לציון: תכנון משכנתא חכמה, מחיר למשתכן, מכרז ריביות, איחוד הלוואות ומחזור – ליווי מלא מול הבנקים.",
        provider: {
          "@id": "https://avi-mashkanta.com/#organization",
        },
        areaServed: [{ "@type": "City", name: "ראשון לציון" }],
        serviceType: "Financial Service",
        category: "Mortgage advisory",
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/service-areas/mortgage-advisor-rishon-lezion#webpage",
        url: "https://avi-mashkanta.com/service-areas/mortgage-advisor-rishon-lezion",
        name: "יועץ משכנתאות בראשון לציון | בונים לכם משכנתא חכמה | אבי",
        description:
          'מחפשים יועץ משכנתאות מומלץ בראשון לציון? אבי בוקעי, בנקאי לשעבר, מציע ייעוץ משכנתאות בראשון לציון שיחסוך לכם המון כסף. מומחיות ב"דירה בהנחה", איחוד הלוואות בראשון לציון ומחזור.',
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
              name: "שירותים",
              item: "https://avi-mashkanta.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "יועץ משכנתאות בראשון לציון",
              item: "https://avi-mashkanta.com/service-areas/mortgage-advisor-rishon-lezion",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "האם כדי לקבל תנאים טובים כדאי לגשת לסניפי בנק בראשון לציון בלבד?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ממש לא. כחלק משירות ייעוץ למשכנתא, אנו מבצעים מכרז ריביות בפריסה ארצית. לעיתים סניף בנק בצפון או בדרום יכול לתת הצעה טובה יותר עבור נכס בראשון לציון, ואנו נדע להשיג לכם אותה.",
            },
          },
          {
            "@type": "Question",
            name: "כמה הון עצמי נדרש למשפרי דיור בראשון לציון?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "משפרי דיור נדרשים להביא 30% הון עצמי. בתהליך של ייעוץ משכנתאות בראשון לציון, אנו בודקים האם ניתן למנף את הדירה הקיימת שלכם כדי להקל על המעבר לדירה החדשה מבלי להוציא כספים מהחסכונות.",
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

export default function MortgageAdvisorRishonLezionPage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "שירותים", href: "/services" },
    { label: "יועץ משכנתאות בראשון לציון", href: "/service-areas/mortgage-advisor-rishon-lezion" },
  ];

  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <RishonHero />
        <Breadcrumbs items={breadcrumbItems} />
        <RishonIntroSection />
        <RishonAdvantagesSection />
        <RishonDiraSection />
        <RishonServicesSection />
        <RishonProcessSection />
        <RishonClosingCTA />
        <Contact />
        <RishonFAQ />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

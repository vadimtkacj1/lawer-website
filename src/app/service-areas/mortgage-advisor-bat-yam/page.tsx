import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import BatYamHero from "./components/BatYamHero/BatYamHero";
import BatYamIntroSection from "./components/BatYamIntroSection/BatYamIntroSection";
import BatYamWhyAdvisorSection from "./components/BatYamWhyAdvisorSection/BatYamWhyAdvisorSection";
import BatYamAudienceSections from "./components/BatYamAudienceSections/BatYamAudienceSections";
import BatYamServicesSection from "./components/BatYamServicesSection/BatYamServicesSection";
import BatYamProcessSection from "./components/BatYamProcessSection/BatYamProcessSection";
import BatYamClosingCTA from "./components/BatYamClosingCTA/BatYamClosingCTA";
import BatYamFAQ from "./components/BatYamFAQ/BatYamFAQ";

const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "יועץ משכנתאות מומלץ בבת ים | בונים לכם משכנתא חכמה | אבי",
  description:
    "מחפשים יועץ משכנתאות מומלץ בבת ים? אבי בוקעי, יוצא המערכת הבנקאית, מציע ייעוץ למשכנתא שיחסוך לכם המון כסף. מומחיות בתכנון משכנתא חכמה, איחוד הלוואות בבת ים ועוד. השאירו פרטים!",
  keywords: [
    "יועץ משכנתאות בבת ים",
    "יועץ משכנתאות מומלץ",
    "יועצי משכנתאות בת ים",
    "ייעוץ למשכנתא",
    "איחוד הלוואות בבת ים",
    "משכנתא חכמה",
    "מחזור משכנתא בבת ים",
    "משכנתא להשקעה בת ים",
  ],
  alternates: {
    canonical: "https://avi-mashkanta.com/service-areas/mortgage-advisor-bat-yam",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/service-areas/mortgage-advisor-bat-yam",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "יועץ משכנתאות בבת ים - אבי הבית למשכנתאות",
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
        "@id": "https://avi-mashkanta.com/service-areas/mortgage-advisor-bat-yam#service",
        name: "ייעוץ משכנתאות בבת ים",
        description:
          "ייעוץ משכנתאות מומלץ בבת ים: תכנון משכנתא חכמה, מכרז ריביות, איחוד הלוואות ומחזור – ליווי מלא מול הבנקים.",
        provider: {
          "@id": "https://avi-mashkanta.com/#organization",
        },
        areaServed: [{ "@type": "City", name: "בת ים" }],
        serviceType: "Financial Service",
        category: "Mortgage advisory",
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/service-areas/mortgage-advisor-bat-yam#webpage",
        url: "https://avi-mashkanta.com/service-areas/mortgage-advisor-bat-yam",
        name: "יועץ משכנתאות מומלץ בבת ים | בונים לכם משכנתא חכמה | אבי",
        description:
          "מחפשים יועץ משכנתאות מומלץ בבת ים? אבי בוקעי, יוצא המערכת הבנקאית, מציע ייעוץ למשכנתא שיחסוך לכם המון כסף. מומחיות בתכנון משכנתא חכמה, איחוד הלוואות בבת ים ועוד.",
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
              name: "יועץ משכנתאות בבת ים",
              item: "https://avi-mashkanta.com/service-areas/mortgage-advisor-bat-yam",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "האם כדאי לקנות דירה ישנה בבת ים להשקעה?",
            acceptedAnswer: {
              "@type": "Answer",
              text: 'בהחלט. בת ים מובילה את טבלת ההתחדשות עירונית בישראל. רכישת דירה ישנה באזורים עם פוטנציאל פינוי בינוי או תמ"א 38 יכולה להניב רווחי הון עצומים. אנו נלווה אתכם בבניית תמהיל מימון שייקח בחשבון את ההשבחה העתידית.',
            },
          },
          {
            "@type": "Question",
            name: "האם כדי למחזר משכנתא אני חייב לגשת לסניף הבנק שלי בבת ים?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "לא. כאשר אנו מבצעים עבורכם מחזור משכנתא בבת ים, אנו בודקים סניפים בכל רחבי הארץ. המטרה היא להביא לכם את ההצעה המשתלמת ביותר, ללא תלות במיקום הגיאוגרפי של סניף הבנק.",
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

export default function MortgageAdvisorBatYamPage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "יועץ משכנתאות בבת ים", href: "/service-areas/mortgage-advisor-bat-yam" },
  ];

  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <BatYamHero />
        <Breadcrumbs items={breadcrumbItems} />
        <BatYamIntroSection />
        <BatYamWhyAdvisorSection />
        <BatYamAudienceSections />
        <BatYamServicesSection />
        <BatYamProcessSection />
        <BatYamClosingCTA />
        <Contact />
        <BatYamFAQ />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

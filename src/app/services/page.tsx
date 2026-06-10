import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "כל שירותי המשכנתאות שלנו | אבי הבית למשכנתאות",
  description:
    "בחרו את השירות שהכי מתאים לכם: משכנתא לרכישת דירה, איחוד הלוואות, מסורבי בנקים, משכנתא לתושבי חוץ ועוד. ייעוץ מותאם אישית עם אבי בוקעי.",
  alternates: {
    canonical: "https://avi-mashkanta.com/services",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/services",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "כל שירותי המשכנתאות - אבי הבית למשכנתאות",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://avi-mashkanta.com/images/og-image.jpg"],
  },
};

const services = [
  {
    href: "/services/mortgage-for-purchase",
    title: "משכנתא לרכישת דירה",
    description: "תכנון מסלול חכם, מכרז ריביות וליווי מלא מול הבנקים.",
  },
  {
    href: "/services/loan-consolidation",
    title: "מחזור ואיחוד הלוואות",
    description: "איחוד הלוואות יקרות למסלול זול ומסודר, עם תזרים נשימה.",
  },
  {
    href: "/services/debt-consolidation",
    title: "משכנתא לכל מטרה",
    description: "מינוף נכס קיים להשגת הון עצמי, השקעות או סגירת חובות.",
  },
  {
    href: "/services/mortgage-refused",
    title: "מסורבי בנקים ומורכבות",
    description: "פתרונות למצבים מורכבים, הסדרי חוב וריביות מותאמות סיכון.",
  },
  {
    href: "/services/foreign-mortgages",
    title: "משכנתא לתושבי חוץ",
    description: "ליווי דובר עברית באנגלית מלאה, התאמת דרישות הבנק ללקוחות חו\"ל.",
  },
  {
    href: "/services/dira-behanacha-mortgage",
    title: "מחיר למשתכן / דירה בהנחה",
    description: "היערכות נכונה לזכייה והגשת מסלולי מימון אופטימליים.",
  },
  {
    href: "/services/renovation-mortgage",
    title: "משכנתא לשיפוץ",
    description: "שחרור כספים בשלבים וליווי מול שמאי לשדרוג הנכס בביטחון.",
  },
  {
    href: "/services/reverse-mortgage",
    title: "משכנתא הפוכה",
    description: "פתרון נזילות לפנסיונרים תוך שמירה על הבעלות בבית.",
  },
];

function ServicesJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://avi-mashkanta.com${service.href}`,
      name: service.title,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function ServicesPage() {
  return (
    <>
      <ServicesJsonLd />
      <Header />
      <main className="bg-cream min-h-screen py-24 px-6" dir="rtl">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-black text-blue-dk mb-6 leading-tight">
            כל שירותי המשכנתאות שלנו
          </h1>
          <p className="text-lg text-gray-700 mb-16 max-w-2xl">
            בחרו את השירות המתאים לכם. אבי בוקעי, יועץ משכנתאות מנוסה בחולון והמרכז, ילווה אתכם
            בכל שלב — מאישור עקרוני ועד קבלת המפתח.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full"
                >
                  <h2 className="text-xl font-bold text-blue-dk mb-2">{service.title}</h2>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

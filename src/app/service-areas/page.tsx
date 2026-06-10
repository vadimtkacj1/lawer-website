import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "יועץ משכנתאות לפי אזור | תל אביב, חולון, בת ים, ראשון לציון | אבי",
  description:
    "מצאו יועץ משכנתאות מומלץ באזור שלכם: תל אביב, חולון, בת ים, ראשון לציון. התאמה אישית למאפייני השוק המקומי, מכרזי ריביות וליווי בנקאי מלא.",
  alternates: {
    canonical: "https://avi-mashkanta.com/service-areas",
  },
};

const serviceAreas = [
  {
    href: "/service-areas/mortgage-advisor-tel-aviv",
    title: "יועץ משכנתאות בתל אביב",
    description: "ייעוץ למשכנתאות בשוק הנדל״ן הסוער ביותר בישראל. מומחיות ברוכשים ראשונים, משקיעים ותושבי חוץ.",
  },
  {
    href: "/service-areas/mortgage-advisor-holon",
    title: "יועץ משכנתאות בחולון",
    description: "מכרז ריביות רחב באזור המרכז, תכנון תזרים ופתרונות למשפרי דיור.",
  },
  {
    href: "/service-areas/mortgage-advisor-bat-yam",
    title: "יועץ משכנתאות בבת ים",
    description: "התאמת מסלולים למחירי הדירות בעיר המתחדשת ולפרויקטי התחדשות עירונית.",
  },
  {
    href: "/service-areas/mortgage-advisor-rishon-lezion",
    title: "יועץ משכנתאות בראשון לציון",
    description: "ליווי משקיעים ומשפרי דיור, דגש על שכונות חדשות וצמודי קרקע.",
  },
];

function ServiceAreasJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: serviceAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://avi-mashkanta.com${area.href}`,
      name: area.title,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function ServiceAreasPage() {
  return (
    <>
      <ServiceAreasJsonLd />
      <Header />
      <main className="bg-cream min-h-screen py-24 px-6" dir="rtl">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-black text-blue-dk mb-6 leading-tight">
            יועץ משכנתאות לפי אזור
          </h1>
          <p className="text-lg text-gray-700 mb-16 max-w-2xl">
            תל אביב, חולון, בת ים, ראשון לציון — ייעוץ משכנתאות עם היכרות מעמיקה של שוק הנדל&quot;ן
            המקומי, מחירי הדירות, וסניפי הבנקים הפעילים בכל עיר.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {serviceAreas.map((area) => (
              <li key={area.href}>
                <Link
                  href={area.href}
                  className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full"
                >
                  <h2 className="text-xl font-bold text-blue-dk mb-2">{area.title}</h2>
                  <p className="text-gray-600 text-sm">{area.description}</p>
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

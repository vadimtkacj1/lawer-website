import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";

const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

const SERVICE_LINKS: { href: string; title: string; description: string }[] = [
  {
    href: "/services/mortgage-for-purchase",
    title: "משכנתא לרכישת דירה",
    description: "ליווי לדירה ראשונה, להשקעה או דירה חליפית בתכנון נכון",
  },
  {
    href: "/services/mortgage-advisor-holon",
    title: "יועץ משכנתאות בחולון",
    description: "תכנון משכנתא חכמה, שכונות ושמאות – ייעוץ מקומי",
  },
  {
    href: "/services/mortgage-advisor-bat-yam",
    title: "יועץ משכנתאות בבת ים",
    description: "ייעוץ ומימון מותאם לעיר החוף",
  },
  {
    href: "/services/mortgage-advisor-rishon-lezion",
    title: "יועץ משכנתאות בראשון לציון",
    description: "מחיר למשתכן, מחזור ואיחוד – ייעוץ בעיר המבוקשת",
  },
  {
    href: "/services/dira-behanacha-mortgage",
    title: "מחיר למשתכן",
    description: "ליווי זוכים בדירה בהנחה – מדד תשומות והון עצמי",
  },
  {
    href: "/services/loan-consolidation",
    title: "מחזור ואיחוד הלוואות",
    description: "שיפור תנאים והפחתת ההחזר החודשי",
  },
  {
    href: "/services/reverse-mortgage",
    title: "משכנתא הפוכה",
    description: "פתרונות לגיל השלישי – ללא החזר חודשי שוטף",
  },
  {
    href: "/services/mortgage-refused",
    title: "מסורבי בנקים ומורכבות",
    description: "פתרונות כשהבנק אמר לא",
  },
  {
    href: "/services/renovation-mortgage",
    title: "משכנתא לשיפוץ",
    description: "מימון שיפוץ בתנאי משכנתא",
  },
  {
    href: "/services/foreign-mortgages",
    title: "משכנתא לתושבי חוץ",
    description: "רכישת נכס בישראל מחו\"ל",
  },
  {
    href: "/services/debt-consolidation",
    title: "משכנתא לכל מטרה",
    description: "איחוד חובות לתוך המשכנתא",
  },
];

export const metadata: Metadata = {
  title: "שירותי משכנתא וייעוץ | אבי - הבית למשכנתאות",
  description:
    "כל שירותי הייעוץ והמימון: משכנתא לרכישת דירה, מחיר למשתכן, מחזור ואיחוד הלוואות, משכנתא הפוכה, תושבי חוץ ועוד. אזור חולון והמרכז.",
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
        alt: "שירותי משכנתא - אבי הבית למשכנתאות",
      },
    ],
  },
};

export default function ServicesIndexPage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "שירותים", href: "/services" },
  ];

  return (
    <>
      <Header />
      <main dir="rtl">
        <section className="bg-cream pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
            <h1 className="font-noto-sans-hebrew font-black text-3xl md:text-5xl lg:text-6xl text-blue-dk leading-tight mb-4">
              השירותים שלנו
            </h1>
            <p className="text-lg md:text-xl text-blue-dk/80 max-w-3xl mx-auto leading-relaxed">
              ייעוץ משכנתאות מקצועי, מכרז ריביות וליווי מלא מול הבנקים – בחרו את השירות המתאים לכם.
            </p>
          </div>
        </section>
        <Breadcrumbs items={breadcrumbItems} />
        <section className="bg-cream pb-16 md:pb-24" dir="rtl">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {SERVICE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="block h-full rounded-2xl border border-blue-dk/10 bg-white p-6 shadow-sm transition-all hover:border-orange/40 hover:shadow-md text-right"
                  >
                    <span className="font-noto-sans-hebrew font-black text-lg md:text-xl text-blue-dk group-hover:text-orange">
                      {s.title}
                    </span>
                    <p className="mt-2 text-sm md:text-base text-blue-dk/70 leading-relaxed">{s.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

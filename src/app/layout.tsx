import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/components/ui/CursorFollower";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import FullScreenLoader from "@/components/ui/FullScreenLoader";

// Hebrew-friendly font with next/font for optimal loading
const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heebo",
  display: "swap",
});

// Base metadata - can be extended per page
export const metadata: Metadata = {
  metadataBase: new URL("https://avi-home.co.il"),
  title: {
    default: "אבי - הבית למשכנתאות | מומחה לייעוץ וחיסכון",
    template: "%s | אבי - הבית למשכנתאות",
  },
  description:
    "ייעוץ משכנתאות מקצועי ואובייקטיבי באזור חולון והמרכז. חיסכון ממוצע של 180,000 ש״ח למשפחה. ליווי משפטי מלא, התמחות במסורבי בנק.",
  keywords: [
    "יועץ משכנתאות",
    "משכנתא",
    "מחזור משכנתא",
    "יועץ משכנתאות חולון",
    "יועץ משכנתאות בת ים",
    "יועץ משכנתאות תל אביב",
    "יועץ משכנתאות ראשון לציון",
    "משכנתא לדירה ראשונה",
    "ייעוץ משכנתאות",
    "חיסכון במשכנתא",
    "משפטן פיננסי",
    "מסורבי בנק",
    "מחזור משכנתא חולון",
    "ייעוץ משכנתאות מקצועי",
    "משכנתא למשקיעים",
    "ליווי משפטי משכנתא",
  ],
  authors: [{ name: "אבי - הבית למשכנתאות" }],
  creator: "אבי - הבית למשכנתאות",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://avi-home.co.il",
    siteName: "אבי - הבית למשכנתאות",
    title: "אבי - הבית למשכנתאות | מומחה לייעוץ וחיסכון",
    description:
      "ייעוץ משכנתאות מקצועי ואובייקטיבי. חיסכון ממוצע של 180,000 ש״ח למשפחה.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "אבי - הבית למשכנתאות",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "אבי - הבית למשכנתאות | מומחה לייעוץ וחיסכון",
    description:
      "ייעוץ משכנתאות מקצועי ואובייקטיבי. חיסכון ממוצע של 180,000 ש״ח למשפחה.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={heebo.variable}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for social media */}
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
            <body className="font-heebo antialiased">
              <FullScreenLoader />
              <SmoothScrollProvider />
              <CursorFollower />
              {children}
            </body>
    </html>
  );
}

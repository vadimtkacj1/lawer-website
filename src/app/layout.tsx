import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./styles/mobile.css";
import { MotionConfig } from "framer-motion";
import FullScreenLoader from "@/components/ui/FullScreenLoader";
import ClientEffects from "@/components/ui/ClientEffects";
import localFont from "next/font/local";
import Script from "next/script";

// Load local Noto Sans Hebrew variable font
const notoSansHebrew = localFont({
  src: "./fonts/NotoSansHebrew-VariableFont_wdth,wght.ttf",
  variable: "--font-noto-sans-hebrew",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: false,
});

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1c3664",
};

// Base metadata - can be extended per page
export const metadata: Metadata = {
  metadataBase: new URL("https://avi-mashkanta.com"),
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
    url: "https://avi-mashkanta.com",
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
    >
      <head>
        {/* Favicon - multiple formats for better browser support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        {/* Preload critical assets */}
        <link rel="preload" href="/images/logo.svg" as="image" type="image/svg+xml" />
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://cdn.equalweb.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://access.equalweb.com" crossOrigin="anonymous" />
        {/* DNS prefetch for social media */}
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        {/* EqualWeb Accessibility Widget - now loaded via client component to prevent hydration issues */}
      </head>
      <body className={`${notoSansHebrew.variable} font-noto-sans-hebrew antialiased`}>
        {/* EqualWeb Accessibility Widget - loaded with lazy strategy for better performance */}
        <Script
          id="equalweb-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.interdeal = {
                  "sitekey": "7feb5155e8b4d2affe0ddef57d563c34",
                  "Position": "left",
                  "Menulang": "HE",
                  "domains": {
                    "js": "https://cdn.equalweb.com/",
                    "acc": "https://access.equalweb.com/"
                  },
                  "btnStyle": {
                    "vPosition": ["80%", "80%"],
                    "margin": ["0", "0"],
                    "scale": ["0.5", "0.5"],
                    "color": {
                      "main": "#1c4bb6",
                      "second": "#ffffff"
                    },
                    "icon": {
                      "type": 10,
                      "shape": "rounded",
                      "outline": false
                    }
                  }
                };
                
                // Load script only after page is interactive
                if (document.readyState === 'complete') {
                  loadEqualWeb();
                } else {
                  window.addEventListener('load', loadEqualWeb, { once: true });
                }
                
                function loadEqualWeb() {
                  var script = document.createElement('script');
                  script.src = 'https://cdn.equalweb.com/core/5.2.5/accessibility.js';
                  script.defer = true;
                  script.integrity = 'sha512-Zamp30ps601kXvZTcIYv1sytUc090mrEJD9rLuoWzEGqmB6t0XdLRgC/g5TznUleEBIMm6T3c6Baf/ExIYh/Hw==';
                  script.crossOrigin = 'anonymous';
                  script.setAttribute('data-cfasync', 'true');
                  (document.body || document.head).appendChild(script);
                }
              })();
            `,
          }}
        />
        <MotionConfig reducedMotion="user">
          <FullScreenLoader />
          <ClientEffects />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}

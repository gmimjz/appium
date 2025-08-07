import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "appium - Aplikacje, aplikacje, aplikacje",
  description:
    "W appium tworzymy nowoczesne strony i aplikacje internetowe, sklepy e-commerce oraz aplikacje mobilne i desktopowe. Zapewniamy kompleksową obsługę - od analizy i projektowania, po wdrożenie i utrzymanie. Postaw na jakość i rozwijaj się z nami.",
  keywords: [
    "appium",
    "aplikacje internetowe",
    "aplikacje mobilne",
    "aplikacje desktopowe",
    "strony internetowe",
    "sklepy e-commerce",
    "tworzenie aplikacji",
    "software house",
    "projektowanie UX",
    "wdrożenia IT",
    "tworzenie stron",
    "wsparcie techniczne",
    "rozwój oprogramowania",
    "aplikacje webowe",
    "sklepy internetowe",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  openGraph: {
    title: "appium - Aplikacje, aplikacje, aplikacje",
    description:
      "W appium tworzymy nowoczesne strony i aplikacje internetowe, sklepy e-commerce oraz aplikacje mobilne i desktopowe. Zapewniamy kompleksową obsługę - od analizy i projektowania, po wdrożenie i utrzymanie. Postaw na jakość i rozwijaj się z nami.",
    images: [
      {
        url: "image.jpg",
        width: 1200,
        height: 630,
        alt: "appium image",
      },
    ],
    url: "https://www.appium.pl/",
    type: "website",
    locale: "pl_PL",
  },
  alternates: {
    canonical: "https://www.appium.pl/",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "appium",
    url: "https://appium.pl",
    logo: "https://appium.pl/logo.png",
    email: "hello@appium.pl",
    description:
      "W appium tworzymy nowoczesne strony internetowe, aplikacje mobilne, desktopowe i sklepy e-commerce. Kompleksowa obsługa - od analizy po wdrożenie i utrzymanie.",
    sameAs: [
      "https://www.facebook.com/appium",
      "https://www.instagram.com/appium",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-MRNYSGJD5G" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </html>
  );
}

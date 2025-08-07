import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "appium - Aplikacje, aplikacje, aplikacje",
  description:
    "W appium tworzymy nowoczesne strony i aplikacje internetowe, sklepy e-commerce oraz aplikacje mobilne i desktopowe. Zapewniamy kompleksową obsługę - od analizy i projektowania, po wdrożenie i utrzymanie. Postaw na jakość i rozwijaj się z nami.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

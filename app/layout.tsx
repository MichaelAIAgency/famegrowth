import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";
import { CookieConsent } from "@/components/site/CookieConsent";

// next/font self-hosts + injects size-adjust to eliminate font-swap layout shift.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...buildMetadata({
    title:
      "OnlyFans Agentur für Creator | FameGrowth – Diskretes Management & Skalierung",
    path: "/",
  }),
  title: {
    default:
      "OnlyFans Agentur für Creator | FameGrowth – Diskretes Management & Skalierung",
    template: "%s | FameGrowth",
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "OnlyFans Agentur",
    "OnlyFans Management",
    "OnlyFans Agentur Deutschland",
    "OnlyFans Marketing",
    "OnlyFans Chatting",
    "OnlyFans Creator Management",
    "OnlyFans anonym",
    "OnlyFans skalieren",
  ],
  category: "business",
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-dvh font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <CookieConsent />
      </body>
    </html>
  );
}

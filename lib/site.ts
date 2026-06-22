// Central site configuration. Single source of truth for brand, nav, contact.

export const siteConfig = {
  name: "FameGrowth",
  // Legal entity (used in Impressum + JSON-LD).
  legalName: "FanGrowth GmbH",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://famegrowth.de",
  locale: "de_DE",
  tagline: "OnlyFans Agentur für Creator",
  description:
    "FameGrowth ist die diskrete OnlyFans Agentur aus Deutschland für ambitionierte Creator. Wir übernehmen Management, Content-Strategie, Chatting und Marketing und skalieren deinen Umsatz planbar.",
  // --- CONTACT -------------------------------------------------------------
  // Owner WhatsApp number, international format, digits only (no +, no spaces).
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "4915164183690",
  whatsappMessage:
    "Hi FameGrowth! Ich bin Creator und möchte mehr über euer Management erfahren.",
  email: "info@famegrowth.de",
  // --- SCARCITY ------------------------------------------------------------
  slotsLeft: 3,
  slotsMonth: "Juli 2026",
  // --- SOCIAL (used in JSON-LD sameAs) ------------------------------------
  social: {
    instagram: "https://instagram.com/famegrowth",
    tiktok: "https://tiktok.com/@famegrowth",
  },
} as const;

export const nav = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Rechner", href: "/#rechner" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Fallstudie", href: "/fallstudie" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
] as const;

/** Build a wa.me deep link with a prefilled message to the owner. */
export const buildWhatsappLink = (message?: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message ?? siteConfig.whatsappMessage,
  )}`;

export const whatsappLink = buildWhatsappLink();

export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;

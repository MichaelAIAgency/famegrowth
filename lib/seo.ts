import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "./site";

// Static OG image in /public. Used for social cards + JSON-LD.
const DEFAULT_OG = "/opengraph.png";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  /** Override OG image. If omitted, the static /opengraph.png is used. */
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

/** Build a consistent Metadata object for any page. */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image,
  type = "website",
  publishedTime,
  noIndex,
}: SeoInput = {}): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = image ?? DEFAULT_OG;
  const ogImages = [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }];
  return {
    title,
    description,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
    openGraph: {
      type,
      url: canonical,
      title: title ?? siteConfig.tagline,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: ogImages,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteConfig.tagline,
      description,
      images: [ogImage],
    },
  };
}

/** Organization + WebSite JSON-LD, rendered once in the root layout. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        description: siteConfig.description,
        slogan: "Diskret. Datengetrieben. Skalierbar.",
        logo: absoluteUrl("/favicon.png"),
        image: absoluteUrl(DEFAULT_OG),
        email: siteConfig.email,
        areaServed: "DE",
        knowsLanguage: ["de", "en"],
        sameAs: [siteConfig.social.instagram, siteConfig.social.tiktok],
        address: {
          "@type": "PostalAddress",
          addressCountry: "DE",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "de-DE",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };
}

/** FAQPage JSON-LD for the homepage FAQ block. */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** BreadcrumbList JSON-LD for inner pages. */
export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** Article JSON-LD for blog posts. */
export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    author: { "@type": "Organization", name: input.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/favicon.png") },
    },
    mainEntityOfPage: absoluteUrl(input.path),
    image: absoluteUrl(input.image ?? DEFAULT_OG),
  };
}

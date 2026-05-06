// Centralized JSON-LD generators. Each function returns a plain object that
// gets serialized into a <script type="application/ld+json"> tag.
//
// Why centralize: Google ranks better with consistent, validated structured
// data. One source of truth = no drift across pages.

const SITE_URL = "https://nps-france.com";
const BRAND = "NPS Acoustique";

export type Crumb = { name: string; url: string };

export function breadcrumbList(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : `${SITE_URL}${c.url}`,
    })),
  };
}

export type FaqItem = { question: string; answer: string };

export function faqPage(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  };
}

// Mont-de-Marsan HQ. The address fields are placeholders pending SIRET/full
// address finalization in mentions-legales. Once filled, update here too.
export function localBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BRAND,
    image: `${SITE_URL}/icon.png`,
    url: SITE_URL,
    telephone: "+33-5-58-77-55-89",
    email: "contact@nps-france.com",
    priceRange: "€€-€€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mont-de-Marsan",
      postalCode: "40000",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "AdministrativeArea", name: "Nouvelle-Aquitaine" },
    ],
    description:
      "Distributeur officiel Kraiburg en France. Solutions d'isolation acoustique et anti-vibratoire pour le bâtiment, le sport, l'hôtellerie et le bricolage.",
    sameAs: [],
  };
}

export type ArticleMeta = {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string; // ISO 8601
  dateModified?: string; // ISO 8601
  author?: string;
};

export function article(meta: ArticleMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.headline,
    description: meta.description,
    image: meta.image ? [meta.image] : undefined,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified ?? meta.datePublished,
    author: { "@type": "Organization", name: meta.author ?? BRAND },
    publisher: {
      "@type": "Organization",
      name: BRAND,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
    mainEntityOfPage: meta.url.startsWith("http") ? meta.url : `${SITE_URL}${meta.url}`,
  };
}

// Render helper: turn a JSON-LD object into the <script> markup.
export function jsonLdScript(obj: object) {
  return {
    __html: JSON.stringify(obj),
  };
}

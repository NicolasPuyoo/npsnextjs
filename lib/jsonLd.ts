// Centralized JSON-LD generators. Each function returns a plain object that
// gets serialized into a <script type="application/ld+json"> tag.
//
// Why centralize: Google ranks better with consistent, validated structured
// data. One source of truth = no drift across pages.

const SITE_URL = "https://nps-acoustique.fr";
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
      "Spécialiste de l'isolation acoustique et anti-vibratoire en France. Solutions pour le bâtiment, le sport, l'hôtellerie et le bricolage.",
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

// CollectionPage : pour les hubs catégorie qui listent plusieurs produits.
// Aide Google à comprendre que la page = listing, pas article. Active aussi
// les rich results "produits associés".
export function collectionPage(opts: {
  name: string;
  description: string;
  url: string;
  numberOfItems?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`,
    name: opts.name,
    description: opts.description,
    url: opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(opts.numberOfItems !== undefined && {
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: opts.numberOfItems,
      },
    }),
  };
}

// VideoObject : pour les vidéos hero du HeroCarousel. Active rich snippet
// vidéo + carousel vidéo dans Google. Description + thumbnailUrl obligatoires.
export type VideoMeta = {
  name: string;
  description: string;
  thumbnailUrl: string; // poster image (ou screenshot 1ère frame)
  contentUrl: string;   // URL du fichier MP4
  uploadDate: string;   // ISO 8601
  duration?: string;    // ISO 8601 duration (ex PT20S = 20 secondes)
};

export function videoObject(meta: VideoMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: meta.name,
    description: meta.description,
    thumbnailUrl: meta.thumbnailUrl.startsWith("http")
      ? meta.thumbnailUrl
      : `${SITE_URL}${meta.thumbnailUrl}`,
    contentUrl: meta.contentUrl.startsWith("http")
      ? meta.contentUrl
      : `${SITE_URL}${meta.contentUrl}`,
    uploadDate: meta.uploadDate,
    ...(meta.duration && { duration: meta.duration }),
    publisher: {
      "@type": "Organization",
      name: BRAND,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
  };
}

// SpeakableSpecification : pour les sections lisibles à voix haute par
// Google Assistant, Siri lookup, etc. Cible des H2 + leur paragraphe
// adjacent via CSS selector.
export function speakable(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  };
}

// WebSite + SearchAction enables Google sitelinks search box (rare but valuable
// for branded queries). Targets the on-site /produits search.
export function website() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/produits?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "fr-FR",
  };
}

export type ItemListEntry = { name: string; url: string };

// ItemList JSON-LD signals a curated list to Google. Used on /produits index
// page to help Google understand the catalog structure.
export function itemList(name: string, items: ItemListEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

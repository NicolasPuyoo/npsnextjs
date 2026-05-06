// Local SEO landing pages. One per city/region NPS serves.
// These pages capture geo-modified queries ("isolation acoustique Bordeaux",
// "distributeur Kraiburg Mont-de-Marsan") with localized content + Service
// JSON-LD areaServed.

export type ZoneTestimonial = {
  client: string;
  project: string;
  location: string;
};

export type Zone = {
  slug: string; // URL slug
  city: string; // Display name
  region: string; // Région (e.g. "Nouvelle-Aquitaine")
  postalCode: string;
  isHQ?: boolean; // True for Mont-de-Marsan (siège)
  intro: string;
  whyHere: string; // Why a project in this city should pick NPS
  // Local context: nearby départements, big cities served
  serviceArea: string[];
  // Tailored sections
  highlights: string[];
  caseStudies: ZoneTestimonial[];
  // Featured product slugs (subset relevant to local market)
  featuredProductSlugs: string[];
};

export const zones: Zone[] = [
  {
    slug: "mont-de-marsan",
    city: "Mont-de-Marsan",
    region: "Nouvelle-Aquitaine",
    postalCode: "40000",
    isHQ: true,
    intro:
      "NPS Acoustique a son siège à Mont-de-Marsan, dans les Landes. Distributeur officiel Kraiburg en France, nous livrons les Landes, le Pays basque, le Béarn, le Gers et la Gironde sous 24-48h. Stock permanent de 45 références.",
    whyHere:
      "Basés au cœur des Landes, nous accompagnons les architectes, BET et entreprises BTP du Sud-Ouest depuis plus de 20 ans. Showroom sur RDV, échantillons gratuits, conseil technique acoustique sur projet.",
    serviceArea: [
      "Landes (40)",
      "Gironde (33)",
      "Pyrénées-Atlantiques (64)",
      "Gers (32)",
      "Lot-et-Garonne (47)",
      "Hautes-Pyrénées (65)",
    ],
    highlights: [
      "Showroom sur rendez-vous à Mont-de-Marsan",
      "Stock 45 références, livraison 24-48h en Nouvelle-Aquitaine",
      "Conseil acoustique pour vos projets neufs et rénovation",
      "Échantillons gratuits envoyés sous 48h",
      "Prix départ usine pour les pros (architectes, BET, entreprises générales)",
    ],
    caseStudies: [
      {
        client: "Hôtel 4* — Centre-ville Mont-de-Marsan",
        project: "Rénovation acoustique 38 chambres avec DAMTEC Black Uni B1 8 mm sous chape ciment. Conformité NRA L'nT,w ≤ 55 dB.",
        location: "Mont-de-Marsan (40)",
      },
      {
        client: "Salle de fitness — Dax",
        project: "Aménagement zone musculation 220 m² avec SPORTEC Base FR 15 mm et plateforme haltérophilie SPORTEC Absorber Pads.",
        location: "Dax (40)",
      },
      {
        client: "Cabinet d'architectes — Biarritz",
        project: "Spec acoustique pour résidence neuve 24 logements (DTU 52.10) : DAMTEC Standard 8 mm sur l'ensemble.",
        location: "Biarritz (64)",
      },
    ],
    featuredProductSlugs: [
      "damtec-standard",
      "damtec-black-uni-b1",
      "sportec-base-fr",
      "kraitec-step",
      "damtec-vibra-280",
    ],
  },
  {
    slug: "bordeaux",
    city: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    postalCode: "33000",
    intro:
      "Distributeur acoustique Kraiburg à proximité de Bordeaux et de la Gironde. Livraison sous 24-48h depuis notre dépôt de Mont-de-Marsan, conseil technique pour vos projets bordelais en logement collectif, hôtellerie, salles de sport et tertiaire.",
    whyHere:
      "Bordeaux et la métropole concentrent un grand nombre de projets de construction et de rénovation soumis à la NRA et à la RE2020. NPS apporte expertise produit Kraiburg + livraison rapide depuis Mont-de-Marsan, à 200 km de Bordeaux.",
    serviceArea: [
      "Bordeaux Métropole",
      "Médoc",
      "Bassin d'Arcachon",
      "Libournais",
      "Sud-Gironde",
    ],
    highlights: [
      "Livraison 24-48h sur tout le département Gironde (33)",
      "Conseil acoustique pour projets bordelais neufs et rénovation",
      "Sous-couches certifiées ATE conformes NRA / RE2020",
      "Sols de salle de sport pro pour les nombreux clubs et salles bordelais",
      "Solutions terrasses KRAITEC pour les rooftops et résidences haut de gamme",
    ],
    caseStudies: [
      {
        client: "Promoteur immobilier — Bordeaux",
        project: "Spec acoustique pour résidence neuve 60 logements R+5. DAMTEC Standard 8 mm sous chape ciment, conformité NRA assurée.",
        location: "Bordeaux (33)",
      },
      {
        client: "Hôtel boutique — Bassin d'Arcachon",
        project: "Rénovation 22 chambres et restaurant. DAMTEC Black Uni B1 sous parquet, KRAITEC Step pour la terrasse vue sur bassin.",
        location: "Arcachon (33)",
      },
      {
        client: "Crossfit box — Mérignac",
        project: "Aménagement complet 450 m² avec SPORTEC Base FR 20 mm et plateformes haltérophilie SPORTEC Absorber Pads.",
        location: "Mérignac (33)",
      },
    ],
    featuredProductSlugs: [
      "damtec-standard",
      "damtec-black-uni",
      "sportec-base-fr",
      "kraitec-step",
      "kraitec-top-plus",
    ],
  },
];

export const getZoneBySlug = (slug: string): Zone | undefined =>
  zones.find((z) => z.slug === slug);

export const allZoneSlugs = (): string[] => zones.map((z) => z.slug);

import type { Metadata } from "next";

export type PageSeo = {
  title: string;
  description: string;
  keywords?: string[];
};

const BRAND = "NPS Acoustique";

const COMMON_KEYWORDS = [
  "isolation acoustique",
  "isolation phonique",
  "anti-vibratoire",
  "NPS Acoustique",
];

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    title: `${BRAND} | Isolation acoustique et anti-vibratoire`,
    description:
      "Spécialiste de l'isolation acoustique et anti-vibratoire depuis plus de 20 ans. Produits Vibrafoam, Damtec, Kraitec, Sportec pour le bâtiment, le sport et le bricolage.",
    keywords: [...COMMON_KEYWORDS, "Vibrafoam", "Damtec", "Kraitec", "Sportec"],
  },

  "/batiment": {
    title: `Bâtiment & Industrie | ${BRAND}`,
    description:
      "Solutions acoustiques pour la construction, la rénovation et l'industrie. Isolation sous chape, anti-vibration, revêtements de sols et solutions extérieures.",
    keywords: [...COMMON_KEYWORDS, "isolation bâtiment", "isolation industrielle", "ATE"],
  },
  "/batiment/isolation-acoustique": {
    title: `Isolation acoustique et anti-vibratoire | ${BRAND}`,
    description:
      "Solutions DAMTEC vibra et VIBRAFOAM pour l'isolation acoustique et anti-vibratoire des bâtiments tertiaires, industriels et résidentiels. Performances jusqu'à 35 dB.",
    keywords: [...COMMON_KEYWORDS, "DAMTEC vibra", "VIBRAFOAM", "anti-vibratoire bâtiment"],
  },
  "/batiment/isolation-sous-chape": {
    title: `Isolation acoustique sous chape avec ATE | ${BRAND}`,
    description:
      "Sous-couches acoustiques certifiées ATE pour chape flottante. DAMTEC Standard, Black Uni, Estra. Conformes aux normes européennes pour bruits d'impact.",
    keywords: [...COMMON_KEYWORDS, "sous chape ATE", "chape flottante", "bruits d'impact"],
  },
  "/batiment/isolation-sans-ate": {
    title: `Isolation sous chape sans ATE | ${BRAND}`,
    description:
      "Solutions d'isolation sous chape adaptées aux projets ne nécessitant pas de certification ATE. NPS Top Acoustique Rubber Ecomat, Top Rubbercork.",
    keywords: [...COMMON_KEYWORDS, "chape sans ATE", "Rubbercork", "Ecomat"],
  },
  "/batiment/isolation-revetements-sols": {
    title: `Isolation sous revêtements de sols | ${BRAND}`,
    description:
      "Sous-couches isolantes pour parquet, laminé, moquette, carrelage et vinyle. DAMTEC Itapur, Wave 3D, Estra 3D avec marquage CE.",
    keywords: [...COMMON_KEYWORDS, "sous-couche parquet", "isolation laminé", "DAMTEC Itapur"],
  },
  "/batiment/solutions-exterieures": {
    title: `Solutions extérieures bâtiment | ${BRAND}`,
    description:
      "Solutions acoustiques pour façades, terrasses et toitures. Gamme KRAITEC : Step, Top, Protect, Sonic. Drainage, isolation et protection mécanique.",
    keywords: [...COMMON_KEYWORDS, "KRAITEC", "isolation toiture", "isolation terrasse"],
  },

  "/bricolage": {
    title: `Solutions acoustiques bricolage | ${BRAND}`,
    description:
      "Produits d'isolation phonique pour particuliers : tapis machine à laver, anti-vibration appareils, protections sol garage. Profimat, Top Vib Wash.",
    keywords: [...COMMON_KEYWORDS, "tapis machine à laver", "anti-vibration", "Profimat"],
  },

  "/sport": {
    title: `Sols sportifs et acoustique sport | ${BRAND}`,
    description:
      "Revêtements et sols sportifs pour fitness, gym, stand de tir, sports extérieurs et indoor. Solutions SPORTEC anti-bruit et anti-impact pour tous établissements.",
    keywords: [...COMMON_KEYWORDS, "sol sportif", "SPORTEC", "sol fitness"],
  },
  "/sport/fitness": {
    title: `Sols pour salles de fitness et gym | ${BRAND}`,
    description:
      "Revêtements anti-bruit et anti-vibration pour salles de fitness, musculation, cardio, yoga et entraînement fonctionnel. Gamme SPORTEC complète.",
    keywords: [...COMMON_KEYWORDS, "sol salle de sport", "sol musculation", "sol cardio"],
  },
  "/sport/fitness/cardio": {
    title: `Sols pour zone cardio | ${BRAND}`,
    description:
      "Revêtements adaptés aux zones cardio-training : tapis, vélos, elliptiques. Absorption d'impact et confort articulaire avec SPORTEC.",
    keywords: [...COMMON_KEYWORDS, "sol cardio", "tapis cardio salle"],
  },
  "/sport/fitness/halterophilie": {
    title: `Sols pour haltérophilie et musculation | ${BRAND}`,
    description:
      "Plateformes et sols résistants pour zones d'haltérophilie, deadlift, soulevé de terre. Protection sol + confort + acoustique avec SPORTEC.",
    keywords: [...COMMON_KEYWORDS, "sol haltérophilie", "plateforme musculation", "sol crossfit"],
  },
  "/sport/fitness/fonctionnel": {
    title: `Sols pour entraînement fonctionnel et cross-training | ${BRAND}`,
    description:
      "Revêtements polyvalents pour zones cross-training, entraînement fonctionnel et HIIT. Antichoc, antidérapant, hygiénique.",
    keywords: [...COMMON_KEYWORDS, "sol cross-training", "sol HIIT", "fonctionnel"],
  },
  "/sport/fitness/plein-air": {
    title: `Sols fitness et sport extérieur | ${BRAND}`,
    description:
      "Revêtements résistants aux UV et intempéries pour équipements fitness extérieurs, parcours santé et zones outdoor.",
    keywords: [...COMMON_KEYWORDS, "fitness extérieur", "sol outdoor"],
  },
  "/sport/fitness/yoga": {
    title: `Sols pour yoga, pilates et bien-être | ${BRAND}`,
    description:
      "Revêtements souples et accueillants pour studios de yoga, pilates, fitness doux et rééducation. Confort, hygiène et acoustique.",
    keywords: [...COMMON_KEYWORDS, "sol yoga", "sol pilates", "studio bien-être"],
  },
  "/sport/fitness/gymcoustic": {
    title: `Solution Gymcoustic — gym 3D modulaire | ${BRAND}`,
    description:
      "Concept Gymcoustic : salle de sport modulaire et acoustique clé en main. Isolation, revêtements, panneaux pour configurations sur mesure.",
    keywords: [...COMMON_KEYWORDS, "Gymcoustic", "gym modulaire", "salle de sport modulaire"],
  },

  "/sport/stand-tir": {
    title: `Acoustique pour stands de tir | ${BRAND}`,
    description:
      "Solutions d'absorption acoustique et anti-vibratoire pour stands de tir sportif et professionnel. Réduction du niveau sonore et confort des tireurs.",
    keywords: [...COMMON_KEYWORDS, "stand de tir", "acoustique tir sportif"],
  },
  "/sport/outdoor": {
    title: `Sports extérieurs et terrains outdoor | ${BRAND}`,
    description:
      "Revêtements pour terrains de tennis, basket, athlétisme, multi-jeux, golf, piscine et loisirs. Solutions SPORTEC et KRAITEC outdoor.",
    keywords: [...COMMON_KEYWORDS, "sol outdoor sport", "sol tennis", "sol multi-jeux"],
  },
  "/sport/outdoor/multi-jeux": {
    title: `Sols pour terrains multi-jeux | ${BRAND}`,
    description: "Revêtements polyvalents pour aires multi-jeux extérieures (city stade, playground, mini-terrain).",
    keywords: [...COMMON_KEYWORDS, "city stade", "multi-jeux", "playground"],
  },
  "/sport/outdoor/basket": {
    title: `Sols pour terrains de basket extérieurs | ${BRAND}`,
    description: "Revêtements résistants aux chocs et aux UV pour terrains de basket-ball outdoor. Confort, sécurité, durabilité.",
    keywords: [...COMMON_KEYWORDS, "sol basket", "terrain basket extérieur"],
  },
  "/sport/outdoor/tennis": {
    title: `Sols pour courts de tennis | ${BRAND}`,
    description: "Solutions de revêtements pour courts de tennis extérieurs et indoor. Absorption d'impact, drainage, longévité.",
    keywords: [...COMMON_KEYWORDS, "sol tennis", "court de tennis", "revêtement tennis"],
  },
  "/sport/outdoor/athletisme": {
    title: `Sols pour pistes et zones athlétisme | ${BRAND}`,
    description: "Revêtements pour pistes d'athlétisme, sauts et lancers. Solutions homologuées et conformes IAAF.",
    keywords: [...COMMON_KEYWORDS, "piste athlétisme", "sol athlétisme"],
  },
  "/sport/outdoor/sports-terrain": {
    title: `Sols pour sports de terrain | ${BRAND}`,
    description: "Revêtements pour terrains de football, rugby, hockey et autres sports de terrain. Drainage, durabilité, confort.",
    keywords: [...COMMON_KEYWORDS, "sol football", "sol rugby", "sport de terrain"],
  },
  "/sport/outdoor/piscine": {
    title: `Plages et abords de piscine antidérapants | ${BRAND}`,
    description:
      "Revêtements drainants et antidérapants pour plages de piscine, abords de bassins et espaces aquatiques. Confort pieds nus, hygiène, sécurité.",
    keywords: [...COMMON_KEYWORDS, "plage piscine", "antidérapant piscine", "abord bassin"],
  },
  "/sport/outdoor/loisirs": {
    title: `Sols pour aires de loisirs | ${BRAND}`,
    description: "Revêtements pour aires de jeux, parcs publics et espaces de loisirs. Sécurité enfants, antidérapant, longévité.",
    keywords: [...COMMON_KEYWORDS, "aire de jeux", "sol parc public"],
  },
  "/sport/outdoor/golf": {
    title: `Sols et tapis pour practice de golf | ${BRAND}`,
    description: "Revêtements pour zones de practice golf, putting green et chemins de circulation. Confort et durabilité.",
    keywords: [...COMMON_KEYWORDS, "practice golf", "sol golf"],
  },
  "/sport/indoor": {
    title: `Sports indoor : salles et gymnases | ${BRAND}`,
    description:
      "Revêtements de sols pour gymnases, salles de sport indoor et complexes multisport. Acoustique, antichoc, polyvalence.",
    keywords: [...COMMON_KEYWORDS, "gymnase", "salle multisport"],
  },
  "/sport/sports-hiver": {
    title: `Sports d'hiver : stations et patinoires | ${BRAND}`,
    description: "Solutions de revêtements pour stations de ski, patinoires et zones glissantes. Antidérapant, résistant au froid, drainant.",
    keywords: [...COMMON_KEYWORDS, "station de ski", "patinoire", "sport hiver"],
  },
  "/sport/sports-hiver/stations-ski": {
    title: `Revêtements pour stations de ski | ${BRAND}`,
    description: "Sols et revêtements pour zones de passage en stations de ski, refuges, terrasses extérieures. Antidérapants même verglas.",
    keywords: [...COMMON_KEYWORDS, "station ski", "antidérapant verglas"],
  },
  "/sport/sports-hiver/patinage": {
    title: `Revêtements patinoires | ${BRAND}`,
    description: "Solutions pour zones adjacentes aux patinoires (vestiaires, zones de passage). Antidérapant et résistant à l'humidité.",
    keywords: [...COMMON_KEYWORDS, "patinoire", "patinage"],
  },

  "/sport/commerce/bureaux": {
    title: `Acoustique et sols pour bureaux | ${BRAND}`,
    description: "Solutions acoustiques et revêtements pour bureaux, open spaces et espaces de travail. Confort sonore et productivité.",
    keywords: [...COMMON_KEYWORDS, "acoustique bureau", "open space"],
  },
  "/sport/commerce/magasins": {
    title: `Sols pour magasins et commerces | ${BRAND}`,
    description: "Revêtements résistants au passage intensif pour magasins, boutiques et espaces commerciaux. Esthétique et durabilité.",
    keywords: [...COMMON_KEYWORDS, "sol magasin", "sol commerce"],
  },
  "/sport/commerce/salons-evenements": {
    title: `Sols pour salons et événements | ${BRAND}`,
    description: "Revêtements modulaires pour salons professionnels, événements et hôtellerie. Mise en place rapide et confort acoustique.",
    keywords: [...COMMON_KEYWORDS, "salon événement", "stand modulaire"],
  },
  "/sport/commerce/reeducation": {
    title: `Sols pour rééducation et kinésithérapie | ${BRAND}`,
    description: "Revêtements adaptés aux cabinets de kinésithérapie, centres de rééducation et espaces médico-sportifs.",
    keywords: [...COMMON_KEYWORDS, "kinésithérapie", "rééducation"],
  },
  "/sport/commerce/ecoles-jardins": {
    title: `Sols pour écoles et jardins d'enfants | ${BRAND}`,
    description: "Revêtements sécurisés pour cours d'écoles, crèches et jardins d'enfants. Antichoc, antidérapant, hygiénique.",
    keywords: [...COMMON_KEYWORDS, "sol école", "cour récréation", "crèche"],
  },

  "/guide/fitness": {
    title: `Guide fitness : choisir son revêtement | ${BRAND}`,
    description:
      "Guide comparatif des revêtements pour cardio, musculation, yoga et fonctionnel. Trouvez le sol idéal selon votre activité et budget.",
    keywords: [...COMMON_KEYWORDS, "guide sol fitness", "comparatif sol gym"],
  },

  "/solutions": {
    title: `Solutions acoustiques par secteur | ${BRAND}`,
    description:
      "Solutions clé en main par type d'établissement : fitness/gym, hôtels, piscines, supermarchés, toitures, désolidarisation.",
    keywords: [...COMMON_KEYWORDS, "solution acoustique sectorielle"],
  },

  "/produits": {
    title: `Catalogue produits acoustiques | ${BRAND}`,
    description:
      "Catalogue complet des produits NPS Acoustique : 47 références Vibrafoam, Damtec, Kraitec, Sportec, Profimat. Recherche et filtres par catégorie.",
    keywords: [...COMMON_KEYWORDS, "catalogue acoustique", "produits anti-bruit"],
  },

  "/contact": {
    title: `Contact et devis acoustique | ${BRAND}`,
    description:
      "Contactez NPS Acoustique pour un devis ou un conseil expert. Téléphone : 05 58 77 55 89. Email : contact@nps-france.com. Réponse sous 24h.",
    keywords: [...COMMON_KEYWORDS, "devis acoustique", "contact NPS"],
  },

  "/mentions-legales": {
    title: `Mentions légales | ${BRAND}`,
    description: "Mentions légales, politique de confidentialité et conditions générales de vente de NPS Acoustique.",
  },
};

export function metaForRoute(route: string): Metadata {
  const seo = PAGE_SEO[route] ?? PAGE_SEO["/"];
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: route,
    },
  };
}

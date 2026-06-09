// Mapping des solutions vers leurs produits correspondants
import { Product, sportProducts, batimentProducts, industrieProducts, bricolageProducts } from "./products";

export interface SolutionData {
  id: string;
  title: string;
  description: string;
  heroDescription: string;
  products: Product[];
}

// Helper to find products by slug
const findBySlug = (products: Product[], slug: string) => products.find(p => p.slug === slug);
const findAllBySlugs = (slugs: string[]): Product[] => {
  const allSources = [...batimentProducts, ...sportProducts, ...industrieProducts, ...bricolageProducts];
  return slugs.map(s => allSources.find(p => p.slug === s)).filter((p): p is Product => !!p);
};

// Fitness / Gym - Produits SPORTEC uniquement
export const fitnessGymProducts = findAllBySlugs([
  "sportec-style",
  "sportec-color",
  "sportec-puzzle-2-0",
  "sportec-base-fr",
  "sportec-base-ms",
]);

// Hôtels - Isolation sous revêtements de sols + TOP RUBBERCORK + SONIC FIRE
export const hotelsProducts = findAllBySlugs([
  "damtec-black-uni",
  "damtec-black-uni-b1",
  "damtec-standard",
  "top-rubbercork",
  "damtec-itapur",
  "damtec-itapur-b1",
  "damtec-estra",
  "damtec-wave-3d",
]);

// Toitures et terrasses - KRAITEC + SONIC
export const toituresProducts = findAllBySlugs([
  "kraitec-top",
  "kraitec-top-plus",
  "kraitec-top-drain-plus",
  "kraitec-top-pv",
  "kraitec-step",
  "kraitec-step-color",
  "kraitec-step-cross",
  "kraitec-step-neon",
  "kraitec-step-plus",
  "kraitec-step-roof-pvc",
  "kraitec-step-roof-fpo",
  "kraitec-protect",
  "damtec-sonic",
  "damtec-sonic-drain-plus",
]);

// Piscine / Bassin aquatique - KRAITEC STEP + SONIC DRAIN PLUS + VIBRA
// Piscine : revêtements antidérapants drainants pour plages et abords de bassin (KRAITEC step + drainage)
export const piscineProducts = findAllBySlugs([
  "kraitec-step",
  "kraitec-step-color",
  "kraitec-step-cross",
  "kraitec-step-neon",
  "kraitec-step-plus",
  "damtec-sonic-drain-plus",
]);

// Supermarchés & commerces - Isolation sous chape + PROFIMAT + TOP ACOUSTIQUE
export const supermarchesProducts = findAllBySlugs([
  "damtec-estra",
  "damtec-estra-3d",
  "damtec-wave-3d",
  "damtec-3d-17-8",
  "damtec-itapur-b1",
  "damtec-black-uni-b1",
  "top-acoustique-rubber-ecomat",
]);

// Désolidarisation - VIBRA + VIBRAFOAM + VIBRADYN + PADS + TOP VIB WASH
export const desolidarisationProducts = findAllBySlugs([
  "damtec-vibra-30",
  "damtec-vibra-50",
  "damtec-vibra-100",
  "damtec-vibra-170",
  "damtec-vibra-280",
  "damtec-vibra-700",
  "damtec-vibra-1500",
  "vibrafoam",
  "vibradyn",
]);

export const solutionsData: SolutionData[] = [
  {
    id: "fitness-gym",
    title: "Fitness / Gym",
    description: "Solutions dédiées à l'absorption des chocs et au confort acoustique pour les zones de musculation et cardio.",
    heroDescription: "Découvrez notre gamme complète de produits pour équiper vos salles de sport et centres de fitness. Des revêtements de sol résistants aux impacts aux solutions anti-vibrations pour les équipements lourds.",
    products: fitnessGymProducts,
  },
  {
    id: "hotels",
    title: "Hôtels",
    description: "Priorité au silence et au confort de marche pour les chambres et espaces communs.",
    heroDescription: "Solutions d'isolation acoustique spécialement conçues pour le secteur hôtelier. Garantissez un confort optimal à vos clients avec nos produits d'isolation sous chape et sous revêtements de sols.",
    products: hotelsProducts,
  },
  {
    id: "toitures-terrasses",
    title: "Toitures et terrasses",
    description: "Protection des étanchéités et confort acoustique extérieur.",
    heroDescription: "Notre gamme KRAITEC offre des solutions durables pour les toitures-terrasses, alliant protection contre les intempéries, résistance aux UV et confort de marche.",
    products: toituresProducts,
  },
  {
    id: "piscine",
    title: "Piscine / Bassin aquatique",
    description: "Revêtements extérieurs sécurisés et drainants.",
    heroDescription: "Revêtements antidérapants et résistants à l'humidité pour piscines et espaces aquatiques. Sécurité, hygiène et durabilité garanties.",
    products: piscineProducts,
  },
  {
    id: "supermarches",
    title: "Supermarchés & commerces",
    description: "Résistance au trafic intense et réduction de la résonance.",
    heroDescription: "Revêtements de sol haute résistance pour surfaces commerciales. Réduisez la fatigue des employés et le bruit des chariots tout en protégeant vos sols.",
    products: supermarchesProducts,
  },
  {
    id: "desolidarisation",
    title: "Désolidarisation ponctuelle ou surfacique des bâtiments",
    description: "Ingénierie antivibratoire pour l'isolation des fondations et des structures.",
    heroDescription: "Solutions professionnelles d'isolation anti-vibratoire pour bâtiments. Protégez vos structures des vibrations et bruits solidiens avec notre gamme DAMTEC VIBRA.",
    products: desolidarisationProducts,
  },
];

export const getSolutionById = (id: string): SolutionData | undefined => {
  return solutionsData.find(s => s.id === id);
};

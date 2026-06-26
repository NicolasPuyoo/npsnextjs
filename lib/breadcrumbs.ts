import type { Crumb } from "./jsonLd";

// Centralized breadcrumb map — single source of truth pour les fils d'Ariane
// affichés dans le BreadcrumbList JSON-LD. Évite de dupliquer les libellés
// dans chaque layout. Si une nouvelle page hiérarchique est ajoutée, ajouter
// son entrée ici et appliquer breadcrumbsFor(path) dans son layout.tsx.
const BREADCRUMB_MAP: Record<string, Crumb[]> = {
  // Bâtiment
  "/batiment": [
    { name: "Accueil", url: "/" },
    { name: "Bâtiment", url: "/batiment" },
  ],
  "/batiment/isolation-acoustique": [
    { name: "Accueil", url: "/" },
    { name: "Bâtiment", url: "/batiment" },
    { name: "Isolation acoustique et anti-vibration", url: "/batiment/isolation-acoustique" },
  ],
  "/batiment/isolation-sous-chape": [
    { name: "Accueil", url: "/" },
    { name: "Bâtiment", url: "/batiment" },
    { name: "Isolation sous chape", url: "/batiment/isolation-sous-chape" },
  ],
  "/batiment/isolation-revetements-sols": [
    { name: "Accueil", url: "/" },
    { name: "Bâtiment", url: "/batiment" },
    { name: "Isolation sous revêtements de sols", url: "/batiment/isolation-revetements-sols" },
  ],
  "/batiment/isolation-sans-ate": [
    { name: "Accueil", url: "/" },
    { name: "Bâtiment", url: "/batiment" },
    { name: "Sous-couches sans ATE", url: "/batiment/isolation-sans-ate" },
  ],
  "/batiment/solutions-exterieures": [
    { name: "Accueil", url: "/" },
    { name: "Bâtiment", url: "/batiment" },
    { name: "Solutions extérieures et toitures", url: "/batiment/solutions-exterieures" },
  ],

  // Sport
  "/sport": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
  ],
  "/sport/fitness": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Fitness", url: "/sport/fitness" },
  ],
  "/sport/fitness/cardio": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Fitness", url: "/sport/fitness" },
    { name: "Cardio", url: "/sport/fitness/cardio" },
  ],
  "/sport/fitness/halterophilie": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Fitness", url: "/sport/fitness" },
    { name: "Haltérophilie", url: "/sport/fitness/halterophilie" },
  ],
  "/sport/fitness/fonctionnel": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Fitness", url: "/sport/fitness" },
    { name: "Entraînement fonctionnel", url: "/sport/fitness/fonctionnel" },
  ],
  "/sport/fitness/plein-air": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Fitness", url: "/sport/fitness" },
    { name: "Fitness plein air", url: "/sport/fitness/plein-air" },
  ],
  "/sport/fitness/gymcoustic": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Fitness", url: "/sport/fitness" },
    { name: "Gymcoustic", url: "/sport/fitness/gymcoustic" },
  ],
  "/sport/sports-hiver": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Sports d'hiver", url: "/sport/sports-hiver" },
  ],
  "/sport/sports-hiver/stations-ski": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Sports d'hiver", url: "/sport/sports-hiver" },
    { name: "Stations de ski", url: "/sport/sports-hiver/stations-ski" },
  ],
  "/sport/sports-hiver/patinage": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Sports d'hiver", url: "/sport/sports-hiver" },
    { name: "Patinage", url: "/sport/sports-hiver/patinage" },
  ],
  "/sport/stand-tir": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Stand de tir", url: "/sport/stand-tir" },
  ],
  "/sport/commerce/bureaux": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Commerce et tertiaire", url: "/sport" },
    { name: "Bureaux", url: "/sport/commerce/bureaux" },
  ],
  "/sport/commerce/magasins": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Commerce et tertiaire", url: "/sport" },
    { name: "Magasins", url: "/sport/commerce/magasins" },
  ],
  "/sport/commerce/salons-evenements": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Commerce et tertiaire", url: "/sport" },
    { name: "Salons et événements", url: "/sport/commerce/salons-evenements" },
  ],
  "/sport/commerce/reeducation": [
    { name: "Accueil", url: "/" },
    { name: "Sport", url: "/sport" },
    { name: "Commerce et tertiaire", url: "/sport" },
    { name: "Rééducation", url: "/sport/commerce/reeducation" },
  ],

  // Bricolage
  "/bricolage": [
    { name: "Accueil", url: "/" },
    { name: "Bricolage", url: "/bricolage" },
  ],

  // Hub marque
  "/damtec": [
    { name: "Accueil", url: "/" },
    { name: "DAMTEC®", url: "/damtec" },
  ],
};

/**
 * Retourne les crumbs pour un path donné. Si le path n'est pas mappé,
 * retourne juste [Accueil] (fallback safe).
 */
export function breadcrumbsFor(path: string): Crumb[] {
  return BREADCRUMB_MAP[path] ?? [{ name: "Accueil", url: "/" }];
}

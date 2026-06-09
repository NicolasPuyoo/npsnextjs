// Product recommendation guides data
// Rating: "bestseller" | "recommended" | "appropriate" | null

import sportecColor from "@/assets/products/sport/SPORTEC_COLOR.png";
import sportecPuzzle from "@/assets/products/sport/SPORTEC_PUZZLE_2_0.png";
import sportecStyle from "@/assets/products/sport/SPORTEC_STYLE.png";
import sportecBaseFr from "@/assets/products/sport/SPORTEC_BASE_FR.png";
import sportecBaseMs from "@/assets/products/sport/SPORTEC_BASE_MS.png";

export type ProductRating = "bestseller" | "recommended" | "appropriate" | null;

export interface GuideProduct {
  name: string;
  slug: string;
  image: string;
  ratings: Record<string, ProductRating>;
}

export interface GuideSection {
  title: string;
  products: GuideProduct[];
}

export interface GuideCategory {
  id: string;
  name: string;
}

export interface ProductGuide {
  id: string;
  name: string;
  description: string;
  categories: GuideCategory[];
  sections: GuideSection[];
  disclaimer: string;
}

// Fitness Guide - Only products available on site
export const fitnessGuide: ProductGuide = {
  id: "fitness",
  name: "Guide Fitness",
  description: "Solutions de revêtements pour salles de fitness, cardio et bien-être",
  categories: [
    { id: "cardio", name: "Cardio" },
    { id: "musculation", name: "Musculation" },
    { id: "halterophilie", name: "Haltérophilie" },
    { id: "fonctionnel", name: "Entraînement fonctionnel" },
    { id: "yoga", name: "Yoga / Pilates" },
  ],
  sections: [
    {
      title: "Revêtements de sols",
      products: [
        {
          name: "SPORTEC® color",
          slug: "sportec-color",
          image: sportecColor.src,
          ratings: {
            "cardio": "bestseller",
            "musculation": "bestseller",
            "halterophilie": null,
            "fonctionnel": "recommended",
            "yoga": null,
          },
        },
        {
          name: "SPORTEC® puzzle 2.0",
          slug: "sportec-puzzle-2-0",
          image: sportecPuzzle.src,
          ratings: {
            "cardio": "appropriate",
            "musculation": "bestseller",
            "halterophilie": "appropriate",
            "fonctionnel": "appropriate",
            "yoga": null,
          },
        },
        {
          name: "SPORTEC® style",
          slug: "sportec-style",
          image: sportecStyle.src,
          ratings: {
            "cardio": null,
            "musculation": "recommended",
            "halterophilie": "bestseller",
            "fonctionnel": "appropriate",
            "yoga": "bestseller",
          },
        },
        {
          name: "SPORTEC® base FR",
          slug: "sportec-base-fr",
          image: sportecBaseFr.src,
          ratings: {
            "cardio": null,
            "musculation": "appropriate",
            "halterophilie": "bestseller",
            "fonctionnel": null,
            "yoga": "recommended",
          },
        },
        {
          name: "SPORTEC® base MS",
          slug: "sportec-base-ms",
          image: sportecBaseMs.src,
          ratings: {
            "cardio": null,
            "musculation": "appropriate",
            "halterophilie": "bestseller",
            "fonctionnel": null,
            "yoga": "recommended",
          },
        },
      ],
    },
  ],
  disclaimer: "Ce tableau n'est qu'un guide. Les conseils précis peuvent varier en fonction de l'application finale, de l'installation et de l'utilisation des matériaux. Veuillez nous contacter pour obtenir des informations plus détaillées.",
};

// Commercial Guide - Only products available on site
export const commercialGuide: ProductGuide = {
  id: "commercial",
  name: "Guide Commerciaux",
  description: "Solutions de revêtements pour espaces commerciaux et professionnels",
  categories: [
    { id: "bureaux", name: "Bureaux" },
    { id: "magasins", name: "Magasins" },
    { id: "reeducation", name: "Rééducation" },
    { id: "ecoles", name: "Écoles & Crèches" },
    { id: "salons", name: "Salons & événements" },
  ],
  sections: [
    {
      title: "Revêtements de sols",
      products: [
        {
          name: "SPORTEC® color",
          slug: "sportec-color",
          image: sportecColor.src,
          ratings: {
            "bureaux": "bestseller",
            "magasins": "bestseller",
            "reeducation": "appropriate",
            "ecoles": "recommended",
            "salons": "recommended",
          },
        },
        {
          name: "SPORTEC® puzzle 2.0",
          slug: "sportec-puzzle-2-0",
          image: sportecPuzzle.src,
          ratings: {
            "bureaux": "appropriate",
            "magasins": "bestseller",
            "reeducation": "bestseller",
            "ecoles": "appropriate",
            "salons": "appropriate",
          },
        },
        {
          name: "SPORTEC® style",
          slug: "sportec-style",
          image: sportecStyle.src,
          ratings: {
            "bureaux": "recommended",
            "magasins": "appropriate",
            "reeducation": "recommended",
            "ecoles": "bestseller",
            "salons": "bestseller",
          },
        },
        {
          name: "SPORTEC® base FR",
          slug: "sportec-base-fr",
          image: sportecBaseFr.src,
          ratings: {
            "bureaux": null,
            "magasins": null,
            "reeducation": "appropriate",
            "ecoles": null,
            "salons": null,
          },
        },
      ],
    },
  ],
  disclaimer: "Ce tableau n'est qu'un guide. Les conseils précis peuvent varier en fonction de l'application finale, de l'installation et de l'utilisation des matériaux. Veuillez nous contacter pour obtenir des informations plus détaillées.",
};

// Sport Guide - Only products available on site
export const sportGuide: ProductGuide = {
  id: "sport",
  name: "Guide Sports",
  description: "Solutions de revêtements pour terrains et installations sportives",
  categories: [
    { id: "multi-jeux", name: "Multi-jeux" },
    { id: "basket", name: "Basket" },
    { id: "tennis", name: "Tennis" },
    { id: "athletisme", name: "Athlétisme" },
    { id: "ski", name: "Ski" },
  ],
  sections: [
    {
      title: "Revêtements de sols",
      products: [
        {
          name: "SPORTEC® color",
          slug: "sportec-color",
          image: sportecColor.src,
          ratings: {
            "multi-jeux": "appropriate",
            "basket": "appropriate",
            "tennis": null,
            "athletisme": null,
            "ski": "bestseller",
          },
        },
        {
          name: "SPORTEC® puzzle 2.0",
          slug: "sportec-puzzle-2-0",
          image: sportecPuzzle.src,
          ratings: {
            "multi-jeux": "recommended",
            "basket": "appropriate",
            "tennis": "appropriate",
            "athletisme": null,
            "ski": "appropriate",
          },
        },
        {
          name: "SPORTEC® style",
          slug: "sportec-style",
          image: sportecStyle.src,
          ratings: {
            "multi-jeux": null,
            "basket": null,
            "tennis": null,
            "athletisme": null,
            "ski": "bestseller",
          },
        },
        {
          name: "SPORTEC® base FR",
          slug: "sportec-base-fr",
          image: sportecBaseFr.src,
          ratings: {
            "multi-jeux": "bestseller",
            "basket": "bestseller",
            "tennis": "bestseller",
            "athletisme": "recommended",
            "ski": null,
          },
        },
        {
          name: "SPORTEC® base MS",
          slug: "sportec-base-ms",
          image: sportecBaseMs.src,
          ratings: {
            "multi-jeux": "bestseller",
            "basket": "bestseller",
            "tennis": "bestseller",
            "athletisme": "recommended",
            "ski": null,
          },
        },
      ],
    },
  ],
  disclaimer: "Ce tableau n'est qu'un guide. Les conseils précis peuvent varier en fonction de l'application finale, de l'installation et de l'utilisation des matériaux. Veuillez nous contacter pour obtenir des informations plus détaillées.",
};

export const allGuides = [fitnessGuide];

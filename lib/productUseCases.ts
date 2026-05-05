// Tag d'usage court pour chaque produit (max ~7 mots)
// Affiché comme eyebrow sur ProductCard et fiche produit pour clarifier
// "à quoi sert ce produit" avant même de cliquer.

export const PRODUCT_USE_CASE: Record<string, string> = {
  // SPORT — gamme SPORTEC
  "sportec-color": "Fitness & musculation",
  "sportec-style": "Haltérophilie, zones de chute",
  "sportec-puzzle-2-0": "Dalles modulaires cross-training",
  "sportec-base-fr": "Sous-couche coupe-feu ERP",
  "sportec-base-ms": "Sous-couche gazon synthétique multisport",
  "sportec-absorber-pads": "Plots anti-vibration musculation lourde",

  // BRICOLAGE — particulier
  "profimat-bumpy": "Atelier, garage, cave",
  "profimat-wheelprotect-13-18": "Stationnement vélo / petite moto",
  "profimat-wheelprotect-18-22": "Stationnement moto / scooter",
  "top-vib-wash": "Tapis machine à laver",

  // BÂTIMENT — DAMTEC vibra (anti-vibratoire)
  "damtec-vibra-30": "Anti-vibration légère (0,03 - 0,07 N/mm²)",
  "damtec-vibra-50": "Anti-vibration légère (0,05 - 0,15 N/mm²)",
  "damtec-vibra-100": "Anti-vibration moyenne (0,10 - 0,30 N/mm²)",
  "damtec-vibra-170": "Anti-vibration moyenne (0,07 - 0,70 N/mm²)",
  "damtec-vibra-280": "Anti-vibration soutenue (0,28 - 1,50 N/mm²)",
  "damtec-vibra-700": "Anti-vibration lourde (0,70 - 3,00 N/mm²)",
  "damtec-vibra-1500": "Anti-vibration très lourde (1,50 - 4,00 N/mm²)",

  // BÂTIMENT — Vibrafoam / vibradyn
  vibrafoam: "Anti-vibration en rouleau",
  vibradyn: "Anti-vibration haute densité",

  // BÂTIMENT — Sous chape avec ATE (DAMTEC estra & 3D)
  "damtec-estra": "Sous chape flottante",
  "damtec-estra-3d": "Sous chape flottante 3D",
  "damtec-wave-3d": "Sous chape flottante 3D",
  "damtec-3d-17-8": "Sous chape flottante 3D mince",

  // BÂTIMENT — Sous revêtements de sols (parquet, stratifié, moquette, vinyle, carrelage)
  "damtec-standard": "Sous parquet, stratifié, carrelage",
  "damtec-black-uni": "Sous parquet, stratifié, moquette",
  "damtec-black-uni-b1": "Sous revêtements coupe-feu",
  "damtec-itapur": "Sous parquet, laminé, vinyle",
  "damtec-itapur-b1": "Sous revêtements coupe-feu",

  // BÂTIMENT — Sans ATE
  "top-acoustique-rubber-ecomat": "Sous chape sans ATE",
  "top-rubbercork": "Sous parquet, stratifié (liège-caoutchouc)",

  // BÂTIMENT — KRAITEC (toitures, terrasses, extérieur)
  "kraitec-protect": "Protection mécanique toiture-terrasse",
  "kraitec-step": "Plot terrasse, passage piéton",
  "kraitec-step-color": "Plot terrasse coloré",
  "kraitec-step-cross": "Plot terrasse trafic léger",
  "kraitec-step-neon": "Plot terrasse signalisation",
  "kraitec-step-plus": "Plot terrasse renforcé",
  "kraitec-step-roof-fpo": "Protection toiture FPO",
  "kraitec-step-roof-pvc": "Protection toiture PVC",
  "kraitec-top": "Drainage toiture-terrasse",
  "kraitec-top-plus": "Drainage toiture renforcé",
  "kraitec-top-drain-plus": "Drainage toiture haute performance",
  "kraitec-top-pv": "Sous panneaux photovoltaïques",

  // BÂTIMENT — DAMTEC sonic (acoustique extérieur)
  "damtec-sonic": "Écran acoustique extérieur",
  "damtec-sonic-drain-plus": "Drainage acoustique extérieur",
  "damtec-sonic-fire": "Écran acoustique coupe-feu",
};

export const getUseCase = (slug: string): string | undefined =>
  PRODUCT_USE_CASE[slug];

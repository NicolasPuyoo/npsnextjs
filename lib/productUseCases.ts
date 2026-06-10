// Tag d'usage court pour chaque produit (max ~7 mots)
// Affiché comme eyebrow sur ProductCard et fiche produit pour clarifier
// "à quoi sert ce produit" avant même de cliquer.

export const PRODUCT_USE_CASE: Record<string, string> = {
  // SPORT — gamme SPORTEC (verified per PDFs Kraiburg)
  "sportec-color": "Sol fitness & multi-activités",
  "sportec-style": "Protection haltérophilie & chutes de poids",
  "sportec-puzzle-2-0": "Dalles emboîtables fitness amovibles",
  "sportec-base-fr": "Dalle EPDM coupe-feu Cfl-s1 (ERP)",
  "sportec-base-ms": "Dalle protection haltérophilie indoor",
  "sportec-mountain": "Dalle outdoor stations de ski (Cfl-s1)",
  "sportec-icemat": "Dalle puzzle patinoires (bancs + abords)",
  "sportec-color-fr": "Revêtement rouleau coupe-feu Cfl-s1 intérieur",
  "sportec-giga": "Revêtement rouleau gros granulés EPDM fluo",

  // SPORT — gamme SHIELDTAC (stand de tir, marque Kraiburg balistique)
  "shieldtac-ricotile": "Dalle balistique (sols / murs / plafonds), jusqu'à 10 000 J",
  "shieldtac-ricotile-fr": "Dalle balistique coupe-feu Cfl-s1, 200-7 000 J",
  "shieldtac-ricosys-pu": "Système PU sans joints, Bfl-s1, 200-7 000 J",
  "shieldtac-skirting-board": "Plinthe PU pour finition continue ricosys",
  "shieldtac-pavers": "Pavés extérieurs antiglisse R10, jusqu'à 6 000 J",
  "shieldtac-blocks": "Piège à balles (zones dangereuses), 200-7 000 J",
  "shieldtac-fragsafe": "Rideau pare-éclats en rouleau, jusqu'à 7 000 J",

  // SPORT — accessoires SPORTEC / SHIELDTAC
  "accessoire-rz-turbo-protect-zero": "Vernis bicomposant PU finition + protection",
  "accessoire-sportec-700-colle": "Colle PU bicomposant pour SPORTEC / SHIELDTAC",

  // BRICOLAGE / PRO — Profimat
  "profimat-bumpy": "Butoir d'approche parking",
  "profimat-wheelprotect-13-18": "Berceau pneus 13-18\" (anti-méplats)",
  "profimat-wheelprotect-18-22": "Berceau pneus XL 18-22\" (SUV / 4×4)",
  "top-vib-wash": "Tapis anti-vibration lave-linge / sèche-linge",

  // BÂTIMENT — DAMTEC vibra (anti-vibratoire, par pression statique)
  "damtec-vibra-30": "Anti-vibration légère (jusqu'à 0,03 N/mm²)",
  "damtec-vibra-50": "Anti-vibration légère (jusqu'à 0,05 N/mm²)",
  "damtec-vibra-100": "Anti-vibration moyenne (jusqu'à 0,10 N/mm²)",
  "damtec-vibra-170": "Anti-vibration moyenne (jusqu'à 0,17 N/mm²)",
  "damtec-vibra-280": "Anti-vibration soutenue (jusqu'à 0,28 N/mm²)",
  "damtec-vibra-700": "Anti-vibration lourde (jusqu'à 0,70 N/mm²)",
  "damtec-vibra-1500": "Anti-vibration très lourde (jusqu'à 1,50 N/mm²)",

  // BÂTIMENT — Kraiburg PuraSys (élastomères PU)
  vibrafoam: "Élastomère PU 13 duretés (SD10-SD1900)",
  vibradyn: "Élastomère PU cellulaire fermé haute résilience",

  // BÂTIMENT — Sous chape avec ATE (DAMTEC estra & 3D)
  "damtec-estra": "Sous chape flottante (ETA-13/0342)",
  "damtec-estra-3d": "Sous chape flottante profilée (ETA-13/0572)",
  "damtec-wave-3d": "Sous chape flottante mousse PU (ETA-15/0358)",
  "damtec-3d-17-8": "Sous chape flottante / chape sèche (ETA-16/0481)",

  // BÂTIMENT — Sous revêtements de sols
  "damtec-standard": "Sous parquet, stratifié, carrelage, lino, PVC",
  "damtec-black-uni": "Sous stratifié, parquet, moquette, lino, PVC",
  "damtec-black-uni-b1": "Sous revêtements en ERP coupe-feu Bfl-s1",
  "damtec-itapur": "Sous revêtements (PU + liège, ETA-21/0228)",
  "damtec-itapur-b1": "Sous revêtements ERP coupe-feu Bfl-s1",

  // BÂTIMENT — Sous-couches acoustiques (sans ATE)
  "top-acoustique-rubber-ecomat": "Sous-couche acoustique sous revêtement",
  "top-rubbercork": "Sous-couche mixte caoutchouc / liège",

  // BÂTIMENT — KRAITEC (toitures plates, terrasses, balcons)
  "kraitec-protect": "Tapis protection mécanique toits & ouvrages",
  "kraitec-step": "Dalle d'allée toiture, balcon, terrasse",
  "kraitec-step-color": "Dalle terrasse colorée (6 teintes RAL)",
  "kraitec-step-cross": "Dalle drainante aspect pavé pour terrasses",
  "kraitec-step-neon": "Dalle terrasse couleurs néon (5 teintes)",
  "kraitec-step-plus": "Dalle terrasse avec non-tissé (étanchéité PVC)",
  "kraitec-step-roof-fpo": "Dalle terrasse contre-collée FPO",
  "kraitec-step-roof-pvc": "Dalle terrasse contre-collée PVC",
  "kraitec-top": "Tapis de protection toits plats & terrasses",
  "kraitec-top-plus": "Tapis protection avec non-tissé séparateur",
  "kraitec-top-drain-plus": "Tapis drainant non-tissé profilé",
  "kraitec-top-pv": "Tapis sous installations photovoltaïques",

  // BÂTIMENT — DAMTEC sonic (acoustique extérieur DIN 18531)
  "damtec-sonic": "Isolation phonique terrasses, balcons, loggias",
  "damtec-sonic-drain-plus": "Isolation phonique drainante (terrasses)",
  "damtec-sonic-fire": "Isolation phonique ignifugée Broof(t1)",
};

export const getUseCase = (slug: string): string | undefined =>
  PRODUCT_USE_CASE[slug];

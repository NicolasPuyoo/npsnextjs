// Batiment products
import damtec3D17 from "@/assets/products/batiment/DAMTEC_3D_17.png";
import damtecBlackUniB1 from "@/assets/products/batiment/DAMTEC_BLACK_UNI_B1.png";
import damtecBlackUni from "@/assets/products/batiment/DAMTEC_BLACK_UNI.png";
import damtecEstra3D from "@/assets/products/batiment/DAMTEC_ESTRA_3D.png";
import damtecEstra3D8 from "@/assets/products/batiment/DAMTEC_ESTRA_3D_8.png";
import damtecEstra8mm from "@/assets/products/batiment/DAMTEC_ESTRA_8mm.png";
import damtecItapurB1 from "@/assets/products/damtec-itapur-b1.png";
import damtecItapur from "@/assets/products/damtec-itapur.png";
import damtecSonicDrainPlus from "@/assets/products/batiment/DAMTEC_SONIC_DRAIN_PLUS.png";
import damtecSonicFire from "@/assets/products/batiment/DAMTEC_SONIC_FIRE.png";
import damtecSonic from "@/assets/products/batiment/DAMTEC_SONIC.png";
import damtecStandard from "@/assets/products/batiment/DAMTEC_STANDARD.png";
import damtecTopAcoustique from "@/assets/products/batiment/DAMTEC_TOP_ACOUSTIQUE_RUBBER_MAT_3D.png";
import damtecVibra30Bat from "@/assets/products/batiment/DAMTEC_VIBRA_30.png";
import damtecVibra50Bat from "@/assets/products/batiment/DAMTEC_VIBRA_50.png";
import damtecVibra100Bat from "@/assets/products/batiment/DAMTEC_VIBRA_100.png";
import damtecVibra170Bat from "@/assets/products/batiment/DAMTEC_VIBRA_170.png";
import damtecVibra280Bat from "@/assets/products/batiment/DAMTEC_VIBRA_280.png";
import damtecVibra700Bat from "@/assets/products/batiment/DAMTEC_VIBRA_700.png";

import damtecVibra1500Bat from "@/assets/products/batiment/DAMTEC_VIBRA_1500.png";
import damtecVibrafoam from "@/assets/products/batiment/DAMTEC_VIBRAFOAM_3D_17_8.png";
import damtecVibrafoam3D17 from "@/assets/products/batiment/DAMTEC_VIBRAFOAM_3D_17.png";
import damtecWave from "@/assets/products/batiment/DAMTEC_WAVE_3D.png";
import damtecWave3D8 from "@/assets/products/batiment/DAMTEC_WAVE_3D_8.png";
import damtecWave3D17 from "@/assets/products/batiment/DAMTEC_WAVE_3D_17.png";
import kraitecProtect from "@/assets/products/batiment/KRAITEC_PROTECT.png";
import kraitecStep from "@/assets/products/batiment/KRAITEC_STEP.png";
import kraitecStepColor from "@/assets/products/batiment/KRAITEC_STEP_COLOR.png";
import kraitecStepCross from "@/assets/products/batiment/KRAITEC_STEP_CROSS.png";
import kraitecStepNeon from "@/assets/products/batiment/KRAITEC_STEP_NEON.png";
import kraitecStepPlus from "@/assets/products/batiment/KRAITEC_STEP_PLUS.png";
import kraitecStepRoofFpo from "@/assets/products/batiment/KRAITEC_STEP_ROOF_FPO.png";
import kraitecStepRoofPvc from "@/assets/products/batiment/KRAITEC_STEP_ROOF_PVC.png";
import kraitecTop from "@/assets/products/batiment/KRAITEC_TOP.png";
import kraitecTopDrainPlus from "@/assets/products/batiment/KRAITEC_TOP_DRAIN_PLUS.png";
import kraitecTopPlus from "@/assets/products/batiment/KRAITEC_TOP_PLUS.png";
import kraitecTopPv from "@/assets/products/batiment/KRAITEC_TOP_PV.png";
import topAcoustiqueEcomat from "@/assets/products/batiment/TOP_ACOUSTIQUE_RUBBER_ECOMAT_2.png";
import topRubbercork from "@/assets/products/batiment/TOP_RUBBERCORK.png";
import vibradyn from "@/assets/products/batiment/VIBRADYN.png";
import vibrafoamBat from "@/assets/products/batiment/VIBRAFOAM.png";


// Bricolage products
import profimatBumpy from "@/assets/products/bricolage/PROFIMAT_BUMPY.png";
import profimatWheelprotect1318 from "@/assets/products/bricolage/PROFIMAT_WHEELPROTECT_13_18.png";
import profimatWheelprotect1822 from "@/assets/products/bricolage/PROFIMAT_WHEELPROTECT_18_22.png";
import topVibWash from "@/assets/products/bricolage/TOP_VIB_WASH.png";
import wheelprotectUsage from "@/assets/products/wheelprotect-usage.webp";
import topVibWashUsage from "@/assets/products/top-vib-wash-usage.webp";

// Sport products
import sportecAbsorberPads from "@/assets/products/sport/SPORTEC_ABSORBER_PADS.png";
import sportecBaseFr from "@/assets/products/sport/SPORTEC_BASE_FR.png";
import sportecBaseMs from "@/assets/products/sport/SPORTEC_BASE_MS.png";
import sportecColor from "@/assets/products/sport/SPORTEC_COLOR.png";
import sportecPuzzle from "@/assets/products/sport/SPORTEC_PUZZLE_2_0.png";
import sportecStyle from "@/assets/products/sport/SPORTEC_STYLE.png";

export type BatimentSubcategory = 
  | "isolation-acoustique-antivibratoire"
  | "isolation-sous-chape"
  | "isolation-sans-ate"
  | "isolation-revetements-sols"
  | "solutions-exterieures";

export interface SpecificationGroup {
  title: string;
  specs: { label: string; value: string }[];
}

export interface ProductDetails {
  description?: string;
  specifications?: { label: string; value: string }[];
  dataSheetUrl?: string;
  brochureUrl?: string;
  usageImage?: string;
}

export interface Product {
  name: string;
  slug: string;
  image: string;
  category: "batiment" | "sport" | "bricolage";
  subcategory?: BatimentSubcategory;
  details?: ProductDetails;
}

// Helper function to generate slug from product name
export const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[®™]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

// Helper function to find product by slug
export const findProductBySlug = (slug: string): Product | undefined => {
  return allProducts.find(p => p.slug === slug);
};

// Helper function to get similar products (same category, excluding current)
export const getSimilarProducts = (product: Product, count: number = 3): Product[] => {
  const sameCategory = allProducts.filter(
    p => p.category === product.category && p.slug !== product.slug
  );
  
  // Prioritize same subcategory if available
  if (product.subcategory) {
    const sameSubcategory = sameCategory.filter(p => p.subcategory === product.subcategory);
    const differentSubcategory = sameCategory.filter(p => p.subcategory !== product.subcategory);
    const combined = [...sameSubcategory, ...differentSubcategory];
    return combined.slice(0, count);
  }
  
  // Shuffle and return for variety
  return sameCategory.sort(() => Math.random() - 0.5).slice(0, count);
};

export const batimentSubcategories = [
  { id: "all", name: "Tous les produits" },
  { id: "isolation-acoustique-antivibratoire", name: "Isolation acoustique et anti-vibratoire" },
  { id: "isolation-sous-chape", name: "Isolation acoustique sous chape avec ATE" },
  { id: "isolation-sans-ate", name: "Isolation acoustique sous chape sans ATE" },
  { id: "isolation-revetements-sols", name: "Isolation sous les revêtements de sols" },
  { id: "solutions-exterieures", name: "Solutions extérieures" },
  
] as const;

export const batimentProducts: Product[] = [
  // Isolation acoustique et anti-vibratoire (DAMTEC VIBRA, ULTRAGYM, VIBRADYN uniquement)
{ 
    name: "DAMTEC® VIBRA 30", 
    slug: "damtec-vibra-30", 
    image: damtecVibra30Bat.src, 
    category: "batiment", 
    subcategory: "isolation-acoustique-antivibratoire",
    details: {
      description: "DAMTEC® vibra 30 est une couche élastique avec des propriétés d'amortissement des vibrations et d'isolation contre les bruits d'impact. Le domaine d'application idéal est avec une pression de matériau allant jusqu'à 0,03 N/mm².",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé liés au polyuréthane" },
        { label: "Couleur", value: "beige/marron/noir/multicolore" },
        { label: "Largeur de bande", value: "1.250 mm (± 1,5 %)" },
        { label: "Épaisseur / longueur [mm/m]", value: "17/8 / 8.000 ± 1,0 mm / ± 1,5 % — 25/7 / 4.000 ± 1,0 mm / ± 1,5 %" },
        { label: "Résistance à la traction", value: "0,15 - 0,65 N/mm² (ISO 1798)" },
        { label: "Allongement à la rupture", value: "30 - 60 % (ISO 1798)" },
        { label: "Densité", value: "300 - 400 kg/m³" },
        { label: "Compression maximale", value: "0,03 N/mm² (EN 826)" },
        { label: "Fréquence propre", value: "8 - 25 Hz" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold" },
      ],
      dataSheetUrl: "/fiches-techniques/Vibra_30.pdf",
    }
  },
  { 
    name: "DAMTEC® VIBRA 50",
    slug: "damtec-vibra-50", 
    image: damtecVibra50Bat.src, 
    category: "batiment", 
    subcategory: "isolation-acoustique-antivibratoire",
    details: {
      description: "DAMTEC® vibra 50 est une couche élastique avec des propriétés d'amortissement des vibrations et d'isolation contre les bruits d'impact. Le domaine d'application idéal est avec une pression de matériau allant jusqu'à 0,05 N/mm².",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé liés au polyuréthane" },
        { label: "Couleur", value: "noir" },
        { label: "Largeur de bande", value: "1.250 mm (± 1,5 %)" },
        { label: "Épaisseur / longueur [mm/m]", value: "pour 17/8 mm: 8.000 mm (±1,5 %) — pour 25/7 mm: 4.000 mm (±1,5 %)" },
        { label: "Résistance à la traction", value: "> 0,2 N/mm² (ISO 1798)" },
        { label: "Allongement à la rupture", value: "> 35 % (ISO 1798)" },
        { label: "Densité", value: "500 - 600 kg/m³" },
        { label: "Compression maximale", value: "0,05 N/mm² (EN 826)" },
        { label: "Fréquence propre", value: "9 - 25 Hz" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold" },
      ],
      dataSheetUrl: "/fiches-techniques/Vibra_50.pdf",
    }
  },
  { 
    name: "DAMTEC® VIBRA 100",
    slug: "damtec-vibra-100", 
    image: damtecVibra100Bat.src, 
    category: "batiment", 
    subcategory: "isolation-acoustique-antivibratoire",
    details: {
      description: "DAMTEC® vibra 100 est une couche élastique avec des propriétés d'amortissement des vibrations et d'isolation contre les bruits d'impact. Le domaine d'application idéal est avec une pression de matériau allant jusqu'à 0,10 N/mm².",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé liés au polyuréthane" },
        { label: "Couleur", value: "multicoloré" },
        { label: "Largeur de bande", value: "1.250 mm (± 1,5 %)" },
        { label: "Longueur de rouleau", value: "1.000 mm (± 1,5 %)" },
        { label: "Epaisseur", value: "15, 20, 30 mm (± 1 mm)" },
        { label: "Résistance à la traction", value: "0,15 - 0,70 N/mm² (ISO 1798)" },
        { label: "Allongement à la rupture", value: "35 - 75 % (ISO 1798)" },
        { label: "Densité", value: "330 - 430 kg/m³" },
        { label: "Compression maximale", value: "0,10 N/mm² (EN 826)" },
        { label: "Fréquence propre", value: "9 - 25 Hz" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold" },
      ],
      dataSheetUrl: "/fiches-techniques/Vibra_100.pdf",
    }
  },
  { 
    name: "DAMTEC® VIBRA 170",
    slug: "damtec-vibra-170", 
    image: damtecVibra170Bat.src, 
    category: "batiment", 
    subcategory: "isolation-acoustique-antivibratoire",
    details: {
      description: "DAMTEC® vibra 170 est une couche élastique avec des propriétés d'amortissement des vibrations et d'isolation contre les bruits d'impact. Le domaine d'application idéal est avec une pression de matériau allant jusqu'à 0,17 N/mm².",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé liés au polyuréthane" },
        { label: "Couleur", value: "multicolore" },
        { label: "Largeur de bande", value: "1.250 mm (± 1,5 %)" },
        { label: "Longueur de rouleau", value: "1.000 mm (± 1,5 %)" },
        { label: "Epaisseur", value: "15, 20, 30 mm (± 1 mm)" },
        { label: "Résistance à la traction", value: "0,15 - 0,55 N/mm² (ISO 1798)" },
        { label: "Allongement à la rupture", value: "20 - 50 % (ISO 1798)" },
        { label: "Densité", value: "340 - 440 kg/m³" },
        { label: "Compression maximale", value: "0,17 N/mm² (EN 826)" },
        { label: "Fréquence propre", value: "10 - 30 Hz" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold" },
      ],
      dataSheetUrl: "/fiches-techniques/Vibra_170.pdf",
    }
  },
  { 
    name: "DAMTEC® VIBRA 280",
    slug: "damtec-vibra-280", 
    image: damtecVibra280Bat.src, 
    category: "batiment", 
    subcategory: "isolation-acoustique-antivibratoire",
    details: {
      description: "DAMTEC® vibra 280 est une couche élastique avec des propriétés d'amortissement des vibrations et d'isolation contre les bruits d'impact. Le domaine d'application idéal est avec une pression de matériau allant jusqu'à 0,28 N/mm².",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé liés au polyuréthane" },
        { label: "Couleur", value: "noir/anthracite ou noir/anthracite/coloré" },
        { label: "Largeur de bande", value: "1.250 mm (± 1,5 %)" },
        { label: "Longueur de rouleau", value: "1.000 mm (± 1,5 %)" },
        { label: "Epaisseur", value: "15, 20, 30 mm (± 1 mm)" },
        { label: "Résistance à la traction", value: "> 0,5 N/mm² (ISO 1798)" },
        { label: "Allongement à la rupture", value: "> 50 % (ISO 1798)" },
        { label: "Densité", value: "600 - 700 kg/m³" },
        { label: "Compression maximale", value: "0,28 N/mm² (EN 826)" },
        { label: "Fréquence propre", value: "11 - 25 Hz" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold" },
      ],
    }
  },
  { 
    name: "DAMTEC® VIBRA 700", 
    slug: "damtec-vibra-700", 
    image: damtecVibra700Bat.src, 
    category: "batiment", 
    subcategory: "isolation-acoustique-antivibratoire",
    details: {
      description: "DAMTEC® vibra 700 est une couche élastique haute densité avec des propriétés d'amortissement des vibrations pour charges lourdes. Le domaine d'application idéal est avec une pression de matériau allant jusqu'à 0,70 N/mm².",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé liés au polyuréthane" },
        { label: "Couleur", value: "noir ou noir/multicolore" },
        { label: "Largeur de bande", value: "1.250 mm (± 1,5 %)" },
        { label: "Longueur de rouleau", value: "1.000 mm (± 1,5 %)" },
        { label: "Epaisseur", value: "15, 20 mm (± 1 mm)" },
        { label: "Résistance à la traction", value: "> 0,5 N/mm² (ISO 1798)" },
        { label: "Allongement à la rupture", value: "> 50 % (ISO 1798)" },
        { label: "Densité", value: "800 - 900 kg/m³" },
        { label: "Compression maximale", value: "0,70 N/mm² (EN 826)" },
        { label: "Fréquence propre", value: "13 - 30 Hz" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold" },
      ],
      dataSheetUrl: "/fiches-techniques/Vibra_280.pdf",
    }
  },
  { 
    name: "DAMTEC® VIBRA 700", 
    slug: "damtec-vibra-700", 
    image: damtecVibra700Bat.src, 
    category: "batiment", 
    subcategory: "isolation-acoustique-antivibratoire",
    details: {
      description: "DAMTEC® vibra 700 est une couche élastique haute densité avec des propriétés d'amortissement des vibrations pour charges lourdes. Le domaine d'application idéal est avec une pression de matériau allant jusqu'à 0,70 N/mm².",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé liés au polyuréthane" },
        { label: "Couleur", value: "noir ou noir/multicolore" },
        { label: "Largeur de bande", value: "1.250 mm (± 1,5 %)" },
        { label: "Longueur de rouleau", value: "1.000 mm (± 1,5 %)" },
        { label: "Epaisseur", value: "15, 20 mm (± 1 mm)" },
        { label: "Résistance à la traction", value: "> 0,5 N/mm² (ISO 1798)" },
        { label: "Allongement à la rupture", value: "> 50 % (ISO 1798)" },
        { label: "Densité", value: "800 - 900 kg/m³" },
        { label: "Compression maximale", value: "0,70 N/mm² (EN 826)" },
        { label: "Fréquence propre", value: "13 - 30 Hz" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold" },
      ],
      dataSheetUrl: "/fiches-techniques/Vibra_700.pdf",
    }
  },
  { 
    name: "DAMTEC® VIBRA 1500",
    slug: "damtec-vibra-1500", 
    image: damtecVibra1500Bat.src, 
    category: "batiment", 
    subcategory: "isolation-acoustique-antivibratoire",
    details: {
      description: "DAMTEC® vibra 1500 est une couche élastique haute performance pour l'amortissement des vibrations et l'isolation des bruits d'impact sous les charges les plus lourdes. Charge maximale 1,50 N/mm².",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé liés au polyuréthane (haute densité)" },
        { label: "Couleur", value: "noir ou noir/multicolore" },
        { label: "Largeur de bande", value: "1.250 mm (± 1,5 %)" },
        { label: "Longueur de rouleau", value: "6.000 mm (± 1,5 %)" },
        { label: "Epaisseur", value: "10 mm (± 1 mm)" },
        { label: "Résistance à la traction", value: "> 1,5 N/mm² (ISO 1798)" },
        { label: "Allongement à la rupture", value: "> 80 % (ISO 1798)" },
        { label: "Densité", value: "950 - 1.050 kg/m³" },
        { label: "Compression maximale", value: "1,5 N/mm² (EN 826)" },
        { label: "Fréquence propre", value: "14 - 30 Hz" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold" },
      ],
    }
  },
  { name: "ULTRAGYM", slug: "vibrafoam", image: vibrafoamBat.src, category: "batiment", subcategory: "isolation-acoustique-antivibratoire",
    details: {
      description: "ULTRAGYM (Vibrafoam) est un élastomère de polyuréthane à cellules fermées pour l'isolation des vibrations et des bruits solidiens. Disponible en 13 types de dureté (couleurs différentes). Utilisé sous les machines, les fondations et les structures de bâtiments.",
      specifications: [
        { label: "Matériau", value: "Élastomère de polyuréthane à cellules fermées" },
        { label: "Surface", value: "Lisse, cellules fermées" },
        { label: "Épaisseur", value: "12,5 et 25 mm" },
        { label: "Format", value: "Plaques 250 x 250 mm ou bandes" },
        { label: "Variantes", value: "13 types de dureté (couleurs différentes)" },
        { label: "Charge admissible", value: "Variable selon dureté (0,02 à 0,60 N/mm²)" },
        { label: "Plage de fréquence", value: "À partir de 8 Hz" },
        { label: "Isolation acoustique", value: "Réduction des bruits solidiens jusqu'à 35 dB" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold" },
      ],
      dataSheetUrl: "/fiches-techniques/Vibrafoam.pdf",
    }
  },
  { name: "VIBRADYN", slug: "vibradyn", image: vibradyn.src, category: "batiment", subcategory: "isolation-acoustique-antivibratoire",
    details: {
      description: "VIBRADYN® est un élastomère PU à cellules fermées, haute résilience, pour charges dynamiques intenses. Idéal pour la désolidarisation de machines industrielles, de fondations et de structures soumises à des charges dynamiques importantes.",
      specifications: [
        { label: "Matériau", value: "Élastomère PU à cellules fermées, haute résilience" },
        { label: "Surface", value: "Lisse" },
        { label: "Épaisseur", value: "12,5 et 25 mm" },
        { label: "Format", value: "Plaques sur mesure" },
        { label: "Charge admissible", value: "Variable selon la configuration" },
        { label: "Isolation acoustique", value: "Réduction des bruits solidiens jusqu'à 35 dB" },
        { label: "Application", value: "Machines, fondations, charges dynamiques intenses" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold" },
      ],
      dataSheetUrl: "/fiches-techniques/Vibradyn.pdf",
    }
  },
  
  // Isolation sous les revêtements de sols (black uni, black uni B1, standard)
  { name: "DAMTEC® BLACK UNI", slug: "damtec-black-uni", image: damtecBlackUni.src, category: "batiment", subcategory: "isolation-revetements-sols",
    details: {
      description: "DAMTEC® black uni est une excellente sous-couche isolante destinée à l'amélioration de l'isolation au bruit de choc. Elle peut être installée en pose libre sous revêtements stratifiés, parquets, moquette ainsi que sous les applications linoleum et PVC et procure une grande tranquillité.",
      specifications: [
        { label: "Matériau", value: "Granulats fins de mousse de polyuréthane et granulats de liège liés avec un agent PU polyuréthane" },
        { label: "Couleur", value: "noire/grise/beige/marron (PU), beige (liège)" },
        { label: "Surface", value: "fine structure granulée" },
        { label: "Largeur de bande", value: "1.000 mm (± 1,5 %)" },
        { label: "Longueur de rouleau", value: "sur demande (± 1,5 %)" },
        { label: "Épaisseur", value: "2, 3, 4, 5 et 6 mm (± 0,3 mm)" },
        { label: "Résistance à la traction", value: "(ISO 1798) env. 0.8 N/mm²" },
        { label: "Allongement à la rupture", value: "(ISO 1798) env. 30%" },
        { label: "Densité", value: "500 - 600 kg/m³" },
        { label: "Comportement au feu", value: "(EN 13501) Efl" },
        { label: "Amélioration de l'isolation au bruit de choc", value: "(ISO 140-8/ISO 717-2) — ΔLw = 16 dB (2mm collé sous 2.5mm linoleum) — ΔLw = 16 dB (2mm sous 10mm parquet contrecollé) — ΔLw = 17 dB (2mm collé sous 3mm revêtement caoutchouc) — ΔLw = 17 dB (2mm sous 8mm revêtement stratifié) — ΔLw = 18 dB (2mm collé sous 10mm parquet massif) — ΔLw = 18 dB (3mm collé sous 16mm parquet massif) — ΔLw = 19 dB (2mm collé sous 3mm revêtement PVC) — ΔLw = 19 dB (2mm collé sous 10mm parquetry (2 layers)) — ΔLw = 20 dB (3mm collé sous 3mm revêtement PVC) — ΔLw = 25 dB (2mm collé sous revêtement textile)" },
      ],
      dataSheetUrl: "/fiches-techniques/Black_Uni.pdf",
    }
  },
  { name: "DAMTEC® BLACK UNI B1", slug: "damtec-black-uni-b1", image: damtecBlackUniB1.src, category: "batiment", subcategory: "isolation-revetements-sols",
    details: {
      description: "DAMTEC® black uni B1 est une excellente sous-couche isolante destinée à l'amélioration de l'isolation au bruit de choc. Elle peut être installée en pose libre sous revêtements stratifiés, parquets, moquette ainsi que sous les applications linoleum et PVC et procure une grande tranquillité.",
      specifications: [
        { label: "Matériau", value: "Granulats fins de mousse de polyuréthane et granulats de liège liés avec un agent PU polyuréthane" },
        { label: "Couleur", value: "noire/grise/beige/marron (PU), beige (liège)" },
        { label: "Largeur de bande", value: "1.000 mm (± 1,5 %)" },
        { label: "Longueur de rouleau", value: "sur demande (± 1,5 %)" },
        { label: "Épaisseur", value: "2, 3, 4, 5 et 6 mm (± 0,3 mm)" },
        { label: "Densité", value: "535 - 635 kg/m³" },
        { label: "Amélioration de l'isolation au bruit de choc", value: "(ISO 140-8/ISO 717-2) — ΔLw = 19 dB (2mm collé sous 3mm revêtement PVC) — ΔLw = 20 dB (3mm collé sous 3mm revêtement PVC) — ΔLw = 16 dB (2mm collé sous 2.5mm linoleum) — ΔLw = 25 dB (2mm collé sous revêtement textile) — ΔLw = 17 dB (2mm collé sous 3mm revêtement caoutchouc) — ΔLw = 17 dB (2mm sous 8mm revêtement stratifié) — ΔLw = 16 dB (2mm sous 10mm parquet contrecollé) — ΔLw = 18 dB (2mm collé sous 10mm parquet massif) — ΔLw = 18 dB (3mm collé sous 16mm parquet massif) — ΔLw = 19 dB (2mm collé sous 10mm parquet (2 couche))" },
      ],
      dataSheetUrl: "/fiches-techniques/Black_Uni_B1.pdf",
    }
  },
  { name: "DAMTEC® STANDARD", slug: "damtec-standard", image: damtecStandard.src, category: "batiment", subcategory: "isolation-revetements-sols",
    details: {
      description: "DAMTEC® standard est le produit universel pour l'isolation des bruits de choc. Cette sous-couche peut être utilisée sous les parquets, les stratifiés, les tapis et les carreaux de céramique ainsi que sous les revêtements de sol en linoléum et en PVC.",
      specifications: [
        { label: "Matériau", value: "Granulat fin de caoutchouc et de liège liés avec PUR-élastomère" },
        { label: "Couleur", value: "noir (granulat de caoutchouc), beige (granulat de liège)" },
        { label: "Largeur de bande", value: "1.000 mm (± 1,5 %)" },
        { label: "Longueur de rouleau", value: "sur demande (± 1,5 %)" },
        { label: "Épaisseur", value: "2, 3, 4, 5, 6 mm (± 0,3 mm)" },
        { label: "Densité", value: "650 - 750 kg/m³" },
        { label: "Amélioration de l'isolation au bruit de choc", value: "(ISO 140-8/ISO 717-2) — ΔLw = 29 dB avec moquette — ΔLw = 20 dB avec 8mm sol stratifié — ΔLw = 19 dB avec 13mm parquet contrecollé — ΔLw = 18 dB avec 16mm parquet — ΔLw = 18 dB avec carrelage" },
      ],
      dataSheetUrl: "/fiches-techniques/Standard.pdf",
    }
  },
  { name: "DAMTEC® ITAPUR", slug: "damtec-itapur", image: damtecItapur.src, category: "batiment", subcategory: "isolation-revetements-sols",
    details: {
      description: "DAMTEC® itapur est une sous-couche acoustique en granulats de caoutchouc recyclé et polyuréthane, conçue pour la pose sous revêtements de sols. Excellente isolation aux bruits d'impact.",
      specifications: [
        { label: "Matériau", value: "Granulats de caoutchouc et polyuréthane" },
        { label: "Surface", value: "Granuleuse, régulière" },
        { label: "Épaisseur", value: "2, 3, 5 mm" },
        { label: "Largeur", value: "1 000 mm" },
        { label: "Application", value: "Sous parquet, stratifié, carrelage" },
      ],
      dataSheetUrl: "/fiches-techniques/Damtec_Itapur.pdf",
    }
  },
  { name: "DAMTEC® ITAPUR B1", slug: "damtec-itapur-b1", image: damtecItapurB1.src, category: "batiment", subcategory: "isolation-revetements-sols",
    details: {
      description: "DAMTEC® itapur B1 est la version ignifugée de la sous-couche itapur, idéale pour les bâtiments publics et commerciaux. Classement feu Bfl-s1.",
      specifications: [
        { label: "Matériau", value: "Granulats de caoutchouc et polyuréthane" },
        { label: "Surface", value: "Granuleuse, régulière" },
        { label: "Épaisseur", value: "2, 3, 5 mm" },
        { label: "Largeur", value: "1 000 mm" },
        { label: "Classement feu", value: "Bfl-s1" },
        { label: "Application", value: "Sous parquet, stratifié, carrelage" },
      ],
      dataSheetUrl: "/fiches-techniques/Damtec_Itapur_B1.pdf",
    }
  },
  
  // Isolation sous chape avec ATE (estra, estra 3D, wave 3D 8/4, 3D 17/8, wave 3D 17/8)
  { name: "DAMTEC® ESTRA", slug: "damtec-estra", image: damtecEstra8mm.src, category: "batiment", subcategory: "isolation-sous-chape",
    details: {
      description: "DAMTEC® estra est une sous-couche en granulat de caoutchouc, profilées d'un coté, destinée à l'isolation des bruits d'impact, à l'amortissement des vibrations et au découplage solidien. Elle est utilisée pour différentes applications, p. ex. sous chape flottante ou sous fondations des machines.",
      specifications: [
        { label: "Matériau", value: "Granulats de caoutchouc de haute qualité agglomérés par un liant élastomérique de polyuréthane" },
        { label: "Couleur", value: "noire/multicolor" },
        { label: "Largeur de bande", value: "1.250 mm (± 1,5 %)" },
        { label: "Longueur de rouleau", value: "4mm: 20.000 mm / 6mm: 10.000 mm / 8mm: 8.000 mm (± 1,5 %)" },
        { label: "Epaisseur", value: "4, 6, 8 mm (± 0,3 mm)" },
        { label: "Densité", value: "680 - 750 kg/m³" },
        { label: "Amélioration de l'isolation au bruit de choc", value: "(ISO 140-8/ ISO 717-2) ΔLw = 19 dB avec 4 mm\n(sous chape ciment 50mm) | ΔLw = 19 dB avec 6 mm \n(sous chape ciment 35mm) | ΔLw = 20 dB avec 6 mm\n(sous chape ciment 50mm) | ΔLw = 21 dB avec 8 mm\n(sous chape ciment 50mm)" },
      ],
      dataSheetUrl: "/fiches-techniques/Damtec_Estra.pdf",
    }
  },
  { name: "DAMTEC® ESTRA 3D", slug: "damtec-estra-3d", image: damtecEstra3D.src, category: "batiment", subcategory: "isolation-sous-chape",
    details: {
      description: "DAMTEC® estra 3D est une sous-couche profilée d'un seul côté sous chapes flottantes. Que ce soit dans les bâtiments commerciaux ou industriels, par exemple les supermarchés et les entrepôts, DAMTEC® estra 3D permet une isolation acoustique durable et fiable.",
      specifications: [
        { label: "Matériau", value: "Granulats de caoutchouc de haute qualité agglomérés par un liant élastomérique de polyuréthane" },
        { label: "Couleur", value: "noire/multicolor" },
        { label: "Largeur de bande", value: "1.250 mm (± 1,5 %)" },
        { label: "Longueur de rouleau", value: "8.000 mm (± 1,5 %)" },
        { label: "Densité", value: "680 - 750 kg/m³" },
        { label: "Amélioration de l'isolation au bruit de choc", value: "(ISO 140-8/ ISO 717-2) | ΔLw = 22 dB sous chape ciment 50mm" },
      ],
      dataSheetUrl: "/fiches-techniques/Damtec_Estra_3D.pdf",
    }
  },
  { name: "DAMTEC® WAVE 3D", slug: "damtec-wave-3d", image: damtecWave3D8.src, category: "batiment", subcategory: "isolation-sous-chape",
    details: {
      description: "DAMTEC® wave 3D est une sous-couche en granulat de mousse de polyuréthane, profilées d'un coté, destinée à l'isolation des bruits d'impact, à l'amortissement des vibrations et au découplage solidien. Elle est utilisée pour différentes applications, p. ex. sous chape flottante ou sous fondations des machines.",
      specifications: [
        { label: "Matériau", value: "Granulats fins de mousse de polyuréthane liés avec PU-élastomère" },
        { label: "Largeur de bande", value: "1.250 mm (± 1,5 %)" },
        { label: "Longueur de rouleau", value: "8.000 mm (± 1,5 %)" },
        { label: "Epaisseur", value: "8/4 mm (± 1 mm) | 17/8 mm (± 1 mm)" },
        { label: "Poids superficiel", value: "1,50 - 2,80 kg/m² (8/4) | 3,45 - 5,40 kg/m² (17/8)" },
        { label: "Densité", value: "300 - 400 kg/m³" },
        { label: "Amélioration de l'isolation au bruit de choc", value: "(ISO 140-8/ ISO 717-2) ΔLw = 35dB, 17/8 - 80mm chape de ciment | ΔLw = 32 dB, 17/8 - 50mm chape de ciment | ΔLw = 30 dB, 8/4 - 80mm chape de ciment | ΔLw = 25 dB, 8/4 - 50mm chape de ciment" },
      ],
      dataSheetUrl: "/fiches-techniques/fiche-technique-damtec-wave-3d.pdf",
    }
  },
  { name: "DAMTEC® 3D 17/8", slug: "damtec-3d-17-8", image: damtec3D17.src, category: "batiment", subcategory: "isolation-sous-chape",
    details: {
      description: "DAMTEC® 3D 17/8 est une sous-couche en fibres de caoutchouc de hautes qualité, profilées d'un coté, destinée à l'isolation des bruits d'impact. C'est la solution idéale au traitement des bruits de choc sous chape flottante ou chapes seiches par ex. dans les constructions en bois.",
      specifications: [
        { label: "Matériau", value: "Fibres de caoutchouc de haute qualité, lié avec PUR-élastomère" },
        { label: "Largeur de bande", value: "1250 mm (± 1,5 %)" },
        { label: "Longueur de rouleau", value: "8 m (± 1,5 %)" },
        { label: "Epaisseur", value: "17/8 mm (± 1 mm)" },
        { label: "Densité", value: "500 - 600 kg/m³" },
        { label: "Amélioration de l'isolation au bruit de choc", value: "(ISO 10140 / ISO 717) ΔLw = 26dB - sous chape ciment 50mm | ΔLw = 28dB - sous chape ciment 60mm | ΔLw = 31dB - sous chape ciment 70mm | ΔLw = 32dB - 2x sous chape ciment 60mm | ΔLw = 34dB - 2x sous chape ciment 80mm | (ASTM E2179 / E 989)\nΔIIC = 29dB - (60mm) | ΔIIC = 34dB - (2x 60mm)" },
      ],
      dataSheetUrl: "/fiches-techniques/Damtec_Estra_3D_17_8.pdf",
    }
  },
  
  // Solutions extérieures
  { name: "KRAITEC® PROTECT", slug: "kraitec-protect", image: kraitecProtect.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "KRAITEC® protect est un paillet de protection pour constructions haute résistance servant de couche de protection dans le cadre d'applications dans le domaine de la construction de toits verts et de tunnels ainsi que dans des secteurs en contact avec la terre, conformément à la norme DIN 18531, 18533 18535 et la directive toit plat. KRAITEC® protect est également conseillé sous la forme de pads et de bandes comme couche protectrice lors de la pose de revêtements à joints ouverts.",
      specifications: [
        { label: "Matériau", value: "Granulés en caoutchouc (odeur neutre) de pointe recyclé allié à du polyuréthane." },
        { label: "Couleur", value: "multicolore" },
        { label: "Surface", value: "Structure granulée" },
        { label: "Longueur (dalles)", value: "2000 mm ± 1,5 %" },
        { label: "Largeur (dalles)", value: "1000 mm ± 1,5 %" },
        { label: "Épaisseur (dalles)", value: "6, 8, 10 mm ± 0,6 mm" },
        { label: "Longueur de rouleau", value: "sur demande ± 1,5 %" },
        { label: "Largeur de bande", value: "1250 mm ± 1,5 %" },
        { label: "Épaisseur (rouleau)", value: "6, 8, 10 mm ± 0,6 mm — 12 mm ± 1,0 mm" },
      ],
      dataSheetUrl: "/fiches-techniques/Kraitec_Protect.pdf",
    }
  },
  { name: "KRAITEC® STEP", slug: "kraitec-step", image: kraitecStep.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "KRAITEC® step est une dalle d'allée et de protection en granulés de caoutchouc utilisée sur les toitures plates (notamment pour les allées lors de travaux de maintenance pour protection des joints existants, en films plastiques ou lés bitumineux) et sur les balcons et terrasses. KRAITEC® step est également employé comme support de protection sur les constructions de toit (installations solaires, installations d'antennes, installations de climatisation et de ventilation, p. ex., etc.).",
      specifications: [
        { label: "Matériau", value: "Granulé de caoutchouc recyclés allié à du polyuréthane (odeur typique de caoutchouc possible)" },
        { label: "Surface", value: "lisse et perméable, arêtes chanfreinées" },
        { label: "Face inférieure", value: "lisse et perméable avec rainures d'évacuation" },
        { label: "Longueur x largeur x épaisseur", value: "500 mm x 500 mm, 30 mm" },
        { label: "Tolérances", value: "Longueur et largeur ± 1,5 %, épaisseur ± 2 mm" },
        { label: "Poids de dalle", value: "5,2 kg" },
        { label: "Comportement au feu", value: "Efl (B2) (DIN EN 13501-1) — Broof(t1) (DIN EN 13501-5)" },
        { label: "Autre", value: "préforé bilatéralement, raccords en plastique compris (forage quadrilatéral des 4 coloris standards possible sur demande). Compatibilité : En raison du grand nombre de membranes d'étanchéité disponibles dans le commerce avec différentes formulations, la compatibilité (par exemple avec les plastifiants ou le blocage) doit être approuvée par le fabricant de la membrane d'étanchéité." },
      ],
      dataSheetUrl: "/fiches-techniques/Kraitec_Step.pdf",
    }
  },
  { name: "KRAITEC® STEP COLOR", slug: "kraitec-step-color", image: kraitecStepColor.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "KRAITEC® step color est une dalle de granulés de caoutchouc spécialement conçue pour la protection des membranes d'étanchéité sur les toits plats (par exemple, les passerelles pour le personnel d'entretien des toits), les balcons et les terrasses. KRAITEC® step color est également utilisé comme sous-couche de support sous les systèmes installés sur les toits (par exemple, les centrales solaires, les antennes, etc.) ou comme bordure autour des piscines.",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé, liés avec du polyuréthane avec couche d'EPDM (odeur typique de caoutchouc possible)" },
        { label: "Couleur", value: "comme le nuancier" },
        { label: "Surface", value: "lisse à pores ouvertes, bords biseautés" },
        { label: "Face inférieure", value: "lisse avec rainures de drainage" },
        { label: "Longueur x largeur x épaisseur", value: "500 x 500 x 30 mm" },
        { label: "Tolérances", value: "Longueur et largeur ± 1,5 %, épaisseur ± 2 mm" },
        { label: "Poids de dalle", value: "env. 5,3 kg" },
      ],
      dataSheetUrl: "/fiches-techniques/Kraitec_Step_Color.pdf",
    }
  },
  { name: "KRAITEC® STEP CROSS", slug: "kraitec-step-cross", image: kraitecStepCross.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "KRAITEC® step cross est une dalle élastique de protection en granulés de caoutchouc de haute qualité qui est utilisée sur les balcons, terrasses et toits plats. KRAITEC® step cross, la dalle de balcon et de terrasse, convainc par l'aspect attrayant des pavés et est également idéale en tant qu'entourage de piscine grâce à sa structure de joint perméable à l'eau et drainante.",
      specifications: [
        { label: "Matériau", value: "Granulé de caoutchouc recyclés allié à du polyuréthane. (odeur typique de caoutchouc possible)" },
        { label: "Couleur", value: "rouge, vert, gris, noir (de légères variations de couleur sont possibles)" },
        { label: "Surface", value: "lisse et perméable, aspect des pavés" },
        { label: "Face inférieure", value: "lisse et perméable avec rainures d'évacuation" },
        { label: "Longueur x largeur x épaisseur", value: "500 x 500 x 30 mm (± 1,5 %)" },
        { label: "Tolérances", value: "Longueur et largeur ± 1,5 %, épaisseur ± 2 mm" },
        { label: "Poids de dalle", value: "5,2 kg" },
        { label: "Poids superficiel", value: "20,8 kg/m²" },
        { label: "Comportement au feu", value: "Efl (DIN EN 13501-1), Broof (t1) (DIN EN 13501-5)" },
      ],
      dataSheetUrl: "/fiches-techniques/Kraitec_Step_Cross.pdf",
    }
  },
  { name: "KRAITEC® STEP NEON", slug: "kraitec-step-neon", image: kraitecStepNeon.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "KRAITEC® step neon est une dalle de granulés de caoutchouc spécialement conçue pour la protection des membranes d'étanchéité sur les toits plats (par exemple, les passerelles pour le personnel d'entretien des toits), les balcons et les terrasses. Le néon KRAITEC® step est également utilisé comme margelle autour des piscines.",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé, liés avec du polyuréthane avec couche d'EPDM (odeur typique de caoutchouc possible)" },
        { label: "Couleur", value: "comme le nuancier" },
        { label: "Surface", value: "lisse à pores ouvertes, bords biseautés" },
        { label: "Face inférieure", value: "lisse avec rainures de drainage" },
        { label: "Longueur x largeur x épaisseur", value: "500 x 500 x 30 mm" },
        { label: "Tolérances", value: "Longueur et largeur ± 1,5 %, épaisseur ± 2 mm" },
        { label: "Poids de dalle", value: "env. 5,3 kg" },
      ],
      dataSheetUrl: "/fiches-techniques/Kraitec_Step_Neon.pdf",
    }
  },
  { name: "KRAITEC® STEP PLUS", slug: "kraitec-step-plus", image: kraitecStepPlus.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "KRAITEC® step plus comportent tous deux un non-tissé sur le dessous pour la pose directement sur les étanchéités PVC. Les dalles indéformables sont ainsi idéales pour la maison et le jardin.",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé, liés avec du polyuréthane (odeur typique de caoutchouc possible)" },
        { label: "Couleur", value: "rouge, vert, gris, noir" },
        { label: "Surface", value: "lisse, à pores ouvertes / profilé coups de marteau" },
        { label: "Face inférieure", value: "lisse avec rainures de drainage et non-tissé calandré, (PES, non-tissé polyester, 300 g/m²)" },
        { label: "Longueur x largeur x épaisseur", value: "500 x 500 x 30 mm" },
        { label: "Tolérances", value: "Longueur et largeur ± 1,5%, Epaisseur ± 2,0 mm" },
      ],
      dataSheetUrl: "/fiches-techniques/Kraitec_Step_Plus.pdf",
    }
  },
  { name: "KRAITEC® STEP ROOF FPO", slug: "kraitec-step-roof-fpo", image: kraitecStepRoofFpo.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "KRAITEC® step roof FPO est une dalle de protection en granulés de caoutchouc dotée d'un contre-collage FPO sur sa face inférieure qui sert de protection pour l'entretien, les révisions et l'installation sur les toitures plates avec étanchéité en films FPO. KRAITEC® step roof FPO sert de sous-couche de protection pour les structures en toitures et peut être fixée durablement par soudage à air chaud.",
      specifications: [
        { label: "Matériau", value: "Granulé de caoutchouc recyclés allié à du polyuréthane et revêtement sous-jacent en FPO non-tissé (PP). (odeur typique de caoutchouc possible)" },
        { label: "Couleur", value: "rouge, gris, vert, noir (de légères variations de couleur sont possibles)" },
        { label: "Surface", value: "lisse et perméable, arêtes chanfreinées" },
        { label: "Longueur x largeur x épaisseur", value: "500 mm x 500 mm, 30 mm" },
        { label: "Tolérances", value: "Longueur et largeur ± 1,5 %, épaisseur ± 2 mm" },
      ],
      dataSheetUrl: "/fiches-techniques/Kraitec_Step_Roof_FPO.pdf",
    }
  },
  { name: "KRAITEC® STEP ROOF PVC", slug: "kraitec-step-roof-pvc", image: kraitecStepRoofPvc.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "KRAITEC® step roof PVC est une dalle de protection en granulés de caoutchouc à revêtement sous-jacent en PVC utilisée comme allée de maintenance, de révision et d'installation sur des toitures plates en conjonction avec des lés de PVC pour isolation. KRAITEC® step roof PVC est également employé comme support de protection sur les constructions de toit (installations solaires, installations d'antennes, séparation de couche, p. ex., etc.). KRAITEC® step roof PVC plus possède un revêtement en non-tissé tapissant sa face inférieure servant de couche séparatrice intégrée en cas d'incompatibilité avec les lés d'étanchéité. Elle peut être fixée de manière durable au lé de toiture en PVC à l'air chaud, grâce à son revêtement en PVC, et ce afin d'éviter des soulèvements ou des dérapages.",
      specifications: [
        { label: "Matériau", value: "Granulé de caoutchouc recyclés allié à du polyuréthane et revêtement sous-jacent en PVC non-tissé. (odeur typique de caoutchouc possible)" },
        { label: "Couleur", value: "rouge, gris, vert, noir (de légères variations de couleur sont possibles)" },
        { label: "Surface", value: "lisse et perméable, arêtes chanfreinées" },
        { label: "Face inférieure", value: "Revêtement en non-tissé PVC avec rainures d'évacuation. Autres: préforé bilatéralement, raccords en plastique compris (préforage quadrilatéral possible sur demande)." },
        { label: "Longueur x largeur x épaisseur", value: "500 mm x 500 mm, 30 mm" },
        { label: "Tolérances", value: "Longueur et largeur ± 1,5 %, épaisseur ± 2 mm" },
        { label: "Poids de dalle", value: "5,3 kg" },
      ],
      dataSheetUrl: "/fiches-techniques/Kraitec_Step_Roof_PVC.pdf",
    }
  },
  { name: "KRAITEC® TOP", slug: "kraitec-top", image: kraitecTop.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "KRAITEC® top est le tapis de protection des bâtiments sûr et flexible pour des applications classiques sur toitures plates et ouvrages de construction. Dans le monde entier, de grands fabricants et entreprises utilisatrices d'étanchéité travaillent avec ce produit qui a fait ses preuves. Grâce à ses très bonnes caractéristiques techniques, à sa haute résistance à la compression et ses multiples possibilités d'utilisation, le tapis de protection des bâtiments KRAITEC® top s'utilise sur les systèmes de toitures plates les plus divers.",
      specifications: [
        { label: "Matériau", value: "Granulés en caoutchouc recyclés (arôme de caoutchouc typique possible) alliés à du polyuréthane" },
        { label: "Couleur", value: "noir/coloré parsemé" },
        { label: "Surface", value: "Structure granulée" },
        { label: "Face inférieure", value: "Structure granulée" },
        { label: "Longueur (dalles)", value: "2.000 mm (± 1,5 %)" },
        { label: "Largeur (dalles)", value: "1.000 mm (± 1,5 %)" },
        { label: "Épaisseur (dalles)", value: "6, 8, 10 mm (± 0,6 mm) — 12, 15, 18, 20 mm (± 1,0 mm)" },
        { label: "Longueur de rouleau", value: "sur demande (± 1,5 %)" },
        { label: "Largeur de bande", value: "1.250 mm (± 1,5 %)" },
        { label: "Épaisseur (rouleau)", value: "6, 8, 10 mm (± 0,6 mm) — 12, 15 mm (± 1,0 mm)" },
        { label: "Densité", value: "810 kg/m³" },
      ],
      dataSheetUrl: "/fiches-techniques/Kraitec_Top.pdf",
    }
  },
  { name: "KRAITEC® TOP DRAIN PLUS", slug: "kraitec-top-drain-plus", image: kraitecTopDrainPlus.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "KRAITEC® top drain plus est un tapis de protection des bâtiments et de drainage non-tissé profilé. Il offre un fort effet drainant sur et sous le tapis. Il offre une protection contre les dommages mécaniques sur des applications d'étanchéité et isolations au sens de la norme DIN 18531, 18533 18535 et la directive toit plat. KRAITEC® top drain plus peut être utilisé sur des toits plats et verts, des terrasses et des toits de parking.",
      specifications: [
        { label: "Matériau", value: "Granulés en caoutchouc recyclés (arôme de caoutchouc typique possible) alliés à du polyuréthane" },
        { label: "Couleur", value: "noir/coloré parsemé" },
        { label: "Surface", value: "revêtement en non-tissé" },
        { label: "Face inférieure", value: "Structure granulée" },
        { label: "Longueur de rouleau", value: "10,0 m ± 1,5 %" },
        { label: "Largeur de bande", value: "1200 mm ± 1,5 %" },
        { label: "Épaisseur (rouleau)", value: "12/8 mm ± 1,0 mm" },
      ],
      dataSheetUrl: "/fiches-techniques/Kraitec_Top_Drain_Plus.pdf",
    }
  },
  { name: "KRAITEC® TOP PLUS", slug: "kraitec-top-plus", image: kraitecTopPlus.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "KRAITEC® top plus est un paillet de protection pour constructions visant à protéger les joints et isolations de dommages mécaniques au sens de la norme DIN 18531, 18533 18535 et la directive toit plat. KRAITEC® top plus possède un revêtement en non-tissé tapissant sa face inférieure servant de couche séparatrice intégrée en cas d'incompatibilités (migration du plastifiant, p. ex.) de lés d'étanchéité.",
      specifications: [
        { label: "Matériau", value: "Granulés en caoutchouc recyclés (arôme de caoutchouc typique possible) combinés à du polyuréthane, recouverts sur une face de non-tissé de séparation de 300 g" },
        { label: "Couleur", value: "noir/coloré parsemé" },
        { label: "Surface", value: "Structure granulée" },
        { label: "Face inférieure", value: "revêtement en non-tissé" },
        { label: "Longueur de rouleau", value: "sur demande ± 1,5 %" },
        { label: "Largeur de bande", value: "1250 mm ± 1,5 %" },
        { label: "Épaisseur (rouleau)", value: "6, 8, 10, ± 0,6 mm" },
        { label: "Non-tissé", value: "Épaisseur : 2,5 mm — Poids volumique : 300 g/m² ± 10 % — Compatible avec PVC" },
      ],
      dataSheetUrl: "/fiches-techniques/Kraitec_Top_Plus.pdf",
    }
  },
  { name: "KRAITEC® TOP PV", slug: "kraitec-top-pv", image: kraitecTopPv.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "KRAITEC® top PV est un paillet de protection pour constructions visant à protéger les joints et isolations de dommages mécaniques au sens de la norme DIN 18531, 18533 18535 et la directive toit plat. KRAITEC® top PV est utilisé comme support de protection, et, sur les installations photovoltaïques, comme couche séparatrice. KRAITEC® top PV possède un revêtement sous-jacent en film servant de couche séparatrice intégrée (barrière arrêtant les plastifiants) en cas d'incompatibilité avec les lés d'étanchéité. Présente également un coefficient de friction ≥ 0,6.",
      specifications: [
        { label: "Matériau", value: "Granulés en caoutchouc recyclés (arôme de caoutchouc typique possible) alliés à du polyuréthane, recouverts sur une face de film composite" },
        { label: "Couleur", value: "noir/coloré parsemé" },
        { label: "Surface", value: "Structure granulée" },
        { label: "Face inférieure", value: "Structure de film bleu (excédent sans fonction de pose survenant lors de la production)" },
        { label: "Longueur de rouleau", value: "sur demande ± 1,5 %" },
        { label: "Largeur de bande", value: "1250 mm ± 1,5 % coupes : sur demande" },
        { label: "Épaisseur (rouleau)", value: "6, 8, 10, 12 mm ± 0,6 mm" },
      ],
      dataSheetUrl: "/fiches-techniques/Kraitec_Top_PV.pdf",
    }
  },
  { name: "DAMTEC® SONIC", slug: "damtec-sonic", image: damtecSonic.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "DAMTEC® sonic est un paillet de protection spécial au sens de la norme DIN 18531 visant à l'isolation phonique des terrasses de toit, des balcons et des loggias. DAMTEC® sonic est ainsi posé dans le cadre de constructions classiques, à l'aide de plaques de béton sur lit de gravillons et d'une isolation thermique par PIR, EPS ou XPS (toiture chaude et inversée).",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclés alliés à de l'élastomère de polyuréthane" },
        { label: "Couleur", value: "noir à particules de couleur bleues" },
        { label: "Surface", value: "Structure granulée" },
        { label: "Longueur de rouleau", value: "sur demande ± 1,5 %" },
        { label: "Largeur de bande", value: "1250 mm ± 1,5 %" },
        { label: "Épaisseur (rouleau)", value: "8 mm ± 0,3 mm" },
      ],
      dataSheetUrl: "/fiches-techniques/Damtec_Sonic.pdf",
      brochureUrl: "/fiches-techniques/Damtec_Sonic_Guide.pdf",
    }
  },
  { name: "DAMTEC® SONIC DRAIN PLUS", slug: "damtec-sonic-drain-plus", image: damtecSonicDrainPlus.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "DAMTEC® sonic drain plus est un paillet de protection spécial au sens de la norme DIN 18531 visant à l'isolation phonique des terrasses de toit, des balcons et des loggias. DAMTEC® sonic drain plus est ainsi posé dans le cadre de constructions classiques, à l'aide de plaques de béton sur lit de gravillons et d'une isolation thermique par PIR, EPS ou XPS (toiture chaude et inversée).",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclés alliés à de l'élastomère de polyuréthane." },
        { label: "Couleur", value: "noir à particules de couleur bleues" },
        { label: "Surface", value: "revêtement en non-tissé" },
        { label: "Face inférieure", value: "structure granuleuse, profilée" },
        { label: "Longueur de rouleau", value: "8,0 m ± 1,5 %" },
        { label: "Largeur de bande", value: "1 200 mm ± 1,5 %" },
        { label: "Épaisseur (rouleau)", value: "15/6 mm ± 1,0 mm" },
      ],
      dataSheetUrl: "/fiches-techniques/fiche-technique-kraitec-sonic-drain-plus.pdf",
      brochureUrl: "/fiches-techniques/Damtec_Sonic_Guide.pdf",
    }
  },
  { name: "DAMTEC® SONIC FIRE", slug: "damtec-sonic-fire", image: damtecSonicFire.src, category: "batiment", subcategory: "solutions-exterieures",
    details: {
      description: "DAMTEC® sonic FiRe est une natte de protection des bâtiments spécialement ignifugée au sens de la norme DIN 18531 pour l'isolation des bruits d'impact sur les terrasses de toit, les balcons, les loggias et les coursives. DAMTEC® sonic FiRe possède un traitement ignifuge qui contribue à une réduction considérable de la charge d'incendie sur les toits plats, les balcons et les loggias.",
      specifications: [
        { label: "Matériau", value: "granulés de caoutchouc recyclé (odeur de caoutchouc typique possible) liés avec du polyuréthane avec traitement ignifuge" },
        { label: "Longueur de rouleau", value: "8000 mm (± 1,5 %)" },
        { label: "Largeur de bande", value: "1250 mm (± 1,5 %)" },
        { label: "Épaisseur (rouleau)", value: "8 mm (± 1 mm)" },
        { label: "Densité", value: "environ 780 kg/m³" },
        { label: "Poids superficiel", value: "environ 6,24 kg/m²" },
        { label: "Comportement au feu", value: "Cfl s1 (DIN EN 13501-1) — Broof (t1) (DIN EN 13501-5)" },
      ],
      dataSheetUrl: "/fiches-techniques/Damtec_Sonic_FiRe.pdf",
    }
  },
  
  // Isolation sous chape sans ATE (produits avec "Top" dans le nom)
  { name: "NPS TOP ACOUSTIQUE RUBBER ECOMAT", slug: "top-acoustique-rubber-ecomat", image: topAcoustiqueEcomat.src, category: "batiment", subcategory: "isolation-sans-ate",
    details: {
      description: "NPS TOP ACOUSTIQUE RUBBER ECOMAT est une sous-couche acoustique sous revêtements de sol pour la réduction des bruits d'impact. Disponible en épaisseurs de 2 mm à 20 mm.",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc avec agent de liaison PU élastomère" },
        { label: "Couleur", value: "Noire" },
        { label: "Surface", value: "Lisse avec structure granuleuse" },
        { label: "Épaisseurs disponibles", value: "2 mm | 3 mm | 4 mm | 5 mm | 10 mm | 20 mm" },
        { label: "Largeur", value: "1 000 mm ± 1,5 %" },
        { label: "Longueur", value: "Sur demande ± 1,5 %" },
        { label: "Densité", value: "760 - 860 kg/m³" },
        { label: "Résistance à la traction", value: "> 0.3 N/mm² (ISO 1798)" },
        { label: "Allongement à la rupture", value: "> 30 % (ISO 1798)" },
        { label: "Résistance à la température", value: "-30°C à 80°C" },
        { label: "Comportement au feu", value: "Efl" },
        { label: "Amélioration de l'isolation au bruit de choc", value: "(ISO 10140 / ISO 717)\nΔLw = 16 dB - 2 mm sous chape 45 mm | ΔLw = 19 dB - 3 mm sous chape 45 mm | ΔLw = 20 dB - 4 mm sous chape 45 mm | ΔLw = 21 dB - 5 mm sous chape 45 mm | (ASTM E2179 / E 989)\nΔIIC = 20 dB - 2 mm sous chape 45 mm | ΔIIC = 23 dB - 3 mm sous chape 45 mm | ΔIIC = 23 dB - 4 mm sous chape 45 mm | ΔIIC = 24 dB - 5 mm sous chape 45 mm" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold" },
      ],
      dataSheetUrl: "/fiches-techniques/NPS_TOP_Acoustique_Rubber_Ecomat.pdf",
    }
  },
  { name: "TOP RUBBERCORK", slug: "top-rubbercork", image: topRubbercork.src, category: "batiment", subcategory: "isolation-sans-ate",
    details: {
      description: "TOP RUBBERCORK est un mélange caoutchouc/liège haut de gamme pour isolation acoustique mince. Idéale sous parquet, stratifié ou moquette.",
      specifications: [
        { label: "Matériau", value: "Mélange caoutchouc / liège haut de gamme" },
        { label: "Surface", value: "Naturelle, liège apparent" },
        { label: "Épaisseur", value: "2, 3, 4, 5, 6 mm" },
        { label: "Largeur", value: "1 000 mm" },
        { label: "Isolation", value: "Acoustique mince, thermique et phonique" },
        { label: "Isolation acoustique ΔLw", value: "18 dB (3 mm) à 20 dB (5 mm)" },
        { label: "Application", value: "Sous parquet, stratifié, moquette" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold, Blue Angel" },
      ],
    }
  },

];

export const industrieProducts: Product[] = [];

export const sportProducts: Product[] = [
  { name: "SPORTEC® ABSORBER PADS", slug: "sportec-absorber-pads", image: sportecAbsorberPads.src, category: "sport",
    details: {
      description: "SPORTEC® absorber pads sont des plots antivibratoires haute densité pour zones de musculation lourde. Réduction drastique du bruit structurel et des vibrations de chute de barres.",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé haute densité" },
        { label: "Surface", value: "Dense, antidérapante" },
        { label: "Format", value: "Plots de différentes dimensions" },
        { label: "Application", value: "Zones de musculation lourde, halterophilie" },
        { label: "Propriétés", value: "Réduction du bruit structurel et des vibrations de chute de barres" },
        { label: "Isolation acoustique", value: "25-30 dB (réduction des bruits de structure)" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold" },
      ],
    }
  },
  { name: "SPORTEC® BASE FR", slug: "sportec-base-fr", image: sportecBaseFr.src, category: "sport",
    details: {
      description: "SPORTEC® base FR est une sous-couche élastique coupe-feu pour la réduction des bruits d'impact. Classement au feu Cfl-s1, idéale pour les ERP et installations exigeantes.",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc liés au PU" },
        { label: "Surface", value: "Granuleuse (sous-couche élastique)" },
        { label: "Épaisseur", value: "3, 4, 6, 8, 10, 12 mm" },
        { label: "Largeur", value: "1 250 mm / 1 500 mm" },
        { label: "Classification feu", value: "Cfl-s1" },
        { label: "Application", value: "Sous-couche pour salles de fitness (ERP)" },
        { label: "Isolation acoustique ΔLw", value: "17 dB (en 6 mm)" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold, Blue Angel" },
      ],
      dataSheetUrl: "/fiches-techniques/F-PDF_Base_FR.pdf",
    }
  },
  { name: "SPORTEC® BASE MS", slug: "sportec-base-ms", image: sportecBaseMs.src, category: "sport",
    details: {
      description: "SPORTEC® base MS est une sous-couche élastique, drainante et stable, conçue pour les gazons synthétiques et les terrains multisports. Elle assure une absorption optimale des chocs.",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé" },
        { label: "Surface", value: "Granuleuse, drainante" },
        { label: "Épaisseur", value: "3, 4, 6, 8, 10, 12 mm" },
        { label: "Largeur", value: "1 250 mm / 1 500 mm" },
        { label: "Propriétés", value: "Élastique, drainante et stable" },
        { label: "Application", value: "Sous gazon synthétique, terrains multisports" },
        { label: "Isolation acoustique ΔLw", value: "18 dB" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold, Blue Angel" },
      ],
      dataSheetUrl: "/fiches-techniques/F-PDF_Base_MS.pdf",
    }
  },
  { name: "SPORTEC® COLOR", slug: "sportec-color", image: sportecColor.src, category: "sport",
    details: {
      description: "SPORTEC® color est un revêtement de sol robuste, facile à entretenir et insensible à l'eau, conçu notamment pour les salles de fitness, d'haltérophilie, les locaux commerciaux et salles d'exposition, les sols de salons professionnels, les locaux techniques et les patinoires.",
      specifications: [
        { label: "Matériau", value: "Fins granulés de caoutchouc recyclé de pneus (noir) et granulés colorés d'EPDM agglomérés avec de l'élastomère de polyuréthane." },
        { label: "Surface", value: "structure lisse, fermé et granuleux avec inserts d'EPDM colorés" },
        { label: "Type de sol", value: "Revêtement de sol pour l'intérieur" },
        { label: "Largeur/epaisseur/longueur", value: "1.500 mm / 4 mm / 30 m — 1.500 mm / 6 mm / 20 m — 1.500 mm / 8 mm / 15 m — 1.500 mm / 10 mm / 12 m — 1.500 mm / 12 mm / 10 m (Longueur / Largeur ± 1,5%, Epaisseur ± 0,3 mm)" },
        { label: "Densité", value: "env. 1050 kg/m³" },
        { label: "Résistance au feu", value: "Efl (B2) (EN 13501-1)" },
        { label: "Résistance à la traction", value: "min. 1,5 N/mm² (EN ISO 1798)" },
        { label: "Allongement à la rupture", value: "min. 80 % (EN ISO 1798)" },
        { label: "Réduction des bruits de pas", value: "jusqu'à 18 dB (DIN EN ISO 10140-3)" },
      ],
      dataSheetUrl: "/fiches-techniques/fiche-technique-sportec-color.pdf",
    }
  },
  { name: "SPORTEC® PUZZLE 2.0", slug: "sportec-puzzle-2-0", image: sportecPuzzle.src, category: "sport",
    details: {
      description: "SPORTEC® puzzle 2.0 est une solution modulaire amovible pour installations rapides de sols de fitness. Dalles emboîtables sans colle pour une mise en œuvre simple et réversible. Disponible en finitions Color (15% EPDM) ou Purcolor (85% EPDM).",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé agglomérés au PU" },
        { label: "Surface", value: "Antidérapante, résistante à l'usure" },
        { label: "Épaisseur", value: "6, 8, 10 mm" },
        { label: "Format", value: "1 000 x 1 000 mm" },
        { label: "Finitions", value: "Color (15% EPDM) ou Purcolor (85% EPDM)" },
        { label: "Installation", value: "Sans colle, amovible, réversible" },
        { label: "Application", value: "Salles de fitness, installations temporaires" },
        { label: "Isolation acoustique ΔLw", value: "17-18 dB" },
        { label: "Certifications", value: "A+, AgBB, Indoor Air Comfort Gold" },
      ],
      dataSheetUrl: "/fiches-techniques/F-PDF_Puzzle_2.0.pdf",
    }
  },
  { name: "SPORTEC® STYLE", slug: "sportec-style", image: sportecStyle.src, category: "sport",
    details: {
      description: "SPORTEC® style protège le sous-sol en cas de coups et de chute de fortes charges, par ex. dans les zones d'haltérophilie dans les centres de fitness. SPORTEC® style empêche un tel endommagement et a en plus des excellents propriétés d'isolation acoustique.",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé de pneus agglomérés avec de l'élastomère de polyuréthane et une surface de la gamme SPORTEC® color, color FR, neon, giga, purcolor ou UNI versa." },
        { label: "Surface", value: "SPORTEC® purcolor — SPORTEC® color (avec 15% EPDM) — SPORTEC® color FR (seulement à 1000x500mm) — SPORTEC® UNI versa (seulement 1000 x 500 mm) — SPORTEC® neon (seulement à 1000x500mm) — SPORTEC® giga (seulement à 1000x500mm)" },
        { label: "Face inférieure", value: "base ondulé renforcé avec un tissu, couleur de la sous-couche adaptée à la couleur du revêtement de sol (noire, gris ou rouge)" },
        { label: "Type de sol", value: "Revêtement de sécurité pour l'intérieur (surface : purcolor, color, neon) et l'extérieur (surface : UNI versa)" },
        { label: "Longueur x Largeur x Epaisseur", value: "500 x 500 x 30 mm — 500 x 500 x 70 mm — 1.000 x 500 x 30 mm — 1.000 x 1.000 x 30 mm — Tolérances: Longueur/Largeur ± 0,8 % / Epaisseur: ± 2 mm" },
        { label: "Résistance au feu", value: "Efl (B2) (EN 13501-1) — Cfl-s1 (B1) (EN 13501-1)" },
        { label: "VOC", value: "Etiquetage sanitaire français (A+)" },
        { label: "PCF (empreinte carbone produit)", value: "20,2 kg CO₂e pro m² (en 30mm + SPORTEC® color surface) — 34,3 kg CO₂e pro m² (en 70mm + SPORTEC® color surface) — 30,9 kg CO₂e pro m² (en 30mm + SPORTEC® purcolor surface) — 45,3 kg CO₂e pro m² (en 70mm + SPORTEC® purcolor surface)" },
        { label: "Réduction des bruits de pas", value: "jusqu'à 42 dB (DIN EN ISO 10140-3)" },
      ],
      dataSheetUrl: "/fiches-techniques/fiche-technique-sportec-style.pdf",
    }
  },
];

export const bricolageProducts: Product[] = [
  { name: "PROFIMAT® BUMPY", slug: "profimat-bumpy", image: profimatBumpy.src, category: "bricolage",
    details: {
      description: "PROFIMAT® bumpy est un tapis antivibratoire universel à surface bosselée pour absorber les chocs. Multifonction pour la protection et la stabilisation d'objets.",
      specifications: [
        { label: "Matériau", value: "Caoutchouc recyclé" },
        { label: "Surface", value: "Bosselée, antidérapante" },
        { label: "Propriété", value: "Absorption des chocs et antivibratoire" },
        { label: "Isolation acoustique ΔLw", value: "21 dB" },
        { label: "Application", value: "Tiroirs, coffres, surfaces de travail, stabilisation" },
        { label: "Certifications", value: "A+, Indoor Air Comfort Gold" },
      ],
    }
  },
  { name: "PROFIMAT® WHEELPROTECT 13-18", slug: "profimat-wheelprotect-13-18", image: profimatWheelprotect1318.src, category: "bricolage",
    details: {
      description: "PROFIMAT® wheelprotect est une protection pour sols de garage contre les pneus. Évite les taches de plastifiants sur le sol. Version pour pneus de largeur 13 à 18 pouces.",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé" },
        { label: "Surface", value: "Résistante aux plastifiants des pneus" },
        { label: "Compatibilité", value: "Pneus de 13 à 18 pouces de largeur" },
        { label: "Application", value: "Protection sols de garage contre les taches de pneus" },
        { label: "Isolation acoustique ΔLw", value: "16 dB" },
        { label: "Certifications", value: "A+, Indoor Air Comfort Gold" },
      ],
      usageImage: wheelprotectUsage.src,
    }
  },
  { name: "PROFIMAT® WHEELPROTECT 18-22", slug: "profimat-wheelprotect-18-22", image: profimatWheelprotect1822.src, category: "bricolage",
    details: {
      description: "PROFIMAT® wheelprotect est une protection pour sols de garage contre les pneus. Évite les taches de plastifiants sur le sol. Version pour pneus de largeur 18 à 22 pouces.",
      specifications: [
        { label: "Matériau", value: "Granulés de caoutchouc recyclé" },
        { label: "Surface", value: "Résistante aux plastifiants des pneus" },
        { label: "Compatibilité", value: "Pneus de 18 à 22 pouces de largeur" },
        { label: "Application", value: "Protection sols de garage contre les taches de pneus" },
        { label: "Isolation acoustique ΔLw", value: "16 dB" },
        { label: "Certifications", value: "A+, Indoor Air Comfort Gold" },
      ],
      usageImage: wheelprotectUsage.src,
    }
  },
  { name: "TOP VIB WASH", slug: "top-vib-wash", image: topVibWash.src, category: "bricolage",
    details: {
      description: "TOP VIB WASH est un tapis spécifique pour machines à laver. Il réduit le bruit et empêche le déplacement de l'appareil pendant l'essorage.",
      usageImage: topVibWashUsage.src,
      specifications: [
        { label: "Matériau", value: "Caoutchouc recyclé haute densité" },
        { label: "Surface", value: "Antidérapante" },
        { label: "Format", value: "Tapis à découper ou plots individuels" },
        { label: "Propriétés", value: "Réduction du bruit et anti-déplacement" },
        { label: "Isolation acoustique ΔLw", value: "18 dB (bruit d'impact) + réduction du bruit de rotation" },
        { label: "Application", value: "Machines à laver, sèche-linge" },
        { label: "Certifications", value: "A+, Indoor Air Comfort Gold" },
      ],
    }
  },
];

export const allProducts: Product[] = [
  ...batimentProducts,
  ...industrieProducts,
  ...sportProducts,
  ...bricolageProducts,
];

export const categories = [
  { id: "all", name: "Tous" },
  { id: "batiment", name: "Bâtiment" },
  { id: "sport", name: "Sport" },
  { id: "bricolage", name: "Bricolage" },
] as const;

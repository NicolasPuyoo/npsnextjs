// Long-form pillar / cluster guides. Each guide ranks on a primary keyword
// and serves as a hub linking to related products + sub-pages.
//
// Why structured (vs free-form MDX): keeps consistent rendering, JSON-LD
// generation, and internal linking. Authoring stays focused on content.

export type GuideSection = {
  heading: string; // H2
  body: string; // paragraphs separated by \n\n
  bullets?: string[]; // optional bullet list rendered after body
};

export type GuideProductRef = {
  slug: string;
  why: string; // one-line rationale ("DAMTEC Standard 5 mm — ATE, 19 dB, ΔLw 26")
};

export type GuideFaq = { question: string; answer: string };

export type Guide = {
  slug: string; // URL slug
  title: string; // H1 + meta title
  description: string; // meta description (≤160 chars)
  primaryKeyword: string;
  intro: string; // hero intro paragraph
  publishedAt: string; // ISO date
  updatedAt?: string;
  readingMinutes: number;
  // Structured TOC
  sections: GuideSection[];
  // Featured products from /produit/[slug] — rendered as related cards
  products: GuideProductRef[];
  faqs: GuideFaq[];
  // Sibling guides for cross-linking (slug references)
  related?: string[];
  // Optional: custom React component to render mid-article (e.g. calculator)
  // Identified by name; resolved in the page component.
  embed?: "epaisseur-calculator";
};

// === GUIDES ===
// Order matters for /guide index page. Pillars first, clusters after.

export const guides: Guide[] = [
  {
    slug: "isolation-acoustique-sous-chape",
    title: "Isolation acoustique sous chape : guide complet 2026 (ATE, ΔLw, DTU 52.10)",
    description:
      "Tout sur l'isolation acoustique sous chape flottante : différence ATE / sans ATE, ΔLw expliqué, comparatif des 8 sous-couches NPS, erreurs de pose. Guide expert.",
    primaryKeyword: "isolation acoustique sous chape",
    intro:
      "Choisir une sous-couche acoustique sous chape, c'est arbitrer entre certification (ATE), performance acoustique (ΔLw, en dB), épaisseur, et budget. Ce guide explique chaque critère, compare les 8 produits NPS adaptés, et pointe les 5 erreurs de pose qui ruinent l'efficacité acoustique sur chantier. Rédigé pour architectes, BET et entreprises générales.",
    publishedAt: "2026-05-06",
    readingMinutes: 12,
    embed: "epaisseur-calculator",
    sections: [
      {
        heading: "Pourquoi l'isolation sous chape est devenue obligatoire",
        body: `Depuis l'arrêté du 30 juin 1999 (NRA — Nouvelle Réglementation Acoustique), tout logement collectif neuf doit limiter le bruit d'impact transmis entre étages à L'nT,w ≤ 58 dB. La RE2020 et la NRT (tertiaire) durcissent ces exigences pour bureaux, hôtels, écoles et établissements de santé : on cible souvent 55 dB voire 50 dB selon la destination.\n\nConcrètement : sans sous-couche acoustique, une dalle béton brute de 18 cm transmet ≈ 78 dB. Avec une sous-couche bien dimensionnée (DAMTEC Standard 8 mm, ΔLw = 26 dB), on tombe à 52 dB. La sous-couche n'est pas une option de confort, c'est ce qui rend la dalle conforme.`,
        bullets: [
          "Logement collectif (NRA) : L'nT,w ≤ 58 dB",
          "Hôtels, écoles, santé (NRT) : L'nT,w ≤ 55 dB selon catégorie",
          "Bureaux open space (RE2020 + NRA tertiaire) : objectif 55 dB",
          "ERP : exigences spécifiques par type d'établissement",
        ],
      },
      {
        heading: "ΔLw, L'nT,w, αw : décoder les indicateurs",
        body: `**ΔLw (en dB)** : amélioration apportée par la sous-couche seule, mesurée en laboratoire selon EN ISO 717-2. C'est la valeur qu'affichent les fiches techniques. Plus c'est haut, mieux c'est.\n\n**L'nT,w (en dB)** : niveau de bruit d'impact mesuré in-situ dans le logement de réception, après pose complète. C'est ce que la NRA contrôle. On l'estime par : L'nT,w ≈ Ln,eq,0,w (dalle brute) − ΔLw (sous-couche). En neuf, on prend une marge de 3-5 dB.\n\n**αw (coefficient d'absorption pondéré)** : sans rapport direct avec le bruit d'impact ; c'est l'absorption de l'énergie sonore aérienne, utile pour le confort en open space ou auditorium. Une sous-couche caoutchouc dense a un αw faible (≈ 0,05) — ce n'est pas son rôle.`,
      },
      {
        heading: "ATE vs sans ATE : quand est-ce obligatoire ?",
        body: `L'**Agrément Technique Européen** (ATE, parfois appelé ETA en anglais) atteste qu'un produit a passé une procédure d'évaluation européenne (règlement (UE) n°305/2011). Pour les ouvrages soumis à DTU et garantie décennale (logement collectif neuf, ERP, tertiaire), l'ATE est généralement exigé par le bureau de contrôle.\n\nNos produits **avec ATE** : DAMTEC Standard, DAMTEC Black Uni, DAMTEC Black Uni B1, DAMTEC Estra. Ils sont compatibles avec les chapes anhydrites et ciment selon DTU 52.10 et 26.2.\n\nNos produits **sans ATE** : TOP Acoustique Rubber Ecomat, TOP Rubbercork. Adaptés à la rénovation, aux ouvrages hors champ DTU (bureaux non logement, ateliers), ou comme couche acoustique d'appoint sous parquet flottant.`,
      },
      {
        heading: "Comparatif des 8 sous-couches NPS",
        body: `Tableau récapitulatif (chiffres tirés des fiches techniques fabricant). Toutes les valeurs ΔLw correspondent à l'épaisseur indiquée et à une chape conforme aux DTU.`,
        bullets: [
          "DAMTEC Standard 8 mm — ATE, ΔLw 26 dB, charge max 5 kPa, polyvalent logement",
          "DAMTEC Black Uni 5/8/10 mm — ATE, ΔLw 19/22/24 dB, optimisé épaisseur fine",
          "DAMTEC Black Uni B1 5/8 mm — ATE + classement feu B1, hôtels et ERP",
          "DAMTEC Estra 17 mm — ATE, ΔLw 30 dB, performance haut de gamme",
          "DAMTEC Itapur 4 mm — sous parquet flottant / stratifié, ΔLw 19 dB",
          "DAMTEC Wave 3D 7 mm — sous parquet flottant, dispositif anti-tassement",
          "TOP Acoustique Rubber Ecomat 4-8 mm — sans ATE, économique, rénovation",
          "TOP Rubbercork 4-10 mm — caoutchouc + liège, polyvalent rénovation",
        ],
      },
      {
        heading: "Comment dimensionner l'épaisseur",
        body: `**Règle simplifiée** :\n\n- Logement collectif neuf, dalle 16-20 cm : DAMTEC Standard 8 mm ou Black Uni 8 mm.\n- Hôtel / chambres, classement feu requis : DAMTEC Black Uni B1 5 ou 8 mm.\n- Cible acoustique premium (≤ 50 dB d'impact) : DAMTEC Estra 17 mm.\n- Rénovation, sous parquet flottant : DAMTEC Itapur 4 mm ou Wave 3D 7 mm.\n- Budget serré, hors logement collectif : TOP Acoustique Rubber Ecomat.\n\nUtilisez le calculateur ci-dessous pour une recommandation immédiate selon votre projet.`,
      },
      {
        heading: "Les 5 erreurs de pose qui ruinent l'isolation",
        body: `Une sous-couche bien spécifiée mais mal posée perd 5 à 15 dB de performance. Les erreurs récurrentes observées sur chantier :`,
        bullets: [
          "1. Désolidarisation périphérique oubliée — la chape doit être désolidarisée des murs (bande résiliente 5-10 mm). Sinon le bruit contourne la sous-couche par les murs.",
          "2. Recouvrement insuffisant des lés — minimum 5 cm, scotch acoustique pour étanchéité aux fines de ciment.",
          "3. Compression excessive avant prise — pas de stockage de matériaux sur la sous-couche posée. Une compression > 10% dégrade la performance ΔLw.",
          "4. Mauvais sens de pose Wave 3D / Itapur — les profils 3D ont un sens, vérifier la fiche technique fabricant.",
          "5. Chape trop fine — sous DAMTEC Standard, prévoir 5 cm minimum de chape ciment ou anhydrite. Sous-épaisseur = perte d'inertie + fissures.",
        ],
      },
      {
        heading: "DTU 52.10 et 26.2 : ce qu'il faut retenir",
        body: `Le **DTU 52.10** (Mise en œuvre des sous-couches isolantes sous chape) est la référence française. Il impose : ATE pour le produit, désolidarisation périphérique, recouvrement des lés, épaisseur minimale de chape selon l'épaisseur de sous-couche, contrôles de planéité.\n\nLe **DTU 26.2** (Chapes et dalles à base de liants hydrauliques) précise les types de chapes admissibles. Compatibilité chape anhydrite : vérifier la fiche technique du produit, certaines mousses ne sont pas adaptées à l'eau libre des chapes anhydrites.\n\nPour les ouvrages hors DTU (rénovation légère, ouvrage hors logement), la responsabilité technique reste à l'entreprise — l'absence d'ATE n'interdit pas mais demande une analyse risque.`,
      },
    ],
    products: [
      { slug: "damtec-standard", why: "ATE, ΔLw 26 dB, polyvalent logement" },
      { slug: "damtec-black-uni", why: "ATE, optimisé épaisseur fine 5/8/10 mm" },
      { slug: "damtec-black-uni-b1", why: "ATE + classement feu B1 (ERP, hôtels)" },
      { slug: "damtec-estra", why: "ATE, ΔLw 30 dB, performance premium" },
      { slug: "damtec-itapur", why: "Sous parquet flottant 4 mm" },
      { slug: "damtec-wave-3d", why: "Sous parquet, profil 3D anti-tassement" },
      { slug: "top-acoustique-rubber-ecomat", why: "Sans ATE, économique, rénovation" },
      { slug: "top-rubbercork", why: "Caoutchouc + liège, polyvalent" },
    ],
    faqs: [
      {
        question: "Quelle différence entre une sous-couche avec ATE et sans ATE ?",
        answer:
          "L'ATE (Agrément Technique Européen) atteste qu'un produit a passé une évaluation technique selon le règlement (UE) 305/2011. Pour les logements collectifs neufs et la plupart des ERP soumis à garantie décennale, le bureau de contrôle exige une sous-couche ATE. Pour la rénovation ou les ouvrages hors DTU, des produits sans ATE peuvent être utilisés sous responsabilité de l'entreprise.",
      },
      {
        question: "Comment lire la valeur ΔLw d'une fiche technique ?",
        answer:
          "ΔLw (en dB) est la réduction du bruit d'impact apportée par la sous-couche, mesurée en laboratoire selon EN ISO 717-2. Plus la valeur est élevée, mieux c'est. Une sous-couche à ΔLw 26 dB transforme un plancher béton brut bruyant (78 dB) en plancher conforme NRA (52 dB). Attention : la valeur in-situ est généralement 3-5 dB inférieure à la valeur laboratoire.",
      },
      {
        question: "Quelle épaisseur de sous-couche pour un logement collectif neuf ?",
        answer:
          "Pour un logement neuf avec dalle 16-20 cm respectant la NRA (L'nT,w ≤ 58 dB), DAMTEC Standard 8 mm ou DAMTEC Black Uni 8 mm sont des choix sûrs. Pour cibler 55 dB (chambres, hôtels, écoles), passer à DAMTEC Estra 17 mm ou ajouter une chape sèche complémentaire.",
      },
      {
        question: "Le DAMTEC est-il compatible avec une chape anhydrite ?",
        answer:
          "Oui. Toutes les sous-couches DAMTEC (Standard, Black Uni, Estra) sont compatibles avec les chapes anhydrites (sulfate de calcium) et ciment. Vérifier la fiche technique pour le mode de pose (recouvrement des lés, étanchéité aux fines de ciment).",
      },
      {
        question: "Combien coûte une sous-couche acoustique au m² ?",
        answer:
          "Les prix varient selon l'épaisseur et la performance : 4-8 €/m² pour les produits sans ATE en rénovation (TOP Rubbercork, Ecomat), 8-15 €/m² pour les DAMTEC standard avec ATE, et 18-30 €/m² pour les solutions premium type DAMTEC Estra 17 mm. Devis gratuit sur demande.",
      },
      {
        question: "Faut-il aussi traiter les murs pour l'acoustique ?",
        answer:
          "Pour le bruit d'impact (pas, chute), la sous-couche sous chape suffit si la désolidarisation périphérique est correctement réalisée (bande résiliente entre chape et murs). Pour le bruit aérien (voix, télévision), oui : il faut traiter les cloisons (doublage placo + laine minérale) et les portes (joints, étanchéité périphérique).",
      },
    ],
    related: ["sol-salle-de-sport-pro", "anti-vibration-equipement-industriel"],
  },
];

export const getGuideBySlug = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);

export const allGuideSlugs = (): string[] => guides.map((g) => g.slug);

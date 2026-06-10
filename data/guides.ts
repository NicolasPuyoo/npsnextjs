// Long-form pillar / cluster guides. Each guide ranks on a primary keyword
// and serves as a hub linking to related products + sub-pages.
//
// Authoring rules:
// - All product references match data/products.ts (verified slugs + specs).
// - Numeric performance values (ΔLw, αw, pressure) cite exactly what's in
//   the product spec strings — no extrapolation.
// - Norms (DTU, EN, NRA) are publicly published; references are verifiable.
// - No invented case studies, client names, delivery times, or partnerships.
// - When precise numbers depend on context (covering type, chape thickness),
//   we say so and direct readers to the product datasheet.

export type GuideSection = {
  heading: string; // H2
  body: string; // paragraphs separated by \n\n
  bullets?: string[]; // optional bullet list rendered after body
};

export type GuideProductRef = {
  slug: string;
  why: string; // one-line rationale grounded in real spec
};

export type GuideFaq = { question: string; answer: string };

export type Guide = {
  slug: string;
  title: string;
  description: string;
  primaryKeyword: string;
  intro: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  sections: GuideSection[];
  products: GuideProductRef[];
  faqs: GuideFaq[];
  related?: string[];
  embed?: "epaisseur-calculator";
};

// === GUIDES ===

export const guides: Guide[] = [
  {
    slug: "isolation-acoustique-sous-chape",
    title: "Isolation acoustique sous chape : guide complet (ATE, ΔLw, DTU 52.10)",
    description:
      "Différence entre sous-chape ATE, sous revêtements de sol, et sans ATE. ΔLw expliqué, normes en vigueur, comparatif des solutions NPS. Guide pour archi, BET, entreprises.",
    primaryKeyword: "isolation acoustique sous chape",
    intro:
      "L'isolation acoustique sous chape est traitée par trois familles de produits selon le type d'ouvrage : sous-couches sous chape (souvent avec ATE pour les ouvrages sous DTU), sous-couches sous revêtements de sol (parquet, stratifié, carrelage), et solutions sans ATE pour la rénovation. Ce guide explique les différences, les normes en jeu, et compare nos produits selon votre besoin.",
    publishedAt: "2026-05-06",
    readingMinutes: 10,
    embed: "epaisseur-calculator",
    sections: [
      {
        heading: "Trois familles de produits, trois usages",
        body: `**1. Sous-couches sous chape flottante** : posées entre le plancher porteur et la chape (ciment ou anhydrite). Elles désolidarisent acoustiquement la chape du gros oeuvre et réduisent les bruits d'impact transmis aux étages inférieurs. C'est la solution pour les ouvrages soumis aux DTU (DTU 52.10 notamment) et aux exigences réglementaires NRA / NRT, où un Agrément Technique Européen (ATE) est généralement demandé par le bureau de contrôle.\n\n**2. Sous-couches sous revêtements de sol** : posées entre la chape (ou le plancher) et le revêtement final (parquet flottant, stratifié, carrelage, vinyle, moquette). Elles améliorent l'isolation aux bruits de choc selon le type de revêtement. Performance ΔLw variable : très bonne sous moquette, plus modeste sous carrelage.\n\n**3. Sous-couches sans ATE** : alternatives économiques pour la rénovation, les ouvrages hors champ DTU, ou les chantiers où la certification ATE n'est pas exigée par le maître d'ouvrage.`,
      },
      {
        heading: "ΔLw, L'nT,w, αw : décoder les indicateurs",
        body: `**ΔLw (en dB)** : amélioration apportée par la sous-couche, mesurée en laboratoire selon EN ISO 717-2. C'est la valeur affichée sur les fiches techniques. Plus c'est haut, mieux c'est. Attention : la valeur dépend de la configuration de mesure (sous chape ciment 50 mm, sous moquette, sous parquet…). Vérifier la configuration sur la fiche technique.\n\n**L'nT,w (en dB)** : niveau de bruit d'impact mesuré in-situ dans le logement de réception, après pose complète. C'est ce que la NRA contrôle. La NRA impose L'nT,w ≤ 58 dB en logement collectif neuf. Estimation simplifiée : L'nT,w ≈ Ln,w (dalle nue) − ΔLw. Prévoir 3-5 dB de marge entre laboratoire et in-situ.\n\n**αw (coefficient d'absorption pondéré)** : pas lié au bruit d'impact. C'est l'absorption de l'énergie sonore aérienne, utile pour le confort en open space ou auditorium. Une sous-couche dense a généralement un αw faible — son rôle est ailleurs.`,
      },
      {
        heading: "Quand un ATE est-il exigé",
        body: `L'**Agrément Technique Européen** (ATE, parfois appelé ETA en anglais) est délivré selon le règlement (UE) n°305/2011. Pour les ouvrages soumis à DTU et garantie décennale (logement collectif neuf, ERP, certains tertiaires), l'ATE est habituellement demandé par le bureau de contrôle.\n\nPour les ouvrages **hors DTU** (rénovation légère, second oeuvre tertiaire non logement, ateliers), des produits sans ATE peuvent être employés sous la responsabilité de l'entreprise. La présence ou non d'ATE pour un produit donné doit être vérifiée sur sa fiche technique fabricant — n'hésitez pas à nous contacter pour confirmer la conformité de votre projet.`,
      },
      {
        heading: "Solutions NPS — sous-couches sous chape",
        body: `Pour la pose entre plancher porteur et chape flottante, nos sous-couches NPS de cette catégorie :`,
        bullets: [
          "DAMTEC Estra (4, 6, 8 mm) — granulat de caoutchouc, ΔLw 19-21 dB sous chape ciment 50 mm",
          "DAMTEC Estra 3D — version profilée 3D",
          "DAMTEC Wave 3D (8/4 ou 17/8 mm) — granulat polyuréthane profilé 3D, ΔLw 25-35 dB selon configuration",
          "DAMTEC 3D 17/8 — version fibres de caoutchouc, profilée 3D",
        ],
      },
      {
        heading: "Solutions NPS — sous revêtements de sols",
        body: `Pour la pose entre chape (ou plancher) et revêtement de sol final, nos sous-couches NPS de cette catégorie :`,
        bullets: [
          "DAMTEC Standard (2-6 mm) — granulat caoutchouc + liège, ΔLw 18 dB (carrelage) à 29 dB (moquette) selon revêtement",
          "DAMTEC Black Uni (2-6 mm) — mousse PU + liège, ΔLw 16-25 dB selon revêtement",
          "DAMTEC Black Uni B1 — version classée feu B1 pour ERP",
          "DAMTEC Itapur (2, 3, 5 mm) — sous parquet, stratifié, carrelage",
          "DAMTEC Itapur B1 — version ignifugée Bfl-s1 pour bâtiments publics et commerciaux",
        ],
      },
      {
        heading: "Solutions NPS — sans ATE (rénovation)",
        body: `Pour les chantiers hors DTU ou en rénovation où l'ATE n'est pas exigé :`,
        bullets: [
          "TOP Acoustique Rubber Ecomat (2-20 mm) — granulé caoutchouc + PU, ΔLw 16-21 dB sous chape 45 mm, certifié A+",
          "TOP Rubbercork (2-6 mm) — mélange caoutchouc + liège, ΔLw 18-20 dB, certifié A+ et Blue Angel",
        ],
      },
      {
        heading: "Comment choisir : 4 questions à se poser",
        body: `**Question 1 — Mon ouvrage est-il soumis à DTU ?**\nLogement collectif neuf, ERP, hôtel, école : oui. Rénovation légère, ouvrage hors logement collectif : généralement non. Le bureau de contrôle est l'arbitre.\n\n**Question 2 — Sous chape ou sous revêtement ?**\nPose en gros oeuvre (entre plancher et chape) : famille "sous chape". Pose en finition (entre chape ou plancher et revêtement) : famille "sous revêtements". Les deux sont parfois combinées sur un même chantier.\n\n**Question 3 — Y a-t-il un classement feu requis ?**\nERP, hôtels, écoles : oui (B1, Bfl-s1, Cfl-s1 selon catégorie). Choisir une variante "B1" ou "FR" du produit.\n\n**Question 4 — Quel est le revêtement de sol final ?**\nCela impacte directement la performance ΔLw. Une même sous-couche peut donner 16 dB sous carrelage ou 25 dB sous textile. Toujours vérifier la valeur ΔLw correspondant à votre configuration sur la fiche technique.\n\nLe calculateur ci-dessous propose une orientation produit selon ces 4 critères. Pour un dimensionnement précis, contactez-nous avec votre cahier des charges.`,
      },
      {
        heading: "Erreurs de pose à éviter",
        body: `Quelle que soit la sous-couche choisie, les erreurs de pose dégradent la performance acoustique de plusieurs dB :`,
        bullets: [
          "1. Désolidarisation périphérique oubliée — la chape doit être désolidarisée des murs (bande résiliente). Sinon le bruit contourne par les murs.",
          "2. Recouvrement insuffisant des lés — minimum recommandé 5 cm, scotch acoustique pour étanchéité aux fines de ciment.",
          "3. Stockage de matériaux sur la sous-couche posée — la compression altère la performance ΔLw.",
          "4. Sens de pose pour les profils 3D (Wave 3D, Estra 3D) — vérifier la fiche technique fabricant.",
          "5. Chape sous-épaisse — suivre les épaisseurs minimales de chape recommandées par le DTU 52.10.",
        ],
      },
    ],
    products: [
      { slug: "damtec-estra", why: "Sous chape ciment, granulat caoutchouc, ΔLw 19-21 dB" },
      { slug: "damtec-wave-3d", why: "Sous chape, profilé 3D, ΔLw jusqu'à 35 dB selon config" },
      { slug: "damtec-3d-17-8", why: "Sous chape, fibres caoutchouc, profilé 3D" },
      { slug: "damtec-standard", why: "Sous revêtements, ΔLw 18-29 dB selon revêtement" },
      { slug: "damtec-black-uni", why: "Sous revêtements, mousse PU + liège" },
      { slug: "damtec-black-uni-b1", why: "Sous revêtements, classement feu B1" },
      { slug: "top-acoustique-rubber-ecomat", why: "Sans ATE, large gamme 2-20 mm, certifié A+" },
      { slug: "top-rubbercork", why: "Sans ATE, caoutchouc + liège, Blue Angel" },
    ],
    faqs: [
      {
        question: "Quelle différence entre sous-chape avec ATE et sans ATE ?",
        answer:
          "Un Agrément Technique Européen (ATE / ETA) atteste qu'un produit a passé une procédure d'évaluation technique selon le règlement (UE) 305/2011. Pour les ouvrages sous DTU avec garantie décennale, le bureau de contrôle exige généralement un ATE. Pour la rénovation et les ouvrages hors DTU, des produits sans ATE peuvent être utilisés sous responsabilité de l'entreprise.",
      },
      {
        question: "Comment lire une valeur ΔLw sur une fiche technique ?",
        answer:
          "ΔLw (en dB) est la réduction du bruit d'impact apportée par la sous-couche, mesurée en laboratoire selon EN ISO 717-2. La valeur dépend de la configuration de test (épaisseur de chape, type de revêtement). Toujours vérifier la configuration utilisée pour obtenir le chiffre. Pour estimer l'in-situ, prévoir 3-5 dB de marge.",
      },
      {
        question: "DAMTEC Standard fonctionne-t-il avec du carrelage ?",
        answer:
          "Oui. Selon la fiche technique fabricant, DAMTEC Standard offre ΔLw = 18 dB sous carrelage. C'est moins performant que sous moquette (29 dB) ou stratifié (20 dB) car le carrelage transmet plus directement les chocs, mais c'est une amélioration significative par rapport à un sol nu.",
      },
      {
        question: "Quelle épaisseur DAMTEC Estra pour un logement collectif ?",
        answer:
          "DAMTEC Estra existe en 4, 6 et 8 mm. Selon la fiche technique : ΔLw = 19 dB en 4 mm sous chape ciment 50 mm, 19-20 dB en 6 mm, 21 dB en 8 mm sous chape ciment 50 mm. Le choix dépend de la cible acoustique (NRA seuil 58 dB ou objectif premium plus exigeant) et des contraintes d'épaisseur disponibles.",
      },
      {
        question: "Peut-on combiner sous-couche sous chape et sous revêtement ?",
        answer:
          "Oui, et c'est même fréquent dans les projets visant un confort acoustique élevé (hôtels haut de gamme, résidences premium). Une sous-couche sous chape + une sous-couche sous parquet flottant additionnent partiellement leurs effets. La méthode de calcul est complexe — nous consulter pour le dimensionnement.",
      },
      {
        question: "Combien coûte une sous-couche acoustique au m² ?",
        answer:
          "Le prix dépend du produit, de l'épaisseur et du volume. Pour avoir une fourchette précise selon votre projet, demandez un devis avec les dimensions et le type d'ouvrage — réponse sous 24h avec recommandation produit.",
      },
    ],
    related: ["sol-salle-de-sport-pro", "anti-vibration-equipement-industriel"],
  },

  {
    slug: "sol-salle-de-sport-pro",
    title: "Sol salle de sport pro : guide pour choisir un revêtement EN 14904",
    description:
      "Sol caoutchouc EN 14904 pour salles de fitness, musculation, haltérophilie, multisports. Comparatif des SPORTEC NPS, performance ΔLw, normes feu, dimensionnement.",
    primaryKeyword: "sol salle de sport pro",
    intro:
      "Choisir un sol de salle de sport professionnel demande d'arbitrer entre performance acoustique (ΔLw), classement feu, épaisseur (selon le sport pratiqué), format (rouleau, dalle, puzzle) et budget. Ce guide explique les exigences EN 14904, présente nos solutions SPORTEC NPS et indique comment dimensionner par typologie de zone.",
    publishedAt: "2026-05-06",
    readingMinutes: 9,
    sections: [
      {
        heading: "EN 14904 : la norme des sols sportifs intérieurs",
        body: `La norme **EN 14904** s'applique aux sols sportifs intérieurs multisports. Elle définit les exigences de performance pour : amortissement (force reduction), rebond vertical de balle, résistance au glissement, planéité, résistance au roulement.\n\nCette norme concerne les sols de gymnases, salles polyvalentes et certaines salles de sport collectives. Les sols de salles de fitness (musculation, cardio, crossfit) ne sont pas tous soumis à EN 14904 stricto sensu, mais les exigences sont similaires en pratique : amortissement des chocs, durabilité, sécurité.\n\nÀ vérifier sur la fiche technique de chaque produit : conformité EN 14904 le cas échéant, classement au feu (Cfl-s1, Bfl-s1 selon ERP), valeur ΔLw, certifications environnementales (A+, AgBB, Blue Angel).`,
      },
      {
        heading: "Quelle solution selon la zone d'usage",
        body: `Une salle de sport se découpe en zones, chacune avec ses contraintes :`,
        bullets: [
          "Cardio (vélos, tapis, elliptiques) — sol fin (4-8 mm), résistant à l'abrasion. SPORTEC color en rouleau convient.",
          "Fonctionnel / fitness libre — sol moyen (8-12 mm), bonne absorption des chocs. SPORTEC color 8-12 mm ou puzzle 8-10 mm.",
          "Musculation — sol épais (10-30 mm), résistant aux chutes de poids. SPORTEC base FR ou puzzle 10 mm en sous-couche, finition au choix.",
          "Haltérophilie / zones de drop — épaisseur 30-70 mm. SPORTEC style 30-70 mm avec SPORTEC base FR 30 mm en dalle de protection sous plateforme bois.",
          "Multisports / gymnase — surface conforme EN 14904, attention au coefficient de friction. À étudier au cas par cas.",
          "Outdoor (terrasse fitness, terrains multi-jeux) — version drainante. SPORTEC base MS ou SPORTEC style version UNI versa.",
        ],
      },
      {
        heading: "Catalogue SPORTEC NPS — fiche technique condensée",
        body: `Tous nos produits SPORTEC sont en granulat de caoutchouc recyclé aggloméré au polyuréthane. Performance et formats varient :`,
        bullets: [
          "SPORTEC style — dalles 500×500 ou 1000×500 mm, épaisseurs 30 et 70 mm. Réduction des bruits de pas jusqu'à 42 dB. Variantes feu Efl ou Cfl-s1.",
          "SPORTEC color — rouleaux 1500 mm de large, épaisseurs 4-12 mm. Réduction des bruits de pas jusqu'à 18 dB. Surface granuleuse avec inserts EPDM colorés.",
          "SPORTEC base FR — dalle 30 mm EPDM agglomérée PU, format 500×500 ou 1000×500 mm. Classement feu Cfl-s1 (B1) pour ERP. Absorption choc 51 %, ΔLw 25 dB. Posée sous plateforme bois pour zones de drop haltérophilie.",
          "SPORTEC base MS — dalle 30 mm caoutchouc recyclé agglomérée PU, format 500×500, 1000×500 ou 1000×1000 mm. Protection contre les chutes de poids, intérieur comme extérieur.",
          "SPORTEC puzzle 2.0 — dalles emboîtables sans colle 1000×1000 mm, épaisseurs 6/8/10 mm. ΔLw 17-18 dB. Solution amovible.",
        ],
      },
      {
        heading: "Classement feu : ce qu'il faut retenir",
        body: `Pour les ERP (établissements recevant du public), un classement feu est exigé. Les niveaux français correspondants à la classification européenne EN 13501-1 :\n\n- **B1 / Cfl-s1** : exigé pour les ERP de catégorie 1 à 4 (capacité élevée).\n- **B2 / Efl** : suffisant pour ERP catégories supérieures et résidentiel.\n\nDans notre gamme, **SPORTEC base FR** est classé Cfl-s1 (B1) et adapté aux ERP exigeants. **SPORTEC style** existe en variantes Efl (B2) et Cfl-s1 (B1) selon la finition. Vérifier le classement requis avec votre bureau de contrôle.`,
      },
      {
        heading: "Empreinte carbone et certifications",
        body: `Plusieurs de nos produits SPORTEC affichent une empreinte carbone calculée (PCF) sur la fiche technique. Exemple : SPORTEC style en 30 mm avec finition color = 20,2 kg CO₂e/m². Utile pour les projets RE2020 ou les exigences de bilan carbone projet.\n\nCertifications courantes sur la gamme SPORTEC : A+ (étiquetage sanitaire COV France), AgBB (santé indoor Allemagne), Indoor Air Comfort Gold, Blue Angel (Ange Bleu — exigence environnementale élevée). Vérifier produit par produit.`,
      },
    ],
    products: [
      { slug: "sportec-style", why: "Dalles 30/70 mm pour zones haltérophilie, jusqu'à 42 dB" },
      { slug: "sportec-color", why: "Rouleau 4-12 mm pour cardio et fonctionnel, jusqu'à 18 dB" },
      { slug: "sportec-base-fr", why: "Dalle 30 mm Cfl-s1 pour zones drop haltérophilie (ERP)" },
      { slug: "sportec-base-ms", why: "Dalle 30 mm protection chutes de poids, indoor/outdoor" },
      { slug: "sportec-puzzle-2-0", why: "Dalles modulaires sans colle, ΔLw 17-18 dB" },
    ],
    faqs: [
      {
        question: "Quelle épaisseur de sol pour la musculation libre ?",
        answer:
          "Pour la musculation avec poids libres (haltères, barres jusqu'à 200 kg), prévoir 10-15 mm en rouleau caoutchouc (SPORTEC color 12 mm) ou en dalle puzzle (SPORTEC puzzle 10 mm). Pour les zones plus exigeantes, monter en épaisseur ou ajouter une sous-couche SPORTEC base FR.",
      },
      {
        question: "Faut-il une plateforme dédiée pour l'haltérophilie ?",
        answer:
          "Pour les zones de drop (chute de barres olympiques), oui. La configuration recommandée combine une plateforme bois sur SPORTEC base FR (dalle 30 mm Cfl-s1, absorption choc 51 %) + un revêtement SPORTEC style 30 ou 70 mm autour. Cela protège le sol porteur et réduit le bruit structurel transmis aux étages.",
      },
      {
        question: "SPORTEC respecte-t-il la norme EN 14904 ?",
        answer:
          "La norme EN 14904 concerne les sols sportifs intérieurs multisports. Selon la version SPORTEC et la configuration de pose, la conformité est documentée sur la fiche technique. Pour un projet relevant strictement de cette norme (gymnase, salle polyvalente), demander la fiche technique du produit visé.",
      },
      {
        question: "Quelle solution pour une salle de fitness en rénovation rapide ?",
        answer:
          "Pour une installation sans colle, amovible et rapide : SPORTEC puzzle 2.0 (dalles emboîtables 1000×1000 mm en 6, 8 ou 10 mm). Pose en quelques heures, démontable. Pour une finition plus pérenne mais toujours rapide, SPORTEC color en rouleau collé.",
      },
      {
        question: "Combien coûte un sol de salle de sport pro au m² ?",
        answer:
          "Le prix dépend du produit, de l'épaisseur, du format, des accessoires (plinthes, raccords) et de la pose. Demandez un devis avec votre projet (surface, zones d'usage, ERP ou non) — réponse sous 24h avec recommandation produit.",
      },
    ],
    related: ["isolation-acoustique-sous-chape", "anti-vibration-equipement-industriel"],
  },

  {
    slug: "anti-vibration-equipement-industriel",
    title: "Anti-vibration équipement industriel : choisir DAMTEC vibra ou Vibrafoam",
    description:
      "Désolidariser un équipement (groupe, compresseur, CTA, machine) avec DAMTEC vibra (0,03 - 1,5 N/mm²) ou Vibrafoam (jusqu'à 0,60 N/mm²). Dimensionnement, fréquence propre, choix produit.",
    primaryKeyword: "anti-vibration équipement industriel",
    intro:
      "La désolidarisation anti-vibratoire évite que les vibrations d'un équipement (groupe électrogène, compresseur, CTA, machine tournante, transformateur) se transmettent au bâtiment porteur. Le choix produit dépend principalement de la pression statique exercée et de la fréquence d'excitation. Ce guide présente nos solutions et la méthode de dimensionnement.",
    publishedAt: "2026-05-06",
    readingMinutes: 8,
    sections: [
      {
        heading: "Pourquoi désolidariser",
        body: `Une machine tournante (moteur électrique, compresseur, ventilateur de CTA) génère des vibrations à sa fréquence d'excitation (souvent liée à sa vitesse de rotation). Sans désolidarisation, ces vibrations se propagent dans la structure du bâtiment sous forme de **bruits solidiens** (transmission par les solides) et peuvent émerger plusieurs étages plus loin sous forme de bourdonnement audible, voire de fatigue de la structure.\n\nDésolidariser, c'est intercaler un matériau élastique (sous-couche caoutchouc ou élastomère PU) entre l'équipement et son socle. Bien dimensionné, ce matériau réduit drastiquement la transmission des vibrations.`,
      },
      {
        heading: "DAMTEC vibra : 7 versions, 7 plages de pression",
        body: `La gamme DAMTEC vibra est constituée de granulés de caoutchouc recyclé liés au polyuréthane. Chaque référence est calibrée pour une **pression admissible maximale** spécifique :`,
        bullets: [
          "DAMTEC vibra 30 — 0,03 N/mm² (équipements légers, ~3 t/m²)",
          "DAMTEC vibra 50 — 0,05 N/mm² (~5 t/m²)",
          "DAMTEC vibra 100 — 0,10 N/mm² (~10 t/m²)",
          "DAMTEC vibra 170 — 0,17 N/mm²",
          "DAMTEC vibra 280 — 0,28 N/mm² (~28 t/m²)",
          "DAMTEC vibra 700 — 0,70 N/mm² (~70 t/m²)",
          "DAMTEC vibra 1500 — 1,5 N/mm² (charges lourdes, ~150 t/m²)",
        ],
      },
      {
        heading: "Vibrafoam (UltraGYM) et Vibradyn : élastomères PU",
        body: `**Vibrafoam (UltraGYM)** est un élastomère de polyuréthane à cellules fermées. Disponible en 13 types de dureté (couleurs différentes), épaisseurs 12,5 et 25 mm. Charge admissible variable selon la dureté : 0,02 à 0,60 N/mm². Plage de fréquence à partir de 8 Hz. Réduction des bruits solidiens jusqu'à 35 dB.\n\n**Vibradyn** est un élastomère PU à cellules fermées haute résilience, conçu pour les charges dynamiques intenses (machines industrielles, fondations soumises à des charges variables). Réduction des bruits solidiens jusqu'à 35 dB.\n\nLes élastomères PU se distinguent du caoutchouc par leur capacité à travailler à des fréquences basses (à partir de 8 Hz pour Vibrafoam) et à supporter des charges dynamiques. Choix produit selon le diagnostic vibratoire de l'équipement.`,
      },
      {
        heading: "Comment dimensionner",
        body: `**Étape 1 — Calculer la pression statique** : poids de l'équipement (en kN) divisé par la surface de pose (en m²) = pression en N/mm² (1 N/mm² = 1 MPa = 100 t/m²).\n\n**Étape 2 — Choisir le produit dont la pression admissible est ≥ pression statique × 1,5 à 2** (marge de sécurité). Travailler trop près de la pression admissible maximale dégrade la performance vibratoire et la durée de vie.\n\n**Étape 3 — Vérifier la fréquence d'excitation** : la fréquence propre de l'isolation doit être inférieure à 1/√2 fois la fréquence d'excitation, idéalement 1/3. Pour une machine tournant à 1 500 tr/min (25 Hz), la fréquence propre cible est ≤ 8-10 Hz. Vibrafoam et Vibradyn descendent à 8 Hz.\n\nPour les équipements critiques (générateur > 100 kVA, machine tournante haute vitesse, climatisation centrale d'immeuble), demander une **étude vibratoire spécifique** avant choix produit.`,
      },
      {
        heading: "Cas d'usage typiques",
        body: `Les configurations les plus courantes :`,
        bullets: [
          "Groupe électrogène 50-200 kVA (~3-8 t/m²) → DAMTEC vibra 30 ou 50",
          "Compresseur d'air industriel → DAMTEC vibra 50 à 170 selon poids",
          "Centrale de traitement d'air (CTA) en toiture → DAMTEC vibra 50 à 100, ou Vibrafoam dureté moyenne",
          "Transformateur électrique → DAMTEC vibra 280 ou 700",
          "Machine d'usinage / presse → étude vibratoire, souvent Vibradyn ou Vibrafoam dureté élevée",
          "Pompe de relevage / surpresseur → DAMTEC vibra 50 ou 100",
        ],
      },
    ],
    products: [
      { slug: "damtec-vibra-30", why: "Pression jusqu'à 0,03 N/mm², équipements légers" },
      { slug: "damtec-vibra-50", why: "Pression jusqu'à 0,05 N/mm²" },
      { slug: "damtec-vibra-100", why: "Pression jusqu'à 0,10 N/mm²" },
      { slug: "damtec-vibra-280", why: "Pression jusqu'à 0,28 N/mm²" },
      { slug: "damtec-vibra-700", why: "Pression jusqu'à 0,70 N/mm², charges lourdes" },
      { slug: "damtec-vibra-1500", why: "Pression jusqu'à 1,5 N/mm², très lourdes" },
      { slug: "vibrafoam", why: "Élastomère PU 13 duretés, fréquence dès 8 Hz" },
      { slug: "vibradyn", why: "Élastomère PU haute résilience, charges dynamiques" },
    ],
    faqs: [
      {
        question: "Quelle différence entre DAMTEC vibra et Vibrafoam ?",
        answer:
          "DAMTEC vibra est en granulé de caoutchouc recyclé lié polyuréthane, optimisé pour les pressions modérées (0,03 à 1,5 N/mm²). Vibrafoam est un élastomère PU à cellules fermées, qui permet de descendre à des fréquences plus basses (dès 8 Hz) et de supporter des charges dynamiques. Le choix dépend du diagnostic vibratoire de l'équipement.",
      },
      {
        question: "Quelle pression admissible pour un compresseur ?",
        answer:
          "Cela dépend du poids du compresseur et de sa surface de pose. Pour un compresseur de 1,5 tonne sur 1 m², pression statique = 0,015 N/mm². Avec une marge de sécurité 2x, viser un produit ≥ 0,03 N/mm² → DAMTEC vibra 30 convient. Toujours vérifier la fréquence d'excitation pour valider le choix.",
      },
      {
        question: "Faut-il réaliser une étude vibratoire ?",
        answer:
          "Pour les équipements critiques (groupe > 100 kVA, machine tournante haute vitesse, transformateur de puissance, CTA d'immeuble), oui. L'étude calcule la fréquence d'excitation, la fréquence propre cible, la masse à supporter et propose le produit + l'épaisseur. Pour les équipements simples (pompe domestique, petit compresseur), un dimensionnement par règles de pression suffit souvent.",
      },
      {
        question: "Vibrafoam fonctionne-t-il pour des fréquences très basses ?",
        answer:
          "Vibrafoam descend à une plage de fréquence à partir de 8 Hz. Pour des excitations encore plus basses (machines tournantes très lentes, < 600 tr/min), il faut soit un produit dédié soit une combinaison de masses et raideurs spécifique — étude au cas par cas.",
      },
      {
        question: "Quelle épaisseur DAMTEC vibra choisir ?",
        answer:
          "Selon la référence : DAMTEC vibra 30 et 50 existent en 17/8 mm ou 25/7 mm (profilés 3D). DAMTEC vibra 100, 280 et 700 en 15, 20 ou 30 mm (lisses). DAMTEC vibra 1500 en 10 mm. L'épaisseur influence la fréquence propre — pour un dimensionnement précis selon votre équipement, contactez-nous.",
      },
    ],
    related: ["isolation-acoustique-sous-chape", "sol-salle-de-sport-pro"],
  },

  {
    slug: "dtu-52-10",
    title: "DTU 52.10 : sous-couches acoustiques sous chape, ce qu'il faut savoir",
    description:
      "Le DTU 52.10 encadre la pose des sous-couches isolantes sous chape flottante. Champ d'application, exigences, ATE, types de chape compatibles, contrôles de pose.",
    primaryKeyword: "DTU 52.10",
    intro:
      "Le DTU 52.10 (Norme française NF P 61-203) est le document technique unifié qui encadre la mise en œuvre des sous-couches isolantes sous chape flottante en France. Il fixe les règles de l'art : produits éligibles, types de chapes compatibles, exigences de pose, contrôles. Référence pour les ouvrages sous garantie décennale.",
    publishedAt: "2026-05-06",
    readingMinutes: 5,
    sections: [
      {
        heading: "Champ d'application",
        body: `Le DTU 52.10 s'applique aux travaux de pose de sous-couches résilientes (acoustiques et/ou thermiques) sous chapes flottantes en intérieur, dans les bâtiments à usage d'habitation, de bureaux, et certains ERP. Il ne couvre pas les ouvrages industriels lourds, les piscines, ou les chapes spéciales (chauffantes, sur planchers techniques) qui relèvent de DTU dédiés.`,
      },
      {
        heading: "Exigences principales",
        body: `Les points clés du DTU 52.10 :`,
        bullets: [
          "Le produit doit disposer d'un Agrément Technique Européen (ATE) ou d'un Avis Technique en cours de validité.",
          "Désolidarisation périphérique obligatoire entre la chape et les éléments verticaux (murs, poteaux).",
          "Recouvrement des lés de la sous-couche avec étanchéité aux fines de ciment (scotch acoustique ou recouvrement adhésif).",
          "Épaisseur minimale de chape (ciment ou anhydrite) selon l'épaisseur de la sous-couche et le type de chape.",
          "Contrôle de planéité avant pose de la chape.",
          "Délais de séchage de la chape avant pose du revêtement final.",
        ],
      },
      {
        heading: "Types de chape compatibles",
        body: `Le DTU 52.10 distingue plusieurs types de chapes flottantes :\n\n- **Chape ciment** : chape traditionnelle au mortier de ciment, conforme au DTU 26.2.\n- **Chape anhydrite (sulfate de calcium)** : chape liquide auto-nivelante. Compatible avec la plupart des sous-couches mais l'eau libre demande une attention particulière (étanchéité aux lés indispensable).\n- **Chape spéciale** : chape allégée, fibrée, etc. — vérifier la compatibilité produit par produit.\n\nLa fiche technique de chaque sous-couche précise les types de chape compatibles. Toujours croiser avec votre cahier des charges.`,
      },
      {
        heading: "Sous-couches NPS conformes au DTU 52.10",
        body: `Notre gamme dédiée à la pose sous chape flottante (sous-catégorie "isolation-sous-chape" sur le site) :`,
        bullets: [
          "DAMTEC Estra (4, 6, 8 mm)",
          "DAMTEC Estra 3D",
          "DAMTEC Wave 3D (8/4 ou 17/8 mm)",
          "DAMTEC 3D 17/8",
        ],
      },
      {
        heading: "À demander au fabricant",
        body: `Avant validation par le bureau de contrôle, vérifier sur la fiche technique du produit visé : présence d'un ATE ou Avis Technique en cours de validité, performances ΔLw mesurées dans une configuration proche de votre projet, types de chape compatibles, épaisseurs disponibles, délais de pose et de séchage. Pour un produit NPS, contactez-nous : nous fournissons les fiches techniques officielles.`,
      },
    ],
    products: [
      { slug: "damtec-estra", why: "Sous chape ciment, ΔLw 19-21 dB" },
      { slug: "damtec-estra-3d", why: "Version profilée 3D" },
      { slug: "damtec-wave-3d", why: "Profilé 3D, ΔLw jusqu'à 35 dB selon config" },
      { slug: "damtec-3d-17-8", why: "Fibres caoutchouc, profilé 3D" },
    ],
    faqs: [
      {
        question: "Le DTU 52.10 est-il obligatoire ?",
        answer:
          "Le DTU n'est pas une obligation légale par lui-même, mais il définit les règles de l'art. Pour les ouvrages sous garantie décennale, l'absence de respect du DTU expose à une mise en cause de la responsabilité de l'entreprise. Le bureau de contrôle l'utilise comme référence d'évaluation.",
      },
      {
        question: "Que faire si mon produit n'a pas d'ATE ?",
        answer:
          "Le DTU 52.10 demande un ATE ou un Avis Technique. Sans cela, le produit est hors champ DTU et ne peut généralement pas être employé sur un ouvrage relevant du DTU. Pour les ouvrages hors DTU (rénovation, second oeuvre), des produits sans ATE peuvent être utilisés sous responsabilité de l'entreprise.",
      },
      {
        question: "Faut-il un produit ATE pour une rénovation d'appartement ?",
        answer:
          "En rénovation hors copropriété sous DTU, vous avez plus de latitude. Les produits NPS sans ATE (TOP Acoustique Rubber Ecomat, TOP Rubbercork) sont conçus pour ces cas. Si vous êtes en copropriété ou en rénovation lourde, le syndic ou l'architecte peut exiger un ATE — vérifier en amont.",
      },
    ],
    related: ["isolation-acoustique-sous-chape"],
  },

  {
    slug: "en-14904-sol-sportif",
    title: "EN 14904 : la norme des sols sportifs intérieurs expliquée",
    description:
      "EN 14904 fixe les exigences pour les sols sportifs intérieurs multisports : amortissement, rebond, glissement, planéité. Champ d'application, classes, conséquences pour le choix.",
    primaryKeyword: "EN 14904",
    intro:
      "La norme européenne EN 14904 (Sols sportifs — Spécifications pour les sols multisports intérieurs) définit les exigences techniques pour les sols sportifs des gymnases, salles polyvalentes et installations sportives intérieures. Elle est référencée par les fédérations sportives, les maîtres d'ouvrage publics et privés, et les bureaux de contrôle.",
    publishedAt: "2026-05-06",
    readingMinutes: 5,
    sections: [
      {
        heading: "Que mesure la norme",
        body: `La norme EN 14904 définit des essais et seuils pour plusieurs propriétés :`,
        bullets: [
          "Force reduction (amortissement) — capacité du sol à absorber l'énergie de chute, exprimée en %. Plus c'est élevé, plus le sol est confortable.",
          "Rebond vertical de balle — l'élasticité ressentie au rebond. Important pour les sports de balle.",
          "Résistance au glissement — coefficient de friction, mesuré pieds chaussés.",
          "Planéité et régularité — tolérances dimensionnelles.",
          "Résistance au roulement — pour les chariots et matériel sportif.",
          "Résistance à l'usure — durabilité.",
        ],
      },
      {
        heading: "Classes de sol",
        body: `EN 14904 distingue plusieurs **types** selon la combinaison amortissement + rebond :\n\n- **Type A** : forte absorption (zones sport scolaire, multisports).\n- **Type B** : amortissement aréique (ponctuel, sous le pied).\n- **Type C** : combiné (mix).\n- **Type P** : sols ponctuellement élastiques.\n\nLe choix dépend du sport pratiqué et du niveau de pratique (compétition / loisir).`,
      },
      {
        heading: "Quand EN 14904 s'applique-t-elle",
        body: `EN 14904 concerne les sols **multisports intérieurs** : gymnases, salles polyvalentes, halles des sports. Les sols spécifiques à un sport (parquet basketball, gazon synthétique foot indoor) peuvent relever d'autres normes ou cahiers des charges fédéraux.\n\nLes sols de salles de fitness pures (musculation, cardio, crossfit) ne sont pas tous soumis à EN 14904 stricto sensu, mais les exigences pratiques sont similaires : amortissement, sécurité, durabilité, classement feu.`,
      },
      {
        heading: "Et les sols NPS ?",
        body: `Notre gamme SPORTEC est conçue pour les usages sport et fitness avec différents niveaux de performance. Pour valider la conformité EN 14904 d'un produit donné dans votre projet (gymnase scolaire, salle polyvalente, installation FFBB / FFVB / FFHB…), demander la fiche technique : la conformité, le type, les valeurs mesurées y figurent.\n\nPour un projet de salle de fitness pure (sans contrainte EN 14904 stricte), le choix se fait sur d'autres critères : épaisseur selon type d'usage, classement feu, format (rouleau / dalle / puzzle), budget. Voir notre [guide sol salle de sport pro](/guide/sol-salle-de-sport-pro).`,
      },
    ],
    products: [
      { slug: "sportec-style", why: "Dalles 30/70 mm" },
      { slug: "sportec-color", why: "Rouleau 4-12 mm" },
      { slug: "sportec-base-fr", why: "Sous-couche Cfl-s1" },
    ],
    faqs: [
      {
        question: "EN 14904 est-elle obligatoire pour un gymnase scolaire ?",
        answer:
          "Pour les ouvrages publics (gymnases scolaires, équipements municipaux), le maître d'ouvrage référence généralement EN 14904 dans le CCTP. Le bureau de contrôle vérifie la conformité. Pour un équipement privé sans exigence formelle, c'est le maître d'ouvrage qui décide.",
      },
      {
        question: "Une salle de fitness doit-elle respecter EN 14904 ?",
        answer:
          "Pas systématiquement. EN 14904 cible les sols multisports. Pour une salle de fitness pure (musculation, cardio, crossfit), les exigences pratiques sont similaires (amortissement, classement feu) mais la conformité EN 14904 stricte n'est pas toujours demandée. À vérifier avec votre cahier des charges.",
      },
      {
        question: "Comment savoir si un sol est conforme EN 14904 ?",
        answer:
          "La fiche technique du produit indique la conformité, le type EN 14904 (A, B, C, P) et les valeurs mesurées en essais. Demander toujours la fiche technique au fournisseur avant validation.",
      },
    ],
    related: ["sol-salle-de-sport-pro"],
  },

  {
    slug: "sous-couche-parquet-flottant",
    title: "Sous-couche acoustique parquet flottant : quelle solution choisir",
    description:
      "Sous-couche pour parquet flottant et stratifié : différences caoutchouc / liège / mousse, performance ΔLw selon revêtement, certifications, comparatif des solutions NPS.",
    primaryKeyword: "sous-couche parquet flottant",
    intro:
      "Une sous-couche acoustique sous parquet flottant ou stratifié réduit le bruit d'impact (bruits de pas, chute d'objets) transmis aux étages inférieurs. Le bon choix dépend du type de parquet, de la performance acoustique recherchée, des certifications visées et de l'épaisseur disponible.",
    publishedAt: "2026-05-06",
    readingMinutes: 6,
    sections: [
      {
        heading: "Comprendre la performance ΔLw selon le revêtement",
        body: `Une sous-couche acoustique a une performance variable selon le revêtement de sol final. Quelques exemples tirés des fiches techniques NPS :\n\n- **DAMTEC Standard** : ΔLw = 18 dB sous carrelage, 19 dB sous parquet contrecollé 13 mm, 20 dB sous stratifié 8 mm, 29 dB sous moquette.\n- **DAMTEC Black Uni** : ΔLw = 16 dB sous parquet contrecollé 10 mm, 17 dB sous stratifié 8 mm, 18-19 dB sous parquet massif 16 mm.\n\nLe parquet flottant (stratifié ou contrecollé) est intermédiaire : moins absorbant que la moquette, plus que le carrelage. Choisir une sous-couche en sachant que la performance dépendra de votre revêtement final.`,
      },
      {
        heading: "Trois familles de sous-couches",
        body: `**Caoutchouc + liège** (DAMTEC Standard, TOP Rubbercork) : bon compromis acoustique / longévité. Densité élevée. Compatibilité large (parquet, stratifié, carrelage).\n\n**Mousse polyuréthane** (DAMTEC Black Uni, Black Uni B1) : bon comportement à compression, classement feu disponible (variante B1). Faible épaisseur possible (2-6 mm).\n\n**Caoutchouc + PU avec profil 3D** (DAMTEC Wave 3D) : profil 3D limite le tassement à long terme et améliore l'isolation. Surtout utilisé pour la pose sous chape flottante.`,
      },
      {
        heading: "Solutions NPS pour parquet flottant et stratifié",
        body: `Les produits NPS adaptés à la pose sous parquet flottant ou stratifié :`,
        bullets: [
          "DAMTEC Standard (2-6 mm) — caoutchouc + liège, granulat fin, large compatibilité revêtements",
          "DAMTEC Black Uni (2-6 mm) — mousse PU + liège, ΔLw 16-25 dB selon revêtement",
          "DAMTEC Black Uni B1 (2-6 mm) — version classement feu B1 pour ERP",
          "DAMTEC Itapur (2, 3, 5 mm) — granulats caoutchouc + PU, surface granuleuse",
          "DAMTEC Itapur B1 — version ignifugée Bfl-s1",
          "TOP Rubbercork (2-6 mm) — mélange caoutchouc + liège, certifié A+ et Blue Angel",
        ],
      },
      {
        heading: "Critères de choix",
        body: `**Pour un appartement en copropriété** : si l'ouvrage est sous DTU, vérifier l'exigence ATE — sinon TOP Rubbercork ou DAMTEC Standard suffisent.\n\n**Pour un ERP (hôtel, école, cabinet médical)** : exiger un classement feu — DAMTEC Black Uni B1 ou Itapur B1.\n\n**Pour un projet visant une certification environnementale** (HQE, BREEAM) : préférer les produits avec certifications A+, AgBB, Blue Angel — TOP Rubbercork les cumule.\n\n**Pour minimiser l'épaisseur** : DAMTEC Black Uni en 2 mm offre 16-19 dB selon revêtement, pour 2 mm seulement.`,
      },
    ],
    products: [
      { slug: "damtec-standard", why: "Caoutchouc + liège, ΔLw 18-29 dB selon revêtement" },
      { slug: "damtec-black-uni", why: "Mousse PU + liège, faible épaisseur" },
      { slug: "damtec-black-uni-b1", why: "Classement feu B1 pour ERP" },
      { slug: "damtec-itapur", why: "Sous parquet, stratifié, carrelage" },
      { slug: "damtec-itapur-b1", why: "Version ignifugée Bfl-s1" },
      { slug: "top-rubbercork", why: "Caoutchouc + liège, A+ et Blue Angel" },
    ],
    faqs: [
      {
        question: "Quelle épaisseur minimale pour une sous-couche parquet flottant ?",
        answer:
          "Une sous-couche dès 2-3 mm apporte déjà une amélioration significative (16-19 dB sous parquet selon le produit). Pour un confort acoustique élevé ou des exigences de copropriété, viser 5-6 mm. Au-delà, la pose devient plus délicate (parquet flottant compatible avec une sous-couche de 5 mm max selon les fabricants de parquet).",
      },
      {
        question: "Sous-couche caoutchouc ou mousse polyuréthane ?",
        answer:
          "Caoutchouc + liège : meilleure densité, longévité élevée, performance régulière. Mousse PU + liège : faible épaisseur disponible, classement feu accessible (B1), bon compromis poids / performance. Choix selon les contraintes du projet.",
      },
      {
        question: "Faut-il un classement feu pour un appartement ?",
        answer:
          "Pas pour un logement résidentiel privé classique. Pour un ERP (hôtel, cabinet médical, école, restaurant), oui : viser B1 (Bfl-s1). Pour un immeuble collectif neuf, le maître d'ouvrage peut exiger un classement même en partie privative — vérifier avec le bureau de contrôle.",
      },
      {
        question: "TOP Rubbercork vs DAMTEC Standard, lequel choisir ?",
        answer:
          "Les deux sont en caoutchouc + liège avec des performances ΔLw similaires. TOP Rubbercork ajoute des certifications (A+, AgBB, Blue Angel) utiles pour les certifications environnementales projet. DAMTEC Standard a une plus large gamme de retours d'expérience. Le prix peut différer — demander un devis.",
      },
    ],
    related: ["isolation-acoustique-sous-chape"],
  },

  {
    slug: "comment-choisir-sous-couche-acoustique",
    title: "Comment choisir une sous-couche acoustique : 5 questions",
    description:
      "Cinq questions pour orienter le choix d'une sous-couche acoustique : type d'ouvrage, position, classement feu, épaisseur, certifications. Logique de décision pour pros et particuliers.",
    primaryKeyword: "comment choisir sous-couche acoustique",
    intro:
      "Choisir une sous-couche acoustique se résume à 5 questions simples. Elles orientent vers la bonne famille de produit (sous chape, sous revêtement, avec ou sans ATE), la bonne performance ΔLw cible, et les contraintes ERP / feu. Voici la logique pas à pas.",
    publishedAt: "2026-05-06",
    readingMinutes: 5,
    sections: [
      {
        heading: "Question 1 — Quel ouvrage : neuf ou rénovation ?",
        body: `**Neuf sous DTU** (logement collectif, ERP, tertiaire neuf) : le bureau de contrôle exigera très probablement un produit avec **Agrément Technique Européen (ATE)**. Choisir dans la famille "sous-chape ATE" si la pose est sous chape, ou dans la famille "sous revêtements" avec ATE selon votre configuration.\n\n**Rénovation légère hors DTU** : produits sans ATE acceptables (TOP Acoustique Rubber Ecomat, TOP Rubbercork). Plus économique.\n\n**Rénovation lourde sous DTU** (rénovation d'immeuble collectif, transformation tertiaire majeure) : généralement ATE exigé.`,
      },
      {
        heading: "Question 2 — Sous chape ou sous revêtement ?",
        body: `**Sous chape flottante** (entre plancher porteur et chape) : famille "sous chape" — DAMTEC Estra, Estra 3D, Wave 3D, 3D 17/8. C'est de la pose en gros oeuvre.\n\n**Sous revêtement de sol** (entre chape et parquet / carrelage / moquette) : famille "sous revêtements" — DAMTEC Standard, Black Uni, Itapur. C'est de la pose en finition.\n\nSi le projet vise un confort acoustique élevé, les deux peuvent se combiner.`,
      },
      {
        heading: "Question 3 — ERP ou pas ?",
        body: `**ERP de catégorie 1 à 4** (forte capacité d'accueil) : classement feu B1 / Cfl-s1 généralement exigé. Choisir une variante "B1" du produit.\n\n**ERP catégories supérieures et résidentiel** : classement feu B2 / Efl souvent suffisant.\n\nVérifier avec le bureau de contrôle pour confirmer la classe de feu requise.`,
      },
      {
        heading: "Question 4 — Quelle performance ΔLw cible ?",
        body: `**NRA (logement collectif neuf)** : L'nT,w ≤ 58 dB. Avec une dalle béton 16-20 cm, une sous-couche apportant ΔLw 19-21 dB couvre la cible avec marge.\n\n**NRT (tertiaire)** : seuils plus stricts pour hôtels, écoles, santé (souvent 55 dB ou moins selon catégorie).\n\n**Confort premium** (résidence haut de gamme, hôtel 4-5*) : viser ΔLw ≥ 25 dB ou combiner deux sous-couches.\n\nPour un dimensionnement précis, voir notre [guide isolation acoustique sous chape](/guide/isolation-acoustique-sous-chape).`,
      },
      {
        heading: "Question 5 — Quelle épaisseur acceptable ?",
        body: `Si l'épaisseur disponible est très contrainte (< 3 mm), seule la famille "sous revêtements" en faible épaisseur convient (DAMTEC Black Uni 2 mm, DAMTEC Itapur 2 mm).\n\nPour 4-8 mm, la quasi-totalité des produits NPS sont accessibles.\n\nAu-delà de 10 mm, les sous-couches sous chape (Estra, Wave 3D 17/8) prennent le relais avec des performances ΔLw plus élevées.`,
      },
    ],
    products: [
      { slug: "damtec-estra", why: "Sous chape, conforme DTU 52.10" },
      { slug: "damtec-wave-3d", why: "Sous chape, profilé 3D, performance élevée" },
      { slug: "damtec-standard", why: "Sous revêtements, polyvalent" },
      { slug: "damtec-black-uni-b1", why: "Sous revêtements, classement B1 ERP" },
      { slug: "top-acoustique-rubber-ecomat", why: "Sans ATE, rénovation, certifié A+" },
    ],
    faqs: [
      {
        question: "Combien de sous-couches existe-t-il chez NPS ?",
        answer:
          "Notre gamme inclut 4 produits sous chape avec ATE (DAMTEC Estra, Estra 3D, Wave 3D, 3D 17/8), 5 produits sous revêtements (DAMTEC Standard, Black Uni, Black Uni B1, Itapur, Itapur B1), et 2 produits sans ATE (TOP Acoustique Rubber Ecomat, TOP Rubbercork). Au total, 11 références sous-couche.",
      },
      {
        question: "Comment vérifier la conformité ATE d'un produit ?",
        answer:
          "Demander la fiche technique officielle au fournisseur. L'ATE / ETA y est indiqué avec son numéro et sa date de validité. Le bureau de contrôle vérifie ce document avant validation. Pour les produits NPS, nous fournissons les fiches techniques officielles sur demande.",
      },
      {
        question: "Quelle est la différence entre ATE et Avis Technique ?",
        answer:
          "ATE / ETA = Agrément Technique Européen (règlement UE 305/2011). Reconnu dans toute l'UE. Avis Technique = procédure française du CSTB, applicable en France. Les deux sont acceptés par les bureaux de contrôle français selon le type d'ouvrage. Vérifier au cas par cas.",
      },
    ],
    related: ["isolation-acoustique-sous-chape", "dtu-52-10", "sous-couche-parquet-flottant"],
  },

  {
    slug: "acoustique-batiment-tertiaire",
    title: "Acoustique bâtiment tertiaire : NRT, RT60, αw — guide pour bureaux et open space",
    description:
      "Acoustique des bureaux open space, salles de réunion, plateaux tertiaires. Réglementation NRT, RT60 cible, αw, sols et sous-couches. Pour archi, BET, MOA tertiaires.",
    primaryKeyword: "acoustique bâtiment tertiaire",
    intro:
      "L'acoustique des bâtiments tertiaires (bureaux, plateaux open space, salles de réunion, espaces de coworking) est encadrée par la NRT (Nouvelle Réglementation Thermique appliquée à l'acoustique tertiaire) et par les bonnes pratiques métier. Ce guide explique les indicateurs (RT60, αw), les seuils habituels, et les solutions de sol qui contribuent à une acoustique tertiaire maîtrisée.",
    publishedAt: "2026-05-06",
    readingMinutes: 7,
    sections: [
      {
        heading: "Réglementation tertiaire : ce qu'il faut savoir",
        body: `Le bâtiment tertiaire (bureaux, commerces, ERP non logement) est soumis à plusieurs cadres :\n\n- **NRA tertiaire / NRT** : applicable à certaines catégories d'établissements (hôtels, écoles, santé, bureaux selon contexte).\n- **Code du travail** : impose un environnement sonore acceptable pour les salariés (R. 4213-5 et suivants).\n- **Référentiels privés** : HQE, BREEAM, WELL — incluent des critères acoustiques pour la certification.\n\nLes seuils précis varient selon la destination (bureaux open space, salles de réunion, restaurants d'entreprise, accueil). À vérifier au cas par cas avec le maître d'ouvrage et le bureau de contrôle.`,
      },
      {
        heading: "RT60 et αw : les deux indicateurs à connaître",
        body: `**RT60 (temps de réverbération)** : durée nécessaire pour qu'un son décroisse de 60 dB après extinction de la source. Mesuré en secondes. Plus le RT60 est court, plus l'espace est "mat" acoustiquement.\n\n- Open space confortable : RT60 ≈ 0,5 - 0,8 s\n- Salle de réunion : RT60 ≈ 0,5 - 0,7 s\n- Restaurant d'entreprise : RT60 ≈ 0,8 - 1,0 s\n- Hall d'accueil : RT60 ≈ 1,0 - 1,5 s acceptable\n\nUn RT60 trop élevé en open space (> 1 s) génère stress et fatigue cognitive — démontré par plusieurs études en santé au travail.\n\n**αw (coefficient d'absorption pondéré)** : capacité d'un matériau à absorber l'énergie sonore. Compris entre 0 (réfléchissant) et 1 (totalement absorbant). Mesuré selon EN ISO 11654.\n\nLes sols caoutchouc / PU ont généralement un αw faible (0,05-0,15). Le RT60 d'un open space dépend surtout du plafond, des murs et du mobilier — le sol participe mais n'est pas le levier principal pour l'absorption aérienne.`,
      },
      {
        heading: "Le rôle du sol dans l'acoustique tertiaire",
        body: `Le sol contribue à l'acoustique tertiaire de deux façons :\n\n**1. Bruit d'impact entre étages** : les pas, les chaises qui glissent, les chutes d'objets se transmettent aux étages inférieurs. Une sous-couche acoustique sous chape ou sous revêtement réduit cette transmission de 15-25 dB.\n\n**2. Réverbération in-situ** : un sol dur (carrelage, parquet) renvoie le bruit. Un sol souple (caoutchouc, moquette) en absorbe une partie. L'effet est modéré comparé au plafond / aux murs.\n\nPour un projet tertiaire, le sol caoutchouc apporte un confort de marche (effet "amortisseur") et réduit le bruit ambiant des chaises et déplacements — sans remplacer un traitement plafond / mur dédié à la réverbération.`,
      },
      {
        heading: "Solutions NPS pour le tertiaire",
        body: `Selon la zone et l'usage :`,
        bullets: [
          "Open space, plateaux bureaux — sol caoutchouc ou sous-couche sous moquette/parquet : DAMTEC Standard, DAMTEC Black Uni B1 (ERP), TOP Rubbercork pour rénovation",
          "Salles de réunion — privilégier le confort acoustique : DAMTEC Estra sous chape pour les ouvrages neufs, DAMTEC Black Uni B1 sous revêtement en rénovation",
          "Restaurants d'entreprise — zones de passage intensives : SPORTEC color en zone caisse, DAMTEC Standard sous revêtement en salle",
          "Halls d'accueil et zones logistiques internes — résistance + acoustique : SPORTEC style ou PROFIMAT Wheelprotect selon trafic",
          "Cabinets médicaux et professions libérales — confidentialité : combiner sous-couche acoustique + traitement mural / portes (hors champ NPS)",
        ],
      },
      {
        heading: "Erreurs courantes en projet tertiaire",
        body: `Les pièges récurrents observés sur projets tertiaires :`,
        bullets: [
          "1. Penser que le sol seul résout le problème de réverbération — non, le plafond et les murs sont les leviers principaux pour αw / RT60.",
          "2. Sous-dimensionner la sous-couche pour gagner sur l'épaisseur — perte de plusieurs dB d'isolation impact, plaintes utilisateurs ensuite.",
          "3. Oublier le classement feu — un open space avec capacité > 100 personnes est un ERP, classement Cfl-s1 souvent exigé.",
          "4. Ne pas anticiper les zones de transition — les jonctions entre matériaux (sol dur ↔ moquette) doivent être étudiées pour éviter les ponts acoustiques.",
        ],
      },
    ],
    products: [
      { slug: "damtec-standard", why: "Sous revêtement, polyvalent tertiaire" },
      { slug: "damtec-black-uni-b1", why: "Classement feu B1 pour ERP tertiaire" },
      { slug: "damtec-estra", why: "Sous chape neuve, performance régulière" },
      { slug: "top-rubbercork", why: "Rénovation tertiaire hors DTU" },
      { slug: "sportec-color", why: "Zones de circulation, restaurants entreprise" },
    ],
    faqs: [
      {
        question: "Quelle RT60 cible pour un open space ?",
        answer:
          "L'objectif courant pour un open space confortable est RT60 entre 0,5 et 0,8 seconde. Au-delà de 1 seconde, l'espace devient fatigant à l'usage. Le RT60 dépend principalement du volume, du plafond (faux plafond absorbant), des murs et du mobilier — le sol joue un rôle secondaire pour cet indicateur.",
      },
      {
        question: "Le sol participe-t-il à l'absorption acoustique d'un bureau ?",
        answer:
          "Modestement. L'αw d'un sol caoutchouc se situe généralement entre 0,05 et 0,15 (faible absorption). Le sol contribue surtout à réduire le bruit d'impact (chaises, pas) et apporter un confort tactile. Pour traiter la réverbération, le plafond et les murs sont les leviers principaux.",
      },
      {
        question: "Faut-il un classement feu pour un open space ?",
        answer:
          "Selon la capacité d'accueil et la catégorie ERP : pour un open space avec > 100 personnes, le classement Cfl-s1 (B1) est souvent exigé. Vérifier avec le maître d'ouvrage et le bureau de contrôle. Nos produits avec classement B1 ou Cfl-s1 : DAMTEC Black Uni B1, SPORTEC base FR.",
      },
      {
        question: "Comment réduire le bruit d'impact entre étages dans un immeuble de bureaux ?",
        answer:
          "La sous-couche acoustique sous chape (DAMTEC Estra, Wave 3D) ou sous revêtement (DAMTEC Standard, Black Uni) réduit la transmission de 15-25 dB selon configuration. Pour un projet visant une certification (HQE, WELL), prévoir une marge confortable au-delà du seuil réglementaire.",
      },
    ],
    related: ["isolation-acoustique-sous-chape", "isolation-phonique-hotel-restauration"],
  },

  {
    slug: "isolation-phonique-hotel-restauration",
    title: "Isolation phonique hôtel et restauration : guide pour gérants et architectes",
    description:
      "Isolation phonique entre chambres d'hôtel, acoustique restaurant, terrasses et zones spa. Réglementation, indicateurs cibles, solutions de sol pour le secteur CHR.",
    primaryKeyword: "isolation phonique hôtel",
    intro:
      "L'hôtellerie et la restauration sont des secteurs où le confort acoustique est un argument commercial direct. Une chambre bruyante = avis négatif et pertes de revenus. Un restaurant trop réverbérant = clients qui partent vite. Ce guide aborde les exigences réglementaires, les indicateurs cibles, et les solutions de sol pour un projet CHR.",
    publishedAt: "2026-05-06",
    readingMinutes: 7,
    sections: [
      {
        heading: "Le cadre réglementaire CHR",
        body: `**Hôtels** : la NRA s'applique aux hôtels neufs, avec des exigences sur le bruit d'impact entre étages (généralement L'nT,w ≤ 60 dB, parfois plus strict selon catégorie d'étoiles). Les hôtels de catégories supérieures visent des seuils plus exigeants par positionnement commercial — souvent 55 dB ou moins en chambres premium.\n\n**Restaurants et débits de boissons** : la réglementation porte surtout sur les nuisances sonores extérieures (Code de l'environnement) et les conditions de travail des salariés (Code du travail). En interne, l'acoustique est un choix qualitatif du gérant.\n\n**ERP catégories 1-4** : classement feu sur les revêtements de sol (B1 / Cfl-s1).\n\nVérifier les exigences précises avec votre architecte, bureau de contrôle, et — pour les hôtels — la classification ATOUT FRANCE si pertinente.`,
      },
      {
        heading: "Chambres d'hôtel : bruit d'impact entre étages",
        body: `Le bruit d'impact (pas, chute d'objets, trolleys) est le principal motif de plainte client. Le traitement passe par une sous-couche acoustique sous chape (en construction) ou sous parquet/moquette (en rénovation).\n\nPour un hôtel neuf visant la NRA :\n- Sous chape ciment 50 mm : DAMTEC Estra 6 ou 8 mm offre ΔLw 19-21 dB.\n- Si exigence > NRA : DAMTEC Wave 3D 17/8 mm sous chape ciment 80 mm offre ΔLw jusqu'à 35 dB.\n\nEn rénovation hôtelière (changement de revêtement seul, sans toucher à la chape) :\n- DAMTEC Black Uni B1 (classement feu) sous parquet flottant ou moquette : ΔLw 16-25 dB selon revêtement final.\n- TOP Rubbercork pour les rénovations hors DTU.`,
      },
      {
        heading: "Restaurants : confort acoustique en salle",
        body: `Le bruit d'ambiance d'un restaurant dépend principalement du plafond, des murs et du mobilier (textiles). Le sol joue un rôle modéré (αw faible pour les caoutchoucs, plus élevé pour les moquettes denses), mais contribue à :\n\n- Réduire le bruit des chaises qui glissent et des pieds qui frottent.\n- Limiter le bruit transmis à l'étage inférieur (cuisines, caves, chambres dans un hôtel-restaurant).\n- Apporter un confort de marche au personnel de salle.\n\nUn sol caoutchouc dans la zone cuisine + service peut réduire fortement la fatigue du personnel. En salle, le choix dépend du parti pris esthétique — beaucoup de restaurants conservent un sol dur en salle et travaillent l'acoustique au plafond.`,
      },
      {
        heading: "Zones spa et bien-être",
        body: `Spa, piscines intérieures, hammams : environnements humides à risques (chlore, vapeur). Privilégier des revêtements antidérapants (R10/R11 selon norme DIN 51097), résistants aux conditions humides et compatibles avec les produits d'entretien.\n\nNotre gamme inclut des solutions pour terrasses techniques et zones extérieures (KRAITEC), adaptables aux pourtours de bassin. Pour les zones immergées ou en contact direct avec l'eau, des solutions dédiées sont à étudier au cas par cas.`,
      },
      {
        heading: "Solutions NPS pour le secteur CHR",
        body: `Sélection de produits selon la zone :`,
        bullets: [
          "Chambres (sol béton + chape) : DAMTEC Estra ou DAMTEC Wave 3D sous chape",
          "Chambres (rénovation, sous parquet ou moquette) : DAMTEC Black Uni B1 (classement feu)",
          "Couloirs et circulation : SPORTEC color (résistance au passage intensif)",
          "Restaurants en salle : choix esthétique — DAMTEC Standard sous moquette ou solution sol dur + traitement plafond",
          "Cuisines et zones service : SPORTEC color ou solution caoutchouc résistante à l'huile",
          "Terrasses extérieures : KRAITEC Step, KRAITEC Top Plus",
          "Zones spa et plages bassin : à étudier au cas par cas selon configuration",
        ],
      },
    ],
    products: [
      { slug: "damtec-estra", why: "Sous chape, ΔLw 19-21 dB pour chambres neuves" },
      { slug: "damtec-wave-3d", why: "Sous chape, ΔLw 25-35 dB pour hôtels premium" },
      { slug: "damtec-black-uni-b1", why: "Sous revêtement avec classement feu B1" },
      { slug: "kraitec-step", why: "Terrasses techniques hôtel, antidérapant" },
      { slug: "kraitec-top-plus", why: "Terrasses sous gravier ou dallage sur plots" },
      { slug: "sportec-color", why: "Couloirs, circulation, zones service" },
    ],
    faqs: [
      {
        question: "Quelle sous-couche pour un hôtel 4 étoiles neuf ?",
        answer:
          "Pour un hôtel haut de gamme visant un confort acoustique élevé, DAMTEC Wave 3D 17/8 mm sous chape ciment 80 mm offre ΔLw jusqu'à 35 dB selon la fiche technique. C'est plus performant que la NRA stricte et apporte une marge de confort utile pour le positionnement étoilé.",
      },
      {
        question: "Faut-il un classement feu pour les chambres d'hôtel ?",
        answer:
          "Oui. Les hôtels sont des ERP soumis à classement feu sur les revêtements et sous-couches en parties communes et chambres. Selon catégorie ERP, viser B1 (Cfl-s1) ou Bfl-s1. Nos produits classés feu pertinents : DAMTEC Black Uni B1, DAMTEC Itapur B1, SPORTEC base FR.",
      },
      {
        question: "Comment améliorer l'acoustique d'un restaurant existant ?",
        answer:
          "Le levier principal est le plafond (panneaux acoustiques, baffles suspendues, plafond tendu absorbant). Murs : panneaux décoratifs absorbants. Mobilier : nappes, tapis, banquettes textiles. Sol : impact mineur sur la réverbération mais peut améliorer le confort de marche et réduire le bruit des chaises.",
      },
      {
        question: "KRAITEC est-il adapté à une terrasse de toit-terrasse hôtelière ?",
        answer:
          "Oui. KRAITEC Step (membrane antidérapante 8-12 mm) et KRAITEC Top Plus (protection mécanique pour terrasses sous gravier/dallage) sont compatibles avec la plupart des étanchéités (PVC, FPO, EPDM, bitume). Vérifier la compatibilité chimique avec le fournisseur d'étanchéité.",
      },
      {
        question: "Que faire pour les bruits de salle de bain entre chambres ?",
        answer:
          "Le bruit aérien et d'impact des salles de bain demande un traitement combiné : sous-couche acoustique sous chape, isolation des canalisations (mousse acoustique), désolidarisation des sanitaires (joints élastiques), murs de cloisonnement avec laine minérale. Le sol seul ne suffit pas pour ce cas particulier.",
      },
    ],
    related: ["isolation-acoustique-sous-chape", "acoustique-batiment-tertiaire"],
  },

  {
    slug: "coefficient-absorption-acoustique-alpha-w",
    title: "Coefficient d'absorption αw : ce que mesure cet indice acoustique",
    description:
      "αw est le coefficient d'absorption pondéré (EN ISO 11654). Il mesure l'aptitude d'un matériau à absorber l'énergie sonore. Échelle, classes, usage projet.",
    primaryKeyword: "coefficient absorption acoustique αw",
    intro:
      "αw (alpha pondéré) est l'indicateur normalisé qui décrit la capacité d'un matériau de revêtement à absorber l'énergie sonore aérienne. Il sert à dimensionner le RT60 d'un local et à choisir des matériaux acoustiques en projet (plafond, mur, sol). Voici ce qu'il mesure exactement, comment le lire, et son rôle.",
    publishedAt: "2026-05-06",
    readingMinutes: 4,
    sections: [
      {
        heading: "Définition normalisée",
        body: `**αw** est le coefficient d'absorption pondéré, défini par la norme **EN ISO 11654** ("Acoustique — Absorbants pour l'acoustique des bâtiments — Évaluation de l'absorption acoustique"). Il est calculé à partir des coefficients d'absorption mesurés en chambre réverbérante (αs selon EN ISO 354) sur six bandes de fréquence (250 Hz à 4000 Hz), pondérés selon une courbe de référence.\n\nL'échelle va de **0** (matériau totalement réfléchissant) à **1** (matériau totalement absorbant). En pratique, les valeurs αw d'usage en bâtiment vont de 0,05 (béton brut, carrelage) à 0,95 (panneaux acoustiques épais).`,
      },
      {
        heading: "Classes d'absorption EN ISO 11654",
        body: `La norme classe les matériaux en 5 classes :`,
        bullets: [
          "Classe A : αw ≥ 0,90 — très forte absorption (panneaux acoustiques dédiés)",
          "Classe B : 0,80 ≤ αw < 0,90 — forte absorption",
          "Classe C : 0,60 ≤ αw < 0,80 — bonne absorption (plafonds suspendus type fibres minérales)",
          "Classe D : 0,30 ≤ αw < 0,60 — absorption moyenne (moquettes denses, panneaux décoratifs)",
          "Classe E : 0,15 ≤ αw < 0,30 — absorption faible",
          "Non classé : αw < 0,15 — réfléchissant (béton, carrelage, parquet, plupart des sols caoutchouc)",
        ],
      },
      {
        heading: "Usage en projet",
        body: `Le αw sert à dimensionner le **RT60** d'un local : pour atteindre un RT60 cible (par exemple 0,6 s pour un open space), on combine des surfaces absorbantes (plafond, murs, mobilier, parfois sol) jusqu'à atteindre l'aire d'absorption équivalente nécessaire.\n\nFormule simplifiée (Sabine) : RT60 = 0,16 × V / A, où V est le volume du local en m³ et A est l'aire d'absorption équivalente en m² (somme des surfaces × leur αw).\n\nDans un open space, le plafond contribue typiquement 50-70% de l'absorption totale. Les murs, le mobilier et le sol complètent. Le sol — sauf moquette dense — apporte une contribution modérée.`,
      },
      {
        heading: "αw d'un sol caoutchouc",
        body: `Les sols caoutchouc et sous-couches caoutchouc / PU sont des matériaux **denses et peu poreux**. Leur αw est faible (0,05-0,15 typiquement). Ils ne sont pas conçus pour absorber l'énergie sonore aérienne — leur fonction est ailleurs : isolation aux bruits d'impact (ΔLw), désolidarisation anti-vibratoire, confort de marche, durabilité.\n\nPour traiter la réverbération d'un local, viser le **plafond et les murs** avec des matériaux dédiés (laine de roche, panneaux microperforés, baffles suspendues, mousse acoustique). Le sol caoutchouc complète mais ne remplace pas.`,
      },
    ],
    products: [
      { slug: "damtec-standard", why: "Sous-couche acoustique d'impact (ΔLw, pas αw)" },
      { slug: "damtec-black-uni-b1", why: "Sous-couche d'impact avec classement feu" },
    ],
    faqs: [
      {
        question: "Quelle différence entre αw et ΔLw ?",
        answer:
          "αw mesure l'absorption de l'énergie sonore aérienne par un matériau (utile pour le RT60 d'un local). ΔLw mesure la réduction du bruit d'impact transmis à l'étage inférieur par une sous-couche. Les deux indicateurs traitent de problèmes acoustiques différents et ne sont pas comparables.",
      },
      {
        question: "Le sol contribue-t-il au RT60 d'un open space ?",
        answer:
          "Oui mais modestement. Un sol caoutchouc a un αw d'environ 0,05-0,15 (classe non-classée à E selon EN ISO 11654). Une moquette dense peut atteindre αw 0,30-0,50 (classe D). Le levier principal pour le RT60 reste le plafond, puis les murs et le mobilier.",
      },
      {
        question: "Comment trouver le αw d'un produit ?",
        answer:
          "La fiche technique fabricant indique généralement le αw mesuré selon EN ISO 11654, avec ses valeurs αs par bande de fréquence. Si le αw n'est pas affiché, c'est souvent que le produit n'est pas vendu pour son rôle absorbant — c'est le cas des sols caoutchouc d'isolation impact.",
      },
    ],
    related: ["acoustique-batiment-tertiaire", "delta-lw-bruits-impact"],
  },

  {
    slug: "delta-lw-bruits-impact",
    title: "ΔLw : la réduction des bruits d'impact expliquée",
    description:
      "ΔLw (en dB) est l'indicateur normalisé de la réduction des bruits d'impact apportée par une sous-couche. Mesuré selon EN ISO 717-2. Comment le lire, l'utiliser, et choisir.",
    primaryKeyword: "ΔLw bruits impact",
    intro:
      "ΔLw est l'indicateur de référence pour comparer les sous-couches acoustiques. Il mesure la réduction du bruit d'impact (pas, chute d'objets) que la sous-couche apporte par rapport à un plancher nu. Voici comment lire ce chiffre, ses limites, et comment l'utiliser pour choisir un produit.",
    publishedAt: "2026-05-06",
    readingMinutes: 4,
    sections: [
      {
        heading: "Définition normalisée",
        body: `**ΔLw** (Delta-L weighted) est défini par les normes **EN ISO 140-8** (méthode de mesure en laboratoire) et **EN ISO 717-2** (calcul de la valeur unique pondérée). Il s'exprime en décibels (dB).\n\nFormule simplifiée : ΔLw = Ln,r,w (dalle nue, valeur de référence) − Ln,w (dalle avec sous-couche).\n\nPlus la valeur ΔLw est élevée, mieux c'est. Une sous-couche à ΔLw 25 dB réduit de 25 dB le bruit d'impact mesuré sous la dalle, par rapport à la même dalle nue.`,
      },
      {
        heading: "Important : ΔLw dépend de la configuration",
        body: `La valeur ΔLw dépend fortement de la configuration de mesure. Une même sous-couche donnera des valeurs différentes selon :\n\n- **Le revêtement de sol final** (carrelage, parquet, stratifié, moquette) — exemples DAMTEC Standard : ΔLw 18 dB sous carrelage, 20 dB sous stratifié 8 mm, 29 dB sous moquette.\n- **L'épaisseur de la chape** ou le type de support — DAMTEC Wave 3D : ΔLw 25 dB sous chape ciment 50 mm en 8/4 mm, 32 dB sous chape ciment 50 mm en 17/8 mm.\n- **L'épaisseur de la sous-couche elle-même**.\n\nToujours vérifier la configuration utilisée pour la mesure ΔLw indiquée sur la fiche technique.`,
      },
      {
        heading: "ΔLw laboratoire vs in-situ",
        body: `Le ΔLw est mesuré en **laboratoire** sur un plancher de référence selon une méthodologie normalisée. La valeur in-situ (sur chantier réel) est généralement **3-5 dB inférieure** à la valeur laboratoire en raison de :\n\n- Imperfections de pose (recouvrement, désolidarisation périphérique).\n- Géométrie réelle du plancher (différente du plancher de référence).\n- Transmissions latérales (par les murs).\n\nPour un projet visant la NRA (L'nT,w ≤ 58 dB en logement collectif), prévoir une **marge de sécurité de 3-5 dB** lors du choix.`,
      },
      {
        heading: "Comment utiliser ΔLw pour choisir",
        body: `Méthode pratique :\n\n1. Estimer le Ln,w de la dalle nue (un plancher béton 16-20 cm est typiquement à 75-80 dB).\n2. Identifier la cible réglementaire (NRA : 58 dB ; NRT : 55 dB ; premium : 50 dB).\n3. Calculer le ΔLw nécessaire : ΔLw = Ln,w − cible + marge de sécurité 3-5 dB.\n4. Choisir une sous-couche dont la valeur ΔLw correspondante (sous le revêtement final prévu) est supérieure à ce minimum.\n\nExemple : dalle béton à 78 dB, cible NRA 58 dB, marge 4 dB → ΔLw nécessaire ≈ 24 dB → DAMTEC Standard sous moquette (29 dB) convient, sous carrelage (18 dB) il faut envisager une autre solution.`,
      },
    ],
    products: [
      { slug: "damtec-standard", why: "ΔLw 18-29 dB selon revêtement" },
      { slug: "damtec-estra", why: "ΔLw 19-21 dB sous chape ciment 50 mm" },
      { slug: "damtec-wave-3d", why: "ΔLw 25-35 dB selon épaisseur et chape" },
      { slug: "damtec-black-uni", why: "ΔLw 16-25 dB selon revêtement" },
    ],
    faqs: [
      {
        question: "Comment lire la valeur ΔLw d'une fiche technique ?",
        answer:
          "Toujours regarder la configuration mentionnée à côté du chiffre : type de revêtement, épaisseur de chape, épaisseur de sous-couche. Une même sous-couche peut afficher 16 dB sous parquet et 25 dB sous moquette — il faut prendre la valeur correspondant à votre configuration projet.",
      },
      {
        question: "Quelle marge appliquer entre ΔLw labo et chantier ?",
        answer:
          "Compter 3-5 dB de perte entre la valeur laboratoire et la mesure in-situ après pose. Pour un projet visant 58 dB (NRA), choisir une sous-couche permettant d'atteindre 53-55 dB en théorie laboratoire pour avoir la marge.",
      },
      {
        question: "ΔLw 30 dB est-il possible avec une sous-couche fine ?",
        answer:
          "Difficilement. Les sous-couches fines (2-6 mm) plafonnent généralement à 20-25 dB selon le revêtement. Pour atteindre 30 dB et plus, il faut soit une sous-couche épaisse profilée (DAMTEC Wave 3D 17/8 mm sous chape épaisse), soit combiner deux sous-couches (sous chape + sous revêtement).",
      },
    ],
    related: ["isolation-acoustique-sous-chape", "coefficient-absorption-acoustique-alpha-w"],
  },

  {
    slug: "sol-crossfit",
    title: "Sol pour box CrossFit : choisir un revêtement adapté aux drops et entraînements lourds",
    description:
      "Sol CrossFit : épaisseur, absorption des chocs, plateformes haltérophilie, zones d'entraînement fonctionnel. Comparatif des solutions SPORTEC NPS et dimensionnement.",
    primaryKeyword: "sol crossfit",
    intro:
      "Une box CrossFit cumule des contraintes que peu de salles de sport partagent : drops d'haltères olympiques, mouvements explosifs, entraînement à haute intensité, sols qui doivent résister à la chute de poids tout en protégeant la structure. Voici comment dimensionner le sol par zone.",
    publishedAt: "2026-05-06",
    readingMinutes: 6,
    sections: [
      {
        heading: "Les 3 zones d'une box CrossFit",
        body: `Une box CrossFit type se découpe en 3 zones avec des contraintes différentes :\n\n**1. Zone de WOD / fonctionnel** : burpees, box jumps, kettlebells, double unders. Sol caoutchouc 8-12 mm en rouleau ou dalles, finition antidérapante.\n\n**2. Zone d'haltérophilie / drop** : barres olympiques 60-200 kg, drops contrôlés ou non. Plateforme bois sur plots haute densité + entourage caoutchouc épais (30-50 mm).\n\n**3. Zone de cardio + accessoires** (assault bikes, rameurs, ski-erg, mobilité) : sol caoutchouc fin (4-8 mm), facile à nettoyer.`,
      },
      {
        heading: "Dimensionnement par zone",
        body: `**Zone de WOD / fonctionnel** : SPORTEC color en rouleau 8-12 mm collé, ou SPORTEC puzzle 2.0 en dalles emboîtables 8-10 mm pour une pose amovible. Réduction du bruit de pas selon fiche technique : jusqu'à 18 dB pour SPORTEC color.\n\n**Zone d'haltérophilie / drop** : la configuration recommandée combine :\n- Plateforme bois (multipli 2× 21 mm croisés) sur SPORTEC base FR (dalle 30 mm EPDM, Cfl-s1, absorption choc 51 %, ΔLw 25 dB).\n- Entourage en SPORTEC style 30 mm ou 70 mm pour la zone de drop libre.\n\n**Zone cardio** : SPORTEC color 4-6 mm en rouleau collé, finition fine pour passage de roues d'assault bike.\n\n**Périphérie / lignes** : SPORTEC color avec inserts EPDM colorés pour signaler les zones (start lines, lifting boxes, etc.).`,
      },
      {
        heading: "Pourquoi une dalle de protection sous la plateforme drop",
        body: `Lors d'un drop d'haltérophilie (chute libre d'une barre depuis position haute), l'énergie cinétique transmise au sol est massive. Sans découplage spécifique, cette énergie se transmet sous forme de bruit structurel à toute la dalle béton et aux étages voisins.\n\nLa **SPORTEC base FR** (dalle 30 mm en granulés EPDM agglomérés au PU) est conçue pour absorber et diffuser cette énergie. Posée en pleine surface sous la plateforme bois, elle :\n- Absorbe environ 51 % de l'énergie d'impact (norme DIN V 18035-6).\n- Réduit les bruits de pas de 25 dB (jusqu'à 33 dB en combinaison avec SPORTEC supercell DC2).\n- Protège la dalle béton des fissures par fatigue.\n- Apporte un classement feu Cfl-s1 (B1) pour les ERP exigeants.\n\nC'est l'investissement le plus rentable pour une box CrossFit en immeuble (où la nuisance aux étages voisins est un risque commercial direct).`,
      },
      {
        heading: "Classement feu et certifications",
        body: `Une box CrossFit en milieu urbain est généralement un ERP. Le classement feu sur les revêtements de sol est exigé selon catégorie. SPORTEC base FR (sous-couche) est classé **Cfl-s1** (B1), adapté aux ERP exigeants. SPORTEC color et SPORTEC style existent en variantes Efl (B2) ou Cfl-s1 (B1) selon la finition.\n\nVérifier le classement requis avec votre bureau de contrôle et votre maître d'ouvrage.`,
      },
      {
        heading: "Erreurs à éviter",
        body: `Les erreurs récurrentes dans l'aménagement d'une box :`,
        bullets: [
          "1. Sous-dimensionner la zone d'haltérophilie — quelques cm² économisés se traduisent par des dégâts au sol et des conflits avec les voisins.",
          "2. Oublier l'isolation entre étages — pour une box en immeuble, prévoir une sous-couche acoustique sous la chape (DAMTEC Estra) en plus du revêtement SPORTEC.",
          "3. Négliger les transitions — les jonctions entre zones (caoutchouc épais ↔ caoutchouc fin) doivent être propres pour éviter les ressauts.",
          "4. Coller du caoutchouc sur un sol non préparé — ragréage indispensable, sinon décollement à terme.",
          "5. Oublier les obligations ERP — capacité d'accueil, classement feu, normes incendie. Vérifier en amont.",
        ],
      },
    ],
    products: [
      { slug: "sportec-color", why: "Rouleau 4-12 mm pour zones WOD et cardio" },
      { slug: "sportec-style", why: "Dalles 30-70 mm pour entourage zone drop" },
      { slug: "sportec-puzzle-2-0", why: "Dalles modulaires sans colle" },
      { slug: "sportec-base-fr", why: "Dalle 30 mm Cfl-s1 sous plateforme haltérophilie, 25 dB" },
      { slug: "damtec-estra", why: "Sous chape pour box en immeuble" },
    ],
    faqs: [
      {
        question: "Quelle épaisseur de sol pour une zone de drop CrossFit ?",
        answer:
          "Pour la zone de drop libre, viser un revêtement caoutchouc 30-50 mm minimum (SPORTEC style en 30 ou 70 mm). En complément, pour les barres lourdes, prévoir une plateforme bois sur SPORTEC base FR (dalle 30 mm Cfl-s1). La combinaison est plus efficace qu'une simple épaisseur de caoutchouc.",
      },
      {
        question: "Box CrossFit en étage : comment éviter de gêner les voisins ?",
        answer:
          "Trois leviers cumulables : (1) sous-couche acoustique sous chape avant pose du caoutchouc (DAMTEC Estra ou Wave 3D) ; (2) plateforme bois sur SPORTEC base FR (dalle 30 mm Cfl-s1) pour la zone d'haltérophilie ; (3) horaires d'ouverture limités sur les drops lourds. Le diagnostic acoustique préalable est recommandé.",
      },
      {
        question: "Le sol caoutchouc protège-t-il la dalle béton ?",
        answer:
          "Oui, en partie. Un sol épais (30-50 mm) absorbe les chocs ponctuels et limite la fatigue de la dalle. Pour les drops lourds réguliers, la dalle béton supporte mieux avec une plateforme dédiée par-dessus. Vérifier la portance de la dalle existante en rénovation.",
      },
      {
        question: "Combien coûte un sol de box CrossFit complet ?",
        answer:
          "Le coût total dépend de la surface (zones WOD / drop / cardio), de l'épaisseur, des plateformes haltérophilie et de la pose. Pour un chiffrage précis avec recommandations produits par zone, demandez un devis avec votre plan d'aménagement.",
      },
    ],
    related: ["sol-salle-de-sport-pro", "en-14904-sol-sportif"],
  },

  {
    slug: "sol-garage-caoutchouc",
    title: "Sol garage caoutchouc : protéger sa dalle et amortir le bruit",
    description:
      "Sol caoutchouc pour garage particulier ou professionnel : protection mécanique, anti-vibration, dalles modulaires ou rouleaux. Choix selon usage (atelier, parking, vélos).",
    primaryKeyword: "sol garage caoutchouc",
    intro:
      "Un sol caoutchouc en garage protège la dalle béton des chocs (chute d'outils, charges roulantes), absorbe le bruit, facilite le nettoyage et apporte un confort de marche. Selon votre usage (parking voiture, atelier mécanique, espace bricolage, garage à vélos), le produit et l'épaisseur changent.",
    publishedAt: "2026-05-06",
    readingMinutes: 5,
    sections: [
      {
        heading: "Pourquoi un sol caoutchouc en garage",
        body: `Quatre raisons principales :\n\n**1. Protection mécanique** : caisse à outils qui tombe, jante qui rebondit, charge sur cric. Le caoutchouc encaisse, le béton non.\n\n**2. Anti-glissement** : un sol caoutchouc R10 minimum reste antidérapant même mouillé (eau de pluie, huile, lave-glace renversé).\n\n**3. Acoustique** : les portes qui claquent, les outils qui résonnent — un sol caoutchouc atténue le bruit transmis au reste de la maison ou aux voisins (crucial en sous-sol d'immeuble collectif).\n\n**4. Confort** : moins de fatigue debout, sol moins froid sur lequel s'allonger pour vidange/réparation.`,
      },
      {
        heading: "Solutions selon l'usage",
        body: `**Garage particulier (parking voiture + bricolage occasionnel)** : dalle caoutchouc 8-12 mm en rouleau (SPORTEC color) ou en dalles emboîtables (SPORTEC puzzle 2.0). Pose flottante possible.\n\n**Atelier mécanique pro** : épaisseur 12-30 mm. Pour les zones soumises à passage de transpalettes ou chariots, prévoir des produits PROFIMAT Wheelprotect (résistance aux marquages noirs, fatigue par roulement).\n\n**Espace bricolage / home gym** : épaisseur 8-15 mm, dalles emboîtables type SPORTEC puzzle pour pose démontable.\n\n**Sous-sol d'immeuble (parkings collectifs)** : zones de circulation où l'acoustique compte — prévoir une isolation entre dalle et logements supérieurs avec une sous-couche acoustique avant pose du caoutchouc.\n\n**Garage à vélos** : caoutchouc fin (4-8 mm), antidérapant, résistant aux pneus.`,
      },
      {
        heading: "Pose : collée ou flottante ?",
        body: `**Pose flottante** (rouleau lesté ou dalles emboîtables) :\n- Avantages : démontable, pas de ragréage requis, installation rapide.\n- Inconvénients : tolère mal les charges glissantes (chariots), risque de soulèvement aux extrémités.\n- Quand : garage particulier, home gym, espace temporaire.\n\n**Pose collée** (colle PU ou bicomposant) :\n- Avantages : tient face aux charges roulantes, durabilité supérieure.\n- Inconvénients : ragréage du sol existant souvent requis, pose plus longue.\n- Quand : atelier pro, parking pro, zone de stockage.`,
      },
      {
        heading: "Anti-vibration : pour les zones d'équipement",
        body: `Si votre garage abrite un compresseur d'air, une chaudière, ou une station de relevage, ces équipements génèrent des vibrations qui se transmettent à la dalle puis au bâtiment.\n\nUne dalle DAMTEC vibra (selon la pression statique de l'équipement) intercalée entre l'équipement et la dalle béton réduit drastiquement la transmission. Voir notre [guide anti-vibration équipement industriel](/guide/anti-vibration-equipement-industriel) pour le dimensionnement.`,
      },
    ],
    products: [
      { slug: "sportec-color", why: "Rouleau 4-12 mm, pose collée ou flottante" },
      { slug: "sportec-puzzle-2-0", why: "Dalles 6/8/10 mm emboîtables sans colle" },
      { slug: "sportec-style", why: "Dalles épaisses 30-70 mm pour ateliers" },
      { slug: "profimat-wheelprotect-13-18", why: "Roues souples (chariots, transpalettes manuels)" },
      { slug: "profimat-wheelprotect-18-22", why: "Roues dures (chariots élévateurs, charges lourdes)" },
      { slug: "damtec-vibra-50", why: "Sous compresseur ou équipement vibrant" },
    ],
    faqs: [
      {
        question: "Quelle épaisseur pour un garage particulier ?",
        answer:
          "Pour un usage parking + bricolage occasionnel, 8-12 mm en rouleau ou dalles suffit (SPORTEC color 8-12 mm, SPORTEC puzzle 8-10 mm). Si vous prévoyez de la mécanique régulière (chute d'outils lourds, support de cric), monter à 12-15 mm.",
      },
      {
        question: "Le sol caoutchouc résiste-t-il à l'huile et aux carburants ?",
        answer:
          "Le caoutchouc nitrile (NBR) est plus résistant aux hydrocarbures que le caoutchouc EPDM. Pour les zones soumises à chutes fréquentes d'huile, vérifier la composition du produit. SPORTEC color (granulat caoutchouc + EPDM) tolère un usage occasionnel mais nettoyer rapidement les hydrocarbures stagnants.",
      },
      {
        question: "Faut-il un ragréage avant pose ?",
        answer:
          "Pour une pose collée, oui — le sol doit être plan et propre. Pour une pose flottante (rouleau lesté ou dalles emboîtables), un sol relativement plan suffit (tolérance plus large). Un défaut de planéité > 5 mm sur 2 m demande un ragréage.",
      },
      {
        question: "Caoutchouc en rouleau ou dalles emboîtables, lequel choisir ?",
        answer:
          "Rouleau : meilleur pour les grandes surfaces, pose collée durable, finition continue sans joints visibles. Dalles emboîtables : pose sans colle, démontable, plus simple en autonomie. Pour un garage particulier, les dalles emboîtables sont souvent suffisantes et plus accessibles.",
      },
    ],
    related: ["anti-vibration-equipement-industriel", "tapis-machine-a-laver-anti-vibration"],
  },

  {
    slug: "tapis-machine-a-laver-anti-vibration",
    title: "Tapis anti-vibration machine à laver : choisir un sous-machine efficace",
    description:
      "Tapis anti-vibration pour machine à laver / sèche-linge : réduction des vibrations, du bruit, protection du sol. TOP VIB WASH et alternatives, pose et dimensionnement.",
    primaryKeyword: "tapis machine à laver anti-vibration",
    intro:
      "Une machine à laver à essorage rapide (1200-1600 tr/min) génère des vibrations qui peuvent se propager dans la dalle et résonner dans le logement, et même chez les voisins. Un tapis anti-vibration spécifique réduit ces vibrations de plusieurs dB, prolonge la durée de vie de la machine, et limite les déplacements de l'appareil pendant l'essorage.",
    publishedAt: "2026-05-06",
    readingMinutes: 4,
    sections: [
      {
        heading: "Pourquoi un tapis anti-vibration",
        body: `Les machines à laver et sèche-linge modernes essorent à 1000-1800 tr/min, ce qui génère des vibrations à fréquences élevées (15-30 Hz au tambour, harmoniques jusqu'à 100+ Hz). Sans découplage, ces vibrations se transmettent à :\n\n- La dalle béton, qui les diffuse dans tout le logement (et chez les voisins en immeuble).\n- La machine elle-même, qui se déplace, vibre, fatigue prématurément ses paliers et amortisseurs internes.\n- Le sol carrelage adjacent, qui peut se descelle ou fissurer à long terme.\n\nUn tapis anti-vibration intercalé entre la machine et le sol absorbe une partie significative de ces vibrations.`,
      },
      {
        heading: "Solution NPS : TOP VIB WASH",
        body: `**TOP VIB WASH** est notre solution dédiée au calage anti-vibration des machines à laver et sèche-linge en environnement domestique. Caoutchouc densité élevée, format adapté aux machines standard.\n\nPose simple : poser le tapis au sol, positionner la machine dessus, vérifier l'horizontalité. Aucune fixation nécessaire.\n\nPour les usages plus exigeants (laverie collective, machines pro à fort essorage), des solutions plus dimensionnées peuvent être étudiées — nous contacter.`,
      },
      {
        heading: "Limites d'un tapis simple",
        body: `Un tapis anti-vibration domestique réduit les vibrations transmises au sol mais ne supprime pas tout le bruit. Pour aller plus loin :\n\n- **Caler la machine à l'horizontale** (pieds réglables, niveau à bulle) — c'est souvent l'erreur la plus impactante.\n- **Vérifier que le tambour n'est pas surchargé** ni mal réparti — un linge concentré d'un côté amplifie les vibrations.\n- **Pour les essorages très lents (paramètres délicat)** : si vous voulez la nuit, choisir des programmes avec essorage limité à 800 tr/min.\n- **Vérifier les amortisseurs internes de la machine** : avec l'âge, ils se fatiguent. Sur une machine ancienne, un tapis ne compensera pas un amortisseur interne usé.`,
      },
      {
        heading: "Et pour un local technique pro ou laverie ?",
        body: `Pour une laverie collective, une copropriété avec local laverie, ou un local technique de pressing :\n\n- Plusieurs machines en série amplifient les vibrations transmises à la structure.\n- Le règlement de copropriété ou la réglementation du Code du travail imposent des limites de bruit.\n- Une approche dédiée combine : sous-couche acoustique sous chape, calage anti-vibration sous chaque machine, et le cas échéant, isolation phonique des cloisons.\n\nPour ces projets, nous orientons vers des produits dimensionnés (DAMTEC vibra selon pression, ou Vibrafoam selon fréquence d'excitation). Voir notre [guide anti-vibration équipement industriel](/guide/anti-vibration-equipement-industriel).`,
      },
    ],
    products: [
      { slug: "top-vib-wash", why: "Tapis dédié machine à laver et sèche-linge domestique" },
      { slug: "damtec-vibra-50", why: "Pour laverie collective ou machines lourdes" },
      { slug: "damtec-vibra-100", why: "Pour machines pro avec forte charge" },
    ],
    faqs: [
      {
        question: "Le tapis anti-vibration réduit-il vraiment le bruit ?",
        answer:
          "Il réduit la transmission de vibrations à la structure (dalle, mur). Le bruit aérien direct (moteur, eau, tambour) n'est pas affecté. Les utilisateurs rapportent une diminution notable du bruit transmis aux pièces voisines et de la résonance dans le logement, surtout en immeuble collectif.",
      },
      {
        question: "Faut-il caler tous les pieds de la machine ou juste mettre un tapis ?",
        answer:
          "Mettre un tapis sous l'ensemble de la machine est plus simple et efficace que des cales individuelles sous chaque pied. Le tapis répartit la charge et amortit uniformément. Vérifier ensuite que la machine est à l'horizontale avec les pieds réglables.",
      },
      {
        question: "Le tapis convient-il aussi pour le sèche-linge ?",
        answer:
          "Oui. Les sèche-linge à condensation ou évacuation génèrent moins de vibrations que les machines à laver en essorage, mais le tapis reste utile pour amortir le ronronnement du moteur et limiter les bruits transmis à la structure.",
      },
      {
        question: "Quelle durée de vie pour un tapis anti-vibration ?",
        answer:
          "Le caoutchouc densité élevée garde ses propriétés vibratoires sur 10+ ans en usage domestique normal. Vérifier visuellement l'absence d'écrasement excessif (le tapis doit reprendre sa forme initiale quand la machine est déplacée). Remplacer si compression permanente > 30%.",
      },
    ],
    related: ["anti-vibration-equipement-industriel", "sol-garage-caoutchouc"],
  },
];

export const getGuideBySlug = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);

export const allGuideSlugs = (): string[] => guides.map((g) => g.slug);

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
          "NPS TOP Acoustique Rubber Ecomat (2-20 mm) — granulé caoutchouc + PU, ΔLw 16-21 dB sous chape 45 mm, certifié A+",
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
          "Haltérophilie / zones de drop — épaisseur 30-70 mm + plots de découplage. SPORTEC style 30-70 mm + SPORTEC absorber pads sous plateforme bois.",
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
          "SPORTEC base FR — sous-couche 3-12 mm, classement feu Cfl-s1 (ERP). ΔLw 17 dB en 6 mm. Certifié A+, AgBB, Blue Angel.",
          "SPORTEC base MS — sous-couche élastique, drainante, 3-12 mm. Pour gazon synthétique et terrains multisports outdoor.",
          "SPORTEC puzzle 2.0 — dalles emboîtables sans colle 1000×1000 mm, épaisseurs 6/8/10 mm. ΔLw 17-18 dB. Solution amovible.",
          "SPORTEC absorber pads — plots haute densité pour zones de musculation lourde et haltérophilie. Réduction du bruit de structure 25-30 dB.",
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
      { slug: "sportec-base-fr", why: "Sous-couche Cfl-s1 (ERP), ΔLw 17 dB en 6 mm" },
      { slug: "sportec-base-ms", why: "Sous-couche drainante pour outdoor multisports" },
      { slug: "sportec-puzzle-2-0", why: "Dalles modulaires sans colle, ΔLw 17-18 dB" },
      { slug: "sportec-absorber-pads", why: "Plots musculation lourde, 25-30 dB structure" },
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
          "Pour les zones de drop (chute de barres olympiques), oui. La configuration recommandée combine une plateforme bois sur SPORTEC absorber pads + un revêtement SPORTEC style 30 ou 70 mm autour. Cela protège le sol porteur et réduit le bruit structurel transmis aux étages.",
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
];

export const getGuideBySlug = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);

export const allGuideSlugs = (): string[] => guides.map((g) => g.slug);

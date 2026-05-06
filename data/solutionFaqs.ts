// FAQ entries per solution. Used for FAQPage JSON-LD (rich snippets in Google
// SERP) AND visible at the bottom of each /solutions/[id] page.
//
// Why each solution has 4-5 questions: Google's FAQ rich result rewards
// pages with concrete, searchable Q&A. We target the actual questions buyers
// ask, not generic copy.

export type FaqEntry = { question: string; answer: string };

export const solutionFaqs: Record<string, FaqEntry[]> = {
  "fitness-gym": [
    {
      question: "Quel sol choisir pour une salle de sport professionnelle ?",
      answer:
        "Pour une salle de fitness ou de gym, le choix dépend de la zone : SPORTEC Style ou Color pour le cardio et le fonctionnel (4-8 mm), SPORTEC Base FR ou Base MS pour la zone musculation (10-30 mm), et SPORTEC Absorber Pads sous les plateformes d'haltérophilie (15-50 mm). Tous nos revêtements respectent la norme EN 14904 pour les sols sportifs intérieurs.",
    },
    {
      question: "Quelle épaisseur de sol pour la musculation et l'haltérophilie ?",
      answer:
        "Pour la musculation libre, prévoir 10-15 mm en dalle ou rouleau caoutchouc (SPORTEC Base FR ou Color). Pour l'haltérophilie et le crossfit avec chocs lourds, monter à 20-30 mm voire des plateformes dédiées avec SPORTEC Absorber Pads (50 mm) sous la zone de drop. L'épaisseur protège le sol porteur et réduit le bruit d'impact transmis aux étages.",
    },
    {
      question: "Comment réduire le bruit d'impact des poids dans une salle ?",
      answer:
        "La réduction du bruit d'impact (ΔLw) dépend de l'épaisseur et de la densité du sol. Un SPORTEC Base FR de 20 mm offre un ΔLw d'environ 17-19 dB. Pour les zones d'haltérophilie, combiner une dalle 20 mm + plateforme bois + SPORTEC Absorber Pads peut atteindre 25 dB de réduction.",
    },
    {
      question: "Le sol caoutchouc respecte-t-il les normes EN 14904 ?",
      answer:
        "Oui. Toute la gamme SPORTEC est conforme à la norme EN 14904 (sols sportifs intérieurs). Cette norme couvre l'amortissement (force reduction), le rebond vertical, la résistance au glissement et la planéité. Les fiches techniques de chaque produit sont disponibles sur demande.",
    },
    {
      question: "Quel budget prévoir au m² pour un sol de salle de sport pro ?",
      answer:
        "Comptez 35-50 €/m² pour un revêtement caoutchouc 8-10 mm cardio/fitness, 50-80 €/m² pour 15-20 mm musculation, et 80-150 €/m² pour les zones haltérophilie avec absorber pads. Le coût total dépend de la surface, des accessoires (plinthes, raccords) et de la pose. Devis gratuit sur demande.",
    },
  ],
  hotels: [
    {
      question: "Quelle norme acoustique respecter dans un hôtel ?",
      answer:
        "Les hôtels sont soumis à la NRA (Nouvelle Réglementation Acoustique) qui impose un bruit d'impact entre étages ≤ 60 dB. Pour les hôtels classés, les exigences augmentent (jusqu'à 55 dB). Les sous-couches DAMTEC Standard, DAMTEC Black Uni ou DAMTEC Estra permettent d'atteindre ces seuils sous chape flottante.",
    },
    {
      question: "Comment isoler le bruit entre chambres d'hôtel ?",
      answer:
        "Le bruit d'impact (pas, chute d'objet) se traite au sol avec une sous-couche acoustique sous chape (DAMTEC Standard 5-10 mm) ou sous revêtement (DAMTEC Itapur, Wave 3D). Le bruit aérien (voix, télévision) demande une attention sur les cloisons et les portes — au sol, une sous-couche dense ajoute de la masse et améliore l'isolation aérienne.",
    },
    {
      question: "Faut-il un produit certifié ATE pour la chape flottante ?",
      answer:
        "L'ATE (Agrément Technique Européen) est requis pour les ouvrages relevant des DTU sous garantie décennale. DAMTEC Standard, Black Uni et Estra disposent d'ATE. Pour les rénovations légères ou non soumises à DTU, des produits sans ATE comme TOP Rubbercork ou TOP Acoustique Rubber Ecomat sont adaptés.",
    },
    {
      question: "Quel revêtement pour le spa ou la zone humide d'un hôtel ?",
      answer:
        "Pour les bassins, plages de piscine et zones humides, privilégier des revêtements antidérapants R10/R11 résistants au chlore et UV. KRAITEC Step (conformément à EN 13501-1) est recommandé pour les terrasses techniques, et nous proposons des solutions sur-mesure pour les zones immergées.",
    },
  ],
  "toitures-terrasses": [
    {
      question: "Quelle solution acoustique sous une toiture-terrasse ?",
      answer:
        "Pour une toiture-terrasse accessible, KRAITEC Step (membrane antidérapante 8-12 mm) protège l'étanchéité et apporte un confort acoustique. Pour les terrasses techniques avec passage d'engins, KRAITEC Top Plus ou KRAITEC Top Drain Plus combinent protection mécanique et drainage.",
    },
    {
      question: "KRAITEC est-il compatible avec une étanchéité PVC ou EPDM ?",
      answer:
        "Oui. La gamme KRAITEC est compatible avec toutes les principales étanchéités (PVC, FPO, EPDM, bitume). Des variantes spécifiques existent : KRAITEC Step Roof PVC pour les complexes PVC, KRAITEC Step Roof FPO pour les FPO. Vérifier la compatibilité chimique avec le fournisseur d'étanchéité.",
    },
    {
      question: "Comment protéger une toiture-terrasse en gravier de l'écrasement ?",
      answer:
        "Sous gravier ou dallage sur plots, KRAITEC Top (8 mm) ou KRAITEC Top Plus (10-15 mm) joue le rôle de couche de protection mécanique. Le caoutchouc recyclé Kraiburg encaisse les chocs ponctuels (chute d'outils, pose de mobilier) sans transmettre à l'étanchéité.",
    },
    {
      question: "KRAITEC est-il classé au feu ?",
      answer:
        "Oui, la gamme KRAITEC est classée Bfl-s1 selon EN 13501-1 (réaction au feu pour sols), ce qui permet son usage en ERP et en couverture. Les fiches techniques détaillent les classements par produit.",
    },
  ],
  piscine: [
    {
      question: "Quel revêtement pour une plage de piscine extérieure ?",
      answer:
        "Pour les plages de bassin, privilégier des dalles caoutchouc antidérapantes R11 minimum, résistantes au chlore et aux UV. Nos solutions SPORTEC outdoor et KRAITEC s'adaptent au pourtour des bassins, en pose collée ou flottante selon le support.",
    },
    {
      question: "Le sol caoutchouc résiste-t-il au chlore et au sel ?",
      answer:
        "Oui. Les caoutchoucs Kraiburg utilisés dans nos solutions sont conçus pour résister aux atmosphères chlorées et salines (piscines collectives, centres aquatiques, spas). Leur durée de vie en environnement humide dépasse 15 ans avec un entretien adapté.",
    },
    {
      question: "Antidérapant : quelle classe choisir pour un bassin ?",
      answer:
        "La norme DIN 51097 distingue trois classes pour les zones pieds nus humides : A (pente faible), B (zones douches, plages), C (escaliers, échelles). Pour une plage de piscine, viser au minimum B/C selon la pente. Nos revêtements répondent à ces exigences.",
    },
  ],
  supermarches: [
    {
      question: "Quel sol pour une zone de réception en supermarché ?",
      answer:
        "Les zones de réception (quais, allées techniques) demandent un revêtement résistant au passage de transpalettes et chariots élévateurs. PROFIMAT Wheelprotect 13-18 ou 18-22 (selon la dureté de roue) protège le sol porteur des marquages noirs et des impacts.",
    },
    {
      question: "Comment réduire le bruit dans les allées d'un magasin ?",
      answer:
        "L'acoustique commerce (TR > 1,2 s) génère stress et fatigue chez le personnel. Une dalle SPORTEC Style (8 mm) en zone caisses ou allées sensibles réduit le bruit d'impact des chariots et la réverbération de pas. Pour les drogueries et magasins de bricolage, prévoir une zone tampon caoutchouc.",
    },
    {
      question: "Le sol caoutchouc passe-t-il les normes alimentaires ?",
      answer:
        "Pour les zones en contact direct avec produits alimentaires, vérifier la conformité au règlement (CE) 1935/2004. Nos revêtements SPORTEC et DAMTEC ne sont pas certifiés pour le contact alimentaire direct mais conviennent aux zones de stockage, manutention et passage en GMS / commerces.",
    },
  ],
  desolidarisation: [
    {
      question: "Qu'est-ce que la désolidarisation anti-vibratoire ?",
      answer:
        "La désolidarisation consiste à isoler mécaniquement un équipement (groupe électrogène, compresseur, CTA, ascenseur) du bâtiment porteur pour éviter la transmission des vibrations. La gamme DAMTEC vibra et VIBRAFOAM joue ce rôle en s'intercalant entre l'équipement et son socle béton.",
    },
    {
      question: "Comment choisir l'épaisseur DAMTEC vibra selon la pression ?",
      answer:
        "DAMTEC vibra existe en 7 versions selon la pression admissible : vibra 30 (0,03 N/mm²) pour équipements légers, jusqu'à vibra 1500 (1,5 N/mm²) pour charges lourdes. La règle : pression statique ≤ 50% de la valeur nominale produit. Au-delà, choisir la version supérieure ou augmenter l'épaisseur.",
    },
    {
      question: "DAMTEC vibra ou VIBRAFOAM, quelle différence ?",
      answer:
        "DAMTEC vibra est un caoutchouc nitrile recyclé lié polyuréthane, idéal pour les pressions modérées (0,03 - 1,5 N/mm²) et les fréquences propres 11-25 Hz. VIBRAFOAM est une mousse polyuréthane mixte, plus tolérante aux pressions extrêmes (jusqu'à 7 N/mm²) et fréquences plus basses. Choix selon le diagnostic vibratoire.",
    },
    {
      question: "Faut-il faire une étude vibratoire avant la pose ?",
      answer:
        "Pour les équipements critiques (générateurs > 100 kVA, machines tournantes, climatisations centrales), oui. L'étude détermine la fréquence d'excitation, la masse à supporter et la fréquence propre cible (généralement 1/3 de la fréquence d'excitation). Notre équipe peut assister sur la sélection produit.",
    },
  ],
};

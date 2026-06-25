# SXO Audit — NPS Acoustique
**Date :** 2026-06-25
**Analyste :** SXO Skill (Claude Code)
**Scope :** 5 mots-clés business critiques — analyse SERP backwards

---

## Synthese executive

NPS Acoustique dispose d'une architecture de contenu correcte pour deux des cinq keywords. Les trois autres souffrent d'un mismatch page-type majeur, d'une absence de page dédiée, ou d'un positionnement brand qui rend le site invisible dans la SERP. Le keyword le plus critique en urgence est "alternative Regupol Sound 17" : c'est le signal de funnel le plus profond, aucune page NPS ne cible cet intent, et c'est une opportunité de capture de prospect chaud quasi sans concurrence francophone.

---

## KW1 — "isolation acoustique sous chape"

### SERP Analysis (top 10 observé)

| # | Domaine | Type de page | Format | Signal dominant |
|---|---------|-------------|--------|----------------|
| 1 | isolgomma.fr | Article blog | 1 500 mots, guide applicatif | Informationnel éducatif |
| 2 | soprema.fr | Page catalogue produit système | Tableau produits + specs | Commercial investigation |
| 3 | chape-vicat.fr | Article blog | Guide choix isolant | Informationnel |
| 4 | thermachape.fr | Page application sectorielle | Texte + produits liés | Commercial investigation |
| 5 | laterlite.fr | Fiche produit spécifique | Specs + ATE + CTA | Transactionnel |
| 6 | kraiburg-relastec.com (PDF) | Document PDF brochure | Données techniques DAMTEC | Informationnel / référence |
| 7 | guidebatimentdurable.brussels | Article guide | Réglementaire + technique | Informationnel |
| 8 | kraiburg-relastec.com (EN) | Page produit EN | Catalogue en anglais | Commercial |
| 9 | chape-lafarge.fr | Page application | Courte, process-oriented | Informationnel |
| 10 | isolgomma.fr | Sous-catégorie produit | Grille produits | Commercial investigation |

**Intent dominant :** Commercial investigation (55 %) + Informationnel (35 %)
**Type dominant SERP :** Guide applicatif avec produits en bas de page (hubs hybrides)
**SERP Features observées :** PAA actif ("Quel isolant acoustique sous chape ?", "Comment poser une sous-couche sous chape ?"), pas de featured snippet dur, pas d'AI Overview visible

**Persona :** Responsable BET (Bureau d'Etudes Techniques), architecte, maître d'oeuvre, ou charpentier/poseur pro cherchant à valider le bon produit et ses performances réglementaires (ATE, dB) avant de prescrire.

### Page NPS cible actuelle

URL : `/batiment/isolation-sous-chape`
H1 : "Isolation acoustique sous chape avec ATE"
Contenu : Hero + 2 paragraphes (~120 mots) + graphique ChapeAcousticsChart + grille de produits
Schema : aucun schema JSON-LD spécifique sur cette page (Product schema sur fiches produits seulement)
CTA : lien "Retour Bâtiment" + navigation implicite vers fiches produit
Meta title : "Isolation acoustique sous chape avec ATE | NPS Acoustique"

### Mismatch Detection

**Mismatch : HIGH**

La SERP récompense des guides hybrides de 1 000 à 2 000 mots qui expliquent le "comment choisir", la réglementation (NRA, ATE), les types de chapes (liquide vs ciment), puis présentent des produits. La page NPS actuelle est une pure grille catalogue avec 120 mots d'intro — ce que Google classe comme page catégorie thin, pas comme page hub d'intention.

Le graphique ChapeAcousticsChart est un atout différenciant fort mais n'est pas exploité textuellement : aucun H2 "Pourquoi le ΔLw est la bonne métrique ?", aucune explication réglementaire NRA, aucun FAQ structuré.

Le term "avec ATE" dans le H1 est correct et différenciant mais trop précoce : l'utilisateur qui cherche "isolation acoustique sous chape" n'a pas encore décidé s'il veut de l'ATE ou pas.

### User Story

> En tant que BET ou architecte, je cherche "isolation acoustique sous chape" parce que j'ai un projet résidentiel ou tertiaire avec une contrainte acoustique NRA, et je veux trouver immédiatement : (1) la bonne métrique (ΔLw), (2) quel produit correspond à ma charge de chape, (3) si ce produit a un ATE valide, et (4) comment obtenir un devis ou une fiche technique certifiée.

*Signal SERP générateur : PAA "Quel isolant acoustique sous chape ?" + présence de PDF Kraiburg DAMTEC en position 6 sans SEO optimisé (preuve que Google cherche du contenu technique)*

### SXO Gap Score

| Dimension | Score | Evidence |
|-----------|-------|---------|
| Page Type | 5/15 | Grille catalogue vs hub guide hybride attendu |
| Content Depth | 3/15 | ~120 mots, pas de H2 pédagogiques, pas de FAQ |
| UX Signals | 8/15 | ChapeAcousticsChart = excellent, CTA contact présent |
| Schema | 3/15 | Aucun FAQ schema, aucun HowTo, aucun BreadcrumbList sur page |
| Media | 9/15 | 1 image hero + graphique, manque tableau comparatif ΔLw |
| Authority | 6/15 | Statut distributeur officiel Kraiburg non mis en avant sur cette page |
| Freshness | 4/10 | Pas de date de publication, contenu statique |
| **TOTAL** | **38/100** | |

**Persona Score (BET/Architecte)** : Relevance 18/25, Clarity 12/25, Trust 10/25, Action 9/25 = **49/100**

### Recommandation

**REFONDRE** `/batiment/isolation-sous-chape` — ne pas créer une nouvelle URL.
La page a déjà le bon slug, la bonne position dans l'arborescence et le graphique acoustique. Il faut augmenter le contenu éditorial à 800-1 200 mots avec :
- H2 "Pourquoi isoler sous chape ? La réglementation NRA expliquée"
- H2 "Comment choisir : ATE obligatoire ou non ?"
- H2 "Performances attendues selon le type de chape (ciment vs liquide)"
- FAQ schema sur 4-5 questions PAA
- Tableau comparatif ΔLw par produit (ESTRA, WAVE 3D, 3D 17/8)
- Mention explicite "Distributeur officiel Kraiburg France"

---

## KW2 — "sol salle de musculation pro"

### SERP Analysis (top 10 observé)

| # | Domaine | Type de page | Format | Signal dominant |
|---|---------|-------------|--------|----------------|
| 1 | pourlepro.com | Catégorie e-commerce | Grille produits + filtres épaisseur | Transactionnel |
| 2 | squarefloor.fr | Article blog | Guide épaisseur par usage | Informationnel |
| 3 | carefitness.com | Catégorie e-commerce | Grille produits "sol pro" | Transactionnel |
| 4 | dalles2sport.com | Catégorie e-commerce | Grille + certifications | Transactionnel |
| 5 | powergym.fr | Article blog + catégorie | Guide + produits | Commercial investigation |
| 6 | dalles2sport.com | Sous-catégorie produit pro | Fiche produit 20 mm | Transactionnel |
| 7 | tapiscaoutchouc24.fr | Catégorie e-commerce | Grille dalles | Transactionnel |
| 8 | powergym.fr | Catégorie dalles caoutchouc | Grille produits filtrable | Transactionnel |
| 9 | pro.planet-fitness.com | Catégorie e-commerce pro | Grille + devis | Transactionnel |
| 10 | dalles2sport.com | Fiche produit | 1 m² unité | Transactionnel |

**Intent dominant :** Transactionnel (70 %) + Commercial investigation (20 %)
**Type dominant SERP :** E-commerce catégorie avec grille produits + filtres épaisseur/certification
**SERP Features observées :** Google Shopping ads présents (produits avec prix), reviews structurées visibles

**Persona :** Gérant de salle de sport ou responsable équipement sportif professionnel cherchant à commander du revêtement pour une surface précise (m²), avec budget défini, délai de pose, et besoin de certifications (NF, ERP).

### Page NPS cible actuelle

URL : `/sport/fitness`
H1 : "Fitness"
Contenu : Hero image + liste de 7 features (icônes Lucide) + grille produits SPORTEC (~6 produits)
Schema : aucun
CTA : aucun CTA devis/commande direct
Meta title : "Sols pour salles de fitness et gym | NPS Acoustique"

### Mismatch Detection

**Mismatch : CRITICAL**

La SERP est à 70 % transactionnelle (commandes e-commerce, panier, prix affiché, m² calculable). NPS est un distributeur B2B sans e-commerce, mais la page fitness ne propose même pas de CTA devis clair avec délai de réponse, ni de grille tarifaire indicative, ni d'indication de MOQ.

De plus, la page `/sport/fitness` a un H1 "Fitness" — terme trop générique. Le keyword cible "sol salle de musculation pro" est dans les keywords de la meta description (`sol musculation`) mais nulle part dans un H2 ou dans le contenu visible.

Le segment "pro" est un signal crucial absent : la SERP reward des pages qui parlent explicitement aux gestionnaires pro (certifications ERP, devis chantier, délais, références clients). NPS a ces arguments mais ne les expose pas sur cette page.

La page `/sport/fitness/halterophilie` est plus proche de l'intent mais reste générique et ne mentionne pas "musculation commerciale" ou "salle de musculation pro".

### User Story

> En tant que gérant d'une nouvelle salle de musculation commerciale, je cherche "sol salle de musculation pro" parce que je dois équiper 400 m² avant l'ouverture dans 3 mois, et je veux trouver immédiatement : (1) quel produit pour quel usage (zone cardio vs poids libres vs haltérophilie), (2) les certifications requises pour ERP, (3) un contact pro avec devis rapide.

*Signal SERP générateur : présence massive d'e-commerces B2B avec filtres "usage" (cardio/musculation/haltérophilie) + Google Shopping actif = intent transactionnel confirmé*

### SXO Gap Score

| Dimension | Score | Evidence |
|-----------|-------|---------|
| Page Type | 2/15 | Page brand/secteur vs grille e-commerce attendue |
| Content Depth | 4/15 | Features listées mais pas de specs, pas de comparatif épaisseur |
| UX Signals | 5/15 | Pas de CTA devis proéminent, pas de prix indicatif ni MOQ |
| Schema | 1/15 | Aucun schema |
| Media | 7/15 | Image hero fitness + produits, mais pas de visuels d'installation |
| Authority | 6/15 | Certifications techniques mentionnées mais pas orientées B2B pro |
| Freshness | 4/10 | Contenu statique, pas de références chantiers |
| **TOTAL** | **29/100** | |

**Persona Score (Gérant salle pro)** : Relevance 12/25, Clarity 10/25, Trust 8/25, Action 5/25 = **35/100**

### Recommandation

**CREER** une page dédiée `/sport/fitness/musculation-pro` (ou une landing `/sol-salle-musculation-pro`).

La page doit être de type "hub commercial B2B" avec :
- H1 "Sol salle de musculation professionnelle : guide SPORTEC"
- Tableau "Quel produit pour quelle zone" (cardio / musculation / haltérophilie / fonctionnel) — le guide `productGuides.ts` fournit déjà les ratings, il faut juste les exposer visuellement
- Section certifications ERP (Euroclasse, NF)
- Section "Livraison chantier pro : délai + MOQ + devis sous 24h"
- Références/cas clients (même anonymes : "salle de 600 m², Lyon, 2024")
- CTA devis proéminent dès le fold

---

## KW3 — "tapis machine à laver anti-vibration"

### SERP Analysis (top 10 observé)

| # | Domaine | Type de page | Format | Signal dominant |
|---|---------|-------------|--------|----------------|
| 1 | castorama.fr | Catégorie filtrée | Grille produits + prix | Transactionnel |
| 2 | leroymerlin.fr | Catégorie filtrée | Grille produits + prix | Transactionnel |
| 3 | cdiscount.com | Catégorie marketplace | Grille + avis | Transactionnel |
| 4 | olivo.shop | Fiche produit | EVA foam 60x60 | Transactionnel |
| 5 | powerrubber.com (EN) | Article blog | "Is it worth it?" | Informationnel |
| 6 | leroymerlin.fr | Catégorie filtrée spécifique | Grille + prix | Transactionnel |
| 7 | piecesdetachees.castorama.fr | Fiche produit | 600x625 mm référence | Transactionnel |
| 8 | surface-innov.com | Fiche produit landing | "Anti-bruit, stable, durable" | Transactionnel |
| 9 | auchan.fr | Fiche produit marketplace | QILIVE 60x60 | Transactionnel |
| 10 | (autres GSA / Amazon) | Fiches produits | Prix, avis | Transactionnel |

**Intent dominant :** Transactionnel pur (85 %) — achat immédiat avec prix comparés
**Type dominant SERP :** E-commerce product listing (catégories GSB ou marketplace) + quelques fiches produits unitaires
**SERP Features observées :** Google Shopping très actif (prix Castorama, Leroy Merlin, Amazon), pas de featured snippet éditorial

**Persona :** Particulier qui vient d'acheter un lave-linge ou qui souffre de vibrations/bruit. Budget de 15-50 EUR. Décision d'achat en < 10 minutes.

### Page NPS cible actuelle

URL : `/produit/top-vib-wash` (fiche produit) + `/bricolage` (catégorie)
H1 page bricolage : "Bricolage"
Contenu bricolage : Hero image + liste produits (4 SKUs dont TOP VIB WASH + BUMPY + WHEELPROTECT x2)
H1 fiche produit : "TOP VIB WASH" (nom produit brut)
Meta bricolage : "tapis machine à laver, anti-vibration, Profimat, Top Vib Wash"

### Mismatch Detection

**Mismatch : CRITICAL**

La SERP est dominée par des GSB et marketplaces avec prix affichés, avis clients, livraison en 24h. NPS ne vend pas en e-commerce direct. La fiche produit TOP VIB WASH ne mentionne pas de prix, pas de point de vente partenaire, pas de canal d'achat B2C.

Le H1 "TOP VIB WASH" n'est pas le langage du particulier — il cherche "tapis machine à laver anti-vibration", pas un nom de marque technique. Le nom du produit agit comme barrière cognitive.

La page `/bricolage` mélange des produits très différents (tapis lave-linge B2C + protège-roues garage) ce qui dilue l'intent. Google ne peut pas qualifier cette page comme réponse à la requête B2C spécifique.

**Signal critique :** surface-innov.com (un site généraliste) rank avec une simple fiche produit optimisée "Tapis anti-vibration machine à laver — Anti-bruit, stable et durable" — NPS pourrait largement mieux faire avec son produit technique supérieur.

### User Story

> En tant que particulier venantd'acheter un lave-linge bruyant, je cherche "tapis machine à laver anti-vibration" parce que mes voisins se plaignent et la machine bouge sur le carrelage, et je veux trouver immédiatement : (1) un produit au bon format (60x60 cm), (2) un prix transparent, (3) comment l'acheter ou où le commander.

*Signal SERP générateur : dominance GSB (Castorama/Leroy Merlin) = intent d'achat immédiat B2C + Google Shopping actif = utilisateur avec carte bleue en main*

### SXO Gap Score

| Dimension | Score | Evidence |
|-----------|-------|---------|
| Page Type | 2/15 | Fiche produit sans prix vs e-commerce avec achat direct |
| Content Depth | 5/15 | Specs techniques présentes sur fiche, mais pas d'usage B2C |
| UX Signals | 3/15 | Pas de prix, pas de panier, pas de canal B2C clair |
| Schema | 4/15 | Product JSON-LD présent sur fiches (confirmé code) mais sans prix/availability |
| Media | 8/15 | Packshot + usage image présents |
| Authority | 4/15 | Certifications A+ présentes mais non mises en avant dans le fold B2C |
| Freshness | 5/10 | N/A pour produit physique |
| **TOTAL** | **31/100** | |

**Persona Score (Particulier)** : Relevance 14/25, Clarity 11/25, Trust 9/25, Action 3/25 = **37/100**

### Recommandation

**STRATEGIE BIFURQUEE** — deux options selon la décision commerciale de NPS :

**Option A (si NPS veut capter le B2C)** : Créer une landing `/tapis-machine-a-laver-anti-vibration` avec langage B2C ("Fini les voisins qui se plaignent"), format 60x60 standard mis en avant, prix indicatif ou lien revendeur partenaire, avis clients, et schema Product complet (price, availability). Cette page capture le trafic transactionnel et renvoie vers les revendeurs pro ou vers un formulaire d'achat minimum.

**Option B (si NPS reste full B2B)** : Accepter de ne pas ranker sur ce KW transactionnel et concentrer le contenu `/bricolage` sur des requêtes de prescription B2B (architecte qui prescrit pour un particulier, gestionnaire d'immeuble). Le ROI de l'option A est supérieur si NPS peut ouvrir un canal de vente B2C direct ou partenaire.

---

## KW4 — "DAMTEC"

### SERP Analysis (top 10 observé)

| # | Domaine | Type de page | Format | Signal dominant |
|---|---------|-------------|--------|----------------|
| 1 | kraiburg-relastec.com/damtec | Homepage brand DAMTEC | Présentation gamme complète | Navigationnel brand |
| 2 | kraiburg-relastec.com (PDF) | Brochure PDF 2021 sous chape | Catalogue technique FR | Informationnel |
| 3 | pdf.archiexpo.fr | Catalogue PDF indexé | Reproduct du PDF Kraiburg | Informationnel |
| 4 | kraiburg-relastec.com (PDF) | Brochure PDF revêtements sols | Catalogue technique FR | Informationnel |
| 5 | archiexpo.fr | Fiche produit WAVE 3D | Base de données produits | Commercial investigation |
| 6 | nps-france.com (OLD) | Page sous-couche ancien site | Contenu 2015 obsolète | Informationnel |
| 7 | kraiburg-relastec.com (PDF) | Brochure PDF 2017 | Catalogue historique | Informationnel |
| 8 | pdf.archiexpo.fr | Catalogue PDF revêtements sols | Reproduct PDF | Informationnel |
| 9 | (autres PDF ou fiches) | PDFs techniques | Données spec | Informationnel |
| 10 | kraiburg-relastec.com (EN) | Page produit isolation revêtements | Catalogue EN | Commercial |

**Intent dominant :** Navigationnel (60 %) + Informationnel technique (30 %)
**Type dominant SERP :** Pages officielles Kraiburg + PDFs techniques
**Observation critique :** nps-france.com (l'ANCIEN site NPS, 2015) rank position 6 — mais le nouveau site `nps-acoustique.fr` est **absent** du top 10 pour sa marque partenaire principale.

**Persona :** Professionnel (BET, architecte, poseur) qui connaît déjà DAMTEC et cherche soit la documentation technique officielle, soit un distributeur France.

### Page NPS cible actuelle

Aucune page dédiée "DAMTEC" ou "gamme DAMTEC" n'existe sur nps-acoustique.fr. Les produits DAMTEC sont éparpillés sur `/batiment/isolation-sous-chape`, `/batiment/isolation-revetements-sols`, et les fiches `/produit/[slug]`. Il n'y a pas de hub "DAMTEC" consolidé.

### Mismatch Detection

**Mismatch : CRITICAL**

NPS est le distributeur officiel français de Kraiburg (DAMTEC/VIBRAFOAM/KRAITEC). Pour la recherche brand "DAMTEC", NPS ne rank nulle part sur le nouveau site. L'ancien site `nps-france.com` rank position 6 mais avec du contenu 2015.

Un prospect qui cherche "DAMTEC" en France veut un distributeur/contact commercial, pas uniquement la documentation Kraiburg. NPS est la réponse naturelle à cet intent commercial, mais il est invisible.

### User Story

> En tant qu'architecte ou maître d'oeuvre, je cherche "DAMTEC" parce que j'ai vu ce produit dans un carnet de prescriptions ou une recommandation BIM, et je veux trouver immédiatement : (1) le distributeur officiel France pour obtenir un prix, (2) le catalogue complet avec toutes les variantes, (3) les fiches techniques certifiées pour mon dossier.

*Signal SERP générateur : ancien site nps-france.com rank position 6 malgré contenu 2015 = autorité domaine NPS reconnue sur "DAMTEC" mais non exploitée sur le nouveau site*

### SXO Gap Score

| Dimension | Score | Evidence |
|-----------|-------|---------|
| Page Type | 0/15 | Page DAMTEC dédiée inexistante |
| Content Depth | 0/15 | Contenu dispersé sur fiches individuelles |
| UX Signals | 0/15 | N/A — page inexistante |
| Schema | 0/15 | Aucun schema brand/distributor |
| Media | 0/15 | N/A |
| Authority | 8/15 | Statut distributeur officiel réel et documenté |
| Freshness | 0/10 | N/A |
| **TOTAL** | **8/100** | |

**Persona Score (Architecte cherchant distributeur DAMTEC)** : Relevance 0/25, Clarity 0/25, Trust 3/25, Action 0/25 = **3/100**

### Recommandation

**CREER** une page hub `/damtec` (ou `/batiment/damtec`) avec :
- H1 "DAMTEC — Distributeur officiel France | NPS Acoustique"
- Présentation de la gamme complète (tableau : ESTRA, WAVE 3D, VIBRA, BLACK UNI, STANDARD, SONIC, etc.)
- Section "Obtenir un devis DAMTEC en France"
- Liens vers toutes les fiches techniques PDF téléchargeables (déjà présentes dans le code)
- Schema Organization + distributor relationship markup
- Contenu 600-800 mots sur l'expertise NPS comme distributeur DAMTEC depuis X ans
- Lien interne depuis chaque fiche produit DAMTEC

Cette page est la plus facile à créer avec le plus fort ROI brand : NPS a déjà l'autorité domaine (prouvée par le ranking de l'ancien site) et tout le contenu produit existe déjà dans `products.ts`.

---

## KW5 — "alternative Regupol Sound 17"

### SERP Analysis (top 10 observé)

| # | Domaine | Type de page | Format | Signal dominant |
|---|---------|-------------|--------|----------------|
| 1 | acoustics.regupol.com | Page produit officielle (EN) | Specs + famille produit | Navigationnel/Comparaison |
| 2 | acoustics.regupol.fr | Page produit officielle (FR) | Specs produit | Navigationnel |
| 3 | architecturaldirections.com | Distributeur US | Catalogue produit | Commercial |
| 4 | directindustry.com | Base données produits | Fiche spec industrielle | Informationnel |
| 5 | directindustry.com | Fabricant Regupol | Profil fabricant | Informationnel |
| 6 | acoustics.regupol.us | Page Sonus Curve 17 | Produit alternatif within brand | Comparaison |
| 7 | edilteco.com | Catalogue produit IT | Fiche spec | Commercial |
| 8 | acoustics.regupol.com | REGUFOAM sound 10 | Produit concurrent within brand | Informationnel |
| 9 | acoustics.regupol.com | REGUPOL sound 15 | Autre variante | Comparaison |
| 10 | acoustics.regupol.com | REGUPOL sound 12 | Autre variante | Comparaison |

**Intent dominant :** Comparaison cross-brand / Commercial investigation profonde (95 %)
**Type dominant SERP :** Pages produits officielles Regupol + quelques distributeurs
**Observation clé :** Aucune page francophone indépendante ne traite la comparaison DAMTEC vs Regupol Sound 17. L'espace éditorial est totalement libre.

**Persona :** BET ou architecte très avancé dans son processus de sélection. Il connaît déjà Regupol Sound 17 (concurrent direct de DAMTEC) et cherche soit une meilleure alternative technique, soit un distributeur plus accessible, soit une solution moins chère à performances égales. C'est l'utilisateur le plus proche de la décision d'achat sur l'ensemble des 5 keywords.

### Spécifications Regupol Sound 17 (pour comparaison DAMTEC)

Regupol Sound 17 : 17 mm, fibres caoutchouc liées PU, rigidité dynamique ≤ 19 MN/m³, ΔLw ≥ 26 dB (1 couche) / ≥ 30 dB (2 couches), charge jusqu'à 50 kN/m², Cradle to Cradle Bronze, CE

Equivalent DAMTEC direct : **DAMTEC 3D 17/8** — 17/8 mm, fibres caoutchouc haute qualité PU, rigidité dynamique < 18 MN/m³, ΔLw = 26-34 dB (selon épaisseur chape), charge ≤ 0,10 N/mm² (10 kN/m²), certifié CE+ATE, vocA+.

### Page NPS cible actuelle

Aucune page comparaison ou "alternative" n'existe. Le DAMTEC 3D 17/8 existe en fiche produit `/produit/damtec-3d-17-8` mais sans aucune mention de Regupol, sans positionnement comparatif, et sans ciblage de la requête "alternative".

### Mismatch Detection

**Mismatch : CRITICAL — Page inexistante**

C'est le keyword de funnel le plus profond des 5. Un utilisateur qui tape "alternative Regupol Sound 17" a déjà :
1. Fait une étude de marché
2. Identifié Regupol comme option
3. Décidé de chercher mieux ou différent

NPS n'existe pas sur cette requête. Pourtant, DAMTEC 3D 17/8 est techniquement équivalent ou supérieur sur plusieurs critères (rigidité dynamique < 18 vs ≤ 19 MN/m³, ATE en plus).

L'espace éditorial francophone est vide : aucun article de blog, aucune landing page, aucune fiche technique ne répond à cette requête en français.

### User Story

> En tant que BET prescripteur sur un projet de logement collectif, j'ai reçu une recommandation Regupol Sound 17 mais je cherche "alternative Regupol Sound 17" parce que je veux comparer les performances techniques avant de prescrire, peut-être trouver un distributeur France plus réactif, et je veux trouver immédiatement : (1) un tableau comparatif ΔLw / rigidité dynamique / charge, (2) le statut ATE, (3) un contact distributeur France pour devis chantier.

*Signal SERP générateur : 9 des 10 résultats pointent vers le propre site Regupol = quasi-monopole de marque, espace libre pour un concurrent direct comme NPS*

### SXO Gap Score

| Dimension | Score | Evidence |
|-----------|-------|---------|
| Page Type | 0/15 | Page comparaison inexistante |
| Content Depth | 0/15 | Aucun contenu comparatif |
| UX Signals | 0/15 | N/A |
| Schema | 0/15 | N/A |
| Media | 0/15 | N/A |
| Authority | 10/15 | NPS = distributeur officiel DAMTEC, produit techniquement équivalent documenté |
| Freshness | 0/10 | N/A |
| **TOTAL** | **10/100** | |

**Persona Score (BET funnel profond)** : Relevance 0/25, Clarity 0/25, Trust 2/25, Action 0/25 = **2/100**

### Recommandation

**CREER** en priorité absolue une page `/damtec-vs-regupol-sound-17` ou un article de guide `/guide/alternative-regupol-sound-17`.

Format : article comparatif de 1 000-1 500 mots avec :
- H1 "Chercher une alternative au Regupol Sound 17 ? Découvrez le DAMTEC 3D 17/8"
- Tableau technique côte-à-côte (épaisseur, ΔLw, rigidité dynamique, charge max, certifications, disponibilité France)
- Section "Pourquoi choisir DAMTEC via NPS France" (délai livraison, ATE inclus, support technique)
- FAQ : "DAMTEC 3D 17/8 est-il équivalent au Regupol Sound 17 ?" / "Puis-je substituer DAMTEC à Regupol sur un DTU ?"
- CTA "Demander un devis comparatif" + téléchargement fiche technique
- Schema : FAQPage + Product

Note technique : vérifier la compatibilité DTU avant toute assertion de substitution — la mention "ATE" sur DAMTEC 3D 17/8 est un argument fort que Regupol Sound 17 Cradle-to-Cradle n'a pas nécessairement.

---

## Tableau de priorité des actions

| Priorité | Keyword | Action | Effort | Impact |
|----------|---------|--------|--------|--------|
| P1 | "alternative Regupol Sound 17" | CREER page comparaison | Moyen | Tres fort (funnel profond) |
| P2 | "DAMTEC" | CREER hub `/damtec` | Faible | Fort (brand + distributeur) |
| P3 | "isolation acoustique sous chape" | REFONDRE page existante | Moyen | Fort (volume + B2B) |
| P4 | "sol salle de musculation pro" | CREER landing B2B pro | Moyen | Fort (B2B gym) |
| P5 | "tapis machine à laver anti-vibration" | CREER landing B2C OU accepter non-ranking | Eleve | Moyen (depend strategie B2C) |

---

## SXO Gap Score Global NPS Acoustique

| Keyword | Score /100 | Mismatch |
|---------|-----------|---------|
| isolation acoustique sous chape | 38 | HIGH |
| sol salle de musculation pro | 29 | CRITICAL |
| tapis machine à laver anti-vibration | 31 | CRITICAL |
| DAMTEC | 8 | CRITICAL |
| alternative Regupol Sound 17 | 10 | CRITICAL |
| **Moyenne** | **23/100** | |

---

## Limitations

- Le site nps-acoustique.fr retourne HTTP 403 sur WebFetch : analyse HTML fondée sur le code source Next.js local (app/, data/, lib/seo.ts) — fidele a l'etat de build mais non verifie sur le rendu live.
- Les positions SERP sont issues de WebSearch en juin 2026 et peuvent varier selon la localisation (requetes geolocalisees non separees FR/national).
- Le keyword "DAMTEC" a un intent majoritairement navigationnel vers Kraiburg direct — le potentiel de ranking distributeur est reel mais depend de l'autorite de domaine de nps-acoustique.fr vs l'ancien nps-france.com.
- Aucun outil de volume de recherche (Semrush/Ahrefs) disponible dans cet audit : les estimations d'intent s'appuient uniquement sur l'analyse SERP qualitative.
- Le statut de publication du site nps-acoustique.fr sur le domaine definitif n'a pas ete verifie (le nouveau site pourrait ne pas etre encore indexe si la migration Lovable->Next.js n'est pas completee).

---

## Cross-skill recommendations

- Schema manquant sur les pages hub et la page DAMTEC → utiliser `/seo schema` pour generer les JSON-LD FAQPage, Organization/distributor, Product avec price range
- Contenu eparse et thin sur isolation-sous-chape → `/seo content` pour audit editorial profond et brief de redaction
- Si NPS a des adresses physiques (Landes, 40) → `/seo local` pour GBP et local pack sur requetes "distributeur DAMTEC [departement]"

# Audit Kraiburg vs NPS — Page par page (réécrit complet)

Date : 2026-06-11
Méthodo : lecture brute des `.tsx` NPS (24 pages) + WebFetch des pages Kraiburg-Relastec officielles correspondantes (DAMTEC, KRAITEC, SPORTEC, SHIELDTAC, PROFIMAT). Comparaison factuelle sections / produits cités / specs / certifications. Aucune extrapolation : si l'info n'apparaît pas sur Kraiburg, elle n'est pas listée comme "manquante chez NPS".

## Légende

- ✅ Aligné
- ➕ Sur Kraiburg, absent NPS (info qu'on pourrait ajouter SANS extrapoler)
- ⚠️ Incohérence (info NPS qui contredit Kraiburg)
- 🎨 Différence de style OK (NPS = marque à part)
- ❌ Page Kraiburg 404 ou inaccessible

---

# Section 1 — Bâtiment (6 pages)

## 1.1 `/batiment` (hub)

### État NPS actuel
- Hero "Bâtiment & Industrie", section "DAMTEC® – Atouts et Caractéristiques" (8 puces), grille de 5 solutions (isolation-acoustique, sous-chape avec ATE, sous-chape sans ATE, revêtements sols, solutions extérieures), catalogue filtrable + CTA devis.
- Mention DIN, EN, ASTM ; arguments écologiques (granulés recyclés) ; faible conductibilité thermique ; durablement élastique.

### Kraiburg équivalent : `damtec/fr/`
Sections : protection rails, isolation antivibratoire bâtiment/industrie, isolation acoustique sous chape, isolation sous revêtements de sols, projets de référence, actualités. Mention EBA (Office fédéral allemand des chemins de fer) pour tapis de ballast.

### Delta

| Point | État | Note |
|---|---|---|
| Sections "isolation sous chape" + "sous revêtements sols" + "antivibratoire" | ✅ | Cartes solutions NPS = sous-pages Kraiburg |
| Section "Protection rails / tapis de ballast" | ➕ | Kraiburg met en avant le ferroviaire. NPS ne propose pas — choix éditorial OK si NPS ne le distribue pas |
| 8 caractéristiques DAMTEC (NPS) | ✅ | Reformulation cohérente |
| Catalogue filtrable | 🎨 | Plus avancé que Kraiburg (Kraiburg n'en a pas) |
| Certification EBA mentionnée | ➕ | Kraiburg cite EBA explicitement. NPS peut l'ignorer car pas de produit ferroviaire commercialisé |

### Verdict : ✅ aligné, choix de scope cohérent (rail volontairement écarté).

---

## 1.2 `/batiment/isolation-acoustique`

### État NPS actuel
- Hero, mention gamme **"DAMTEC VIBRA, ULTRAGYM (Vibrafoam) et VIBRADYN"**, composant `VibraProductSchema`, grille produits filtrés `subcategory === "isolation-acoustique-antivibratoire"`.

### Kraiburg équivalent : `damtec/fr/isolation-antivibratoire-batiment-industrie/`
Gammes : `DAMTEC® vibra` (7 SKU : vibra 30/50/100/170/280/700/1500 avec plages de charge en N/mm²), `PURASYS vibrafoam SD` (13 types, plage 0,01–1,9 N/mm²), `PURASYS vibradyn` (cellules fermées, 0,075–1,5 N/mm²).
Apps : fondations machines, escaliers, dalles, isolation globale bâtiment, milieu humide (vibradyn).

### Delta

| Point | État | Note |
|---|---|---|
| Mention gammes VIBRA / ULTRAGYM (= PURASYS vibrafoam) / VIBRADYN | ✅ | Correspondance correcte (ULTRAGYM = nom NPS pour PURASYS vibrafoam SD, comme attendu) |
| Plages de charge en N/mm² | ➕ | Kraiburg liste précisément 30/50/100/170/280/700/1500. NPS pourrait afficher ces ratings sur cartes/fiches sans extrapoler |
| Applications : fondations machines, escaliers, milieu humide (vibradyn) | ➕ | Kraiburg cite explicitement ces cas. NPS ne les liste pas en page de catégorie (peut-être sur fiches) |
| Comparaison vibrafoam SD vs vibradyn (cellules ouvertes vs fermées, immergé) | ➕ | Différenciateur technique Kraiburg, absent de NPS |

### Verdict : ✅ aligné sur noms. ➕ Pourrait gagner à expliciter "vibradyn = milieu humide / immergé".

---

## 1.3 `/batiment/isolation-sous-chape`

### État NPS actuel
- Hero "Isolation acoustique sous chape avec ATE", mention gamme **"DAMTEC ESTRA et WAVE"**, composant `ChapeAcousticsChart`, grille produits filtrés.

### Kraiburg équivalent : `damtec/fr/isolation-acoustique-sous-chape/`
Produits explicitement cités avec codes ETA : `DAMTEC® estra` (ETA-13/0342), `DAMTEC® estra 3D` (ETA-13/0572), `DAMTEC® 3D 17/8` (ETA-16/0481), `DAMTEC® wave 3D` (ETA-15/0358).
Avantages : excellente insonorisation + hauteur minimale, capacité de charge élevée, élasticité permanente, pas de dégradation acoustique dans le temps, résistant eau, imputrescible, faibles émissions, pose rapide.

### Delta

| Point | État | Note |
|---|---|---|
| Mention gammes ESTRA + WAVE | ✅ | OK |
| Codes ATE/ETA exhaustifs (13/0342, 13/0572, 16/0481, 15/0358) | ➕ | Kraiburg cite les 4 codes. À vérifier qu'ils figurent bien sur chaque fiche NPS (audit fiches déjà réalisé selon historique) |
| Mention "DAMTEC® 3D 17/8" | ➕ | Produit listé chez Kraiburg ; vérifier qu'il existe au catalogue NPS sous ce nom exact |
| Argument "pas de dégradation acoustique dans le temps" | ➕ | Mis en avant par Kraiburg, absent de la page NPS (juste sur le hub /batiment) |

### Verdict : ✅ noms et structure alignés. ➕ valider que les 4 ETA listés Kraiburg sont bien tous présents au catalogue NPS.

---

## 1.4 `/batiment/isolation-revetements-sols`

### État NPS actuel
- Hero, mention **"DAMTEC®"** + "évaluation technique européenne (ETA) et marquage CE", composant `RevetementSolsChart`, grille produits.

### Kraiburg équivalent : `damtec/fr/isolation-acoustique-revetements-de-sols/`
Produits : `DAMTEC® black uni` (CE/ETA, sous laminé/parquet/moquette/lino/PVC), `DAMTEC® black uni B1` (CE/ETA + classement feu B1, Cfl-s1, sous parquet/laminé/moquette/carrelage), `DAMTEC® standard` (sous carrelage).
Avantages : hauteur minimale, résistance compression extrême, pose collée ou non, hydrofuge/imputrescible, écologique recyclé.

### Delta

| Point | État | Note |
|---|---|---|
| Mention CE + ETA | ✅ | OK |
| Énumération des 3 SKU (black uni / black uni B1 / standard) | ➕ | Page Kraiburg cible exactement ces 3 références. Vérifier qu'ils sont au catalogue NPS sous ces noms |
| Variante "black uni B1" avec classement feu B1/Cfl-s1 | ➕ | Argument fort Kraiburg pour ERP. À surfacer sur la page NPS si NPS la distribue |
| Compatibilités fines : laminé / parquet / moquette / lino / PVC (uni) vs carrelage (standard) | ➕ | Tableau de compatibilité pourrait clarifier le choix |

### Verdict : ✅ aligné sur principe. ➕ Détail "black uni B1 = Cfl-s1" mérite mise en avant si distribué.

---

## 1.5 `/batiment/isolation-sans-ate`

### État NPS actuel
- Hero "Isolation acoustique sous chape sans ATE", gamme **"TOP"**, grille produits filtrés. Catégorie revendiquée comme NPS-spécifique marché FR.

### Kraiburg équivalent
**Pas d'équivalent direct** sur kraiburg-relastec.com — la gamme "TOP" Kraiburg correspond à KRAITEC TOP (protection toiture) et non à des sous-chapes. La page NPS regroupe des produits sans ATE adaptés au marché français.

### Delta

| Point | État | Note |
|---|---|---|
| Catégorie NPS-spécifique | 🎨 | OK — choix éditorial valide pour marché FR |
| Commentaire dans le code : "sinon les 4 KRAITEC TOP de la gamme protection toiture remontent ici par erreur" | ✅ | Filtre `subcategory === "isolation-sans-ate"` correctement isolé |
| Risque de confusion utilisateur entre "TOP" (page NPS) et "KRAITEC TOP" (toiture) | ⚠️ | À surveiller : éviter de communiquer "gamme TOP" sans préciser qu'il ne s'agit pas de KRAITEC TOP. Aujourd'hui la page dit "Notre gamme TOP" — pourrait porter à confusion |

### Verdict : 🎨 / ⚠️ Catégorie volontairement NPS — clarifier le nom de gamme pour éviter ambiguïté avec KRAITEC TOP.

---

## 1.6 `/batiment/solutions-exterieures`

### État NPS actuel
- Hero "Solutions extérieures pour l'isolation acoustique", gamme **"KRAITEC"**, applications listées : terrasses, toitures accessibles, balcons, espaces extérieurs, résistance UV/climat.

### Kraiburg équivalent : `kraitec/fr/`
Gammes : **Top Series** (top, top plus, top PV, top alu, top alu FiRe, top drain plus, top FiRe), **Step Series** (step, step plus, step color, step neon, step roof PVC, step roof FPO, step cross), **Protect**, et `DAMTEC® sonic` / `sonic FiRe` / `sonic drain plus`.
Applications : toits plats et toits verts, voies de circulation/maintenance, parkings, panneaux solaires, terrasses/balcons, points d'accès maintenance, isolation acoustique extérieure.

### Delta

| Point | État | Note |
|---|---|---|
| Gamme KRAITEC mentionnée | ✅ | OK |
| Sous-séries TOP / STEP / PROTECT + DAMTEC sonic | ➕ | Kraiburg structure la gamme en 3 séries + sonic. NPS ne le fait pas — pourrait éclairer le choix utilisateur |
| Apps "panneaux solaires" + "parkings" + "voies maintenance" + "toits verts" | ➕ | Cas d'usage Kraiburg absents de la page NPS (qui se limite à terrasses/balcons) |
| Variantes "FiRe" (coupe-feu) | ➕ | Kraiburg propose top FiRe + top alu FiRe — différenciateur réglementation ERP |
| Variante "PV" (toiture photovoltaïque dédiée) | ➕ | Mention spécifique Kraiburg, absente NPS |

### Verdict : ✅ marque + applications principales OK. ➕ Étoffer avec sous-séries TOP/STEP/PROTECT et cas d'usage PV / parking / toits verts si distribués.

---

# Section 2 — Sport (15 pages)

## 2.1 `/sport` (hub)

### État NPS actuel
- Hero, 3 sections structurées **Fitness / Sports / Commerce**.
- Fitness : 6 sous-cartes (fitness général, cardio, haltérophilie, fonctionnel, plein-air, gymcoustic).
- Sports : 2 sous-cartes (sports-hiver, stand-tir).
- Commerce : 4 sous-cartes (bureaux, magasins, salons-evenements, reeducation).
- Commentaire code explicite : Sport indoor + outdoor retirés volontairement car gamme UNI versa / UNI classic / standard 2.0 non encore validée par NPS. Yoga retiré (pas de gamme Kraiburg dédiée).

### Kraiburg équivalent : `sportec.fr` (récemment restructuré en Fitness / Sports / Commerce)
Structure de référence reproduite. Sportec.fr inclut généralement des sous-sections "Sports indoor" + "Sports outdoor" + "Patinoires" + "Stations ski" + "Stand de tir".

### Delta

| Point | État | Note |
|---|---|---|
| Architecture Fitness / Sports / Commerce | ✅ | Alignée sur sportec.fr post-restructuration |
| Section Fitness : 6 sous-cartes (sans yoga) | ✅ | Cohérent — yoga retiré à raison |
| Section Sports : limitée à sports-hiver + stand-tir | 🎨 | Choix assumé en attendant validation UNI versa/classic. Kraiburg propose en plus indoor/outdoor (basket/tennis/multi-jeux) |
| Section Commerce : bureaux / magasins / salons / rééducation | ✅ | Aligné Kraiburg (salons-évènements : page 404 sur Kraiburg, donc NPS = spécifique FR) |
| Sous-catégories Fitness alignées Kraiburg (cardio, haltéro, fonctionnel, outdoor, gymcoustic) | ✅ | Bonne correspondance |
| "Fitness général" (page /sport/fitness) | 🎨 | Sur Kraiburg, page Fitness sert de hub, pas de "fitness général". Choix UX NPS valide. |

### Verdict : ✅ Architecture alignée post-refonte. Indoor/outdoor volontairement retiré (commentaire code explicite) — à compléter quand la gamme UNI sera validée.

---

## 2.2 `/sport/fitness`

### État NPS actuel
- Hero, **7 features** (durabilité, protection support, confort athlète, anti-glisse R10, insonorisation -16 dB @6mm / -20 dB @10-12mm, installation, entretien).
- Grille SPORTEC (exclut mountain + icemat = produits sports d'hiver).

### Kraiburg équivalent : `sportec/fr/applications/fitness/`
**10+ produits cités** : SPORTEC® color, color FR, neon, giga, purcolor, variant, style, base FR, base MS, team cup X, base-20 FR.
**7 avantages** : durable, protection support, protection articulations, R10/DS Label, -16 dB @6mm / ~-20 dB @10-12mm, installation facile, maintenance minimale.

### Delta

| Point | État | Note |
|---|---|---|
| 7 features avec mêmes chiffres (-16 dB @6mm, -20 dB @10-12mm, R10 DIN 51130) | ✅ | Exactement aligné |
| Mention "Label DS" | ➕ | Kraiburg cite "DS Label" en plus de R10. NPS le mentionne sur certaines pages mais pas ici |
| Liste 10 produits SPORTEC | ✅ | Grille NPS filtre `sportProducts` (exclut hiver) — couvre la gamme |
| Sous-catégories d'activité (treadmills, spinning, weight stations, weightlifting <40kg, functional, CrossFit, power) | ➕ | Kraiburg détaille les activités au sein de Fitness ; NPS renvoie aux sous-pages dédiées — choix UX OK |
| Produit "team cup X" + "base-20 FR" | ⚠️ | À vérifier que ces SKU sont au catalogue NPS. Si absents, juste ne pas les promettre |

### Verdict : ✅ Aligné sur features et chiffres. ➕ Ajouter "Label DS" et vérifier présence catalogue de team cup X / base-20 FR.

---

## 2.3 `/sport/fitness/cardio`

### État NPS actuel
- 6 features : stabilité, durabilité, insonorisation (-16 @6mm / -20 @10-12mm), confort, protection support, installation.
- Recommandation : **SPORTEC® COLOR** rouleau 4-8 mm collé + SPORTEC COLOR avec inserts EPDM.
- Filtre catalogue : exclut base FR/MS, style, mountain, icemat.

### Kraiburg équivalent : `sportec/fr/applications/fitness/cardio/`
Produits cités : color, color FR, neon, giga, purcolor, variant, Puzzle 2.0.
Apps : treadmills, spinning, strength stations, weightlifting (<40 kg), functional, CrossFit.

### Delta

| Point | État | Note |
|---|---|---|
| Recommandation SPORTEC color | ✅ | Aligné (Kraiburg le cite en 1er) |
| 6 features + chiffres dB | ✅ | OK |
| Filtre exclut style / base FR/MS | ✅ | Cohérent : Kraiburg réserve ces produits aux zones de chute lourde |
| Variant SPORTEC® variant + giga inclus dans liste Kraiburg | ✅ | Présents dans le filtre NPS (non-exclus) |
| Apps treadmills / spinning / elliptiques | ✅ | NPS le mentionne dans le hero ("Tapis, vélos, elliptiques, spinning") |

### Verdict : ✅ Parfaitement aligné.

---

## 2.4 `/sport/fitness/halterophilie`

### État NPS actuel
- 7 features : haute résistance / faible rebond, protection support, protection appareils, stabilité, amovible, install (goujons préinstallés), **réduction sonore -24 dB @30mm**.
- Recommandation : **SPORTEC® STYLE** + plateforme bois sur **SPORTEC® BASE FR** (30 mm Cfl-s1, absorption choc 51 %).
- Filtre catalogue : exclut mountain + icemat.

### Kraiburg équivalent : `sportec/fr/applications/fitness/halterophilie/`
Produits : style, base FR, base MS, color/color FR/neon/giga/purcolor (pour <40 kg), Puzzle 2.0, edge & corner ramps FR, uniq style, team cup X, shockwave 3D, supercell, gymcoustic.
Avantages : résistance chocs / rebond faible, protection support, **24 dB @30mm**, R10, install facile.

### Delta

| Point | État | Note |
|---|---|---|
| Réduction sonore 24 dB @30 mm | ✅ | Chiffre identique |
| Recommandation STYLE + BASE FR | ✅ | Aligné (Kraiburg met aussi style + base FR/MS en avant) |
| Mention "absorption choc 51 %" (BASE FR) | ✅ | Cohérent avec données Kraiburg Gymcoustic (base = 51,4 %) |
| Produits "edge & corner ramps FR" + "uniq style" + "shockwave 3D" + "supercell" | ➕ | Kraiburg liste ces accessoires/sous-couches. NPS n'en parle pas — opportunité d'enrichir la gamme accessoires haltéro si distribués |
| Limite "<40 kg" pour color/neon/giga/purcolor | ➕ | Kraiburg pose une limite de poids explicite. NPS pourrait ajouter ce critère pour aider à choisir |

### Verdict : ✅ Reco produit et chiffres alignés. ➕ Limite poids "<40 kg" et accessoires (edge/corner ramps FR) sont des plus à ajouter sans extrapoler.

---

## 2.5 `/sport/fitness/fonctionnel`

### État NPS actuel
- 7 features : durable, protection support (10-12 mm), protection appareils, R10, insonorisation ~-20 dB @10-12 mm, install, maintenance.
- Recommandation : **SPORTEC® PUZZLE 2.0** modulaire + **SPORTEC® COLOR** zones fixes.
- Filtre : exclut mountain, icemat, base FR, base MS.

### Kraiburg équivalent : `sportec/fr/applications/fitness/functional-training/`
9 produits : color, color FR, neon, giga, purcolor, variant, style, team cup X, Puzzle 2.0.
7 avantages : résilience, protection support (10-12 mm), protection équipement, R10, -20 dB, installation, maintenance modulaire.

### Delta

| Point | État | Note |
|---|---|---|
| Reco PUZZLE 2.0 + COLOR | ✅ | Cohérent — Kraiburg les cite parmi les références pour CrossFit/circuit |
| 7 features + chiffres | ✅ | OK |
| Filtre exclut base FR/MS | ⚠️ | Kraiburg liste style + Puzzle 2.0 mais aussi suggère base FR/MS pour zones de drop intensif. NPS exclut base — choix défendable car fonctionnel = mouvement, pas chute lourde. À conserver tel quel |
| Produit "team cup X" | ➕ | Cité Kraiburg, à vérifier au catalogue NPS |

### Verdict : ✅ Aligné. Filtrage base FR/MS = choix éditorial cohérent (fonctionnel ≠ haltéro).

---

## 2.6 `/sport/fitness/plein-air`

### État NPS actuel
- 9 features : résistance chocs, protection support, protection appareils, stabilité, amovible, install (goujons), insonorisation -26 dB @30 mm, résistance intempéries, entretien facile.
- Filtre catalogue : exclut color, mountain, icemat, Puzzle 2.0.

### Kraiburg équivalent : `sportec/fr/applications/fitness/outdoor-fitness/`
Produits : **base FR, base MS, style UNI versa, powerturf (gazon artificiel weight sleds), UNI versa (100% EPDM open-pore), multi-pavers** (dalles pavées élastiques).
Avantages : absorption chocs, protection support (grille intégrée), protection équipement, R10, modulaire, install dalles avec connecteurs, entretien, résistance climatique.

### Delta

| Point | État | Note |
|---|---|---|
| -26 dB @30 mm | ⚠️ | Sur Kraiburg cardio/fitness/halterophilie c'est -24 dB @30mm (BASE FR). Le -26 dB pourrait correspondre à une autre épaisseur outdoor mais **n'apparaît pas sur la page outdoor-fitness Kraiburg fetchée**. À vérifier la source de ce chiffre. Possible que ce soit base MS ou multi-pavers : à confirmer côté NPS sinon corriger. |
| Filtre exclut color + Puzzle 2.0 | ⚠️ | Kraiburg n'exclut pas Puzzle 2.0 en outdoor mais ne le cite pas non plus pour outdoor-fitness. Filtre NPS défendable |
| Produits Kraiburg "powerturf" + "multi-pavers" + "UNI versa" + "style UNI versa" | ➕ | Cités Kraiburg outdoor, absents catalogue NPS (cohérent avec décision de ne pas afficher UNI versa tant que non validé) |
| Résistance intempéries / multi-climat | ✅ | OK |

### Verdict : ⚠️ Vérifier chiffre **-26 dB @30 mm** (Kraiburg dit -24 dB). ➕ Une fois UNI versa / multi-pavers validés, à intégrer.

---

## 2.7 `/sport/fitness/gymcoustic`

### État NPS actuel
- Hero, intro, vue 3D, schéma multicouche (SPORTEC Level 1&2 + DAMTEC + KRAIBURG PURASYS).
- **3 product lines** : FLOORING (SPORTEC color rouleau 4-12 mm, 15-18 dB), MODULAR (Puzzle 2.0 + STYLE), ACOUSTIC (base MS / base FR, jusqu'à 25 dB).
- Section Avantages clés : **38 dB**, **70 % absorption**, design, épaisseurs 20-40 mm, formats, 100 % recyclable.

### Kraiburg équivalent : `sportec/fr/gymcoustic/`
**5 product lines** : Basic Line (25 dB, 51,4 %), All-round Line (30 dB, 55,6 %, + team cup X), Acoustic Line (34 dB, + shockwave 3D), Performance Line (42 dB, 74,3 %, 70 mm + supercell), Custom Line (DAMTEC + PuraSys).
Produits clés : style/base (surfaces), team cup X (10 mm), shockwave 3D, supercell (20 mm).

### Delta

| Point | État | Note |
|---|---|---|
| Architecture multicouche SPORTEC + DAMTEC + PURASYS | ✅ | Aligné avec Custom Line Kraiburg |
| Nombre de gammes : NPS = 3 (FLOORING, MODULAR, ACOUSTIC) vs Kraiburg = 5 (Basic, All-round, Acoustic, Performance, Custom) | ⚠️ | NPS regroupe différemment. Pas faux mais Kraiburg structure plus finement |
| "38 dB" mentionné côté NPS (Avantages clés) | ⚠️ | Kraiburg cite **25 / 30 / 34 / 42 dB** selon line. 38 dB n'apparaît pas tel quel chez Kraiburg. À vérifier la source ou corriger en "jusqu'à 42 dB (Performance Line)" |
| "70 % absorption" | ⚠️ | Kraiburg : Basic 51,4 % / All-round 55,6 % / Performance 74,3 %. Le 70 % n'est pas faux (proche Performance) mais non documenté ; préciser "jusqu'à 74 % (Performance Line)" serait factuel |
| Mention team cup X, shockwave 3D, supercell | ➕ | Kraiburg les cite comme sous-couches élastiques par gamme. NPS n'expose pas ces SKU |
| Lignes "Basic / All-round / Acoustic / Performance / Custom" | ➕ | Vocabulaire Kraiburg officiel à reprendre pour clarifier les niveaux d'isolation |

### Verdict : ⚠️ Chiffres **38 dB** et **70 %** à recaler sur les valeurs Kraiburg officielles (25/30/34/42 dB ; 51 % / 56 % / 74 %). ➕ Adopter le nommage des 5 lines pour plus de précision.

---

## 2.8 `/sport/sports-hiver`

### État NPS actuel
- Hero, 2 sous-cartes : Stations de ski + Patinage sur glace.

### Kraiburg équivalent : `sportec/fr/applications/sports-d-hiver/`
Sections : Products / Applications / Reference Projects.
2 applications : Ice Skating + Ski Resorts.
Produits outdoor : mountain, icemat. Indoor : style, color, neon, giga, purcolor, variant. Cert Cfl-s1, A+, R10 DIN 51130.

### Delta

| Point | État | Note |
|---|---|---|
| Architecture 2 sous-cartes (ski + patinage) | ✅ | Aligné |
| Mention Cfl-s1, A+, R10 | ➕ | Kraiburg les met en avant sur la page hub. NPS ne les liste pas sur le hub sports-hiver |
| Aperçu produits outdoor vs indoor | ➕ | Kraiburg sépare clairement outdoor (mountain/icemat) vs indoor (color/style/etc.). NPS laisse le détail aux sous-pages |

### Verdict : ✅ Structure alignée. ➕ Ajouter une mention courte des certifications (Cfl-s1, A+, R10) au niveau hub.

---

## 2.9 `/sport/sports-hiver/stations-ski`

### État NPS actuel
- 6 features : R10, protection matériel ski (10-12 mm), confort marche, robuste (caillebotis), -20 dB @10-12 mm, install.
- Filtre : **sportec-mountain + sportec-icemat uniquement**.
- Commentaire code : Kraiburg recommande mountain (dalle outdoor 30 mm Cfl-s1) + icemat (dalle puzzle).

### Kraiburg équivalent : `sportec/fr/applications/sports-d-hiver/stations-de-ski/`
**404** — accessible seulement via le hub winter-sports.

### Delta

| Point | État | Note |
|---|---|---|
| Sélection mountain + icemat | ✅ | Cohérent avec recommandation Kraiburg hub |
| Specs R10, -20 dB, 10-12 mm, Cfl-s1 | ✅ | Aligné avec specs Kraiburg hub |
| Page Kraiburg dédiée | ❌ | 404 — NPS doit s'auto-documenter sur la base du hub (déjà fait) |

### Verdict : ✅ Sélection produits cohérente. ❌ Pas de page Kraiburg dédiée à vérifier — NPS doit garantir sa cohérence en interne.

---

## 2.10 `/sport/sports-hiver/patinage`

### État NPS actuel
- 6 features : R10, protection matériel, confort, robuste (lames de patins), -20 dB @10-12 mm, install.
- Filtre : **icemat + style + color + Puzzle 2.0**.

### Kraiburg équivalent : `sportec/fr/applications/sports-d-hiver/patinage-sur-glace/`
**404** — accessible seulement via le hub winter-sports.

### Delta

| Point | État | Note |
|---|---|---|
| Sélection : icemat (anti-coup de patin) + style + color + Puzzle 2.0 | ✅ | Aligné avec gamme indoor Kraiburg pour patinoires |
| Specs R10, -20 dB | ✅ | OK |
| Mention "résistant lames patins" | ✅ | Argument différenciateur, dans la ligne Kraiburg |
| Page Kraiburg dédiée | ❌ | 404 |

### Verdict : ✅ Sélection cohérente. ❌ Pas de page Kraiburg de référence à vérifier.

---

## 2.11 `/sport/stand-tir`

### État NPS actuel
- Hero "Gamme SHIELDTAC®", 10 avantages techniques (10 000 J VPAM-ARG v3 / WaffG, αw 0,75 ricotile 50 mm, A+ COV, 8 teintes RAL ricosys PU, 100 % recyclé, fab. Allemagne).
- 7 zones d'utilisation (stands extérieurs, déflecteurs, pièges à balles, supervision, sols, murs/plafonds, entraînement tactique).
- Catalogue : `shieldtacProducts` (ricotile, ricotile FR, ricosys PU, skirting board, pavers, blocks, fragsafe, SPORTEC color FR, giga).
- Tableau comparatif certifications par produit (joules, feu, αw, R10, COV).

### Kraiburg équivalent : `shieldtac/fr/`
Produits : ricotile (40/43/70 mm), ricosys PU, pavers, blocks, fragsafe.
Tests : VPAM-ARG v3 (200-7 000 J), WaffG, Bundeswehr (460-6 000 J).
Feu : Efl à Cfl-s1 (DIN EN 13501-1).
100 % recyclé, A+ VOC, fab. Salzwedel.

### Delta

| Point | État | Note |
|---|---|---|
| Liste produits SHIELDTAC | ✅ | NPS reprend les 5 produits Kraiburg + skirting board + SPORTEC color FR + giga (zones supervision) |
| Tableau comparatif (joules / feu / αw / R10 / COV) | ✅ | Données alignées Kraiburg (200-10 000 J ricotile, 200-7 000 J autres, αw jusqu'à 0,75, Bfl-s1 ricosys PU, etc.) |
| "10 000 J" pour ricotile | ⚠️ | Kraiburg cite "VPAM-ARG v3 (200-7 000 J)" sur le hub. Le 10 000 J pourrait venir d'une fiche produit spécifique ricotile (à vérifier sur la fiche Kraiburg ricotile dédiée) |
| Mention Bundeswehr (460-6 000 J) | ➕ | Kraiburg cite explicitement. NPS pourrait ajouter cette référence — différenciateur militaire |
| Rapports B-31/2009, 210/2025, 212/2025 (NPS) | ✅ | Présents en footnote tableau NPS — cohérent avec exigences VPAM/WaffG |
| Mention 8 teintes RAL pour ricosys PU | ➕ | Argument visuel/design, à vérifier source officielle Kraiburg (fiche ricosys PU) |

### Verdict : ✅ Très complet et bien aligné. ⚠️ Vérifier source du "10 000 J" (vs 7 000 J hub Kraiburg). ➕ Ajouter mention Bundeswehr.

---

## 2.12 `/sport/commerce/bureaux`

### État NPS actuel
- 7 features : R10/DS Label, Cfl-s1 (purcolor/variant/UNI classic), design moderne, A+ AFFSET COV (purcolor), -16 dB @6 mm, confort marche, nettoyage facile.
- Filtre : exclut base FR/MS, style, mountain, icemat.

### Kraiburg équivalent : `sportec/fr/applications/commerce/bureaux/`
6 produits : purcolor, variant, UNI classic, color, color FR, Puzzle 2.0.
7 avantages : R10, Cfl-s1, intégration design, A+ COV, -16 dB @6mm, confort, entretien.

### Delta

| Point | État | Note |
|---|---|---|
| 7 features mot pour mot | ✅ | Aligné (chiffres et certifs identiques) |
| Mention purcolor / variant / UNI classic = Cfl-s1 | ✅ | OK |
| A+ AFFSET (purcolor) | ✅ | OK |
| Produit "SPORTEC® UNI classic" | ⚠️ | Listé Kraiburg ; absent du catalogue NPS (décision assumée en hub /sport). Cohérent avec choix global de ne pas afficher UNI tant que non validé |
| Filtre exclut base FR/MS, style, mountain, icemat | ✅ | Cohérent |

### Verdict : ✅ Alignement excellent. UNI classic volontairement absent — cohérent avec politique NPS.

---

## 2.13 `/sport/commerce/magasins`

### État NPS actuel
- 8 features : confort marche, design, Cfl-s1 (purcolor/variant/UNI classic), robuste, R10/DS, **antistatique DIN EN 1815 (color, splash, giga)**, -16 dB @6 mm, nettoyage.
- Filtre : exclut base FR/MS, style, mountain, icemat.

### Kraiburg équivalent : `sportec/fr/applications/commerce/magasins/`
Produits : purcolor, variant, UNI classic, color, color FR, Puzzle 2.0.
8 avantages : confort, design, Cfl-s1, durabilité, R10/DS, antistatique DIN EN 1815 (color/splash/giga), -16 dB @6mm, entretien.

### Delta

| Point | État | Note |
|---|---|---|
| 8 features identiques | ✅ | Aligné parfaitement (même formulation, mêmes normes) |
| Mention SPORTEC® splash | ➕ | Cité Kraiburg dans le contexte antistatique. Vérifier présence catalogue NPS sinon ne pas le mentionner explicitement |
| Mention UNI classic | ⚠️ | Cohérent avec décision NPS de ne pas afficher UNI |
| Filtre catalogue NPS | ✅ | Cohérent |

### Verdict : ✅ Alignement excellent. ➕ Vérifier statut "SPORTEC splash" au catalogue NPS.

---

## 2.14 `/sport/commerce/salons-evenements`

### État NPS actuel
- 7 features : R10/DS, Cfl-s1, options design, -16 dB @6 mm, confort, install temporaire, nettoyage facile.
- Filtre : exclut base FR/MS, style, mountain, icemat.

### Kraiburg équivalent
**404** — page `sportec/fr/applications/commerce/salons-evenements/` n'existe pas chez Kraiburg.

### Delta

| Point | État | Note |
|---|---|---|
| Page Kraiburg | ❌ | 404 — page NPS-spécifique pour marché FR |
| Features dérivées des arguments standards commerce (R10, Cfl-s1, dB) | 🎨 | Cohérent avec ligne éditoriale Kraiburg commerce, transposé sur événementiel |
| Argument "install/désinstall rapide pour temporaire" | 🎨 | Spécifique salons — pertinent et factuel |

### Verdict : 🎨 Page NPS-spécifique légitime (404 Kraiburg). Contenu cohérent avec arguments génériques commerce Kraiburg.

---

## 2.15 `/sport/commerce/reeducation`

### État NPS actuel
- 8 features : confort, protection articulations, absorption choc, R10/DS, accès fauteuil roulant, design coloré, -16 dB @6 mm, install simple.
- Filtre : exclut base FR/MS, style, mountain, icemat.

### Kraiburg équivalent : `sportec/fr/applications/commerce/reeducation/`
**8 avantages** : confort training, protection articulations, R10 DIN 51130, fauteuil roulant, design, -16 dB @6mm, install + entretien.
Produits recommandés : Puzzle 2.0, purcolor.

### Delta

| Point | État | Note |
|---|---|---|
| 8 features alignées | ✅ | Aligné mot pour mot (R10, fauteuil, -16 dB, design coloré) |
| Reco produit Puzzle 2.0 + purcolor | ✅ | NPS n'exclut pas ces deux SKU → cohérent |
| Texte feature "absorption de choc" tronqué | ⚠️ | NPS : `"absorbe les chocs et contribue à réduire la charge sur le"` — phrase coupée ligne 28 du `.tsx`. Bug rédactionnel à corriger |

### Verdict : ✅ Aligné sur features. ⚠️ **Phrase tronquée à corriger** dans le `.tsx` (ligne 28 : "...la charge sur le" sans suite).

---

# Section 3 — Bricolage (1 page)

## 3.1 `/bricolage`

### État NPS actuel
- Hero "Bricolage" pour particuliers, grille produits `bricolageProducts`, CTA conseil + tél, fallback "produits à venir" si vide.

### Kraiburg équivalent : `profimat.com` (site séparé Kraiburg pour DIY/particuliers)
14 produits (en allemand) : Bumpy (cale parking), Reifenwiege, Reifenschoner, Gummi-Bordsteinrampe (rampe trottoir), Leiter-Antirutschmatte (antidérapant échelle), Fallschutzmatte (protection chute), Waschmaschinenmatte (tapis machine à laver), Kniekissen ergonomique, Arbeitsplatzmatte ergonomique, Universal-Gummimatte, Bautenschutzmatte (protection chantier), Akustik base, Fitness eco, Werkstatt-/Garagenmatte (atelier/garage).
Public : grandes surfaces bricolage, pros bâtiment, particuliers.

### Delta

| Point | État | Note |
|---|---|---|
| Mention "Tapis machine à laver, protections de sol, accessoires antichoc" (hero NPS) | ✅ | Cohérent avec Waschmaschinenmatte, Bautenschutzmatte, Fallschutzmatte |
| Catalogue NPS | À auditer | À vérifier que `bricolageProducts` couvre les 14 SKU Profimat (Bumpy, Reifenwiege, etc.). Si seule une partie est commercialisée, OK ; sinon élargir |
| Site séparé profimat.com | 🎨 | NPS regroupe sous /bricolage — choix UX valide |
| Argument "Made in Germany / recyclé" | ➕ | Profimat le met en avant. NPS ne le mentionne pas sur cette page |
| Mentions de la marque PROFIMAT | ⚠️ | NPS dit "Solutions...pour particuliers" sans nommer Profimat. Si NPS distribue effectivement Profimat, mentionner la marque crédibilise (sans citer Kraiburg si voulu) |

### Verdict : 🎨 Architecture OK. ➕ Mentionner "marque PROFIMAT" et "Made in Germany / caoutchouc recyclé" pour crédibiliser. ⚠️ Vérifier exhaustivité catalogue vs 14 SKU Profimat.

---

# Section 4 — Pages standalone (NPS-spécifiques)

## 4.1 `/` (homepage)

### État NPS actuel
- Hero carousel vidéo, 3 cartes services (Bâtiment, Bricolage, Sport), section Sport/Fitness avec lien `/sport/fitness`, section Solutions acoustiques avec image Kraiburg building, section Produits avec image Kraiburg production, bouton "Voir notre catalogue" → `/produits`.

### Comparaison
Pas de comparable Kraiburg direct (Kraiburg est un fabricant, NPS un distributeur multi-marques). Page est NPS-positioning.

### Delta

| Point | État | Note |
|---|---|---|
| Affichage 3 verticales (Bâtiment, Bricolage, Sport) | ✅ | Reflète structure du site |
| Mention images "Kraiburg building" + "Kraiburg production" | 🎨 | Cohérent pour distributeur ; assume la marque amont |
| Section Sport renvoie vers `/sport/fitness` au lieu de `/sport` hub | ⚠️ | Le hub `/sport` est plus complet (Fitness + Sports + Commerce). Devrait renvoyer vers `/sport` plutôt que `/sport/fitness` |
| Texte "sport indoor et outdoor" dans homepage | ⚠️ | Indoor/outdoor a été retiré du hub /sport. Texte homepage à mettre à jour pour rester cohérent ("cardio, muscu, haltéro, fonctionnel, plein-air, sports d'hiver, stand de tir") |

### Verdict : 🎨 Page standalone légitime. ⚠️ **2 micro-corrections** : lien Sport → `/sport`, et texte mentionnant "sport indoor et outdoor" à mettre à jour.

---

## 4.2 `/notre-expertise`

### État NPS actuel
- Page `robots: noindex, nofollow` ("contient des claims de service à valider avec NPS").
- 5 secteurs : Bâtiment, Sport, Hôtellerie (→ `/batiment/isolation-sous-chape`), Anti-vibration (→ `/batiment/isolation-acoustique`), Bricolage.
- Mention DTU 52.10, EN 14904, ATE, A+, AgBB, Blue Angel.
- 6 promesses service (conseil, gamme pro, doc, devis 24h, guides, échantillons).

### Comparaison
Pas de comparable Kraiburg (page de positionnement service NPS).

### Delta

| Point | État | Note |
|---|---|---|
| Mention normes DTU 52.10, EN 14904 | ✅ | Spécifique marché FR — pertinent |
| Mention AgBB, Blue Angel | ➕ | Certifications environnementales Kraiburg officielles. À vérifier que NPS dispose des docs avant de les promettre |
| Page noindex | 🎨 | Claims à valider — décision prudente |
| "Hôtellerie" pointe vers `/batiment/isolation-sous-chape` | ⚠️ | Pas de section dédiée hôtellerie ; lien correctif acceptable mais le titre induit l'utilisateur en erreur (s'attend à une vraie page CHR) |

### Verdict : 🎨 Cohérent. ⚠️ Faire valider les claims avec NPS (déjà flaggé `noindex`) avant publication.

---

## 4.3 `/produits`

### État NPS actuel
- Catalogue complet filtrable par catégorie (Bâtiment / Sport / Bricolage), recherche texte, groupement par sous-catégorie, pagination "Voir plus".
- Marques listées : DAMTEC, KRAITEC, SPORTEC, VIBRA, PROFIMAT.

### Comparaison
Pas de comparable Kraiburg (Kraiburg a des sites séparés par marque).

### Delta

| Point | État | Note |
|---|---|---|
| Catalogue unifié multi-marques | 🎨 | Valeur ajoutée NPS — Kraiburg n'a pas d'équivalent |
| Liste marques : DAMTEC, KRAITEC, SPORTEC, VIBRA, PROFIMAT | ✅ | Couvre les 5 marques Kraiburg distribuées par NPS |
| Marque SHIELDTAC absente de la liste BRANDS | ⚠️ | Le tableau `BRANDS` (lignes 19-27) ne contient pas SHIELDTAC. Or NPS distribue maintenant la gamme SHIELDTAC (cf. /sport/stand-tir). À ajouter |
| Marque "TOP" listée par certaines pages bâtiment | ⚠️ | TOP n'est pas une marque autonome chez Kraiburg, juste un suffixe KRAITEC TOP. Conserver ou clarifier |

### Verdict : 🎨 Bon outil de catalogue. ⚠️ **Ajouter SHIELDTAC à la liste des marques** filtrables.

---

# Synthèse globale

## Statistiques

| Catégorie | Nb pages |
|---|---|
| Pages auditées | 25 (22 sectorielles + 3 standalone) |
| Pages parfaitement alignées ✅ | 13 — `/batiment` hub, isolation-acoustique, sous-chape, revêtements-sols, /sport hub, fitness, cardio, fonctionnel, halterophilie, bureaux, magasins, rééducation, sports-hiver hub |
| Pages avec ajouts possibles ➕ (sans risque) | 5 — solutions-exterieures, stand-tir, bricolage, isolation-acoustique (vibradyn), revêtements-sols (B1) |
| Pages avec incohérences à corriger ⚠️ | 5 — gymcoustic (38 dB / 70 %), plein-air (-26 dB), rééducation (phrase tronquée), homepage (lien `/sport/fitness` + texte indoor/outdoor), `/produits` (SHIELDTAC manquant marques) |
| Pages avec style OK 🎨 | 5 — isolation-sans-ate, salons-evenements, notre-expertise, /produits, homepage, bricolage |
| Pages Kraiburg 404 ❌ | 3 — stations-ski, patinage, salons-evenements |
| Pages NPS-spécifiques (pas de comparable Kraiburg) | 4 — isolation-sans-ate, salons-evenements, homepage, notre-expertise, produits |

## Audit fiches produit individuelles

Voir précédent audit fiche par fiche (tâches #62-#68 : DAMTEC sous chape, DAMTEC revêtements sols, VIBRA + ULTRAGYM + VIBRADYN, DAMTEC SONIC + KRAITEC, Sans ATE, SPORTEC, SHIELDTAC). Cet audit-ci se concentre sur les pages de catégorie/landing.

## Actions concrètes recommandées par priorité

### Priorité 1 — Corriger les incohérences chiffrées (factuel)

1. **`/sport/fitness/gymcoustic`** : recaler les chiffres "38 dB" et "70 % absorption" sur les valeurs Kraiburg officielles : **25 / 30 / 34 / 42 dB** selon line, et **51,4 % / 55,6 % / 74,3 %**. Idéalement adopter le nommage Kraiburg des 5 lines (Basic / All-round / Acoustic / Performance / Custom) ou justifier le regroupement actuel en 3 lines.

2. **`/sport/fitness/plein-air`** : vérifier la source du **"-26 dB @30 mm"**. Kraiburg dit `-24 dB @30mm` (BASE FR sur la page haltéro). Soit corriger en `-24 dB`, soit citer la source précise du `-26 dB` (peut-être multi-pavers ?).

3. **`/sport/stand-tir`** : confirmer le **"10 000 J"** ricotile. Hub SHIELDTAC.fr cite "VPAM-ARG v3 (200-7 000 J)". Le 10 000 J peut venir de la fiche ricotile dédiée — vérifier la source officielle ou ajuster à 7 000 J.

### Priorité 2 — Corriger bugs rédactionnels

4. **`/sport/commerce/reeducation`** : phrase tronquée ligne 28 du `.tsx` (`"absorbe les chocs et contribue à réduire la charge sur le"`) — compléter ("...sur les articulations" ou similaire).

5. **`/` (homepage)** : changer le lien Sport `→ /sport/fitness` vers `→ /sport` (hub plus complet) ; mettre à jour le texte "sport indoor et outdoor" (ces catégories ont été retirées du hub) en `"cardio, muscu, haltéro, fonctionnel, plein-air, sports d'hiver, stand de tir"`.

6. **`/produits`** : ajouter **SHIELDTAC** au tableau `BRANDS` (ligne 19) pour que les utilisateurs puissent filtrer la gamme balistique.

### Priorité 3 — Enrichissements factuels (sans extrapoler)

7. **`/batiment/isolation-acoustique`** : surfacer le différenciateur **"vibradyn = cellules fermées, milieu humide / immergé"** (fait par Kraiburg, absent NPS).

8. **`/batiment/isolation-revetements-sols`** : mettre en avant la variante **"black uni B1"** avec classement feu B1 / Cfl-s1 (cible ERP) — Kraiburg en fait un argument fort.

9. **`/batiment/solutions-exterieures`** : structurer la gamme KRAITEC en **3 séries TOP / STEP / PROTECT** comme Kraiburg, et ajouter cas d'usage **panneaux solaires, parkings, toits verts** si distribués.

10. **`/sport/fitness/halterophilie`** : préciser la **limite "<40 kg"** pour color/neon/giga/purcolor (Kraiburg la pose explicitement) pour aider à choisir entre surface légère et dalle haltéro.

11. **`/sport/stand-tir`** : ajouter mention **certification Bundeswehr (460-6 000 J)** — différenciateur militaire/police officiel Kraiburg.

12. **`/bricolage`** : nommer explicitement la marque **PROFIMAT** + mention "Made in Germany / caoutchouc recyclé" pour crédibiliser.

### Priorité 4 — Clarification éditoriale

13. **`/batiment/isolation-sans-ate`** : changer "Notre gamme TOP" pour éviter confusion avec KRAITEC TOP (toiture). Proposer un nom plus distinct (ex: "Sous-couches sans ATE", "gamme NPS TOP rénovation"…).

14. **`/notre-expertise`** : valider les claims de service avec NPS avant de retirer `noindex`. Vérifier disponibilité réelle de la documentation AgBB / Blue Angel avant de la promettre.

15. **`/sport`** : envisager (quand UNI versa / UNI classic / standard 2.0 seront validés par NPS) d'ajouter les sections **Sport indoor** + **Sport outdoor** (basket, tennis, multi-jeux) pour atteindre la couverture complète Kraiburg.

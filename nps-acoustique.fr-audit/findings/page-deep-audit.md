# NPS Acoustique — Page Deep Audit (Forensic)

**Date** : 2026-06-26
**URLs auditées** :
1. https://nps-acoustique.fr/ (homepage)
2. https://nps-acoustique.fr/batiment/isolation-sous-chape (hub catégorie)
3. https://nps-acoustique.fr/produit/damtec-3d-17-8 (fiche produit)

**Méthode** : fetch HTML brut (curl + UA Chrome desktop, FR locale), parsing forensic head/body/JSON-LD/DOM. Pages servies depuis Next.js (statique pre-rendu — pas de blocage indexation).

---

## SYNTHÈSE EXÉCUTIVE

| Page | Score | Verdict |
|------|-------|---------|
| Homepage | **62/100** | OK technique, mais hero KW vague + content thin + canonical correct |
| Hub `isolation-sous-chape` | **58/100** | Excellent contenu produit, mais **CANONICAL CASSÉ** (pointe vers home) — bug critique |
| Fiche `damtec-3d-17-8` | **74/100** | Très belle fiche, Product schema riche, **OG title sans brand**, manque FAQ + AggregateRating |

**3 PROBLÈMES TRANSVERSAUX BLOQUANTS** (à fixer avant tout) :

1. **Canonical hub cassé** : `/batiment/isolation-sous-chape` déclare `canonical: https://nps-acoustique.fr` (homepage). Google va dé-indexer la page hub. Probable bug template Next.js — vérifier `<head>` layout vs page metadata. **CRITIQUE — fix < 30 min.**
2. **Aucun `<meta name="robots">`** sur les 3 pages → laisse l'indexation au défaut, OK mais perd l'opportunité de signaler `max-image-preview:large` pour Discover.
3. **Twitter handle `@npsacoustique`** : vérifier qu'il existe (sinon supprimer — un handle invalide pollue les social cards).

---

## 1. HOMEPAGE — https://nps-acoustique.fr/

### A. On-page SEO

| Élément | Valeur | Verdict |
|---------|--------|---------|
| **Title** | `NPS Acoustique \| Isolation acoustique et anti-vibratoire` (58 chars) | OK longueur, mais brand en début → perd 8 chars de KW. Recommandé : `Isolation acoustique et anti-vibratoire \| NPS Acoustique` (KW first) |
| **Meta description** | `Spécialiste de l'isolation acoustique et anti-vibratoire depuis plus de 20 ans. Solutions pour le bâtiment, le sport, l'hôtellerie et le bricolage.` (148 chars) | OK longueur. Manque CTA + KW concrets (« DAMTEC », « sous chape »). Pas de mention « France » ni « devis ». |
| **H1** | `Acoustique desbâtiments tertiaires` | **BUG TYPO** : « desbâtiments » (espace manquant — bug rendering React span). Et KW « isolation acoustique » absent du H1. |
| **H2** | `Nos domaines d'expertise` / `Sols sportifs professionnels` / `Nos Solutions Acoustiques` / `Nos Produits Acoustiques` | Hiérarchie OK mais H2 génériques (« Nos solutions »). Aucun KW long-tail. |
| **H3** | `Bâtiment & Industrie`, `Bricolage`, `Sport` | Trop courts, manquent qualificatifs SEO |
| **URL** | `/` | OK |
| **Canonical** | `https://nps-acoustique.fr` | OK (légère imprecision : pas de trailing slash — cohérent ?) |
| **OG** | title/description/site_name/locale/type=website. **og:image MANQUANT**, **og:url MANQUANT** | Partage social cassé (pas d'image preview). |
| **Twitter Card** | summary_large_image, site=@npsacoustique. **twitter:image MANQUANT** | Card cassée sans image. |
| **hreflang** | absent | OK (site mono-FR) |

### B. Content quality

- **Word count visible** : ~301 mots (très faible pour une homepage tertiaire — concurrents Regupol/Acoustix tournent à 800-1500)
- **Densité KW** : `acoustique/isolation/phonique/vibratoire` = 15 occurrences / 301 mots = **4,9 %** → légèrement saturé, frôle le keyword stuffing
- **LSI / champ sémantique** : présent (bureaux, logements, ERP, industriel, ingénieurs, prescription, diagnostic, étude, chantier) — bon
- **Trust signals** : « depuis plus de 20 ans » dans meta description **MAIS ABSENT du body visible** → opportunité ratée. Pas de logos clients, pas de chiffres (X projets, Y m²), pas de certifications visuelles ATE/CE en hero
- **Intent match** : homepage = navigation hub. Intent OK mais le hero ne pose pas la proposition de valeur unique (distributeur Kraiburg officiel — info cachée dans la fiche produit)

### C. Schema

Présent :
- ✅ `Organization` (avec brands DAMTEC/KRAITEC/VIBRAFOAM/SPORTEC/PROFIMAT)
- ✅ `LocalBusiness` (Mont-de-Marsan 40000)
- ✅ `WebSite` (avec SearchAction)

Manquant :
- ❌ `BreadcrumbList` (pas critique en home)
- ❌ `ItemList` pour mettre en avant les 3 catégories (Bâtiment/Bricolage/Sport)
- ❌ `sameAs` vide dans Organization ET LocalBusiness → ajouter LinkedIn / page Kraiburg distributeur officiel

### D. Internal linking

- **38 liens internes uniques** sortants — bon volume
- Distribution : 5 vers `/batiment/*` (hub), 0 vers fiches produits depuis le hero (loupé), 1 vers `/contact`, 1 vers `/bricolage`, 1 vers `/sport`
- Anchor text : trop répétitif (« Découvrir → », « Voir nos produits ») — aucun anchor « DAMTEC », « ATE », « sous-chape »
- **0 lien externe** (jamais — y compris vers Kraiburg.de, source d'autorité)

### E. Images

- **8 images** total, **8/8 avec alt**, 6/8 lazy-loaded (header/hero non-lazy = OK pour LCP)
- Formats : **5 JPG, 2 PNG (logos), 1 WEBP** (sport.4e5662ff.webp) → migration WebP incomplète, restent 5 JPG hero à convertir
- Logo répété 2× (header + footer) — pas optimal (1 chargement, 2 rendus)

### F. Score & recommandations

**Note : 62/100**

**Top 3 quick wins (< 1 h, impact fort)** :
1. **Fix H1 typo** « desbâtiments » → « des bâtiments tertiaires » + réécrire en `Isolation acoustique et anti-vibratoire pour bâtiments tertiaires` (KW first). 5 min.
2. **Ajouter og:image + twitter:image** (1200×630, hero ou logo + tagline). 15 min.
3. **Inverser ordre title** : `Isolation acoustique et anti-vibratoire | NPS Acoustique` + meta desc avec CTA `Devis gratuit sous 24h. Distributeur officiel Kraiburg.`. 10 min.

**Top 3 chantiers moyen terme** :
1. **Étoffer la home** à 800+ mots : bloc « Pourquoi NPS » (20 ans, Kraiburg officiel, ATE, France entière, chiffres clés), bloc « Cas clients » (3-4 logos / projets), bloc FAQ acoustique grand public.
2. **Convertir tous JPG hero → WebP/AVIF** (gain LCP ~15-25 %).
3. **Ajouter ItemList schema** sur les 3 catégories + `sameAs` pointant vers Kraiburg officiel / LinkedIn pour bâtir l'entity graph.

---

## 2. HUB CATÉGORIE — /batiment/isolation-sous-chape

### A. On-page SEO

| Élément | Valeur | Verdict |
|---------|--------|---------|
| **Title** | `Isolation acoustique sous chape avec ATE \| NPS Acoustique` (58 chars) | **EXCELLENT** : KW long-tail first, ATE différenciateur, brand en fin |
| **Meta description** | `Sous-couches acoustiques certifiées ATE pour chape flottante. DAMTEC Standard, Black Uni, Estra. Conformes aux normes européennes pour bruits d'impact.` (151 chars) | OK longueur, KW denses. **Bug nommage** : mentionne « DAMTEC Standard, Black Uni » mais la page liste en réalité ESTRA / ESTRA 3D / WAVE 3D / 3D 17/8. Incohérence meta vs contenu → fix urgent. Pas de CTA. |
| **H1** | `Isolation acoustique sous chape avec ATE` (40 chars) | **EXCELLENT** — match parfait title. |
| **H2** | `Performances acoustiques ΔLw` / `Nos produits (4)` / `Continuez l'exploration` | OK technique mais « Continuez l'exploration » faible SEO — remplacer par `Autres solutions d'isolation acoustique bâtiment` |
| **H3** | 4 produits DAMTEC + 4 catégories cross-link | OK |
| **URL** | `/batiment/isolation-sous-chape` | Excellente structure, KW dans slug, profondeur 2 |
| **Canonical** | `https://nps-acoustique.fr` ⚠️ | **🚨 BUG CRITIQUE** : pointe vers homepage au lieu de `/batiment/isolation-sous-chape`. Google va consolider le ranking sur la home et dé-indexer le hub. À fixer EN PRIORITÉ ABSOLUE. Probable cause : composant Next.js layout qui définit canonical fixe au lieu de dériver du `pathname`. |
| **OG** | og:title / og:description / og:url ✅. **og:image MANQUANT** | URL OK cette fois |
| **Twitter** | card / site / title / description. **twitter:image MANQUANT** | |
| **hreflang** | absent | OK |

### B. Content quality

- **Word count visible** : ~490 mots — convenable pour un hub
- **Densité KW** : `chape/ate/isolation/acoustique/damtec` = 41 / 490 = **8,4 %** → **trop dense, risque sur-optimisation**. Diluer avec contexte applicatif.
- **LSI** : excellent (ETA-13/0342, ΔLw, granulat caoutchouc, mousse PU, sous-couche, bruits d'impact, chape flottante, chape sèche, ETA-15/0358, ETA-16/0481) — vocabulaire technique premium
- **Intent match** : intent = « comparer / choisir une sous-couche ATE ». Page propose **graphique comparatif ΔLw** (excellent), 4 produits avec specs + ETA → match très bon
- **Trust signals présents** : ATE/ETA numéros, performances chiffrées, certifications mentionnées (DIN, ISO, ASTM)
- **Manquant** : pas de « depuis 20 ans », pas de cas clients, pas de FAQ « Quelle sous-couche pour ma chape ? », pas de guide de choix décisionnel

### C. Schema

Présent : Organization, LocalBusiness, WebSite (héritage layout)

Manquant :
- ❌ **`BreadcrumbList`** (CRITIQUE — la fiche produit l'a, le hub non, incohérent)
- ❌ **`ItemList` ou `CollectionPage`** listant les 4 produits avec liens
- ❌ **`FAQPage`** pour les questions classiques (« Quelle épaisseur ? », « Différence ETA vs sans-ATE ? »)
- ❌ Pas de schema sur le graphique comparatif (potentiellement `Table` ou data attributes)

### D. Internal linking

- **38 liens internes uniques** sortants
- Liens vers chaque fiche produit DAMTEC du hub ✅
- Cross-link vers les 4 autres sous-rubriques bâtiment ✅
- Anchor text varié et descriptif (`Isolation acoustique - Solutions anti-vibratoires - Découvrir›`)
- **0 lien externe** (manque ETA register / Kraiburg / normes ISO source)

### E. Images

- **11 images**, **11/11 avec alt**, 8/11 lazy
- Formats : 2 PNG logos, **8 PNG produits**, 1 JPG hero → **les PNG produits packshot devraient être WebP** (gain ~60 % poids)
- Alts descriptifs : `Isolation acoustique sous chape`, `DAMTEC® ESTRA`, etc. ✅
- Hero `isolation-chape.c7066218.jpg` non-lazy (OK car LCP)

### F. Score & recommandations

**Note : 58/100** (pénalisé lourdement par canonical cassé)

**Top 3 quick wins (< 1 h)** :
1. **🚨 FIX CANONICAL** : changer `<link rel="canonical" href="https://nps-acoustique.fr"/>` → `https://nps-acoustique.fr/batiment/isolation-sous-chape`. Probablement dans `app/batiment/isolation-sous-chape/page.tsx` (export `metadata.alternates.canonical`). **CRITIQUE — bloquer toute autre action.**
2. **Fix incohérence meta description** : remplacer `DAMTEC Standard, Black Uni, Estra` par les vrais produits affichés `DAMTEC ESTRA, ESTRA 3D, WAVE 3D et 3D 17/8`. 5 min.
3. **Ajouter BreadcrumbList schema** (template déjà utilisé sur fiche produit — copier-coller adapté). 15 min.

**Top 3 chantiers moyen terme** :
1. **Ajouter FAQPage** : 5-8 questions (« Quelle épaisseur de sous-couche pour appartement ? », « ATE vs sans ATE ? », « DAMTEC vs concurrents Regupol ? », « Quel ΔLw pour respecter la NRA ? »). Boost AI Overviews + featured snippets.
2. **Guide décisionnel interactif** : 3-4 questions → recommandation produit. Augmente time-on-page + signal pertinence.
3. **Convertir PNG packshot → WebP** + ajouter ItemList/CollectionPage schema.

---

## 3. FICHE PRODUIT — /produit/damtec-3d-17-8

### A. On-page SEO

| Élément | Valeur | Verdict |
|---------|--------|---------|
| **Title** | `DAMTEC® 3D 17/8 \| NPS Acoustique` (33 chars) | **TROP COURT** + manque contexte. Recommandé : `DAMTEC® 3D 17/8 — Sous-couche acoustique chape flottante (ΔLw 34 dB) \| NPS Acoustique`. Profite pour caler KW principal + différenciateur perf |
| **Meta description** | `DAMTEC® 3D 17/8 est une sous-couche en fibres de caoutchouc de hautes qualité, profilées d'un coté, destinée à l'isolation des bruits d'impact. C'est la solutio` (159 chars, **TRONQUÉE en plein milieu de « solution »**) | **BUG TRONCATURE** : `c'est la solutio` (157 chars + cut). Réécrire propre : `Sous-couche acoustique DAMTEC® 3D 17/8 (fibres caoutchouc) pour chape flottante ou sèche. Performance ΔLw 34 dB. ATE ETA-16/0481. Devis gratuit.` (148 chars) |
| **H1** | `DAMTEC® 3D 17/8` (15 chars) | **TROP COURT pour SEO** — manque qualificatif. Recommandé : `DAMTEC® 3D 17/8 — Sous-couche acoustique sous chape` |
| **H2** | `Caractéristiques techniques` / `Accréditation` / `Produits similaires` | OK structurel |
| **H3** | `Documents`, `Besoin d'informations ?`, 3 produits similaires | OK |
| **URL** | `/produit/damtec-3d-17-8` | OK, slug propre |
| **Canonical** | `https://nps-acoustique.fr/produit/damtec-3d-17-8` ✅ | Parfait (contrairement au hub) |
| **OG** | og:title=`DAMTEC® 3D 17/8` (sans brand), og:description (tronquée idem meta), og:image ✅, og:url ✅, og:type=`website` (devrait être `product`) | **og:type incorrect** : pour fiche produit utiliser `product` ou `product.item` (Facebook Catalog), et og:title devrait inclure brand pour disambiguation sociale |
| **Twitter** | tous les tags + twitter:image ✅ | OK |
| **hreflang** | absent | OK |

### B. Content quality

- **Word count visible** : ~582 mots (excellent pour fiche produit)
- **Densité KW** : `damtec/3d/caoutchouc/chape/bruit/impact` = 24 / 582 = **4,1 %** → OK
- **Contenu** : description produit, tableau caractéristiques complètes (15 propriétés), ΔLw détaillé par configuration (ISO 10140 + ASTM E2179), 3 produits similaires
- **Mention « Distributeur officiel Kraiburg »** présente en haut ✅ — différenciateur fort
- **PDF fiche technique téléchargeable** ✅
- **Manquant côté trust** : pas de cas clients (« utilisé sur chantier X »), pas d'avis/témoignages, pas de prix indicatif (même fourchette), pas de délai livraison, pas de FAQ produit
- **Manquant côté content** : pas de bloc « Comparé à Regupol Sound 17 » (positionnement alternative que l'analyse interne a identifié), pas de calculateur quantité (m² → rouleaux)

### C. Schema

Présent :
- ✅ `Product` complet avec 15 `additionalProperty` (toutes les specs)
- ✅ `Offer` avec `availability: InStock`, `priceCurrency: EUR`, **mais sans `price`** (devis-only — acceptable)
- ✅ `BreadcrumbList` complet (Accueil > Bâtiment > Produit)
- ✅ Organization / LocalBusiness / WebSite (héritage)

Manquant :
- ❌ **`AggregateRating`** (si avis clients existent — sinon collecter)
- ❌ **`Review`** individuels
- ❌ **`FAQPage`** (« Quelle quantité pour 100 m² ? », « Compatible chauffage au sol ? », « Différence vs ESTRA ? »)
- ❌ Le `brand` du Product est `NPS Acoustique` — devrait être `DAMTEC` (ou `KRAIBURG`) car c'est le vrai fabricant. NPS = distributeur. Erreur sémantique pour Google Shopping / Knowledge Graph
- ❌ Pas de `gtin`, `mpn`, `sku` → essentiels pour produit industriel

### D. Internal linking

- **34 liens internes uniques** — bon
- Breadcrumb ✅
- 3 produits similaires (DAMTEC ESTRA / ESTRA 3D / WAVE 3D) ✅
- 2× CTA `/contact` (Demander un devis / Devis gratuit) ✅
- Lien PDF fiche technique `/fiches-techniques/Damtec_Estra_3D_17_8.pdf` ⚠️ — **nom de fichier ESTRA_3D au lieu de 3D_17_8** → potentielle mauvaise PDF servie. À vérifier.
- **Manquant** : lien vers la page hub parente `/batiment/isolation-sous-chape` (rupture de hiérarchie — depuis fiche on remonte direct à `/batiment`)
- Aucun anchor text varié type « voir notre guide d'isolation sous chape » avec liens contextuels

### E. Images

- **8 images**, **8/8 avec alt** descriptifs (incluant ` Marquage CE avec Agrément Technique Européen — DAMTEC® 3D 17/8`)
- 5/8 lazy (logos + hero produit non-lazy = OK)
- Formats : **8 PNG** (packshot + logos + certifications) → tout à convertir WebP
- Packshot principal : alt parfait, dimensions raisonnables

### F. Score & recommandations

**Note : 74/100** (la meilleure des 3, malgré titre court)

**Top 3 quick wins (< 1 h)** :
1. **Fix meta description tronquée** + réécrire title et H1 avec qualificatif (`Sous-couche acoustique chape flottante (ΔLw 34 dB)`). 15 min.
2. **Vérifier lien PDF** : `Damtec_Estra_3D_17_8.pdf` vs nom produit `DAMTEC 3D 17/8` (pas ESTRA). Probable mauvais fichier servi. 10 min.
3. **Corriger Product schema** : `brand.name` → `DAMTEC` (ou `Kraiburg`), `og:type` → `product`, ajouter `sku` (référence interne). 20 min.

**Top 3 chantiers moyen terme** :
1. **Ajouter bloc comparatif Regupol Sound 17** (cité dans context CleaningPage : « alternative Regupol Sound 17 ») — capte trafic transactionnel BOFU. Schema `ComparisonTable` + paragraphe différenciation.
2. **Collecter & afficher AggregateRating** + 3-5 témoignages projets (avec photo chantier + ΔLw mesuré). Boost CTR SERP via étoiles.
3. **FAQPage** (8 questions produit) + calculateur quantité interactif (m² → rouleaux 1.25 × 8 m).

---

## TRANSVERSE — Patterns à corriger globalement

| Pattern | Pages affectées | Action |
|---------|-----------------|--------|
| Canonical hardcodé sur home | 1 confirmée (hub), à scanner sur les 4 autres sous-rubriques `/batiment/*` | Auditer toutes les pages `/batiment/**` + `/bricolage/**` + `/sport/**` — probable bug layout/template Next.js |
| og:image manquant | Home + Hub | Générer 1 OG image par catégorie (1200×630) |
| og:type=website sur fiches produits | Fiche prod (et probablement toutes) | Conditionnel `type` selon page (website / product / article) |
| PNG à la place de WebP | Toutes (packshot, hero) | Pipeline image Next.js → forcer WebP/AVIF via `next/image` |
| Brand schema = NPS au lieu du fabricant | Toutes fiches produit | Mapper produit → marque réelle (DAMTEC/KRAITEC/VIBRAFOAM/SPORTEC) |
| Pas de FAQPage | Les 3 pages | Plan FAQ par template (home, hub, fiche) — 6 mois de gain GEO |
| sameAs vide | Organization + LocalBusiness | Ajouter LinkedIn entreprise + page distributeur Kraiburg officiel + Google Business Profile |
| Twitter handle non vérifié | Toutes | Vérifier `@npsacoustique` existe sinon retirer |

---

## PRIORITISATION ACTION PLAN

**🚨 P0 (cette semaine — < 2h cumulées)** :
- Fix canonical hub `/batiment/isolation-sous-chape` (et audit canonical sur toutes les pages internes)
- Fix typo H1 home « desbâtiments »
- Fix meta description tronquée fiche produit
- Vérifier lien PDF fiche produit (mauvais fichier ?)
- Corriger `og:type` fiches produit + `brand` Product schema

**P1 (ce sprint — < 1 jour)** :
- og:image + twitter:image pour toutes les pages (génération par catégorie)
- BreadcrumbList sur hub
- FAQPage sur hub + fiche produit (8 Q/A chacun)
- sameAs Organization (LinkedIn + Kraiburg)
- Pipeline conversion PNG → WebP

**P2 (mois prochain)** :
- Étoffer homepage 800+ mots avec trust signals visibles
- Guide décisionnel interactif sur hub
- Bloc comparatif Regupol Sound 17 sur fiche DAMTEC 3D 17/8
- Calculateur quantité produit
- Collecte AggregateRating + Reviews

---

## SCORES FINAUX

| Page | A. On-page | B. Content | C. Schema | D. Linking | E. Images | **Total** |
|------|-----------|-----------|-----------|-----------|-----------|-----------|
| Home | 12/20 | 11/20 | 14/20 | 14/20 | 11/20 | **62/100** |
| Hub | 8/20 (canonical) | 15/20 | 11/20 | 15/20 | 9/20 | **58/100** |
| Fiche | 13/20 | 16/20 | 17/20 | 15/20 | 13/20 | **74/100** |

**Note moyenne site (échantillon 3 pages) : 65/100** — bon socle technique Next.js, MAIS bug canonical pénalise lourdement le hub et probablement toute la silo `/batiment/*`. Le fix canonical seul peut faire gagner 10-15 points et reverser indexation correcte sur les pages catégorie — chantier ROI le plus élevé du backlog SEO.

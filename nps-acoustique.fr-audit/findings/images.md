# Audit Images SEO — NPS Acoustique

Source : Image Audit (static analysis sur repo `npsnextjs/` + curl live sur https://nps-acoustique.fr).
Date : 2026-06-26.
nanobanana-mcp : **non disponible** dans la config Claude actuelle → le plan de génération ci-dessous reste sous forme de spec ; pour exécuter, installer/activer l'extension banana puis relancer.

---

## Image Audit Summary

| Metric | Value | Status |
|---|---|---|
| Pages avec OG image | 49/81 (60%) | Fail |
| OG image globale par défaut | Absente | Fail |
| OG image hubs (`/batiment`, `/sport`, `/bricolage`, sous-hubs) | 0/14 | Fail |
| OG image fiches produit | 45/45 | Pass (mais 1000x1000 < 1200x630 recommandé) |
| OG image dimensions correctes (1200x630 min) | 0/49 | Fail |
| Schema `Product.image` URLs absolues | 0/45 | Fail (toutes relatives `/_next/...`) |
| Schema `ImageObject` typé (vs string) | 0/45 | Fail (juste strings simples) |
| Format moderne WebP/AVIF | 26/137 (19% WebP, 0% AVIF) | Fail |
| Poids hero image (cible <200KB) | 2.0-2.9 MB sur 8 hubs | Critical Fail |
| Poids packshot produit (cible <100KB) | médiane ~400KB, max 2.2MB | Fail |
| Packshots produit (img principale + complémentaire) | 4/45 (bricolage seul) | Fail |
| Alt text descriptif keyword-rich | mono-mot sur hubs ("Sport", "Cardio"…) | Fail |

---

## 1. OG / social preview

### Findings

- **Root `layout.tsx`** (`app/layout.tsx:31-39`) : `openGraph` défini sans `images` → aucune OG image par défaut servie en production. Confirmé via curl sur `/` → seul `"image": "icon.png"` apparaît dans le JSON-LD Organization.
- **Fiches produit** (`app/produit/[slug]/layout.tsx:46-53`) : OG image = `product.image` (packshot 1000x1000, PNG fond blanc). Présent mais **pas idéal pour social** : Twitter/LinkedIn coupent en 1200x630 → un packshot carré sur fond blanc rend faiblement et n'est pas brandé NPS.
- **Hubs** (`/batiment`, `/sport`, `/bricolage`, `/sport/fitness/...`) : `lib/seo.ts:191-197` `metaForRoute()` ne définit pas `openGraph.images` → confirmé via curl sur `/batiment` et `/sport/fitness/gymcoustic` → aucune balise `og:image`.
- **Guides** (`app/guide/[slug]/layout.tsx:34-42`) : `openGraph` sans `images` non plus, mais `robots: noindex` (contenu en cours de validation) → moins prioritaire.
- **Artefact orphelin** : `.vercel/output/.../opengraph-image.func` existe mais **aucun fichier source** `opengraph-image.{tsx,jpg,png}` dans `app/` → reliquat de build d'une ancienne tentative jamais consolidée.

### Conséquence

Quand quelqu'un partage `nps-acoustique.fr` (home) ou `/batiment` sur LinkedIn/WhatsApp/Slack, **aucune image n'apparaît** → preview vide ou favicon → CTR réseaux sociaux divisé par ~3.

---

## 2. Hero images

### Findings

- **Home** : `HeroCarousel` (`components/HeroCarousel.tsx`) → 4 vidéos MP4 (.public/videos/, 928KB-5.9MB) **pas de poster image** → LCP dégradé (cf findings/performance.md H2).
- **Hubs `/batiment`, `/sport`, `/bricolage`** : hero = `categories/batiment.jpg` (740KB), `categories/sport.webp` (629KB), `categories/bricolage.jpg` (1.6MB), `categories/industrie.jpg` (2.2MB).
- **PROBLÈME CRITIQUE — fichiers `.jpg` qui sont en réalité des PNG renommés** :

| Fichier | Poids | Format réel |
|---|---|---|
| `assets/batiment/isolation-acoustique.jpg` | 2.5 MB | PNG 1600x1600 |
| `assets/batiment/solutions-exterieures.jpg` | 2.5 MB | PNG 1600x1600 |
| `assets/batiment/solutions-acoustique.jpg` | 2.9 MB | PNG 1444x1444 |
| `assets/batiment/isolation-chape.jpg` | 2.3 MB | PNG 1600x1600 |
| `assets/categories/sport.jpg` | 2.4 MB | PNG |
| `assets/categories/industrie.jpg` | 2.2 MB | PNG 1920x1280 |
| `assets/categories/bricolage.jpg` | 1.6 MB | PNG 1600x1066 |
| `assets/categories/batiment.jpg` | 740 KB | PNG 1280x856 |

Total : **8 fichiers, 17 MB** de PNG déguisés en JPG.
En WebP qualité 80 → ~1.5-2 MB total (gain ~15 MB).

- **Dimensions hub** : 1280-1920px côté → OK pour desktop retina, mais pas servis en `srcset` → mobile télécharge le full-size.

---

## 3. Product packshots

### Findings

- **55 produits** dans `data/products.ts` (45 annoncés ≈ 45 SKU principaux + 10 variantes), tous ont **1 image principale** (`product.image`).
- **Image complémentaire (`usageImage`)** : seulement **4 produits sur 55** en bénéficient — tous bricolage (`profimat-bumpy`, `profimat-wheelprotect-13-18`, `profimat-wheelprotect-18-22`, `top-vib-wash`).
- Pour ces 4 fiches : pattern = `image` = photo en situation `.jpg` (cover) + `usageImage` = packshot fond blanc `.png` (contain). Bon UX, mais format incohérent (jpg+png) et tailles non optimisées (TOP_VIB_WASH packshot = 580KB).
- **51 autres fiches produit** n'ont qu'1 seule image → opportunité de doubler la signalétique visuelle (packshot + mise en situation).
- **Dimensions packshots** : tous en 1000x1000 (vérifié sur DAMTEC_VIBRA_30, SPORTEC_COLOR, PROFIMAT_BUMPY) → **inférieur au seuil Google Merchant Center (1200x1200)** et au seuil Google Images "high quality" (1600x1600).
- **Poids packshots batiment** (`assets/products/batiment/*.png`) : médiane ~415KB, max 2.2 MB (`DAMTEC_VIBRAFOAM_3D_17_8.png`). Cible recommandée packshot fond blanc = 30-80 KB en WebP.

---

## 4. Schema images

### Findings — bugs concrets

Vérification curl sur `/produit/damtec-vibra-30` → bloc `Product` JSON-LD :

```json
"@type":"Product",
"name":"DAMTEC® VIBRA 30",
"image":"/_next/static/media/DAMTEC_VIBRA_30.74c2f887.png"
```

**3 problèmes** :

1. **URL relative au lieu d'absolue** → Google Rich Results Test peut tomber en erreur "Image not accessible". Doit être `https://nps-acoustique.fr/_next/static/media/...`.
   Cause : `app/produit/[slug]/layout.tsx:82` `image: product.image` (product.image est un chemin Next bundler `/_next/...` sans préfixe).
2. **Image string plate au lieu d'`ImageObject` typé** → moins riche pour les bots. Recommandé Google :
   ```json
   "image": {
     "@type": "ImageObject",
     "url": "https://nps-acoustique.fr/...",
     "width": 1200, "height": 1200
   }
   ```
3. **1 seule image au lieu d'1-3** → Google recommande array de 1-3 images (packshot + situation + détail). Là où `usageImage` existe (4 produits bricolage), elle **n'est pas remontée dans le schema**.

L'`og:image` (qui pointe vers le même asset) hérite du préfixe absolu via `metadataBase` → c'est OK, seulement le schema JSON-LD est cassé.

---

## 5. Alt text quality

### Findings

Sur les hubs et sous-hubs (`app/sport/page.tsx:98`, `app/sport/fitness/cardio/page.tsx:55`, `app/sport/commerce/bureaux/page.tsx:60` …) :

- Alt texts **mono-mot non descriptifs** : "Sport", "Cardio", "Fitness", "Bureaux", "Magasins", "Patinage sur glace", "Stations de ski"…
- **Pas de keyword SEO** ("isolation acoustique", "sol sportif"…) ni de marque ("SPORTEC", "DAMTEC").
- Sur les fiches produit (`components/ProductGallery.tsx:91-98`) : `alt={product.name}` → "DAMTEC® VIBRA 30" → mieux mais toujours faible (manque contexte).
- Miniatures de galerie (`ProductGallery.tsx:152`) : `alt=""` → OK décoratif (image principale a déjà l'alt), pas de bug ici.
- Logos certifications : alts bien rédigés (`app/produit/[slug]/page.tsx:283,291,299,307,315`) → ces 5 sont bons.

Exemples avant/après recommandés :

| Fichier | Avant | Après |
|---|---|---|
| `app/sport/page.tsx:98` | `alt="Sport"` | `alt="Sols sportifs SPORTEC pour salles de fitness, stand de tir et sports extérieurs"` |
| `app/sport/fitness/cardio/page.tsx:55` | `alt="Cardio"` | `alt="Sol amortissant pour zone cardio en salle de sport — tapis, vélos, elliptiques"` |
| `app/sport/commerce/bureaux/page.tsx:60` | `alt="Bureaux"` | `alt="Acoustique de bureau et open space — solutions NPS pour confort sonore"` |
| `ProductGallery.tsx:91` (active.alt) | `alt={product.name}` | `alt={\`${product.name} — ${kraiburgBrand ?? ''} sous-couche acoustique\`}` (déjà partiellement fait pour usage images L168-172) |

---

## Image Generation Plan

Priorités : **Critical** (blocking SEO/social) > **High** > **Medium** > **Low**.

Spec format par défaut : **WebP qualité 80, AVIF fallback en bonus, poids cible <250KB pour OG, <120KB pour hero, <60KB pour packshot fond blanc**.

| Page | Issue | Use case | Prompt idea | Dimensions | Format | Poids cible | Priority |
|---|---|---|---|---|---|---|---|
| `/` (home + fallback site-wide) | Pas d'OG par défaut | og | Visuel brandé NPS Acoustique : composition produit DAMTEC sur fond noir, tagline "Isolation acoustique & anti-vibratoire depuis 20 ans", logo NPS coin sup-droit, marques Kraiburg en pied | 1200×630 | WebP+JPG | <200KB | Critical |
| `/batiment` | Hero PNG-déguisé 2.5MB | hero + og | Chantier bâtiment tertiaire moderne, vue plongeante sur chape avec sous-couche acoustique apparente, ambiance pro lumière naturelle | 1920×1080 hero, 1200×630 og | WebP | hero <150KB, og <200KB | Critical |
| `/sport` | Hero PNG-déguisé 2.4MB | hero + og | Salle de fitness pro avec sol SPORTEC color, athlète en haltérophilie, ambiance gym premium | 1920×1080, 1200×630 | WebP | <150KB, <200KB | Critical |
| `/bricolage` | Hero PNG-déguisé 1.6MB | hero + og | Garage/buanderie domestique propre, machine à laver sur tapis Top Vib Wash, sol garage avec berceau pneus | 1920×1080, 1200×630 | WebP | <150KB, <200KB | Critical |
| `/batiment/isolation-acoustique` | Hero PNG-déguisé 2.5MB | hero + og | Coupe technique murale isolation phonique entre logements, codes couleur, propre | 1920×1080, 1200×630 | WebP | <150KB, <200KB | High |
| `/batiment/isolation-sous-chape` | Hero PNG-déguisé 2.3MB | hero + og | Coulage de chape sur sous-couche DAMTEC Estra, vue rasante chantier | 1920×1080, 1200×630 | WebP | <150KB, <200KB | High |
| `/batiment/solutions-exterieures` | Hero PNG-déguisé 2.5MB | hero + og | Toiture-terrasse KRAITEC step protégeant membrane étanchéité, vue 3/4 ciel bleu | 1920×1080, 1200×630 | WebP | <150KB, <200KB | High |
| `/batiment/isolation-revetements-sols` | Pas de hero spécifique | hero + og | Pose de parquet sur sous-couche DAMTEC Itapur, gros plan technique | 1920×1080, 1200×630 | WebP | <150KB, <200KB | High |
| `/sport/fitness` | Pas d'og | og | Zone fonctionnelle gym avec sol SPORTEC puzzle, kettlebells au sol | 1200×630 | WebP | <200KB | High |
| `/sport/fitness/gymcoustic` | Pas d'og (page concept) | og | Schéma Gymcoustic 3D vue éclatée modulaire | 1200×630 | WebP | <200KB | High |
| `/sport/stand-tir` | Pas d'og | og | Stand de tir indoor avec panneaux SHIELDTAC, éclairage dramatique | 1200×630 | WebP | <200KB | High |
| `/sport/sports-hiver` | Pas d'og | og | Patinoire avec abords SPORTEC icemat, ambiance bleutée | 1200×630 | WebP | <200KB | Medium |
| `/sport/commerce/bureaux,magasins,salons-evenements,reeducation` (×4) | Pas d'og | og | 4 visuels distincts par sous-vertical | 1200×630 chaque | WebP | <200KB chaque | Medium |
| 51 fiches produit sans `usageImage` | 1 seule image (packshot) | hero/situation | Photo mise en situation par SKU — généraliser le pattern bricolage à tous les produits | 1200×1200 | WebP | <80KB | Medium (par lots) |
| Fiches produit (toutes 45) | Packshots 1000x1000 | hero | Re-render packshots existants en 1200×1200+ pour Google Merchant Center | 1200×1200 ou 1600×1600 | WebP+PNG transparent | <60KB | Medium |
| Futur blog/glossaire | Aucune infographie | hero | Infographie "Indice ΔLw — comment lire les performances acoustiques" + "Calcul dB isolation chape" + diagrammes vibrations Hz | 1200×630 chaque | WebP | <120KB | Low |

**Volume total estimé** : 14 OG dédiés (hubs+home) + 8 hero hubs WebP-converted + 51 mises en situation produit + 45 packshots re-rendus 1200×1200 + ~10 infographies futures = **~128 assets**.

**Coût générique nanobanana** (estimation à valider en réel) : ~$0.05-0.10 par image générée + variations → fourchette $6-15 pour les OG + hubs (Critical+High), $25-50 pour le pack complet incluant mises-en-situation et packshots.

---

## Recommandations actionnables

### Quick wins (à faire avant toute génération)

1. **Renommer en `.png` les 8 fichiers PNG-déguisés-en-jpg** OU mieux : les convertir en WebP qualité 80 via `cwebp` / `sips -s format webp` → économie ~15 MB sans changer un seul pixel rendu :
   ```bash
   for f in assets/categories/*.jpg assets/batiment/*.jpg; do
     cwebp -q 80 "$f" -o "${f%.jpg}.webp"
   done
   ```
   Puis mettre à jour imports `data/products.ts` et page imports.

2. **Ajouter une OG image fallback** au root layout (`app/layout.tsx`) :
   ```ts
   openGraph: {
     ...,
     images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "NPS Acoustique — isolation acoustique et anti-vibratoire" }],
   }
   ```
   En attendant le visuel généré, déposer un PNG simple (logo + tagline sur fond plein) — 1 heure de Figma.

3. **Fixer le schema Product `image`** (`app/produit/[slug]/layout.tsx:82`) en URL absolue :
   ```ts
   image: product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`,
   ```
   Et passer en `ImageObject` typé avec `width/height` connus.

4. **Étendre `metaForRoute()`** (`lib/seo.ts:191`) avec un champ `ogImage` par route pour permettre des OG dédiés par hub.

5. **Re-écrire les ~25 alt texts mono-mot** dans `app/sport/**/page.tsx` et `app/sport/commerce/**` — chantier 30 min, gain SEO Images significatif.

### Pipeline de génération (quand nanobanana-mcp sera dispo)

- **Lot 1 — Critical (4 visuels)** : OG default + OG/hero pour `/batiment`, `/sport`, `/bricolage`.
- **Lot 2 — High (8 visuels)** : OG/hero sous-hubs bâtiment + sous-hubs sport fitness.
- **Lot 3 — Medium (4 visuels commerce + 1 sports-hiver)** : 5 OG.
- **Lot 4 — Re-render packshots** : pas via banana mais via re-export source (à demander au fournisseur Kraiburg ou récupérer du PIM officiel) en 1600×1600 → conversion WebP locale.
- **Lot 5 — Mises en situation produit** : générer par lots de 10 fiches pour éviter rupture stylistique. Prompt template : `"Premium product photography of [product name], rubber acoustic underlayment, [usage context], natural daylight, professional, 4k"`.

### Pipeline WebP/AVIF conversion (script à mettre dans `scripts/convert-images.sh`)

```bash
#!/bin/bash
# Convertit tous les PNG/JPG > 200KB en WebP qualité 80 + AVIF qualité 65
find assets -type f \( -name "*.png" -o -name "*.jpg" \) -size +200k | while read f; do
  cwebp -q 80 "$f" -o "${f%.*}.webp" 2>/dev/null
  avifenc -q 65 "$f" "${f%.*}.avif" 2>/dev/null
done
```

À brancher en pre-build dans `package.json` (`"prebuild": "bash scripts/convert-images.sh"`).

### Note critique sur Cloudflare Pages

`next.config.mjs:10` `images.unoptimized: true` → Next.js ne sert pas WebP/AVIF à la volée. Deux options :

- **Option A (simple)** : convertir les sources en `.webp` directement (recommandé ici).
- **Option B (avancée)** : utiliser **Cloudflare Images** ou **Cloudflare Image Resizing** (intégré aux Workers) → conversion automatique + `srcset` responsive sans toucher au code applicatif. Coût ~$5/mois pour <100k requêtes. Recommandé si volume site augmente.

---

## TL;DR

- **Critical** : home + 10 hubs n'ont **aucune OG image** → preview social cassé. À fixer avant toute campagne LinkedIn/Ads.
- **Critical** : 8 hero hubs sont des PNG déguisés en `.jpg` à 2-3 MB chacun → 17 MB économisables avec un simple `cwebp`.
- **High** : schema Product `image` en URL relative → casse les rich results Google sur 45 fiches.
- **Medium** : généraliser le pattern "packshot + photo situation" du bricolage aux 51 autres fiches → +contenu visuel SEO Images.
- **Low** : alt texts hubs mono-mot, blog/glossaire à venir.

Plan de génération prêt mais nanobanana-mcp pas installé sur ce profil → activer l'extension banana puis exécuter Lot 1 (4 visuels Critical).

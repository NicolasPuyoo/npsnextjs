# Schema.org / Structured Data — Findings NPS Acoustique

## Score : 55/100 (Bonnes bases, énormes opportunités)

## ✅ Ce qui marche

- **Organization** + **LocalBusiness** + **WebSite** : JSON-LD posés sur toutes les pages via `app/layout.tsx` (centralisé dans `lib/jsonLd.ts`)
- **VibraProductSchema.tsx** : Product schema sur les 7 fiches DAMTEC vibra (avec specs, brand=Kraiburg)
- **JSON-LD format** : préféré par Google vs Microdata/RDFa ✅
- **Source unique** : `lib/jsonLd.ts` = pas de drift entre pages

## 🔴 CRITICAL

### C1 — Product schema MANQUANT sur 38/45 fiches produit

Seuls les 7 DAMTEC vibra ont leur Product schema. Les 38 autres fiches (DAMTEC ESTRA, DAMTEC 3D, SPORTEC, SHIELDTAC, PROFIMAT, KRAITEC, etc.) n'ont AUCUN Product schema. Impact :
- Pas de rich snippets dans Google (image, prix sur demande, availability, brand)
- Pas de Google Merchant Center possible
- Pas d'éligibilité Shopping graph

**Fix :** généraliser `VibraProductSchema.tsx` en `ProductSchema.tsx` réutilisable, l'appliquer sur tous les `app/produit/[slug]/page.tsx`. Effort : 4-6 h.

```jsonc
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://nps-acoustique.fr/produit/{slug}",
  "name": "{name}",
  "image": ["https://nps-acoustique.fr{image}"],
  "description": "{description}",
  "sku": "{slug}",
  "brand": { "@type": "Brand", "name": "Kraiburg Relastec" },
  "manufacturer": { "@type": "Organization", "name": "Kraiburg Relastec", "url": "https://www.kraiburg-relastec.com/" },
  "category": "{category}",
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Matériau", "value": "..." },
    { "@type": "PropertyValue", "name": "Performance acoustique ΔLw", "value": "26 dB" },
    { "@type": "PropertyValue", "name": "Certification ETA", "value": "ETA-16/0481" }
  ],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "EUR",
    "priceSpecification": { "@type": "PriceSpecification", "price": "0", "priceCurrency": "EUR" },
    "seller": { "@type": "Organization", "name": "NPS Acoustique", "url": "https://nps-acoustique.fr" }
  }
}
```

Note : sans prix affiché, utiliser `priceSpecification` + descriptif "Sur demande".

### C2 — Pas de BreadcrumbList sur les pages profondes

Aucune page hiérarchique (fiche produit, hub catégorie) n'a de BreadcrumbList. Impact :
- Pas de breadcrumb dans Google SERP (perte de visibilité)
- Hiérarchie du site invisible aux crawlers

**Fix :** créer composant `BreadcrumbSchema.tsx`, l'appliquer sur toutes pages avec depth ≥ 2.

### C3 — LocalBusiness incomplet

Le LocalBusiness schema actuel n'a pas :
- `address` complète (rue, code postal, ville) → "Mont-de-Marsan" probable
- `geo` coordinates (lat/lng)
- `openingHours`
- `priceRange` (B2B : "$$" recommandé)
- `areaServed` : "France" (en `addressCountry: FR`)
- `sameAs` : profils sociaux (LinkedIn NPS, Facebook si existe)
- `aggregateRating` (si avis Google Business)

Sans ces champs, le Knowledge Panel Google ne peut pas se construire.

## 🟡 HIGH

### H1 — FAQPage schema absent partout

Aucune FAQPage schema sur le site. Or les hubs catégorie sont des candidats parfaits pour FAQ + rich snippet collapsé dans Google. Exemples :

- `/batiment/isolation-sous-chape` → FAQ "Quelle ΔLw pour ma chape ?", "ETA obligatoire ou non ?", "Différence DAMTEC ESTRA vs 3D ?"
- `/bricolage` → FAQ "Comment installer un tapis lave-linge ?", "Combien de plots WHEELPROTECT pour une voiture ?"

**Impact estimé :** +15-25 % CTR sur les pages avec FAQ schema en SERP.

### H2 — Pas de HowTo schema

NPS pourrait créer des guides d'installation (pose DAMTEC sous chape, fixation BUMPY parking, etc.) avec HowTo schema → éligible aux rich results en étapes numérotées.

### H3 — Pas de VideoObject

Si NPS produit des vidéos demo (cf creative brief ads-plan), VideoObject schema = éligible aux video snippets Google.

### H4 — Speakable schema absent (impact AI Assistants)

Les sections clés de chaque page (intro, FAQ answers, specs principales) devraient avoir `speakable` annotation → utilisable par Google Assistant + Siri lookup vocal.

## 🟢 MEDIUM

### M1 — Organization.brand pourrait être enrichi

Actuellement liste des brands distribuées. Préciser la relation officielle :

```jsonc
{
  "@type": "Organization",
  "name": "NPS Acoustique",
  "subOrganization": [
    { "@type": "Brand", "name": "DAMTEC", "owner": { "@type": "Organization", "name": "Kraiburg Relastec" } }
  ]
}
```

### M2 — WebSite SearchAction

Si NPS ajoute une vraie search (actuellement `/produits?search=...`), inclure SearchAction dans WebSite schema → Sitelinks Search Box éligible.

### M3 — Article schema sur futurs articles blog

Quand NPS lancera son content marketing (cf ads-plan), chaque article doit avoir Article + author + datePublished + image.

## 🟢 LOW

### L1 — Manque CollectionPage sur hubs catégorie

Les pages hubs (`/batiment`, `/sport`, `/bricolage`) sont des CollectionPage qui listent les sous-catégories/produits. Ajouter le schema permet à Google de comprendre la structure de listing.

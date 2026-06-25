# National Distribution SEO — Findings NPS Acoustique

> **CORRECTION CRITIQUE :** NPS n'est PAS un commerce local. C'est un **distributeur national B2B/B2C** France entière. Pas de zone de chalandise géographique. Map Pack local, location pages par ville, GBP-centric strategy = INUTILES pour NPS. Cette page audit a été ré-orientée vers ce qui compte réellement.

## Score : 50/100 (positionnement national OK mais 2 secteurs majeurs sans hub)

## Type business réel

**Distributeur national B2B/B2C** :
- Pas de showroom walk-in
- Pas de zone géographique (livraison France entière)
- Siège social à Mont-de-Marsan (juste l'adresse légale) — pas un argument commercial
- Site dit explicitement "professionnels et particuliers", aucune mention géographique

**5 secteurs cibles** (officiels via `/notre-expertise`) :
1. **Bâtiment** ✅ a son hub `/batiment` + 5 sous-hubs
2. **Sport** ✅ a son hub `/sport` + sous-pages fitness/sports-hiver/commerce/stand-tir
3. **Hôtellerie** ❌ **PAS DE HUB DÉDIÉ** — uniquement mentionné sur `/notre-expertise`
4. **Industrie** ❌ **PAS DE HUB DÉDIÉ** — uniquement mentionné sur `/notre-expertise`
5. **Bricolage** ✅ a son hub `/bricolage`

## 🔴 CRITICAL (vrais leviers nationaux)

### C1 — 2 hubs secteur manquants (énorme gap KW)

NPS cible explicitement 5 secteurs mais 2 n'ont pas de page hub :

**`/hotellerie`** absent → rate les KW :
- "isolation acoustique chambre hôtel"
- "réglementation acoustique CHR"
- "sous-couche acoustique hôtellerie"
- "sol terrasse hôtel"
- "isolation phonique restaurant"
- Volume estimé : moyen (B2B niche mais haute valeur)

**`/industrie`** absent → rate les KW :
- "désolidarisation machine industrielle"
- "antivibration compresseur"
- "isolation vibration groupe froid"
- "sol industriel acoustique"
- "fondation machine vibration"
- Volume estimé : moyen (B2B haute valeur, longue durée vente)

**Fix :** créer ces 2 hubs sur le modèle existant `/batiment` et `/sport`.
Format :
- H1 + intro 200 mots (problématique secteur)
- Section "Réglementation/normes applicables" (NRA pour hôtels, ICPE pour industrie, etc.)
- Grille produits filtrée par pertinence secteur
- 2-3 cas d'usage type
- FAQ + FAQPage schema
- CTA devis spécialisé secteur

**Effort :** 6-8 h/hub = ~2 jours. **Impact :** déblocage de 2 segments business à forte valeur ajoutée.

### C2 — Positionnement national pas explicite dans le copy

Le site dit "depuis plus de 20 ans" mais ne dit JAMAIS clairement "livraison France entière", "distributeur national exclusif", "stock en France". Pour un BET à Lille qui se demande "ce fournisseur livre-t-il chez moi ?" → réponse pas évidente.

**Fix :** ajouter sur :
- Footer : "Distributeur national — livraison France entière"
- Homepage hero ou section dédiée : badge "🚚 Livraison France 7-15 jours"
- `/contact` : carte France stylisée + "Nous livrons partout en France"
- Fiches produit : "En stock — livraison France 7-15 jours"
- LocalBusiness schema : `areaServed: { @type: Country, name: France }`

## 🟡 HIGH

### H1 — NAP basique (pas pour Map Pack mais pour trust signal)

L'adresse complète NPS reste utile pour :
- Mentions légales (obligation réglementaire FR)
- Citations annuaires B2B (Pages Jaunes, Kompass, Hellopro, Societe.com) — pour trust + backlinks, pas pour local pack
- LocalBusiness schema (Organization en réalité) avec adresse siège social
- Page contact (carte siège + "Bureau de Mont-de-Marsan — équipe joignable au 05 58 77 55 89")

**Fix :** récupérer l'adresse complète (numéro + rue + CP + ville), l'intégrer aux 4 emplacements ci-dessus. **C'est différent de "local SEO" — c'est de la transparence légale + trust national.**

### H2 — Google Business Profile : utile mais PAS central

GBP utile pour :
- Apparaître dans la SERP "NPS Acoustique" recherche brand (Knowledge Panel à droite)
- Existence officielle Google
- Récolter quelques avis B2B

GBP **NON utile pour :**
- ❌ Map Pack local (personne ne tape "isolation acoustique Mont-de-Marsan")
- ❌ Ranking sur KW métier (NPS rank sur des KW génériques nationaux, pas locaux)

**Donc :** créer GBP minimal (catégorie, photos, description, tel) MAIS ne pas y investir des heures de SEO local. Effort 30 min total au lieu de 4-6 h de location optimization.

### H3 — Annuaires français B2B (pour backlinks + trust national, pas local)

Citations utiles :
- **Pages Jaunes** : seul vrai "incontournable", utile autant pour B2B que particuliers
- **Kompass** : annuaire B2B référence, lu par acheteurs / décideurs
- **Societe.com** : KBis + SIRET visible (transparence trust)
- **Hellopro** : intentions d'achat B2B
- **batiproduits.com** : référencé par architectes/BET
- **archiexpo** : visibilité architectes UE
- **materiaux.archi** : encyclopédie matériaux pour prescripteurs

**Ne pas faire :** Yelp, TripAdvisor (irrelevant B2B), annuaires SEO spammy.

**Effort :** 4-6 h. **Impact :** trust signals + backlinks (pas local ranking).

### H4 — Annuaires acoustique spécialisés

- **ACOUTERA** : annuaire des acousticiens FR
- **CINOV** (Confédération de l'ingénierie) : BET référencement
- **SFA** (Société Française d'Acoustique) : pro acoustique

**Effort :** 2 h. **Impact :** notoriété pro + backlinks haute autorité topique.

## 🟢 MEDIUM

### M1 — areaServed dans LocalBusiness schema

Actuellement absent. Ajouter explicitement :

```jsonc
"areaServed": [
  { "@type": "Country", "name": "France" }
],
"hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "Catalogue NPS Acoustique",
  "itemListElement": [...]
}
```

### M2 — Type Schema : Organization OU LocalBusiness ?

Actuellement LocalBusiness. Pour un distributeur national, plus juste = `Organization` + `Distributor` (Schema.org additionalType).

```jsonc
{
  "@type": ["Organization", "Distributor"],
  "name": "NPS Acoustique",
  "brand": { "@type": "Brand", "name": "Kraiburg Relastec" },
  "areaServed": { "@type": "Country", "name": "France" }
}
```

LocalBusiness reste utile en parallèle pour le siège physique + GBP (mais secondaire au positionnement national).

## 🟢 LOW

### L1 — Pas de location pages

**À NE PAS FAIRE.** NPS n'a pas de différenciation locale (pas de stock régional, pas de cas client localisé visible, pas de partenaires régionaux). Créer `/zone/paris`, `/zone/lyon` etc. sans contenu unique = thin content = pénalité Google. Skip.

**Exception future :** si NPS développe des partenariats régionaux concrets (revendeur local, cas client phare) → créer la page seulement pour cette ville avec contenu unique. Cas par cas.

### L2 — Apple Maps / Bing Places

Utile pour cohérence NAP cross-platform mais marginal pour un distributeur national sans Map Pack ambition.

## 📊 Plan d'attaque ajusté (NATIONAL, pas local)

| Priorité | Action | Effort | Impact |
|---|---|---|---|
| 🔴 P0 | Créer hub `/industrie` (DAMTEC vibra + Vibrafoam, KW haute valeur B2B) | 6-8 h | ÉNORME |
| 🔴 P0 | Créer hub `/hotellerie` (DAMTEC sous-couches CHR + KRAITEC terrasses) | 6-8 h | Fort |
| 🟡 P1 | Compléter NAP partout (mentions, footer, schema) + Schema Organization avec areaServed France | 2 h | Trust signal |
| 🟡 P1 | Citations annuaires B2B (Pages Jaunes, Kompass, batiproduits, archiexpo) | 4-6 h | Trust + backlinks |
| 🟢 P2 | GBP minimal (existence, pas Map Pack) | 30 min | Brand SERP |
| 🟢 P2 | Annuaires acoustique pro (ACOUTERA, CINOV) | 2 h | Notoriété pro |
| ❌ DELETE | Location pages /zone/paris etc. | — | Piège thin content |
| ❌ DELETE | Optimisation Map Pack Mont-de-Marsan | — | KW volume zéro |

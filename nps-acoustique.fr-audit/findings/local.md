# Local SEO — Findings NPS Acoustique

## Score : 35/100 (Schema posé mais GBP absent, NAP incomplet)

## Type business détecté

**Hybride** : brick-and-mortar (entrepôt + showroom Mont-de-Marsan, équipe physique) + Service Area Business (livraison France entière depuis le 40).

NPS n'est pas un commerce de proximité walk-in (B2B principalement), donc le local SEO sert :
- Capter "isolation acoustique Mont-de-Marsan" + villes alentour (Bordeaux, Toulouse, Pau)
- Apparaître dans Google Maps quand prospect cherche un fournisseur acoustique en NA
- Légitimité (adresse réelle + tel FR = trust signal)

## ✅ Ce qui marche

- **LocalBusiness schema** en place (via `lib/jsonLd.ts`) sur toutes les pages
- **Téléphone** : 05 58 77 55 89 (FR format) visible footer + contact
- **Email** : contact@nps-france.com visible
- **JSON-LD `@type: LocalBusiness`** avec `@id`

## 🔴 CRITICAL

### C1 — Pas de Google Business Profile (GBP)

NPS n'a vraisemblablement pas créé son GBP "NPS Acoustique" Mont-de-Marsan. Vérification : taper "NPS Acoustique" sur Google Maps → absent ou non vérifié.

**Impact :**
- Pas de Knowledge Panel à droite des SERP Google
- Pas de Map Pack pour les recherches locales BTP NA
- Pas d'éligibilité aux Local Service Ads (LSA Google)
- Pas de collection avis Google → pas d'aggregateRating dans schema

**Fix :** créer un GBP, vérifier par carte postale (5-7 jours wait). Effort : 30 min + 1 semaine wait.

Champs à remplir :
- Catégorie principale : "Fournisseur de matériel acoustique" (ou "Importateur")
- Catégories secondaires : "Magasin de matériaux de construction", "Grossiste en équipement industriel"
- Description (750 char max) : "NPS Acoustique est le distributeur officiel exclusif en France du fabricant allemand Kraiburg Relastec depuis plus de 20 ans. Nous fournissons des solutions caoutchouc d'isolation acoustique et anti-vibratoire pour le bâtiment (DAMTEC), le sport (SPORTEC), les stands de tir (SHIELDTAC) et les particuliers (PROFIMAT)."
- Photos : entrepôt, équipe, showroom, produits en situation (20+ photos)
- Services listés : 10-15 services principaux
- Zone d'intervention : France entière

### C2 — NAP (Name/Address/Phone) incomplet

L'adresse complète de NPS Mont-de-Marsan n'apparaît :
- Pas dans le footer (juste tel + email)
- Pas dans mentions-légales (marquée "à compléter")
- Pas dans le LocalBusiness schema (placeholder)

**Impact :** Google ne peut pas valider la cohérence NAP cross-platform → score local diminué. Citations annuaires impossibles à construire.

**Fix :** récupérer l'adresse complète NPS (probablement à Mont-de-Marsan 40000 ou commune voisine) et la mettre :
- Footer (composant)
- Mentions légales
- LocalBusiness schema (`lib/jsonLd.ts`)
- Page /contact (carte Google Maps embed serait un plus)

## 🟡 HIGH

### H1 — Pas de citations annuaires français

NPS n'apparaît probablement pas sur :
- Pages Jaunes (le plus important en FR)
- Kompass (B2B référence)
- Societe.com (SIRET + KBis)
- Hellopro (B2B intentions d'achat)
- Europages (B2B européen)
- batiproduits.com (BTP)

Chaque citation = backlink + cohérence NAP cross-platform = signal trust pour Google.

**Fix :** créer/vérifier les fiches sur les 6 annuaires majeurs. Effort : 4-6 h.

### H2 — Pas d'avis Google (logique, sans GBP)

Sans GBP, pas d'avis Google possible. Une fois GBP créé, lancer une campagne avis :
- Email post-vente automatique avec lien direct vers la page avis
- Cible : 20 avis ★★★★★ en 3 mois
- Répondre à 100 % des avis sous 48 h (boost ranking local)

### H3 — Pas de présence sur annuaires acoustique spécialisés

- **ACOUTERA** : annuaire des acousticiens FR
- **CINOV** (Confédération de l'ingénierie) : référencement BET
- **SFA** (Société Française d'Acoustique) : annuaire pro

À démarcher pour référencement.

### H4 — Pas de location pages

NPS sert toute la France mais n'a pas de pages géographiques (`/zone/paris`, `/zone/lyon`, `/zone/bordeaux`). Sur des KW comme "isolation acoustique Paris" ou "sol salle musculation Lyon", impossible de ranker.

**Attention :** location pages = piège programmatic SEO si mal fait. À implémenter QUE si vraiment contenu unique par ville (cas client local, prescripteur local, etc.). Sinon = thin content puni par Google.

**Recommandation :** créer 5-10 location pages pour les **agglos prioritaires** (Paris, Lyon, Bordeaux, Toulouse, Marseille, Nantes, Lille, Strasbourg, Nice, Montpellier) avec contenu réel : "Livraison Paris en 3 jours ouvrés", projets locaux références, BET partenaires zone. Effort : 1 jour/page = 5-10 jours total.

## 🟢 MEDIUM

### M1 — Apple Maps + Bing Places absents

Au-delà de Google Maps, Apple Maps (Siri) et Bing Places (Bing search + Microsoft Copilot) doivent avoir leur fiche NPS. Cohérence NAP cross-platform = trust signal.

### M2 — OpenStreetMap

Vérifier que NPS Acoustique est sur OpenStreetMap (utilisé par certains outils + LLMs en background).

### M3 — areaServed à compléter

Dans `lib/jsonLd.ts`, ajouter dans LocalBusiness :
```jsonc
"areaServed": {
  "@type": "Country",
  "name": "France"
}
```

## 🟢 LOW

### L1 — Pas de presence GBP Posts

Une fois GBP créé, publier 1 post/semaine (nouveau produit, étude de cas, FAQ technique) = boost activité.

### L2 — Photos géolocalisées

Photos JPG avec EXIF GPS coordinates = trust + ranking local.

## 📊 Plan d'attaque Local SEO

| Priorité | Action | Effort | Impact |
|---|---|---|---|
| 🔴 P0 | Créer Google Business Profile + vérif postale | 30 min + 7j wait | ÉNORME |
| 🔴 P0 | Compléter NAP (adresse) partout (footer, mentions, schema) | 1 h | ÉNORME |
| 🟡 P1 | Citer NPS sur Pages Jaunes + Kompass + Societe.com | 2 h | Fort |
| 🟡 P1 | Lancer campagne 20 avis Google ★★★★★ | 2 h setup + 3 mois | Fort |
| 🟡 P1 | Annuaires acoustique pro (ACOUTERA, CINOV) | 2 h | Moyen |
| 🟢 P2 | 5-10 location pages agglos prioritaires (contenu réel) | 5-10 jours | Fort si bien fait |
| 🟢 P2 | Apple Maps + Bing Places | 1 h | Faible mais utile |

# Campaign Architecture — NPS Acoustique

## Convention de nommage

Format obligatoire pour toutes les campagnes (compatible reporting cross-plateforme) :

```
[PLATEFORME]_[OBJECTIF]_[SEGMENT]_[ZONE]_[YYYYQX]
```

Exemples :
- `GOOGLE_LEAD_BTPbet_FR_2026Q3`
- `META_LEAD_BricolageB2C_FR_2026Q3`
- `LKDN_LEAD_GymOwners_FR_2026Q4`

## Google Ads — structure complète

```
nps-acoustique.fr (Account)
├── [GOOGLE_BRAND_All_FR_AlwaysOn]
│   └── Ad Group "Brand exact"
│       └── KW : [nps acoustique], [damtec france], [kraiburg france]
│
├── [GOOGLE_LEAD_BTPbet_FR_2026Q3]   ← B2B Tier 1 architectes/BET
│   ├── Ad Group "Anti-vibration machine"
│   │   └── KW : "isolation anti-vibration machine", "désolidarisation béton",
│   │            "DAMTEC vibra", "pression statique N/mm²"
│   ├── Ad Group "Sous-chape ATE"
│   │   └── KW : "sous-couche acoustique ATE", "DAMTEC ESTRA",
│   │            "isolation chape flottante", "ETA 13/0342"
│   └── Ad Group "Toitures et terrasses"
│       └── KW : "protection toiture plate", "dalle terrasse caoutchouc",
│                "KRAITEC STEP", "SONIC toiture"
│
├── [GOOGLE_LEAD_GymPro_FR_2026Q3]   ← B2B Tier 2 gérants salles
│   ├── Ad Group "Haltérophilie pro"
│   │   └── KW : "sol haltérophilie crossfit", "dalle musculation pro",
│   │            "SPORTEC STYLE", "dalle 30mm fitness"
│   ├── Ad Group "Fitness commercial"
│   │   └── KW : "sol salle de sport pro", "revêtement gymnase",
│   │            "SPORTEC COLOR", "sol PUZZLE 2.0"
│   └── Ad Group "Stand de tir"
│       └── KW : "sol stand de tir", "absorption balistique",
│                "SHIELDTAC ricotile", "revêtement champ de tir"
│
├── [GOOGLE_LEAD_RetailCollectivites_FR_2026Q3]   ← B2B local
│   ├── Ad Group "Hôtellerie isolation chambres"
│   │   └── KW : "sous-couche acoustique hôtel", "isolation phonique chambre",
│   │            "DAMTEC BLACK UNI ERP"
│   └── Ad Group "Collectivités ERP coupe-feu"
│       └── KW : "sol ERP coupe-feu Bfl-s1", "isolation mairie école",
│                "B1 ignifugé acoustique"
│
├── [GOOGLE_LEAD_BricolageB2C_FR_2026Q3]   ← B2C particuliers
│   ├── Ad Group "Tapis machine à laver"
│   │   └── KW : "tapis anti-vibration machine à laver", "réduire bruit lave-linge",
│   │            "TOP VIB WASH", "isolation machine à laver"
│   ├── Ad Group "Butoir parking garage"
│   │   └── KW : "butoir de parking garage", "stop parking caoutchouc",
│   │            "PROFIMAT BUMPY"
│   └── Ad Group "Berceau pneus hivernage"
│       └── KW : "berceau pneu hivernage", "support pneu stockage",
│                "anti-méplat pneu", "WHEELPROTECT"
│
└── [GOOGLE_RLSA_AllVisitors_FR_2026Q3]   ← Retargeting Search
    └── Ad Group "Visiteurs 30j non-convertis"
        └── KW : termes généraux acoustique avec audience RLSA
```

**Concurrent KW à tester en mois 2 :** "alternative recticel", "knauf vs", "sols-sportifs alternative" (~50 €/mois). Pas en early — éthique fragile en B2B France.

## Meta Ads (FB + IG) — structure complète

```
NPS Acoustique (Business Manager)
├── [META_AWARENESS_BricolageB2C_FR_2026Q3]
│   ├── Ad Set "Bricoleurs propriétaires 30-65"
│   │   └── Intérêts : DIY, bricolage maison, jardinage, voitures collection
│   └── Ad Set "Stockage hivernage saisonnier"
│       └── Intérêts : motos, caravanes, sportives, mécanique auto
│
├── [META_LEAD_RetargetingUniversel_FR_2026Q3]
│   ├── Ad Set "Visiteurs site 30j"
│   │   └── Audience custom Pixel : tout visiteur
│   ├── Ad Set "Drawer ouvert non submit"
│   │   └── Event open_quote_drawer SANS submit_quote (besoin event tracking)
│   └── Ad Set "Vue fiche produit B2C bricolage 14j"
│       └── Audience : page_view sur /produit/profimat-* OU /produit/top-vib-wash
│
└── [META_LEAD_LookalikeB2B_FR_2026Q4]   ← Mois 3+ (besoin de leads source 100+)
    ├── Ad Set "LAL 1% Quote Submitters B2B"
    └── Ad Set "LAL 2% Architectes/BET visiteurs"
```

## LinkedIn Ads — structure complète (mois 3+)

```
NPS Acoustique (LinkedIn Campaign Manager)
├── [LKDN_ABM_BETtier1_FR_2026Q4]
│   ├── Campaign Group "Cabinets architecture France"
│   │   ├── Audience : Title "Architecte" OR "Chef de projet" + Industry "Architecture & Planning" + Size 11-200
│   │   └── Format : Sponsored Content + Lead Gen Form
│   └── Campaign Group "BET acoustique/structure"
│       ├── Audience : Title "Ingénieur acoustique" OR "Bureau d'études" + Industry "Civil Engineering"
│       └── Format : Document Ads (livre blanc DAMTEC vibra)
│
├── [LKDN_LEAD_GymOwners_FR_2026Q4]
│   ├── Campaign Group "Gérants salles sport"
│   │   ├── Audience : Title "Gérant" OR "Manager" + Industry "Health, Wellness & Fitness" + Co Size 1-50
│   │   └── Format : Single Image Ad + Lead Gen Form
│
└── [LKDN_THOUGHT_NPSExpertise_FR_2026Q4]
    └── Thought Leader Ads
        └── Boost de posts CEO/founder NPS sur LinkedIn perso (études acoustiques, cas client)
```

## Microsoft/Bing (mois 6+)

Import direct depuis Google Ads via "Import from Google Ads". Structure identique aux campagnes Google qui convertissent. Audit après 2 semaines, ajustement spécifique audience plus âgée.

## Performance Max (mois 3+, conditionnel)

À activer SEULEMENT si on a accumulé **30+ conversions/mois sur Google Search** pendant 2 mois consécutifs. Sinon PMax n'a pas de signal de qualité à apprendre et brûle le budget.

```
[GOOGLE_PMAX_AllProducts_FR_2026Q4]
├── Asset Group "Bâtiment DAMTEC"
├── Asset Group "Sport SPORTEC"
└── Asset Group "Bricolage PROFIMAT"
```

Avec **brand exclusions** activées (pour ne pas cannibaliser la campagne Brand) et **AI Max enabled** sur les Asset Groups.

## Audiences à construire dans GTM/GA4 (pré-requis tracking)

| Audience | Definition | Plateforme cible |
|---|---|---|
| `all_visitors_30d` | Tous visiteurs derniers 30 jours | Meta retargeting, Google RLSA |
| `quote_drawer_opened` | Event `open_quote_drawer` fired | Meta retargeting custom |
| `quote_submitted` | Event `submit_quote` fired | Lookalike seed Meta + LinkedIn |
| `phone_clicked` | Event `click_phone` fired | Lookalike seed (intent fort) |
| `product_view_b2c` | Page view `/produit/profimat-*` OR `/produit/top-vib-wash` | Meta B2C retargeting |
| `product_view_b2b_btp` | Page view `/produit/damtec-*` OR `/produit/kraitec-*` | LinkedIn retargeting BET |
| `product_view_b2b_sport` | Page view `/produit/sportec-*` OR `/produit/shieldtac-*` | LinkedIn retargeting gym |

→ Voir [`TRACKING-SETUP.md`](TRACKING-SETUP.md) pour l'implémentation technique.

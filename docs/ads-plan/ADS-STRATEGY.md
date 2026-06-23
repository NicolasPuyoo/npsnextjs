# NPS Acoustique — Stratégie Paid Ads

> Plan stratégique généré via skill `/ads-plan` (claude-ads v1.7.1). Cas hybride B2B + B2C, modèle distributeur lead-gen (pas e-commerce). Site live https://nps-acoustique.fr depuis le 17 juin 2026.

## 1. Diagnostic stratégique

**Modèle économique :** distributeur exclusif France Kraiburg Relastec, marge estimée 20-30 % du prix de vente. Conversion = devis envoyé via `/contact` ou `QuoteRequestDrawer` sur fiche produit. Pas de checkout, pas de panier. Cycle de vente : long (1-3 mois) pour B2B haute valeur, court (1 jour) pour B2C bricolage.

**Forces actuelles :** site rapide (Cloudflare Edge), catalogue structuré (45 produits, 3 hubs), SEO basics OK, JSON-LD en place, mobile-ready, autorité marque Kraiburg.

**Faiblesses bloquantes :** zéro tracking installé (GTM/GA4/Pixel à monter avant tout euro dépensé), pas de comptes ads créés, domaine `.fr` fraîchement connecté (signaux SEO/historique = 0).

**Cible 4 segments / unit economics estimés :**

| Segment | Panier moyen | Marge estimée | CPL acceptable | Volume cible/mois |
|---|---|---|---|---|
| Architectes/BET (B2B Tier 1) | 5-50 k€ | 1-15 k€ | 80-150 € | 5-10 |
| Gérants salles sport (B2B Tier 2) | 2-15 k€ | 400-4.5 k€ | 50-100 € | 10-20 |
| Hôtels/commerces/collectivités | 1-5 k€ | 200-1.5 k€ | 40-80 € | 10-25 |
| Bricolage particuliers (B2C) | 30-300 € | 5-90 € | 5-15 € | 50-200 |

## 2. Plateformes recommandées et phasing

NPS est un cas hybride qui ne match aucun template industrie standard. Le mix est composite : **B2B Enterprise pour la cible BET (LinkedIn dominant), Local Service pour le retail/HR (Google Search/Local), DTC pour le bricolage (Meta dominant)**. La règle : on lance d'abord là où l'intent est le plus chaud (Google Search), puis on étend.

| Plateforme | Phase de lancement | Rôle | Pourquoi |
|---|---|---|---|
| **Google Ads Search** | Semaine 3 | Primary, toutes cibles | Intent capture immédiate : "DAMTEC", "sol haltérophilie", "tapis lave-linge anti-vibration". CPC niche faible (0.30-1.50 €). |
| **Meta Ads (FB+IG)** | Semaine 4 | Retargeting + B2C bricolage | Pixel pose dès la semaine 3. Carrousels produits PROFIMAT. Lookalike sur leads B2B après mois 3. |
| **Google Performance Max** | Mois 3 | Scale (après 30+ conversions Search) | Multi-format multi-placement. À éviter en early — bouffe le budget sans signaux. |
| **LinkedIn Ads** | Mois 3 | B2B Tier 1 (architectes/BET) | Sponsored Content + Lead Gen Forms ciblage titre/cabinet. Minimum 500 €/mois sinon CPC explose. |
| **Microsoft/Bing Ads** | Mois 6 | Scale low-cost | Import direct depuis Google Ads. Audience plus âgée, bonne pour architectes seniors. CPC 30 % moins cher. |
| ❌ TikTok | Pas avant 12 mois | — | Audience trop jeune pour B2B acoustique. Peut-être pour PROFIMAT bricolage si budget excédentaire. |
| ❌ Apple Search Ads | Jamais | — | Pas d'app mobile NPS. |
| ❌ Amazon Ads | Jamais | — | NPS n'est pas sur marketplace Amazon. |

## 3. Allocation budget (règle 70/20/10)

**Mois 1-2 (test, 1500 €/mois) :**
- 70 % Google Search (1050 €) — répartition 4 campagnes par segment
- 25 % Meta Ads (375 €) — Pixel + retargeting + 1 campagne prospecting B2C bricolage
- 5 % buffer test/créa (75 €)

**Mois 3-4 (optimize + LinkedIn entry, 3000 €/mois) :**
- 50 % Google (1500 €) — Search continue + PMax si signaux
- 25 % Meta (750 €) — retargeting + Lookalike leads B2B
- 20 % LinkedIn (600 €) — ABM Tier 1 + Lead Gen Forms
- 5 % test (150 €) — Bing import

**Mois 5+ (scale, 5000-8000 €/mois) :**
- 55 % Google
- 25 % Meta + LinkedIn
- 15 % PMax mature
- 5 % expérimental

## 4. Avantage concurrentiel à exploiter

Concurrents identifiés (`sols-sportifs.fr`, `isolation-solutions.fr`, recticel, knauf) ne distribuent pas TOUTE la gamme Kraiburg. NPS a le **monopole France** sur SHIELDTAC (stand de tir) et la **gamme complète DAMTEC vibra** (7 modèles selon pression statique). C'est un wedge concurrentiel à pousser fort dans le messaging — "le seul distributeur officiel Kraiburg en France depuis 20 ans, catalogue exhaustif".

## 5. Risques et garde-fous

- **Pas de conversion tracking = budget cramé** : sans GTM/GA4/Pixel installés, on saura jamais quelle campagne convertit. **NE PAS LANCER tant que la phase tracking n'est pas terminée.**
- **Marge produit à valider** : les CPL acceptables ci-dessus reposent sur l'hypothèse de marge 20-30 %. À confirmer avec NPS pour ajuster.
- **Saisonnalité bâtiment** : la construction ralentit en hiver (déc-fév). Garder 20 % du budget pour pic mars-juin.
- **Compliance RGPD** : Consent Mode V2 obligatoire en EU. Sans lui, les conversions ne remontent pas et Google peut bannir le compte.

## 6. KPI cibles

| Métrique | Mois 1 | Mois 3 | Mois 6 | Mois 12 |
|---|---|---|---|---|
| CPL B2B (Search + LinkedIn) | 120 € | 80 € | 55 € | 40 € |
| CPL B2C (Meta + Search bricolage) | 18 € | 12 € | 8 € | 6 € |
| Conversions/mois total | 30 | 80 | 200 | 500 |
| ROAS B2B (deal × marge / spend) | 2.0 | 4.5 | 7.0 | 10.0 |
| ROAS B2C | 1.5 | 2.5 | 3.5 | 4.5 |

→ Voir [`CAMPAIGN-ARCHITECTURE.md`](CAMPAIGN-ARCHITECTURE.md), [`BUDGET-PLAN.md`](BUDGET-PLAN.md), [`CREATIVE-BRIEF.md`](CREATIVE-BRIEF.md), [`TRACKING-SETUP.md`](TRACKING-SETUP.md), [`IMPLEMENTATION-ROADMAP.md`](IMPLEMENTATION-ROADMAP.md) pour les détails.

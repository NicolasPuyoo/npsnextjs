# Budget Plan — NPS Acoustique

> Application du framework 70/20/10. Phasing en 4 phases sur 12 mois. Tous les chiffres sont des plafonds, à ajuster selon le ROAS réel observé. **Sans tracking installé, ces chiffres n'ont aucune valeur — voir TRACKING-SETUP.md.**

## Phase 1 — Foundation (Semaines 1-2)

**Budget ads : 0 €.** Aucune diffusion. C'est la phase setup tech + comptes.

**Coûts associés (one-shot) :**
- Création compte Google Ads : gratuit
- Création compte Meta Business Manager : gratuit
- Vérification de domaine Meta : gratuite mais 30 min de DNS
- Création GTM container : gratuit
- Création GA4 property : gratuit
- (Optionnel) Crédit prepay Google Ads 200 € pour activer le compte plus vite

## Phase 2 — Test (Mois 1-2, 1500 €/mois)

Objectif : valider le coût par lead et identifier les 2-3 meilleurs angles avant scale.

| Plateforme | Allocation | Montant | Campagnes actives |
|---|---|---|---|
| Google Search | 70 % | 1050 € | Brand + BTPbet + GymPro + RetailColl + BricolageB2C |
| Meta Ads | 25 % | 375 € | Pixel + Retargeting universel + 1 prospecting B2C |
| Buffer test/créa | 5 % | 75 € | iterations visuels rapide |
| **Total** | **100 %** | **1500 €** | |

**Daily cap par campagne Google :**
- Brand : 5 €/jour (35 €/sem)
- BTPbet : 12 €/jour (84 €/sem)
- GymPro : 8 €/jour (56 €/sem)
- RetailColl : 6 €/jour (42 €/sem)
- BricolageB2C : 10 €/jour (70 €/sem)
- *Total Google : 41 €/jour = 1230 €/mois (cap haut, on plafonnera selon delivery)*

**Daily cap Meta :**
- Retargeting universel : 8 €/jour (56 €/sem)
- Prospecting bricolage : 5 €/jour (35 €/sem)

**Stratégies de bidding :**
- Google Search : `Maximize Conversions` SANS target CPA (laisser apprendre 2 semaines), puis switch en `Maximize Conversions with target CPA` après 30 conversions accumulées
- Meta : `Lowest Cost` sur conversions Pixel, pas de bid cap en early

## Phase 3 — Optimize + LinkedIn entry (Mois 3-4, 3000 €/mois)

| Plateforme | Allocation | Montant | Évolution |
|---|---|---|---|
| Google Search | 40 % | 1200 € | Kill ad groups CPA > 3x target, scale les top 3 (+20 % budget) |
| Google PMax | 10 % | 300 € | Activation conditionnée à 30+ conversions Search/mois |
| Meta Ads | 25 % | 750 € | + Lookalike sur quote_submitted (besoin 100+ leads source) |
| LinkedIn Ads | 20 % | 600 € | ABM Tier 1 architectes/BET + Lead Gen Forms |
| Microsoft/Bing | 5 % | 150 € | Import direct depuis Google |
| **Total** | **100 %** | **3000 €** | |

## Phase 4 — Scale (Mois 5-6, 5000 €/mois) puis maintien (Mois 7-12, 5000-8000 €/mois)

| Plateforme | Allocation | Montant min | Évolution |
|---|---|---|---|
| Google (Search + PMax + Bing) | 55 % | 2750 € | Top campagnes scalées +20 %/sem, max 3 incréments avant pause review |
| Meta Ads | 25 % | 1250 € | Lookalikes diversifiés (1 %, 2 %, 5 %), nouvelles audiences B2C |
| LinkedIn Ads | 15 % | 750 € | Tier 1 maintenu, ajout Thought Leader Ads sur CEO NPS |
| Test (TikTok B2C, YouTube Shorts) | 5 % | 250 € | Selon créa dispo. Pas obligatoire. |

## Règles de pacing critiques

1. **3× Kill Rule** : si une campagne dépense > 3× le CPA target sans conversion, pause immédiate. Pas de "donne lui 1 semaine de plus".
2. **20 % Scale Rule** : pour scaler une campagne winner, +20 % budget max par incrément, puis attendre 3-5 jours d'apprentissage avant la prochaine bump. **Sur Meta, plus de 20 % d'un coup = reset learning phase**.
3. **Saisonnalité bâtiment FR** : baisse activité construction en déc-fév. Réduire budget bâtiment de 30 % sur ces mois, réallouer sur bricolage B2C (cadeaux Noël, bonnes résolutions janvier).
4. **Cap absolu de sécurité** : `account_total_daily_cap` = 50 €/jour en mois 1, 100 € en mois 3, 250 € en mois 6. Empêche un bug de tracking ou une erreur de targeting de cramer le mois.

## Coûts additionnels à anticiper

| Poste | Coût mensuel estimé | Notes |
|---|---|---|
| Outils analytics complémentaires (Hotjar, Microsoft Clarity) | 0-30 € | Clarity est gratuit, recommandé |
| Création/édition vidéos courtes (5-10/mois) | 300-800 € | Freelance ou agence si pas d'in-house |
| Photo produit packshot/lifestyle (one-shot mois 1) | 500-1500 € | Photographe pour 30-50 shots utilisables 2 ans |
| Outil tracking conversions calls (CallRail FR ou alternative) | 50-100 € | Optionnel mais utile : 60 %+ des leads B2B passent par tel |

## ROAS / Payback target par phase

- **Mois 1-2** : ROAS < 1. **Normal en learning phase.** Ne pas couper trop tôt.
- **Mois 3** : ROAS B2B ≥ 3, B2C ≥ 2. Si non atteint sur un segment, revoir landing page ou angle créa.
- **Mois 6** : ROAS B2B ≥ 5, B2C ≥ 3. Payback < 3 mois sur le LTV.
- **Mois 12** : ROAS B2B ≥ 8, B2C ≥ 4. Payback < 1 mois.

→ Voir [`IMPLEMENTATION-ROADMAP.md`](IMPLEMENTATION-ROADMAP.md) pour le séquencement détaillé.

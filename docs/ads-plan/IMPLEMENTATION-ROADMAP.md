# Implementation Roadmap — NPS Acoustique

> Calendrier d'exécution par semaine sur 12 semaines (mois 1-3). Au-delà, c'est de la maintenance et du scale. Chaque phase a un gate qui bloque la suivante si non rempli.

## Vue d'ensemble

```
S1-S2 │ Foundation (tracking + comptes + créa batch 1)         ← 0 € ads
S3-S4 │ Launch (Google Search seul + Meta Pixel pose)          ← 1500 €/mois
S5-S8 │ Optimize (kill perdants + LinkedIn entrée + créa rotation) ← 1500-3000 €/mois
S9-S12│ Scale (winners +20 %, PMax, Bing, server-side CAPI)    ← 3000-5000 €/mois
```

## Phase 1 — Foundation (Semaines 1-2)

### Semaine 1

**Lun-Mer : Création comptes (NPS action)**
- [ ] Compte Google Tag Manager — récupérer `GTM-XXXXXXX`
- [ ] Property Google Analytics 4 — récupérer `G-XXXXXXXXXX`
- [ ] Compte Google Ads — vérif moyen de paiement
- [ ] Meta Business Manager + Pixel — récupérer ID 15 chiffres
- [ ] Vérification domaine Meta (DNS TXT record)

**Jeu-Ven : Brief créa (NPS + agence/freelance)**
- [ ] Brief envoyé pour 5 vidéos courtes (V1-V5)
- [ ] Photoshoot produit planifié (30 packshots utilisables 2 ans)
- [ ] Designer briefé pour 15 statiques + 3 carrousels

**Sortie :** liste des 4 IDs collectés + bon de commande créa signé.

### Semaine 2

**Lun-Mer : Dev tracking (Melvin/Claude)**
- [ ] PR1 : intégration GTM dans `app/layout.tsx` + Consent Mode V2 default `denied`
- [ ] PR2 : upgrade `components/CookieBanner.tsx` en V2 3 catégories + sync `gtag('consent','update')`
- [ ] PR3 : `lib/tracking.ts` helper + annotation events sur `QuoteRequestDrawer`, `ProductCard`, `MobileCTABar`
- [ ] Déploiement Cloudflare avec env vars `NEXT_PUBLIC_GTM_ID`

**Jeu-Ven : Configuration GTM (NPS marketing ou Claude guide)**
- [ ] Tag GA4 Configuration + trigger All Pages avec consent check
- [ ] Tag Meta Pixel + 4 events (PageView, ViewContent, Lead, InitiateCheckout)
- [ ] Variables built-in activées (Click URL, Click Text, Page Path, etc.)

**Tests fin de semaine 2 :**
- [ ] Tag Assistant green sur 5 pages clés (home, /produit/damtec-estra, /produit/profimat-bumpy, /contact, /bricolage)
- [ ] Meta Pixel Helper : tous les events fire
- [ ] GA4 Realtime : trafic test visible
- [ ] Consent denied par défaut, granted après acceptation banner

**🚦 GATE Phase 1 → 2** : aucun lancement ads sans validation des 4 tests ci-dessus. Si pas prêt = +1 semaine.

## Phase 2 — Launch (Semaines 3-4)

### Semaine 3

**Lun : Pre-launch**
- [ ] Conversion Action `submit_quote` créée dans Google Ads
- [ ] Conversion Action `click_phone` créée dans Google Ads
- [ ] Lien GA4 ↔ Google Ads activé
- [ ] Audiences GA4 importées dans Google Ads (`all_visitors_30d`, `quote_submitted`, etc.)
- [ ] Budget journalier compte fixé à 50 €/jour (cap absolu sécurité)

**Mar-Mer : Lancement Google Search**
- [ ] Campagne `GOOGLE_BRAND_All_FR_AlwaysOn` LIVE (5 €/jour)
- [ ] Campagne `GOOGLE_LEAD_BricolageB2C_FR_2026Q3` LIVE (10 €/jour) — démarre par le plus rapide à convertir
- [ ] Stratégie bidding : Maximize Conversions sans target CPA (apprentissage)
- [ ] Extension de site links, callout, call extension configurées

**Jeu-Ven : Surveillance daily**
- [ ] Reviewer chaque matin les impressions, CTR, search terms
- [ ] Ajouter search terms négatifs si trafic poubelle ("gratuit", "occasion", "tuto")

### Semaine 4

**Lun-Mar : Extension Google Search**
- [ ] Lancement `GOOGLE_LEAD_GymPro_FR_2026Q3` (8 €/jour)
- [ ] Lancement `GOOGLE_LEAD_BTPbet_FR_2026Q3` (12 €/jour)
- [ ] Lancement `GOOGLE_LEAD_RetailCollectivites_FR_2026Q3` (6 €/jour)

**Mer-Ven : Lancement Meta**
- [ ] Création audiences Meta custom (visitors 30d, quote_submitted, vue produit bricolage)
- [ ] Lancement `META_LEAD_RetargetingUniversel_FR_2026Q3` (8 €/jour, créa V1-V3 + S2-S3)
- [ ] Lancement `META_AWARENESS_BricolageB2C_FR_2026Q3` (5 €/jour, créa V3 + V4 + S3)
- [ ] Vérification dedup Pixel + check `event_id`

**Tests fin de semaine 4 :**
- [ ] Au moins 5-10 conversions tracked dans Google Ads
- [ ] Au moins 2-3 leads Meta tracked
- [ ] Aucune campagne en "Limited by budget" (signe que le cap est trop bas) NI en "Below average" QS Google

**🚦 GATE Phase 2 → 3** : 30+ conversions Google Search accumulées sur 14 jours minimum. Sinon = +2 semaines d'optimisation phase 2.

## Phase 3 — Optimize (Semaines 5-8)

### Semaine 5

**Lun : Audit perf**
- [ ] Identifier les 2-3 ad groups les plus performants (CPA < target ÷ 2) → scale +20 %
- [ ] Identifier les ad groups avec CPA > target × 3 → kill immédiat (règle 3× Kill)
- [ ] Switch des campagnes mature en "Maximize Conversions with Target CPA"

**Mer-Ven : Lancement LinkedIn**
- [ ] Création compte LinkedIn Campaign Manager
- [ ] Insight Tag posé via GTM
- [ ] Lancement `LKDN_ABM_BETtier1_FR_2026Q4` (20 €/jour)
- [ ] Format : Sponsored Content + Lead Gen Form (création formulaire pré-rempli)

### Semaine 6

- [ ] Rotation créa Meta (loi anti-fatigue : 30 % nouvelles)
- [ ] Création Lookalike 1 % sur audience `quote_submitted` (si 100+ leads source accumulés)
- [ ] Lancement `META_LEAD_LookalikeB2B_FR_2026Q4` (10 €/jour)

### Semaine 7

- [ ] Audit search terms Google : 30 min par campagne
- [ ] Tester 3 nouveaux mots-clés long-tail par segment
- [ ] Lancement `LKDN_LEAD_GymOwners_FR_2026Q4` (15 €/jour)

### Semaine 8

- [ ] Décision PMax : si 30+ conversions Google Search/mois → green light pour PMax
- [ ] Si non : continuer Search optimization
- [ ] Lancement `MICROSOFT_*` (import Google Ads, 5 €/jour)

**🚦 GATE Phase 3 → 4** : CPA B2B < 100 €, CPA B2C < 18 €. Sinon = troubleshoot landing pages + créa.

## Phase 4 — Scale (Semaines 9-12)

### Semaine 9-10

- [ ] Activation Performance Max si gate atteint (start 10 €/jour, monter à 30 €/jour en 2 semaines)
- [ ] Server-side CAPI Meta : déploiement Cloudflare Worker dédié `sgtm.nps-acoustique.fr`
- [ ] Dedup event_id check : hit rate CAPI vs Pixel
- [ ] Création Thought Leader Ads sur CEO/founder NPS (boost 3 posts LinkedIn perso)

### Semaine 11-12

- [ ] Scale top campagnes Google +20 % par semaine (max 3 incréments puis review)
- [ ] Scale Meta Lookalike si CPA < target
- [ ] Brief créa batch 2 : 5 nouvelles vidéos basées sur les hooks gagnants des V1-V5
- [ ] Audit GA4 : analyser parcours utilisateur, identifier drop-offs
- [ ] Webinar L1 promo : "Choisir sa sous-couche acoustique selon NRA 2025" — Lead Gen LinkedIn

**Output fin mois 3 :**
- [ ] Document "Quick Wins Q3" : top 5 angles créa, top 5 mots-clés, top 5 audiences
- [ ] Reporting client/NPS partagé en PDF ou Looker Studio
- [ ] Plan Q4 ajusté basé sur perf réelle

## Cadence opérationnelle

| Fréquence | Activité | Durée |
|---|---|---|
| **Quotidien** (S3-S8) | Check spend + delivery + erreurs tracking | 10 min |
| **Hebdo** | Search terms negatives + creative rotation + budget rebalance | 1 h |
| **Bi-hebdo** | Audit CPA par ad group, scale/kill décisions | 2 h |
| **Mensuel** | Reporting complet + plan mois N+1 + brief créa | 4 h |
| **Trimestriel** | Audit complet via skill `/ads-audit` + replan stratégique | 1 jour |

## Owners & responsabilités

| Owner | Responsabilité |
|---|---|
| NPS (Sébastien/Nicolas) | Décisions stratégiques, validation budget, fourniture creds, brief créa |
| Melvin/Claude | Setup tech (GTM, tracking, Cloudflare), audit hebdo, recommandations |
| Agence/freelance créa | Production vidéo, photo, design statiques (mois 1 puis rotation continue) |
| (Optionnel) PPC consultant FR | Gestion comptes ads quotidienne, scale decisions (à partir de mois 3 si volume justifie) |

## Risk register

| Risque | Probabilité | Mitigation |
|---|---|---|
| Tracking pas prêt en semaine 2 | Moyenne | Bloque tout, prévoir +1 semaine de buffer |
| Pas de leads en semaine 4 | Faible si tracking OK | Audit landing pages + ajustement créa, baisser bids |
| Compte Google Ads suspendu (compliance) | Faible | Consent Mode V2 + politique cookies bien posée évite ça |
| Saisonnalité bâtiment hiver | Élevée | Réallouer budget vers bricolage B2C en déc-fév |
| Concurrent qui surenchérit sur "DAMTEC" | Moyenne | Garder Brand campaign always-on même budget faible |
| Burn créa trop rapide (frequency > 4) | Élevée | Rotation 30 % toutes les 2 semaines obligatoire |

## Quand inviter un PPC consultant FR ?

Seuil de déclenchement : **dépense mensuelle > 3000 € sur 3 mois consécutifs**. En dessous, gestion in-house + Claude est plus efficient. Au-dessus, le ROI d'un freelance senior PPC FR (800-1500 €/mois) est positif rapidement par les optimisations manuelles fines (bidding, audience layering, creative testing structurés).

## Prochaine action concrète

**Cette semaine (immédiate) :**
1. NPS crée les comptes GTM + GA4 + Meta + Google Ads (1-2 h, gratuit)
2. NPS donne les 4 IDs à Melvin/Claude
3. Melvin déploie l'intégration tracking en 1 session de dev (4-6 h)
4. Tests Tag Assistant + Pixel Helper avant green light ads

→ Voir [`TRACKING-SETUP.md`](TRACKING-SETUP.md) pour la checklist tracking détaillée.

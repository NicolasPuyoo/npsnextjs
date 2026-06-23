# Tracking Setup — NPS Acoustique

> **Pré-requis absolu avant tout lancement.** Sans ces 8 items configurés ET vérifiés via Tag Assistant + Meta Pixel Helper, les ads sont jetées par la fenêtre. Sans Consent Mode V2, le compte Google Ads peut être suspendu en EU.

## Architecture choisie : GTM-first (server-side ready)

```
Visiteur site (nps-acoustique.fr)
        │
        ▼
  Cookie Banner V2 (3 catégories : essential / analytics / marketing)
        │
        ├─→ Consent Mode V2 (gtag('consent', 'default'/'update'))
        │
        ▼
  Google Tag Manager (container web GTM-XXXXXXX)
        ├─→ GA4 (G-XXXXXXXXXX)
        ├─→ Google Ads Conversion Tag (AW-XXXXXXXXX)
        ├─→ Meta Pixel + CAPI (XXXXXXXXXXXXXXX)
        └─→ LinkedIn Insight Tag (mois 3+)
```

Pourquoi GTM et pas direct hardcode : flexibilité totale côté NPS marketing pour ajouter/retirer des tags sans toucher au code, et future migration possible vers GTM server-side pour CAPI propre.

## Checklist d'implémentation (8 items)

### ✅ Item 1 — Google Tag Manager container (priority P1)

**Action :** créer GTM container "Web" pour `nps-acoustique.fr`. Récupérer ID `GTM-XXXXXXX`.

**Code à pousser dans `app/layout.tsx` :**

```tsx
// app/layout.tsx — dans <head>
<Script id="gtm-init" strategy="afterInteractive">
  {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
   })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}
</Script>

// Dans <body> (juste après ouverture)
<noscript>
  <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
          height="0" width="0" style={{display:'none',visibility:'hidden'}} />
</noscript>
```

**Env var Cloudflare Worker :** `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX` à pousser via `wrangler secret put` ou `.env.local` + rebuild.

### ✅ Item 2 — Consent Mode V2 (priority P1, OBLIGATOIRE EU)

**Action :** ajouter le snippet Consent Mode V2 AVANT le GTM init avec defaults "denied".

**Code dans `app/layout.tsx` (avant GTM init) :**

```tsx
<Script id="consent-default" strategy="beforeInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied',
      'functionality_storage': 'granted',
      'security_storage': 'granted',
      'wait_for_update': 500
    });
  `}
</Script>
```

### ✅ Item 3 — Cookie Banner V2 (3 catégories)

**Action :** upgrade `components/CookieBanner.tsx` actuel (qui gère juste accept/reject globalement) pour passer en 3 catégories granulaires + sync `gtag('consent','update',...)`.

**Comportement attendu :**
- Essential : toujours `granted` (cookies session, sécurité)
- Analytics : opt-in, met à jour `analytics_storage`
- Marketing : opt-in, met à jour `ad_storage`, `ad_user_data`, `ad_personalization`

**Stockage :** localStorage clé `nps_cookie_consent_v2` (incrémenter version pour invalider l'ancien consent globalement).

### ✅ Item 4 — GA4 (priority P1)

**Action :** créer GA4 property dans Google Analytics, récupérer Measurement ID `G-XXXXXXXXXX`.

**Configuration dans GTM (pas dans code) :**
1. Tag type : "Google Analytics: GA4 Configuration"
2. Measurement ID : `{{GA4_MEASUREMENT_ID}}` (variable GTM)
3. Trigger : "All Pages" + Consent check `analytics_storage = granted`

### ✅ Item 5 — Événements de conversion (priority P1)

**Events à émettre depuis le code (dataLayer.push) :**

| Event name | Trigger | Params |
|---|---|---|
| `view_product` | Page `/produit/[slug]` chargée | `product_id`, `product_name`, `category`, `value` (panier estimé) |
| `open_quote_drawer` | Bouton "Demander un devis" cliqué sur fiche produit | `product_id`, `product_name` |
| `submit_quote` | Formulaire devis envoyé (drawer ou /contact) | `product_id`, `form_source` (`drawer` ou `contact_page`), `value` |
| `click_phone` | Lien `tel:0558775589` cliqué | `location` (`navbar`, `mobile_cta_bar`, `footer`, etc.) |
| `download_pdf` | Lien fiche technique PDF cliqué | `product_id`, `file_name` |

**Implémentation :** créer `lib/tracking.ts` avec helper `trackEvent(name, params)` qui fait `window.dataLayer?.push({event: name, ...params})`. Annoter les composants concernés (`ProductCard`, `QuoteRequestDrawer`, `MobileCTABar`, etc.).

**Configuration GTM :**
- Pour chaque event, créer un Trigger "Custom Event" matchant le nom
- Tag type "GA4 Event" avec params mappés depuis dataLayer

### ✅ Item 6 — Google Ads Conversion Tag (priority P1, semaine 3)

**Action :** dans Google Ads, créer une "Conversion Action" pour `submit_quote` (et une seconde pour `click_phone`). Récupérer `Conversion ID AW-XXXXXXXXX` + `Conversion Label`.

**Configuration GTM :**
1. Tag type : "Google Ads Conversion Tracking"
2. Conversion ID + Label : depuis Google Ads
3. Trigger : Custom Event `submit_quote`
4. **Enhanced Conversions** : activer + mapper email/phone si dispo

**Linker GA4 ↔ Google Ads :** dans Google Ads > Tools > Linked Accounts, lier GA4. Permet d'importer automatiquement les audiences GA4 dans Google Ads.

### ✅ Item 7 — Meta Pixel + CAPI (priority P1, semaine 3)

**Action :** créer Pixel dans Meta Business Manager, récupérer Pixel ID 15-16 chiffres.

**Configuration GTM :**
1. Template Community : "Facebook Pixel" by Simo Ahava (vérifié sécurité)
2. Pixel ID : `{{META_PIXEL_ID}}` (variable GTM)
3. Events :
   - `PageView` sur All Pages
   - `ViewContent` sur Custom Event `view_product` (params `content_ids`, `content_type=product`)
   - `Lead` sur Custom Event `submit_quote`
   - `InitiateCheckout` sur Custom Event `open_quote_drawer`

**CAPI Server-Side (recommandé, mois 2) :**
- Setup via Cloudflare Worker (on a déjà l'infra) ou Stape.io
- Dedup via `event_id` UUID partagé entre Pixel client + CAPI server
- Cible : 100 % hit rate CAPI vs 60-70 % pour le Pixel seul (iOS 14.5+ ATT)

### ✅ Item 8 — Vérification finale avant launch

**Tests obligatoires AVANT le 1er euro :**

1. **Google Tag Assistant Companion** (Chrome extension)
   - Tester chaque page clé
   - Confirmer GTM, GA4, Google Ads tags fire avec les bons params
   - Confirmer Consent Mode signals (deny par défaut, granted après acceptation)

2. **Meta Pixel Helper** (Chrome extension)
   - Idem : PageView + ViewContent + Lead + InitiateCheckout fire correctement

3. **Realtime GA4** (Reports > Realtime)
   - Naviguer sur le site, voir les events arriver en temps réel

4. **Google Ads Conversion debug**
   - Outils > Conversions > la conversion submit_quote
   - Cliquer "Test" et soumettre un formulaire test → status doit passer "Recording conversions"

5. **Consent Mode debugging**
   - Tester refus cookies → `analytics_storage=denied` doit bloquer les events GA4
   - Tester accept cookies → tous tags fire normalement

## Tableau récapitulatif des IDs à collecter

| ID | Format | Source | Où le mettre |
|---|---|---|---|
| GTM Container | `GTM-XXXXXXX` | tagmanager.google.com | env `NEXT_PUBLIC_GTM_ID` |
| GA4 Measurement ID | `G-XXXXXXXXXX` | analytics.google.com | Variable GTM |
| Google Ads Customer ID | `AW-XXXXXXXXX` | ads.google.com | Variable GTM (mois 1) |
| Google Ads Conversion Label | `abcDEF123` | ads.google.com > Conversions | Variable GTM |
| Meta Pixel ID | `XXXXXXXXXXXXXXX` | business.facebook.com | Variable GTM |
| Meta CAPI Access Token | `EAAxxx...` | business.facebook.com > System Users | Cloudflare Worker secret (mois 2) |
| LinkedIn Insight Tag ID | `XXXXXXX` | linkedin.com/campaignmanager | Variable GTM (mois 3) |

## Stack technique recommandée

```
Frontend : Next.js 15 (déjà en place)
GTM : container web standard + GTM server-side container (mois 2-3)
Server-side : Cloudflare Worker dédié (subdomain ex sgtm.nps-acoustique.fr)
Consent : implementation native, pas de SaaS payant (Axeptio/Didomi pas nécessaire à ce stade)
Tag Assistant : Chrome extension officielle
```

## Temps de mise en place estimé

| Phase | Durée |
|---|---|
| Création comptes GTM/GA4/Meta/Google Ads | 1-2 h |
| Implémentation code GTM + Consent Mode + Cookie Banner V2 | 4-6 h |
| Annotation events sur composants (5 events) | 2-3 h |
| Configuration GTM (tags, triggers, variables) | 3-4 h |
| Tests Tag Assistant + Pixel Helper + Realtime | 2 h |
| **Total avant launch ads** | **12-17 h** |

## Mise en place server-side CAPI (mois 2)

À faire APRÈS un mois de stabilité côté client-side. Bénéfices :
- Dedup signaux iOS 14.5+ (Meta hit rate de 60 % → 95 %+)
- Bypass des ad blockers (recupère 15-25 % de signal en plus)
- Meilleures Enhanced Conversions Google Ads

Implementation : Cloudflare Worker dédié `sgtm.nps-acoustique.fr` qui reçoit les events client → forward vers Meta CAPI + Google Measurement Protocol avec hashing PII (SHA-256).

→ Voir [`IMPLEMENTATION-ROADMAP.md`](IMPLEMENTATION-ROADMAP.md) pour le planning détaillé.

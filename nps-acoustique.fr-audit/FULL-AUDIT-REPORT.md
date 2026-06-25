# 🔍 NPS Acoustique — Full SEO Audit Report (v2 — pivot national)

> Audit complet via skill `/seo-audit` (claude-seo de AgriciDaniel). **v2** : correction du positionnement après confirmation user → NPS est un **distributeur NATIONAL B2B/B2C** France entière, pas un commerce local Mont-de-Marsan. Stratégie Local SEO classique (Map Pack, location pages) abandonnée → pivot sur **brand authority + hubs secteur + AI search**.

---

## 📊 Health Score global : 60/100 → projeté 89/100 après fixes P0+P1

| Catégorie | Score actuel | Poids | Notes |
|---|---|---|---|
| Technical SEO | 78/100 (92 post-fix) | 22 % | 1 critical bug fixed during audit |
| Content Quality | 58/100 | 23 % | Specs OK, autorité + profondeur à muscler, **2 hubs secteur manquants (hôtellerie + industrie)** |
| On-Page SEO | 65/100 | 20 % | Title/Meta OK, internal linking faible |
| Schema / Structured Data | 55/100 | 10 % | Bases OK, Product manque sur 38/45 fiches |
| Performance (CWV) | 90/100 | 10 % | Excellent par design Cloudflare Edge |
| AI Search Readiness | 30/100 | 10 % | 🚨 AI crawlers bloqués par Cloudflare |
| National Distribution Presence | 50/100 | 5 % | Positionnement national peu explicite, NAP incomplet, 2 secteurs sans hub |

## 🎯 Business type confirmé (v2)

**Distributeur NATIONAL exclusif** France entière de Kraiburg Relastec depuis 20+ ans.
- ❌ Pas de commerce local Mont-de-Marsan (siège social uniquement)
- ❌ Pas de zone de chalandise géographique
- ✅ Livraison France entière depuis stock unique
- ✅ B2B (architectes/BET, gérants salles sport, hôteliers, industriels) + B2C (bricolage particuliers)

**5 secteurs officiels (depuis /notre-expertise) :**
- ✅ Bâtiment (hub OK)
- ✅ Sport (hub OK)
- ❌ **Hôtellerie (hub manquant)**
- ❌ **Industrie (hub manquant)**
- ✅ Bricolage (hub OK)

## 🚨 Top 6 Critical Issues (réordonnés selon vraie stratégie nationale)

### 1. ✅ FIXED — Domain mismatch sitemap/robots/JSON-LD (24 occurrences)
Tous les `SITE_URL` hardcodés sur ancien domaine `nps-france.com` au lieu de `nps-acoustique.fr`. **Fixé pendant l'audit (commit `24a4738`, version CF `d159e024`).**

### 2. ⚠️ Cloudflare bloque tous les AI crawlers
GPTBot / Google-Extended / ClaudeBot / CCBot / PerplexityBot / Applebot-Extended. Site **invisible** pour AI Overviews + ChatGPT + Perplexity + Bing Copilot. Rédhibitoire 2026.
**Fix :** Cloudflare Dashboard → AI Crawl Control → Allow All AI Crawlers (2 min).

### 3. ⚠️ 2 hubs secteur manquants : `/hotellerie` + `/industrie`
NPS cible explicitement 5 secteurs (sur `/notre-expertise`) mais 2 n'ont pas de page hub dédiée → rate les KW B2B haute valeur :
- "isolation acoustique chambre hôtel", "sous-couche CHR", "sol terrasse hôtel"
- "désolidarisation machine industrielle", "antivibration compresseur", "isolation vibration groupe froid"

**Fix :** créer 2 hubs sur le modèle existant. Effort : 6-8 h/hub = ~2 jours.

### 4. ⚠️ Product schema absent sur 38/45 fiches produit
Seuls les 7 DAMTEC vibra ont leur Product JSON-LD. **Fix :** généraliser `VibraProductSchema.tsx` → `ProductSchema.tsx` réutilisable (4-6 h).

### 5. ⚠️ Aucun hub par marque (DAMTEC, SPORTEC, KRAITEC, SHIELDTAC, PROFIMAT)
L'ancien site `nps-france.com` rank position 6 sur "DAMTEC" (contenu 2015 obsolète), nouveau site invisible.
**Fix :** créer 5 pages hub `/damtec`, `/sportec`, etc. — 1 jour/hub.

### 6. ⚠️ Positionnement national pas explicite
Le site ne dit jamais clairement "livraison France entière" ni "stock en France". BET à Lille se demande s'il peut commander.
**Fix :** badges + mention sur footer/home/fiches produit + `areaServed: France` dans schema.

## ⚡ Top 5 Quick Wins (effort < 1 jour, impact fort)

1. **Débloquer AI crawlers Cloudflare** (2 min) → débloque AI search
2. **Créer `public/llms.txt`** (10 min) → standard 2025-2026 GEO
3. **Ajouter badges "Livraison France entière" + areaServed schema** (1 h) → trust national
4. **Compléter adresse NPS partout** (footer, mentions, schema) (1 h) → NAP consistency
5. **Créer hub `/damtec`** (4 h) → capte KW brand intent + récupère autorité ancien site

## 🎁 Avantages compétitifs identifiés (à exploiter dans le copy)

1. **Monopole France Kraiburg** : seul distributeur officiel. À marteler PARTOUT.
2. **Distribution nationale active depuis 20+ ans** : pas un nouvel entrant.
3. **Specs supérieures techniques** : DAMTEC 3D 17/8 a ETA (Regupol Sound 17 n'en a pas), VIBRAFOAM 13 duretés (vs 10 Sylomer), plage 0.010-1.900 N/mm² (vs 0.011-1.2).
4. **Stock + livraison France 7-15 jours** : différenciation vs Regupol DE et Getzner AT.
5. **Site déjà rapide + stack moderne** : Cloudflare + Next.js statique = Performance 90+.

## ❌ Stratégies à NE PAS poursuivre (correction v2)

- ❌ Google Business Profile en priorité (utile uniquement pour Knowledge Panel brand, pas Map Pack)
- ❌ Location pages `/zone/paris` etc. (piège thin content, pas de différenciation locale)
- ❌ Local SEO Mont-de-Marsan (volume KW zéro)
- ❌ Apple Maps / Bing Places en priorité (marginal pour distributeur national)

## 📋 Détail par catégorie

Voir les fichiers dans `findings/` :
- [technical.md](findings/technical.md) — Crawl, indexabilité, sécurité, sitemap
- [content.md](findings/content.md) — E-E-A-T, thin content, hubs marque manquants
- [schema.md](findings/schema.md) — JSON-LD, Product, FAQ, Breadcrumb
- [performance.md](findings/performance.md) — Core Web Vitals, fonts, hero video
- [geo.md](findings/geo.md) — AI Overviews, ChatGPT, llms.txt
- [local.md](findings/local.md) — **v2 pivot national** : 2 hubs secteur manquants, NAP, annuaires B2B
- [sxo.md](findings/sxo.md) — SERP backwards analysis 5 KW critiques

## 🎯 Verdict CEO (v2)

NPS a une **base technique excellente** mais **4 problèmes structurels** bloquent le rank #1 :

1. **AI invisibility** (Cloudflare bloque) → 2 min de config
2. **Capital marque non exploité** (pas de hubs DAMTEC/SPORTEC/etc.) → 5 jours dev
3. **2 secteurs B2B haute valeur sans hub** (`/hotellerie` + `/industrie`) → 2 jours dev
4. **Positionnement national flou** (rien sur livraison France) → 2 h copy + schema

Une fois ces 4 fixés (effort total ~7 jours), NPS passe de #invisible à #top 5 sur ses KW core en 4-8 semaines. Pour rank #1, ajouter ensuite : refonte hubs catégorie, Product schema partout, llms.txt + FAQ schema, content marketing.

Roadmap complète dans [`ACTION-PLAN.md`](ACTION-PLAN.md).

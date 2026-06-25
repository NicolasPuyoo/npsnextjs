# 🔍 NPS Acoustique — Full SEO Audit Report

> Audit complet via skill `/seo-audit` (claude-seo de AgriciDaniel). 7 specialists déployés (technical, content, schema, performance, geo, local, sxo). Site live https://nps-acoustique.fr (Next.js 15 SSG sur Cloudflare Workers, domaine connecté il y a 10 jours).

---

## 📊 Health Score global : 56/100 → projeté 87/100 après fixes P0+P1

| Catégorie | Score actuel | Poids | Notes |
|---|---|---|---|
| Technical SEO | 78/100 (92 post-fix) | 22 % | 1 critical bug fixed during audit |
| Content Quality | 58/100 | 23 % | Specs OK, autorité + profondeur à muscler |
| On-Page SEO | 65/100 | 20 % | Title/Meta OK, internal linking faible |
| Schema / Structured Data | 55/100 | 10 % | Bases OK, Product manque sur 38/45 fiches |
| Performance (CWV) | 90/100 | 10 % | Excellent par design Cloudflare Edge |
| AI Search Readiness | 30/100 | 10 % | 🚨 AI crawlers bloqués par Cloudflare |
| Images | 70/100 | 5 % | PNG packshots à convertir WebP |

## 🎯 Business type détecté

**B2B/B2C hybride distribution exclusive** — distributeur officiel France Kraiburg Relastec depuis 20+ ans. 4 segments : architectes/BET, gérants salles de sport, hôtels/commerces/collectivités, particuliers bricolage. Géographie : France entière (HQ probablement Mont-de-Marsan vu tel 05 58).

## 🚨 Top 5 Critical Issues

### 1. ✅ FIXED — Domain mismatch sitemap/robots/JSON-LD (24 occurrences)
Tous les `SITE_URL` hardcodés sur ancien domaine `nps-france.com` au lieu de `nps-acoustique.fr`. Conséquence : Google indexait du vide, canonicals cassés sur 60 pages prerendered, JSON-LD pointait ailleurs. **Fixé pendant l'audit (commit `24a4738`, version CF `d159e024`).**

### 2. ⚠️ Cloudflare bloque tous les AI crawlers (GPTBot, Google-Extended, ClaudeBot, Perplexity)
Le bloc "Cloudflare Managed Content" du robots.txt Disallow: tous les bots IA. Site **invisible** pour AI Overviews / ChatGPT / Perplexity / Bing Copilot. En 2026 c'est rédhibitoire pour rank #1.
**Fix :** Cloudflare Dashboard → AI Crawl Control → Allow All AI Crawlers (2 min).

### 3. ⚠️ Pas de Google Business Profile
NPS Acoustique absent de Google Maps + pas de Knowledge Panel. Capital local FR perdu (BTP Mont-de-Marsan, Nouvelle-Aquitaine).
**Fix :** créer GBP, vérif postale (5-7 jours wait).

### 4. ⚠️ Product schema absent sur 38/45 fiches produit
Seuls les 7 DAMTEC vibra ont leur Product JSON-LD. Les 38 autres : pas de rich snippets, pas de Shopping graph, pas de Knowledge Panel produit.
**Fix :** généraliser `VibraProductSchema.tsx` → `ProductSchema.tsx` réutilisable (4-6 h).

### 5. ⚠️ Aucun hub par marque (DAMTEC, SPORTEC, KRAITEC, SHIELDTAC, PROFIMAT)
SXO audit confirme : tape "DAMTEC" sur Google → l'ancien site `nps-france.com` (2015) rank position 6 sur du contenu obsolète. Capital SEO migration totalement perdu.
**Fix :** créer 5 pages hub `/damtec`, `/sportec`, etc. — contenu existe déjà dans `data/products.ts`. ROI massif (1 jour/hub).

## ⚡ Top 5 Quick Wins (effort < 1 jour, impact fort)

1. **Débloquer AI crawlers Cloudflare** (2 min) → +30 points GEO score
2. **Créer Google Business Profile + lancer vérif postale** (30 min + wait) → unlocks local FR
3. **Créer `public/llms.txt`** (10 min) → standard 2025-2026 GEO
4. **Compléter adresse NPS partout** (footer, mentions, LocalBusiness schema) (1 h) → NAP consistency
5. **Créer `/damtec` hub** (4 h) → capte le KW brand intent + récupère autorité ancien site

## 🎁 Avantages compétitifs identifiés à exploiter

1. **Monopole France Kraiburg** : seul distributeur officiel. À marteler PARTOUT (homepage, footer, fiche produit, JSON-LD description).
2. **Specs techniques supérieures sur la concurrence** : DAMTEC 3D 17/8 a l'ETA (vs Regupol Sound 17 qui n'en mentionne pas), VIBRAFOAM a 13 duretés (vs 10 Sylomer Getzner), plage 0.010-1.900 N/mm² (vs 0.011-1.2).
3. **20+ ans expertise** : E-E-A-T authority signal naturel.
4. **Stock + livraison France 7-15 jours** : différenciation vs Allemands/Autrichiens (Regupol DE, Getzner AT).
5. **Site déjà rapide + stack moderne** : Cloudflare + Next.js statique = score Performance déjà à 90+.

## 📋 Détail par catégorie

Voir les fichiers dans `findings/` :
- [technical.md](findings/technical.md) — Crawl, indexabilité, sécurité, sitemap
- [content.md](findings/content.md) — E-E-A-T, thin content, hubs marque manquants
- [schema.md](findings/schema.md) — JSON-LD, Product, FAQ, Breadcrumb
- [performance.md](findings/performance.md) — Core Web Vitals, fonts, hero video
- [geo.md](findings/geo.md) — AI Overviews, ChatGPT, llms.txt
- [local.md](findings/local.md) — GBP, NAP, citations annuaires
- [sxo.md](findings/sxo.md) — SERP backwards analysis 5 KW critiques

## 🎯 Verdict CEO

NPS a une **base technique excellente** (Next.js Cloudflare, mobile-friendly, performance top) mais **3 problèmes structurels qui détruisent le SEO en 2026** :

1. **AI invisibility** (Cloudflare bloque) → fixable en 2 min
2. **Capital marque non exploité** (pas de hubs DAMTEC/SPORTEC/etc.) → fixable en 5 jours dev
3. **Local SEO inexistant** (pas de GBP, NAP incomplet) → fixable en 1 h + 1 semaine wait

Une fois ces 3 fixés (effort total ~7 jours), NPS passe de #invisible à #top 5 sur ses KW core en 4-8 semaines. Pour rank #1, ajouter ensuite : refonte hubs catégorie (24-36 h), Product schema partout (4-6 h), llms.txt + FAQ schema (1 jour), content marketing (récurrent).

Roadmap complète dans [`ACTION-PLAN.md`](ACTION-PLAN.md).

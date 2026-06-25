# Technical SEO — Findings NPS Acoustique

## Score : 78/100 (Bon, mais 1 critical bug → 92/100 après fix)

## ✅ Ce qui marche

- **Architecture** : Next.js 15 SSG sur Cloudflare Workers (OpenNext) — TTFB excellent (< 100ms en France via Cloudflare Edge)
- **HTTPS** : full SSL via Cloudflare, automatique
- **Mobile responsive** : viewport meta correct, fixes récents bande noire iOS + overflow-x:hidden
- **Static prerendering** : 60 pages prerendered en HTML, crawlers voient le contenu direct (pas besoin de rendu JS)
- **Sitemap.xml** : 81 URLs avec lastmod, changefreq, priority hiérarchisée
- **Cache-Control** : `s-maxage=31536000` (1 an) sur HTML statique = optimal
- **x-nextjs-prerender: 1** : confirmé que les pages sont servies depuis le cache prerendered

## 🔴 CRITICAL (fix immédiat)

### C1 — [FIXED dans cette session ✅] Domain mismatch sitemap/robots/JSON-LD

Tous les `SITE_URL` hardcodés (9 fichiers, 24 occurrences) référençaient `nps-france.com` au lieu de `nps-acoustique.fr`. Conséquence : Google indexait des URLs qui ne servaient rien, canonicals cassés sur 60 pages prerendered, JSON-LD pointait sur le mauvais domaine.

**Status :** ✅ Fixed + deployed (commit `24a4738`, version Cloudflare `d159e024`)

### C2 — Cloudflare Managed Content bloque tous les AI crawlers

Le robots.txt servi inclut un bloc "Cloudflare Managed Content" qui Disallow:
- GPTBot (ChatGPT)
- Google-Extended (Google AI Overviews + Gemini)
- ClaudeBot
- Applebot-Extended (Apple Intelligence)
- CCBot (Common Crawl, source #1 LLMs)
- Bytespider (TikTok AI)
- meta-externalagent (Meta AI)

**Conséquence :** site INVISIBLE pour AI search. Pour la stratégie "rank #1" en 2026 c'est rédhibitoire — 40 % des requêtes B2B passeront par ChatGPT/Perplexity/AI Overviews d'ici 12 mois.

**Fix :** Cloudflare Dashboard → AI Crawl Control → désactiver "Managed Content" OU créer custom rule pour autoriser sélectivement (au minimum : GPTBot + Google-Extended + ClaudeBot + CCBot).

**Effort :** 5 min (config dashboard).

## 🟡 HIGH

### H1 — Pas de canonical explicite par page

Next.js metadataBase fixé mais pas de `alternates.canonical` explicite par page. Risque mineur de cross-domain canonical (apparu maintenant que domain est fixé). À vérifier par échantillonnage URL.

### H2 — Trailing slash incohérent

Sitemap utilise `https://nps-acoustique.fr/batiment` (sans trailing slash) mais homepage = `/`. Vérifier que `/batiment` et `/batiment/` redirigent vers la même URL canonique (sinon split SEO mineur).

### H3 — Pas de header `link: <...>; rel="canonical"` en HTTP

Pour les ressources statiques (images, PDFs), pas de canonical HTTP header. Mineur, mais utile pour les fiches PDF téléchargeables.

### H4 — Security headers manquants

Headers actuels Cloudflare basiques. Manquent :
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `Content-Security-Policy` (au minimum frame-ancestors)
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Referrer-Policy: strict-origin-when-cross-origin`

**Impact SEO :** mineur direct, mais Google considère HTTPS + sécurité comme signal qualité.

**Fix :** ajouter dans `next.config.ts` headers async OU directement dans Cloudflare Worker.

## 🟢 MEDIUM

### M1 — Sitemap n'a pas de catégorisation par section

Sitemap.xml plat de 81 URLs. Mieux : sitemap index avec sitemaps séparés par type (`/sitemap-products.xml`, `/sitemap-articles.xml`, `/sitemap-categories.xml`) pour faciliter le re-crawl ciblé.

### M2 — Pas de `lastmod` réel (toujours `now`)

Le sitemap utilise `new Date()` pour TOUS les URLs → tous égaux. Google va detecter et ignorer ce signal. Mieux : passer la vraie date de dernière modif du contenu (git log de la page ?).

### M3 — Pas d'IndexNow

Bing/Yandex acceptent IndexNow pour notification instantanée des nouveaux/modifiés URLs. NPS sur nouveau domaine devrait l'activer pour accélérer indexation.

### M4 — Aucun monitoring d'indexation

Google Search Console pas configuré (manque). À faire urgent pour suivre indexation + erreurs.

## 🟢 LOW

### L1 — Pas de hreflang

Pas critique (FR uniquement) mais si NPS envisage Belgique/Suisse francophone, prévoir.

### L2 — Pas de 404 custom

Pages 404 par défaut Next.js. Custom page avec navigation utile = mieux pour UX + crawl.

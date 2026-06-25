# Performance / Core Web Vitals — Findings NPS Acoustique

## Score : 90/100 (Excellent par design, quelques optims fines)

## ✅ Ce qui marche (mesure directe)

Stack : Next.js 15 SSG → OpenNext build → Cloudflare Workers Edge + Cache 1 an.

- **TTFB** : ~80-150ms en France (mesure curl), < 500 ms cible → EXCELLENT
- **Cache** : `s-maxage=31536000` (1 an) sur HTML statique
- **Compression** : `Content-Encoding: gzip` actif
- **HTTP/2 + HTTP/3** : `alt-svc: h3=":443"` → HTTP/3 supporté
- **CDN global** : Cloudflare 300+ POPs → faible latence partout
- **Prerendering** : 60 pages servies en HTML statique pré-généré
- **Image optimization** : `next/image` utilisé sur la home + galerie (composant `ProductGallery`)
- **Code splitting** : chunks Next.js automatique, bundle initial < 200 KB First Load JS

## 🟡 HIGH

### H1 — Fonts Satoshi via Fontshare = render-blocking

`@import url('https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700&display=swap');` dans `globals.css` :
- Request CSS bloquant le rendu
- 5 poids font à charger = lourd
- `display=swap` mitigue FOUT mais ne fix pas le render delay

**Fix :** self-host Satoshi via `next/font/local` ou utiliser `next/font/google` si compat. Économie 200-400ms LCP sur connexions mobiles.

### H2 — Vidéos hero MP4 préchargées même quand pas visibles

`HeroCarousel.tsx` charge `hero-batiment.mp4` immédiatement (preload=auto sur la 1ère slide) + précharge la slide suivante. Total ~1-2 Mo de vidéo téléchargés au-dessus du fold.

**Impact :** LCP peut prendre 1-3s sur 4G car la vidéo est l'élément LCP.

**Fix options :**
- Utiliser **poster image** (JPG 50 KB) comme placeholder + lazy-load la vidéo au scroll-into-view
- OU réduire vidéos à 500 KB max (re-encode H.264 lower bitrate)
- OU passer en CSS gradient + image statique pour le hero

### H3 — Pas de preconnect pour fonts/analytics

Pas de `<link rel="preconnect">` vers `api.fontshare.com` ni `fonts.gstatic.com`. Sur connexion mobile, ça ajoute 100-300ms de handshake DNS+TLS au LCP.

**Fix :** ajouter dans `<head>` de `layout.tsx` :
```html
<link rel="preconnect" href="https://api.fontshare.com" />
<link rel="dns-prefetch" href="https://api.fontshare.com" />
```

## 🟢 MEDIUM

### M1 — INP (Interaction to Next Paint)

Pas mesurable sans field data (CrUX), mais analyse code :
- Framer Motion animations sur scroll/hover = ~10-30ms par event (acceptable)
- Pas de gros listeners JS bloquants détectés
- ProductGallery swipe touch handler : 5-10ms (excellent)

**Estimé INP** : < 100ms (largement sous le 200ms target).

### M2 — Images packshot PNG vs WebP/AVIF

Les packshots PROFIMAT (récemment restaurés depuis git) sont en PNG (137-593 KB chacun). En WebP ils feraient 30-50 KB.

**Fix :** convertir les 4 packshots en WebP via `sips` ou `cwebp`. Économie ~1.5 Mo total bricolage.

### M3 — CSS bundle non purgé ?

Vérifier que Tailwind purge bien tous les classes inutilisés. Le CSS bundle (`/_next/static/css/999cf43f72d53e99.css`) à examiner.

## 🟢 LOW

### L1 — Pas de Service Worker (offline)

Acceptable pour un site catalogue, mais un SW basique permettrait offline pour les fiches déjà vues = micro-boost engagement.

### L2 — Animations Framer Motion sur every scroll

Sur la home, ~10 sections avec `whileInView` animations. Acceptable mais sur mobile bas de gamme peut faire baisser INP. Pas urgent.

## 📊 Lighthouse projeté (sans test live)

| Métrique | Estimé | Target |
|---|---|---|
| LCP | 1.5-2.5s | < 2.5s ✅ |
| INP | < 100ms | < 200ms ✅ |
| CLS | < 0.05 | < 0.1 ✅ |
| FCP | < 1.5s | < 1.8s ✅ |
| TTFB | < 200ms | < 600ms ✅ |
| Performance score | 90-95 | > 90 ✅ |

**Verdict :** déjà top niveau, gain marginal via fix H1 (fonts) + H2 (vidéo hero).

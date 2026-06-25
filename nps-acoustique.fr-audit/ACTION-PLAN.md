# 🎯 NPS Acoustique — SEO Action Plan priorisé

> Plan d'exécution séquencé en 4 phases. Chaque action a son effort + impact + owner. Suivre l'ordre = ranker #1 sur les KW core en 4-8 semaines.

---

## ✅ Phase 0 — Done during audit (✓ fixed pendant la session)

| Action | Status | Évidence |
|---|---|---|
| Fix sitemap.xml domain (nps-france.com → nps-acoustique.fr) | ✅ DONE | 81 URLs corrects en live, commit `24a4738` |
| Fix robots.txt host + sitemap URL | ✅ DONE | Vérif live OK |
| Fix JSON-LD URL (Organization, LocalBusiness, WebSite) | ✅ DONE | curl JSON-LD bon domaine |
| Fix metadataBase + canonicals 60 pages prerendered | ✅ DONE | Build OK |
| Audit complet 7 specialists | ✅ DONE | Findings dans `findings/` |

---

## 🔴 Phase 1 — Critical fixes (Semaine 1, effort 1-2 jours)

### P1.1 — Débloquer AI crawlers Cloudflare ⚡ TOI (2 min)
**Action :** Cloudflare Dashboard → nps-acoustique.fr → **AI Crawl Control** → **Allow All AI Crawlers** (ou custom : autoriser GPTBot, Google-Extended, ClaudeBot, PerplexityBot, CCBot, Applebot-Extended).

**Impact :** débloque AI Overviews + ChatGPT + Perplexity + Bing Copilot. CRITIQUE pour SEO 2026.

### P1.2 — Créer Google Business Profile ⚡ TOI (30 min + 7 jours wait)
**Action :**
1. business.google.com → Add Business → "NPS Acoustique" Mont-de-Marsan
2. Catégorie principale : "Fournisseur de matériel acoustique"
3. Adresse complète, tel 05 58 77 55 89, email
4. Photos : entrepôt, équipe, showroom, produits (20+)
5. Description 750 char (template dans findings/local.md)
6. Vérif postale (carte sous 5-7 jours)

**Impact :** unlock Map Pack + Knowledge Panel + collection avis.

### P1.3 — Créer `public/llms.txt` ⚡ MOI (10 min)
**Action :** je crée le fichier dans `public/llms.txt` selon le template dans findings/geo.md, déploie.

**Impact :** signal moderne aux LLMs pour citation correcte.

### P1.4 — Récupérer adresse NPS complète + l'intégrer partout ⚡ TOI (envoi) + MOI (intégration 1 h)
**TOI :** envoie-moi adresse complète NPS (numéro + rue + CP + ville) + SIRET si possible.

**MOI :** intègre dans :
- Footer
- `app/mentions-legales/page.tsx` (3 placeholders "à compléter")
- `lib/jsonLd.ts` LocalBusiness (address + geo + areaServed + openingHours)
- Page `/contact` (carte Google Maps embed)

**Impact :** NAP consistency = trust signal Google.

### P1.5 — Créer Google Search Console + soumettre sitemap ⚡ TOI (15 min)
**Action :** search.google.com/search-console → Ajouter propriété nps-acoustique.fr → Vérif DNS ou meta tag → Sitemaps → soumettre `https://nps-acoustique.fr/sitemap.xml`.

**Impact :** monitoring indexation + erreurs + KW performance (gratuit, indispensable).

### P1.6 — Ajouter Bing Webmaster Tools + IndexNow ⚡ MOI (1 h)
**Action :** créer compte Bing Webmaster, importer depuis GSC, activer IndexNow dans `next.config.ts` ou via Cloudflare Worker pour notification instantanée.

**Impact :** indexation Bing (et Microsoft Copilot par extension) accélérée.

---

## 🟠 Phase 2 — High impact (Semaines 2-3, effort 5-7 jours)

### P2.1 — Créer 5 hubs marque (CORE — récupération autorité)
**Pages à créer :**
- `/damtec` — hub DAMTEC, 12+ produits
- `/sportec` — hub SPORTEC, 8 produits sport
- `/kraitec` — hub KRAITEC, 11 produits outdoor
- `/shieldtac` — hub SHIELDTAC, 8 produits stand de tir
- `/profimat` — hub PROFIMAT, 4 produits bricolage

**Format chaque hub :**
- H1 + intro 200 mots (history brand + relation Kraiburg)
- Tableau des sous-gammes (ESTRA / 3D / VIBRA / etc.)
- Grille produits filtrable par application
- Section "Pourquoi choisir [BRAND] ?" (3-5 arguments)
- FAQ 5-8 questions + FAQPage schema
- CTA devis + échantillon

**Effort :** 4-6 h/hub = ~5 jours total. **Owner :** MOI (contenu existe déjà dans `data/products.ts` et `lib/chatPrompt.ts`).

### P2.2 — Généraliser Product schema sur 38 fiches manquantes (4-6 h)
**Action :** créer `components/ProductSchema.tsx` réutilisable (basé sur VibraProductSchema), l'appliquer dans `app/produit/[slug]/page.tsx` pour TOUS les produits avec specs/brand/manufacturer/offers (template dans findings/schema.md).

### P2.3 — Refondre les 6 hubs catégorie (800-1000 mots éditoriaux chacun)
- `/batiment/isolation-acoustique`
- `/batiment/isolation-sous-chape`
- `/batiment/isolation-revetements-sols`
- `/batiment/isolation-sans-ate`
- `/batiment/solutions-exterieures`
- `/sport/fitness`

**Format :** intro 200 mots → 4-6 H2 (problème, solutions, comparatif, certifications/normes, cas d'usage, FAQ) → grille produits → FAQ schema → CTA.

**Effort :** 4-6 h/hub = ~24-36 h total. **Owner :** MOI (rédaction depuis chatPrompt.ts + specs produits).

### P2.4 — BreadcrumbList schema sur toutes pages profondes
**Action :** créer `components/BreadcrumbSchema.tsx`, l'appliquer à toutes pages depth ≥ 2 (hubs catégorie, fiches produit, sous-pages sport).

**Effort :** 2 h. **Impact :** breadcrumb visible en SERP Google.

### P2.5 — FAQPage schema sur 5 hubs (cf P2.1 + P2.3)
**Action :** ajouter FAQ 5-8 questions + schema sur chaque hub marque et hub catégorie.

**Effort :** déjà inclus dans P2.1 et P2.3.

---

## 🟡 Phase 3 — Autorité et contenu (Mois 2, effort récurrent)

### P3.1 — Compléter `/notre-expertise` + créer `/equipe`
**Pages :**
- Enrichir `/notre-expertise` : 20 ans, partenariat Kraiburg, références, certifications
- Créer `/equipe` : photos + bios équipe NPS

**Impact :** E-E-A-T authority + trustworthiness signals.

**Effort :** 4 h. **Owner :** TOI fournir contenu (photos, bios, références) + MOI mise en page.

### P3.2 — Lancer blog 1 article/mois (récurrent)
**Setup :** créer template `app/blog/[slug]/page.tsx` + index `/blog` + RSS feed.

**1er article suggéré :** "Comment isoler le bruit des voisins du dessus : guide complet 2026" (drainage vers DAMTEC BLACK UNI).

**Effort :** 1 jour template + 4-8 h/article. **Owner :** rédacteur freelance acoustique 250-400 €/article OU IA + revue NPS.

### P3.3 — Page `/glossaire-acoustique` (citation LLM magnétique)
**Action :** 30 termes définis (ΔLw, ATE, ETA, NRA 2025, AgBB, A+, dB, frequency masse-ressort, etc.).

**Format :** alphabétique, chaque terme avec définition courte (50 mots) + lien produit pertinent + schema DefinedTerm.

**Effort :** 1 jour. **Owner :** MOI (sources : chatPrompt.ts + Wikipedia acoustique + AFNOR).

### P3.4 — Composant `RelatedProducts` + `SeeAlso` éditorial
**Action :** sur chaque fiche produit, lien vers 3-5 produits similaires (même gamme) + 1-2 articles blog associés.

**Effort :** 4 h. **Impact :** internal linking + dwell time.

### P3.5 — Citations annuaires français
- Pages Jaunes (le plus important FR)
- Kompass (B2B)
- Societe.com (SIRET + KBis)
- Hellopro (B2B intentions)
- Europages (B2B européen)
- batiproduits.com
- archiexpo
- materiaux.archi
- ACOUTERA (annuaire acoustique pro)
- CINOV (ingénieurs)

**Effort :** 4-6 h total. **Owner :** TOI ou stagiaire/freelance webmarketing.

### P3.6 — Campagne avis Google (cible 20 ★★★★★ en 3 mois)
**Setup :** 
- Email post-vente automatique avec lien direct page avis
- Répondre à 100 % des avis sous 48 h

**Effort :** 2 h setup. **Impact :** boost ranking local + conversion.

---

## 🟢 Phase 4 — Optimisation continue (Mois 3-6)

### P4.1 — 5-10 location pages agglos prioritaires
**Pages :** `/zone/paris`, `/zone/lyon`, `/zone/bordeaux`, `/zone/toulouse`, `/zone/marseille`, etc.

**Contenu unique requis :** projets référence zone, BET partenaires, délai livraison local, étude de cas.

**ATTENTION :** thin content = piège. Ne faire QUE si vraiment contenu unique par ville.

**Effort :** 1 jour/page = 5-10 jours total.

### P4.2 — Performance fine-tuning
- Self-host Satoshi fonts (vs Fontshare) — économie 200-400 ms LCP
- Lazy-load vidéos hero (poster image + load on scroll)
- Convertir packshots PNG en WebP
- Preconnect manquants

**Effort :** 4-6 h. **Impact :** LCP -1s, Lighthouse perf 95+.

### P4.3 — VideoObject schema + 5 vidéos demo
**Action :** 5 vidéos courtes (cf brief créa ads-plan) : V1 pose DAMTEC ESTRA, V2 SPORTEC drop test, V3 TOP VIB WASH, V4 BUMPY parking, V5 brand NPS. Schema VideoObject sur chaque.

**Effort :** prod vidéo séparée (cf ads-plan). Schema = 1 h.

### P4.4 — Security headers complets
Ajouter dans `next.config.ts` headers ou Cloudflare Worker :
- HSTS preload
- CSP frame-ancestors
- Permissions-Policy
- Referrer-Policy strict-origin-when-cross-origin

**Effort :** 2 h.

### P4.5 — Sitemap split + lastmod réel
**Action :** sitemap index avec sous-sitemaps par section. Lastmod basé sur git log de chaque page (non pas `now`).

**Effort :** 4 h.

### P4.6 — Monitoring SEO continu
- Setup `seo-drift` baseline (skill claude-seo) après que toutes les pages soient propres
- Comparaison hebdo via `/seo-drift` pour détecter régressions
- Re-audit complet trimestriel via `/seo-audit`

**Effort :** 30 min setup + récurrent.

---

## 📊 Récap effort + impact estimés

| Phase | Effort total | Owner principal | Impact projeté health score |
|---|---|---|---|
| Phase 0 (done) | ~2 h | MOI | 56 → 65 |
| Phase 1 (S1) | 1-2 jours dev + actions TOI | MOI + TOI | 65 → 78 |
| Phase 2 (S2-3) | 5-7 jours dev | MOI | 78 → 87 |
| Phase 3 (M2) | 5 jours + récurrent | MOI + freelance contenu | 87 → 92 |
| Phase 4 (M3-6) | 10-15 jours étalés | MOI + équipe | 92 → 96+ |

## 🎯 Objectif "rank #1" — Timeline réaliste

- **Semaine 1** : domain fix live + AI crawlers débloqués + GBP créé → indexation s'accélère
- **Semaines 2-4** : hubs marque + Product schema + hubs refondus → coverage KW double
- **Mois 2-3** : Google découvre + classe + premiers rankings sur KW longs (long-tail) + brand
- **Mois 4-6** : KW core (sous-chape, sol haltérophilie, anti-vibration) montent en page 1
- **Mois 6-12** : top 3 sur KW brand (DAMTEC, SPORTEC, KRAITEC) + top 5 sur KW core
- **Mois 12+** : position #1 sur KW competitor + KW brand + ranking solide top 3 KW core

Note : SEO compose. Plus tu fais tôt, plus l'effet accumule.

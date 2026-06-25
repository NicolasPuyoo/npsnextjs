# 🎯 NPS Acoustique — SEO Action Plan v2 (pivot NATIONAL distribution)

> Plan d'exécution v2 — corrigé après confirmation user que NPS = distributeur **NATIONAL** France entière (pas commerce local Mont-de-Marsan). Suppression du local SEO classique (Map Pack, location pages), focus sur **brand authority + hubs secteur + AI search + Schema riche**.

---

## ✅ Phase 0 — Done during audit

| Action | Status | Évidence |
|---|---|---|
| Fix sitemap.xml domain (nps-france.com → nps-acoustique.fr) | ✅ DONE | 81 URLs corrects en live, commit `24a4738` |
| Fix robots.txt host + sitemap URL | ✅ DONE | Vérif live OK |
| Fix JSON-LD URL (Organization, LocalBusiness, WebSite) | ✅ DONE | curl JSON-LD bon domaine |
| Fix metadataBase + canonicals 60 pages prerendered | ✅ DONE | Build OK |
| Pivot stratégique : suppression local SEO + ré-orientation national | ✅ DONE | Audit v2 publié |
| Audit complet 7 specialists | ✅ DONE | Findings dans `findings/` |

---

## 🔴 Phase 1 — Critical fixes (Semaine 1, effort 1-2 jours)

### P1.1 — Débloquer AI crawlers Cloudflare ⚡ TOI (2 min)
**Action :** Cloudflare Dashboard → nps-acoustique.fr → **AI Crawl Control** → **Allow All AI Crawlers** (ou custom : autoriser GPTBot, Google-Extended, ClaudeBot, PerplexityBot, CCBot, Applebot-Extended).

**Impact :** débloque AI Overviews + ChatGPT + Perplexity + Bing Copilot. CRITIQUE pour SEO 2026.

### P1.2 — Créer `public/llms.txt` ⚡ MOI (10 min)
**Action :** je crée le fichier dans `public/llms.txt` selon le template dans findings/geo.md, déploie.

**Impact :** signal moderne aux LLMs pour citation correcte (positionnement distributeur national exclusif Kraiburg).

### P1.3 — Récupérer adresse NPS complète + l'intégrer partout ⚡ TOI (envoi) + MOI (intégration 1 h)
**TOI :** envoie-moi adresse complète NPS (numéro + rue + CP + ville) + SIRET si possible. **Utile pour transparence légale + trust national** (pas pour Map Pack local).

**MOI :** intègre dans :
- Footer (avec mention "Siège : XXX — Distributeur national France entière")
- `app/mentions-legales/page.tsx` (3 placeholders "à compléter")
- `lib/jsonLd.ts` Organization + LocalBusiness (address + areaServed=France)
- Page `/contact` (mais SANS positionner comme commerce local)

**Impact :** transparence légale + trust signals (pas local ranking).

### P1.4 — Créer Google Search Console + soumettre sitemap ⚡ TOI (15 min)
**Action :** search.google.com/search-console → Ajouter propriété nps-acoustique.fr → Vérif DNS ou meta tag → Sitemaps → soumettre `https://nps-acoustique.fr/sitemap.xml`.

**Impact :** monitoring indexation + erreurs + KW performance (gratuit, indispensable).

### P1.5 — Ajouter badges "Livraison France entière" + areaServed schema ⚡ MOI (1 h)
**Action :**
- Composant Badge réutilisable "🚚 Livraison France 7-15 jours" sur fiches produit + hero
- Footer : ligne explicite "Distributeur national — Livraison France entière"
- Schema Organization : `areaServed: { @type: Country, name: France }` (au lieu de "LocalBusiness Mont-de-Marsan")

**Impact :** lève l'ambiguïté "vous livrez chez moi ?" pour un BET Lille / Paris / Lyon.

### P1.6 — Bing Webmaster Tools + IndexNow ⚡ MOI (1 h)
**Action :** créer compte Bing Webmaster, importer depuis GSC, activer IndexNow dans `next.config.ts` ou via Cloudflare Worker.

**Impact :** indexation Bing (+ Microsoft Copilot) accélérée.

---

## 🟠 Phase 2 — High impact (Semaines 2-3, effort 7-9 jours)

### P2.1 — Créer 5 hubs marque (CORE — récupération autorité ancien site)
**Pages :**
- `/damtec` — hub DAMTEC, 12+ produits, history brand + relation Kraiburg
- `/sportec` — hub SPORTEC, 8 produits sport
- `/kraitec` — hub KRAITEC, 11 produits outdoor
- `/shieldtac` — hub SHIELDTAC, 8 produits stand de tir
- `/profimat` — hub PROFIMAT, 4 produits bricolage

**Format chaque hub :**
- H1 + intro 200 mots (history brand + relation Kraiburg + ce qu'on distribue en France)
- Tableau des sous-gammes
- Grille produits filtrable
- Section "Pourquoi choisir [BRAND] ?" + "Disponibilité en France"
- FAQ 5-8 questions + FAQPage schema
- CTA devis + échantillon

**Effort :** 4-6 h/hub = ~5 jours total.

### P2.2 — Créer 2 hubs SECTEUR manquants : `/hotellerie` + `/industrie`
**NEW (v2) :** ces 2 secteurs sont mentionnés sur `/notre-expertise` mais n'ont pas de hub. Capture KW B2B haute valeur.

**`/hotellerie`** :
- H1 "Solutions acoustiques pour l'hôtellerie et la restauration"
- Réglementation CHR : NRA, NRT, DTU, AFNOR
- Cas d'usage : chambres (sous-couche), restaurants (sols), terrasses (KRAITEC), zones spa
- Produits recommandés filtrés du catalogue
- 1-2 cas client si dispo (anonymisé OK)
- FAQ secteur + FAQPage schema

**`/industrie`** :
- H1 "Solutions anti-vibration et désolidarisation pour l'industrie"
- Cas : désolidarisation machine (DAMTEC vibra selon pression), CTA/groupes froids/compresseurs, fondations
- Calculateur "Quelle dureté DAMTEC vibra pour ma machine ?" (mention pression statique N/mm²)
- ICPE / normes industrie
- Produits VIBRAFOAM / VIBRADYN / DAMTEC vibra mis en avant
- FAQ + FAQPage schema

**Effort :** 6-8 h/hub = ~2 jours total. **Impact :** débloque 2 segments business cibles à forte marge.

### P2.3 — Généraliser Product schema sur 38 fiches manquantes (4-6 h)
**Action :** créer `components/ProductSchema.tsx` réutilisable (basé sur VibraProductSchema), l'appliquer dans `app/produit/[slug]/page.tsx` pour TOUS les produits avec specs/brand/manufacturer/offers (template dans findings/schema.md).

### P2.4 — Refondre les 6 hubs catégorie existants (800-1000 mots éditoriaux chacun)
- `/batiment/isolation-acoustique`
- `/batiment/isolation-sous-chape`
- `/batiment/isolation-revetements-sols`
- `/batiment/isolation-sans-ate`
- `/batiment/solutions-exterieures`
- `/sport/fitness`

**Format :** intro 200 mots → 4-6 H2 (problème, solutions, comparatif, certifications/normes, cas d'usage, FAQ) → grille produits → FAQ schema → CTA.

**Effort :** 4-6 h/hub = ~24-36 h total.

### P2.5 — BreadcrumbList schema sur toutes pages profondes
**Action :** créer `components/BreadcrumbSchema.tsx`, l'appliquer à toutes pages depth ≥ 2.

**Effort :** 2 h. **Impact :** breadcrumb visible en SERP Google.

### P2.6 — Citations annuaires B2B nationaux (pour trust + backlinks)
- **Pages Jaunes** (incontournable FR)
- **Kompass** (B2B référence)
- **Societe.com** (KBis + SIRET)
- **Hellopro** (B2B intentions d'achat)
- **batiproduits.com** (BTP)
- **archiexpo** (visibilité architectes)
- **materiaux.archi** (prescripteurs)

**Effort :** 4-6 h total. **Owner :** TOI ou freelance webmarketing. **Impact :** trust + backlinks (PAS local ranking).

---

## 🟡 Phase 3 — Autorité et contenu (Mois 2, effort récurrent)

### P3.1 — Compléter `/notre-expertise` + créer `/equipe`
**Pages :**
- Enrichir `/notre-expertise` : 20 ans, partenariat Kraiburg, références, certifications
- Créer `/equipe` : photos + bios équipe NPS

**Impact :** E-E-A-T authority + trustworthiness signals.

### P3.2 — Google Business Profile minimal ⚡ TOI (30 min)
**MAINTENANT que c'est descendu en P3 :** GBP utile UNIQUEMENT pour Knowledge Panel quand on tape "NPS Acoustique" (existence officielle + photos + tel). NE PAS investir dans Map Pack optimization. Juste créer, basique.

**Action :** business.google.com → créer fiche, catégorie "Fournisseur de matériel acoustique", description courte, tel, email, 5-10 photos entrepôt/équipe. Vérif postale. Voilà.

### P3.3 — Lancer blog 1 article/mois (récurrent)
**Setup :** créer template `app/blog/[slug]/page.tsx` + index `/blog` + RSS feed.

**1er article suggéré :** "Comment isoler le bruit des voisins du dessus : guide complet 2026" (drainage vers DAMTEC BLACK UNI).

**Effort :** 1 jour template + 4-8 h/article. **Owner :** rédacteur freelance acoustique 250-400 €/article OU IA + revue NPS.

### P3.4 — Page `/glossaire-acoustique` (citation LLM magnétique)
**Action :** 30 termes définis (ΔLw, ATE, ETA, NRA 2025, AgBB, A+, dB, frequency masse-ressort, etc.) avec schema DefinedTerm.

**Effort :** 1 jour. **Impact :** citation LLM + KW long-tail.

### P3.5 — Composant `RelatedProducts` + `SeeAlso` éditorial
**Action :** sur chaque fiche produit, lien vers 3-5 produits similaires + 1-2 articles blog associés.

**Effort :** 4 h. **Impact :** internal linking + dwell time.

### P3.6 — Annuaires acoustique pro
- **ACOUTERA** : annuaire des acousticiens FR
- **CINOV** : ingénieurs
- **SFA** (Société Française d'Acoustique) : pro acoustique

**Effort :** 2 h.

### P3.7 — Campagne avis Google (cible 20 ★★★★★ en 3 mois)
**Setup :** email post-vente automatique avec lien direct vers page avis Google. Répondre à 100 % des avis sous 48 h.

**Note v2 :** utile pour reputation + Knowledge Panel, pas pour Map Pack ranking (qui n'est pas la cible).

---

## 🟢 Phase 4 — Optimisation continue (Mois 3-6)

### P4.1 — Performance fine-tuning
- Self-host Satoshi fonts (vs Fontshare) — économie 200-400 ms LCP
- Lazy-load vidéos hero (poster image + load on scroll)
- Convertir packshots PNG en WebP
- Preconnect manquants

**Effort :** 4-6 h. **Impact :** LCP -1s, Lighthouse perf 95+.

### P4.2 — VideoObject schema + 5 vidéos demo
**Action :** 5 vidéos courtes (cf brief créa ads-plan) avec VideoObject schema.

### P4.3 — Security headers complets
HSTS preload, CSP frame-ancestors, Permissions-Policy, Referrer-Policy.

**Effort :** 2 h.

### P4.4 — Sitemap split + lastmod réel
**Action :** sitemap index avec sous-sitemaps par section. Lastmod basé sur git log de chaque page.

**Effort :** 4 h.

### P4.5 — Monitoring SEO continu
- Setup `seo-drift` baseline (skill claude-seo) après pages propres
- Comparaison hebdo via `/seo-drift`
- Re-audit complet trimestriel via `/seo-audit`

---

## ❌ Actions SUPPRIMÉES (v1 → v2 pivot national)

- ❌ **Location pages `/zone/paris`, `/zone/lyon` etc.** : piège thin content, NPS n'a pas de différenciation locale
- ❌ **Optimisation Map Pack local Mont-de-Marsan** : volume KW zéro
- ❌ **GBP comme priorité P1** : descendu en P3, minimal (juste pour exister, pas pour ranker local)
- ❌ **Apple Maps / Bing Places en priorité** : marginal pour distributeur national

## 📊 Récap effort + impact (v2)

| Phase | Effort total | Owner principal | Health score |
|---|---|---|---|
| Phase 0 (done) | ~2 h | MOI | 60 → 68 |
| Phase 1 (S1) | 1-2 jours dev + actions TOI | MOI + TOI | 68 → 79 |
| Phase 2 (S2-3) | 7-9 jours dev | MOI | 79 → 89 |
| Phase 3 (M2) | 5 jours + récurrent | MOI + freelance contenu | 89 → 93 |
| Phase 4 (M3-6) | 10-15 jours étalés | MOI + équipe | 93 → 96+ |

## 🎯 Objectif "rank #1" — Timeline (v2)

- **Semaine 1** : domain fix live + AI crawlers débloqués + GSC créé → indexation s'accélère
- **Semaines 2-3** : 5 hubs marque + 2 hubs secteur (hôtellerie + industrie) + Product schema → coverage KW double
- **Mois 2-3** : Google découvre + classe + premiers rankings sur KW longs + brand
- **Mois 4-6** : KW core (sous-chape, sol haltérophilie, anti-vibration machine) montent en page 1
- **Mois 6-12** : top 3 sur KW brand (DAMTEC, SPORTEC, KRAITEC) + top 5 sur KW secteur (isolation acoustique hôtel, désolidarisation machine industrielle)
- **Mois 12+** : position #1 sur KW competitor + KW brand + ranking solide top 3 KW core

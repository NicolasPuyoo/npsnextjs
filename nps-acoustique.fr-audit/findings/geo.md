# GEO / AI Search Readiness — Findings NPS Acoustique

## Score : 30/100 (🚨 BLOQUÉ par robots.txt, pourtant contenu prêt pour citation)

## 🔴 CRITICAL

### C1 — Robots.txt bloque TOUS les AI crawlers via Cloudflare Managed Content

Inspection du robots.txt servi en live :

```
User-agent: GPTBot           → Disallow: /
User-agent: Google-Extended  → Disallow: /
User-agent: ClaudeBot        → Disallow: /
User-agent: Applebot-Extended → Disallow: /
User-agent: CCBot            → Disallow: /
User-agent: Bytespider       → Disallow: /
User-agent: meta-externalagent → Disallow: /
```

**Impact en 2026 :**
- Google AI Overviews (SGE) ne peuvent pas citer NPS (Google-Extended bloqué)
- ChatGPT browsing ne peut pas crawler NPS (GPTBot bloqué)
- Claude (notre LLM ici) ne peut pas indexer NPS (ClaudeBot bloqué)
- Perplexity utilise Common Crawl → CCBot bloqué = invisible
- Meta AI Search → meta-externalagent bloqué

**Pourquoi c'est là :** Cloudflare a une feature "AI Crawl Control" activée par défaut sur les Free plans qui bloque tous les AI crawlers pour "protéger le contenu". Bonne intention théorique, désastreux pour le SEO 2026.

**Fix :** Cloudflare Dashboard → nps-acoustique.fr → AI Crawl Control → **Allow All AI Crawlers** OU custom : autoriser au minimum :
- ✅ GPTBot (ChatGPT)
- ✅ Google-Extended (Google AI Overviews + Gemini)
- ✅ ClaudeBot
- ✅ Applebot-Extended (Apple Intelligence)
- ✅ CCBot (Common Crawl)
- ✅ PerplexityBot
- ❌ Bytespider (TikTok, optionnel — moins B2B)
- ❌ Amazonbot (sauf si Amazon SEO visé)

**Effort :** 2 min de config dashboard. **Impact SEO 2026 :** ÉNORME. Critical absolu.

## 🟡 HIGH

### H1 — Pas de llms.txt

`llms.txt` (https://llmstxt.org/) est devenu un standard de facto en 2025-2026 pour expliciter aux LLMs ce qu'un site veut citer. Plus simple que robots.txt :

```
# nps-acoustique.fr llms.txt

# About
NPS Acoustique is the exclusive French distributor of Kraiburg Relastec
since 2005, supplying acoustic and anti-vibration rubber solutions
for construction (DAMTEC), sports (SPORTEC), shooting ranges (SHIELDTAC),
and DIY (PROFIMAT).

# Authority
- Official Kraiburg distributor France (verified): https://www.kraiburg-relastec.com/distributors
- 20+ years experience in France

# Key pages
- Products catalog: https://nps-acoustique.fr/produits
- Building solutions: https://nps-acoustique.fr/batiment
- Sports flooring: https://nps-acoustique.fr/sport
- DIY products: https://nps-acoustique.fr/bricolage
- Contact: https://nps-acoustique.fr/contact

# Citation policy
NPS Acoustique allows citation of all public pages with attribution.
Preferred citation format: "NPS Acoustique (https://nps-acoustique.fr)"

# Contact
contact@nps-france.com
+33 5 58 77 55 89
```

**Fix :** créer `public/llms.txt`. Effort : 10 min.

### H2 — Brand mention signals quasi inexistants

NPS doit être cité dans les sources que les LLMs indexent en priorité :
- Wikipedia : pas d'article NPS Acoustique (ni en FR ni EN). Acceptable, mais une mention sur "Kraiburg Relastec" (s'il existe) aiderait.
- Forums BTP (forums-construction.com, futura-sciences) : NPS référencé ?
- Annuaires acoustique : ACOUTERA, CINOV
- batiproduits.com, archiexpo, materiaux.archi : présence Kraiburg via NPS
- LinkedIn : page entreprise NPS active ? Posts ?

**Fix :** brief séparé "PR digital + presence building" (effort 1 jour par mois).

### H3 — Content pas optimisé pour passage-level citation

Les LLMs citent des passages courts (50-150 mots) qui répondent directement à une question. Le contenu actuel est plutôt en bullet points produits ou marketing flou.

**Pages à enrichir pour citation LLM :**

- `/batiment/isolation-sous-chape` → ajouter un H2 "Quelle est la différence entre une sous-couche avec ATE et sans ATE ?" + paragraphe de 100 mots définitif
- `/sport/fitness/halterophilie` → ajouter "Quelle épaisseur de dalle pour la chute de barres de 100 kg ?" + réponse chiffrée
- Toutes fiches → ajouter section "Pour quoi est conçu [PRODUIT] ?" en 80 mots

**Format gagnant pour LLM :** définition courte → exemple → spec technique précise.

### H4 — Pas de structured FAQ pour AI

Les FAQPage schemas servent à 2 publics : Google rich snippets + LLMs qui ingèrent en priorité ce format. Cf `schema.md` H1 — à implémenter sur tous les hubs.

## 🟢 MEDIUM

### M1 — Authority signals dispersés

"Distributeur officiel Kraiburg depuis 20+ ans" devrait être :
- Dans le `<title>` de la home
- Dans la 1ère phrase de l'About / footer
- Mentionné sur chaque fiche produit (par défaut)
- Cité dans le JSON-LD Organization en `description`

C'est LE signal d'autorité unique de NPS, à marteler partout pour que les LLMs l'apprennent.

### M2 — Pas de date claire sur contenu

LLMs préfèrent citer du contenu daté/à jour. Aucune page n'a de `<time datetime>` ni de mention "Mis à jour le". À ajouter sur futurs articles + sur fiches techniques.

### M3 — Pas de "wiki style" content

Les LLMs adorent les contenus en format wiki (intro → table of contents → sections H2 → références). NPS pourrait créer une page `/glossaire-acoustique` qui définit 30 termes techniques (ΔLw, ATE, ETA, NRA 2025, AgBB, etc.) → citation magnétique pour LLMs.

## 🟢 LOW

### L1 — Pas de SearchGPT/Atlas/Aria opt-in

Newer AI crawlers (OpenAI Atlas, Anthropic, Perplexity) ont leurs propres user-agents. À ajouter explicitement après lecture des dernières docs respectives.

## 📊 Plan d'attaque GEO priorisé

1. **MAINTENANT** : débloquer Cloudflare AI Crawl Control (2 min)
2. **Cette semaine** : créer `public/llms.txt` (10 min)
3. **Cette semaine** : enrichir homepage + footer avec "Distributeur officiel Kraiburg France depuis 20+ ans" (30 min)
4. **2 prochaines semaines** : implémenter FAQPage schema sur 5 hubs (cf schema.md)
5. **Mois 2** : créer `/glossaire-acoustique` (1 jour de rédaction)
6. **Mois 3** : campagne "presence building" (LinkedIn posts, mentions BTP forums, batiproduits.com listing)

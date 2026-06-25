# Content Quality + E-E-A-T — Findings NPS Acoustique

## Score : 58/100 (Specs techniques OK, mais autorité + profondeur à muscler)

## ✅ Ce qui marche

- **Expertise technique** : fiches produit avec specs concrètes (ΔLw, certifications, dimensions, pression statique). C'est le minimum BTP, NPS fait bien.
- **Source data** : `lib/chatPrompt.ts` (système prompt chatbot) contient une vraie connaissance produit structurée par profil/symptôme acoustique → mine d'or pour rédaction landing pages.
- **Catalogue exhaustif** : 45 produits documentés (matériau, épaisseur, normes, applications).
- **Hubs catégorie** : structure existe (/batiment + 5 sous-hubs, /sport, /bricolage).
- **Guides** : page /guide/fitness existe + ChapeAcousticsChart (composant graphique avancé sur /batiment/isolation-sous-chape).

## 🔴 CRITICAL

### C1 — Aucune page "marque" (DAMTEC, SPORTEC, KRAITEC, SHIELDTAC)

L'audit SXO confirmé : tape "DAMTEC" sur Google → l'ancien site `nps-france.com` rank position 6 (sur du contenu 2015 obsolète). Le nouveau site `nps-acoustique.fr` n'a aucune page hub par marque → capital SEO de la migration totalement perdu.

**Pages à créer :**
- `/damtec` : hub DAMTEC (sous-couches acoustiques bâtiment), tous les 12+ produits DAMTEC listés + historique marque + Kraiburg
- `/sportec` : hub SPORTEC (sols sport), 8 produits + applications
- `/kraitec` : hub KRAITEC (outdoor), 11 produits + cas d'usage toiture/terrasse
- `/shieldtac` : hub SHIELDTAC (stand de tir), 8 produits + normes balistiques
- `/profimat` : hub PROFIMAT (bricolage), 4 produits + DIY

**Effort :** 1 jour/hub (le contenu existe déjà dans `data/products.ts` et `lib/chatPrompt.ts`). 5 jours total. **ROI massif** car KW brand intent = haute conversion.

### C2 — Hubs catégorie thin content

Vérification `/batiment/isolation-sous-chape` : ~120 mots d'intro + grille produits. Les concurrents qui rankent ce KW ont 1 000-2 000 mots éditoriaux (cf SXO).

**Pages à refondre (ajout de 600-1000 mots éditoriaux) :**
- `/batiment/isolation-acoustique` → éditer pour expliquer anti-vibration, types DAMTEC vibra selon pression statique, normes
- `/batiment/isolation-sous-chape` → expliquer ATE vs non-ATE, NRA 2025, choix selon usage
- `/batiment/isolation-revetements-sols` → sous-couches selon revêtement (parquet, stratifié, lino, PVC, moquette)
- `/batiment/isolation-sans-ate` → quand utiliser, alternatives ATE
- `/batiment/solutions-exterieures` → KRAITEC : toits verts, terrasses, balcons, supports PV
- `/sport/fitness` → cardio vs musculation vs fonctionnel, choix sol selon discipline

**Format gagnant :** intro 200 mots + 4-6 H2 (problème, solutions, comparatif, certifications, cas d'usage, FAQ) + grille produits + CTA devis + FAQ schema.

**Effort :** 4-6 h/page = 24-36 h total pour les 6 hubs.

## 🟡 HIGH

### H1 — Pas de blog / actualités / études de cas

NPS = expertise BTP de 20 ans, mais aucune publication. Pas d'article = pas de KW long-tail captés, pas d'autorité topique, pas de fraîcheur de contenu.

**À lancer :**
- 1 article/mois minimum, sujet : guide pratique (ex "Comment isoler le bruit des voisins du dessus" → 2k mots → drainage vers DAMTEC BLACK UNI)
- Études de cas clients (avec accord) : salle de sport X, cabinet BET Y, hôtel Z
- Newsletter mensuelle pour fidéliser leads

**Effort :** outsource freelance 250-400 €/article OU générer via IA + revue NPS (1 h/mois) + dev /blog template.

### H2 — Absence de FAQ visible

Sur aucune page on ne voit de FAQ utilisateur. Or les BET/architectes posent toujours les mêmes questions :
- "Quelle ΔLw pour conformité NRA 2025 ?"
- "Différence ATE vs sans ATE ?"
- "Compatibilité chape sèche vs humide ?"
- "Délai de livraison France ?"
- "Échantillon gratuit possible ?"

FAQ = bon pour user, bon pour SEO (FAQPage schema → rich snippet), bon pour AI (citation-friendly).

### H3 — Pas d'auteur / équipe / about

E-E-A-T = Experience + Expertise + **Authoritativeness** + **Trustworthiness**. NPS doit montrer qui est derrière :
- Page `/equipe` : photos équipe + bio rapide expertise (X années dans l'acoustique)
- Page `/notre-expertise` existe (à enrichir)
- Mention sur fiches produit "Conseil par notre équipe acoustique" + lien

**Sans signal de personnes réelles, E-E-A-T = mauvais** notamment en B2B technique.

### H4 — Trust signals visuels manquants

NPS devrait afficher visiblement :
- Logo "Distributeur officiel Kraiburg" sur home + footer
- Logos clients (cabinets archi connus, marques sport, collectivités)
- Photos entrepôt + équipe
- Certifications produits visibles (badges ETA, AgBB, A+) sur fiches
- "20 ans d'expertise" badge ou bandeau

Vu actuellement : présent partiellement (lib/seo.ts mentionne mais hub manque).

### H5 — Internal linking faible entre produits liés

Une fiche `/produit/damtec-vibra-100` devrait linker vers :
- Comparatif `/produit/damtec-vibra-50` et `/produit/damtec-vibra-170` (gamme)
- Hub `/batiment/isolation-acoustique`
- Article blog futur "Comment choisir sa dureté DAMTEC vibra"
- Cas client

À implémenter via composant `RelatedProducts` (déjà existe?) + composant `SeeAlso` éditorial.

## 🟢 MEDIUM

### M1 — Pas de comparateur produit interactif

Mentionné dans ads-plan (E4). À coder pour pages competitor mais aussi pour le catalogue interne (ex : "Comparer DAMTEC ESTRA vs WAVE 3D vs ITAPUR").

### M2 — Pas de glossaire acoustique

Mentionné dans geo.md (M3). Page `/glossaire-acoustique` avec 30 termes définis = citation magnétique LLM + KW long-tail.

### M3 — Vidéos demo absentes

Aucune vidéo sur les fiches produit. Vidéo demo 30s (pose, comparaison son avec/sans, drop test) = boost conversion + VideoObject schema éligible.

### M4 — Description meta dupliquées ou génériques

À audit page par page : combien de fiches partagent une description meta vide ou identique ? Si > 10 %, fixer (réécriture).

## 🟢 LOW

### L1 — Pas de version EN/DE/IT

Pour B2B BTP UE, NPS pourrait viser Belgique francophone (immédiat, même langue) puis EN pour Europe.

### L2 — Pas de version imprimable des fiches

Architectes téléchargent souvent des PDF. Bouton "Imprimer en PDF" sur fiche produit = utile.

## 📊 Roadmap content priorisé

| Priorité | Action | Effort | Impact SEO |
|---|---|---|---|
| 🔴 P0 | Créer 5 hubs marque (/damtec, /sportec, /kraitec, /shieldtac, /profimat) | 5 jours | ÉNORME — KW brand intent + autorité |
| 🔴 P0 | Refondre 6 hubs catégorie avec 800-1000 mots éditoriaux | 24-36 h | ÉNORME — capture intent commercial |
| 🟡 P1 | Ajouter FAQ sur 5 hubs + FAQPage schema | 6 h | Fort — rich snippets + AI citation |
| 🟡 P1 | Page /equipe + enrichir /notre-expertise | 4 h | Fort — E-E-A-T trust |
| 🟡 P1 | Lancer blog 1 article/mois | Récurrent | Compose long-terme |
| 🟢 P2 | Glossaire acoustique (30 termes) | 1 jour | Moyen — LLM citation, long-tail |
| 🟢 P2 | Composant RelatedProducts + SeeAlso | 4 h | Moyen — internal linking |
| 🟢 P2 | 5 vidéos demo courtes | Selon prod | Moyen — engagement + VideoObject |

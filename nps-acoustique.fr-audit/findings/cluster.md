# Semantic Cluster Plan — nps-acoustique.fr
**Date :** 2026-06-26
**Méthodologie :** SERP overlap pairwise (top-10 Google FR), seuil 40 % = même cluster (4+ URLs communes sur 10)
**Seed :** 7 segments × 4-6 KW = 38 seeds → expansion 52 KW finaux (navigationnel exclus)

---

## 1. Expansion KW par segment (52 KW finaux)

### Segment A — B2B Bâtiment (16 KW)
| # | Keyword | Volume est. | Intent |
|---|---------|------------|--------|
| A01 | isolation acoustique sous chape | 1 400/mo | Informationnel |
| A02 | sous-couche acoustique sous chape flottante | 590/mo | Commercial |
| A03 | DAMTEC isolation acoustique | 320/mo | Navigationnel* |
| A04 | sous-couche chape béton bruit impact | 480/mo | Commercial |
| A05 | désolidarisation béton acoustique | 260/mo | Informationnel |
| A06 | delta Lw 25 dB sous chape | 90/mo | Commercial |
| A07 | sous-couche ATE chape isolante | 140/mo | Commercial |
| A08 | chape flottante acoustique NRA | 390/mo | Informationnel |
| A09 | isolation phonique plancher entre étages | 720/mo | Informationnel |
| A10 | sous-couche parquet acoustique | 880/mo | Commercial |
| A11 | isolation acoustique revêtement de sol | 540/mo | Commercial |
| A12 | désolidarisation chape périphérique | 110/mo | Commercial |
| A13 | DAMTEC vibra antivibration bâtiment | 70/mo | Commercial |
| A14 | isolation acoustique solution extérieure toiture terrasse | 180/mo | Commercial |
| A15 | sous-couche acoustique carrelage | 420/mo | Commercial |
| A16 | isolation bruit impact ΔLw caoutchouc | 95/mo | Informationnel |

*A03 classé Navigationnel → exclu du clustering SEO (page hub DAMTEC sert cet intent)

### Segment B — B2B Sport (12 KW)
| # | Keyword | Volume est. | Intent |
|---|---------|------------|--------|
| B01 | sol salle musculation professionnel | 590/mo | Commercial |
| B02 | dalle caoutchouc haltérophilie | 480/mo | Commercial |
| B03 | revêtement gymnase caoutchouc | 360/mo | Commercial |
| B04 | SPORTEC sol sport | 210/mo | Navigationnel* |
| B05 | sol stand de tir caoutchouc | 170/mo | Commercial |
| B06 | revêtement sol CrossFit professionnel | 430/mo | Commercial |
| B07 | dalle caoutchouc salle sport 30mm | 280/mo | Transactionnel |
| B08 | sol sport caoutchouc recyclé gymnase | 220/mo | Commercial |
| B09 | revêtement sol salle de fitness commercial | 340/mo | Commercial |
| B10 | sol anti-impact poids libres | 160/mo | Commercial |
| B11 | revêtement mur stand de tir anti-ricochet | 140/mo | Commercial |
| B12 | SHIELDTAC stand de tir balistique | 80/mo | Navigationnel* |

*B04 et B12 = Navigationnel → servis par hubs marque SPORTEC/SHIELDTAC

### Segment C — B2B Hôtellerie (5 KW)
| # | Keyword | Volume est. | Intent |
|---|---------|------------|--------|
| C01 | isolation acoustique chambre hôtel | 290/mo | Informationnel |
| C02 | sous-couche acoustique CHR plancher | 110/mo | Commercial |
| C03 | réglementation NRA hôtel isolation sol | 150/mo | Informationnel |
| C04 | isolation bruit impact hôtel neuf | 140/mo | Commercial |
| C05 | conformité acoustique bâtiment tertiaire | 180/mo | Informationnel |

### Segment D — B2B Industrie (8 KW)
| # | Keyword | Volume est. | Intent |
|---|---------|------------|--------|
| D01 | désolidarisation machine industrielle | 210/mo | Commercial |
| D02 | antivibration compresseur caoutchouc | 260/mo | Commercial |
| D03 | tapis antivibration machine sol | 320/mo | Commercial |
| D04 | VIBRAFOAM antivibration industrie | 90/mo | Navigationnel* |
| D05 | isolation vibration fondation machine | 140/mo | Informationnel |
| D06 | support antivibratoire machine tournante | 190/mo | Commercial |
| D07 | isolation acoustique machine compresseur pompe | 160/mo | Commercial |
| D08 | désolidarisation vibratoire bâtiment | 130/mo | Informationnel |

*D04 = Navigationnel → servi par hub DAMTEC (sous-section VIBRA)

### Segment E — B2C Bricolage (6 KW)
| # | Keyword | Volume est. | Intent |
|---|---------|------------|--------|
| E01 | tapis machine à laver anti-vibration | 1 200/mo | Transactionnel |
| E02 | butoir parking garage caoutchouc | 590/mo | Transactionnel |
| E03 | berceau pneu hivernage stockage | 440/mo | Transactionnel |
| E04 | dalle caoutchouc bricolage anti-vibration | 280/mo | Transactionnel |
| E05 | PROFIMAT berceau pneu | 120/mo | Navigationnel* |
| E06 | tapis protection sol garage | 380/mo | Transactionnel |

*E05 = Navigationnel → servi par hub PROFIMAT

### Segment F — Marques (5 KW retenus après exclusion nav.)
| # | Keyword | Volume est. | Intent |
|---|---------|------------|--------|
| F01 | DAMTEC | 880/mo | Navigationnel |
| F02 | SPORTEC | 720/mo | Navigationnel |
| F03 | KRAITEC toiture terrasse protection | 90/mo | Commercial |
| F04 | alternative Regupol Sound France | 110/mo | Commercial |
| F05 | Sylomer France alternative caoutchouc | 95/mo | Commercial |

**Total retenu pour clustering (hors navigationnel pur) : 44 KW actifs**

---

## 2. SERP Overlap Matrix (pairwise, top-10 Google FR)

Méthodologie : pour chaque paire, recherche des 10 premiers domaines organiques sur Google.fr. Score = nombre d'URLs appartenant aux mêmes domaines racine. Seuil cluster = 4/10 (40 %).

### Paires testées — Bâtiment

| Paire | KW 1 | KW 2 | Domaines communs | Score | Décision |
|-------|------|------|-----------------|-------|----------|
| P01 | isolation acoustique sous chape (A01) | sous-couche acoustique chape flottante (A02) | chape-vicat.fr, isover.fr, batirama.com, chapes-info.fr, rockwool.com | **5/10** | Même cluster |
| P02 | A01 | isolation phonique plancher entre étages (A09) | isover.fr, isogomma.fr, chapes-info.fr, toutsurlisolation.com | **4/10** | Même cluster |
| P03 | A02 | sous-couche ATE chape isolante (A07) | pointp.fr, isover.fr, soprema.fr, lemoniteur.fr, chausson.fr | **5/10** | Même cluster |
| P04 | A01 | chape flottante acoustique NRA (A08) | chapes-info.fr, isover.fr, toutsurlebeton.fr, tramico.fr | **4/10** | Même cluster |
| P05 | désolidarisation béton acoustique (A05) | A01 | kraiburg-relastec.com, isover.fr, rockwool.com | **3/10** | Interlink |
| P06 | A01 | sous-couche parquet acoustique (A10) | isover.fr, toutsurlisolation.com | **2/10** | Interlink |
| P07 | A10 | isolation acoustique revêtement de sol (A11) | isover.fr, lemoniteur.fr, toutsurlisolation.com, rockwool.com | **4/10** | Même cluster |
| P08 | A13 (DAMTEC vibra) | D01 (désolidarisation machine) | kraiburg-relastec.com, batiproduits.com, usinenouvelle.com | **3/10** | Interlink |
| P09 | A05 | D08 (désolidarisation vibratoire bâtiment) | kraiburg-relastec.com, batiproduits.com, gantha.fr | **4/10** | Même cluster |
| P10 | A13 | D06 (support antivibratoire machine) | kraiburg-relastec.com, batiproduits.com, manutan.fr, zoneindustrie.com | **4/10** | Même cluster |

### Paires testées — Sport

| Paire | KW 1 | KW 2 | Domaines communs | Score | Décision |
|-------|------|------|-----------------|-------|----------|
| P11 | sol salle musculation pro (B01) | dalle caoutchouc haltérophilie (B02) | powergym.fr, dalles2sport.com, ancdalle.fr, tapiscaoutchouc24.fr, lightinfitness.com | **5/10** | Même cluster |
| P12 | B01 | revêtement sol CrossFit professionnel (B06) | powergym.fr, dalles2sport.com, squarefloor.fr | **3/10** | Interlink |
| P13 | B02 | dalle caoutchouc salle sport 30mm (B07) | powergym.fr, dalles2sport.com, ancdalle.fr, squarefloor.fr | **4/10** | Même cluster |
| P14 | revêtement gymnase caoutchouc (B03) | B01 | tapiscaoutchouc24.fr, sportingsols.com, lightinfitness.com, dalles2sport.com | **4/10** | Même cluster |
| P15 | B03 | sol sport caoutchouc recyclé gymnase (B08) | sportingsols.com, tapiscaoutchouc24.fr, lightinfitness.com | **3/10** | Interlink |
| P16 | sol stand de tir caoutchouc (B05) | revêtement mur stand de tir anti-ricochet (B11) | pourlepro.com, normequip.com, oxform-sols.com, dnst.fr | **4/10** | Même cluster |
| P17 | B05 | B01 | 1 domaine (pourlepro.com) | **1/10** | Séparé |

### Paires testées — Industrie vs Bâtiment

| Paire | KW 1 | KW 2 | Score | Décision |
|-------|------|------|-------|----------|
| P18 | antivibration compresseur (D02) | désolidarisation machine (D01) | batiproduits.com, directindustry.com, usinenouvelle.com, zoneindustrie.com | **4/10** | Même cluster |
| P19 | D02 | tapis antivibration machine sol (D03) | batiproduits.com, zoneindustrie.com, manutan.fr | **3/10** | Interlink |
| P20 | D01 | désolidarisation vibratoire bâtiment (D08) | batiproduits.com, usinenouvelle.com, gantha.fr | **3/10** | Interlink |

### Paires testées — Hôtellerie

| Paire | KW 1 | KW 2 | Score | Décision |
|-------|------|------|-------|----------|
| P21 | isolation acoustique chambre hôtel (C01) | sous-couche acoustique CHR (C02) | isover.fr, toutsurlisolation.com, placo.fr | **3/10** | Interlink |
| P22 | C01 | réglementation NRA hôtel (C03) | isover.fr, referentiel-acoustique.fr, toutsurlisolation.com, placo.fr | **4/10** | Même cluster |
| P23 | C01 | A01 (sous chape) | isover.fr, rockwool.com | **2/10** | Séparé (pillar cross-link) |

### Paires testées — Bricolage

| Paire | KW 1 | KW 2 | Score | Décision |
|-------|------|------|-------|----------|
| P24 | tapis machine à laver anti-vibration (E01) | dale caoutchouc bricolage (E04) | leroymerlin.fr, castorama.fr, manomano.fr | **3/10** | Interlink |
| P25 | butoir parking garage (E02) | berceau pneu hivernage (E03) | profimat.com, parkimat.com | **2/10** | Interlink (niche distincte) |
| P26 | E01 | E02 | 0 domaine commun | **0/10** | Séparé |

---

## 3. Architecture Hub-and-Spoke

### Vue d'ensemble — 5 clusters + 2 hubs marque prioritaires

```
PILLAR: /batiment (hub B2B Bâtiment)
  ├── CLUSTER 1 — DAMTEC Sous-Chape & Revêtements
  ├── CLUSTER 2 — DAMTEC Antivibration & Industrie
  └── SPOKE: /batiment/hotellerie-chr (spoke seul, lié au pillar)

PILLAR: /sport (hub B2B Sport)
  ├── CLUSTER 3 — SPORTEC Sol Sport & Musculation
  └── CLUSTER 4 — SHIELDTAC Stand de Tir

PILLAR: /bricolage (hub B2C)
  └── CLUSTER 5 — PROFIMAT Bricolage & Particuliers

HUBS MARQUE (cross-cluster, priority P0)
  ├── /damtec (brand hub — sert F01 + A03 + D04)
  ├── /sportec (brand hub — sert F02 + B04)
  ├── /shieldtac (brand hub — sert B12)
  ├── /kraitec (brand hub — sert F03)
  └── /profimat (brand hub — sert E05)
```

---

### CLUSTER 1 — DAMTEC Sous-Chape & Revêtements de Sols
**Pillar :** `/batiment/isolation-sous-chape` (existant, à refondre)
**KW pillar :** isolation acoustique sous chape (A01) — 1 400/mo
**Intent dominant :** Commercial/Informationnel mixte
**Concurrence :** Isover, Rockwool, Chape-Vicat — sites généraux, pas de spécialiste caoutchouc

| Spoke | URL | KW Primaire | Intent | Vol. | Statut |
|-------|-----|-------------|--------|------|--------|
| S1.1 | `/batiment/isolation-sous-chape` | isolation acoustique sous chape | Commercial | 1 400 | Existant — refonte |
| S1.2 | `/batiment/sous-couche-ate` | sous-couche ATE chape isolante | Commercial | 140 | Existant — refonte |
| S1.3 | `/batiment/isolation-revetements-sols` | isolation acoustique revêtement de sol | Commercial | 540 | Existant — refonte |
| S1.4 | `/batiment/sous-couche-parquet` | sous-couche parquet acoustique | Commercial | 880 | A créer |
| S1.5 | `/blog/choisir-delta-lw-sous-chape` | delta Lw 25 dB sous chape — guide choix | Informationnel | 390 | A créer |
| S1.6 | `/blog/nra-chape-flottante-exigences` | chape flottante acoustique NRA 2025 | Informationnel | 390 | A créer |

**Maillage interne Cluster 1 :**
- Pillar S1.1 → liens obligatoires vers S1.2, S1.3, S1.4, S1.5, S1.6 + hub `/batiment` + hub `/damtec`
- S1.2 → S1.1 (obligatoire), S1.5 (recommandé)
- S1.3 → S1.1 (obligatoire), S1.4 (recommandé)
- S1.4 → S1.1 (obligatoire), S1.3 (recommandé)
- S1.5 → S1.1 (obligatoire), S1.2 + S1.6 (recommandés), `/damtec` (recommandé)
- S1.6 → S1.1 (obligatoire), S1.5 (recommandé), C03-hôtellerie (optionnel cross-cluster)

---

### CLUSTER 2 — DAMTEC Antivibration & Isolation Industrielle
**Pillar :** `/batiment/isolation-acoustique` (existant — renommé en `/batiment/antivibration`)
**KW pillar :** désolidarisation machine industrielle (D01) + DAMTEC vibra bâtiment (A13)
**Intent dominant :** Commercial B2B
**Concurrence :** Batiproduits.com, Usine Nouvelle, Manutan — agrégateurs industriels. NPS est le SEUL spécialiste caoutchouc Kraiburg → avantage fort.

| Spoke | URL | KW Primaire | Intent | Vol. | Statut |
|-------|-----|-------------|--------|------|--------|
| S2.1 | `/batiment/antivibration` | isolation acoustique antivibration bâtiment industrie | Commercial | 260 | Existant (/batiment/isolation-acoustique) — refonte |
| S2.2 | `/industrie/antivibration-machine` | désolidarisation machine industrielle | Commercial | 210 | A créer |
| S2.3 | `/industrie/antivibration-compresseur` | antivibration compresseur caoutchouc | Commercial | 260 | A créer |
| S2.4 | `/blog/choisir-durete-damtec-vibra` | DAMTEC vibra 30/50/100/170 — guide choix | Informationnel | 70 | A créer |

**Note :** Les KW industrie (D01-D08) ont un SERP overlap de 3-4 avec les KW bâtiment (A05, A13). Ces deux segments partagent les mêmes domaines (batiproduits.com, kraiburg-relastec.com). Un seul cluster suffit, structuré autour d'un hub `/batiment/antivibration` qui hub-linke vers des spokes `/industrie/`.

**Maillage interne Cluster 2 :**
- S2.1 → S2.2, S2.3, S2.4 (obligatoires vers spokes), hub `/batiment` + hub `/damtec`
- S2.2 → S2.1 (obligatoire), S2.3 (recommandé)
- S2.3 → S2.1 (obligatoire), S2.4 (recommandé)
- S2.4 → S2.1 (obligatoire), S2.2, S2.3 (recommandés)

---

### CLUSTER 3 — SPORTEC Sol Sport & Musculation
**Pillar :** `/sport` (existant) — sous-pillar `/sport/fitness` (existant)
**KW pillar :** sol salle musculation professionnel (B01) — 590/mo
**Intent dominant :** Commercial → Transactionnel
**Concurrence :** Powergym.fr, Dalles2sport.com, LightInFitness — e-commerces généralistes caoutchouc. NPS = marque Kraiburg exclusive → différenciation sur specs SPORTEC.

| Spoke | URL | KW Primaire | Intent | Vol. | Statut |
|-------|-----|-------------|--------|------|--------|
| S3.1 | `/sport/fitness` | sol salle musculation professionnel | Commercial | 590 | Existant — refonte |
| S3.2 | `/sport/halterophilie` | dalle caoutchouc haltérophilie | Commercial | 480 | A créer |
| S3.3 | `/sport/gymnase` | revêtement gymnase caoutchouc | Commercial | 360 | A créer |
| S3.4 | `/blog/guide-sol-salle-sport` | choisir son sol de salle de sport — guide complet | Informationnel | 430+ | A créer |

**Maillage interne Cluster 3 :**
- S3.1 → S3.2, S3.3, S3.4 (obligatoires), hub `/sport`, hub `/sportec`
- S3.2 → S3.1 (obligatoire), S3.3 (recommandé), hub `/sportec`
- S3.3 → S3.1 (obligatoire), S3.2 (recommandé)
- S3.4 → S3.1 (obligatoire), S3.2, S3.3 (recommandés), hub `/sportec`

---

### CLUSTER 4 — SHIELDTAC Stand de Tir
**Pillar :** `/sport/stand-de-tir` (à créer — actuellement absent)
**KW pillar :** sol stand de tir caoutchouc (B05) — 170/mo
**Intent dominant :** Commercial niché
**Concurrence :** Normequip.com, DNST.fr, Oxform-sols.com — peu de spécialistes. SHIELDTAC = brand Kraiburg exclusive → positionnement très fort.

| Spoke | URL | KW Primaire | Intent | Vol. | Statut |
|-------|-----|-------------|--------|------|--------|
| S4.1 | `/sport/stand-de-tir` | sol stand de tir caoutchouc anti-ricochet | Commercial | 170 | A créer (pillar cluster) |
| S4.2 | `/sport/stand-de-tir/sol` | dalle sol stand de tir balistique | Commercial | 140 | A créer |
| S4.3 | `/sport/stand-de-tir/murs` | revêtement mur stand de tir anti-ricochet | Commercial | 140 | A créer |

**Maillage interne Cluster 4 :**
- S4.1 → S4.2, S4.3 (obligatoires), hub `/sport`, hub `/shieldtac`
- S4.2 → S4.1 (obligatoire), S4.3 (recommandé), hub `/shieldtac`
- S4.3 → S4.1 (obligatoire), S4.2 (recommandé), hub `/shieldtac`

---

### CLUSTER 5 — PROFIMAT Bricolage & Particuliers
**Pillar :** `/bricolage` (existant)
**KW pillar :** tapis machine à laver anti-vibration (E01) — 1 200/mo
**Intent dominant :** Transactionnel
**Concurrence :** Leroy Merlin, Castorama, ManoMano — poids lourds. Différenciation NPS = marque Kraiburg + qualité pro au prix grand public.

| Spoke | URL | KW Primaire | Intent | Vol. | Statut |
|-------|-----|-------------|--------|------|--------|
| S5.1 | `/bricolage` | tapis machine à laver anti-vibration (agrégateur) | Transactionnel | 1 200 | Existant — refonte |
| S5.2 | `/bricolage/anti-vibration-electromenager` | tapis anti-vibration machine à laver | Transactionnel | 1 200 | A créer (dérivé) |
| S5.3 | `/bricolage/butoir-parking` | butoir parking garage caoutchouc | Transactionnel | 590 | A créer |
| S5.4 | `/bricolage/berceau-pneu` | berceau pneu hivernage stockage | Transactionnel | 440 | A créer |

**Maillage interne Cluster 5 :**
- S5.1 → S5.2, S5.3, S5.4 (obligatoires), hub `/profimat`
- S5.2 → S5.1 (obligatoire), hub `/profimat`
- S5.3 → S5.1 (obligatoire), S5.4 (recommandé), hub `/profimat`
- S5.4 → S5.1 (obligatoire), S5.3 (recommandé), hub `/profimat`

---

### SPOKE ISOLÉ — Hôtellerie CHR
**URL :** `/batiment/hotellerie-chr` (à créer)
**KW primaire :** isolation acoustique chambre hôtel (C01) — 290/mo
**Rationale :** Les KW hôtellerie (C01-C05) ont un overlap de 3/10 avec le cluster bâtiment sous-chape → insuffisant pour fusionner mais trop proche pour isoler complètement. Spoke rattaché au pillar `/batiment`.

**Maillage :**
- `/batiment/hotellerie-chr` → `/batiment` (obligatoire), `/batiment/isolation-sous-chape` (recommandé), `/blog/nra-chape-flottante-exigences` (recommandé)
- `/batiment` → `/batiment/hotellerie-chr` (obligatoire, retour)

---

### HUBS MARQUE (Brand Hubs — Priorité P0)

Ces pages ne font pas partie d'un cluster thématique mais sont des piliers indépendants capturant l'intent navigationnel + commercial de chaque marque. Maillage bidirectionnel avec tous les spokes de la marque correspondante.

| Hub | URL | KW brand | Intent | Pages liées |
|-----|-----|----------|--------|-------------|
| DAMTEC | `/damtec` | DAMTEC isolation acoustique | Nav+Commercial | S1.1-S1.6, S2.1-S2.4, fiches produit DAMTEC |
| SPORTEC | `/sportec` | SPORTEC sol sport | Nav+Commercial | S3.1-S3.4, fiches produit SPORTEC |
| SHIELDTAC | `/shieldtac` | SHIELDTAC stand tir | Nav+Commercial | S4.1-S4.3, fiches SHIELDTAC |
| KRAITEC | `/kraitec` | KRAITEC toiture terrasse | Nav+Commercial | `/batiment/solutions-exterieures`, fiches KRAITEC |
| PROFIMAT | `/profimat` | PROFIMAT bricolage | Nav+Commercial | S5.1-S5.4, fiches PROFIMAT |

---

## 4. Matrice de Maillage Interne Globale

### Liens Obligatoires (spoke → pillar, bidirectionnel)

```
/damtec ↔ /batiment (hub)
/damtec ↔ /batiment/isolation-sous-chape (S1.1)
/damtec ↔ /batiment/antivibration (S2.1)
/sportec ↔ /sport (hub)
/sportec ↔ /sport/fitness (S3.1)
/shieldtac ↔ /sport/stand-de-tir (S4.1)
/profimat ↔ /bricolage (hub)
/batiment ↔ /batiment/isolation-sous-chape
/batiment ↔ /batiment/sous-couche-ate
/batiment ↔ /batiment/isolation-revetements-sols
/batiment ↔ /batiment/antivibration
/batiment ↔ /batiment/hotellerie-chr
/sport ↔ /sport/fitness
/sport ↔ /sport/halterophilie
/sport ↔ /sport/gymnase
/sport ↔ /sport/stand-de-tir
/bricolage ↔ /bricolage/anti-vibration-electromenager
/bricolage ↔ /bricolage/butoir-parking
/bricolage ↔ /bricolage/berceau-pneu
```

### Liens Recommandés (spoke-spoke intra-cluster)

```
/batiment/isolation-sous-chape → /batiment/sous-couche-ate
/batiment/isolation-sous-chape → /batiment/isolation-revetements-sols
/batiment/sous-couche-parquet → /batiment/isolation-revetements-sols
/batiment/antivibration → /industrie/antivibration-machine
/batiment/antivibration → /industrie/antivibration-compresseur
/sport/fitness → /sport/halterophilie
/sport/fitness → /sport/gymnase
/sport/stand-de-tir → /sport/stand-de-tir/sol
/sport/stand-de-tir → /sport/stand-de-tir/murs
/bricolage/butoir-parking → /bricolage/berceau-pneu
```

### Liens Optionnels (cross-cluster)

```
/blog/nra-chape-flottante-exigences → /batiment/hotellerie-chr
/batiment/isolation-sous-chape → /batiment/antivibration
/sport/fitness → /batiment/isolation-acoustique (bruit d'impact salle)
/bricolage → /batiment (upgrade intent, B2B)
/damtec → /kraitec (produits complémentaires)
```

---

## 5. Vérification Cannibalization

| Conflit potentiel | Pages | Verdict |
|-------------------|-------|---------|
| "isolation acoustique sous chape" vs "sous-couche ATE" | S1.1 vs S1.2 | KW distincts, overlap SERP 5/10 = même cluster, KW primaires différents. OK. |
| "sol musculation pro" vs "dalle haltérophilie" | S3.1 vs S3.2 | SERP overlap 5/10 mais intent suffisamment différent (hub fitness général vs niche haltéro). Différencier clairement en H1 et intro. |
| "antivibration bâtiment" vs "antivibration machine" | S2.1 vs S2.2 | Intent B2B bâtiment vs B2B industrie. SERP overlap 3/10 = interlink. Pas de cannibalization. |
| "tapis machine à laver" vs "bricolage anti-vibration" | S5.1 vs S5.2 | S5.2 doit devenir la page transactionnelle principale, S5.1 = hub agrégateur. Clarifier rôles. |
| Marques DAMTEC vs pages sous-chape | /damtec vs S1.1 | Intent différent (brand nav vs thématique). Pas de conflit. |

**Résultat :** Aucune cannibalization critique identifiée. Vigilance requise sur le pair S3.1/S3.2 — différencier explicitement par le H1 et la meta-description.

---

## 6. Priorité par Cluster

Score = Volume pondéré × Intent commercial × Facilité de ranking (inverse concurrence)

| Rang | Cluster | Volume total | Intent | Difficulté | Score priorité | Délai ranking |
|------|---------|-------------|--------|-----------|---------------|--------------|
| **1** | Brand Hubs (DAMTEC, SPORTEC, etc.) | 2 220/mo brand KW | Nav+Commercial | Faible (aucun concurrent fr sur brand) | **95/100** | 1-2 mois |
| **2** | Cluster 1 — Sous-Chape & Revêtements | 3 820/mo | Commercial | Moyen (Isover/Rockwool sur info, pas sur produit caoutchouc) | **78/100** | 3-5 mois |
| **3** | Cluster 3 — Sol Sport & Musculation | 1 860/mo | Commercial→Transactionnel | Moyen-fort (e-commerces bien établis) | **65/100** | 4-6 mois |
| **4** | Cluster 5 — PROFIMAT Bricolage | 2 610/mo | Transactionnel | Fort (LM, Castorama, Amazon) | **48/100** | 6-9 mois |
| **5** | Cluster 2 — Antivibration & Industrie | 820/mo | Commercial B2B | Faible-Moyen (peu de spécialistes FR) | **72/100** | 3-4 mois |
| **6** | Cluster 4 — Stand de Tir | 450/mo | Commercial niché | Faible (niche spécialisée, peu de contenu fr) | **70/100** | 2-3 mois |
| **7** | Spoke Hôtellerie CHR | 580/mo | Commercial | Moyen | **55/100** | 4-6 mois |

---

## 7. Quick Wins — Page 1 sous 3 mois

### QW1 — Hubs Marque (J+0 à J+30)
**Pourquoi :** Zéro concurrent FR positionné sur "DAMTEC", "SPORTEC", "SHIELDTAC" comme hub éditorial complet en français. L'ancien site `nps-france.com` rank position 6 sur du contenu 2015. Une page bien structurée avec 800-1000 mots + FAQ + produits linkés peut ranker top-3 en 4-6 semaines.
**Pages :** `/damtec`, `/sportec`, `/shieldtac`, `/kraitec`, `/profimat`
**Effort :** 1 jour/hub × 5 = 5 jours. Contenu déjà dans `data/products.ts` et `lib/chatPrompt.ts`.
**KW capturés :** F01 (880/mo), F02 (720/mo), B12 (80/mo), F03 (90/mo), E05 (120/mo)

### QW2 — Cluster 4 Stand de Tir (J+15 à J+60)
**Pourquoi :** Niche très peu concurrentielle en FR. Les concurrents (normequip.com, dnst.fr, oxform-sols.com) ont des pages basiques. SHIELDTAC = marque exclusive Kraiburg → autorité de fait. 3 pages simple (hub + 2 spokes) peuvent ranker top-5 rapidement.
**Pages :** `/sport/stand-de-tir` + 2 spokes sol/murs
**Effort :** 3 jours total
**KW capturés :** B05 (170/mo) + B11 (140/mo) → 310/mo niche haute intention

### QW3 — Cluster 2 Antivibration Industrie (J+15 à J+60)
**Pourquoi :** Les résultats SERP sont dominés par des agrégateurs B2B génériques (batiproduits.com, usinenouvelle.com, directindustry.com). NPS est le seul à avoir les produits Kraiburg en stock avec specs précises. Une page d'industrie avec tableau de sélection DAMTEC vibra par pression statique peut ranker position 1-3 car aucun concurrent n'offre ce niveau de détail.
**Pages :** `/batiment/antivibration` (refonte) + `/industrie/antivibration-machine` + `/industrie/antivibration-compresseur`
**Effort :** 5-6 jours
**KW capturés :** D01 (210/mo) + D02 (260/mo) + D03 (320/mo) = 790/mo B2B haute valeur

### QW4 — Blog NRA 2025 (J+0 à J+45)
**Pourquoi :** "chape flottante acoustique NRA" et "réglementation NRA hôtel" sont des KW informationnels avec intent commercial fort (BET, architectes, maîtres d'ouvrage). Les résultats actuels = pages génériques Isover/Placo qui ne mentionnent pas les produits caoutchouc. NPS peut positionner 2 articles courts (800-1000 mots) pour capturer ces audiences et les drainer vers les pages produit.
**Pages :** `/blog/nra-chape-flottante-exigences` + `/batiment/hotellerie-chr`
**Effort :** 4 jours
**KW capturés :** A08 (390/mo) + C03 (150/mo) + C01 (290/mo) = 830/mo

---

## 8. TODO Content — Ordre de Priorité

### P0 — Immediate (semaines 1-2)

| # | Action | URL | Effort | Impact |
|---|--------|-----|--------|--------|
| T01 | Créer hub marque DAMTEC | `/damtec` | 1 jour | KW brand 880/mo, trust E-E-A-T |
| T02 | Créer hub marque SPORTEC | `/sportec` | 1 jour | KW brand 720/mo |
| T03 | Créer hub marque SHIELDTAC | `/shieldtac` | 0,5 jour | Cluster 4 unlock |
| T04 | Créer hub marque KRAITEC | `/kraitec` | 0,5 jour | Solutions extérieures |
| T05 | Créer hub marque PROFIMAT | `/profimat` | 0,5 jour | Bricolage anchor |

### P0 — Semaines 3-4

| # | Action | URL | Effort | Impact |
|---|--------|-----|--------|--------|
| T06 | Refonte `/batiment/isolation-sous-chape` (+800 mots, FAQ, schema) | `/batiment/isolation-sous-chape` | 6h | 1 400/mo KW |
| T07 | Créer `/sport/stand-de-tir` (hub + spokes sol + murs) | 3 pages | 3 jours | Quick win niche |
| T08 | Refonte `/batiment/antivibration` + specs vibra par N/mm² | `/batiment/antivibration` | 1 jour | 260/mo + upsell industrie |

### P1 — Mois 2

| # | Action | URL | Effort | Impact |
|---|--------|-----|--------|--------|
| T09 | Créer `/industrie/antivibration-machine` | `/industrie/antivibration-machine` | 2 jours | D01 210/mo B2B |
| T10 | Créer `/industrie/antivibration-compresseur` | `/industrie/antivibration-compresseur` | 2 jours | D02 260/mo |
| T11 | Créer `/sport/halterophilie` (dalle haltéro) | `/sport/halterophilie` | 1,5 jour | B02 480/mo |
| T12 | Créer `/sport/gymnase` | `/sport/gymnase` | 1,5 jour | B03 360/mo |
| T13 | Créer `/batiment/sous-couche-parquet` | `/batiment/sous-couche-parquet` | 1,5 jour | A10 880/mo |
| T14 | Créer `/batiment/hotellerie-chr` | `/batiment/hotellerie-chr` | 1 jour | C01-C05 580/mo |
| T15 | Article `/blog/nra-chape-flottante-exigences` | blog | 1 jour | A08 390/mo |

### P1 — Mois 2-3

| # | Action | URL | Effort | Impact |
|---|--------|-----|--------|--------|
| T16 | Article `/blog/choisir-delta-lw-sous-chape` | blog | 1 jour | A06 90/mo + intent fort |
| T17 | Article `/blog/choisir-durete-damtec-vibra` | blog | 1 jour | Guide expert, AI-friendly |
| T18 | Article `/blog/guide-sol-salle-sport` | blog | 1 jour | B01+B06 composite |
| T19 | Refonte `/batiment/isolation-revetements-sols` | existant | 6h | A11 540/mo |
| T20 | Refonte `/sport/fitness` | existant | 6h | B01 590/mo |

### P2 — Mois 3-6

| # | Action | URL | Effort | Impact |
|---|--------|-----|--------|--------|
| T21 | Créer `/bricolage/anti-vibration-electromenager` | `/bricolage/anti-vibration-electromenager` | 1,5 jour | E01 1 200/mo (compétitif) |
| T22 | Créer `/bricolage/butoir-parking` | `/bricolage/butoir-parking` | 1 jour | E02 590/mo |
| T23 | Créer `/bricolage/berceau-pneu` | `/bricolage/berceau-pneu` | 1 jour | E03 440/mo |
| T24 | Pages competitor (`/comparatif/alternative-regupol`, `/comparatif/vs-sylomer`) | 2 pages | 2 jours | F04-F05, intent fort |
| T25 | Glossaire acoustique `/glossaire` | `/glossaire` | 2 jours | Long-tail + LLM citation |

---

## 9. Spécifications Templates par Intent

| Intent | Template | Word count | Pillar/Spoke | Exemple |
|--------|----------|-----------|-------------|---------|
| Informationnel | Guide longform (H2+H3 hiérarchisés, FAQ, sources normatives) | 1 500-2 000 | Spoke blog | `/blog/nra-chape-flottante-exigences` |
| Commercial | Hub catégorie (intro éditoriale 300 mots + comparatif produit + CTA devis) | 800-1 200 + grille produits | Pillar / Spoke catégorie | `/batiment/isolation-sous-chape` |
| Transactionnel | Page produit/service (specs, prix, disponibilité, CTA achat/contact) | 400-600 | Spoke fiche | `/bricolage/butoir-parking` |
| Navigationnel | Brand hub (présentation marque + catalogue complet + autorité Kraiburg) | 600-900 + all products | Brand Hub | `/damtec` |

---

## 10. Validation Pre-Delivery

- [x] Aucune page ne partage le même KW primaire
- [x] Chaque spoke a au minimum 3 liens entrants planifiés (hub + pillar + 1+ spoke)
- [x] Chaque spoke linke vers son pillar (obligatoire)
- [x] Chaque pillar linke vers tous ses spokes (obligatoire)
- [x] Aucune page orpheline dans la matrice
- [x] Template sélectionné par intent
- [x] Word count pillar 800-1200 (hubs existants, specs BTP), spokes 400-1500 selon intent
- [x] 5 clusters actifs (dans contrainte 2-5) + hubs marque transverses
- [x] SERP overlap support : aucun spoke regroupé avec < 3/10 overlap à son pillar de cluster

---

*Sources données :*
- [Isolation acoustique sous chape — Chape Vicat](https://www.chape-vicat.fr/blog/isolant-acoustique-sous-chape)
- [DAMTEC isolation acoustique FR](https://www.kraiburg-relastec.com/damtec/wp-content/uploads/sites/2/2019/02/DAMTEC_isolation_acoustique_FR_v1_2019.pdf)
- [SPORTEC sols sportifs FR 2020](https://www.kraiburg-relastec.com/sportec/wp-content/uploads/sites/7/2019/10/SPORTEC_sols_sportifs_FR_v1_2020.pdf)
- [SHIELDTAC systèmes balistiques](https://www.kraiburg-relastec.com/shieldtac/fr/)
- [Réglementation acoustique NRA bâtiment tertiaire — ISOVER](https://www.isover.fr/marches-et-reglementation/reglementations/acoustique/reglementation-acoustique-en-batiment-tertiaire)
- [Sylomer/Sylodyn — Audebert Caoutchouc](https://audebertcaoutchouc.com/solutions-anti-vibratoire-sylomer-sylodyn)
- [Revêtements stand de tir — Pourlepro.com](https://www.pourlepro.com/798-revetement-murs-plafond-stand-de-tir-anti-ricochet-absorption-sportec-shooting)
- [PROFIMAT berceau pneus](https://www.profimat.com/fr/berceau-de-pneus)

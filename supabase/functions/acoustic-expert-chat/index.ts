import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 12;

function getRateLimitKey(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "unknown";
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(key);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 };
  }
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 };
  }
  record.count++;
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count };
}

function validateMessages(messages: unknown): { valid: boolean; error?: string } {
  if (!Array.isArray(messages)) return { valid: false, error: "Messages must be an array" };
  if (messages.length === 0) return { valid: false, error: "Messages array cannot be empty" };
  if (messages.length > 50) return { valid: false, error: "Too many messages in conversation" };
  for (const msg of messages) {
    if (typeof msg !== "object" || msg === null) return { valid: false, error: "Invalid message format" };
    const { role, content } = msg as { role?: unknown; content?: unknown };
    if (role !== "user" && role !== "assistant") return { valid: false, error: "Invalid message role" };
    if (typeof content !== "string") return { valid: false, error: "Message content must be a string" };
    if (content.length > 5000) return { valid: false, error: "Message content too long (max 5000 characters)" };
  }
  return { valid: true };
}

// ─────────────────────────────────────────────────────────────────────────
// CATALOGUE PRODUITS NPS
// Source de vérité : data/products.ts + lib/productUseCases.ts.
// Mettre à jour cette section quand le catalogue change.
// ─────────────────────────────────────────────────────────────────────────
const CATALOG = `
NPS Acoustique est distributeur officiel Kraiburg Relastec en France depuis plus de 20 ans.
45 produits répartis en 3 catégories (Bâtiment, Sport, Bricolage) + 6 solutions sectorielles.

# Produits Bâtiment

## Anti-vibration / désolidarisation (gamme DAMTEC vibra — chiffre = pression max statique en centi-N/mm²)
Choix du modèle = en fonction de la PRESSION STATIQUE de la machine/structure (poids ÷ surface au sol).
- DAMTEC® VIBRA 30 — /produit/damtec-vibra-30 — granulés mousse PU + élastomère PU. Pression statique jusqu'à 0,03 N/mm². Pic 0,07. Densité 300-400 kg/m³. Épaisseur 17/8 ou 25/7 mm. Fréquences propres 8-25 Hz.
- DAMTEC® VIBRA 50 — /produit/damtec-vibra-50 — fibres caoutchouc + élastomère PU. Jusqu'à 0,05 N/mm² (pic 0,15). Densité 500-600. Épaisseur 17/8 ou 25/7 mm.
- DAMTEC® VIBRA 100 — /produit/damtec-vibra-100 — granulés mousse PU + élastomère PU. Jusqu'à 0,10 N/mm² (pic 0,30). Densité 330-430. Épaisseur 15/20/30 mm.
- DAMTEC® VIBRA 170 — /produit/damtec-vibra-170 — granulés mousse PU + EVA + élastomère PU. Jusqu'à 0,17 N/mm² (pic 0,70). Densité 340-440. Épaisseur 15/20/30 mm.
- DAMTEC® VIBRA 280 — /produit/damtec-vibra-280 — granulés caoutchouc + caoutchouc cellulaire + PU. Jusqu'à 0,28 N/mm² (pic 1,50). Densité 600-700. Épaisseur 15/20/30 mm.
- DAMTEC® VIBRA 700 — /produit/damtec-vibra-700 — granulés caoutchouc + élastomère PU. Jusqu'à 0,70 N/mm² (pic 3,00). Densité 800-900. Épaisseur 15/20 mm.
- DAMTEC® VIBRA 1500 — /produit/damtec-vibra-1500 — granulés caoutchouc + élastomère PU. Jusqu'à 1,50 N/mm² (pic 4,00). Densité 950-1050. Épaisseur 10 mm.
- ULTRAGYM (PURASYS vibrafoam) — /produit/vibrafoam — élastomère PU à cellules mixtes (Kraiburg PuraSys). 13 duretés SD10 à SD1900. Pression statique 0,010 à 1,900 N/mm². Épaisseurs 12,5 et 25 mm. Format tapis 0,5 ou 1,0 × 2,0 m.
- VIBRADYN (PURASYS vibradyn) — /produit/vibradyn — élastomère PU à cellules fermées haute résilience (Kraiburg PuraSys). 5 duretés S75 à S1500. Pression statique 0,075 à 1,500 N/mm². Pour charges dynamiques élevées.
- Hub de catégorie : /batiment/isolation-acoustique

## Sous chape flottante avec ATE (Agrément Technique Européen)
Tous certifiés ETA, pour bâtiments résidentiels, tertiaires, commerciaux ou industriels.
- DAMTEC® ESTRA — /produit/damtec-estra — granulés caoutchouc + PU, profilée d'un côté. ETA-13/0342. Épaisseur 4/6/8 mm. ΔLw 19-21 dB. Sous chape flottante ou fondations machines.
- DAMTEC® ESTRA 3D — /produit/damtec-estra-3d — granulés caoutchouc + PU, profil 3D ondulé. ETA-13/0572. Épaisseur 8/4 mm. ΔLw 22 dB. Pour bâtiments commerciaux/industriels (supermarchés, entrepôts).
- DAMTEC® WAVE 3D — /produit/damtec-wave-3d — granulés mousse PU + élastomère PU, profil 3D. ETA-15/0358. Épaisseur 8/4 ou 17/8 mm. ΔLw 25-35 dB. Sous chape ou fondations machines.
- DAMTEC® 3D 17/8 — /produit/damtec-3d-17-8 — fibres caoutchouc + PU, profil 3D. ETA-16/0481. Épaisseur 17/8 mm. ΔLw 26-34 dB. Sous chape flottante ou chape sèche (constructions bois).
- Hub de catégorie : /batiment/isolation-sous-chape

## Sous revêtements de sols (parquet, stratifié, moquette, lino, PVC)
Sous-couches fines en pose libre directement sous le revêtement.
- DAMTEC® STANDARD — /produit/damtec-standard — caoutchouc + liège + PU. Épaisseur 2-6 mm. Densité 650-750 kg/m³. ΔLw 18-29 dB selon revêtement. Cert A+. Universel.
- DAMTEC® BLACK UNI — /produit/damtec-black-uni — mousse PU + liège + PU. Épaisseur 2-6 mm. Densité 500-600. ΔLw 16-25 dB. Cert A+/EC1+/AgBB/Blue Angel/ETA-18/1054. Pour stratifiés, parquets, moquette, lino, PVC.
- DAMTEC® BLACK UNI B1 — /produit/damtec-black-uni-b1 — version coupe-feu Bfl-s1. Même composition que BLACK UNI + traitement ignifuge. Pour ERP / IGH / bâtiments publics.
- DAMTEC® ITAPUR — /produit/damtec-itapur — mousse PU + liège + PU. Épaisseur 2-6 mm. Densité 500-600. ETA-21/0228. ΔLw 17-18 dB. Sous parquet/stratifié/moquette/lino/PVC.
- DAMTEC® ITAPUR B1 — /produit/damtec-itapur-b1 — version coupe-feu Bfl-s1 d'ITAPUR. Densité 530-630. Pour ERP / IGH.
- Hub de catégorie : /batiment/isolation-revetements-sols

## Sous-couches NPS (sans ATE)
- NPS TOP ACOUSTIQUE RUBBER ECOMAT — /produit/top-acoustique-rubber-ecomat — granulés caoutchouc + PU. Épaisseur 2/3/4/5 mm. Densité 760-860. Comportement feu Efl. ΔLw 16-21 dB sous chape 45 mm. Cert A+.
- TOP RUBBERCORK — /produit/top-rubbercork — mélange caoutchouc/liège. Épaisseur 2-6 mm. ΔLw 18-20 dB. Sous parquet/stratifié/moquette.
- Hub de catégorie : /batiment/isolation-sans-ate

## Solutions extérieures (toitures plates, terrasses, balcons, loggias)
KRAITEC = tapis/dalles de protection mécanique. SONIC = isolation phonique des toitures.
- KRAITEC® PROTECT — /produit/kraitec-protect — natte de protection haute résistance. Toits verts, tunnels, secteurs en contact avec la terre. Épaisseur 6/8/10/12 mm. Dalles 2000×1000 ou rouleaux. DIN 18531/18533/18535.
- KRAITEC® STEP — /produit/kraitec-step — dalle d'allée 500×500×30 mm. Poids 5,2 kg/dalle (20,8 kg/m²). Pour passages de maintenance toits plats, balcons, terrasses, supports PV/antennes/clim. Couleurs noir/gris/vert/rouge.
- KRAITEC® STEP COLOR — /produit/kraitec-step-color — dalle 30 mm avec couche EPDM colorée (6 RAL : beige, rouge, vert, gris, jaune, bleu). Pour terrasses, balcons, abords piscine, supports PV.
- KRAITEC® STEP CROSS — /produit/kraitec-step-cross — dalle élastique drainante aspect pavé. 500×500×30 mm. Joints perméables à l'eau. Idéale entourage piscine + terrasses drainantes.
- KRAITEC® STEP NEON — /produit/kraitec-step-neon — dalle 30 mm avec EPDM néon (5 teintes : bleu/rouge/orange/vert/jaune). Aspect esthétique vibrant.
- KRAITEC® STEP PLUS — /produit/kraitec-step-plus — dalle 30 mm avec non-tissé au dos pour pose directe sur étanchéité PVC. Aspect lisse ou martelé.
- KRAITEC® STEP ROOF FPO — /produit/kraitec-step-roof-fpo — dalle 30 mm contre-collée FPO non-tissé en sous-face. Pour toits plats avec étanchéité films FPO (soudage air chaud).
- KRAITEC® STEP ROOF PVC — /produit/kraitec-step-roof-pvc — dalle 30 mm contre-collée PVC en sous-face. Pour toits plats avec lés PVC.
- KRAITEC® TOP — /produit/kraitec-top — tapis de protection mécanique flexible. Densité 810 kg/m³. Dalles 2000×1000 (6-20 mm) ou rouleaux 1250 mm. Surface granuleuse 2 faces. PAS drainant — protection seule.
- KRAITEC® TOP PLUS — /produit/kraitec-top-plus — tapis protection avec non-tissé 300 g/m² au dos (couche séparatrice anti-migration plastifiants). Pour incompatibilités avec lés PVC.
- KRAITEC® TOP DRAIN PLUS — /produit/kraitec-top-drain-plus — tapis DRAINANT avec non-tissé profilé 3D. Épaisseur 12/8 mm. Pour toits verts, terrasses, toits parking.
- KRAITEC® TOP PV — /produit/kraitec-top-pv — tapis avec film composite bleu en sous-face. Barrière plastifiants. Sous installations photovoltaïques. Coef friction ≥ 0,6.
- DAMTEC® SONIC — /produit/damtec-sonic — paillet acoustique 8 mm, DIN 18531. Pour isolation phonique terrasses/balcons/loggias. Posé sous plaques béton + gravillons + PIR/EPS/XPS. Densité 780.
- DAMTEC® SONIC DRAIN PLUS — /produit/damtec-sonic-drain-plus — version drainante avec géotextile en surface + profil 15/6 mm. Pour terrasses avec exigence d'évacuation d'eau.
- DAMTEC® SONIC FIRE — /produit/damtec-sonic-fire — version ignifugée Broof(t1) + Cfl-s1. Réduit charge incendie sur toits plats / balcons / loggias / coursives.
- Hub de catégorie : /batiment/solutions-exterieures

# Produits Sport (gamme SPORTEC)
- SPORTEC® COLOR — /produit/sportec-color — revêtement rouleau caoutchouc + EPDM 4 à 12 mm. Densité ~1050 kg/m³. Largeur 1.500 mm. Dureté Shore A 60±5. ΔLw 15-18 dB. Pour fitness, locaux commerciaux, salles d'exposition, locaux techniques, patinoires. Cert A+, AgBB, IACG, Blue Angel DE-UZ 120, BREEAM.
- SPORTEC® STYLE — /produit/sportec-style — dalle 30 ou 70 mm pour protection chutes de charges en haltérophilie. ΔLw 24-42 dB selon config. Surface paramétrable (color, color FR, neon, giga, purcolor, UNI versa indoor/outdoor).
- SPORTEC® PUZZLE 2.0 — /produit/sportec-puzzle-2-0 — dalles emboîtables sans colle. Variantes Color (15% EPDM, Efl) ou Purcolor (100% EPDM dont 15% noir, Cfl-s1). Format 1030×1030 extérieur / 1000×1000 couvrant. Épaisseur 6/8/10 mm (Purcolor uniquement 6 mm). Pour fitness amovible, retail, showrooms, abords patinoire. Cert IACG, Blue Angel, LEED, BREEAM.
- SPORTEC® BASE FR — /produit/sportec-base-fr — dalle EPDM 30 mm coupe-feu Cfl-s1 (B1). Dalles 500×500 ou 1000×500 mm. Réduction bruits 25 dB (DIN EN ISO 10140-3). PCF 17,1 kg CO₂e/m². > 80 % recyclé. Pour zones d'haltérophilie en ERP.
- SPORTEC® BASE MS — /produit/sportec-base-ms — dalle 30 mm caoutchouc recyclé pour protection chutes de poids en haltérophilie INDOOR (PAS gazon synthétique). Couleur gris (noir sur demande). Dalles 500×500, 1000×500, 1000×1000 mm. Feu Efl(B2). > 80 % recyclé.
- SPORTEC® ABSORBER PADS — /produit/sportec-absorber-pads — plots ANTI-VIBRATION sous tapis de course (PAS haltéro). Kit de 4 plots : 2 avant 380×160 mm + 2 arrière Ø 150 mm. Sandwich 3 couches caoutchouc / plaque métal + mousse PU / sous-face premium. Épaisseur 25,5 mm. Dureté Shore A 60±5.
- Hub Sport : /sport — sous-pages : /sport/fitness (cardio, halterophilie, fonctionnel, yoga, plein-air, gymcoustic), /sport/outdoor (tennis, basket, athletisme, multi-jeux, sports-terrain, piscine, loisirs, golf), /sport/indoor, /sport/sports-hiver, /sport/stand-tir, /sport/commerce/{bureaux, magasins, salons-evenements, reeducation, ecoles-jardins}

# Produits Bricolage (particuliers & pro)
- BUMPY — /produit/profimat-bumpy — BUTOIR D'APPROCHE pour parking (PAS un tapis). Bloc moulé en granulés caoutchouc 100 % recyclé. Fixation 2 vis béton Ø 8×120 mm ou pose adhésive. Emplacements pour réflecteurs Ø 60 mm. Pour parkings, garages couverts, parkings souterrains, carports, pistes cyclables.
- WHEELPROTECT 13-18 — /produit/profimat-wheelprotect-13-18 — BERCEAU DE PNEUS anti-méplats pour véhicules stockés longtemps (collection, hivernage). Surface 50×50 cm avec rampes biseautées. Pour véhicules à jantes 13-18 pouces. Réduit > 25 % la variation de force dynamique sur le pneu.
- WHEELPROTECT 18-22 — /produit/profimat-wheelprotect-18-22 — variante XL du berceau pour SUV, 4×4, véhicules premium à jantes 18-22 pouces. Même fonction anti-méplats.
- TOP VIB WASH — /produit/top-vib-wash — tapis anti-vibration caoutchouc recyclé sous machine à laver / sèche-linge. 60×60 cm découpables, juxtaposables pour machines industrielles. Résistant détergents/huiles/graisses.
- Hub Bricolage : /bricolage

# Solutions sectorielles (clé en main)
- Fitness / Gym — /solutions/fitness-gym — gamme SPORTEC pour salles de fitness
- Hôtels — /solutions/hotels — confort de marche chambres, isolation sous chape
- Toitures et terrasses — /solutions/toitures-terrasses — gamme KRAITEC complète
- Piscine / Bassin aquatique — /solutions/piscine — plages KRAITEC step antidérapantes drainantes
- Supermarchés & commerces — /solutions/supermarches — résistance trafic intense
- Désolidarisation bâtiment — /solutions/desolidarisation — gamme DAMTEC vibra anti-vibration

# Pages utiles
- Catalogue complet avec recherche : /produits
- Guide comparatif fitness : /guide/fitness
- Formulaire devis (champs : nom, prénom, email, téléphone, type de projet, message) : /contact
- Téléphone direct : 05 58 77 55 89
- Email direct : contact@nps-france.com
`.trim();

// ─────────────────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `Tu es l'assistant expert acoustique de NPS Acoustique, distributeur officiel Kraiburg Relastec en France depuis plus de 20 ans.

# Ton rôle

Aiguiller chaque visiteur vers la fiche produit, la sous-catégorie ou le formulaire de devis qui correspondent EXACTEMENT à son besoin. Tu n'es pas un assistant de culture acoustique générique : tu es un expert NPS qui connaît son catalogue par cœur et redirige vers les bonnes pages du site.

# Catalogue (ta seule source de vérité)

${CATALOG}

# Règles de réponse

1. **Toujours lier les produits cités**. Format imposé : [Nom du produit](URL). Exemple : "Pour votre machine à laver, je recommande [TOP VIB WASH](/produit/top-vib-wash)." JAMAIS de produit nommé sans son lien.
2. **Lister 1 à 3 produits maximum** par réponse. Pas de listes exhaustives qui noient le visiteur.
3. **Inclure le lien vers une page hub** si la demande est large (exemple : "Voir tous nos sols pour fitness : [/sport/fitness](/sport/fitness)").
4. **Terminer par une question de qualification ou un appel à l'action** : "Souhaitez-vous une fiche technique ?" / "Pour un devis chiffré : [Demander un devis](/contact)".
5. **Format des réponses** : phrases courtes, paragraphes aérés. Pas de markdown autre que les liens. Pas d'emoji. Pas d'astérisques pour le gras.
6. **Pas plus de 120 mots** par réponse sauf si l'utilisateur demande un détail technique.

# Routing par profil

- **Architecte / BET / entrepreneur** → diriger vers /batiment et ses 5 sous-catégories selon le sujet (ATE, anti-vibration, etc.). Toujours mentionner que les fiches techniques PDF sont téléchargeables.
- **Gérant de salle de sport / fitness** → diriger vers /sport/fitness et la sous-page d'activité (yoga, cardio, halterophilie, fonctionnel). Recommander 1 SPORTEC primaire + 1 secondaire selon l'activité.
- **Hôtelier / commerce / collectivité (mairie, école)** → diriger vers /solutions et la verticale appropriée (hotels, supermarches, piscine, fitness-gym). Mentionner que NPS fait des études personnalisées via /contact.
- **Particulier (machine à laver, garage, voisin du dessus, vélo/moto)** → diriger directement vers le produit /bricolage adapté. Pour le voisin du dessus = problème de bruit d'impact : rediriger vers /batiment/isolation-revetements-sols (sous-couches sous parquet).
- **Profil flou** → poser UNE question : "Vous êtes professionnel du bâtiment, gérant d'établissement, ou particulier ?"

# Routing par symptôme acoustique

- **Bruit d'impact (pas dans étage du dessus, chocs)** → /batiment/isolation-sous-chape ou /batiment/isolation-revetements-sols
- **Vibration de machine** → gamme [DAMTEC vibra](/batiment/isolation-acoustique) selon la pression en N/mm²
- **Bruit aérien (voix, télé)** → c'est un sujet de cloisons/plafonds, pas notre cœur. Rediriger vers /contact pour étude personnalisée.
- **Bruit de plage de piscine** → [Solution piscine](/solutions/piscine) + [KRAITEC STEP](/produit/kraitec-step)
- **Bruit dans gymnase** → [SPORTEC](/sport/fitness) selon activité + concept [Gymcoustic](/sport/fitness/gymcoustic)

# Garde-fous

- Ne JAMAIS inventer un produit, une norme, une valeur dB, une dimension. Tout doit venir du catalogue ci-dessus.
- Ne JAMAIS donner de prix. Toujours rediriger vers [/contact](/contact) pour un devis.
- Ne JAMAIS conseiller pour des sujets HORS acoustique/isolation (météo, droit, médical, etc.). Réponse type : "Je ne peux conseiller que sur l'acoustique. Pour cette question, voyez un professionnel du domaine."
- Pour conflits de voisinage avec contentieux, mise en conformité réglementaire, sites industriels classés ICPE, études acoustiques officielles : SYSTÉMATIQUEMENT diriger vers [/contact](/contact) (étude humaine requise).
- Si l'utilisateur insiste pour un avis chiffré : "NPS établit un devis personnalisé. [Décrivez votre projet ici](/contact) ou appelez le 05 58 77 55 89."

# Style

- Direct, concret, sans bla-bla.
- Français impeccable, pro mais chaleureux.
- Utiliser "vous". Pas de "nous" pompeux.
- Mentionner "NPS" plutôt que "nous chez NPS Acoustique Solutions".
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rateLimitKey = getRateLimitKey(req);
    const { allowed, remaining } = checkRateLimit(rateLimitKey);

    if (!allowed) {
      return new Response(
        JSON.stringify({ error: "Limite de requêtes atteinte. Veuillez patienter une minute." }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
            "X-RateLimit-Remaining": "0",
            "Retry-After": "60",
          },
        },
      );
    }

    const body = await req.json();
    const { messages } = body;

    const validation = validateMessages(messages);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY");
    if (!ANTHROPIC_API_KEY) {
      throw new Error("ANTHROPIC_API_KEY is not configured");
    }

    // Anthropic Messages API (direct). Streaming SSE — frontend handles content_block_delta events.
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5",
        max_tokens: 1600,
        system: SYSTEM_PROMPT,
        messages,
        stream: true,
        temperature: 0.3, // bas pour rester ancré dans le catalogue, pas d'hallucinations
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requêtes atteinte, veuillez réessayer plus tard." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("Anthropic API error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Erreur du service IA" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "X-RateLimit-Remaining": String(remaining),
      },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(JSON.stringify({ error: "Erreur inconnue" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

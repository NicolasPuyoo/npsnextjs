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
44 produits répartis en 3 catégories (Bâtiment, Sport, Bricolage) + 6 solutions sectorielles.

# Produits Bâtiment

## Anti-vibration / désolidarisation (gamme DAMTEC vibra)
- DAMTEC® VIBRA 30 — /produit/damtec-vibra-30 — anti-vibration légère, plage 0,03 - 0,07 N/mm²
- DAMTEC® VIBRA 50 — /produit/damtec-vibra-50 — anti-vibration légère, plage 0,05 - 0,15 N/mm²
- DAMTEC® VIBRA 100 — /produit/damtec-vibra-100 — anti-vibration moyenne, plage 0,10 - 0,30 N/mm²
- DAMTEC® VIBRA 170 — /produit/damtec-vibra-170 — anti-vibration moyenne, plage 0,07 - 0,70 N/mm²
- DAMTEC® VIBRA 280 — /produit/damtec-vibra-280 — anti-vibration soutenue, plage 0,28 - 1,50 N/mm²
- DAMTEC® VIBRA 700 — /produit/damtec-vibra-700 — anti-vibration lourde, plage 0,70 - 3,00 N/mm²
- DAMTEC® VIBRA 1500 — /produit/damtec-vibra-1500 — anti-vibration très lourde, plage 1,50 - 4,00 N/mm²
- ULTRAGYM (vibrafoam) — /produit/vibrafoam — élastomère PU à cellules fermées, machines/fondations/structures, 13 duretés
- VIBRADYN — /produit/vibradyn — élastomère PU haute résilience, charges dynamiques intenses, machines industrielles
- Hub de catégorie : /batiment/isolation-acoustique

## Sous chape flottante avec ATE
- DAMTEC® ESTRA — /produit/damtec-estra — sous-couche profilée pour chape flottante ou fondations machines
- DAMTEC® ESTRA 3D — /produit/damtec-estra-3d — version 3D, supermarchés, entrepôts, bâtiments commerciaux
- DAMTEC® WAVE 3D — /produit/damtec-wave-3d — granulat mousse PU 3D, chape flottante ou fondations
- DAMTEC® 3D 17/8 — /produit/damtec-3d-17-8 — fibres caoutchouc fines, chape flottante ou sèche, constructions bois
- Hub de catégorie : /batiment/isolation-sous-chape

## Sous revêtements de sols (parquet, stratifié, moquette, vinyle, carrelage)
- DAMTEC® STANDARD — /produit/damtec-standard — produit universel sous parquet/stratifié/tapis/céramique/linoleum/PVC
- DAMTEC® BLACK UNI — /produit/damtec-black-uni — sous stratifiés/parquets/moquettes en pose libre, finition noire
- DAMTEC® BLACK UNI B1 — /produit/damtec-black-uni-b1 — version coupe-feu (B1) pour ERP
- DAMTEC® ITAPUR — /produit/damtec-itapur — sous parquets, laminés, vinyle, granulats caoutchouc + polyuréthane
- DAMTEC® ITAPUR B1 — /produit/damtec-itapur-b1 — version ignifugée (Bfl-s1) pour bâtiments publics et commerciaux
- Hub de catégorie : /batiment/isolation-revetements-sols

## Sans ATE
- NPS TOP ACOUSTIQUE RUBBER ECOMAT — /produit/top-acoustique-rubber-ecomat — sous chape sans ATE
- TOP RUBBERCORK — /produit/top-rubbercork — mélange caoutchouc/liège, sous parquet/stratifié/moquette
- Hub de catégorie : /batiment/isolation-sans-ate

## Solutions extérieures (toitures, terrasses, drainage, photovoltaïque)
- KRAITEC® PROTECT — /produit/kraitec-protect — protection mécanique toiture-terrasse
- KRAITEC® STEP — /produit/kraitec-step — plot/dalle terrasse, passage piéton
- KRAITEC® STEP COLOR — /produit/kraitec-step-color — plot terrasse colorisé
- KRAITEC® STEP CROSS — /produit/kraitec-step-cross — plot terrasse, trafic léger
- KRAITEC® STEP NEON — /produit/kraitec-step-neon — plot terrasse, signalisation visible
- KRAITEC® STEP PLUS — /produit/kraitec-step-plus — plot terrasse renforcé
- KRAITEC® STEP ROOF FPO — /produit/kraitec-step-roof-fpo — protection toiture plate avec étanchéité films FPO
- KRAITEC® STEP ROOF PVC — /produit/kraitec-step-roof-pvc — protection toiture plate avec lés PVC
- KRAITEC® TOP — /produit/kraitec-top — drainage toiture-terrasse
- KRAITEC® TOP PLUS — /produit/kraitec-top-plus — drainage toiture renforcé
- KRAITEC® TOP DRAIN PLUS — /produit/kraitec-top-drain-plus — drainage toiture haute performance
- KRAITEC® TOP PV — /produit/kraitec-top-pv — sous panneaux photovoltaïques, couche séparatrice
- DAMTEC® SONIC — /produit/damtec-sonic — écran/natte acoustique extérieur (toits plats, balcons, loggias)
- DAMTEC® SONIC DRAIN PLUS — /produit/damtec-sonic-drain-plus — drainage acoustique extérieur
- DAMTEC® SONIC FIRE — /produit/damtec-sonic-fire — écran acoustique ignifugé (réduit charge incendie)
- Hub de catégorie : /batiment/solutions-exterieures

# Produits Sport (gamme SPORTEC)
- SPORTEC® COLOR — /produit/sportec-color — revêtement fitness, musculation, locaux techniques, salons, patinoires
- SPORTEC® STYLE — /produit/sportec-style — protection sols haltérophilie, zones de chute fortes charges
- SPORTEC® PUZZLE 2.0 — /produit/sportec-puzzle-2-0 — dalles modulaires emboîtables sans colle, cross-training
- SPORTEC® BASE FR — /produit/sportec-base-fr — sous-couche élastique coupe-feu Cfl-s1 pour ERP
- SPORTEC® BASE MS — /produit/sportec-base-ms — sous-couche drainante stable pour gazon synthétique et terrains multisport
- SPORTEC® ABSORBER PADS — /produit/sportec-absorber-pads — plots anti-vibration musculation lourde, deadlift/snatch
- Hub Sport : /sport — sous-pages : /sport/fitness (cardio, halterophilie, fonctionnel, yoga, plein-air, gymcoustic), /sport/outdoor (tennis, basket, athletisme, multi-jeux, sports-terrain, piscine, loisirs, golf), /sport/indoor, /sport/sports-hiver, /sport/stand-tir, /sport/commerce/{bureaux, magasins, salons-evenements, reeducation, ecoles-jardins}

# Produits Bricolage (particuliers, gamme PROFIMAT + TOP)
- PROFIMAT® BUMPY — /produit/profimat-bumpy — caoutchouc atelier, garage, cave
- PROFIMAT® WHEELPROTECT 13-18 — /produit/profimat-wheelprotect-13-18 — tapis stationnement vélo, petite moto
- PROFIMAT® WHEELPROTECT 18-22 — /produit/profimat-wheelprotect-18-22 — tapis stationnement moto, scooter
- TOP VIB WASH — /produit/top-vib-wash — tapis anti-vibration machine à laver / sèche-linge
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

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
        temperature: 0.3, // bas pour rester factuel et stick au catalogue
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requêtes atteinte, veuillez réessayer plus tard." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporairement indisponible." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
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

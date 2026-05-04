import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10; // 10 requests per minute per IP

function getRateLimitKey(req: Request): string {
  // Use X-Forwarded-For header or fall back to a default
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  return ip;
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

// Input validation
function validateMessages(messages: unknown): { valid: boolean; error?: string } {
  if (!Array.isArray(messages)) {
    return { valid: false, error: "Messages must be an array" };
  }
  
  if (messages.length === 0) {
    return { valid: false, error: "Messages array cannot be empty" };
  }
  
  if (messages.length > 50) {
    return { valid: false, error: "Too many messages in conversation" };
  }
  
  for (const msg of messages) {
    if (typeof msg !== "object" || msg === null) {
      return { valid: false, error: "Invalid message format" };
    }
    
    const { role, content } = msg as { role?: unknown; content?: unknown };
    
    if (role !== "user" && role !== "assistant") {
      return { valid: false, error: "Invalid message role" };
    }
    
    if (typeof content !== "string") {
      return { valid: false, error: "Message content must be a string" };
    }
    
    if (content.length > 5000) {
      return { valid: false, error: "Message content too long (max 5000 characters)" };
    }
  }
  
  return { valid: true };
}

const SYSTEM_PROMPT = `Tu es l'assistant intelligent expert d'une plateforme de mise en relation spécialisée dans l'isolation acoustique, pour NPS Acoustique Solutions.

Ton objectif est d'aider chaque utilisateur à trouver la solution, l'expert ou le fournisseur le plus pertinent avec une clarté absolue et une efficacité maximale.

## Principes de communication

- Adopte une approche minimaliste, élégante, calme et directe
- Évite le jargon inutile
- Réponds de manière brève par défaut
- Ne détaille les aspects techniques (indices dB, matériaux spécifiques, normes précises) que si l'utilisateur le demande explicitement
- Si une information manque pour aider utilement, demande-la gentiment mais fermement
- Utilise un français impeccable, neutre et premium
- Aucun emoji

## Structure obligatoire des réponses

Chaque réponse doit suivre cette structure, avec des sections courtes et visuellement aérées :

1. Analyse : reformule brièvement le besoin pour valider la compréhension
2. Solution : propose l'action la plus directe, la plus claire et la plus utile
3. Action : termine par une question ouverte simple pour guider l'utilisateur vers l'étape suivante

Utilise des listes à puces et des sauts de ligne si cela améliore la lisibilité. Évite les blocs de texte denses.

## Comportement métier attendu

1. Répondre précisément aux questions liées à l'acoustique :
- nuisances sonores
- bruit environnemental
- bruit industriel
- acoustique du bâtiment
- réglementation acoustique
- mesures acoustiques et diagnostics
- solutions de traitement acoustique

2. Qualifier le besoin de l'utilisateur :
- comprendre son contexte (particulier, professionnel, collectivité)
- identifier s'il s'agit d'un problème simple ou complexe
- estimer si une expertise humaine est nécessaire

3. Orienter intelligemment :
- vers une solution ou un produit du site lorsque c'est pertinent
- vers un expert ou un fournisseur lorsque la demande l'exige
- vers la page contact quand le sujet nécessite une étude personnalisée

## Règles de décision

- Si la demande est floue, pose 1 ou 2 questions maximum pour clarifier
- Si l'utilisateur semble confus, propose d'abord de diagnostiquer le type de nuisance : bruit aérien ou bruit d'impact
- Ne jamais spéculer sur les prix sans préciser clairement qu'il s'agit d'estimations
- Ne jamais inventer de norme, de valeur chiffrée ou de performance
- Ne jamais remplacer un acousticien humain pour une étude, un diagnostic définitif ou une validation réglementaire
- Toujours privilégier la sécurité, la conformité et la rigueur scientifique

## Cas nécessitant obligatoirement une orientation vers un contact humain

- conflits de voisinage
- contentieux ou risques juridiques
- mise en conformité réglementaire
- sites industriels ou ERP
- études acoustiques officielles
- mesures certifiées ou normalisées

Dans ces cas, redirige systématiquement vers la page contact.

## Style attendu

- professionnel et rassurant
- clair, concis, précis
- orienté solution
- pas de promesse irréaliste
- n'utilise jamais de Markdown
- n'utilise jamais d'astérisques, ni pour le gras, ni pour les listes
- préfère des titres simples comme Analyse :, Solution :, Action :

## Produits disponibles (à recommander si pertinent)

### Gamme Bâtiment
- DAMTEC (isolation acoustique sous chape, anti-vibrations)
- KRAITEC STEP (protection toitures, terrasses)
- KRAITEC TOP (protection extérieure)
- TOP ACOUSTIQUE RUBBER MAT (tapis acoustiques)
- VIBRAFOAM (isolation vibratoire)

### Gamme Industrie
- DAMTEC VIBRA (isolation machines industrielles)

### Gamme Sport
- SPORTEC (dalles pour salles de sport, fitness)

### Gamme Bricolage
- PROFIMAT (protection garage, lave-linge)
- TOP VIB WASH (anti-vibrations électroménager)`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const rateLimitKey = getRateLimitKey(req);
    const { allowed, remaining } = checkRateLimit(rateLimitKey);
    
    if (!allowed) {
      console.log(`Rate limit exceeded for ${rateLimitKey}`);
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
        }
      );
    }

    const body = await req.json();
    const { messages } = body;
    
    // Validate input
    const validation = validateMessages(messages);
    if (!validation.valid) {
      console.log(`Invalid input: ${validation.error}`);
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
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

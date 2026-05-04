import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5; // 5 emails per hour per IP

function getRateLimitKey(req: Request): string {
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

// Input validation and sanitization
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validatePhone(phone: string): boolean {
  if (!phone) return true; // Optional field
  // Allow common phone formats
  const phoneRegex = /^[\d\s\-+().]{0,20}$/;
  return phoneRegex.test(phone);
}

interface ContactEmailRequest {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const rateLimitKey = getRateLimitKey(req);
    const { allowed, remaining } = checkRateLimit(rateLimitKey);
    
    if (!allowed) {
      console.log(`Rate limit exceeded for contact form: ${rateLimitKey}`);
      return new Response(
        JSON.stringify({ error: "Trop de messages envoyés. Veuillez réessayer plus tard." }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
            "X-RateLimit-Remaining": "0",
            "Retry-After": "3600",
          },
        }
      );
    }

    const { nom, prenom, email, telephone, message }: ContactEmailRequest = await req.json();

    // Comprehensive input validation
    if (!nom || !prenom || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Tous les champs obligatoires doivent être remplis" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate field lengths
    if (nom.length > 100) {
      return new Response(
        JSON.stringify({ error: "Le nom est trop long (max 100 caractères)" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (prenom.length > 100) {
      return new Response(
        JSON.stringify({ error: "Le prénom est trop long (max 100 caractères)" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Le message est trop long (max 5000 caractères)" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Format d'email invalide" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate phone format
    if (!validatePhone(telephone || "")) {
      return new Response(
        JSON.stringify({ error: "Format de téléphone invalide" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Sanitize inputs for HTML email
    const safeNom = sanitizeHtml(nom);
    const safePrenom = sanitizeHtml(prenom);
    const safeEmail = sanitizeHtml(email);
    const safeTelephone = sanitizeHtml(telephone || "");
    const safeMessage = sanitizeHtml(message);

    // Send notification email to NPS
    const emailResponse = await resend.emails.send({
      from: "NPS Contact <contact@nps-france.com>",
      to: ["contact@nps-france.com"],
      subject: `Nouveau message de ${safePrenom} ${safeNom}`,
      html: `
        <h2>Nouveau message depuis le formulaire de contact</h2>
        <p><strong>Nom:</strong> ${safeNom}</p>
        <p><strong>Prénom:</strong> ${safePrenom}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Téléphone:</strong> ${safeTelephone || "Non renseigné"}</p>
        <hr />
        <h3>Message:</h3>
        <p>${safeMessage.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
        "X-RateLimit-Remaining": String(remaining),
      },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    // Don't expose internal error details to client
    return new Response(
      JSON.stringify({ error: "Une erreur est survenue. Veuillez réessayer." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);

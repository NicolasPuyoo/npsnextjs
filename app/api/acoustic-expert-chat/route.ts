import { NextRequest } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/chatPrompt";

export const dynamic = "force-dynamic";

type Message = { role: "user" | "assistant"; content: string };

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

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const messages = (body as { messages?: Message[] })?.messages;
  const validation = validateMessages(messages);
  if (!validation.valid) return json({ error: validation.error }, 400);

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!ANTHROPIC_API_KEY) {
    console.error("Chat: ANTHROPIC_API_KEY not configured");
    return json({ error: "Service IA non configuré" }, 500);
  }

  const upstream = await fetch("https://api.anthropic.com/v1/messages", {
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
      temperature: 0.3,
    }),
  });

  if (!upstream.ok) {
    if (upstream.status === 429) {
      return json({ error: "Limite de requêtes atteinte, veuillez réessayer plus tard." }, 429);
    }
    const errorText = await upstream.text().catch(() => "");
    console.error("Anthropic API error:", upstream.status, errorText);
    return json({ error: "Erreur du service IA" }, 500);
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
    },
  });
}

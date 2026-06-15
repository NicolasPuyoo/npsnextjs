"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const CHAT_URL = "/api/acoustic-expert-chat";

// Suggestions au premier ouverture pour pré-router le visiteur sans qu'il ait à
// rédiger une question — chaque clic envoie un message comme s'il avait tapé.
const QUICK_PROMPTS = [
  { label: "Je suis architecte / BET", value: "Je suis architecte / bureau d'études et je cherche une solution d'isolation acoustique pour un projet de bâtiment. Que me recommandez-vous ?" },
  { label: "Je gère une salle de sport", value: "Je gère une salle de sport / fitness et je cherche un revêtement de sol adapté. Que me recommandez-vous ?" },
  { label: "Je suis un particulier", value: "Je suis un particulier, j'ai un problème acoustique chez moi. Pouvez-vous m'aider ?" },
  { label: "Hôtel / commerce / mairie", value: "Je représente un établissement (hôtel, commerce, collectivité). Quelles solutions NPS proposez-vous pour mon secteur ?" },
];

// Parse markdown links [text](url) and render internal as Next Link, external as <a>.
// Preserve any other text. Strip stray markdown asterisks.
const renderAssistantContent = (raw: string) => {
  const cleaned = raw.replace(/\*\*?/g, "");
  const parts: Array<{ type: "text" | "link"; content: string; href?: string; isInternal?: boolean }> = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(cleaned)) !== null) {
    const [full, label, href] = match;
    if (match.index > lastIndex) {
      parts.push({ type: "text", content: cleaned.slice(lastIndex, match.index) });
    }
    const isInternal = href.startsWith("/") && !href.startsWith("//");
    parts.push({ type: "link", content: label, href, isInternal });
    lastIndex = match.index + full.length;
  }
  if (lastIndex < cleaned.length) {
    parts.push({ type: "text", content: cleaned.slice(lastIndex) });
  }
  if (parts.length === 0) {
    parts.push({ type: "text", content: cleaned });
  }
  return parts;
};

export const AcousticExpertChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const streamChat = async (userMessages: Message[]) => {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: userMessages }),
    });

    if (!resp.ok || !resp.body) {
      const errorData = await resp.json().catch(() => ({}));
      throw new Error(errorData.error || "Erreur de connexion");
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let assistantContent = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") break;

        try {
          const parsed = JSON.parse(jsonStr);
          // Accept both Anthropic native SSE (content_block_delta) and
          // OpenAI-compatible streaming (chat.completion.chunk). The Supabase
          // edge function may route via either provider.
          const anthropicChunk =
            parsed.type === "content_block_delta" && parsed.delta?.type === "text_delta"
              ? parsed.delta.text
              : undefined;
          const openaiChunk: string | undefined = parsed.choices?.[0]?.delta?.content;
          const chunk: string | undefined = anthropicChunk ?? openaiChunk;
          if (chunk) {
            assistantContent += chunk;
            setMessages((prev) => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant") {
                return prev.map((m, i) =>
                  i === prev.length - 1 ? { ...m, content: assistantContent } : m,
                );
              }
              return [...prev, { role: "assistant", content: assistantContent }];
            });
          }
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMessage: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    try {
      await streamChat(newMessages);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Désolé, une erreur s'est produite. Vous pouvez nous joindre directement au [05 58 77 55 89](tel:0558775589) ou via le [formulaire de contact](/contact).",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage(input);
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 h-14 w-14 rounded-full shadow-lg",
          "bg-primary hover:bg-primary/90 text-primary-foreground",
          isOpen && "hidden",
        )}
        size="icon"
        aria-label="Ouvrir le chat acoustique"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 w-[380px] max-w-[calc(100vw-32px)]",
          "bg-background border border-border rounded-2xl shadow-2xl",
          "flex flex-col overflow-hidden transition-all duration-300",
          isOpen ? "h-[600px] max-h-[calc(100vh-100px)] opacity-100" : "h-0 opacity-0 pointer-events-none",
        )}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-sm">Expert Acoustique</h3>
            <p className="text-xs opacity-80">NPS Acoustique • Conseil acoustique</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/10"
            aria-label="Fermer le chat"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          {messages.length === 0 && (
            <div className="text-sm">
              <p className="font-medium mb-2 text-foreground">Bienvenue.</p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Je vous oriente vers le produit ou la solution NPS qui correspond à votre besoin.
                Cliquez sur votre profil ou posez votre question.
              </p>
              <div className="grid grid-cols-1 gap-2">
                {QUICK_PROMPTS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q.value)}
                    className="text-left text-sm px-3 py-2.5 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors text-foreground"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md",
                  )}
                >
                  {message.role === "assistant" ? (
                    <p className="whitespace-pre-wrap">
                      {renderAssistantContent(message.content).map((part, i) => {
                        if (part.type === "text") return <span key={i}>{part.content}</span>;
                        if (part.isInternal) {
                          return (
                            <Link
                              key={i}
                              href={part.href!}
                              onClick={() => setIsOpen(false)}
                              className="text-primary font-medium underline underline-offset-2 hover:opacity-80"
                            >
                              {part.content}
                            </Link>
                          );
                        }
                        return (
                          <a
                            key={i}
                            href={part.href}
                            target={part.href!.startsWith("tel:") || part.href!.startsWith("mailto:") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="text-primary font-medium underline underline-offset-2 hover:opacity-80"
                          >
                            {part.content}
                          </a>
                        );
                      })}
                    </p>
                  ) : (
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  )}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-2.5">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Footer CTA + input */}
        <div className="border-t border-border">
          {messages.length > 0 && (
            <div className="px-4 py-2 border-b border-border bg-muted/30 text-center">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-xs text-primary font-medium hover:underline"
              >
                Demander un devis personnalisé →
              </Link>
            </div>
          )}
          <form onSubmit={handleSubmit} className="p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Décrivez votre besoin…"
                disabled={isLoading}
                className="flex-1"
                aria-label="Votre message"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                aria-label="Envoyer le message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

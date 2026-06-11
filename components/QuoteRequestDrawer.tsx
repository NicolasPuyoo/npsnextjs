"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { Product } from "@/data/products";

// Map category → projectType select option (même mapping que /contact pour
// que la edge function send-contact-email reçoive un payload cohérent).
const categoryToProjectType: Record<string, string> = {
  batiment: "batiment",
  sport: "sport",
  bricolage: "bricolage",
};

type Step = "project" | "contact";

type FormState = {
  // Étape 1 — projet. "volume" est un champ libre : selon le produit (revêtement,
  // butoir parking, berceau de pneus, dalle anti-vibratoire…), l'utilisateur tape ce
  // qu'il sait — surface en m², nombre d'unités, charge à supporter, etc.
  volume: string;
  profil: string;
  delai: string;
  details: string;
  // Étape 2 — coordonnées
  nom: string;
  prenom: string;
  entreprise: string;
  email: string;
  telephone: string;
};

const initialForm: FormState = {
  volume: "",
  profil: "",
  delai: "",
  details: "",
  nom: "",
  prenom: "",
  entreprise: "",
  email: "",
  telephone: "",
};

interface QuoteRequestDrawerProps {
  /** Produit pour lequel le devis est demandé. Sert au pré-remplissage du message envoyé à NPS. */
  product: Product;
  /** Variante du bouton trigger (utilisée 2x sur la fiche produit : hero + sidebar). */
  triggerLabel?: string;
  triggerClassName?: string;
  /** Si true, le bouton occupe toute la largeur disponible. */
  triggerFullWidth?: boolean;
}

export const QuoteRequestDrawer = ({
  product,
  triggerLabel = "Demander un devis",
  triggerClassName,
  triggerFullWidth,
}: QuoteRequestDrawerProps) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("project");
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset quand on ferme le drawer (sinon en rouvrant on tombe sur l'étape 2 ou
  // sur des champs d'une demande précédente — pas top en UX).
  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setStep("project");
      setForm(initialForm);
    }
  };

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // Validation simple par étape. On garde basique : tout est gentle, pas d'overlay
  // rouge agressif — juste un bouton désactivé pour rester sobre. Le champ "volume"
  // est OPTIONNEL (certains visiteurs ne savent pas chiffrer leur besoin, surtout
  // en phase information) — on ne bloque pas la progression dessus.
  const canGoNext = form.profil.length > 0 && form.delai.length > 0;
  const canSubmit =
    form.nom.trim().length > 0 &&
    form.prenom.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.email.includes("@");

  const buildMessage = () => {
    const lines: string[] = [];
    lines.push(`Demande de devis pour : ${product.name}`);
    lines.push(`Référence produit : ${product.slug}`);
    lines.push("");
    lines.push("--- Projet ---");
    if (form.volume) lines.push(`Volume / quantité estimée : ${form.volume}`);
    if (form.profil) lines.push(`Profil demandeur : ${form.profil}`);
    if (form.delai) lines.push(`Délai souhaité : ${form.delai}`);
    if (form.details) {
      lines.push("");
      lines.push("Détails complémentaires :");
      lines.push(form.details);
    }
    if (form.entreprise) {
      lines.push("");
      lines.push(`Entreprise : ${form.entreprise}`);
    }
    return lines.join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setIsSubmitting(true);

    const payload = {
      nom: form.nom,
      prenom: form.prenom,
      email: form.email,
      telephone: form.telephone,
      projectType: categoryToProjectType[product.category] || product.category,
      message: buildMessage(),
    };

    try {
      // Lazy-load Supabase client uniquement au submit (économie ~130 KB au paint).
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: payload,
      });
      if (error) throw error;

      toast.success("Votre demande de devis a été envoyée. Nous revenons vers vous rapidement.");
      handleOpenChange(false);
    } catch (error) {
      console.error("Quote request error:", error);
      // Fallback mailto si Supabase est down — le visiteur n'est jamais bloqué.
      const subject = encodeURIComponent(`Demande de devis NPS — ${product.name}`);
      const body = encodeURIComponent(
        `${payload.message}\n\n--- Contact ---\nNom : ${payload.nom} ${payload.prenom}\nEmail : ${payload.email}\nTéléphone : ${payload.telephone}`,
      );
      const mailtoUrl = `mailto:contact@nps-acoustique.fr?subject=${subject}&body=${body}`;
      toast.error(
        "Impossible d'envoyer la demande directement. Nous ouvrons votre messagerie en secours.",
        {
          action: {
            label: "Ouvrir email",
            onClick: () => {
              window.location.href = mailtoUrl;
            },
          },
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button
          className={[
            "rounded-full",
            triggerFullWidth ? "w-full" : "",
            triggerClassName ?? "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {triggerLabel}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-0 flex flex-col"
      >
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
          <SheetTitle className="text-xl">Demander un devis</SheetTitle>
          <SheetDescription className="text-sm">
            {product.name} — réponse personnalisée sous 24 à 48 h.
          </SheetDescription>

          {/* Stepper sobre — 2 puces avec libellés courts */}
          <div className="flex items-center gap-2 pt-4">
            <StepIndicator label="Projet" active={step === "project"} done={step === "contact"} />
            <div className="h-px flex-1 bg-border" />
            <StepIndicator label="Contact" active={step === "contact"} done={false} />
          </div>
        </SheetHeader>

        {/* Body — scrollable si le contenu déborde */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
            {step === "project" && (
              <>
                <Field label="Volume ou quantité estimée" htmlFor="qr-volume">
                  <Input
                    id="qr-volume"
                    type="text"
                    placeholder="ex. 250 m² / 4 unités / charge 500 kg/m²"
                    value={form.volume}
                    onChange={(e) => updateField("volume", e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    Indiquez ce que vous savez : surface, nombre d'unités, charge à supporter ou
                    configuration. Optionnel — vous pouvez préciser à l'oral plus tard.
                  </p>
                </Field>

                <Field label="Vous êtes" htmlFor="qr-profil">
                  <select
                    id="qr-profil"
                    value={form.profil}
                    onChange={(e) => updateField("profil", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">— Sélectionner —</option>
                    <option value="bet-acousticien">Bureau d'études / Acousticien</option>
                    <option value="architecte">Architecte / Maître d'œuvre</option>
                    <option value="entreprise-generale">Entreprise générale</option>
                    <option value="installateur">Installateur / Poseur</option>
                    <option value="proprietaire">Propriétaire / Maître d'ouvrage</option>
                    <option value="particulier">Particulier</option>
                    <option value="autre">Autre</option>
                  </select>
                </Field>

                <Field label="Délai souhaité" htmlFor="qr-delai">
                  <select
                    id="qr-delai"
                    value={form.delai}
                    onChange={(e) => updateField("delai", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">— Sélectionner —</option>
                    <option value="immediat">Immédiat / urgent</option>
                    <option value="1-3-mois">1 à 3 mois</option>
                    <option value="3-6-mois">3 à 6 mois</option>
                    <option value="6-mois-plus">Au-delà de 6 mois</option>
                    <option value="information">Phase information / chiffrage</option>
                  </select>
                </Field>

                <Field label="Détails complémentaires (optionnel)" htmlFor="qr-details">
                  <Textarea
                    id="qr-details"
                    rows={4}
                    placeholder="Contexte du projet, contraintes acoustiques, configuration…"
                    value={form.details}
                    onChange={(e) => updateField("details", e.target.value)}
                  />
                </Field>
              </>
            )}

            {step === "contact" && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Prénom" htmlFor="qr-prenom">
                    <Input
                      id="qr-prenom"
                      autoComplete="given-name"
                      value={form.prenom}
                      onChange={(e) => updateField("prenom", e.target.value)}
                    />
                  </Field>
                  <Field label="Nom" htmlFor="qr-nom">
                    <Input
                      id="qr-nom"
                      autoComplete="family-name"
                      value={form.nom}
                      onChange={(e) => updateField("nom", e.target.value)}
                    />
                  </Field>
                </div>

                <Field label="Entreprise (optionnel)" htmlFor="qr-entreprise">
                  <Input
                    id="qr-entreprise"
                    autoComplete="organization"
                    placeholder="Nom de votre structure"
                    value={form.entreprise}
                    onChange={(e) => updateField("entreprise", e.target.value)}
                  />
                </Field>

                <Field label="Email" htmlFor="qr-email">
                  <Input
                    id="qr-email"
                    type="email"
                    autoComplete="email"
                    placeholder="vous@exemple.fr"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </Field>

                <Field label="Téléphone (optionnel)" htmlFor="qr-tel">
                  <Input
                    id="qr-tel"
                    type="tel"
                    autoComplete="tel"
                    placeholder="06 XX XX XX XX"
                    value={form.telephone}
                    onChange={(e) => updateField("telephone", e.target.value)}
                  />
                </Field>

                {/* Récap rapide étape 1 */}
                <div className="rounded-2xl bg-muted/40 p-4 text-xs text-muted-foreground space-y-1">
                  <p className="font-medium text-foreground">Récap de votre demande</p>
                  <p>Produit : {product.name}</p>
                  {form.volume && <p>Volume / quantité : {form.volume}</p>}
                  {form.profil && <p>Profil : {profileLabel(form.profil)}</p>}
                  {form.delai && <p>Délai : {delaiLabel(form.delai)}</p>}
                </div>
              </>
            )}
          </div>

          {/* Footer — boutons de navigation entre étapes / submit */}
          <div className="px-6 py-4 border-t border-border bg-background">
            {step === "project" ? (
              <div className="flex items-center justify-end gap-2">
                <Button
                  type="button"
                  onClick={() => setStep("contact")}
                  disabled={!canGoNext}
                  className="rounded-full"
                >
                  Suivant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setStep("project")}
                  className="rounded-full"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour
                </Button>
                <Button
                  type="submit"
                  disabled={!canSubmit || isSubmitting}
                  className="rounded-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi…
                    </>
                  ) : (
                    "Envoyer la demande"
                  )}
                </Button>
              </div>
            )}
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

// Petit indicateur d'étape — chip sobre, sans couleur agressive. Active = couleur primaire,
// done = check ; pas pris = atténué.
const StepIndicator = ({
  label,
  active,
  done,
}: {
  label: string;
  active: boolean;
  done: boolean;
}) => {
  const isHighlighted = active || done;
  return (
    <div className="flex items-center gap-2 text-xs">
      <span
        className={[
          "h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-semibold",
          isHighlighted
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground",
        ].join(" ")}
      >
        {done ? <Check className="h-3 w-3" /> : active ? "1" : "2"}
      </span>
      <span
        className={
          isHighlighted ? "text-foreground font-medium" : "text-muted-foreground"
        }
      >
        {label}
      </span>
    </div>
  );
};

const Field = ({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <Label htmlFor={htmlFor} className="text-sm text-foreground">
      {label}
    </Label>
    {children}
  </div>
);

const profileLabel = (value: string) => {
  switch (value) {
    case "bet-acousticien":
      return "BET / Acousticien";
    case "architecte":
      return "Architecte / Maître d'œuvre";
    case "entreprise-generale":
      return "Entreprise générale";
    case "installateur":
      return "Installateur / Poseur";
    case "proprietaire":
      return "Maître d'ouvrage";
    case "particulier":
      return "Particulier";
    default:
      return value;
  }
};

const delaiLabel = (value: string) => {
  switch (value) {
    case "immediat":
      return "Immédiat / urgent";
    case "1-3-mois":
      return "1 à 3 mois";
    case "3-6-mois":
      return "3 à 6 mois";
    case "6-mois-plus":
      return "Au-delà de 6 mois";
    case "information":
      return "Phase information";
    default:
      return value;
  }
};

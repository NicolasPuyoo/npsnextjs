"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// Calculateur épaisseur sous-chape : 4 questions → recommandation produit + ΔLw cible.
// Logique simple, transparente. Aim is utility, not pseudoscience.

type Destination = "logement" | "hotel" | "ecole" | "bureau" | "renovation";
type Chape = "ciment" | "anhydrite" | "seche";
type Cible = "norme" | "premium";

const recommend = (
  dest: Destination,
  chape: Chape,
  cible: Cible,
  feu: boolean,
): { product: string; slug: string; epaisseur: string; deltaLw: string; rationale: string } => {
  if (feu || dest === "hotel" || dest === "ecole") {
    if (cible === "premium") {
      return {
        product: "DAMTEC Estra 17 mm",
        slug: "damtec-estra",
        epaisseur: "17 mm",
        deltaLw: "≈ 30 dB",
        rationale:
          "Performance premium + ATE. Pour ERP / hôtels visant un confort acoustique élevé (≤ 50 dB d'impact).",
      };
    }
    return {
      product: "DAMTEC Black Uni B1 8 mm",
      slug: "damtec-black-uni-b1",
      epaisseur: "8 mm",
      deltaLw: "≈ 22-24 dB",
      rationale:
        "ATE + classement feu B1 obligatoire en ERP / hôtels. Bon compromis épaisseur / performance.",
    };
  }

  if (dest === "renovation" || chape === "seche") {
    if (cible === "premium") {
      return {
        product: "DAMTEC Wave 3D 7 mm",
        slug: "damtec-wave-3d",
        epaisseur: "7 mm",
        deltaLw: "≈ 19-21 dB",
        rationale:
          "Profil 3D anti-tassement, idéal sous parquet flottant en rénovation. Performance acoustique élevée pour faible épaisseur.",
      };
    }
    return {
      product: "TOP Rubbercork 6 mm",
      slug: "top-rubbercork",
      epaisseur: "6 mm",
      deltaLw: "≈ 18 dB",
      rationale:
        "Caoutchouc + liège, économique, polyvalent. Adapté rénovation hors champ DTU et sous parquet.",
    };
  }

  if (dest === "bureau") {
    return {
      product: "DAMTEC Black Uni 8 mm",
      slug: "damtec-black-uni",
      epaisseur: "8 mm",
      deltaLw: "≈ 22-24 dB",
      rationale:
        "ATE, performance ciblée pour open space NRT. Bon ratio épaisseur / dB.",
    };
  }

  // dest === "logement"
  if (cible === "premium") {
    return {
      product: "DAMTEC Estra 17 mm",
      slug: "damtec-estra",
      epaisseur: "17 mm",
      deltaLw: "≈ 30 dB",
      rationale:
        "ATE, performance haut de gamme. Idéal pour viser ≤ 50 dB d'impact en logement collectif.",
    };
  }
  return {
    product: "DAMTEC Standard 8 mm",
    slug: "damtec-standard",
    epaisseur: "8 mm",
    deltaLw: "≈ 26 dB",
    rationale:
      "ATE, polyvalent, conforme NRA L'nT,w ≤ 58 dB pour logement collectif neuf.",
  };
};

const EpaisseurCalculator = () => {
  const [dest, setDest] = useState<Destination>("logement");
  const [chape, setChape] = useState<Chape>("ciment");
  const [cible, setCible] = useState<Cible>("norme");
  const [feu, setFeu] = useState<boolean>(false);

  const reco = useMemo(() => recommend(dest, chape, cible, feu), [dest, chape, cible, feu]);

  return (
    <aside className="my-12 rounded-3xl border border-primary/30 bg-card shadow-card p-6 lg:p-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">
          Calculateur expert
        </p>
        <h3 className="text-2xl font-bold text-foreground">
          Quelle sous-couche pour votre projet ?
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          Répondez à 4 questions, on vous indique le produit recommandé et la performance attendue.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Field label="Destination">
          <select
            value={dest}
            onChange={(e) => setDest(e.target.value as Destination)}
            className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="logement">Logement collectif neuf (NRA)</option>
            <option value="hotel">Hôtel / résidence service</option>
            <option value="ecole">École / crèche / santé</option>
            <option value="bureau">Bureau / open space (NRT)</option>
            <option value="renovation">Rénovation (hors DTU)</option>
          </select>
        </Field>

        <Field label="Type de chape">
          <select
            value={chape}
            onChange={(e) => setChape(e.target.value as Chape)}
            className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="ciment">Chape ciment / mortier</option>
            <option value="anhydrite">Chape anhydrite (sulfate de calcium)</option>
            <option value="seche">Chape sèche / parquet flottant</option>
          </select>
        </Field>

        <Field label="Cible de performance">
          <select
            value={cible}
            onChange={(e) => setCible(e.target.value as Cible)}
            className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="norme">Conformité norme (NRA / NRT)</option>
            <option value="premium">Confort premium (5-8 dB de marge)</option>
          </select>
        </Field>

        <Field label="Classement feu B1 requis ?">
          <div className="flex gap-2 h-12">
            <button
              type="button"
              onClick={() => setFeu(false)}
              className={`flex-1 rounded-xl border transition-colors font-medium ${
                !feu
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary"
              }`}
            >
              Non
            </button>
            <button
              type="button"
              onClick={() => setFeu(true)}
              className={`flex-1 rounded-xl border transition-colors font-medium ${
                feu
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary"
              }`}
            >
              Oui (ERP)
            </button>
          </div>
        </Field>
      </div>

      <div className="rounded-2xl bg-primary/10 border border-primary/30 p-5">
        <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">
          Recommandation
        </p>
        <h4 className="text-xl font-bold text-foreground mb-1">{reco.product}</h4>
        <div className="flex flex-wrap gap-3 text-sm text-foreground mb-3">
          <span className="bg-primary/20 rounded-full px-3 py-1 font-medium">
            Épaisseur : {reco.epaisseur}
          </span>
          <span className="bg-primary/20 rounded-full px-3 py-1 font-medium">
            ΔLw : {reco.deltaLw}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{reco.rationale}</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Link
            href={`/produit/${reco.slug}`}
            className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-5 py-2.5 font-medium hover:opacity-90 transition-opacity text-sm"
          >
            Voir la fiche produit →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-foreground text-background rounded-full px-5 py-2.5 font-medium hover:opacity-90 transition-opacity text-sm"
          >
            Devis personnalisé
          </Link>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        Cette recommandation est indicative. Pour un dimensionnement précis, contactez notre équipe avec votre cahier des charges (DCE, surface, contraintes acoustiques).
      </p>
    </aside>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-sm font-medium text-foreground mb-2 block">{label}</span>
    {children}
  </label>
);

export default EpaisseurCalculator;

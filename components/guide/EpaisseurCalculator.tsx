"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// Calculateur d'orientation sous-couche : 4 questions → produit recommandé.
// Mapping basé sur les vrais produits + specs de data/products.ts.
// Indicatif uniquement — toujours valider avec la fiche technique fabricant.

type Position = "sous-chape" | "sous-revetement";
type Ouvrage = "neuf-dtu" | "renovation" | "erp";
type Cible = "norme" | "premium";

type Reco = {
  product: string;
  slug: string;
  perf: string;
  rationale: string;
};

const recommend = (
  position: Position,
  ouvrage: Ouvrage,
  cible: Cible,
  feu: boolean,
): Reco => {
  // Sous chape (entre plancher porteur et chape flottante)
  if (position === "sous-chape") {
    if (cible === "premium") {
      return {
        product: "DAMTEC Wave 3D",
        slug: "damtec-wave-3d",
        perf: "ΔLw 25-35 dB selon configuration",
        rationale:
          "Profilé 3D, performance élevée. ΔLw jusqu'à 35 dB en 17/8 mm sous chape ciment 80 mm.",
      };
    }
    return {
      product: "DAMTEC Estra",
      slug: "damtec-estra",
      perf: "ΔLw 19-21 dB sous chape ciment 50 mm",
      rationale:
        "Granulat caoutchouc, polyvalent. Disponible en 4, 6 et 8 mm selon votre épaisseur cible.",
    };
  }

  // Sous revêtement (entre chape ou plancher et revêtement final)
  if (ouvrage === "renovation" && !feu) {
    return {
      product: "TOP Rubbercork",
      slug: "top-rubbercork",
      perf: "ΔLw 18-20 dB",
      rationale:
        "Caoutchouc + liège, certifié A+ et Blue Angel. Adapté rénovation hors champ DTU.",
    };
  }

  if (feu || ouvrage === "erp") {
    return {
      product: "DAMTEC Black Uni B1",
      slug: "damtec-black-uni-b1",
      perf: "ΔLw 16-25 dB selon revêtement",
      rationale:
        "Classement feu B1 (ERP). Disponible en 2-6 mm, faible épaisseur possible.",
    };
  }

  if (cible === "premium") {
    return {
      product: "DAMTEC Standard",
      slug: "damtec-standard",
      perf: "ΔLw 18 dB (carrelage) à 29 dB (moquette)",
      rationale:
        "Caoutchouc + liège, granulat fin. Performance dépend du revêtement final — voir fiche technique.",
    };
  }

  return {
    product: "DAMTEC Black Uni",
    slug: "damtec-black-uni",
    perf: "ΔLw 16-25 dB selon revêtement",
    rationale:
      "Mousse PU + liège, faible épaisseur (2-6 mm). Bon compromis pour parquet, stratifié, carrelage.",
  };
};

const EpaisseurCalculator = () => {
  const [position, setPosition] = useState<Position>("sous-chape");
  const [ouvrage, setOuvrage] = useState<Ouvrage>("neuf-dtu");
  const [cible, setCible] = useState<Cible>("norme");
  const [feu, setFeu] = useState<boolean>(false);

  const reco = useMemo(() => recommend(position, ouvrage, cible, feu), [position, ouvrage, cible, feu]);

  return (
    <aside className="my-12 rounded-3xl border border-primary/30 bg-card shadow-card p-6 lg:p-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">
          Orientation produit
        </p>
        <h3 className="text-2xl font-bold text-foreground">
          Quelle sous-couche pour votre projet ?
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          Indication produit selon 4 critères. Pour le dimensionnement précis, voir la fiche technique du produit recommandé ou demandez un devis.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Field label="Position de la sous-couche">
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value as Position)}
            className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="sous-chape">Sous chape flottante (gros oeuvre)</option>
            <option value="sous-revetement">Sous revêtement (parquet, carrelage…)</option>
          </select>
        </Field>

        <Field label="Type d'ouvrage">
          <select
            value={ouvrage}
            onChange={(e) => setOuvrage(e.target.value as Ouvrage)}
            className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="neuf-dtu">Neuf sous DTU</option>
            <option value="erp">ERP (hôtel, école, santé)</option>
            <option value="renovation">Rénovation (hors DTU)</option>
          </select>
        </Field>

        <Field label="Cible de performance">
          <select
            value={cible}
            onChange={(e) => setCible(e.target.value as Cible)}
            className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="norme">Conformité norme</option>
            <option value="premium">Confort acoustique élevé</option>
          </select>
        </Field>

        <Field label="Classement feu requis ?">
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
              Oui (B1 / Bfl-s1)
            </button>
          </div>
        </Field>
      </div>

      <div className="rounded-2xl bg-primary/10 border border-primary/30 p-5">
        <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">
          Produit suggéré
        </p>
        <h4 className="text-xl font-bold text-foreground mb-1">{reco.product}</h4>
        <p className="text-sm text-foreground mb-3 font-medium">{reco.perf}</p>
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
        Suggestion indicative. Les valeurs ΔLw varient selon la configuration (épaisseur de chape, type de revêtement). Toujours valider avec la fiche technique du produit et votre bureau de contrôle.
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

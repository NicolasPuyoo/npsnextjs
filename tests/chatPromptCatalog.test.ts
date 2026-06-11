import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { allProducts } from "@/data/products";

// Lit le source de l'edge function en texte brut et extrait toutes les URLs
// /produit/<slug> citées dans le system prompt CATALOG. Vérifie qu'elles
// renvoient toutes vers un vrai produit. Détecte la dérive quand le catalogue
// devient obsolète après une modif data.
//
// Vérifie aussi qu'aucune URL /solutions/<id> ne traîne dans le prompt — la
// rubrique /solutions a été supprimée du site, donc le chat ne doit jamais
// l'inviter.

const edgeSrc = readFileSync(
  resolve(__dirname, "../supabase/functions/acoustic-expert-chat/index.ts"),
  "utf-8",
);

describe("chat edge function catalog stays in sync with data", () => {
  it("every /produit/<slug> mentioned in the system prompt exists", () => {
    const cited = [...edgeSrc.matchAll(/\/produit\/([a-z0-9-]+)/g)].map((m) => m[1]);
    const realSlugs = new Set(allProducts.map((p) => p.slug));
    const ghosts = [...new Set(cited)].filter((s) => !realSlugs.has(s));
    expect(ghosts).toEqual([]);
  });

  it("the system prompt no longer references the removed /solutions section", () => {
    const cited = [
      ...edgeSrc.matchAll(/\/solutions\/[a-z0-9-]+/g),
    ].map((m) => m[0]);
    expect(cited).toEqual([]);
  });

  it("the catalog cites at least 40 products (no major silent loss)", () => {
    const cited = new Set(
      [...edgeSrc.matchAll(/\/produit\/([a-z0-9-]+)/g)].map((m) => m[1]),
    );
    expect(cited.size).toBeGreaterThanOrEqual(40);
  });
});

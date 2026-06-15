import { describe, it, expect } from "vitest";
import { allProducts } from "@/data/products";
import { CATALOG, SYSTEM_PROMPT } from "@/lib/chatPrompt";

// Vérifie que toutes les URLs /produit/<slug> citées dans le system prompt
// CATALOG existent dans data/products.ts. Détecte la dérive quand le catalogue
// devient obsolète après une modif data.
//
// Vérifie aussi qu'aucune URL /solutions/<id> ne traîne dans le prompt — la
// rubrique /solutions a été supprimée du site, donc le chat ne doit jamais
// l'inviter.

const promptSrc = `${CATALOG}\n${SYSTEM_PROMPT}`;

describe("chat prompt catalog stays in sync with data", () => {
  it("every /produit/<slug> mentioned in the system prompt exists", () => {
    const cited = [...promptSrc.matchAll(/\/produit\/([a-z0-9-]+)/g)].map((m) => m[1]);
    const realSlugs = new Set(allProducts.map((p) => p.slug));
    const ghosts = [...new Set(cited)].filter((s) => !realSlugs.has(s));
    expect(ghosts).toEqual([]);
  });

  it("the system prompt no longer references the removed /solutions section", () => {
    const cited = [
      ...promptSrc.matchAll(/\/solutions\/[a-z0-9-]+/g),
    ].map((m) => m[0]);
    expect(cited).toEqual([]);
  });

  it("the catalog cites at least 40 products (no major silent loss)", () => {
    const cited = new Set(
      [...promptSrc.matchAll(/\/produit\/([a-z0-9-]+)/g)].map((m) => m[1]),
    );
    expect(cited.size).toBeGreaterThanOrEqual(40);
  });
});

import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { allProducts } from "@/data/products";
import { solutionsData } from "@/data/solutionProducts";

// Reads the edge function source as plain text and extracts every
// /produit/<slug> and /solutions/<id> URL it cites in CATALOG. Verifies
// each one resolves to a real product or solution. Catches drift when
// the catalog goes stale after a data change.

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

  it("every /solutions/<id> mentioned in the system prompt exists", () => {
    const cited = [
      ...edgeSrc.matchAll(/\/solutions\/([a-z0-9-]+)/g),
    ].map((m) => m[1]);
    const realIds = new Set(solutionsData.map((s) => s.id));
    const ghosts = [...new Set(cited)].filter((s) => !realIds.has(s));
    expect(ghosts).toEqual([]);
  });

  it("the catalog cites at least 40 products (no major silent loss)", () => {
    const cited = new Set(
      [...edgeSrc.matchAll(/\/produit\/([a-z0-9-]+)/g)].map((m) => m[1]),
    );
    expect(cited.size).toBeGreaterThanOrEqual(40);
  });
});

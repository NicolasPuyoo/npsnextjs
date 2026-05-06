import { describe, it, expect } from "vitest";
import { guides } from "../data/guides";
import { allProducts } from "../data/products";

// Regression: every product slug referenced by a guide must exist in
// data/products.ts. Without this, a guide can recommend a deleted product
// and create a 404 from a high-traffic page.
describe("guides product references", () => {
  const productSlugs = new Set(allProducts.map((p) => p.slug));

  it.each(guides.map((g) => [g.slug, g] as const))(
    "guide %s references only existing product slugs",
    (_slug, guide) => {
      const broken = guide.products.filter((ref) => !productSlugs.has(ref.slug));
      expect(broken).toEqual([]);
    },
  );

  it("every guide has a unique slug", () => {
    const slugs = guides.map((g) => g.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every guide has at least one section, one product, one FAQ", () => {
    for (const guide of guides) {
      expect(guide.sections.length).toBeGreaterThan(0);
      expect(guide.products.length).toBeGreaterThan(0);
      expect(guide.faqs.length).toBeGreaterThan(0);
    }
  });

  it("related guides reference existing guide slugs", () => {
    const allSlugs = new Set(guides.map((g) => g.slug));
    for (const guide of guides) {
      if (!guide.related) continue;
      for (const rel of guide.related) {
        expect(allSlugs.has(rel)).toBe(true);
      }
    }
  });
});

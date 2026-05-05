import { describe, it, expect } from "vitest";
import { allProducts } from "@/data/products";
import { PRODUCT_USE_CASE, getUseCase } from "@/lib/productUseCases";

describe("productUseCases coverage", () => {
  it("every product slug has a use case tag", () => {
    const missing = allProducts.filter((p) => !PRODUCT_USE_CASE[p.slug]);
    expect(missing.map((p) => p.slug)).toEqual([]);
  });

  it("every use case tag is reachable via getUseCase()", () => {
    for (const product of allProducts) {
      expect(getUseCase(product.slug)).toBeTruthy();
    }
  });

  it("no orphan use cases (every key in the map matches a real product)", () => {
    const slugs = new Set(allProducts.map((p) => p.slug));
    const orphans = Object.keys(PRODUCT_USE_CASE).filter((slug) => !slugs.has(slug));
    expect(orphans).toEqual([]);
  });

  it("use case tags stay short (< 60 chars) so they fit on a card", () => {
    const tooLong = Object.entries(PRODUCT_USE_CASE).filter(
      ([, value]) => value.length >= 60,
    );
    expect(tooLong).toEqual([]);
  });
});

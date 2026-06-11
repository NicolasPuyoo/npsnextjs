import type { MetadataRoute } from "next";
import { allProducts } from "@/data/products";
import { PAGE_SEO } from "@/lib/seo";

const SITE_URL = "https://nps-france.com";

// Priority hierarchy:
// 1.0 — homepage
// 0.9 — pillar guides + Kraiburg distrib (highest commercial intent)
// 0.85 — top hub pages (produits, solutions, guide, zone)
// 0.8 — top categories, HQ city
// 0.7 — sub-categories, products, secondary zones
// 0.6 — leaf pages
const sectionPriority = (path: string): number => {
  if (path === "/") return 1.0;
  const depth = path.split("/").filter(Boolean).length;
  if (depth === 1) return 0.8;
  if (depth === 2) return 0.7;
  return 0.6;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes from the SEO map (excludes dynamic paths)
  const staticRoutes = Object.keys(PAGE_SEO).map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: (path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: sectionPriority(path),
  }));

  // (Guide hub temporarily hidden — pas inclus dans le sitemap tant que le
  // contenu n'est pas validé par un acousticien.)

  // Dynamic product pages
  const productRoutes = allProducts.map((product) => ({
    url: `${SITE_URL}/produit/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // /solutions retiré du site — pas de routes dynamiques à exposer.

  return [
    ...staticRoutes,
    ...productRoutes,
  ];
}

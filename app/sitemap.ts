import type { MetadataRoute } from "next";
import { allProducts } from "@/data/products";
import { solutionsData } from "@/data/solutionProducts";
import { PAGE_SEO } from "@/lib/seo";

const SITE_URL = "https://nps-france.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes from the SEO map (excludes dynamic paths)
  const staticRoutes = Object.keys(PAGE_SEO).map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: (path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "/" ? 1.0 : path.split("/").length === 2 ? 0.8 : 0.6,
  }));

  // Dynamic product pages
  const productRoutes = allProducts.map((product) => ({
    url: `${SITE_URL}/produit/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic solution pages
  const solutionRoutes = solutionsData.map((s) => ({
    url: `${SITE_URL}/solutions/${s.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes, ...solutionRoutes];
}

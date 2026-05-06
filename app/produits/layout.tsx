import type { Metadata } from "next";
import { metaForRoute } from "@/lib/seo";
import { allProducts } from "@/data/products";
import { breadcrumbList, itemList } from "@/lib/jsonLd";

export const metadata: Metadata = metaForRoute("/produits");

const breadcrumbsJsonLd = breadcrumbList([
  { name: "Accueil", url: "/" },
  { name: "Produits", url: "/produits" },
]);

const itemListJsonLd = itemList(
  "Catalogue produits NPS Acoustique",
  allProducts.map((p) => ({ name: p.name, url: `/produit/${p.slug}` })),
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import { metaForRoute } from "@/lib/seo";
import { solutionsData } from "@/data/solutionProducts";
import { breadcrumbList, itemList } from "@/lib/jsonLd";

export const metadata: Metadata = metaForRoute("/solutions");

const breadcrumbsJsonLd = breadcrumbList([
  { name: "Accueil", url: "/" },
  { name: "Solutions", url: "/solutions" },
]);

const itemListJsonLd = itemList(
  "Solutions acoustiques par secteur",
  solutionsData.map((s) => ({ name: s.title, url: `/solutions/${s.id}` })),
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

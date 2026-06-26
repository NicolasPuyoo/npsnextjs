import type { Metadata } from "next";
import { metaForRoute } from "@/lib/seo";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = metaForRoute("/batiment/solutions-exterieures");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Accueil", url: "/" },
          { name: "Bâtiment", url: "/batiment" },
          { name: "Solutions extérieures et toitures", url: "/batiment/solutions-exterieures" },
        ]}
      />
      {children}
    </>
  );
}

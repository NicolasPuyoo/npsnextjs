import type { Metadata } from "next";
import { metaForRoute } from "@/lib/seo";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = metaForRoute("/batiment/isolation-sans-ate");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Accueil", url: "/" },
          { name: "Bâtiment", url: "/batiment" },
          { name: "Sous-couches sans ATE", url: "/batiment/isolation-sans-ate" },
        ]}
      />
      {children}
    </>
  );
}

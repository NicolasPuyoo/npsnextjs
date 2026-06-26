import type { Metadata } from "next";
import { metaForRoute } from "@/lib/seo";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = metaForRoute("/batiment/isolation-revetements-sols");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Accueil", url: "/" },
          { name: "Bâtiment", url: "/batiment" },
          { name: "Isolation sous revêtements de sols", url: "/batiment/isolation-revetements-sols" },
        ]}
      />
      {children}
    </>
  );
}

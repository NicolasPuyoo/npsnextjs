import type { Metadata } from "next";
import { metaForRoute } from "@/lib/seo";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = metaForRoute("/bricolage");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Accueil", url: "/" },
          { name: "Bricolage", url: "/bricolage" },
        ]}
      />
      {children}
    </>
  );
}

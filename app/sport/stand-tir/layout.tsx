import type { Metadata } from "next";
import { metaForRoute } from "@/lib/seo";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = metaForRoute("/sport/stand-tir");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Accueil", url: "/" },
          { name: "Sport", url: "/sport" },
          { name: "Stand de tir", url: "/sport/stand-tir" },
        ]}
      />
      {children}
    </>
  );
}

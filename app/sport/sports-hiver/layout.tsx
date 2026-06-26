import type { Metadata } from "next";
import { metaForRoute } from "@/lib/seo";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = metaForRoute("/sport/sports-hiver");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Accueil", url: "/" },
          { name: "Sport", url: "/sport" },
          { name: "Sports d'hiver", url: "/sport/sports-hiver" },
        ]}
      />
      {children}
    </>
  );
}

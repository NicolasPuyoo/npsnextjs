import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const SITE_URL = "https://nps-acoustique.fr";

export const metadata: Metadata = {
  title: "DAMTEC® France — Sous-couches acoustiques Kraiburg | NPS Acoustique",
  description:
    "DAMTEC® : la référence sous-couches acoustiques caoutchouc. 19 produits, 4 gammes (anti-vibration, sous chape ATE, revêtements sols, toitures). Distributeur officiel Kraiburg France depuis 20+ ans. Devis 24h.",
  alternates: { canonical: `${SITE_URL}/damtec` },
  openGraph: {
    title: "DAMTEC® France — Sous-couches acoustiques Kraiburg",
    description:
      "19 produits DAMTEC distribués en France par NPS Acoustique, distributeur officiel exclusif Kraiburg Relastec depuis 20+ ans.",
    url: `${SITE_URL}/damtec`,
    type: "website",
  },
};

export default function DamtecLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Accueil", url: "/" },
          { name: "DAMTEC®", url: "/damtec" },
        ]}
      />
      {children}
    </>
  );
}

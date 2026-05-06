import type { Metadata } from "next";

const SITE_URL = "https://nps-france.com";

export const metadata: Metadata = {
  title: "Guide fitness | NPS Acoustique",
  description: "Guide comparatif des revêtements pour cardio, musculation, yoga et fonctionnel.",
  // HIDDEN: contenu en cours de validation par un acousticien.
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/guide/fitness` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

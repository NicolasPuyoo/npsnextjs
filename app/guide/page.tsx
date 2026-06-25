import Link from "next/link";
import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { guides } from "@/data/guides";

const SITE_URL = "https://nps-acoustique.fr";

export const metadata: Metadata = {
  title: "Guides experts isolation acoustique | NPS Acoustique",
  description:
    "Guides techniques pour architectes, BET et entreprises : isolation sous chape, sols sportifs EN 14904, anti-vibration industriel, réglementation NRA / NRT. Rédigés par des experts.",
  // HIDDEN: contenu en cours de validation par un acousticien.
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/guide` },
};

export default function GuideIndexPage() {
  return (
    <Layout>
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Centre de ressources
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Guides experts pour les pros de l'acoustique
          </h1>
          <p className="text-lg text-background/80 leading-relaxed max-w-2xl">
            Articles techniques pour architectes, bureaux d'études et entreprises générales.
            Chaque guide explique les normes, compare les produits, et donne les chiffres concrets pour spécifier juste.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className="group rounded-3xl border border-border bg-card p-6 hover:border-primary hover:shadow-card transition-all"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                  {guide.readingMinutes} min · Guide expert
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {guide.title}
                </h2>
                <p className="text-muted-foreground line-clamp-3">
                  {guide.description}
                </p>
                <p className="text-sm text-primary font-medium mt-4">
                  Lire le guide →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-muted/30 p-6 lg:p-8 max-w-3xl mx-auto text-center">
            <p className="text-foreground mb-4">
              Une question technique précise ? Un cas particulier ?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Parler à un expert NPS
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

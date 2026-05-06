import Link from "next/link";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { zones } from "@/data/zones";

const SITE_URL = "https://nps-france.com";

export const metadata: Metadata = {
  title: "Zones desservies en France | NPS Acoustique",
  description:
    "NPS Acoustique livre toute la France depuis Mont-de-Marsan (Landes). Distributeur officiel Kraiburg pour Bordeaux, Toulouse, Paris, Lyon, Marseille et leurs régions.",
  alternates: { canonical: `${SITE_URL}/zone` },
  keywords: [
    "distributeur acoustique France",
    "isolation acoustique Bordeaux",
    "isolation acoustique Mont-de-Marsan",
    "Kraiburg France",
  ],
};

export default function ZoneIndexPage() {
  return (
    <Layout>
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Présence nationale
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Zones desservies en France
          </h1>
          <p className="text-lg text-background/80 leading-relaxed max-w-2xl">
            Notre siège est à Mont-de-Marsan (Landes). Nous livrons toute la France
            métropolitaine sous 48-72h, avec des délais accélérés en Nouvelle-Aquitaine.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone) => (
              <Link
                key={zone.slug}
                href={`/zone/${zone.slug}`}
                className="group rounded-3xl border border-border bg-card p-6 hover:border-primary hover:shadow-card transition-all"
              >
                <p className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-3">
                  <MapPin className="h-3.5 w-3.5" />
                  {zone.region}
                  {zone.isHQ && <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 ml-1 normal-case tracking-normal">Siège</span>}
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {zone.city}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-3">{zone.intro}</p>
                <p className="text-sm text-primary font-medium mt-4">
                  Voir la zone →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-muted/30 p-6 lg:p-8 max-w-3xl mx-auto text-center">
            <p className="text-foreground mb-4">
              Votre ville n'est pas listée ? Nous livrons partout en France métropolitaine.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Demander un devis pour votre projet
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

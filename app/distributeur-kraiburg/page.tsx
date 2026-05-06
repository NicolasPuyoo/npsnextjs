import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import { breadcrumbList } from "@/lib/jsonLd";

const SITE_URL = "https://nps-france.com";

export const metadata: Metadata = {
  title: "Distributeur officiel Kraiburg en France | NPS Acoustique",
  description:
    "NPS Acoustique est distributeur officiel Kraiburg Relastec en France : DAMTEC, KRAITEC, SPORTEC, PROFIMAT, VIBRAFOAM. 45 références en stock, livraison 48h, conseil expert.",
  alternates: { canonical: `${SITE_URL}/distributeur-kraiburg` },
  keywords: [
    "distributeur Kraiburg",
    "Kraiburg France",
    "Kraiburg Relastec distributeur",
    "DAMTEC distributeur",
    "KRAITEC distributeur",
    "SPORTEC distributeur",
    "VIBRAFOAM distributeur",
  ],
};

const breadcrumbsJsonLd = breadcrumbList([
  { name: "Accueil", url: "/" },
  { name: "Distributeur Kraiburg", url: "/distributeur-kraiburg" },
]);

const brands = [
  {
    name: "DAMTEC",
    summary: "Caoutchouc recyclé lié polyuréthane, gamme acoustique sous chape (ATE), revêtements de sols (Itapur, Wave 3D), anti-vibration (vibra 30 → 1500).",
    products: 22,
    href: "/produits?brand=damtec",
  },
  {
    name: "KRAITEC",
    summary: "Solutions extérieures : protection mécanique d'étanchéité, drainage, terrasses techniques. Compatible PVC, FPO, EPDM.",
    products: 9,
    href: "/produits?brand=kraitec",
  },
  {
    name: "SPORTEC",
    summary: "Sols sportifs caoutchouc EN 14904 : cardio, musculation, haltérophilie, indoor & outdoor. Le standard pro.",
    products: 6,
    href: "/produits?brand=sportec",
  },
  {
    name: "VIBRAFOAM",
    summary: "Mousse polyuréthane mixte pour anti-vibration haute performance (jusqu'à 7 N/mm²), équipements industriels.",
    products: 1,
    href: "/produits?brand=vibrafoam",
  },
  {
    name: "PROFIMAT",
    summary: "Tapis de protection sols pour transpalettes, chariots élévateurs, zones logistiques. Wheelprotect 13-18 et 18-22.",
    products: 3,
    href: "/produits?brand=profimat",
  },
];

const advantages = [
  {
    title: "Stock permanent en France",
    desc: "45 références disponibles immédiatement, dépôt à Mont-de-Marsan (Landes).",
  },
  {
    title: "Conseil technique expert",
    desc: "Sélection produit selon votre cahier des charges acoustique (ΔLw, ATE, normes).",
  },
  {
    title: "Livraison rapide",
    desc: "48-72h en France métropolitaine, 24-48h en Nouvelle-Aquitaine.",
  },
  {
    title: "Échantillons gratuits",
    desc: "Pour tous les pros (architectes, BET, entreprises générales). Envoi sous 48h.",
  },
  {
    title: "Tarifs pros directs",
    desc: "Pas d'intermédiaire. Tarif distributeur officiel Kraiburg pour les marchés BTP.",
  },
  {
    title: "20+ ans d'expérience",
    desc: "Spécialistes acoustique et anti-vibratoire, références sur tous secteurs.",
  },
];

export default function DistributeurKraiburgPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Distributeur officiel Kraiburg Relastec
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Toute la gamme Kraiburg, distribuée en France depuis Mont-de-Marsan
          </h1>
          <p className="text-lg text-background/80 leading-relaxed max-w-2xl">
            NPS Acoustique distribue les 5 marques du groupe Kraiburg Relastec
            (Allemagne) sur le marché français : DAMTEC, KRAITEC, SPORTEC,
            VIBRAFOAM et PROFIMAT. 45 références, livraison sous 48-72h, conseil expert pour les pros.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Les 5 marques Kraiburg distribuées
          </h2>
          <p className="text-muted-foreground mb-10">
            Chaque marque répond à un besoin acoustique précis : isolation, anti-vibration,
            protection mécanique, sol sportif, logistique.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {brands.map((b) => (
              <Link
                key={b.name}
                href={b.href}
                className="group rounded-3xl border border-border bg-card p-6 hover:border-primary hover:shadow-card transition-all"
              >
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {b.name}
                  </h3>
                  <span className="text-xs text-muted-foreground bg-muted rounded-full px-3 py-1">
                    {b.products} référence{b.products > 1 ? "s" : ""}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{b.summary}</p>
                <p className="text-sm text-primary font-medium mt-4">
                  Voir la gamme →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Pourquoi passer par NPS plutôt qu'en direct
          </h2>
          <p className="text-muted-foreground mb-10">
            Kraiburg Relastec ne vend pas en direct sur le marché français. Le distributeur
            est l'interlocuteur unique pour les pros. Voici ce que NPS apporte au-delà du produit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((a, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Besoin d'un produit Kraiburg ? Devis sous 24h.
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Architectes, BET, entreprises générales, salles de sport : nous répondons sous 24h
            avec une recommandation technique + tarif. Échantillons gratuits.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Demander un devis
            </Link>
            <Link
              href="/produits"
              className="inline-flex items-center justify-center border border-border text-foreground rounded-full px-8 py-3 font-semibold hover:bg-muted transition-colors"
            >
              Parcourir le catalogue
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

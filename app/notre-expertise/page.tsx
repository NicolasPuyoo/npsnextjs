import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, BookOpen, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { breadcrumbList } from "@/lib/jsonLd";
import { guides } from "@/data/guides";
import { allProducts } from "@/data/products";

const SITE_URL = "https://nps-france.com";

export const metadata: Metadata = {
  title: "Notre expertise acoustique | NPS Acoustique",
  description:
    "Plus de 20 ans d'expertise en isolation acoustique et anti-vibratoire. Conseil technique, accompagnement projet, gamme dédiée bâtiment, sport, hôtellerie et bricolage.",
  // HIDDEN: page contient des claims de service à valider avec NPS avant publication.
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/notre-expertise` },
};

const breadcrumbsJsonLd = breadcrumbList([
  { name: "Accueil", url: "/" },
  { name: "Notre expertise", url: "/notre-expertise" },
]);

const sectors = [
  {
    title: "Bâtiment & industrie",
    desc: "Logement collectif, ERP, tertiaire neuf et rénovation. Conformité NRA, NRT, DTU 52.10.",
    href: "/batiment",
  },
  {
    title: "Sport & fitness",
    desc: "Salles de sport, gymnases, box CrossFit, terrains multisports indoor et outdoor. Norme EN 14904.",
    href: "/sport",
  },
  {
    title: "Hôtellerie & restauration",
    desc: "Chambres, restaurants, terrasses techniques, zones spa. Solutions adaptées à l'exploitation CHR.",
    href: "/solutions/hotels",
  },
  {
    title: "Anti-vibration industriel",
    desc: "Désolidarisation d'équipements (groupes, compresseurs, CTA, machines). DAMTEC vibra et Vibrafoam.",
    href: "/batiment/isolation-acoustique",
  },
  {
    title: "Bricolage & particuliers",
    desc: "Solutions domestiques pour anti-vibration équipement, sous-couches parquet, sols garage.",
    href: "/bricolage",
  },
];

export default function NotreExpertisePage() {
  const productsCount = allProducts.length;
  const guidesCount = guides.length;

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Notre expertise
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Spécialistes de l'isolation acoustique et anti-vibratoire depuis plus de 20 ans
          </h1>
          <p className="text-lg text-background/80 leading-relaxed max-w-2xl">
            NPS Acoustique accompagne architectes, bureaux d'études, entreprises générales,
            gérants d'établissements et particuliers dans leurs projets d'isolation phonique.
            Conseil technique, gamme dédiée, accompagnement projet de la spécification à la livraison.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Années d'expérience" value="20+" />
            <Stat label="Références produits" value={`${productsCount}`} />
            <Stat label="Guides experts" value={`${guidesCount}`} />
            <Stat label="Secteurs couverts" value="5" />
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Cinq secteurs, des solutions adaptées
          </h2>
          <p className="text-muted-foreground mb-10">
            Chaque secteur a ses normes, ses contraintes, et ses bons réflexes produit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sectors.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-primary hover:shadow-card transition-all"
              >
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground mb-3">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Voir les solutions <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Ce qu'on vous apporte
          </h2>
          <p className="text-muted-foreground mb-10">
            Au-delà du produit, l'accompagnement projet.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                t: "Conseil technique sur projet",
                d: "Sélection produit selon votre cahier des charges acoustique : ΔLw cible, classement feu, contraintes d'épaisseur, certifications.",
              },
              {
                t: "Gamme professionnelle",
                d: "Sous-couches sous chape (ATE), sous revêtements de sols, sols sportifs EN 14904, anti-vibration industriel, terrasses techniques.",
              },
              {
                t: "Documentation technique",
                d: "Fiches techniques officielles, ATE, classements feu, certifications environnementales (A+, AgBB, Blue Angel) sur demande.",
              },
              {
                t: "Devis personnalisé",
                d: "Réponse sous 24h avec recommandation produit et chiffrage selon votre projet (surface, zones d'usage, contraintes).",
              },
              {
                t: "Guides experts gratuits",
                d: "Articles techniques pour bien spécifier : DTU 52.10, EN 14904, αw, ΔLw, anti-vibration, choix sous-couche.",
              },
              {
                t: "Échantillons sur demande",
                d: "Pour les pros : envoi d'échantillons de produits avant validation projet.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">{item.t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured guides */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Centre de ressources
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Nos guides experts
          </h2>
          <p className="text-muted-foreground mb-10">
            {guidesCount} articles techniques pour bien spécifier un projet acoustique.
          </p>
          <Link
            href="/guide"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
          >
            Parcourir les guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un projet acoustique ? Parlons-en.
          </h2>
          <p className="text-background/80 mb-8 leading-relaxed">
            Devis personnalisé sous 24h, conseil produit gratuit, échantillons sur demande.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Demander un devis
            </Link>
            <a
              href="tel:0558775589"
              className="inline-flex items-center justify-center border border-background/30 text-background rounded-full px-8 py-3 font-semibold hover:bg-background/10 transition-colors"
            >
              05 58 77 55 89
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center">
    <p className="text-4xl md:text-5xl font-bold text-primary mb-1">{value}</p>
    <p className="text-sm text-muted-foreground uppercase tracking-wide">{label}</p>
  </div>
);

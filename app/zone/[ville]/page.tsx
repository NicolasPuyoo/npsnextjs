"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ChevronRight, MapPin, Truck, Phone, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { getZoneBySlug } from "@/data/zones";
import { findProductBySlug } from "@/data/products";

const ZonePage = () => {
  const { ville } = useParams() as { ville: string };
  const zone = ville ? getZoneBySlug(ville) : undefined;
  if (!zone) notFound();

  const featured = zone.featuredProductSlugs
    .map((slug) => findProductBySlug(slug))
    .filter((p): p is NonNullable<ReturnType<typeof findProductBySlug>> => !!p);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border pt-28 lg:pt-32">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/zone" className="hover:text-primary transition-colors">Zones desservies</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{zone.city}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            <MapPin className="h-3.5 w-3.5" />
            {zone.region} · {zone.postalCode}
            {zone.isHQ && <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 ml-2">Siège</span>}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {zone.isHQ
              ? `Distributeur acoustique ${zone.city}`
              : `Isolation acoustique à ${zone.city} et alentours`}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{zone.intro}</p>
        </div>
      </section>

      {/* Why us */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-6 lg:p-8">
            <p className="text-foreground/90 leading-relaxed mb-6">{zone.whyHere}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {zone.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Départements et zones desservis depuis {zone.city}
          </h2>
          <div className="flex flex-wrap gap-2">
            {zone.serviceArea.map((area, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 bg-muted text-foreground rounded-full px-4 py-2 text-sm"
              >
                <Truck className="h-3.5 w-3.5 text-primary" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      {zone.caseStudies.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Réalisations récentes en {zone.region}
            </h2>
            <div className="space-y-4">
              {zone.caseStudies.map((c, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{c.client}</h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{c.location}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{c.project}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground italic">
              Les noms d'établissements sont anonymisés pour respecter la confidentialité de nos clients. Références complètes disponibles sur demande.
            </p>
          </div>
        </section>
      )}

      {/* Featured products */}
      {featured.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Produits demandés en {zone.region}
            </h2>
            <p className="text-muted-foreground mb-8">
              Sélection adaptée aux projets BTP, sport et hôtellerie courants dans la région.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projet à {zone.city} ? Devis sous 24h.
          </h2>
          <p className="text-background/80 mb-8 leading-relaxed">
            Échantillons gratuits, conseil produit, livraison rapide depuis Mont-de-Marsan.
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
              className="inline-flex items-center justify-center gap-2 border border-background/30 text-background rounded-full px-8 py-3 font-semibold hover:bg-background/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              05 58 77 55 89
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ZonePage;

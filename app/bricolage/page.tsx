"use client";

import { Wrench, ArrowRight, Volume2, Disc, Bike, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ExploreMore from "@/components/ExploreMore";
import { bricolageProducts } from "@/data/products";
import { Button } from "@/components/ui/button";

// Hero image
import heroImage from "@/assets/categories/bricolage.jpg";

// Use cases mapped to specific products via slug
const useCases = [
  {
    icon: Disc,
    title: "Ma machine à laver / sèche-linge vibre",
    desc: "Tapis anti-vibration épais qui absorbe les chocs et le bruit, protège le sol.",
    productSlug: "top-vib-wash",
    productName: "TOP VIB WASH",
  },
  {
    icon: Bike,
    title: "Je gare mon vélo / moto à l'intérieur",
    desc: "Tapis qui protège le sol des marques de pneus et amortit le passage. Plusieurs largeurs.",
    productSlug: "profimat-wheelprotect-13-18",
    productName: "PROFIMAT WHEELPROTECT",
  },
  {
    icon: ShieldCheck,
    title: "Je veux protéger mon sol garage / atelier",
    desc: "Revêtement caoutchouc résistant pour atelier, cave, garage. Antichoc et antidérapant.",
    productSlug: "profimat-bumpy",
    productName: "PROFIMAT BUMPY",
  },
  {
    icon: Volume2,
    title: "Mon voisin du dessus me dérange",
    desc: "Pour les bruits d'impact, regardez côté bâtiment : sous-couches sous parquet/laminé.",
    productSlug: null,
    href: "/batiment/isolation-revetements-sols",
    cta: "Voir les solutions sous revêtement",
  },
];

const Bricolage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage.src}
            alt="Bricolage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bricolage
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-6">
              Solutions acoustiques et anti-vibratoires pour les particuliers.
              Produits prêts à poser, faciles à installer.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#besoins"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Trouver mon produit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                Conseil gratuit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases — Quel est votre besoin ? */}
      <section id="besoins" className="py-16 bg-muted/30 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Quel est votre besoin ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Identifiez votre problème pour aller direct au produit adapté.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              const href = uc.productSlug ? `/produit/${uc.productSlug}` : uc.href!;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={href}
                    className="block h-full bg-card border border-border rounded-2xl p-6 hover:border-primary hover:shadow-soft transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2 leading-tight">
                      {uc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {uc.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      {uc.cta || `Voir ${uc.productName}`}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Nos produits Bricolage
              </h2>
              <p className="text-muted-foreground mt-1">{bricolageProducts.length} produits disponibles</p>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/contact" className="flex items-center gap-2">
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          {bricolageProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bricolageProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card rounded-2xl">
              <Wrench className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Produits à venir
              </h3>
              <p className="text-muted-foreground">
                Les produits de cette catégorie seront bientôt disponibles.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA bandeau */}
      <section className="py-16 bg-foreground/95">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pas sûr du produit qui vous convient ?
          </h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Décrivez-nous votre problème, on vous oriente. Conseil gratuit, sans engagement.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Demander un conseil</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent text-white border-white hover:bg-white hover:text-foreground">
              <a href="tel:0558775589">📞 05 58 77 55 89</a>
            </Button>
          </div>
        </div>
      </section>

      <ExploreMore currentPath="/bricolage" />
    </Layout>
  );
};

export default Bricolage;

"use client";

import { Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ExploreMore from "@/components/ExploreMore";
import { bricolageProducts } from "@/data/products";
import { Button } from "@/components/ui/button";

// Hero image
import heroImage from "@/assets/categories/bricolage.jpg";

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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bricolage
            </h1>
            <p className="text-lg md:text-xl text-white/85">
              Solutions acoustiques et anti-vibratoires pour les particuliers.
              Tapis machine à laver, protections de sol, accessoires antichoc :
              produits prêts à poser, faciles à installer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Nos produits pour particuliers
              </h2>
              <p className="text-muted-foreground mt-1">
                {bricolageProducts.length} produits disponibles
              </p>
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

      {/* CTA bandeau pour conseil + voisinage */}
      <section className="py-16 bg-foreground/95">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pas sûr du produit qui vous convient ?
          </h2>
          <p className="text-white/75 mb-2 max-w-2xl mx-auto">
            Décrivez-nous votre problème, on vous oriente. Conseil gratuit, sans engagement.
          </p>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto text-sm">
            Pour un problème de bruit avec un voisin du dessus, voir aussi{" "}
            <Link href="/batiment/isolation-revetements-sols" className="text-primary hover:underline">
              les sous-couches sous parquet et carrelage
            </Link>.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Demander un conseil</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent text-white border-white hover:bg-white hover:text-foreground">
              <a href="tel:0558775589">05 58 77 55 89</a>
            </Button>
          </div>
        </div>
      </section>

      <ExploreMore currentPath="/bricolage" />
    </Layout>
  );
};

export default Bricolage;

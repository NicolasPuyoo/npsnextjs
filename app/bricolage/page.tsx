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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bricolage
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Solutions acoustiques accessibles pour les particuliers et bricoleurs. 
              Produits faciles à installer pour vos projets d'isolation phonique à domicile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              L'isolation phonique à portée de tous
            </h2>
            <p className="text-muted-foreground mb-6">
              Que ce soit pour protéger votre machine à laver des vibrations, sécuriser le stationnement 
              de vos véhicules ou améliorer le confort acoustique de votre intérieur, nos solutions 
              bricolage sont conçues pour être simples à installer et efficaces au quotidien.
            </p>
            <Button asChild variant="outline">
              <Link href="/solutions" className="flex items-center gap-2">
                Découvrir nos solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Nos produits pour le bricolage ({bricolageProducts.length})
          </h2>
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

      <ExploreMore currentPath="/bricolage" />
    </Layout>
  );
};

export default Bricolage;
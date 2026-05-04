"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ProductCard from "@/components/ProductCard";
import ChapeAcousticsChart from "@/components/ChapeAcousticsChart";
import { batimentProducts } from "@/data/products";
import ExploreMore from "@/components/ExploreMore";
import isolationChape from "@/assets/batiment/isolation-chape.jpg";

const IsolationSousChape = () => {
  const products = batimentProducts.filter(
    (p) => p.subcategory === "isolation-sous-chape"
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackButton label="Retour Bâtiment" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Isolation acoustique sous chape avec ATE
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Nos systèmes d'isolation sous chape sont certifiés selon l'Agrément Technique Européen (ATE), 
                garantissant des performances acoustiques optimales pour l'isolation des bruits d'impact.
              </p>
              <p className="text-lg text-muted-foreground">
                La gamme DAMTEC ESTRA et WAVE offre des solutions adaptées à tous les types de 
                chapes flottantes, qu'elles soient liquides ou traditionnelles.
              </p>
            </div>
            <div className="aspect-square overflow-hidden rounded-3xl">
              <img 
                src={isolationChape.src} 
                alt="Isolation acoustique sous chape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Acoustics Chart */}
      <ChapeAcousticsChart />

      {/* Products Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Nos produits ({products.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore More */}
      <ExploreMore currentPath="/batiment/isolation-sous-chape" />
    </Layout>
  );
};

export default IsolationSousChape;
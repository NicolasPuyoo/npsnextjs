"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ProductCard from "@/components/ProductCard";
import { batimentProducts } from "@/data/products";
import ExploreMore from "@/components/ExploreMore";
import solutionsExterieures from "@/assets/batiment/solutions-exterieures.jpg";

const SolutionsExterieures = () => {
  const products = batimentProducts.filter(
    (p) => p.subcategory === "solutions-exterieures"
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
                Solutions extérieures pour l'isolation acoustique
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Notre gamme KRAITEC est spécialement conçue pour les applications extérieures, 
                offrant une protection acoustique durable et résistante aux intempéries.
              </p>
              <p className="text-lg text-muted-foreground">
                Idéales pour les terrasses, toitures accessibles, balcons et espaces extérieurs, 
                ces solutions combinent isolation phonique, protection contre les vibrations et 
                résistance aux UV et aux conditions climatiques extrêmes.
              </p>
            </div>
            <div className="aspect-square overflow-hidden rounded-3xl">
              <img 
                src={solutionsExterieures.src} 
                alt="Solutions extérieures"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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
      <ExploreMore currentPath="/batiment/solutions-exterieures" />
    </Layout>
  );
};

export default SolutionsExterieures;
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ExploreMore from "@/components/ExploreMore";
import { batimentProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

// Category image
import batimentImage from "@/assets/categories/batiment.jpg";

// Solution images
import isolationAcoustique from "@/assets/batiment/isolation-acoustique.jpg";
import isolationChape from "@/assets/batiment/isolation-chape.jpg";
import isolationSansAte from "@/assets/batiment/isolation-sans-ate.webp";
import isolationRevetementsSols from "@/assets/batiment/isolation-revetements-sols.webp";
import solutionsExterieures from "@/assets/batiment/solutions-exterieures.jpg";

const solutions = [
  {
    path: "/batiment/isolation-acoustique",
    title: "Isolation acoustique et anti-vibratoire",
    description: "Solutions complètes pour réduire les nuisances sonores et vibratoires dans les bâtiments résidentiels et tertiaires.",
    image: isolationAcoustique.src,
    filterId: "isolation-acoustique-antivibratoire",
  },
  {
    path: "/batiment/isolation-sous-chape",
    title: "Isolation acoustique sous chape avec ATE",
    description: "Systèmes certifiés pour l'isolation des bruits d'impact sous chape flottante, conformes aux normes européennes.",
    image: isolationChape.src,
    filterId: "isolation-sous-chape",
  },
  {
    path: "/batiment/isolation-sans-ate",
    title: "Isolation acoustique sous chape sans ATE",
    description: "Solutions d'isolation sous chape adaptées aux projets ne nécessitant pas de certification ATE.",
    image: isolationSansAte.src,
    filterId: "isolation-sans-ate",
  },
  {
    path: "/batiment/isolation-revetements-sols",
    title: "Isolation sous les revêtements de sols",
    description: "Sous-couches isolantes pour parquet, laminé, moquette, carrelage et vinyle avec marquage CE.",
    image: isolationRevetementsSols.src,
    filterId: "isolation-revetements-sols",
  },
  {
    path: "/batiment/solutions-exterieures",
    title: "Solutions extérieures",
    description: "Produits spécialisés pour l'isolation phonique des façades, terrasses et espaces extérieurs.",
    image: solutionsExterieures.src,
    filterId: "solutions-exterieures",
  },
];

const categoryFilters = [
  { id: "all", name: "Toutes les catégories" },
  { id: "isolation-acoustique-antivibratoire", name: "Isolation acoustique et anti-vibratoire" },
  { id: "isolation-sous-chape", name: "Isolation sous chape" },
  { id: "isolation-sans-ate", name: "Isolation sans ATE" },
  { id: "isolation-revetements-sols", name: "Revêtements de sols" },
  { id: "solutions-exterieures", name: "Solutions extérieures" },
  
];

const characteristics = [
  "Excellente désolidarisation des bruits d'impact et isolation aux vibrations",
  "Meilleure isolation phonique avec des hauteurs de construction minimales",
  "Haute résistance mécanique grâce à une résistance extrême à la compression",
  "Rapide et facile à poser, convient pour la pose avec ou sans collage",
  "Écologique : granulés de caoutchouc recyclé, entièrement recyclable",
  "Résistant à l'eau et imputrescible",
  "Faible conductibilité thermique, idéal pour chauffage et refroidissement au sol",
  "Durablement élastique, performances constantes sur plusieurs années",
];

const Batiment = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const allBatimentProducts = batimentProducts;

  const filteredProducts = useMemo(() => {
    return allBatimentProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.subcategory === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, allBatimentProducts]);

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={batimentImage.src}
            alt="Bâtiment & Industrie"
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
              Bâtiment & Industrie
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Solutions acoustiques complètes pour la construction neuve, la rénovation 
              et les environnements industriels. Nous accompagnons architectes, maîtres d'œuvre 
              et entreprises dans leurs projets d'isolation phonique et anti-vibratoire.
            </p>
            <Button 
              onClick={scrollToProducts}
              className="rounded-full px-6 py-3 h-auto text-base font-medium bg-primary text-primary-foreground hover:opacity-90"
            >
              Voir tous les produits
            </Button>
          </motion.div>
        </div>
      </section>

      {/* DAMTEC Characteristics Section */}
      <section className="py-16 bg-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              DAMTEC® – Atouts et Caractéristiques
            </h2>
            <p className="text-gray-300 mb-8 max-w-4xl leading-relaxed">
              Nos sous-couches isolantes pour l'isolation aux bruits d'impact et la désolidarisation aux vibrations 
              sont contrôlées plusieurs fois selon les normes applicables DIN, EN et ASTM auprès d'instituts et 
              d'universités reconnus.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {characteristics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className="text-primary mt-1 shrink-0">•</span>
                <span className="text-gray-300 text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            Nos solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link key={index} href={solution.path} className="group space-y-4">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {solution.description}
                </p>
                <div className="flex items-center text-primary font-medium text-sm">
                  Découvrir les produits
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-section" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Tous nos produits pour le bâtiment et l'industrie
          </h2>
          
          {/* Search and Filter Bar */}
          <Collapsible open={filtersOpen} onOpenChange={setFiltersOpen}>
            <div className="bg-card rounded-2xl p-4 mb-8 shadow-sm border border-border">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Rechercher un produit..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 text-base rounded-xl border-border"
                  />
                </div>
                
                {/* Filter Toggle Button */}
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="h-12 px-4 rounded-xl border-border flex items-center gap-2"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    <span>Filtres</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${filtersOpen ? "rotate-180" : ""}`} />
                  </Button>
                </CollapsibleTrigger>
              </div>
              
              {/* Collapsible Category Filters */}
              <CollapsibleContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {categoryFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedCategory(filter.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === filter.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                      }`}
                    >
                      {filter.name}
                    </button>
                  ))}
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          {/* Results count */}
          <p className="text-muted-foreground mb-6">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""} trouvé{filteredProducts.length > 1 ? "s" : ""}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Aucun produit ne correspond à votre recherche.</p>
              <Button 
                variant="outline" 
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                className="mt-4"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>

      <ExploreMore currentPath="/batiment" />
    </Layout>
  );
};

export default Batiment;
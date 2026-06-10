"use client";

import { motion } from "framer-motion";
import { PersonStanding, Flame, Network, Volume2, Footprints, Wrench, Sparkles } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import FeatureCardGrid from "@/components/FeatureCardGrid";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import salonsImage from "@/assets/categories/commerce/salons.webp";

const features = [
  {
    icon: PersonStanding,
    title: "anti-glisse",
    description: "éviter des chutes ou des blessures des exposants ou des visiteurs (la résistance au glissement R10 (DIN 51130) et Label DS)"
  },
  {
    icon: Flame,
    title: "classification au feu",
    description: "certification au feu Cfl-s1 « difficilement inflammable »"
  },
  {
    icon: Network,
    title: "options de design",
    description: "Plusieurs designs de couleurs disponibles, possible de découper en toute forme"
  },
  {
    icon: Volume2,
    title: "propriétés insonorisants",
    description: "pour un environnement sonore plus confortable (-16 dB à 6 mm d'épaisseur)"
  },
  {
    icon: Footprints,
    title: "confort de marche",
    description: "Sol en caoutchouc offre une élasticité et protège les articulations"
  },
  {
    icon: Wrench,
    title: "installation facile",
    description: "des revêtements de sols temporaires doivent pouvoir est rapidement installés et désinstallés"
  },
  {
    icon: Sparkles,
    title: "nettoyage facile",
    description: "rapide et simple pour toutes personnes, minimisant les coûts d'entretien"
  }
];

const Salons = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={salonsImage.src}
            alt="Salons et événements"
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
            <BackButton label="Retour à Sport" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 group" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Salons et événements
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Espaces événementiels
            </p>
          </motion.div>
        </div>
      </section>
      {/* Avantages techniques — FeatureCardGrid, replaces icon-card grid */}
      <FeatureCardGrid
        eyebrow="Avantages techniques"
        heading="Pourquoi nos sols pour salons et événements"
        items={features}
      />

      {/* Products Section */}
      <section className="py-16 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Produits utilisés
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Découvrez notre gamme de revêtements SPORTEC® adaptés aux salons et événements
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportProducts.filter((p) => !["sportec-base-fr", "sportec-base-ms", "sportec-style", "sportec-mountain", "sportec-icemat"].includes(p.slug)).map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ExploreMore />
    </Layout>
  );
};

export default Salons;
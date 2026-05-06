"use client";

import { motion } from "framer-motion";
import { Footprints, Network, Flame, Dumbbell, PersonStanding, Shield, Volume2, Sparkles } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import magasinsImage from "@/assets/categories/commerce/magasins.webp";

const features = [
  {
    icon: Footprints,
    title: "confort de marche",
    description: "Sol en caoutchouc offre une élasticité et protège les articulations"
  },
  {
    icon: Network,
    title: "design moderne",
    description: "facile à intégrer dans le style du magasin"
  },
  {
    icon: Flame,
    title: "classification au feu",
    description: "certification au feu Cfl-s1 « difficilement inflammable » (purcolor, variant, UNI classic)"
  },
  {
    icon: Dumbbell,
    title: "robuste",
    description: "résister à l'usure de l'utilisation quotidienne"
  },
  {
    icon: PersonStanding,
    title: "anti-glisse",
    description: "la résistance au glissement R10 (DIN 51130) et Label DS; éviter des chutes ou des blessures des clients ou des employées"
  },
  {
    icon: Shield,
    title: "antistatique",
    description: "revêtement de sol antistatique selon la norme DIN EN 1815 (color, splash, giga)"
  },
  {
    icon: Volume2,
    title: "propriétés insonorisants",
    description: "pour un environnement sonore plus confortable (-16 dB à 6 mm d'épaisseur)"
  },
  {
    icon: Sparkles,
    title: "nettoyage facile",
    description: "rapide et simple pour toutes personnes, minimisant les coûts d'entretien (un nettoyage facile de la surface grâce au vernissage)"
  }
];

const Magasins = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={magasinsImage.src}
            alt="Magasins"
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
              Magasins
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Commerces et boutiques
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-foreground/95 rounded-2xl p-6 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-white/80" />
                </div>
                <h3 className="text-primary font-semibold text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Découvrez notre gamme de revêtements SPORTEC® adaptés aux commerces et boutiques
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportProducts.map((product, index) => (
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

export default Magasins;
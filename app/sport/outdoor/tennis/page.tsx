"use client";

import Link from "next/link";
import { Circle, PersonStanding, Award, Snowflake, Dumbbell, Wrench, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import FeatureCardGrid from "@/components/FeatureCardGrid";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import heroImage from "@/assets/categories/sport/outdoor.webp";

const features = [
  {
    icon: Circle,
    title: "caractéristiques de rebond élevés",
    description: "la surface est adapté au tennis (100% de rebondissement de la balle)"
  },
  {
    icon: PersonStanding,
    title: "confort de jeu",
    description: "pour préserver le système musculo-squelettique et les articulations des athlètes et prévenir les blessures dû aux chutes"
  },
  {
    icon: Award,
    title: "ITF-Speed Class certifié",
    description: "SPORTEC® UNI versa sandwich est certifié conforme à la norme ITF CS 01/02 \"slow\" (1)"
  },
  {
    icon: Snowflake,
    title: "résistance aux intempéries",
    description: "le revêtement peut être utilisé dans tous les endroits et sous tous les climats du monde"
  },
  {
    icon: Dumbbell,
    title: "résistance",
    description: "afin de faire face aux divers stress et tensions du tennis dus aux changements rapides de mouvements"
  },
  {
    icon: Wrench,
    title: "installation facile",
    description: "il suffit de dérouler, couper et coller (sans équipement particulier = économie de coûts d'installation)"
  },
  {
    icon: Sparkles,
    title: "nettoyage et entretien facile",
    description: "Il suffit de balayer et d'essuyer avec de l'eau"
  }
];

const Tennis = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.src}
            alt="Tennis, Padel, Pickleball"
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
            <BackButton label="Retour à Sport Outdoor" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 group" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Tennis, Padel, Pickleball
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Solutions pour les sports de raquette.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Avantages techniques — FeatureCardGrid, replaces icon-card grid */}
      <FeatureCardGrid
        eyebrow="Avantages techniques"
        heading="Pourquoi nos sols pour tennis, Padel, Pickleball"
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
              Découvrez notre gamme de revêtements adaptés aux sports de raquette
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

      <ExploreMore currentPath="/sport/outdoor/tennis" />
    </Layout>
  );
};

export default Tennis;
"use client";

import { motion } from "framer-motion";
import { Heart, Hand, Shield, PersonStanding, Accessibility, Network, Volume2, Wrench } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import FeatureCardGrid from "@/components/FeatureCardGrid";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import reeducationImage from "@/assets/categories/commerce/reeducation.webp";

const features = [
  {
    icon: Heart,
    title: "confort",
    description: "adapté aux différentes méthodes d'entrainement et des cours de rééducation"
  },
  {
    icon: Hand,
    title: "protection des articulations",
    description: "élasticité qui absorbe les chocs et protège les articulations"
  },
  {
    icon: Shield,
    title: "absorption de choc",
    description: "Le revêtement de sol en caoutchouc élastique absorbe les chocs et contribue à réduire la charge sur le"
  },
  {
    icon: PersonStanding,
    title: "anti-glisse",
    description: "la résistance au glissement R10 (DIN 51130) et Label DS"
  },
  {
    icon: Accessibility,
    title: "fauteuil roulant",
    description: "faciliter l'accès pour les patients"
  },
  {
    icon: Network,
    title: "design",
    description: "Créer un environnement coloré et positif pour les patients (découpage facile de sol possible avec designs et couleurs différents)"
  },
  {
    icon: Volume2,
    title: "réduction du bruit de pas",
    description: "moins de bruit pour un environnement sonore plus confortable (réduction des bruits de pas d'environ -16 dB pour 6mm)"
  },
  {
    icon: Wrench,
    title: "installation facile",
    description: "simplement dérouler, découper et coller (sans équipement particulier = économie de coûts d'installation)"
  }
];

const Reeducation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={reeducationImage.src}
            alt="Rééducation"
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
              Rééducation
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Centres de rééducation et kinésithérapie
            </p>
          </motion.div>
        </div>
      </section>
      {/* Avantages techniques — FeatureCardGrid, replaces icon-card grid */}
      <FeatureCardGrid
        eyebrow="Avantages techniques"
        heading="Pourquoi nos sols pour rééducation"
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
              Découvrez notre gamme de revêtements SPORTEC® adaptés aux centres de rééducation
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

export default Reeducation;
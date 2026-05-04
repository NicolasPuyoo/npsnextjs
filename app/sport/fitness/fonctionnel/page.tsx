"use client";

import { motion } from "framer-motion";
import { Dumbbell, Shield, Footprints, Volume2, Wrench, Sparkles } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import fonctionnelImage from "@/assets/categories/fitness/fonctionnel.webp";

const features = [
  {
    icon: Dumbbell,
    title: "revêtement résistant et durable",
    description: "pour répondre à la diversité des types d'entraînements fonctionnels et des cours; un revêtement de sol polyvalent"
  },
  {
    icon: Shield,
    title: "protection contre les détériorations du support",
    description: "afin que le sol (souvent dalle béton) ne soit pas endommagé par les forces d'impact élevées. Pas de frais pour les travaux de réparation (protection des appareils avec 10 – 12 mm de revêtement de sol robuste et élastique)"
  },
  {
    icon: Shield,
    title: "protection contre les détériorations des appareils",
    description: "éviter d'abîmer les appareils. Pas de frais de réparation ou rachat de matériels"
  },
  {
    icon: Footprints,
    title: "stabilité et performance anti-glisse",
    description: "la résistance au glissement R10 (DIN 51130)"
  },
  {
    icon: Volume2,
    title: "propriétés insonorisants",
    description: "moins de bruit dans le studio et dans des bâtiments à plusieurs étages en minimisant les impacts et les vibrations dans les pièces adjacentes (env. -20 dB pour 10 – 12 mm d'épaisseur)"
  },
  {
    icon: Wrench,
    title: "installation facile",
    description: "simplement dérouler, découper et coller"
  },
  {
    icon: Sparkles,
    title: "une maintenance aisée",
    description: "le revêtement de sol peut être découpé et échangé"
  }
];

const Fonctionnel = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={fonctionnelImage.src}
            alt="Entraînement fonctionnel"
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
            <BackButton label="Retour à Sport" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 group" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Entraînement fonctionnel
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Zones de cross-training
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#4a4a4a] rounded-2xl p-6 text-center"
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
      <section className="py-16 bg-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Produits utilisés
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Découvrez notre gamme de revêtements SPORTEC® adaptés à l'entraînement fonctionnel
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
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

export default Fonctionnel;
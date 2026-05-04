"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import NumberedFeatures from "@/components/NumberedFeatures";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import fitnessImage from "@/assets/categories/fitness.webp";

const features = [
  {
    title: "revêtement résistant et durable",
    description: "pour répondre à la diversité des types d'entraînements et des cours de fitness; un revêtement de sol polyvalent"
  },
  {
    title: "protection contre les détériorations du support",
    description: "afin que le sol (souvent dalle béton) ne soit pas endommagé par les forces d'impact élevées. Pas de frais pour les travaux de réparation"
  },
  {
    title: "confort de l'athlète",
    description: "ergonomie et absorption de choc pour les athlètes ce qui assure la protection des articulations"
  },
  {
    title: "anti-glisse",
    description: "la résistance au glissement R10 (DIN 51130) et Label DS"
  },
  {
    title: "propriétés insonorisants",
    description: "-16 dB à 6 mm d'épaisseur, à environ -20 dB à 10-12 mm d'épaisseur"
  },
  {
    title: "installation facile",
    description: "simplement dérouler, découper et coller"
  },
  {
    title: "nettoyage et entretien facile",
    description: "minimisant les coûts d'entretien des revêtements de sol hautement fréquentés"
  }
];

const Fitness = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={fitnessImage.src}
            alt="Fitness"
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
              Fitness
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Salles de fitness polyvalentes
            </p>
          </motion.div>
        </div>
      </section>
      <NumberedFeatures
        items={features}
        variant="dark"
        eyebrow="Pourquoi nos sols"
        heading="Pensés pour fitness."
      />

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
              Découvrez notre gamme de revêtements SPORTEC® adaptés aux salles de fitness
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

export default Fitness;
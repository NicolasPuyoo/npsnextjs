"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import NumberedFeatures from "@/components/NumberedFeatures";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import heroImage from "@/assets/categories/sport/outdoor.webp";

const features = [
  {
    title: "Protection de l'athlète",
    description: "ergonomie et diffusion de force pour les athlètes, assure la protection des articulations des athlètes"
  },
  {
    title: "Résistance aux pointes",
    description: "résistant aux pointes grâce à une couche de finition à pores ouvert et une couche élastique épaisse"
  },
  {
    title: "Certification du système",
    description: "Les produits SPORTEC® sont certifiés selon la norme EN 14877 ou IAAF"
  },
  {
    title: "Résistance aux intempéries",
    description: "le revêtement peut être utilisé dans tous les endroits et sous tous les climats du monde"
  },
  {
    title: "Séchage rapide",
    description: "utilisation rapide après une averse (séchage rapide grâce à une structure en pore ouvert de la couche de finition)"
  },
  {
    title: "Couche de finition non glissante",
    description: "résistance au glissement classement R10 (DIN 51130) et coefficient de friction de env. 0.8μ"
  },
  {
    title: "Installation facile",
    description: "simplement dérouler, découper et coller (sans équipement particulier = économie de coûts d'installation)"
  },
  {
    title: "Nettoyage et entretien facile",
    description: "balayer et laver avec de l'eau clair est suffisant"
  }
];

const Athletisme = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.src}
            alt="Athlétisme"
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
            <BackButton label="Retour à Sport Outdoor" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 group" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Athlétisme
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Pistes et zones d'athlétisme certifiées.
            </p>
          </motion.div>
        </div>
      </section>
      <NumberedFeatures
        items={features}
        variant="dark"
        eyebrow="Pourquoi nos sols"
        heading="Pensés pour athlétisme."
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
              Découvrez notre gamme de revêtements certifiés pour l'athlétisme
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

      <ExploreMore currentPath="/sport/outdoor/athletisme" />
    </Layout>
  );
};

export default Athletisme;
"use client";

import Link from "next/link";
import { Footprints, ShieldCheck, PersonStanding, Dumbbell, Volume2, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import heroImage from "@/assets/categories/sport/stations-ski.webp";

const features = [
  {
    icon: Footprints,
    title: "anti-glisse",
    description: "assure la sécurité des patineurs et des spectateurs contre des blessures dans des zones à risque (la résistance au glissement R10 (DIN 51130))"
  },
  {
    icon: ShieldCheck,
    title: "protection du matériel de ski",
    description: "protection du matériel de ski avec un épaisseur de 10 à 12mm"
  },
  {
    icon: PersonStanding,
    title: "confort de marche",
    description: "le sol absorbe des chocs et aide à éviter des blessures aux articulations des skieurs"
  },
  {
    icon: Dumbbell,
    title: "robuste",
    description: "capable d'absorber les charges du matériel de ski, les dalles peuvent être installé sur du caillebotis"
  },
  {
    icon: Volume2,
    title: "propriétés insonorisants",
    description: "pour un environnement sonore plus confortable (env. -20 dB pour 10 – 12 mm d'épaisseur)"
  },
  {
    icon: Wrench,
    title: "installation facile",
    description: "sans équipement particulier = économie de coûts d'installation"
  }
];

const StationsSki = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.src}
            alt="Stations de ski"
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
            <BackButton label="Retour à Sports d'hiver" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 group" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Stations de ski
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Solutions pour les stations de ski, refuges et zones de passage.
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
              Découvrez notre gamme de revêtements adaptés aux stations de ski
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

      <ExploreMore currentPath="/sport/sports-hiver/stations-ski" />
    </Layout>
  );
};

export default StationsSki;
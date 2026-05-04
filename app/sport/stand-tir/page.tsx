"use client";

import Link from "next/link";
import { Target, ShieldOff, Volume2, Snowflake, Award, Wrench, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import heroImage from "@/assets/categories/sport/stand-tir.webp";

const features = [
  {
    icon: Target,
    title: "absorption du projectile",
    description: "adapté à tout les calibres pour le tir sportive ou l'entrainement policier"
  },
  {
    icon: ShieldOff,
    title: "éviter des ricochets",
    description: "absorption de la balle grâce à sa surface poreux et élastique"
  },
  {
    icon: Volume2,
    title: "propriétés insonorisants",
    description: "moins de bruit de tir et d'impact dans le champs de tir"
  },
  {
    icon: Snowflake,
    title: "résistance aux intempéries",
    description: "caoutchouc imputrescible qui assure la résistance aux intempéries"
  },
  {
    icon: Award,
    title: "certifié",
    description: "assurer la sécurité et l'acceptation du produit pour les champs de tir (« bureau de formation aux armes » à Munich)"
  },
  {
    icon: Wrench,
    title: "installation facile",
    description: "simplement intercaler les dalles ou les fixer sur un support en bois"
  },
  {
    icon: Sparkles,
    title: "entretien facile et rapide",
    description: "changement d'emplacement des blocs et des dalles afin d'éviter des fermetures du champ de tir"
  }
];

const StandTir = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.src}
            alt="Stand de tir"
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
              Stand de tir
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Solutions acoustiques spécialisées pour les stands de tir, 
              assurant sécurité et confort sonore.
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
              Découvrez notre gamme de revêtements adaptés aux stands de tir
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

      <ExploreMore currentPath="/sport/stand-tir" />
    </Layout>
  );
};

export default StandTir;
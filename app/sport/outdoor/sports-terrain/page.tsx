"use client";

import Link from "next/link";
import { Layers, Circle, Droplet, FlaskRound, Snowflake, Wrench, Award } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import heroImage from "@/assets/categories/sport/outdoor.webp";

const features = [
  {
    icon: Layers,
    title: "polyvalence",
    description: "adapté aux besoins de plusieurs types de gazon artificiel pour le foot – une couche élastique pour toute système; adapté aux systèmes de gazon artificiel pour le foot – avec ou sans lestage"
  },
  {
    icon: Circle,
    title: "caractéristiques de rebond",
    description: "rebond de ballon ajustable selon l'épaisseur du système (permets le système de gazon synthétique d'être parfaitement adapté au foot)"
  },
  {
    icon: Droplet,
    title: "perméable",
    description: "terrain doit rester sec et libre de flaques d'eau; perméabilité haute avec 4500 cm/h (EN 12616) avec SPORTEC® team cup"
  },
  {
    icon: FlaskRound,
    title: "absorption de choc élevé",
    description: "absorption de choc performant grâce a une structure en pore ouvert; protège le jouer des blessures"
  },
  {
    icon: Snowflake,
    title: "résistant et robuste",
    description: "la couche élastique peut être utilisé dans tous les endroits et sous tous les climats du monde et est rentable au longe-terme (caoutchouc imputrescible qui assure la durabilité)"
  },
  {
    icon: Wrench,
    title: "installation facile",
    description: "simplement dérouler et découper comme nécessaire"
  },
  {
    icon: Award,
    title: "conformité aux normes",
    description: "contribue à la réalisation des exigences normatives des systèmes de gazon artificiels"
  }
];

const SportsTerrain = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.src}
            alt="Sports de terrain"
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
              Sports de terrain
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Football, rugby et autres sports de terrain.
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
              Découvrez notre gamme de revêtements adaptés aux sports de terrain
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

      <ExploreMore currentPath="/sport/outdoor/sports-terrain" />
    </Layout>
  );
};

export default SportsTerrain;
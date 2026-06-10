"use client";

import { motion } from "framer-motion";
import { Target, Dumbbell, Shield, Footprints, CircleDot, Wrench, Volume2 } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import FeatureCardGrid from "@/components/FeatureCardGrid";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import halterophilieImage from "@/assets/categories/fitness/halterophilie.webp";

const features = [
  {
    icon: Target,
    title: "haute résistance au chocs / rebond faible",
    description: "pour résister à la chute constante de poids et maximiser la protection des pieds et des tibias contre le rebond de poids"
  },
  {
    icon: Dumbbell,
    title: "protection contre les détériorations du support",
    description: "afin que le sol (souvent dalle béton) ne soit pas endommagé par les forces d'impact élevées. Pas de frais pour les travaux de réparation"
  },
  {
    icon: Shield,
    title: "protection contre les détériorations des appareils",
    description: "éviter d'abîmer les appareils. Pas de frais de réparation ou rachat de matériels"
  },
  {
    icon: Footprints,
    title: "stabilité",
    description: "afin de bien soutenir l'athlète pendant le soulèvement des haltères et donc éviter des blessures"
  },
  {
    icon: CircleDot,
    title: "revêtement amovible",
    description: "la zone d'haltérophilie peut être installée comme désiré et si besoin, peut être enlevée et réinstallée autre part"
  },
  {
    icon: Wrench,
    title: "installation facile",
    description: "tous les dalles sont équipés de goujons préinstallés à l'usine"
  },
  {
    icon: Volume2,
    title: "propriétés insonorisants",
    description: "réduction sonore de 24 dB avec une dalle de 30 mm d'épaisseur"
  }
];

const Halterophilie = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={halterophilieImage.src}
            alt="Haltérophilie"
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
              Haltérophilie
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Espaces de musculation et haltérophilie
            </p>
          </motion.div>
        </div>
      </section>
      {/* Avantages techniques — FeatureCardGrid, replaces icon-card grid */}
      <FeatureCardGrid
        eyebrow="Avantages techniques"
        heading="Pourquoi nos sols pour haltérophilie"
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
              Notre recommandation
            </h2>
            <p className="text-white/75 max-w-3xl mx-auto leading-relaxed">
              Pour la musculation et l'haltérophilie, le
              <strong className="text-white"> SPORTEC® STYLE</strong> protège votre sol des chutes
              de charges lourdes. Sur les zones de drop (deadlift, snatch), nous combinons une
              plateforme bois sur
              <strong className="text-white"> SPORTEC® BASE FR</strong>{" "}
              (dalle 30 mm Cfl-s1, absorption choc 51 %). Voici la gamme complète disponible.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportProducts.filter((p) => !["sportec-mountain", "sportec-icemat"].includes(p.slug)).map((product, index) => (
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

export default Halterophilie;
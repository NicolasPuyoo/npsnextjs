"use client";

import { motion } from "framer-motion";
import { Heart, Target, Dumbbell, Sparkles, CircleDot, Wrench } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import FeatureCardGrid from "@/components/FeatureCardGrid";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import yogaImage from "@/assets/categories/fitness/yoga.webp";

const features = [
  {
    icon: Heart,
    title: "protection des articulations",
    description: "revêtement de sol adapté aux personnes âgées aussi bien que ceux en rééducation"
  },
  {
    icon: Target,
    title: "absorption de choc élevé",
    description: "très haute absorption de choc (44%) avec seulement 9mm d'épaisseur"
  },
  {
    icon: Dumbbell,
    title: "durabilité",
    description: "éviter le remplacement régulier des tapis; épargne du temps et de l'argent"
  },
  {
    icon: Sparkles,
    title: "nettoyage facile",
    description: "un nettoyage facile grâce à sa surface imperméable"
  },
  {
    icon: CircleDot,
    title: "polyvalence",
    description: "dalle puzzle amovible avec très haute élasticité"
  },
  {
    icon: Wrench,
    title: "sol confortable",
    description: "finition « peau de vache » de haut confort"
  }
];

const Yoga = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={yogaImage.src}
            alt="Yoga, Pilates et Rééducation"
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
              Yoga, Pilates et Rééducation
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Espaces de bien-être
            </p>
          </motion.div>
        </div>
      </section>
      {/* Avantages techniques — FeatureCardGrid, replaces icon-card grid */}
      <FeatureCardGrid
        eyebrow="Avantages techniques"
        heading="Pourquoi nos sols pour yoga, Pilates et Rééducation"
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
              Pour les studios yoga, pilates et rééducation, nous conseillons en priorité le
              <strong className="text-white"> SPORTEC® BASE MS</strong> pour sa souplesse pieds nus
              et son confort, complété par le
              <strong className="text-white"> SPORTEC® PUZZLE 2.0</strong> pour la flexibilité
              d'aménagement modulaire. Voici la gamme complète SPORTEC® disponible.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportProducts.filter((p) => !["sportec-base-fr", "sportec-base-ms", "sportec-style"].includes(p.slug)).map((product, index) => (
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

export default Yoga;
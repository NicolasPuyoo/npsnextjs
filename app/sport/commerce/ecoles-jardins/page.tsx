"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "@/components/Layout";
import CategoryFeatureList from "@/components/CategoryFeatureList";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import ecoleJardinImage from "@/assets/categories/commerce/ecole-jardin.webp";

const features = [
  {
    title: "Confort de marche",
    description: "ergonomique pour les enfants et les enseignants"
  },
  {
    title: "Design",
    description: "revêtement de sol de couleurs variés peut être découpé pour convenir à toute forme (Créer un environnement coloré et créative pour les enfants)"
  },
  {
    title: "robuste",
    description: "surface durable, solide et résistante à l'abrasion"
  },
  {
    title: "anti-glisse",
    description: "la résistance au glissement R10 (DIN 51130) et Label DS (éviter des chutes ou des blessures)"
  },
  {
    title: "classification au feu",
    description: "certification au feu Cfl-s1 « difficilement inflammable » (répondre aux réglementations de sécurité des écoles et minimiser le risque de danger en cas de feu)"
  },
  {
    title: "propriétés insonorisants",
    description: "moins de bruit dans le studio et dans des bâtiments à plusieurs étages en minimisant les impacts et les vibrations dans les salles de classe adjacentes (-16 dB à 6 mm d'épaisseur)"
  },
  {
    title: "nettoyage facile",
    description: "minimiser les efforts d'entretien des sols fréquentés par des enfants ou des étudiants"
  },
  {
    title: "faibles émissions",
    description: "certifié A+ selon les critères AFFSET (COV's) et bénéficié de l'approbation technique du DIBt"
  }
];

const EcolesJardins = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={ecoleJardinImage.src}
            alt="Écoles et jardins"
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
              Écoles et jardins d'enfants
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Établissements scolaires et espaces pour enfants
            </p>
          </motion.div>
        </div>
      </section>
      {/* Features (sober numbered list, replaces icon-card AI slop) */}
      <CategoryFeatureList items={features} />

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
              Découvrez notre gamme de revêtements SPORTEC® adaptés aux écoles et jardins d'enfants
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

      <ExploreMore />
    </Layout>
  );
};

export default EcolesJardins;
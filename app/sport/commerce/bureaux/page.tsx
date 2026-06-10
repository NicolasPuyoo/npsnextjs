"use client";

import { motion } from "framer-motion";
import { PersonStanding, Flame, Network, Leaf, Volume2, Footprints, Sparkles } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import FeatureCardGrid from "@/components/FeatureCardGrid";
import { sportProducts } from "@/data/products";
import bureauImage from "@/assets/categories/commerce/bureaux.webp";

const features = [
  {
    icon: PersonStanding,
    title: "anti-glisse",
    description: "la résistance au glissement R10 (DIN 51130) et Label DS; éviter des chutes ou des blessures des clients ou des employées"
  },
  {
    icon: Flame,
    title: "classification au feu",
    description: "certification au feu Cfl-s1 « difficilement inflammable » (purcolor, variant, UNI classic)"
  },
  {
    icon: Network,
    title: "design moderne",
    description: "intégration facile dans le style du bureau et l'architecture du bâtiment"
  },
  {
    icon: Leaf,
    title: "faibles émissions",
    description: "fournir un environnement sain pour les employées (SPORTEC® purcolor certifié A+ selon les critères AFFSET (COV's))"
  },
  {
    icon: Volume2,
    title: "propriétés insonorisants",
    description: "moins de bruit dans le studio et dans des bâtiments à plusieurs étages en minimisant les impacts et les vibrations dans les pièces adjacentes (-16 dB à 6 mm d'épaisseur)"
  },
  {
    icon: Footprints,
    title: "confort de marche",
    description: "le revêtement de sol en caoutchouc assure l'élasticité et protège les articulations, ce qui est ergonomique pour les clients et les travailleurs"
  },
  {
    icon: Sparkles,
    title: "nettoyage facile",
    description: "un nettoyage facile de la surface grâce au vernissage; minimisant les coûts d'entretien des revêtements de sol hautement fréquentés"
  }
];

const Bureaux = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={bureauImage.src}
            alt="Bureaux"
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
              Bureaux
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Espaces de travail et open-spaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Avantages techniques — sobre, 2-col, left-aligned, headed section */}
      <FeatureCardGrid
        eyebrow="Avantages techniques"
        heading="Pourquoi nos sols pour bureaux"
        intro="Sept critères que les architectes et facility managers vérifient avant chaque projet d'aménagement tertiaire."
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
              Découvrez notre gamme de revêtements SPORTEC® adaptés aux espaces de bureaux
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

export default Bureaux;
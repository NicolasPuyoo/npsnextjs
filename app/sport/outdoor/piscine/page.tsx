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
    title: "anti-glisse",
    description: "assure la sécurité des nageurs ou des touristes autour du bassin contre des blessures dans des zones à risque (la résistance au glissement R10 (DIN 51130))"
  },
  {
    title: "stabilité et anti-glisse",
    description: "assure la sécurité des personnes à pieds nues autour de la piscine (la résistance au glissement C)"
  },
  {
    title: "confort de marche",
    description: "le sol absorbe des chocs et améliore le confort sous le pied"
  },
  {
    title: "résistance au chlore",
    description: "le revêtement de sol sera en contact quasi-permanent avec l'eau de piscine"
  },
  {
    title: "durabilité",
    description: "peut résister aux intempéries et à l'utilisation de haute fréquence"
  },
  {
    title: "installation facile",
    description: "simplement dérouler, découper et coller"
  }
];

const Piscine = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.src}
            alt="Piscine"
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
              Piscine
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Revêtements antidérapants pour les abords de piscine.
            </p>
          </motion.div>
        </div>
      </section>
      <NumberedFeatures
        items={features}
        variant="dark"
        eyebrow="Pourquoi nos sols"
        heading="Pensés pour piscine."
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
              Découvrez notre gamme de revêtements adaptés aux abords de piscine
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

      <ExploreMore currentPath="/sport/outdoor/piscine" />
    </Layout>
  );
};

export default Piscine;
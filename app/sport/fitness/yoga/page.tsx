"use client";

import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import NumberedFeatures from "@/components/NumberedFeatures";
import { sportProducts } from "@/data/products";
import yogaImage from "@/assets/categories/fitness/yoga.webp";

const features = [
  {
    title: "Protection des articulations",
    description: "Revêtement de sol adapté aux personnes âgées aussi bien qu'à celles en rééducation. Le confort articulaire est notre priorité.",
  },
  {
    title: "Absorption de choc élevée",
    description: "Très haute absorption de choc (44%) avec seulement 9 mm d'épaisseur. Idéal pour les chutes en yoga ou pilates.",
  },
  {
    title: "Durabilité longue durée",
    description: "Évite le remplacement régulier des tapis. Économie de temps et d'argent sur la durée d'exploitation.",
  },
  {
    title: "Nettoyage facile",
    description: "Surface imperméable qui se nettoie en quelques minutes. Hygiène et sécurité dans les espaces de pratique partagés.",
  },
  {
    title: "Polyvalence d'usage",
    description: "Dalles puzzle amovibles à très haute élasticité. Reconfiguration rapide pour adapter la salle à chaque cours.",
  },
  {
    title: "Confort pieds nus",
    description: "Finition « peau de vache » offrant un toucher haut de gamme. Les pratiquants restent pieds nus en confort.",
  },
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
            initial={{ opacity: 0, y: 30 }}
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

      {/* Pourquoi nos sols pour le yoga — pattern numéroté */}
      <NumberedFeatures
        items={features}
        variant="dark"
        eyebrow="Pourquoi nos sols"
        heading="Pensés pour le confort et la sécurité de vos pratiquants."
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

export default Yoga;
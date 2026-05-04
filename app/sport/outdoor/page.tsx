"use client";

import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import NumberedFeatures from "@/components/NumberedFeatures";
import heroImage from "@/assets/categories/sport/outdoor.webp";

const outdoorCategories = [
  {
    title: "Multi-jeux",
    description: "Terrains polyvalents pour les city-stades, playgrounds et aires multi-activités. Revêtements résistants à l'usage intensif.",
    href: "/sport/outdoor/multi-jeux",
  },
  {
    title: "Basket",
    description: "Revêtements optimisés pour les terrains de basket-ball outdoor. Adhérence, absorption d'impact, durabilité face aux UV.",
    href: "/sport/outdoor/basket",
  },
  {
    title: "Tennis, padel, pickleball",
    description: "Solutions pour les sports de raquette : courts extérieurs, drainage rapide, longévité.",
    href: "/sport/outdoor/tennis",
  },
  {
    title: "Athlétisme",
    description: "Pistes et zones d'athlétisme aux performances homologuées. Conformes aux normes IAAF.",
    href: "/sport/outdoor/athletisme",
  },
  {
    title: "Sports de terrain",
    description: "Football, rugby, hockey et autres sports de terrain. Drainage, résistance aux crampons, confort de jeu.",
    href: "/sport/outdoor/sports-terrain",
  },
  {
    title: "Piscine",
    description: "Revêtements antidérapants drainants pour plages de bassins et abords aquatiques. Sécurité pieds nus.",
    href: "/sport/outdoor/piscine",
  },
  {
    title: "Aires de loisirs",
    description: "Aires de jeux, parcs publics, parcours santé. Sécurité enfants, antichoc, antidérapant.",
    href: "/sport/outdoor/loisirs",
  },
  {
    title: "Golf",
    description: "Sols pour zones de practice golf, putting greens et chemins de circulation. Confort de marche et durabilité.",
    href: "/sport/outdoor/golf",
  },
];

const SportOutdoor = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage.src}
            alt="Sport Outdoor"
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
              Sport Outdoor
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Revêtements et solutions pour les terrains de sport en extérieur,
              résistants aux conditions climatiques.
            </p>
          </motion.div>
        </div>
      </section>

      <NumberedFeatures
        items={outdoorCategories}
        variant="dark"
        eyebrow="Disciplines"
        heading="Une solution dédiée pour chaque sport extérieur."
      />

      <ExploreMore currentPath="/sport/outdoor" />
    </Layout>
  );
};

export default SportOutdoor;

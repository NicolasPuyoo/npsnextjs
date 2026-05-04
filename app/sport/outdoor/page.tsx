"use client";

import Link from "next/link";
import { ArrowRight, Gamepad2, Dribbble, CircleDot, Timer, Trophy, Waves, TreePine, Flag, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import heroImage from "@/assets/categories/sport/outdoor.webp";

interface OutdoorCategory {
  id: string;
  name: string;
  description: string;
  path: string;
  icon: LucideIcon;
}

const outdoorCategories: OutdoorCategory[] = [
  {
    id: "multi-jeux",
    name: "Multi-jeux",
    description: "Terrains polyvalents pour diverses activités sportives",
    path: "/sport/outdoor/multi-jeux",
    icon: Gamepad2
  },
  {
    id: "basket",
    name: "Basket",
    description: "Revêtements optimisés pour les terrains de basketball",
    path: "/sport/outdoor/basket",
    icon: Dribbble
  },
  {
    id: "tennis",
    name: "Tennis, Padel, Pickleball",
    description: "Solutions pour les sports de raquette",
    path: "/sport/outdoor/tennis",
    icon: CircleDot
  },
  {
    id: "athletisme",
    name: "Athlétisme",
    description: "Pistes et zones d'athlétisme certifiées",
    path: "/sport/outdoor/athletisme",
    icon: Timer
  },
  {
    id: "sports-terrain",
    name: "Sports de terrain",
    description: "Football, rugby et autres sports de terrain",
    path: "/sport/outdoor/sports-terrain",
    icon: Trophy
  },
  {
    id: "piscine",
    name: "Piscine",
    description: "Revêtements antidérapants pour les abords de piscine",
    path: "/sport/outdoor/piscine",
    icon: Waves
  },
  {
    id: "loisirs",
    name: "Activités de loisirs",
    description: "Aires de jeux et espaces de loisirs",
    path: "/sport/outdoor/loisirs",
    icon: TreePine
  },
  {
    id: "golf",
    name: "Golf",
    description: "Solutions pour les terrains et installations de golf",
    path: "/sport/outdoor/golf",
    icon: Flag
  }
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

      {/* Categories Grid */}
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
              Nos domaines d'expertise
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Découvrez nos solutions spécialisées pour les sports en extérieur
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outdoorCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href={category.path}
                  className="block bg-[#4a4a4a] rounded-2xl p-6 hover:bg-[#555555] transition-colors group h-full"
                >
                  <div className="w-12 h-12 mb-4 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                    Découvrir
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ExploreMore currentPath="/sport/outdoor" />
    </Layout>
  );
};

export default SportOutdoor;
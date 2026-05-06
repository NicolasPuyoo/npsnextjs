"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import heroImage from "@/assets/categories/sport/hiver.webp";
import stationsSkiImage from "@/assets/categories/sport/stations-ski.webp";
import patinageImage from "@/assets/categories/sport/patinage.webp";

const winterCategories = [
  {
    id: "stations-ski",
    name: "Stations de ski",
    description: "Solutions pour les stations de ski, refuges et zones de passage",
    path: "/sport/sports-hiver/stations-ski",
    image: stationsSkiImage.src
  },
  {
    id: "patinage",
    name: "Patinage sur glace",
    description: "Revêtements pour les patinoires et zones adjacentes",
    path: "/sport/sports-hiver/patinage",
    image: patinageImage.src
  }
];

const SportsHiver = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.src}
            alt="Sports d'hiver"
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
              Sports d'hiver
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Solutions pour patinoires, stations de ski et infrastructures 
              dédiées aux sports d'hiver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
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
              Nos domaines d'expertise
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Découvrez nos solutions spécialisées pour les sports d'hiver
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {winterCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href={category.path}
                  className="block bg-foreground/95 rounded-2xl overflow-hidden hover:bg-foreground/85 transition-colors group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-white/70 mb-6">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium">
                      Découvrir
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ExploreMore currentPath="/sport/sports-hiver" />
    </Layout>
  );
};

export default SportsHiver;
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import heroImage from "@/assets/categories/sport/indoor.webp";

const SportIndoor = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.src}
            alt="Sport Indoor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackButton label="Retour à Sport" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group" />
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Sport Indoor
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Solutions de revêtements pour gymnases, salles de sport couvertes 
              et complexes sportifs indoor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section - Placeholder for future content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>Contenu à venir...</p>
          </div>
        </div>
      </section>

      <ExploreMore currentPath="/sport/indoor" />
    </Layout>
  );
};

export default SportIndoor;
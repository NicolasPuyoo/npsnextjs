"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ProductGuideTable from "@/components/ProductGuideTable";
import ExploreMore from "@/components/ExploreMore";
import { fitnessGuide } from "@/data/productGuides";
import heroImage from "@/assets/categories/fitness.webp";

const GuideFitness = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.src}
            alt="Guide Fitness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackButton label="Retour à l'accueil" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {fitnessGuide.name}
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              {fitnessGuide.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guide Table Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ProductGuideTable guide={fitnessGuide} />
          </motion.div>
        </div>
      </section>

      <ExploreMore currentPath="/guide/fitness" />
    </Layout>
  );
};

export default GuideFitness;
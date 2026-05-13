"use client";

import Link from "next/link";
import { ShieldCheck, Footprints, Car, Volume2, Wrench, Shield, HardHat, User } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import heroImage from "@/assets/categories/sport/outdoor.webp";

const features = [
  {
    icon: Footprints,
    title: "Anti-glisse",
    description: "Assure la sécurité des golfeurs avec des chaussures aux crampons et éviter la chute et des blessures (résistance au glissement R10 - DIN 51130)"
  },
  {
    icon: ShieldCheck,
    title: "Résistance aux pointes",
    description: "Pour optimiser l'utilisation des chaussures de golf"
  },
  {
    icon: Car,
    title: "Accessible",
    description: "Aussi pour les golfettes"
  },
  {
    icon: Volume2,
    title: "Propriétés insonorisantes",
    description: "Pour un environnement sonore plus agréable"
  },
  {
    icon: Wrench,
    title: "Installation facile",
    description: "Simplement dérouler, découper et coller ou poser les tapis librement (sans équipement particulier = économie de coûts d'installation)"
  },
  {
    icon: Shield,
    title: "Protection des équipements et chaussures",
    description: "La protection des équipements et chaussures grâce au revêtement de haute densité et durable dans le temps"
  },
  {
    icon: HardHat,
    title: "Protection contre les détériorations du support",
    description: "Afin que le sol (souvent dalle béton) ne soit pas endommagé. Pas de frais pour les travaux de réparation (revêtement de haute densité)"
  },
  {
    icon: User,
    title: "Sol confortable",
    description: "Améliore la sensation de confort sous le pied et donc aide le golfeur à mieux se relâcher"
  }
];

const Golf = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.src}
            alt="Golf"
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
            <BackButton label="Retour à Sport Outdoor" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 group" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Golf
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Solutions pour les terrains et installations de golf.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-foreground/95 rounded-2xl p-6 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-white/80" />
                </div>
                <h3 className="text-primary font-semibold text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ExploreMore currentPath="/sport/outdoor/golf" />
    </Layout>
  );
};

export default Golf;
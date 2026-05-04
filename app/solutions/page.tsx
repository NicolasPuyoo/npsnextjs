"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ExploreMore from "@/components/ExploreMore";
import QuoteCTA from "@/components/QuoteCTA";

// Hero image
import heroImage from "@/assets/categories/solutions.webp";

// Images des solutions
import fitnessImage from "@/assets/solutions/fitness-gym.jpg";
import hotelsImage from "@/assets/solutions/hotels.jpg";
import toituresImage from "@/assets/solutions/toitures-terrasses.jpg";
import piscineImage from "@/assets/solutions/piscine.jpg";
import supermarchesImage from "@/assets/solutions/supermarches.png";
import desolidarisationImage from "@/assets/batiment/isolation-acoustique.jpg";

const solutions = [
  {
    id: "fitness-gym",
    title: "Fitness / Gym",
    description: "Nos solutions acoustiques pour les salles de sport offrent une isolation optimale contre les impacts et vibrations des équipements. Protégez les espaces adjacents tout en garantissant un confort d'entraînement maximal.",
    image: fitnessImage.src,
  },
  {
    id: "hotels",
    title: "Hôtels",
    description: "Assurez le confort acoustique de vos clients avec nos solutions d'isolation phonique pour l'hôtellerie. Réduisez les bruits de pas, les transmissions sonores entre chambres et les nuisances des équipements techniques.",
    image: hotelsImage.src,
  },
  {
    id: "toitures-terrasses",
    title: "Toitures et terrasses",
    description: "Protégez vos toitures-terrasses accessibles avec nos revêtements résistants aux intempéries et aux UV. Solutions anti-vibrations pour installations techniques et confort de marche optimisé.",
    image: toituresImage.src,
  },
  {
    id: "piscine",
    title: "Piscine / Bassin aquatique",
    description: "Des solutions spécialement conçues pour les environnements humides. Nos produits résistent à l'eau et aux produits chimiques tout en offrant une excellente absorption des bruits d'impact.",
    image: piscineImage.src,
  },
  {
    id: "supermarches",
    title: "Supermarchés & commerces",
    description: "Optimisez l'acoustique de vos surfaces commerciales avec nos solutions adaptées aux zones à fort trafic. Réduction des bruits de chariots, protection des sols et confort pour clients et employés.",
    image: supermarchesImage.src,
  },
  {
    id: "desolidarisation",
    title: "Désolidarisation ponctuelle ou surfacique des bâtiments",
    description: "Nos systèmes de désolidarisation permettent d'isoler efficacement les structures contre les vibrations et bruits solidiens. Solutions sur mesure pour une protection acoustique optimale des bâtiments.",
    image: desolidarisationImage.src,
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.src}
            alt="Nos Solutions"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Découvrez nos solutions acoustiques adaptées à chaque secteur d'activité. 
              De la conception à la réalisation, nous vous accompagnons pour répondre 
              à vos besoins spécifiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <Button asChild className="group">
                    <Link href={`/solutions/${solution.id}`}>
                      Voir les produits
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA
        title="Un projet sectoriel à étudier ?"
        description="Hôtellerie, ERP, équipements sportifs, collectivités : nos experts conçoivent la solution adaptée à votre cahier des charges."
      />
      <ExploreMore currentPath="/solutions" />
    </Layout>
  );
};

export default Solutions;
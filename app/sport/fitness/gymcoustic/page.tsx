"use client";

import { motion } from "framer-motion";
import { Volume2, Target, Palette, Ruler, Maximize, Percent, ChevronRight } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import gymcousticImage from "@/assets/categories/fitness/gymcoustic.webp";
import layersSchema from "@/assets/gymcoustic/layers-schema.png";
import gym3dView from "@/assets/gymcoustic/gym-3d-view.png";

// Product images imports
import sportecColor from "@/assets/products/sport/SPORTEC_COLOR.png";
import sportecStyle from "@/assets/products/sport/SPORTEC_STYLE.png";
import sportecPuzzle from "@/assets/products/sport/SPORTEC_PUZZLE_2_0.png";
import sportecBaseFR from "@/assets/products/sport/SPORTEC_BASE_FR.png";
import sportecBaseMS from "@/assets/products/sport/SPORTEC_BASE_MS.png";
import sportecAbsorberPads from "@/assets/products/sport/SPORTEC_ABSORBER_PADS.png";

// Product lines data with products
const productLines = [
  {
    name: "BASIC LINE",
    subtitle: "DALLES AUTONOMES AVEC DIFFÉRENTES POSSIBILITÉS DE DESIGN",
    description: "Des dalles autonomes modulaires offrant une flexibilité maximale en termes de design et d'installation. Idéales pour les espaces nécessitant une solution simple et efficace.",
    specs: [
      { label: "Épaisseur", value: "20 mm" },
      { label: "Absorption des chocs", value: "40%" },
      { label: "Réduction du bruit", value: "27 dB" },
      { label: "Dimensions", value: "500 x 500 mm" },
    ],
    bgColor: "from-[#2a2a2a] to-[#3a3a3a]",
    products: [
      {
        name: "SPORTEC® color",
        subtitle: "Dalles puzzle avec système d'emboîtement SPORTEC®2.0",
        image: sportecColor.src,
        slug: "sportec-color"
      },
      {
        name: "SPORTEC® style",
        subtitle: "Dalles puzzle avec système d'emboîtement SPORTEC®2.0",
        image: sportecStyle.src,
        slug: "sportec-style"
      }
    ]
  },
  {
    name: "ALL-ROUND LINE",
    subtitle: "ISOLATION ACOUSTIQUE ET ABSORPTION DES CHOCS",
    description: "Une solution polyvalente combinant isolation acoustique performante et absorption des chocs. Parfaite pour les salles de fitness multi-activités.",
    specs: [
      { label: "Épaisseur", value: "25 mm" },
      { label: "Absorption des chocs", value: "52%" },
      { label: "Réduction du bruit", value: "31 dB" },
      { label: "Dimensions", value: "1000 x 1000 mm" },
    ],
    bgColor: "from-[#3a3a3a] to-[#4a4a4a]",
    products: [
      {
        name: "SPORTEC® puzzle",
        subtitle: "Dalles modulaires avec système d'emboîtement",
        image: sportecPuzzle.src,
        slug: "sportec-puzzle-2-0"
      },
      {
        name: "SPORTEC® base FR",
        subtitle: "Sous-couche acoustique de désolidarisation",
        image: sportecBaseFR.src,
        slug: "sportec-base-fr"
      }
    ]
  },
  {
    name: "ACOUSTIC LINE",
    subtitle: "ISOLATION ACOUSTIQUE EXCEPTIONNELLE",
    description: "Conçue pour les environnements exigeant une isolation acoustique maximale. Idéale pour les studios situés dans des bâtiments résidentiels ou commerciaux.",
    specs: [
      { label: "Épaisseur", value: "30 mm" },
      { label: "Absorption des chocs", value: "60%" },
      { label: "Réduction du bruit", value: "35 dB" },
      { label: "Dimensions", value: "1000 x 1000 mm" },
    ],
    bgColor: "from-[#2a2a2a] to-[#3a3a3a]",
    products: [
      {
        name: "SPORTEC® base MS",
        subtitle: "Sous-couche acoustique multi-usage",
        image: sportecBaseMS.src,
        slug: "sportec-base-ms"
      },
      {
        name: "SPORTEC® absorber pads",
        subtitle: "Plots d'absorption pour désolidarisation ponctuelle",
        image: sportecAbsorberPads.src,
        slug: "sportec-absorber-pads"
      }
    ]
  },
  {
    name: "PERFORMANCE LINE",
    subtitle: "ABSORPTION EXCEPTIONNELLE DES CHOCS",
    description: "La solution ultime pour les zones à fort impact comme l'haltérophilie et le CrossFit. Protection maximale du sol et des équipements.",
    specs: [
      { label: "Épaisseur", value: "40 mm" },
      { label: "Absorption des chocs", value: "70%" },
      { label: "Réduction du bruit", value: "38 dB" },
      { label: "Dimensions", value: "1000 x 1000 mm" },
    ],
    bgColor: "from-[#3a3a3a] to-[#4a4a4a]",
    products: [
      {
        name: "SPORTEC® color",
        subtitle: "Revêtement haute résistance pour zones intensives",
        image: sportecColor.src,
        slug: "sportec-color"
      },
      {
        name: "SPORTEC® absorber pads",
        subtitle: "Plots haute performance pour absorption maximale",
        image: sportecAbsorberPads.src,
        slug: "sportec-absorber-pads"
      }
    ]
  }
];

const Gymcoustic = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={gymcousticImage.src}
            alt="Gymcoustic"
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
              SPORTEC® Gymcoustic
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Solutions acoustiques haute performance pour gymnases et salles de fitness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              SPORTEC® Gymcoustic est un système complet de revêtements de sol spécialement conçu pour les salles 
              de fitness et gymnases. Il combine une excellente absorption des chocs avec une isolation acoustique 
              exceptionnelle, protégeant à la fois les athlètes, le sol et les pièces adjacentes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Disponible en plusieurs gammes pour répondre à tous les besoins : de la salle de yoga au studio 
              d'haltérophilie, en passant par les espaces cardio et les zones de cross-training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D Gym View Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img 
              src={gym3dView.src} 
              alt="Vue 3D d'une salle de fitness équipée Gymcoustic"
              className="w-full max-w-5xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Layers Schema Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Structure multicouche
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Le système Gymcoustic repose sur une structure en couches optimisée pour offrir 
                les meilleures performances acoustiques et d'absorption des chocs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <span className="font-semibold text-foreground">SPORTEC® Level 1 & 2</span>
                    <p className="text-muted-foreground text-sm">Couches de surface en caoutchouc haute qualité</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <span className="font-semibold text-foreground">DAMTEC®</span>
                    <p className="text-muted-foreground text-sm">Sous-couche d'isolation acoustique</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <span className="font-semibold text-foreground">KRAIBURG PURASYS</span>
                    <p className="text-muted-foreground text-sm">Base de désolidarisation pour une isolation optimale</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img 
                src={layersSchema.src} 
                alt="Schéma des couches Gymcoustic"
                className="max-w-md w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos gammes de produits
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quatre gammes adaptées à différents niveaux d'exigence en matière d'isolation acoustique et d'absorption des chocs.
            </p>
          </motion.div>

          <div className="space-y-8">
            {productLines.map((line, index) => (
              <motion.div
                key={line.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-r ${line.bgColor} rounded-3xl overflow-hidden`}
              >
                <div className="p-8 lg:p-12">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
                    {/* Left: Title and Description */}
                    <div className="lg:w-1/2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        {line.name}
                      </h3>
                      <p className="text-primary font-medium text-sm uppercase tracking-wide mb-4">
                        {line.subtitle}
                      </p>
                      <p className="text-white/70 leading-relaxed">
                        {line.description}
                      </p>
                    </div>

                    {/* Right: Specs Grid */}
                    <div className="lg:w-1/2">
                      <div className="grid grid-cols-2 gap-4">
                        {line.specs.map((spec, specIndex) => (
                          <div 
                            key={specIndex}
                            className="bg-white/5 rounded-xl p-4 text-center"
                          >
                            <p className="text-white/50 text-xs uppercase tracking-wide mb-1">
                              {spec.label}
                            </p>
                            <p className="text-white font-bold text-lg">
                              {spec.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Products for this line */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10">
                    {line.products.map((product, productIndex) => (
                      <Link 
                        key={productIndex}
                        href={`/produit/${product.slug}`}
                        className="bg-white rounded-2xl p-6 flex items-center gap-6 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {product.subtitle}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
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
              Avantages clés
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Volume2, title: "Isolation acoustique", desc: "Jusqu'à 38 dB de réduction sonore" },
              { icon: Target, title: "Absorption des chocs", desc: "Jusqu'à 70% d'absorption" },
              { icon: Palette, title: "Design personnalisable", desc: "Large choix de couleurs et finitions" },
              { icon: Ruler, title: "Épaisseurs variées", desc: "De 20 à 40 mm selon les besoins" },
              { icon: Maximize, title: "Formats modulaires", desc: "Dalles et rouleaux disponibles" },
              { icon: Percent, title: "100% recyclable", desc: "Fabriqué à partir de caoutchouc recyclé" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#4a4a4a] rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white/80" />
                </div>
                <h3 className="text-primary font-semibold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Besoin d'un conseil personnalisé ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour vous aider à choisir la solution Gymcoustic 
              adaptée à votre projet.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Nous contacter
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <ExploreMore />
    </Layout>
  );
};

export default Gymcoustic;
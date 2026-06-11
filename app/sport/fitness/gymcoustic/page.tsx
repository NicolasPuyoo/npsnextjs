"use client";

import { motion } from "framer-motion";
import { Volume2, Target, Palette, Ruler, Maximize, Percent, ChevronRight } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import gymcousticImage from "@/assets/categories/fitness/gymcoustic.png";
import layersSchema from "@/assets/gymcoustic/layers-schema.png";
import gym3dView from "@/assets/gymcoustic/gym-3d-view.png";

// Product images imports
import sportecColor from "@/assets/products/sport/SPORTEC_COLOR.png";
import sportecStyle from "@/assets/products/sport/SPORTEC_STYLE.png";
import sportecPuzzle from "@/assets/products/sport/SPORTEC_PUZZLE_2_0.png";
import sportecBaseFR from "@/assets/products/sport/SPORTEC_BASE_FR.png";
import sportecBaseMS from "@/assets/products/sport/SPORTEC_BASE_MS.png";

// Product lines data with products
const productLines = [
  {
    name: "FLOORING LINE",
    subtitle: "REVÊTEMENT DE SOL EN ROULEAU POUR FITNESS",
    description: "SPORTEC® color — revêtement caoutchouc EPDM en rouleau 4-12 mm, fini lisse à pores ouverts. Solution polyvalente pour salles de fitness, locaux commerciaux, showrooms, locaux techniques et patinoires. Densité ~1050 kg/m³, dureté Shore A 60 ± 5.",
    specs: [
      { label: "Épaisseur", value: "4, 6, 8, 10, 12 mm" },
      { label: "Largeur rouleau", value: "1.500 mm" },
      { label: "Réduction du bruit", value: "15 dB (4 mm) à 18 dB (8 mm)" },
      { label: "Restitution énergie", value: "83-90 % selon épaisseur" },
    ],
    bgColor: "from-[#2a2a2a] to-[#3a3a3a]",
    products: [
      {
        name: "SPORTEC® color",
        subtitle: "Revêtement rouleau EPDM — fitness, retail, patinoires (4-12 mm)",
        image: sportecColor.src,
        slug: "sportec-color"
      },
    ]
  },
  {
    name: "MODULAR LINE",
    subtitle: "DALLES EMBOÎTABLES AMOVIBLES",
    description: "Dalles SPORTEC® puzzle 2.0 — solution modulaire emboîtable sans colle pour installations rapides et réversibles. Idéale pour fitness, retail, showrooms, abords de patinoire. Variantes Color (15% EPDM, Efl) et Purcolor (100% EPDM, Cfl-s1).",
    specs: [
      { label: "Épaisseur", value: "6, 8, 10 mm" },
      { label: "Format extérieur", value: "1030 × 1030 mm" },
      { label: "Format couvrant", value: "1000 × 1000 mm" },
      { label: "Réduction du bruit", value: "15-18 dB selon épaisseur" },
    ],
    bgColor: "from-[#3a3a3a] to-[#4a4a4a]",
    products: [
      {
        name: "SPORTEC® puzzle 2.0",
        subtitle: "Dalles emboîtables sans colle — Color ou Purcolor (100% EPDM)",
        image: sportecPuzzle.src,
        slug: "sportec-puzzle-2-0"
      },
      {
        name: "SPORTEC® style",
        subtitle: "Dalles 30 ou 70 mm — protection haltérophilie & chutes de poids",
        image: sportecStyle.src,
        slug: "sportec-style"
      }
    ]
  },
  {
    name: "ACOUSTIC LINE",
    subtitle: "ISOLATION ACOUSTIQUE POUR ZONES DE CHUTE DE POIDS",
    description: "Dalles de protection 30 mm pour zones d'haltérophilie indoor et outdoor. Granulés de caoutchouc recyclé (BASE MS) ou EPDM coupe-feu (BASE FR), avec excellentes propriétés d'isolation acoustique.",
    specs: [
      { label: "Épaisseur", value: "30 mm" },
      { label: "Réduction du bruit", value: "jusqu'à 25 dB (BASE FR)" },
      { label: "Format", value: "500×500, 1000×500, 1000×1000 mm" },
      { label: "Feu", value: "Cfl-s1 (FR) / Efl (MS)" },
    ],
    bgColor: "from-[#2a2a2a] to-[#3a3a3a]",
    products: [
      {
        name: "SPORTEC® base MS",
        subtitle: "Dalle protection haltérophilie 30 mm — granulés caoutchouc recyclé",
        image: sportecBaseMS.src,
        slug: "sportec-base-ms"
      },
      {
        name: "SPORTEC® base FR",
        subtitle: "Dalle coupe-feu Cfl-s1 — EPDM aggloméré PU, pour ERP",
        image: sportecBaseFR.src,
        slug: "sportec-base-fr"
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
            initial={{ opacity: 0, y: 16 }}
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
            initial={{ opacity: 0, y: 12 }}
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
              Disponible en plusieurs gammes pour répondre à tous les besoins : du studio cardio
              au studio d'haltérophilie, en passant par les zones d'entraînement fonctionnel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D Gym View Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
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
            initial={{ opacity: 0, y: 12 }}
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
            initial={{ opacity: 0, y: 12 }}
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
                initial={{ opacity: 0, y: 16 }}
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
              Avantages clés
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Volume2, title: "Isolation acoustique", desc: "Jusqu'à 42 dB selon configuration (Basic 25 / All-Round 30 / Acoustic 34 / Performance 42 dB)" },
              { icon: Target, title: "Absorption des chocs", desc: "Jusqu'à 74,3 % selon configuration (Basic 51,4 % / All-Round 55,6 % / Acoustic ≈60 % / Performance 67,3 à 74,3 %)" },
              { icon: Palette, title: "Design personnalisable", desc: "Large choix de couleurs et finitions" },
              { icon: Ruler, title: "Épaisseurs variées", desc: "De 20 à 40 mm selon les besoins" },
              { icon: Maximize, title: "Formats modulaires", desc: "Dalles et rouleaux disponibles" },
              { icon: Percent, title: "100% recyclable", desc: "Fabriqué à partir de caoutchouc recyclé" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-foreground/95 rounded-2xl p-6 text-center"
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
            initial={{ opacity: 0, y: 12 }}
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
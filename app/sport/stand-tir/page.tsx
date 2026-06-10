"use client";

import {
  Target,
  ShieldOff,
  Volume2,
  Award,
  Wrench,
  Sparkles,
  Layers,
  Eye,
  Building2,
  Mountain,
  Flame,
  Leaf,
  Recycle,
  Factory,
} from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import FeatureCardGrid from "@/components/FeatureCardGrid";
import BackButton from "@/components/BackButton";
import ExploreMore from "@/components/ExploreMore";
import ProductCard from "@/components/ProductCard";
import { shieldtacProducts } from "@/data/products";
import heroImage from "@/assets/categories/sport/stand-tir.webp";

// Avantages techniques — 10 points clés repris du site Kraiburg SHIELDTAC.fr.
// On reprend l'argumentaire d'origine pour rester cohérent avec la marque.
const features = [
  {
    icon: ShieldOff,
    title: "Protection contre impacts et rebonds",
    description: "Absorption des projectiles testée jusqu'à 10 000 J selon les normes DSB et VPAM-ARG v3. Empêche les ricochets et fragments dangereux.",
  },
  {
    icon: Target,
    title: "Absorption des projectiles",
    description: "Adaptée à tous les calibres pour le tir sportif comme pour l'entraînement militaire ou policier.",
  },
  {
    icon: Award,
    title: "Sécurité testée et certifiée",
    description: "Conformité aux normes balistiques (rapport B-31/2009, WaffG allemand) et exigences feu jusqu'à Bfl-s1.",
  },
  {
    icon: Volume2,
    title: "Réduction sonore significative",
    description: "Absorption acoustique αw jusqu'à 0,75 (ricotile 50 mm) pour limiter le bruit dans le champ de tir et les zones adjacentes.",
  },
  {
    icon: Leaf,
    title: "Faible émission COV (A+)",
    description: "Tous les produits SHIELDTAC sont classés A+ (étiquetage sanitaire français). Faible odeur, air sain.",
  },
  {
    icon: Layers,
    title: "Dimensions et couleurs multiples",
    description: "Plusieurs épaisseurs (40, 43, 70 mm), formats variés et 8 teintes RAL pour ricosys PU.",
  },
  {
    icon: Wrench,
    title: "Installation et rénovation faciles",
    description: "Pose simple : intercaler les dalles ou les fixer sur support bois. Système ricosys PU pour finition sans joints.",
  },
  {
    icon: Sparkles,
    title: "Nettoyage et maintenance aisés",
    description: "Surface fermée facile à entretenir. Remplacement modulaire des blocs/dalles sans fermer le stand.",
  },
  {
    icon: Recycle,
    title: "100 % granulés caoutchouc recyclés",
    description: "Caoutchouc de pneus recyclés agglomérés au polyuréthane. Économie circulaire concrète.",
  },
  {
    icon: Factory,
    title: "Fabriqué en Allemagne",
    description: "Production KRAIBURG Relastec à Salzwedel — qualité industrielle, conformité européenne.",
  },
];

// Zones d'utilisation — 7 sections reprises de SHIELDTAC.fr.
// Chacune décrit une zone du stand de tir et le(s) produit(s) SHIELDTAC associé(s).
const usageZones = [
  {
    icon: Mountain,
    title: "Stands de tir en plein air",
    description: "Revêtement de sol antidérapant pour zones de tir extérieures, sols et abords. Produits : pavers, ricotile.",
  },
  {
    icon: ShieldOff,
    title: "Déflecteurs",
    description: "Protection toit/côtés des stands extérieurs contre les projections. Produit : ricotile (formats 40/43/70 mm).",
  },
  {
    icon: Target,
    title: "Pièges à balles",
    description: "Sécurisation des zones d'impact, absorption des fragments et ricochets. Produits : ricotile, blocks, fragsafe.",
  },
  {
    icon: Eye,
    title: "Zones de supervision",
    description: "Sols pour postes d'observation, salles de contrôle, accès stand. Produits SPORTEC color complémentaires.",
  },
  {
    icon: Layers,
    title: "Revêtement sol stands de tir",
    description: "Système PU sans joints pour sols continus, facile à nettoyer. Produit : ricosys PU (Bfl-s1).",
  },
  {
    icon: Building2,
    title: "Murs et plafonds",
    description: "Protection murale et plafond contre ricochets et rebonds. Produit : ricotile (avec variante FR coupe-feu).",
  },
  {
    icon: Flame,
    title: "Zones d'entraînement tactique",
    description: "Murs temporaires ou permanents pour zones d'exercice tactique. Produits : ricotile + blocks.",
  },
];

const StandTir = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage.src}
            alt="Stand de tir"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <BackButton
              label="Retour à Sport"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 group"
            />
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Gamme SHIELDTAC®
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Stand de tir
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Systèmes balistiques en caoutchouc pour stands de tir et centres d'entraînement.
              Absorbent les projectiles jusqu'à 10 000 joules, empêchent les ricochets et
              respectent les exigences feu et acoustiques. Solutions adaptées au tir militaire,
              policier et sportif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zones d'utilisation — 7 cards */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Zones d'utilisation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pour chaque zone du stand
            </h2>
            <p className="text-muted-foreground">
              Sols, murs, plafonds, pièges à balles, zones de supervision et entraînement tactique :
              la gamme SHIELDTAC couvre l'intégralité du stand de tir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usageZones.map((zone, index) => (
              <motion.div
                key={zone.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <zone.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{zone.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{zone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages techniques */}
      <FeatureCardGrid
        eyebrow="Avantages techniques"
        heading="10 raisons de choisir SHIELDTAC"
        items={features}
      />

      {/* Produits SHIELDTAC */}
      <section className="py-16 lg:py-24 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Gamme produits
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              5 produits SHIELDTAC
            </h2>
            <p className="text-white/75 leading-relaxed">
              Dalles caoutchouc-PU, système PU sans joints, pavés extérieurs, blocs de protection
              et rideau pare-éclats. Chaque produit a son rôle et ils sont conçus pour fonctionner
              ensemble.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shieldtacProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableau comparatif certifications */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Certifications &amp; tests
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Performances par produit
            </h2>
            <p className="text-muted-foreground">
              Synthèse des tests balistiques, classements feu, absorption acoustique et antiglisse
              pour chaque produit SHIELDTAC.
            </p>
          </motion.div>

          {/* Table responsive — wraps horizontally sur petit écran */}
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-semibold text-foreground">Critère</th>
                  <th className="text-left p-4 font-semibold text-foreground whitespace-nowrap">ricotile</th>
                  <th className="text-left p-4 font-semibold text-foreground whitespace-nowrap">ricotile FR</th>
                  <th className="text-left p-4 font-semibold text-foreground whitespace-nowrap">ricosys PU</th>
                  <th className="text-left p-4 font-semibold text-foreground whitespace-nowrap">pavers</th>
                  <th className="text-left p-4 font-semibold text-foreground whitespace-nowrap">blocks</th>
                  <th className="text-left p-4 font-semibold text-foreground whitespace-nowrap">fragsafe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 text-muted-foreground">Résistance projectiles</td>
                  <td className="p-4 text-foreground">200 - 10 000 J</td>
                  <td className="p-4 text-foreground">200 - 7 000 J</td>
                  <td className="p-4 text-foreground">200 - 7 000 J</td>
                  <td className="p-4 text-foreground">jusqu'à 6 000 J</td>
                  <td className="p-4 text-foreground">200 - 7 000 J</td>
                  <td className="p-4 text-foreground">200 - 7 000 J</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Comportement au feu</td>
                  <td className="p-4 text-foreground">Efl</td>
                  <td className="p-4 text-foreground">Cfl-s1</td>
                  <td className="p-4 text-foreground">Bfl-s1</td>
                  <td className="p-4 text-foreground">Efl</td>
                  <td className="p-4 text-foreground">Efl</td>
                  <td className="p-4 text-muted-foreground/60">—</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Absorption acoustique αw</td>
                  <td className="p-4 text-foreground">jusqu'à 0,75</td>
                  <td className="p-4 text-foreground">jusqu'à 0,60</td>
                  <td className="p-4 text-muted-foreground/60">—</td>
                  <td className="p-4 text-muted-foreground/60">—</td>
                  <td className="p-4 text-muted-foreground/60">—</td>
                  <td className="p-4 text-muted-foreground/60">—</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Antiglisse</td>
                  <td className="p-4 text-foreground">R10</td>
                  <td className="p-4 text-foreground">R10</td>
                  <td className="p-4 text-muted-foreground/60">—</td>
                  <td className="p-4 text-foreground">R10</td>
                  <td className="p-4 text-muted-foreground/60">—</td>
                  <td className="p-4 text-muted-foreground/60">—</td>
                </tr>
                <tr>
                  <td className="p-4 text-muted-foreground">Émissions COV</td>
                  <td className="p-4 text-foreground">A+</td>
                  <td className="p-4 text-foreground">A+</td>
                  <td className="p-4 text-foreground">A+</td>
                  <td className="p-4 text-foreground">A+</td>
                  <td className="p-4 text-foreground">A+</td>
                  <td className="p-4 text-foreground">A+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground/70 mt-4 text-center">
            Données de référence Kraiburg SHIELDTAC®. Tests certifiés par organismes indépendants
            (VPAM-ARG, DIN EN 13501-1, WaffG, rapports B-31/2009, 210/2025, 212/2025).
          </p>
        </div>
      </section>

      <ExploreMore currentPath="/sport/stand-tir" />
    </Layout>
  );
};

export default StandTir;

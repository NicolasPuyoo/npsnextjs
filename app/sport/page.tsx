"use client";

import { motion } from "framer-motion";
import { ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import ExploreMore from "@/components/ExploreMore";
import QuoteCTA from "@/components/QuoteCTA";
import sportHeroImage from "@/assets/categories/sport-hero.webp";
import fitnessImage from "@/assets/categories/fitness.webp";

// Commerce subcategory images
import bureauImage from "@/assets/categories/commerce/bureaux.webp";
import magasinsImage from "@/assets/categories/commerce/magasins.webp";
import salonsImage from "@/assets/categories/commerce/salons.webp";
import reeducationImage from "@/assets/categories/commerce/reeducation.webp";

// Sport subcategory images
import standTirImage from "@/assets/categories/sport/stand-tir.webp";
import outdoorImage from "@/assets/categories/sport/outdoor.webp";
import indoorImage from "@/assets/categories/sport/indoor.webp";
import hiverImage from "@/assets/categories/sport/hiver.webp";

// Fitness subcategory images
import cardioImage from "@/assets/categories/fitness/cardio.webp";
import halterophilieImage from "@/assets/categories/fitness/halterophilie.webp";
import pleinAirImage from "@/assets/categories/fitness/plein-air.webp";
import yogaImage from "@/assets/categories/fitness/yoga.webp";
import gymcousticImage from "@/assets/categories/fitness/gymcoustic.webp";
import fonctionnelImage from "@/assets/categories/fitness/fonctionnel.webp";

type SubCategory = { id: string; name: string; description: string; image: string; path: string };

const fitnessCategories: SubCategory[] = [
  { id: "cardio", name: "Cardio", description: "Tapis, vélos, elliptiques", image: cardioImage.src, path: "/sport/fitness/cardio" },
  { id: "halterophilie", name: "Haltérophilie", description: "Musculation, soulevés de terre", image: halterophilieImage.src, path: "/sport/fitness/halterophilie" },
  { id: "fonctionnel", name: "Cross-training", description: "Entraînement fonctionnel, HIIT", image: fonctionnelImage.src, path: "/sport/fitness/fonctionnel" },
  { id: "yoga", name: "Yoga & Pilates", description: "Bien-être, fitness doux", image: yogaImage.src, path: "/sport/fitness/yoga" },
  { id: "plein-air", name: "Fitness plein air", description: "Équipements outdoor", image: pleinAirImage.src, path: "/sport/fitness/plein-air" },
  { id: "fitness-poly", name: "Salle polyvalente", description: "Multi-activités", image: fitnessImage.src, path: "/sport/fitness" },
  { id: "gymcoustic", name: "Gymcoustic", description: "Salle modulaire 3D", image: gymcousticImage.src, path: "/sport/fitness/gymcoustic" },
];

const sportSubCategories: SubCategory[] = [
  { id: "outdoor", name: "Sport outdoor", description: "Tennis, basket, athlétisme...", image: outdoorImage.src, path: "/sport/outdoor" },
  { id: "indoor", name: "Sport indoor", description: "Gymnases et salles couvertes", image: indoorImage.src, path: "/sport/indoor" },
  { id: "sports-hiver", name: "Sports d'hiver", description: "Stations, patinoires", image: hiverImage.src, path: "/sport/sports-hiver" },
  { id: "stand-tir", name: "Stand de tir", description: "Acoustique stands sportifs", image: standTirImage.src, path: "/sport/stand-tir" },
];

const commerceCategories: SubCategory[] = [
  { id: "bureaux", name: "Bureaux", description: "Open-spaces, espaces de travail", image: bureauImage.src, path: "/sport/commerce/bureaux" },
  { id: "magasins", name: "Magasins", description: "Commerces et boutiques", image: magasinsImage.src, path: "/sport/commerce/magasins" },
  { id: "salons-evenements", name: "Salons & événements", description: "Stands modulaires, hôtellerie", image: salonsImage.src, path: "/sport/commerce/salons-evenements" },
  { id: "reeducation", name: "Rééducation", description: "Kiné, médico-sportif", image: reeducationImage.src, path: "/sport/commerce/reeducation" },
];

const SubCategoryCard = ({ item, index }: { item: SubCategory; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.04, duration: 0.4 }}
  >
    <Link href={item.path} className="block group">
      <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-lg">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
          <p className="text-white/75 text-xs mb-2">{item.description}</p>
          <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Découvrir
            <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Sport = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={sportHeroImage.src} alt="Sport" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Sport</h1>
            <p className="text-lg md:text-xl text-white/85 mb-8">
              Solutions acoustiques et revêtements de sol haute performance pour les espaces sportifs,
              salles de fitness et établissements commerciaux.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#fitness"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Explorer Fitness
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fitness section */}
      <section id="fitness" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Fitness, gym et bien-être</h2>
            <p className="text-muted-foreground max-w-3xl">
              Cardio, musculation, yoga, cross-training et concepts modulaires : trouvez la sous-couche acoustique adaptée à votre activité.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {fitnessCategories.map((item, i) => (
              <SubCategoryCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Sport section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Sports indoor, outdoor et hiver</h2>
            <p className="text-muted-foreground max-w-3xl">
              Du terrain de tennis au stand de tir : revêtements et solutions acoustiques pour chaque discipline.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sportSubCategories.map((item, i) => (
              <SubCategoryCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Commerce section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Commerce, bureaux et établissements</h2>
            <p className="text-muted-foreground max-w-3xl">
              Solutions pour bureaux, magasins, salons, kinés, écoles : confort acoustique et durabilité dans tous vos espaces recevant du public.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {commerceCategories.map((item, i) => (
              <SubCategoryCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Guide CTA */}
      <section className="py-16 bg-foreground/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden">
              <img src={fitnessImage.src} alt="Guide Fitness" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">Guide produits</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Trouvez le produit adapté à votre activité
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Notre guide comparatif vous aide à identifier le revêtement idéal pour cardio, musculation, yoga, entraînement fonctionnel et bien plus.
              </p>
              <Link
                href="/guide/fitness"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Consulter le guide
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Nos produits Sport</h2>
              <p className="text-muted-foreground">Découvrez notre gamme SPORTEC et solutions sport.</p>
            </div>
            <Link
              href="/produits"
              className="hidden sm:inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Voir tous les produits
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sportProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Voir tous les produits
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <QuoteCTA
        title="Un projet sportif à équiper ?"
        description="Salles de sport, gymnases, terrains, stands de tir : on vous aide à choisir le sol et l'acoustique adaptés."
      />
      <ExploreMore currentPath="/sport" />
    </Layout>
  );
};

export default Sport;

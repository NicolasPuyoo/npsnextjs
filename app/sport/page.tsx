"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { sportProducts } from "@/data/products";
import ExploreMore from "@/components/ExploreMore";
import sportHeroImage from "@/assets/categories/sport-hero.webp";
import fitnessImage from "@/assets/categories/fitness.webp";
import sportCategoryImage from "@/assets/categories/sport-category.webp";
import commerceImage from "@/assets/categories/commerce.webp";

// Commerce subcategory images
import bureauImage from "@/assets/categories/commerce/bureaux.webp";
import magasinsImage from "@/assets/categories/commerce/magasins.webp";
import salonsImage from "@/assets/categories/commerce/salons.webp";
import reeducationImage from "@/assets/categories/commerce/reeducation.webp";
import ecoleJardinImage from "@/assets/categories/commerce/ecole-jardin.webp";

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

// Data structures
const fitnessCategories = [
  { id: "cardio", name: "Cardio", description: "Équipements et zones cardio-training", image: cardioImage.src, path: "/sport/fitness/cardio" },
  { id: "fitness", name: "Fitness", description: "Salles de fitness polyvalentes", image: fitnessImage.src, path: "/sport/fitness" },
  { id: "halterophilie", name: "Haltérophilie", description: "Espaces de musculation et haltérophilie", image: halterophilieImage.src, path: "/sport/fitness/halterophilie" },
  { id: "fonctionnel", name: "Entraînement fonctionnel", description: "Zones de cross-training", image: fonctionnelImage.src, path: "/sport/fitness/fonctionnel" },
  { id: "plein-air", name: "Plein air", description: "Équipements fitness extérieurs", image: pleinAirImage.src, path: "/sport/fitness/plein-air" },
  { id: "yoga", name: "Yoga, Pilates et Rééducation", description: "Espaces de bien-être", image: yogaImage.src, path: "/sport/fitness/yoga" },
  { id: "gymcoustic", name: "Gymcoustic", description: "Solutions acoustiques pour gymnases", image: gymcousticImage.src, path: "/sport/fitness/gymcoustic" },
];

const sportSubCategories = [
  { id: "outdoor", name: "Sport Outdoor", description: "Revêtements et solutions pour les terrains de sport en extérieur", image: outdoorImage.src, path: "/sport/outdoor" },
  { id: "indoor", name: "Sport Indoor", description: "Solutions de revêtements pour gymnases et salles de sport couvertes", image: indoorImage.src, path: "/sport/indoor" },
  { id: "sports-hiver", name: "Sports d'hiver", description: "Solutions pour patinoires, stations de ski et infrastructures hivernales", image: hiverImage.src, path: "/sport/sports-hiver" },
  { id: "stand-tir", name: "Stand de tir", description: "Solutions acoustiques spécialisées pour les stands de tir", image: standTirImage.src, path: "/sport/stand-tir" },
];

const commerceCategories = [
  { id: "bureaux", name: "Bureaux", description: "Espaces de travail et open-spaces", image: bureauImage.src, path: "/sport/commerce/bureaux" },
  { id: "magasins", name: "Magasins", description: "Commerces et boutiques", image: magasinsImage.src, path: "/sport/commerce/magasins" },
  { id: "salons-evenements", name: "Salons et événements", description: "Espaces événementiels", image: salonsImage.src, path: "/sport/commerce/salons-evenements" },
  { id: "reeducation", name: "Rééducation", description: "Centres de rééducation et kinésithérapie", image: reeducationImage.src, path: "/sport/commerce/reeducation" },
  { id: "ecoles-jardins", name: "Écoles et jardins", description: "Établissements scolaires et espaces verts", image: ecoleJardinImage.src, path: "/sport/commerce/ecoles-jardins" },
];

type MainCategory = "fitness" | "sport" | "commerce" | null;

const mainCategories = [
  {
    id: "fitness" as const,
    name: "Fitness",
    description: "Cardio, musculation, yoga et bien-être",
    categories: fitnessCategories,
    image: fitnessImage.src,
  },
  {
    id: "sport" as const,
    name: "Sport",
    description: "Sports indoor, outdoor et équipements sportifs",
    categories: sportSubCategories,
    image: sportCategoryImage.src,
  },
  {
    id: "commerce" as const,
    name: "Commerce",
    description: "Bureaux, magasins et espaces commerciaux",
    categories: commerceCategories,
    image: commerceImage.src,
  },
];

const Sport = () => {
  const [selectedCategory, setSelectedCategory] = useState<MainCategory>(null);
  const [commerceIndex, setCommerceIndex] = useState(0);
  const [sportIndex, setSportIndex] = useState(0);
  const [fitnessIndex, setFitnessIndex] = useState(0);

  const handleCategoryClick = (categoryId: MainCategory) => {
    setSelectedCategory(categoryId);
    setCommerceIndex(0);
    setSportIndex(0);
    setFitnessIndex(0);
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setCommerceIndex(0);
    setSportIndex(0);
    setFitnessIndex(0);
  };

  const handlePrevCommerce = () => {
    setCommerceIndex((prev) => 
      prev === 0 ? commerceCategories.length - 1 : prev - 1
    );
  };

  const handleNextCommerce = () => {
    setCommerceIndex((prev) => 
      prev === commerceCategories.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevSport = () => {
    setSportIndex((prev) => 
      prev === 0 ? sportSubCategories.length - 1 : prev - 1
    );
  };

  const handleNextSport = () => {
    setSportIndex((prev) => 
      prev === sportSubCategories.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevFitness = () => {
    setFitnessIndex((prev) => 
      prev === 0 ? fitnessCategories.length - 1 : prev - 1
    );
  };

  const handleNextFitness = () => {
    setFitnessIndex((prev) => 
      prev === fitnessCategories.length - 1 ? 0 : prev + 1
    );
  };

  const currentMainCategory = mainCategories.find(c => c.id === selectedCategory);
  const currentFitnessCategory = fitnessCategories[fitnessIndex];
  const currentCommerceCategory = commerceCategories[commerceIndex];
  const currentSportCategory = sportSubCategories[sportIndex];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={sportHeroImage.src}
            alt="Sport"
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
              Sport
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Solutions acoustiques et revêtements de sol haute performance pour les espaces sportifs, 
              salles de fitness et établissements commerciaux.
            </p>
            <Link 
              href="/solutions"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Découvrir nos solutions
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {selectedCategory === null ? (
              /* Main Category Selection */
              <motion.div
                key="main-selection"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Choisissez votre domaine
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Sélectionnez une catégorie pour découvrir nos solutions adaptées à vos besoins.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {mainCategories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      onClick={() => handleCategoryClick(category.id)}
                      className="cursor-pointer group"
                    >
                      <div className="relative h-80 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <img 
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {category.name}
                          </h3>
                          <p className="text-white/70 text-sm mb-4">
                            {category.description}
                          </p>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <span>Découvrir</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : selectedCategory === "commerce" ? (
              /* Commerce Carousel View */
              <motion.div
                key="commerce-carousel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Back Button */}
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>Retour aux catégories</span>
                </button>

                {/* Section Header */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-foreground mb-3">
                    Commerce
                  </h2>
                  <p className="text-muted-foreground max-w-2xl">
                    Bureaux, magasins et espaces commerciaux
                  </p>
                </div>

                {/* Carousel - Side by Side Layout */}
                <div className="relative bg-card rounded-3xl border border-border/50 overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left: Square Image */}
                    <div className="relative lg:w-1/2 aspect-square lg:aspect-auto lg:min-h-[450px]">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentCommerceCategory.id}
                          src={currentCommerceCategory.image}
                          alt={currentCommerceCategory.name}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </AnimatePresence>
                      
                      {/* Navigation Arrows on Image */}
                      <button
                        onClick={handlePrevCommerce}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        aria-label="Catégorie précédente"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={handleNextCommerce}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        aria-label="Catégorie suivante"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Right: Text Content */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentCommerceCategory.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            {currentCommerceCategory.name}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {currentCommerceCategory.description}
                          </p>

                          <Link
                            href={currentCommerceCategory.path}
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity w-fit"
                          >
                            Découvrir cette catégorie
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </motion.div>
                      </AnimatePresence>

                      {/* Pagination Dots */}
                      <div className="flex items-center gap-2 mt-10">
                        {commerceCategories.map((cat, index) => (
                          <button
                            key={cat.id}
                            onClick={() => setCommerceIndex(index)}
                            className={`relative group flex items-center justify-center`}
                            aria-label={`Aller à ${cat.name}`}
                          >
                            <span 
                              className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                index === commerceIndex 
                                  ? 'bg-primary w-8' 
                                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                              }`}
                            />
                            {/* Tooltip */}
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                              {cat.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : selectedCategory === "sport" ? (
              /* Sport Carousel View */
              <motion.div
                key="sport-carousel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Back Button */}
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>Retour aux catégories</span>
                </button>

                {/* Section Header */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-foreground mb-3">
                    Sport
                  </h2>
                  <p className="text-muted-foreground max-w-2xl">
                    Sports indoor, outdoor et équipements sportifs
                  </p>
                </div>

                {/* Carousel - Side by Side Layout */}
                <div className="relative bg-card rounded-3xl border border-border/50 overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left: Square Image */}
                    <div className="relative lg:w-1/2 aspect-square lg:aspect-auto lg:min-h-[450px]">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentSportCategory.id}
                          src={currentSportCategory.image}
                          alt={currentSportCategory.name}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </AnimatePresence>
                      
                      {/* Navigation Arrows on Image */}
                      <button
                        onClick={handlePrevSport}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        aria-label="Catégorie précédente"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={handleNextSport}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        aria-label="Catégorie suivante"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Right: Text Content */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSportCategory.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            {currentSportCategory.name}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {currentSportCategory.description}
                          </p>

                          <Link
                            href={currentSportCategory.path}
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity w-fit"
                          >
                            Découvrir cette catégorie
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </motion.div>
                      </AnimatePresence>

                      {/* Pagination Dots */}
                      <div className="flex items-center gap-2 mt-10">
                        {sportSubCategories.map((cat, index) => (
                          <button
                            key={cat.id}
                            onClick={() => setSportIndex(index)}
                            className={`relative group flex items-center justify-center`}
                            aria-label={`Aller à ${cat.name}`}
                          >
                            <span 
                              className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                index === sportIndex 
                                  ? 'bg-primary w-8' 
                                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                              }`}
                            />
                            {/* Tooltip */}
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                              {cat.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Fitness Carousel View */
              <motion.div
                key="fitness-carousel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Back Button */}
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>Retour aux catégories</span>
                </button>

                {/* Section Header */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-foreground mb-3">
                    Fitness
                  </h2>
                  <p className="text-muted-foreground max-w-2xl">
                    Cardio, musculation, yoga et bien-être
                  </p>
                </div>

                {/* Carousel - Side by Side Layout */}
                <div className="relative bg-card rounded-3xl border border-border/50 overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left: Square Image */}
                    <div className="relative lg:w-1/2 aspect-square lg:aspect-auto lg:min-h-[450px]">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentFitnessCategory.id}
                          src={currentFitnessCategory.image}
                          alt={currentFitnessCategory.name}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </AnimatePresence>
                      
                      {/* Navigation Arrows on Image */}
                      <button
                        onClick={handlePrevFitness}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        aria-label="Catégorie précédente"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={handleNextFitness}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        aria-label="Catégorie suivante"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Right: Text Content */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentFitnessCategory.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            {currentFitnessCategory.name}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {currentFitnessCategory.description}
                          </p>

                          <Link
                            href={currentFitnessCategory.path}
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity w-fit"
                          >
                            Découvrir cette catégorie
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </motion.div>
                      </AnimatePresence>

                      {/* Pagination Dots */}
                      <div className="flex items-center gap-2 mt-10">
                        {fitnessCategories.map((cat, index) => (
                          <button
                            key={cat.id}
                            onClick={() => setFitnessIndex(index)}
                            className={`relative group flex items-center justify-center`}
                            aria-label={`Aller à ${cat.name}`}
                          >
                            <span 
                              className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                index === fitnessIndex 
                                  ? 'bg-primary w-8' 
                                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                              }`}
                            />
                            {/* Tooltip */}
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                              {cat.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Product Guides Section */}
      <section className="py-16 bg-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Guides Produits</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">
              Trouvez le produit adapté
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Consultez nos guides pour identifier les meilleures solutions selon votre activité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden">
              <img 
                src={fitnessImage.src}
                alt="Guide Fitness"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Guide Fitness
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Trouvez le revêtement idéal pour chaque activité : cardio, musculation, yoga, entraînement fonctionnel et bien plus.
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

      {/* Products Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Nos produits Sport</h2>
              <p className="text-muted-foreground">Découvrez notre gamme complète de revêtements sportifs.</p>
            </div>
            <Link 
              href="/produits"
              className="hidden sm:inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Voir tous les produits
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sportProducts.slice(0, 8).map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
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

      {/* Explore More */}
      <ExploreMore currentPath="/sport" />
    </Layout>
  );
};

export default Sport;
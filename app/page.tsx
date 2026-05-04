"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight, Building2, Dumbbell, Hotel, Wrench, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";

// Category images
import batimentImg from "@/assets/categories/batiment.jpg";
import bricolageImg from "@/assets/categories/bricolage.jpg";
import sportImg from "@/assets/categories/sport.webp";
import kraiburgBuilding from "@/assets/kraiburg-building.jpg";
import kraiburgProduction from "@/assets/kraiburg-production.jpg";

// Guide image
import fitnessImg from "@/assets/categories/fitness.webp";

const services = [
  {
    image: batimentImg.src,
    title: "Bâtiment & Industrie",
    description: "Solutions acoustiques pour la construction, la rénovation et les environnements industriels.",
    path: "/batiment",
  },
  {
    image: bricolageImg.src,
    title: "Bricolage",
    description: "Matériaux et kits pour vos projets d'isolation phonique.",
    path: "/bricolage",
  },
  {
    image: sportImg.src,
    title: "Sport",
    description: "Équipements acoustiques pour salles de sport et gymnases.",
    path: "/sport",
  },
];

const personas = [
  {
    icon: Building2,
    title: "Architecte / BET / Entrepreneur",
    desc: "Vous spécifiez ou installez. Fiches techniques, performances dB, certifications ATE.",
    cta: "Solutions bâtiment",
    href: "/batiment",
  },
  {
    icon: Dumbbell,
    title: "Pro fitness / sport",
    desc: "Salle de sport, gymnase, terrain. Revêtements et acoustique adaptés à votre activité.",
    cta: "Solutions sport",
    href: "/sport",
  },
  {
    icon: Hotel,
    title: "Hôtel / commerce / collectivité",
    desc: "Solutions sectorielles clé en main : hôtels, supermarchés, écoles, piscines, toitures.",
    cta: "Solutions sectorielles",
    href: "/solutions",
  },
  {
    icon: Wrench,
    title: "Particulier / bricoleur",
    desc: "Machine à laver, voisinage, garage, sol vibrant. Produits prêts à poser.",
    cta: "Solutions bricolage",
    href: "/bricolage",
  },
];

const solutionFeatures = [
  "Diagnostic acoustique complet",
  "Études et simulations",
  "Prescriptions techniques",
  "Accompagnement de chantier",
];


const Index = () => {
  return (
    <Layout>
      {/* Hero Video Carousel */}
      <HeroCarousel />

      {/* Persona-based entry points */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Trouvez votre parcours
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              4 entrées adaptées à votre profil. Choisissez celle qui vous correspond pour aller direct aux bonnes solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {personas.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={p.href}
                    className="block h-full bg-card border border-border rounded-2xl p-6 hover:border-primary hover:shadow-soft transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {p.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      {p.cta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nos domaines d'expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une gamme complète de solutions acoustiques adaptées à chaque secteur d'activité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-5">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button asChild variant="outline" className="rounded-full group/btn">
                  <Link href={service.path} className="flex items-center gap-2">
                    Découvrir
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Fitness Section */}
      <section className="py-20 lg:py-28 bg-[#3a3a3a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-72 lg:h-[420px] rounded-3xl overflow-hidden"
            >
              <img 
                src={fitnessImg.src}
                alt="Guide Fitness"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 text-primary mb-6">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">Guide Produits</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Guide Fitness
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Trouvez le revêtement idéal pour chaque activité : cardio, musculation, yoga, 
                entraînement fonctionnel et bien plus. Notre guide comparatif vous aide à 
                identifier la meilleure solution selon votre secteur.
              </p>
              <Button asChild size="lg" className="rounded-full group">
                <Link href="/guide/fitness" className="flex items-center gap-2">
                  Consulter le guide
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Nos Solutions<br />Acoustiques
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Au-delà de la fourniture de matériaux, nous vous accompagnons dans 
                l'ensemble de votre projet acoustique. Nos ingénieurs spécialisés 
                vous apportent conseil et expertise technique.
              </p>
              <ul className="space-y-3 mb-8">
                {solutionFeatures.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Button asChild size="lg" className="rounded-full group">
                <Link href="/solutions">
                  Découvrir nos solutions
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src={kraiburgBuilding.src} 
                  alt="Bâtiment Kraiburg - Solutions acoustiques"
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Produits Section */}
      <section className="py-20 lg:py-32 overflow-hidden relative">
        <div className="absolute inset-0">
          <img 
            src={kraiburgProduction.src} 
            alt="Production Kraiburg - Nos produits acoustiques"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Nos Produits<br />Acoustiques
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Découvrez notre gamme complète de produits acoustiques de haute qualité, 
                sélectionnés pour répondre à tous vos besoins d'isolation phonique.
              </p>
              <Button asChild size="lg" className="rounded-full group">
                <Link href="/produits">
                  Voir nos produits
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
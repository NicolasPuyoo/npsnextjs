"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ExploreMore from "@/components/ExploreMore";
import VibraProductSchema from "@/components/VibraProductSchema";
import ChapeAcousticsChart from "@/components/ChapeAcousticsChart";
import RevetementSolsChart from "@/components/RevetementSolsChart";
import { getSolutionById } from "@/data/solutionProducts";

// Images des solutions
import fitnessImage from "@/assets/solutions/fitness-gym.jpg";
import hotelsImage from "@/assets/solutions/hotels.jpg";
import toituresImage from "@/assets/solutions/toitures-terrasses.jpg";
import piscineImage from "@/assets/solutions/piscine.jpg";
import supermarchesImage from "@/assets/solutions/supermarches.png";
import desolidarisationImage from "@/assets/batiment/isolation-acoustique.jpg";

const solutionImages: Record<string, string> = {
  "fitness-gym": fitnessImage.src,
  "hotels": hotelsImage.src,
  "toitures-terrasses": toituresImage.src,
  "piscine": piscineImage.src,
  "supermarches": supermarchesImage.src,
  "desolidarisation": desolidarisationImage.src,
};

const SolutionDetail = () => {
  const { solutionId } = useParams() as { solutionId: string };
  const solution = getSolutionById(solutionId || "");

  if (!solution) {
    notFound();
  }

  const heroImage = solutionImages[solution.id];

  // Déterminer quels schémas/graphiques afficher selon la solution
  const showVibraSchema = solution.id === "desolidarisation";
  const showChapeChart = solution.id === "hotels";
  const showRevetementChart = solution.id === "hotels";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={solution.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Retour aux solutions</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {solution.title}
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            {solution.heroDescription}
          </p>
        </div>
      </section>

      {/* Schémas et graphiques conditionnels */}
      {showVibraSchema && <VibraProductSchema />}
      {showChapeChart && <ChapeAcousticsChart />}
      {showRevetementChart && <RevetementSolsChart />}

      {/* Products Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl rounded-2xl border border-border bg-card p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Produits recommandés
            </h2>
            <p className="text-muted-foreground">
              {solution.description}
            </p>
          </div>
          
          {solution.products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-12">
              Aucun produit disponible pour cette solution.
            </p>
          )}
        </div>
      </section>

      {/* Explore More */}
      <ExploreMore />
    </Layout>
  );
};

export default SolutionDetail;
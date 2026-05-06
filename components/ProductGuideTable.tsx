"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductGuide, ProductRating } from "@/data/productGuides";

interface ProductGuideTableProps {
  guide: ProductGuide;
}

const RatingCell = ({ rating }: { rating: ProductRating }) => {
  if (rating === null) return <span className="text-muted-foreground/30">—</span>;

  const colors = {
    bestseller: "bg-primary",
    recommended: "bg-primary/70",
    appropriate: "border-2 border-muted-foreground/50 bg-transparent",
  };

  return (
    <span
      className={`inline-block w-3 h-3 rounded-full ${colors[rating]}`}
      title={rating === "bestseller" ? "Best-seller" : rating === "recommended" ? "Recommandé" : "Approprié"}
    />
  );
};

const ProductGuideTable = ({ guide }: ProductGuideTableProps) => {
  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-hidden rounded-xl border border-border/30">
        {/* Header with categories */}
        <div className="bg-foreground/95">
          <div
            className="grid"
            style={{ gridTemplateColumns: `280px repeat(${guide.categories.length}, 1fr)` }}
          >
            <div className="p-4 border-r border-border/20">
              <h3 className="text-lg font-semibold text-white">{guide.name.replace("Guide ", "")}</h3>
            </div>
            {guide.categories.map((cat) => (
              <div
                key={cat.id}
                className="p-3 text-center border-r border-border/20 last:border-r-0"
              >
                <span className="text-sm text-white/90 leading-tight block">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        {guide.sections.map((section, sectionIndex) => (
          <div key={section.title} className="bg-card">
            {/* Section header */}
            <div
              className="grid border-b border-border/20"
              style={{ gridTemplateColumns: `280px repeat(${guide.categories.length}, 1fr)` }}
            >
              <div className="p-3 bg-primary/10 border-r border-border/20">
                <span className="text-sm font-medium text-primary">{section.title}</span>
              </div>
              {guide.categories.map((cat) => (
                <div key={cat.id} className="bg-primary/5 border-r border-border/20 last:border-r-0" />
              ))}
            </div>

            {/* Products */}
            {section.products.map((product, productIndex) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (sectionIndex * 0.1) + (productIndex * 0.03) }}
                className="grid border-b border-border/10 hover:bg-muted/30 transition-colors"
                style={{ gridTemplateColumns: `280px repeat(${guide.categories.length}, 1fr)` }}
              >
                <Link
                  href={`/produit/${product.slug}`}
                  className="p-3 flex items-center gap-3 border-r border-border/20 hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex-shrink-0 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">{product.name}</span>
                </Link>
                {guide.categories.map((cat) => (
                  <div
                    key={cat.id}
                    className="p-3 flex items-center justify-center border-r border-border/20 last:border-r-0"
                  >
                    <RatingCell rating={product.ratings[cat.id]} />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Mobile View - Card based */}
      <div className="lg:hidden space-y-4">
        {guide.sections.map((section) => (
          <div key={section.title} className="bg-card rounded-xl border border-border/30 overflow-hidden">
            <div className="bg-primary/10 p-4">
              <h4 className="text-sm font-medium text-primary">{section.title}</h4>
            </div>
            <div className="divide-y divide-border/10">
              {section.products.map((product) => (
                <Link
                  key={product.name}
                  href={`/produit/${product.slug}`}
                  className="block p-4 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex-shrink-0 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">{product.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {guide.categories.map((cat) => {
                      const rating = product.ratings[cat.id];
                      if (!rating) return null;
                      return (
                        <span
                          key={cat.id}
                          className={`text-xs px-2 py-1 rounded-full ${
                            rating === "bestseller"
                              ? "bg-primary text-primary-foreground"
                              : rating === "recommended"
                              ? "bg-primary/50 text-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {cat.name}
                        </span>
                      );
                    })}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-primary" />
          <span className="text-foreground">Best-seller</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-primary/70" />
          <span className="text-foreground">Recommandé</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full border-2 border-muted-foreground/50" />
          <span className="text-foreground">Approprié</span>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
        {guide.disclaimer}
      </p>

      {/* Contact CTA */}
      <div className="mt-8">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          Nous contacter pour plus d'informations
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductGuideTable;

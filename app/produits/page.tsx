"use client";

import { Suspense, useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { allProducts, categories, batimentSubcategories, Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import QuoteCTA from "@/components/QuoteCTA";

// Hero image
import heroImage from "@/assets/categories/produits.webp";

const PRODUCTS_PER_PAGE = 24;

// Brand list extracted from product names (DAMTEC, KRAITEC, SPORTEC, VIBRA, PROFIMAT, TOP)
const BRANDS = [
  { id: "all", name: "Toutes marques" },
  { id: "damtec", name: "DAMTEC" },
  { id: "kraitec", name: "KRAITEC" },
  { id: "sportec", name: "SPORTEC" },
  { id: "vibra", name: "VIBRA" },
  { id: "profimat", name: "PROFIMAT" },
];

const filteredCategories = categories;

// Labels for categories and subcategories
const categoryLabels: Record<string, string> = {
  batiment: "Bâtiment",
  sport: "Sport",
  bricolage: "Bricolage",
};

const subcategoryLabels: Record<string, string> = Object.fromEntries(
  batimentSubcategories.filter(s => s.id !== "all").map(s => [s.id, s.name])
);

const ProduitsInner = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const updateSearchParams = (updater: (params: URLSearchParams) => void) => {
    const next = new URLSearchParams(searchParams.toString());
    updater(next);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname);
  };
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);

  useEffect(() => {
    const urlSearch = searchParams.get("search");
    if (urlSearch) {
      setSearchQuery(urlSearch);
    }
  }, [searchParams]);

  useEffect(() => {
    let results = allProducts;

    if (selectedCategory !== "all") {
      if (selectedCategory === "batiment") {
        results = results.filter((product) => product.category === "batiment");
      } else {
        results = results.filter((product) => product.category === selectedCategory);
      }
    }

    if (searchQuery.trim() !== "") {
      const searchTerms = searchQuery.toLowerCase().split(" ");
      results = results.filter((product) =>
        searchTerms.every((term) => product.name.toLowerCase().includes(term))
      );
    }

    setFilteredProducts(results);
    setVisibleCount(PRODUCTS_PER_PAGE);
  }, [searchQuery, selectedCategory]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    updateSearchParams((p) => {
      if (value.trim() === "") p.delete("search");
      else p.set("search", value);
    });
  };

  const clearSearch = () => {
    setSearchQuery("");
    updateSearchParams((p) => p.delete("search"));
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE);
  };

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < filteredProducts.length;

  // Group visible products by category then subcategory
  const groupedProducts = useMemo(() => {
    const groups: { category: string; subcategory?: string; label: string; products: Product[] }[] = [];
    const seen = new Map<string, number>();

    for (const product of visibleProducts) {
      const cat = product.category;
      const sub = product.subcategory || "";
      const key = `${cat}::${sub}`;

      if (seen.has(key)) {
        groups[seen.get(key)!].products.push(product);
      } else {
        const subLabel = sub ? subcategoryLabels[sub] || sub : "";
        const catLabel = categoryLabels[cat] || cat;
        const label = subLabel ? `${catLabel} — ${subLabel}` : catLabel;
        seen.set(key, groups.length);
        groups.push({ category: cat, subcategory: sub, label, products: [product] });
      }
    }

    return groups;
  }, [visibleProducts]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.src}
            alt="Nos Produits"
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
              Produits
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Découvrez notre gamme complète de produits acoustiques de haute qualité, 
              sélectionnés pour répondre à tous vos besoins d'isolation phonique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between rounded-2xl border border-border bg-card p-4 sm:p-5">
            <div className="relative w-full lg:w-96">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Rechercher un produit..."
                className="w-full rounded-full border border-border bg-background py-3 pl-12 pr-10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 rounded-full bg-muted/60 p-1">
              {filteredCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {selectedCategory === "all"
                ? "Tous nos produits"
                : filteredCategories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-muted-foreground">
              {visibleProducts.length} sur {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""}
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <>
              <div className="space-y-10">
                {groupedProducts.map((group) => (
                  <div key={group.label}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">
                        {group.label}
                      </span>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {group.products.map((product, index) => (
                        <ProductCard key={`${product.name}-${index}`} product={product} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {hasMoreProducts && (
                <div className="flex justify-center mt-12">
                  <Button
                    variant="outline"
                    onClick={handleShowMore}
                    className="rounded-full px-8 py-6 h-auto text-base font-medium gap-2 group"
                  >
                    Voir plus
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 hero-gradient rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Aucun produit trouvé
              </h3>
              <p className="text-muted-foreground">
                Essayez de modifier votre recherche ou le filtre de catégorie.
              </p>
            </div>
          )}
        </div>
      </section>
      <QuoteCTA
        title="Vous hésitez entre plusieurs produits ?"
        description="Décrivez-nous votre projet — surface, contraintes, performances visées — et on vous oriente vers la bonne référence."
      />
    </Layout>
  );
};

const Produits = () => (
  <Suspense fallback={null}>
    <ProduitsInner />
  </Suspense>
);

export default Produits;
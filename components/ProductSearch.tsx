"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { allProducts, Product } from "@/data/products";

interface ProductSearchProps {
  isScrolled?: boolean;
  isHomePage?: boolean;
}

const ProductSearch = ({ isScrolled = true, isHomePage = false }: ProductSearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const showWhiteBg = isScrolled || !isHomePage;

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setQuery("");
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const searchTerms = value.toLowerCase().split(" ");
    const filtered = allProducts.filter((product) =>
      searchTerms.every((term) => product.name.toLowerCase().includes(term))
    );
    setResults(filtered.slice(0, 8));
  };

  const handleProductClick = (product: Product) => {
    router.push(`/produits?search=${encodeURIComponent(product.name)}`);
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      batiment: "Bâtiment",
      industrie: "Industrie",
      sport: "Sport",
      bricolage: "Bricolage",
    };
    return labels[category] || category;
  };

  return (
    <div ref={containerRef} className="relative">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className={`p-2 rounded-lg transition-colors ${
            showWhiteBg
              ? "text-muted-foreground hover:text-foreground hover:bg-accent"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
          aria-label="Rechercher un produit"
        >
          <Search className="h-5 w-5" />
        </button>
      ) : (
        <div className="relative">
          <div className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 shadow-lg min-w-[280px]">
            <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Rechercher un produit..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
            />
            <button
              onClick={() => {
                setIsOpen(false);
                setQuery("");
                setResults([]);
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Results dropdown */}
          {results.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-2xl shadow-xl overflow-hidden z-50">
              {results.map((product, index) => (
                <button
                  key={`${product.name}-${index}`}
                  onClick={() => handleProductClick(product)}
                  className="w-full flex items-center gap-3 p-3 hover:bg-accent transition-colors text-left"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex-shrink-0 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-[80%] max-h-[80%] object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {getCategoryLabel(product.category)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* No results */}
          {query.trim() !== "" && results.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-2xl shadow-xl p-4 z-50">
              <p className="text-sm text-muted-foreground text-center">
                Aucun produit trouvé
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;

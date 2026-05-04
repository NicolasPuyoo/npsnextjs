"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ChevronRight, Volume2, Shield, CheckCircle2 } from "lucide-react";
import BackButton from "@/components/BackButton";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ProductDocuments from "@/components/product/ProductDocuments";
import { Button } from "@/components/ui/button";
import { findProductBySlug, getSimilarProducts, categories } from "@/data/products";

// Extract max acoustic dB from product specifications
const getAcousticPerformance = (product: ReturnType<typeof findProductBySlug>): string | null => {
  if (!product?.details?.specifications) return null;
  let maxDb = 0;
  for (const spec of product.details.specifications) {
    const combined = `${spec.label} ${spec.value}`;
    const matches = combined.match(/(\d+)\s*dB/gi);
    if (matches) {
      for (const match of matches) {
        const num = parseInt(match);
        if (num > maxDb && num < 100) maxDb = num;
      }
    }
  }
  return maxDb > 0 ? `${maxDb}` : null;
};

const ProductDetail = () => {
  const { slug } = useParams() as { slug: string };
  const pathname = usePathname();
  
  const product = slug ? findProductBySlug(slug) : undefined;
  
  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Produit non trouvé</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Le produit que vous recherchez n'existe pas.
            </p>
            <Button asChild className="rounded-full">
              <Link href="/produits">Voir tous les produits</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  const cameFromProduits = false;
  const similarProducts = getSimilarProducts(product, 3);
  const categoryName = categories.find(c => c.id === product.category)?.name || product.category;
  const acousticDb = getAcousticPerformance(product);
  
  const getCategoryPath = () => {
    switch (product.category) {
      case "batiment": return "/batiment";
      case "sport": return "/sport";
      case "bricolage": return "/bricolage";
      default: return "/produits";
    }
  };

  const hasSpecs = product.details?.specifications && product.details.specifications.length > 0;
  const hasDocuments = Boolean(product.details?.dataSheetUrl || product.details?.brochureUrl);

  // Extract key highlights from specs
  const keyHighlights = product.details?.specifications?.filter(spec => 
    spec.label.toLowerCase().includes("certif") || 
    spec.label.toLowerCase().includes("feu") || 
    spec.label.toLowerCase().includes("fire")
  ) || [];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border pt-28 lg:pt-32">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            {cameFromProduits ? (
              <Link href="/produits" className="hover:text-primary transition-colors">Produits</Link>
            ) : (
              <Link href={getCategoryPath()} className="hover:text-primary transition-colors">
                {categoryName}
              </Link>
            )}
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-10 pb-4">
        <BackButton label="Retour" className="text-muted-foreground hover:text-foreground" />
      </div>

      {/* Product detail */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className={`grid gap-8 ${hasSpecs ? 'lg:grid-cols-[1fr,380px]' : ''}`}>
            {/* Main content */}
            <div className="space-y-8">
              {/* Title, badges and description */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {acousticDb && (
                    <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-3 py-1.5 text-sm font-semibold">
                      <Volume2 className="h-4 w-4" />
                      jusqu'à {acousticDb} dB
                    </div>
                  )}
                  {keyHighlights.map((h, i) => (
                    <div key={i} className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground rounded-full px-3 py-1.5 text-xs font-medium">
                      <Shield className="h-3 w-3" />
                      {h.value.length > 40 ? h.value.substring(0, 40) + '…' : h.value}
                    </div>
                  ))}
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                  {product.name}
                </h1>
                
                {product.details?.description ? (
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.details.description}
                  </p>
                ) : (
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Solution d'isolation acoustique et anti-vibratoire haute performance pour 
                    applications professionnelles dans le secteur {categoryName.toLowerCase()}.
                  </p>
                )}
              </div>

              {/* Product image */}
              <div className="bg-white rounded-3xl p-8 shadow-card relative overflow-hidden">
                {acousticDb && (
                  <div className="absolute top-6 right-6 bg-primary text-primary-foreground rounded-2xl px-4 py-2 flex items-center gap-2 shadow-lg z-10">
                    <Volume2 className="h-5 w-5" />
                    <div className="text-right">
                      <span className="block text-xs opacity-80">Performance</span>
                      <span className="block text-lg font-bold leading-tight">jusqu'à {acousticDb} dB</span>
                    </div>
                  </div>
                )}
                <div className="aspect-square flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain"
                  />
                </div>
              </div>

              {/* Key benefits row */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {product.details?.specifications?.slice(0, 3).map((spec, i) => (
                  <div key={i} className="bg-muted/50 rounded-2xl p-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs text-muted-foreground block">{spec.label}</span>
                        <span className="text-sm font-medium text-foreground line-clamp-2">{spec.value.length > 60 ? spec.value.substring(0, 60) + '…' : spec.value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Usage image */}
              {product.details?.usageImage && (
                <div className="rounded-3xl overflow-hidden shadow-card">
                  <img 
                    src={product.details.usageImage} 
                    alt={`${product.name} - mise en situation`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Contact CTA - only show when no specs sidebar */}
              {!hasSpecs && (
                <div className="bg-primary/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Besoin d'informations ?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Notre équipe est à votre disposition pour répondre à toutes vos questions.
                  </p>
                  <Button asChild className="rounded-full">
                    <Link href="/contact">Nous contacter</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Specifications sidebar */}
            {hasSpecs && (
              <div className="lg:sticky lg:top-32 h-fit space-y-6">
                <div className="bg-panel text-panel-foreground rounded-3xl p-8">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <h2 className="text-xl font-bold">
                      Caractéristiques techniques
                    </h2>
                    {hasDocuments && <div className="h-2 w-2 rounded-full bg-primary" />}
                  </div>
                  
                  <div className="space-y-4">
                    {product.details?.specifications?.map((spec, index) => (
                      <div 
                        key={index} 
                        className="border-b border-panel-foreground/20 pb-4 last:border-0 last:pb-0"
                      >
                        <span className="text-primary text-sm font-medium block mb-1">
                          {spec.label}
                        </span>
                        <span className="text-panel-foreground text-sm">
                          {spec.value.includes(' — ') || spec.value.includes(' | ') ? (
                            <span className="block space-y-1">
                              {(() => {
                                const parts = spec.value.split(/ — | \| /);
                                const header = parts[0].match(/^\(.*?\)\s*/) ? parts[0].match(/^\(.*?\)\s*/)?.[0] : null;
                                const firstRest = header ? parts[0].replace(header, '') : null;
                                const items = header && firstRest ? [firstRest, ...parts.slice(1)] : parts.slice(1);
                                const displayHeader = header || parts[0];
                                return (
                                  <>
                                    <span className="block text-panel-foreground/70 mb-2">{displayHeader}</span>
                                    {(header && firstRest ? items : parts.slice(1)).map((item, i) => (
                                      <span key={i} className="block whitespace-pre-line">{item.trim()}</span>
                                    ))}
                                    {!header && !firstRest && parts.length === 1 && (
                                      <span className="block">{parts[0]}</span>
                                    )}
                                  </>
                                );
                              })()}
                            </span>
                          ) : (
                            spec.value
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  <ProductDocuments
                    dataSheetUrl={product.details?.dataSheetUrl}
                    brochureUrl={product.details?.brochureUrl}
                    variant="dark"
                  />
                </div>

                {/* Contact CTA below sidebar */}
                <div className="bg-primary/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Besoin d'informations ?
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Notre équipe est à votre disposition.
                  </p>
                  <Button asChild className="rounded-full w-full">
                    <Link href="/contact">Nous contacter</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Similar products */}
      {similarProducts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Produits similaires
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {similarProducts.map((similarProduct) => (
                <ProductCard key={similarProduct.slug} product={similarProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
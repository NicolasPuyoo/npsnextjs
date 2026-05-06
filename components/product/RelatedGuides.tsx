import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { guides } from "@/data/guides";
import type { Product } from "@/data/products";

// Pick guides relevant to a given product. Heuristic: any guide that
// references the product slug in its products array, then top up with
// guides matching the product subcategory (loose semantic match).

function findRelevantGuides(product: Product): typeof guides {
  // Direct: guides explicitly listing this product
  const direct = guides.filter((g) => g.products.some((p) => p.slug === product.slug));
  if (direct.length >= 2) return direct.slice(0, 3);

  // Semantic fill based on subcategory and category keywords
  const sub = product.subcategory ?? "";
  const cat = product.category;
  const keywordMap: Record<string, string[]> = {
    "isolation-sous-chape": ["isolation-acoustique-sous-chape", "dtu-52-10"],
    "isolation-revetements-sols": ["sous-couche-parquet-flottant", "comment-choisir-sous-couche-acoustique"],
    "isolation-sans-ate": ["comment-choisir-sous-couche-acoustique"],
    "isolation-acoustique-antivibratoire": ["anti-vibration-equipement-industriel"],
  };
  const fillSlugs = new Set<string>([
    ...(keywordMap[sub] ?? []),
    ...(cat === "sport" ? ["sol-salle-de-sport-pro", "en-14904-sol-sportif"] : []),
    ...(cat === "bricolage" ? ["sol-garage-caoutchouc", "tapis-machine-a-laver-anti-vibration"] : []),
  ]);

  const fill = guides.filter((g) => fillSlugs.has(g.slug) && !direct.includes(g));
  return [...direct, ...fill].slice(0, 3);
}

const RelatedGuides = ({ product }: { product: Product }) => {
  const relevant = findRelevantGuides(product);
  if (relevant.length === 0) return null;

  return (
    <section className="py-16 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Guides experts
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Pour aller plus loin sur {product.name}
        </h2>
        <p className="text-background/70 mb-8 max-w-2xl">
          Articles techniques pour bien spécifier ce produit dans votre projet : normes,
          dimensionnement, comparatifs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relevant.map((g) => (
            <Link
              key={g.slug}
              href={`/guide/${g.slug}`}
              className="group rounded-2xl border border-background/10 bg-background/5 p-5 hover:bg-background/10 transition-colors"
            >
              <p className="text-xs text-background/50 mb-2">{g.readingMinutes} min · Guide expert</p>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {g.title}
              </h3>
              <p className="text-sm text-background/70 line-clamp-3 mb-3">{g.description}</p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Lire <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedGuides;

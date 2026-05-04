import Link from "next/link";
import { Volume2 } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const getAcousticPerformance = (product: Product): string | null => {
  if (!product.details?.specifications) return null;

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

const ProductCard = ({ product }: ProductCardProps) => {
  const acousticDb = getAcousticPerformance(product);

  return (
    <Link
      href={`/produit/${product.slug}`}
      className="block bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="aspect-square bg-white p-4 flex items-center justify-center relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {acousticDb && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-full px-2.5 py-1 flex items-center gap-1 shadow-md">
            <Volume2 className="h-3 w-3" />
            <span className="text-xs font-bold">jusqu'à {acousticDb} dB</span>
          </div>
        )}
      </div>
      <div className="p-4 border-t border-border">
        <h3 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        {product.details?.description && (
          <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
            {product.details.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;

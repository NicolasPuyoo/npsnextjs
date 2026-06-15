import Link from "next/link";
import Image from "next/image";
import { Volume2 } from "lucide-react";
import { Product } from "@/data/products";
import { getUseCase } from "@/lib/productUseCases";

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
  const useCase = getUseCase(product.slug);

  return (
    <Link
      href={`/produit/${product.slug}`}
      className="block bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col"
    >
      <div
        className={
          product.imageFit === "cover"
            ? "aspect-square bg-white flex items-center justify-center relative overflow-hidden"
            : "aspect-square bg-white p-4 flex items-center justify-center relative"
        }
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={
            product.imageFit === "cover"
              ? "object-cover group-hover:scale-105 transition-transform duration-300"
              : "object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          }
        />
        {acousticDb && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-full px-2.5 py-1 flex items-center gap-1 shadow-md z-10">
            <Volume2 className="h-3 w-3" />
            <span className="text-xs font-bold">jusqu'à {acousticDb} dB</span>
          </div>
        )}
      </div>
      <div className="p-5 border-t border-border flex-1 flex flex-col">
        {useCase && (
          <p className="text-[11px] uppercase tracking-[0.12em] text-primary font-semibold mb-2 leading-tight">
            {useCase}
          </p>
        )}
        <h3 className="font-bold text-foreground text-base leading-tight group-hover:text-primary transition-colors mb-2">
          {product.name}
        </h3>
        {product.details?.description && (
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {product.details.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;

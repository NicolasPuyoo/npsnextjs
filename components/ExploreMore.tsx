import Link from "next/link";
import batimentImg from "@/assets/categories/batiment.jpg";
import bricolageImg from "@/assets/categories/bricolage.jpg";
import sportImg from "@/assets/categories/sport.webp";
import produitsImg from "@/assets/categories/produits.webp";
import solutionsImg from "@/assets/categories/solutions.webp";
import isolationAcoustiqueImg from "@/assets/batiment/isolation-acoustique.jpg";
import isolationChapeImg from "@/assets/batiment/isolation-chape.jpg";
import isolationSansAteImg from "@/assets/batiment/isolation-sans-ate.webp";
import isolationRevetementsSolsImg from "@/assets/batiment/isolation-revetements-sols.webp";
import solutionsExterieuresImg from "@/assets/batiment/solutions-exterieures.jpg";

interface ExploreItem {
  title: string;
  description: string;
  href: string;
  image: string;
}

interface ExploreMoreProps {
  currentPath?: string;
}

const allItems: ExploreItem[] = [
  {
    title: "Bâtiment & Industrie",
    description: "Solutions acoustiques pour la construction",
    href: "/batiment",
    image: batimentImg.src,
  },
  {
    title: "Bricolage",
    description: "Produits pour particuliers",
    href: "/bricolage",
    image: bricolageImg.src,
  },
  {
    title: "Sport",
    description: "Revêtements sportifs spécialisés",
    href: "/sport",
    image: sportImg.src,
  },
  {
    title: "Nos Solutions",
    description: "Découvrez toutes nos solutions",
    href: "/solutions",
    image: solutionsImg.src,
  },
  {
    title: "Tous les Produits",
    description: "Explorez notre catalogue complet",
    href: "/produits",
    image: produitsImg.src,
  },
];

const batimentSubItems: ExploreItem[] = [
  {
    title: "Isolation Acoustique",
    description: "Solutions anti-vibratoires",
    href: "/batiment/isolation-acoustique",
    image: isolationAcoustiqueImg.src,
  },
  {
    title: "Isolation Sous Chape avec ATE",
    description: "Isolation certifiée",
    href: "/batiment/isolation-sous-chape",
    image: isolationChapeImg.src,
  },
  {
    title: "Isolation Sous Chape sans ATE",
    description: "Solutions flexibles",
    href: "/batiment/isolation-sans-ate",
    image: isolationSansAteImg.src,
  },
  {
    title: "Isolation Revêtements de Sols",
    description: "Sous parquet, laminé, moquette",
    href: "/batiment/isolation-revetements-sols",
    image: isolationRevetementsSolsImg.src,
  },
  {
    title: "Solutions Extérieures",
    description: "Pour terrasses et toitures",
    href: "/batiment/solutions-exterieures",
    image: solutionsExterieuresImg.src,
  },
];

const ExploreMore = ({ currentPath }: ExploreMoreProps) => {
  const isBatimentSubpage = currentPath?.startsWith("/batiment/");

  let displayItems: ExploreItem[] = [];

  if (isBatimentSubpage) {
    const otherBatimentItems = batimentSubItems.filter(item => item.href !== currentPath);
    const mainCategories = allItems.filter(item =>
      item.href !== "/batiment" && item.href !== currentPath
    ).slice(0, 2);
    displayItems = [...otherBatimentItems.slice(0, 2), ...mainCategories];
  } else {
    displayItems = allItems.filter(item => item.href !== currentPath).slice(0, 4);
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Continuez l'exploration
          </h2>
          <p className="text-muted-foreground">
            Découvrez nos autres solutions et produits
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 mb-3">
                    {item.description}
                  </p>
                  <span className="text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Découvrir
                    <span className="text-primary">›</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;

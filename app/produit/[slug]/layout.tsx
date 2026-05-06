import type { Metadata } from "next";
import { allProducts, findProductBySlug, categories } from "@/data/products";
import { breadcrumbList } from "@/lib/jsonLd";

const SITE_URL = "https://nps-france.com";
const BRAND = "NPS Acoustique";

const categoryPath = (cat: string) => {
  switch (cat) {
    case "batiment": return "/batiment";
    case "sport": return "/sport";
    case "bricolage": return "/bricolage";
    default: return "/produits";
  }
};

// Pre-generate every product page at build time → static HTML, instant page loads
export async function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    return {
      title: `Produit non trouvé | ${BRAND}`,
      description: "Ce produit n'existe pas ou n'est plus disponible.",
      robots: { index: false, follow: false },
    };
  }

  const desc =
    product.details?.description ??
    `Découvrez ${product.name}, solution acoustique professionnelle proposée par NPS Acoustique. Caractéristiques techniques, fiche produit et conseil expert.`;

  return {
    title: `${product.name} | ${BRAND}`,
    description: desc.slice(0, 160),
    alternates: { canonical: `${SITE_URL}/produit/${slug}` },
    openGraph: {
      title: product.name,
      description: desc.slice(0, 160),
      url: `${SITE_URL}/produit/${slug}`,
      images: [product.image],
      type: "website",
    },
  };
}

export default async function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  const categoryName =
    categories.find((c) => c.id === product?.category)?.name || product?.category || "";
  const breadcrumbsJsonLd = product
    ? breadcrumbList([
        { name: "Accueil", url: "/" },
        { name: categoryName, url: categoryPath(product.category) },
        { name: product.name, url: `/produit/${product.slug}` },
      ])
    : null;

  // JSON-LD structured data for rich snippets
  const jsonLd = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.image,
        description:
          product.details?.description ??
          `${product.name} — Solution acoustique de NPS Acoustique`,
        brand: { "@type": "Brand", name: BRAND },
        category:
          product.category === "batiment"
            ? "Bâtiment & Industrie"
            : product.category === "sport"
              ? "Sport"
              : "Bricolage",
        ...(product.details?.specifications && {
          additionalProperty: product.details.specifications.map((spec) => ({
            "@type": "PropertyValue",
            name: spec.label,
            value: spec.value,
          })),
        }),
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
          seller: { "@type": "Organization", name: BRAND },
          url: `${SITE_URL}/contact`,
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {breadcrumbsJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
        />
      )}
      {children}
    </>
  );
}

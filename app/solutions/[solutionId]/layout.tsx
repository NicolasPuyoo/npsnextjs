import type { Metadata } from "next";
import { getSolutionById, solutionsData } from "@/data/solutionProducts";
import { solutionFaqs } from "@/data/solutionFaqs";
import { breadcrumbList, faqPage } from "@/lib/jsonLd";

const SITE_URL = "https://nps-france.com";

// Pre-generate every solution page at build time → static HTML, instant loads
export async function generateStaticParams() {
  return solutionsData.map((s) => ({ solutionId: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ solutionId: string }>;
}): Promise<Metadata> {
  const { solutionId } = await params;
  const solution = getSolutionById(solutionId);

  if (!solution) {
    return {
      title: "Solution non trouvée | NPS Acoustique",
      description: "Cette solution n'existe pas.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${solution.title} | NPS Acoustique`,
    description: (solution.heroDescription || solution.description || "").slice(0, 160),
    alternates: { canonical: `${SITE_URL}/solutions/${solutionId}` },
    openGraph: {
      title: solution.title,
      description: (solution.heroDescription || solution.description || "").slice(0, 160),
    },
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ solutionId: string }>;
}) {
  const { solutionId } = await params;
  const solution = getSolutionById(solutionId);
  const faqs = solutionFaqs[solutionId];

  const breadcrumbsJsonLd = solution
    ? breadcrumbList([
        { name: "Accueil", url: "/" },
        { name: "Solutions", url: "/solutions" },
        { name: solution.title, url: `/solutions/${solutionId}` },
      ])
    : null;

  const faqJsonLd = faqs && faqs.length > 0 ? faqPage(faqs) : null;

  return (
    <>
      {breadcrumbsJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {children}
    </>
  );
}

import type { Metadata } from "next";
import { getSolutionById, solutionsData } from "@/data/solutionProducts";

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
    openGraph: {
      title: solution.title,
      description: (solution.heroDescription || solution.description || "").slice(0, 160),
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

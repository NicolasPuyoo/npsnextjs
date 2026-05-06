import type { Metadata } from "next";
import { allGuideSlugs, getGuideBySlug } from "@/data/guides";
import { article, breadcrumbList, faqPage } from "@/lib/jsonLd";

const SITE_URL = "https://nps-france.com";
const BRAND = "NPS Acoustique";

export async function generateStaticParams() {
  return allGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: `Guide non trouvé | ${BRAND}`,
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${guide.title} | ${BRAND}`,
    description: guide.description.slice(0, 160),
    alternates: { canonical: `${SITE_URL}/guide/${slug}` },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description.slice(0, 160),
      url: `${SITE_URL}/guide/${slug}`,
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt ?? guide.publishedAt,
    },
  };
}

export default async function GuideLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) return <>{children}</>;

  const breadcrumbsJsonLd = breadcrumbList([
    { name: "Accueil", url: "/" },
    { name: "Guides", url: "/guide" },
    { name: guide.title, url: `/guide/${slug}` },
  ]);

  const articleJsonLd = article({
    headline: guide.title,
    description: guide.description,
    url: `/guide/${slug}`,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt ?? guide.publishedAt,
  });

  const faqJsonLd = guide.faqs.length > 0 ? faqPage(guide.faqs) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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

"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import EpaisseurCalculator from "@/components/guide/EpaisseurCalculator";
import AuthorByline from "@/components/guide/AuthorByline";
import StickyTOC, { slugify } from "@/components/guide/StickyTOC";
import { getGuideBySlug, guides as allGuides } from "@/data/guides";
import { findProductBySlug } from "@/data/products";

// Render markdown-light: paragraphs separated by \n\n, **bold** inline.
const renderBody = (body: string) => {
  return body.split("\n\n").map((para, i) => (
    <p key={i} className="text-foreground/90 leading-relaxed mb-4">
      {renderInline(para)}
    </p>
  ));
};

const renderInline = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <strong key={`b-${i++}`} className="font-semibold text-foreground">
        {m[1]}
      </strong>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length === 0 ? text : parts;
};

const GuidePage = () => {
  const { slug } = useParams() as { slug: string };
  const guide = slug ? getGuideBySlug(slug) : undefined;
  if (!guide) notFound();

  // Resolve guide products → live product data
  const products = guide.products
    .map((ref) => {
      const p = findProductBySlug(ref.slug);
      return p ? { product: p, why: ref.why } : null;
    })
    .filter((p): p is { product: NonNullable<ReturnType<typeof findProductBySlug>>; why: string } => p !== null);

  // Insert calculator after section index 4 (heuristic). For Pillar 1, this lands
  // after the comparatif section, before "Comment dimensionner".
  const calcAfterIndex = guide.embed === "epaisseur-calculator" ? 4 : -1;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border pt-28 lg:pt-32">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/guide" className="hover:text-primary transition-colors">Guides</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium line-clamp-1">{guide.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Guide expert · {guide.readingMinutes} min de lecture
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {guide.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {guide.intro}
          </p>
        </div>
      </section>

      {/* Body with sticky TOC sidebar on desktop */}
      <article className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-[240px,minmax(0,1fr)] lg:gap-10">
          <aside className="lg:order-1">
            <StickyTOC sections={guide.sections.map((s) => ({ heading: s.heading }))} />
          </aside>

          <div className="max-w-3xl mx-auto lg:mx-0 lg:order-2">
            <AuthorByline
              publishedAt={guide.publishedAt}
              updatedAt={guide.updatedAt}
              readingMinutes={guide.readingMinutes}
            />
            {guide.sections.map((section, i) => {
              const slug = slugify(section.heading);
              return (
                <div key={i} className="mb-10">
                  <h2
                    id={slug}
                    className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-12 first:mt-0 scroll-mt-32"
                  >
                    {section.heading}
                  </h2>
                  {renderBody(section.body)}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-2 mt-4">
                      {section.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-foreground/90 leading-relaxed"
                        >
                          <span className="text-primary font-bold mt-0.5">·</span>
                          <span>{renderInline(b)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {i === calcAfterIndex && <EpaisseurCalculator />}
                </div>
              );
            })}
          </div>
        </div>
      </article>

      {/* Featured products */}
      {products.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Produits adaptés
              </h2>
              <p className="text-muted-foreground">
                Les références NPS conseillées pour ce type de projet. Cliquez pour la fiche complète.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(({ product, why }) => (
                <div key={product.slug} className="space-y-2">
                  <ProductCard product={product} />
                  <p className="text-xs text-muted-foreground px-1">{why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {guide.faqs.length > 0 && (
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Questions fréquentes
            </h2>
            <p className="text-muted-foreground mb-10">
              Les questions que se posent les pros avant de spécifier une sous-couche.
            </p>
            <div className="space-y-4">
              {guide.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-border bg-card p-5 open:shadow-card transition-shadow"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-foreground">
                    <span>{faq.question}</span>
                    <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related guides — internal linking */}
      {guide.related && guide.related.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Guides liés
            </h2>
            <p className="text-muted-foreground mb-8">
              Continuez à creuser le sujet avec ces articles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {guide.related
                .map((slug) => allGuides.find((g) => g.slug === slug))
                .filter((g): g is NonNullable<typeof g> => Boolean(g))
                .map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guide/${g.slug}`}
                    className="group rounded-2xl border border-border bg-card p-5 hover:border-primary hover:shadow-card transition-all"
                  >
                    <p className="text-xs text-muted-foreground mb-2">
                      {g.readingMinutes} min · Guide expert
                    </p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {g.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{g.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un projet en cours ? Parlez à un expert.
          </h2>
          <p className="text-background/80 mb-8 leading-relaxed">
            Devis personnalisé sous 24h, échantillons sur demande, conseil produit selon votre cahier des charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Demander un devis
            </Link>
            <a
              href="tel:0558775589"
              className="inline-flex items-center justify-center border border-background/30 text-background rounded-full px-8 py-3 font-semibold hover:bg-background/10 transition-colors"
            >
              05 58 77 55 89
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuidePage;

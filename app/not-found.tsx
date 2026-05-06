import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable (404) | NPS Acoustique",
  description:
    "La page que vous cherchez n'existe pas ou a été déplacée. Découvrez nos solutions d'isolation acoustique pour le bâtiment, le sport, l'hôtellerie et le bricolage.",
  robots: { index: false, follow: true },
};

const helpfulLinks = [
  { href: "/produits", label: "Catalogue produits", desc: "45 produits Kraiburg, SPORTEC, DAMTEC, KRAITEC" },
  { href: "/solutions", label: "Solutions par secteur", desc: "Fitness, hôtellerie, toitures, désolidarisation, piscine, supermarchés" },
  { href: "/batiment/isolation-sous-chape", label: "Isolation sous chape", desc: "Sous-couches certifiées ATE pour chape flottante" },
  { href: "/sport/fitness", label: "Sols de salle de sport", desc: "Revêtements EN 14904 cardio, musculation, haltérophilie" },
  { href: "/contact", label: "Demander un devis", desc: "Réponse expert sous 24h" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Erreur 404
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Cette page n'existe pas (ou plus).
          </h1>
          <p className="text-lg text-background/80 max-w-2xl">
            Vous êtes peut-être arrivé ici depuis un ancien lien. Voici les meilleures
            destinations pour trouver ce que vous cherchez.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {helpfulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-primary hover:shadow-card transition-all"
              >
                <h2 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {link.label}
                </h2>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-primary/10 p-6 text-center">
            <p className="text-foreground mb-3">
              Vous cherchez un produit précis et n'arrivez pas à le trouver ?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Contacter un expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

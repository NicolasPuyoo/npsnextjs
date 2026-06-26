import Link from "next/link";
import { CheckCircle2, Volume2, ShieldCheck, Recycle, Award, Truck } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import QuoteCTA from "@/components/QuoteCTA";
import { Button } from "@/components/ui/button";
import { batimentProducts } from "@/data/products";
import { faqPage, collectionPage, speakable } from "@/lib/jsonLd";

// ─────────────────────────────────────────────────────────────────────────────
// Hub marque DAMTEC — page SEO P0 du plan (récupère l'autorité de l'ancien
// site nps-france.com qui ranke encore position 6 sur "DAMTEC" avec contenu
// 2015 obsolète). Server component pour bénéficier du prerender + JSON-LD.
// ─────────────────────────────────────────────────────────────────────────────

const damtecProducts = batimentProducts.filter((p) => p.slug.startsWith("damtec-"));

// Regroupement par sous-gamme (ordre éditorial : VIBRA d'abord car le plus
// technique, puis chape, puis revêtements, puis toitures)
const ranges = [
  {
    id: "vibra",
    name: "DAMTEC® VIBRA",
    subtitle: "Anti-vibration et désolidarisation",
    description:
      "Gamme dédiée à l'isolation des bruits solidiens et vibrations de machines et structures. Le chiffre désigne la pression statique maximale supportée en centi-N/mm². 7 grades pour couvrir des charges légères (30 = 0,03 N/mm²) aux fondations industrielles lourdes (1500 = 1,50 N/mm²).",
    products: damtecProducts.filter((p) => p.slug.startsWith("damtec-vibra-")),
  },
  {
    id: "chape-ate",
    name: "DAMTEC® Sous chape avec ATE",
    subtitle: "ESTRA, ESTRA 3D, WAVE 3D, 3D 17/8",
    description:
      "Sous-couches acoustiques avec Agrément Technique Européen (ETA) pour pose sous chape flottante en bâtiment résidentiel, tertiaire, commercial ou industriel. Conformes NRA. ΔLw 19 à 35 dB selon modèle.",
    products: damtecProducts.filter((p) =>
      ["damtec-estra", "damtec-estra-3d", "damtec-wave-3d", "damtec-3d-17-8"].includes(p.slug),
    ),
  },
  {
    id: "revetements-sols",
    name: "DAMTEC® Sous revêtements de sols",
    subtitle: "STANDARD, BLACK UNI, BLACK UNI B1, ITAPUR, ITAPUR B1",
    description:
      "Sous-couches fines en pose libre directement sous parquet, stratifié, moquette, lino, PVC. Variantes coupe-feu B1 (Bfl-s1) disponibles pour ERP / IGH / bâtiments publics.",
    products: damtecProducts.filter((p) =>
      ["damtec-standard", "damtec-black-uni", "damtec-black-uni-b1", "damtec-itapur", "damtec-itapur-b1"].includes(p.slug),
    ),
  },
  {
    id: "sonic-toitures",
    name: "DAMTEC® SONIC — Toitures et terrasses",
    subtitle: "SONIC, SONIC DRAIN PLUS, SONIC FIRE",
    description:
      "Paillets et nappes acoustiques pour terrasses, balcons, loggias et toitures plates. Variante drainante (DRAIN PLUS) et variante ignifugée Broof(t1) Cfl-s1 (FIRE).",
    products: damtecProducts.filter((p) => p.slug.startsWith("damtec-sonic")),
  },
];

const benefits = [
  {
    icon: Award,
    title: "Distributeur officiel exclusif France",
    desc: "NPS Acoustique distribue la gamme DAMTEC complète Kraiburg Relastec depuis plus de 20 ans, avec stock en France et équipe technique francophone.",
  },
  {
    icon: ShieldCheck,
    title: "Certifications européennes complètes",
    desc: "Agréments Techniques Européens (ETA-13/0342, 13/0572, 15/0358, 16/0481), labels qualité de l'air intérieur (A+, AgBB, EC1+, Blue Angel), conformes NRA.",
  },
  {
    icon: Recycle,
    title: "Caoutchouc recyclé",
    desc: "Fabriqué à partir de granulés de caoutchouc recyclé liés au polyuréthane. Production en Allemagne, traçabilité matière, démarche d'éco-conception.",
  },
  {
    icon: Volume2,
    title: "Performance acoustique mesurée",
    desc: "ΔLw entre 16 et 35 dB selon modèle, mesurée selon DIN EN ISO 10140-3. Fréquences propres 8-25 Hz pour gamme VIBRA (machines industrielles).",
  },
  {
    icon: Truck,
    title: "Livraison France entière 7-15 jours",
    desc: "Stock NPS en France, expédition rapide. Devis personnalisé sous 24 h ouvrées. Échantillons gratuits sur demande pour les professionnels.",
  },
  {
    icon: CheckCircle2,
    title: "Conseil technique acoustique",
    desc: "Notre équipe accompagne architectes, BET, entrepreneurs et industriels dans le choix du DAMTEC adapté (épaisseur, ΔLw cible, certifications requises).",
  },
];

const faqs = [
  {
    question: "Qu'est-ce que DAMTEC ?",
    answer:
      "DAMTEC® est une gamme de sous-couches acoustiques et anti-vibratoires en caoutchouc recyclé fabriquée par le groupe allemand Kraiburg Relastec depuis plus de 40 ans. Elle couvre 4 grandes applications : désolidarisation de machines (DAMTEC VIBRA), isolation phonique sous chape flottante (DAMTEC ESTRA, ESTRA 3D, WAVE 3D, 3D 17/8), sous-couches fines sous revêtements de sols (DAMTEC STANDARD, BLACK UNI, ITAPUR), et isolation acoustique des toitures plates et terrasses (DAMTEC SONIC).",
  },
  {
    question: "Qui distribue DAMTEC en France ?",
    answer:
      "NPS Acoustique est le distributeur officiel exclusif en France de la marque DAMTEC depuis plus de 20 ans. Nous stockons la gamme complète dans nos entrepôts français et livrons partout en France métropolitaine sous 7 à 15 jours ouvrés. Toutes les fiches techniques, certifications et conseils techniques en français sont disponibles directement auprès de notre équipe.",
  },
  {
    question: "Comment choisir entre DAMTEC ESTRA, ESTRA 3D, WAVE 3D et 3D 17/8 ?",
    answer:
      "Tous ces produits sont des sous-couches sous chape flottante avec Agrément Technique Européen (ETA), mais avec des profils et performances différents. DAMTEC® ESTRA (lisse, 4/6/8 mm, ΔLw 19-21 dB) convient aux applications standard. ESTRA 3D et WAVE 3D ajoutent un profil ondulé pour améliorer la performance (ΔLw 22-35 dB) — recommandés pour bâtiments commerciaux et industriels. DAMTEC® 3D 17/8 (17/8 mm, ΔLw 26-34 dB) est l'équivalent technique direct du Regupol Sound 17 pour chapes à fortes charges (jusqu'à 50 kN/m²), avec l'avantage de l'ETA-16/0481 officiel.",
  },
  {
    question: "Quelle dureté de DAMTEC VIBRA pour ma machine industrielle ?",
    answer:
      "La sélection se fait selon la pression statique réelle de la machine (poids ÷ surface au sol au point d'appui). Le chiffre dans le nom du produit indique la pression statique maximale en centi-N/mm². Pour une machine appliquant 0,05 N/mm² par exemple, choisir DAMTEC VIBRA 50 (limite max 0,05). La gamme couvre 7 grades de 30 (0,03 N/mm²) à 1500 (1,50 N/mm²). Notre équipe technique vous accompagne dans le dimensionnement précis si nécessaire.",
  },
  {
    question: "DAMTEC est-il conforme à la réglementation acoustique française (NRA) ?",
    answer:
      "Oui. Les sous-couches DAMTEC sous chape (ESTRA, ESTRA 3D, WAVE 3D, 3D 17/8) sont conformes à la Nouvelle Réglementation Acoustique (NRA) française et aux exigences DTU 52.10. Les modèles avec ETA disposent du marquage CE obligatoire en bâtiment. Pour ERP et IGH, privilégier les versions coupe-feu (BLACK UNI B1 et ITAPUR B1 — classe Bfl-s1).",
  },
  {
    question: "Quelle est la différence entre DAMTEC et un produit Regupol Sound ?",
    answer:
      "DAMTEC et Regupol Sound sont deux gammes concurrentes de sous-couches acoustiques caoutchouc. Les performances techniques sont équivalentes : DAMTEC® 3D 17/8 (17/8 mm, ΔLw 26-34 dB, ETA-16/0481) couvre la même application que Regupol Sound 17. DAMTEC apporte deux avantages côté distribution : (1) Agrément Technique Européen officiel sur tous les modèles sous-chape (ETA), et (2) distribution dédiée en France via NPS depuis 20+ ans, avec stock local, livraison 7-15 jours et conseil technique francophone.",
  },
  {
    question: "Peut-on recevoir un échantillon DAMTEC gratuit ?",
    answer:
      "Oui, NPS Acoustique envoie gratuitement un échantillon du modèle DAMTEC de votre choix aux professionnels du bâtiment (architectes, BET, entrepreneurs, bureaux d'études acoustiques). Demande via le formulaire de contact en précisant le modèle et l'application visée. Délai d'expédition : 48 h ouvrées.",
  },
];

const faqJsonLd = faqPage(faqs);

// CollectionPage : signal Google "ceci est un hub listing de produits"
const collectionJsonLd = collectionPage({
  name: "DAMTEC® France — Sous-couches acoustiques Kraiburg",
  description:
    "Catalogue complet DAMTEC distribué en France par NPS Acoustique : 19 produits en 4 familles (anti-vibration VIBRA, sous chape ATE, revêtements sols, toitures SONIC).",
  url: "/damtec",
  numberOfItems: damtecProducts.length,
});

// Speakable : les FAQ sont lisibles à voix haute par Google Assistant / Siri.
const speakableJsonLd = speakable([".faq-question", ".faq-answer"]);

const DamtecHub = () => {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-foreground/95 to-foreground pt-40 pb-20 lg:pt-52 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,white,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-background border border-primary/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
              Distributeur officiel exclusif France
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
              DAMTEC® — Sous-couches acoustiques caoutchouc Kraiburg en France
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
              19 produits, 4 grandes familles, plus de 40 ans d'expertise allemande
              Kraiburg Relastec, distribués en France par NPS Acoustique depuis plus
              de 20 ans. Sous-couches sous chape (avec ou sans ATE), sous revêtements
              de sols, anti-vibration industrielle et toitures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Demander un devis DAMTEC</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent text-background border-background/40 hover:bg-background hover:text-foreground"
              >
                <Link href="#gammes">Voir les 4 gammes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Authority */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              La référence européenne en isolation acoustique caoutchouc
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
              <p>
                <strong>DAMTEC®</strong> est la marque historique du groupe allemand{" "}
                <strong>Kraiburg Relastec</strong>, spécialisé depuis plus de 40 ans
                dans la fabrication de produits acoustiques et anti-vibratoires en
                caoutchouc recyclé. La gamme couvre l'ensemble des besoins du bâtiment
                résidentiel, tertiaire, commercial et industriel — de la sous-couche
                fine sous parquet aux fondations de machines industrielles.
              </p>
              <p>
                <strong>NPS Acoustique</strong> est le{" "}
                <strong>distributeur officiel exclusif</strong> de DAMTEC en France
                depuis plus de 20 ans. Nous stockons la gamme complète dans nos
                entrepôts français et livrons partout en France métropolitaine sous
                7 à 15 jours ouvrés, avec accompagnement technique en français
                (architectes, BET, entrepreneurs, industriels).
              </p>
              <p>
                La gamme DAMTEC comporte plusieurs <strong>Agréments Techniques
                Européens (ETA)</strong> obligatoires pour les sous-couches sous chape
                flottante en bâtiment réglementé, ainsi que les principales
                certifications qualité de l'air intérieur (A+, AgBB, EC1+, Blue Angel).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages DAMTEC */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Pourquoi choisir DAMTEC®
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les 4 gammes DAMTEC */}
      <section id="gammes" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Les 4 familles DAMTEC® distribuées par NPS
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Chaque famille répond à un usage spécifique : machines (VIBRA), chape
              flottante avec agrément européen, revêtements de sols intérieurs,
              toitures et terrasses. {damtecProducts.length} produits au total.
            </p>
          </div>

          <div className="space-y-16">
            {ranges.map((range) => (
              <div key={range.id} id={range.id} className="scroll-mt-24">
                <div className="mb-6 max-w-3xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {range.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{range.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{range.description}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {range.products.map((product, i) => (
                    <ProductCard key={`${product.slug}-${i}`} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Applications DAMTEC® par secteur
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Sous-couches dimensionnées par usage et par contrainte réglementaire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Bâtiment résidentiel et tertiaire",
                desc: "Sous-couches sous chape flottante (DAMTEC ESTRA, ESTRA 3D, WAVE 3D, 3D 17/8) conformes NRA. Hub : /batiment/isolation-sous-chape.",
                href: "/batiment/isolation-sous-chape",
              },
              {
                title: "ERP, IGH et bâtiments publics",
                desc: "Sous-couches coupe-feu B1 (Bfl-s1) DAMTEC BLACK UNI B1 et ITAPUR B1 pour sols intérieurs réglementés.",
                href: "/batiment/isolation-revetements-sols",
              },
              {
                title: "Industrie et anti-vibration",
                desc: "Désolidarisation de machines, groupes froids, compresseurs, CTA. Gamme DAMTEC VIBRA selon pression statique.",
                href: "/batiment/isolation-acoustique",
              },
              {
                title: "Toitures plates, terrasses et balcons",
                desc: "Isolation phonique sous plaques béton + gravillons. DAMTEC SONIC, SONIC DRAIN PLUS (drainant), SONIC FIRE (ignifugé Cfl-s1).",
                href: "/batiment/solutions-exterieures",
              },
              {
                title: "Sous revêtements de sols résidentiels",
                desc: "Sous parquet, stratifié, moquette, lino, PVC. DAMTEC STANDARD, BLACK UNI, ITAPUR — gamme universelle ou ETA selon projet.",
                href: "/batiment/isolation-revetements-sols",
              },
              {
                title: "Conseil et accompagnement",
                desc: "Notre équipe technique vous accompagne dans le choix du DAMTEC adapté à votre projet (épaisseur, ΔLw, certifications).",
                href: "/contact",
              },
            ].map((app, i) => (
              <Link
                key={i}
                href={app.href}
                className="block bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {app.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{app.desc}</p>
                <span className="text-primary text-sm font-medium">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            Questions fréquentes sur DAMTEC®
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-muted/30 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="cursor-pointer font-semibold text-foreground flex items-center justify-between gap-4 faq-question">
                  <span>{faq.question}</span>
                  <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA
        title="Un projet DAMTEC ?"
        description="Décrivez-nous votre application (surface, performance ΔLw visée, certifications requises) et notre équipe revient sous 24 h avec un devis et les fiches techniques adaptées."
      />
    </Layout>
  );
};

export default DamtecHub;

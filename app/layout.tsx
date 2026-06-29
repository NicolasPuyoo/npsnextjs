import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import CookieBanner from "@/components/CookieBanner";
import ConsentManager, { GTMNoScript } from "@/components/ConsentManager";
// Chatbot IA désactivé temporairement : en attente d'une clé ANTHROPIC_API_KEY
// configurée en secret Cloudflare Worker. Le composant + la route API
// /api/acoustic-expert-chat restent en place — remettre le mount ci-dessous
// puis pousser la clé via `wrangler secret put ANTHROPIC_API_KEY` pour réactiver.
// import { AcousticExpertChat } from "@/components/AcousticExpertChat";
import { localBusiness, website, videoObject } from "@/lib/jsonLd";

const SITE_URL = "https://nps-acoustique.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NPS Acoustique | Isolation acoustique et anti-vibratoire",
  description:
    "Spécialiste de l'isolation acoustique et anti-vibratoire depuis plus de 20 ans. Solutions pour le bâtiment, le sport, l'hôtellerie et le bricolage.",
  authors: [{ name: "NPS Acoustique" }],
  // Icons served as plain static assets from /public — works on Cloudflare
  // Pages without the auto-generated icon route handler (which requires edge
  // runtime). The PNG files live at public/icon.png + public/apple-icon.png.
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  // NB: PAS de canonical par défaut au niveau root layout — sinon il "leaked" sur
  // toutes les pages enfants qui n'override pas leur canonical (silos /batiment,
  // /sport, /bricolage → toutes pointaient vers la homepage = dé-indexation Google).
  // Chaque page définit son propre canonical via generateMetadata.
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "NPS Acoustique",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "NPS Acoustique — Distributeur officiel Kraiburg en France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@npsacoustique",
    images: ["/og-default.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "NPS Acoustique",
  alternateName: "NPS",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    "Spécialiste de l'isolation acoustique et anti-vibratoire en France. Solutions pour le bâtiment, le sport, l'hôtellerie et le bricolage depuis plus de 20 ans.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33-5-58-77-55-89",
    contactType: "Sales",
    email: "contact@nps-france.com",
    areaServed: "FR",
    availableLanguage: ["French"],
  },
  sameAs: [],
  brand: [
    { "@type": "Brand", name: "DAMTEC" },
    { "@type": "Brand", name: "KRAITEC" },
    { "@type": "Brand", name: "VIBRAFOAM" },
    { "@type": "Brand", name: "SPORTEC" },
    { "@type": "Brand", name: "PROFIMAT" },
  ],
};

const localBusinessJsonLd = localBusiness();
const websiteJsonLd = website();

// VideoObject schemas pour les 4 vidéos hero du HeroCarousel. Active rich
// video snippet Google + carrousel vidéo dans les SERP (boost CTR sur les
// recherches thématiques). uploadDate fixée à la migration Next.js
// (la vraie date de prod des vidéos n'est pas connue).
const heroVideosJsonLd = [
  videoObject({
    name: "Acoustique des bâtiments tertiaires NPS",
    description:
      "Solutions d'isolation phonique haute performance pour bureaux, logements, ERP et environnements industriels distribuées par NPS Acoustique.",
    thumbnailUrl: "/og-default.jpg",
    contentUrl: "/videos/hero-batiment.mp4",
    uploadDate: "2026-05-04",
  }),
  videoObject({
    name: "Sols sportifs et fitness SPORTEC NPS",
    description:
      "Revêtements SPORTEC et SHIELDTAC pour salles de fitness, haltérophilie, sports d'hiver, commerce et stand de tir.",
    thumbnailUrl: "/og-default.jpg",
    contentUrl: "/videos/hero-fitness.mp4",
    uploadDate: "2026-06-16",
  }),
  videoObject({
    name: "Solutions extérieures et toitures KRAITEC NPS",
    description:
      "Gamme KRAITEC et DAMTEC SONIC pour toitures plates, terrasses, balcons, supports photovoltaïques et abords de piscine.",
    thumbnailUrl: "/og-default.jpg",
    contentUrl: "/videos/hero-exterieur.mp4",
    uploadDate: "2026-05-04",
  }),
  videoObject({
    name: "Solutions acoustiques pour la maison NPS",
    description:
      "Tapis machine à laver, butoirs de parking, berceaux de pneus : la gamme bricolage NPS pour les particuliers.",
    thumbnailUrl: "/og-default.jpg",
    contentUrl: "/videos/hero-hotellerie.mp4",
    uploadDate: "2026-05-04",
  }),
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Preconnect Fontshare : réduit le DNS+TLS handshake pour les fonts
            Satoshi (économie 100-300ms sur connexion mobile). En attendant
            le self-host (téléchargement requis depuis Fontshare). */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        {/* Consent Mode V2 defaults + GTM container (no-op si NEXT_PUBLIC_GTM_ID absent). */}
        <ConsentManager />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {heroVideosJsonLd.map((v, i) => (
          <script
            key={`video-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(v) }}
          />
        ))}
      </head>
      <body>
        {/* GTM noscript fallback — capture les visiteurs sans JS (~1 %). */}
        <GTMNoScript />
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            {/* <AcousticExpertChat /> — désactivé en attente clé ANTHROPIC_API_KEY */}
            <MobileCTABar />
            <CookieBanner />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import CookieBanner from "@/components/CookieBanner";
import { AcousticExpertChat } from "@/components/AcousticExpertChat";

const SITE_URL = "https://nps-france.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NPS Acoustique | Isolation acoustique et anti-vibratoire",
  description:
    "Spécialiste de l'isolation acoustique et anti-vibratoire depuis plus de 20 ans. Distributeur officiel Kraiburg, gammes Vibrafoam, Damtec, Kraitec et Sportec pour le bâtiment, le sport et le bricolage.",
  authors: [{ name: "NPS Acoustique" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "NPS Acoustique",
  },
  twitter: {
    card: "summary_large_image",
    site: "@npsacoustique",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NPS Acoustique",
  alternateName: "NPS",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    "Distributeur officiel Kraiburg en France. Solutions d'isolation acoustique et anti-vibratoire pour le bâtiment, le sport et le bricolage depuis plus de 20 ans.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <AcousticExpertChat />
            <MobileCTABar />
            <CookieBanner />
          </div>
        </Providers>
      </body>
    </html>
  );
}

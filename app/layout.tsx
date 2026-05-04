import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import CookieBanner from "@/components/CookieBanner";
import { AcousticExpertChat } from "@/components/AcousticExpertChat";

export const metadata: Metadata = {
  metadataBase: new URL("https://nps-france.com"),
  title: "NPS Acoustique | Isolation acoustique et anti-vibratoire",
  description:
    "Spécialiste de l'isolation acoustique et anti-vibratoire depuis plus de 20 ans. Produits Vibrafoam, Damtec, Kraitec, Sportec pour le bâtiment, le sport et le bricolage.",
  authors: [{ name: "NPS Acoustique" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "NPS Acoustique",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
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

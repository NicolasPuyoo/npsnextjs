import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AcousticExpertChat } from "@/components/AcousticExpertChat";

export const metadata: Metadata = {
  title: {
    default: "NPS Acoustique — Solutions d'isolation acoustique et anti-vibratoire",
    template: "%s | NPS Acoustique",
  },
  description:
    "Experts en solutions acoustiques depuis plus de 20 ans. Produits Vibrafoam, Damtec, Kraitec pour le bâtiment, le sport et le bricolage.",
  authors: [{ name: "NPS Acoustique" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "NPS Acoustique",
    description: "Solutions d'isolation acoustique et anti-vibratoire",
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
          </div>
        </Providers>
      </body>
    </html>
  );
}

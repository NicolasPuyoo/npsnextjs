import Link from "next/link";
import logoNps from "@/assets/logo-nps.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logoNps.src} alt="NPS Acoustique" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/70 text-sm mb-3">
              Experts en solutions acoustiques et anti-vibratoires depuis plus de 20 ans.
              Nous accompagnons les professionnels et particuliers dans leurs projets d'isolation phonique.
            </p>
          </div>

          {/* Catégories */}
          <div>
            <h4 className="font-semibold mb-4">Catégories</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/batiment" className="hover:text-background transition-colors">Bâtiment</Link></li>
              <li><Link href="/sport" className="hover:text-background transition-colors">Sport</Link></li>
              <li><Link href="/bricolage" className="hover:text-background transition-colors">Bricolage</Link></li>
              <li><Link href="/solutions" className="hover:text-background transition-colors">Solutions</Link></li>
              <li><Link href="/produits" className="hover:text-background transition-colors">Tous les produits</Link></li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h4 className="font-semibold mb-4">Aide</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/contact" className="hover:text-background transition-colors">Demander un devis</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-background transition-colors">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="tel:0558775589" className="hover:text-background transition-colors">05 58 77 55 89</a>
              </li>
              <li>
                <a href="mailto:contact@nps-france.com" className="hover:text-background transition-colors">contact@nps-france.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© {new Date().getFullYear()} NPS Acoustique. Tous droits réservés.</p>
          <Link href="/mentions-legales" className="hover:text-background transition-colors">
            Mentions légales & RGPD
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

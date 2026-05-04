import Link from "next/link";
import logoNps from "@/assets/logo-nps.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logoNps.src} alt="NPS Acoustique" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/70 text-sm">
              Experts en solutions acoustiques depuis plus de 20 ans.
              Nous accompagnons les professionnels et particuliers dans leurs projets d'isolation phonique.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/batiment" className="hover:text-background transition-colors">Bâtiment & Industrie</Link></li>
              <li><Link href="/bricolage" className="hover:text-background transition-colors">Bricolage</Link></li>
              <li><Link href="/sport" className="hover:text-background transition-colors">Sport</Link></li>
              <li><Link href="/solutions" className="hover:text-background transition-colors">Solutions</Link></li>
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

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} NPS Acoustique. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

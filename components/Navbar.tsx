"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import ProductSearch from "@/components/ProductSearch";
import logoNps from "@/assets/logo-nps.png";

const batimentSubLinks = [
  { name: "Isolation acoustique et anti-vibratoire", path: "/batiment/isolation-acoustique" },
  { name: "Isolation sous chape avec ATE", path: "/batiment/isolation-sous-chape" },
  { name: "Isolation sous chape sans ATE", path: "/batiment/isolation-sans-ate" },
  { name: "Isolation sous les revêtements de sols", path: "/batiment/isolation-revetements-sols" },
  { name: "Solutions extérieures", path: "/batiment/solutions-exterieures" },
];

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Bâtiment & Industrie", path: "/batiment", hasSubmenu: true },
  { name: "Bricolage", path: "/bricolage" },
  { name: "Sport", path: "/sport" },
  { name: "Solutions", path: "/solutions" },
  { name: "Produits", path: "/produits" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showWhiteBg = isScrolled || !isHomePage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showWhiteBg
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src={logoNps.src} alt="NPS Acoustique" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              link.hasSubmenu ? (
                <div key={link.path} className="relative group">
                  <Link
                    href={link.path}
                    className={`relative px-4 py-2 text-lg font-medium transition-colors flex items-center gap-1 ${
                      pathname.startsWith(link.path)
                        ? showWhiteBg
                          ? "text-primary"
                          : "text-white"
                        : showWhiteBg
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <svg
                      className="h-4 w-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {pathname.startsWith(link.path) && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-background border border-border rounded-xl shadow-lg py-2 min-w-[280px]">
                      {batimentSubLinks.map((subLink) => (
                        <Link
                          key={subLink.path}
                          href={subLink.path}
                          className={`block px-4 py-3 text-sm transition-colors hover:bg-muted ${
                            pathname === subLink.path
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-4 py-2 text-lg font-medium transition-colors ${
                    pathname === link.path
                      ? showWhiteBg
                        ? "text-primary"
                        : "text-white"
                      : showWhiteBg
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              )
            ))}

            {/* Search */}
            <ProductSearch isScrolled={isScrolled} isHomePage={isHomePage} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ProductSearch isScrolled={isScrolled} isHomePage={isHomePage} />
            <Button
              variant="ghost"
              size="icon"
              className={`${!showWhiteBg ? "text-white hover:bg-white/10" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`lg:hidden py-4 border-t ${showWhiteBg ? "border-border" : "border-white/20"}`}>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`relative px-4 py-3 text-base font-medium transition-colors ${
                    pathname === link.path
                      ? showWhiteBg
                        ? "text-primary"
                        : "text-white"
                      : showWhiteBg
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {pathname === link.path && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

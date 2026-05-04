"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "nps_cookie_consent_v1";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const setConsent = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, at: new Date().toISOString() }),
      );
    } catch {
      /* localStorage may be disabled — banner will reappear next visit */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Bannière de consentement cookies"
      className="fixed bottom-20 lg:bottom-4 left-4 right-4 lg:left-auto lg:right-4 lg:max-w-md z-50 bg-background border border-border rounded-2xl shadow-2xl p-5"
    >
      <button
        onClick={() => setConsent("rejected")}
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
        aria-label="Fermer la bannière (refuser les cookies non essentiels)"
      >
        <X className="w-4 h-4" />
      </button>
      <h2 className="text-base font-semibold text-foreground mb-2">Cookies & confidentialité</h2>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        Ce site utilise des cookies strictement nécessaires à son fonctionnement.
        Aucun cookie publicitaire ou de mesure d'audience n'est déposé sans votre accord.
        En savoir plus dans nos {" "}
        <Link href="/mentions-legales" className="text-primary hover:underline">
          mentions légales
        </Link>
        .
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => setConsent("accepted")}
          className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          J'accepte
        </button>
        <button
          onClick={() => setConsent("rejected")}
          className="flex-1 px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium hover:bg-accent transition-colors"
        >
          Refuser
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;

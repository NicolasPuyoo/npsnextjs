"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Settings } from "lucide-react";

// Bumped to v2 — nouveau format granulaire 3 catégories (essential / analytics /
// marketing) + sync avec Consent Mode V2 GTM. L'ancienne clé v1 (accepted/rejected
// global) sera détectée comme "pas encore consenti" → banner réapparaît une fois.
const STORAGE_KEY = "nps_cookie_consent_v2";

type ConsentCategories = {
  essential: true; // toujours actif, jamais opt-out (cookies session, sécurité)
  analytics: boolean; // GA4, mesure audience
  marketing: boolean; // Google Ads, retargeting, etc.
};

type StoredConsent = {
  categories: ConsentCategories;
  at: string; // ISO 8601
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Sync les choix utilisateur vers Consent Mode V2 (gtag('consent','update')).
 * GTM va ensuite débloquer ou bloquer les tags GA4/Ads selon ces signaux.
 */
function syncToGtag(categories: ConsentCategories) {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push({
    event: "consent_update",
    consent: {
      analytics_storage: categories.analytics ? "granted" : "denied",
      ad_storage: categories.marketing ? "granted" : "denied",
      ad_user_data: categories.marketing ? "granted" : "denied",
      ad_personalization: categories.marketing ? "granted" : "denied",
    },
  });
  // Direct gtag('consent','update') aussi, pour les tags qui écoutent en direct
  // sans passer par un Custom Event trigger GTM.
  const dl = window.dataLayer;
  dl.push({
    0: "consent",
    1: "update",
    2: {
      analytics_storage: categories.analytics ? "granted" : "denied",
      ad_storage: categories.marketing ? "granted" : "denied",
      ad_user_data: categories.marketing ? "granted" : "denied",
      ad_personalization: categories.marketing ? "granted" : "denied",
    },
  });
}

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
      return;
    }
    // Si déjà consenti, on resync le gtag au démarrage (cas où le user vient
    // d'arriver, GTM se charge, mais le consent stocké en localStorage doit
    // être réappliqué).
    try {
      const parsed: StoredConsent = JSON.parse(stored);
      syncToGtag(parsed.categories);
    } catch {
      // Storage corrupt, on réinvite à consentir
      setVisible(true);
    }
  }, []);

  const persistAndClose = (categories: ConsentCategories) => {
    const payload: StoredConsent = { categories, at: new Date().toISOString() };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      /* localStorage disabled — banner will reappear next visit */
    }
    syncToGtag(categories);
    setVisible(false);
  };

  const acceptAll = () => persistAndClose({ essential: true, analytics: true, marketing: true });
  const rejectAll = () => persistAndClose({ essential: true, analytics: false, marketing: false });
  const saveCustom = () =>
    persistAndClose({ essential: true, analytics, marketing });

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-modal="false"
      className="fixed bottom-44 lg:bottom-6 left-4 right-4 lg:left-auto lg:right-6 lg:max-w-md z-50 bg-background border border-border rounded-2xl shadow-2xl p-5"
    >
      <button
        onClick={rejectAll}
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
        aria-label="Fermer la bannière (refuser les cookies non essentiels)"
      >
        <X className="w-4 h-4" />
      </button>

      <h2 id="cookie-banner-title" className="text-base font-semibold text-foreground mb-2">
        Cookies & confidentialité
      </h2>

      {!showSettings ? (
        <>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Nous utilisons des cookies pour le bon fonctionnement du site (essentiels),
            mesurer son audience (analytique) et améliorer nos campagnes publicitaires
            (marketing). Vous pouvez accepter, refuser ou personnaliser à tout moment.{" "}
            <Link href="/mentions-legales" className="text-primary hover:underline">
              En savoir plus
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={acceptAll}
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Tout accepter
            </button>
            <button
              onClick={rejectAll}
              className="flex-1 px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-foreground rounded-full text-sm font-medium hover:bg-muted transition-colors"
              aria-label="Personnaliser mes choix"
            >
              <Settings className="h-3.5 w-3.5" />
              Personnaliser
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-3 mb-4">
            <label className="flex items-start gap-3 cursor-not-allowed opacity-70">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-1 accent-primary"
                aria-label="Cookies essentiels (toujours actifs)"
              />
              <div>
                <span className="text-sm font-medium text-foreground block">
                  Essentiels <span className="text-xs text-muted-foreground">(toujours actifs)</span>
                </span>
                <span className="text-xs text-muted-foreground">
                  Cookies de session et de sécurité indispensables au fonctionnement du site.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 accent-primary"
                aria-label="Cookies analytiques"
              />
              <div>
                <span className="text-sm font-medium text-foreground block">Analytique</span>
                <span className="text-xs text-muted-foreground">
                  Google Analytics 4 pour mesurer audience et améliorer le site.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-1 accent-primary"
                aria-label="Cookies marketing"
              />
              <div>
                <span className="text-sm font-medium text-foreground block">Marketing</span>
                <span className="text-xs text-muted-foreground">
                  Google Ads, mesure de conversions publicitaires, retargeting.
                </span>
              </div>
            </label>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={saveCustom}
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Enregistrer mes choix
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="flex-1 px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              Retour
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CookieBanner;

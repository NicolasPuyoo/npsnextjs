// Helper d'envoi d'événements vers GTM dataLayer.
// GTM se charge de router vers GA4, Google Ads, Meta Pixel, etc.
// Tous les tags sont configurés côté GTM dashboard, pas dans le code.
//
// Usage :
//   import { trackEvent } from "@/lib/tracking";
//   trackEvent("submit_quote", { product_id: "damtec-3d-17-8", form_source: "drawer" });

type EventName =
  | "view_product"        // Page fiche produit chargée
  | "open_quote_drawer"   // Bouton "Demander un devis" cliqué sur fiche produit
  | "submit_quote"        // Formulaire devis envoyé (drawer ou page contact)
  | "click_phone"         // Lien tel: cliqué (header, footer, mobile CTA bar, etc.)
  | "click_email"         // Lien mailto: cliqué
  | "download_pdf";       // Lien fiche technique PDF cliqué

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Push un événement custom dans le dataLayer GTM.
 * No-op si GTM pas chargé (consent denied, env var manquante, etc.) — safe.
 */
export function trackEvent(name: EventName, params?: EventParams): void {
  if (typeof window === "undefined") return; // SSR safety
  if (!window.dataLayer) {
    // dataLayer pas encore initialisé — on l'amorce pour ne rien perdre.
    window.dataLayer = [];
  }
  window.dataLayer.push({
    event: name,
    ...params,
  });
}

/**
 * Helper pour les liens tel: — track + ne pas bloquer la navigation native.
 * Usage : <a href="tel:..." onClick={trackPhoneClick("footer")}>...</a>
 */
export function trackPhoneClick(location: string) {
  return () => trackEvent("click_phone", { location });
}

/**
 * Helper pour les liens mailto:
 */
export function trackEmailClick(location: string) {
  return () => trackEvent("click_email", { location });
}

/**
 * Helper pour les liens PDF (fiche technique téléchargeable)
 */
export function trackPdfDownload(productSlug: string, fileName: string) {
  return () => trackEvent("download_pdf", { product_id: productSlug, file_name: fileName });
}

import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Consent Mode V2 + Google Tag Manager bootstrap.
 *
 * Ordre critique (sinon Google Ads se fait bannir en EU + analytics
 * non-RGPD-compliant) :
 *   1. Consent Mode V2 defaults = "denied" pour TOUT le marketing/analytics
 *      AVANT le GTM init (strategy="beforeInteractive")
 *   2. GTM se charge ENSUITE (afterInteractive) avec ces defaults en mémoire
 *   3. Le Cookie Banner V2 (composant séparé) appelle gtag('consent','update')
 *      quand l'utilisateur accepte une catégorie, ce qui débloque les tags GTM
 *
 * Si NEXT_PUBLIC_GTM_ID n'est pas défini (ex: dev local sans tracking),
 * on n'injecte rien — le site marche normalement, juste sans analytics.
 */
const ConsentManager = () => {
  if (!GTM_ID) return null;

  return (
    <>
      {/* Step 1 — Consent Mode V2 defaults (avant tout autre script GA/Ads) */}
      <Script id="consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'granted',
            'security_storage': 'granted',
            'wait_for_update': 500
          });
          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', true);
        `}
      </Script>

      {/* Step 2 — GTM container (charge après hydratation) */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
    </>
  );
};

/**
 * GTM noscript fallback — à mettre juste après <body>. Permet aux visiteurs
 * sans JS de quand même déclencher PageView (utile pour ~1 % du trafic).
 */
export const GTMNoScript = () => {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
};

export default ConsentManager;

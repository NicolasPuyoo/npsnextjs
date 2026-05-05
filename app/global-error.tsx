"use client";

// global-error remplace le root layout en cas d'erreur AVANT que le layout ait pu rendre.
// Doit donc inclure son propre <html> + <body>. Style minimal pour rester safe.

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          background: "#f5f5f7",
          color: "#1a1a1a",
        }}
      >
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: 12,
              color: "#5fa830",
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            Erreur inattendue
          </p>
          <h1 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 16px" }}>
            Le site rencontre un problème
          </h1>
          <p style={{ color: "#666", marginBottom: 32, lineHeight: 1.5 }}>
            Désolé pour la gêne. Notre équipe a été notifiée. Vous pouvez nous
            joindre directement au 05 58 77 55 89 ou par email à
            contact@nps-france.com.
          </p>
          <button
            onClick={reset}
            style={{
              padding: "12px 24px",
              borderRadius: 999,
              background: "#5fa830",
              color: "white",
              border: "none",
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Recharger
          </button>
          {error.digest && (
            <p
              style={{
                fontSize: 11,
                color: "#999",
                fontFamily: "monospace",
                marginTop: 32,
              }}
            >
              Code : {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}

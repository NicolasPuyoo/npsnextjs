"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to console for now. In prod, plug into Sentry/Logtail/etc.
    console.error("Page error:", error);
  }, [error]);

  return (
    <main className="min-h-[60vh] flex items-center justify-center pt-32 pb-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-[0.15em] text-primary font-semibold mb-3">
          Erreur inattendue
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Cette page a rencontré un problème
        </h1>
        <p className="text-muted-foreground mb-8">
          Désolé pour la gêne. Le problème a été enregistré. Vous pouvez
          recharger la page ou retourner à l'accueil.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
        {error.digest && (
          <p className="text-xs text-muted-foreground/60 mt-8 font-mono">
            Code : {error.digest}
          </p>
        )}
      </div>
    </main>
  );
}

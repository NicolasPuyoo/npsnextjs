import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Mentions légales
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>

        <article className="prose prose-lg max-w-none text-foreground">
          <h2 className="text-2xl font-bold mt-8 mb-3">1. Éditeur du site</h2>
          <p className="text-base">
            Le site <strong>nps-france.com</strong> est édité par <strong>NPS Acoustique</strong>.
            <br />
            Adresse : à compléter
            <br />
            Téléphone : <a href="tel:0558775589" className="text-primary hover:underline">05 58 77 55 89</a>
            <br />
            Email : <a href="mailto:contact@nps-france.com" className="text-primary hover:underline">contact@nps-france.com</a>
            <br />
            SIRET / RCS : à compléter
            <br />
            Numéro de TVA intracommunautaire : à compléter
            <br />
            Directeur de la publication : à compléter
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3">2. Hébergeur</h2>
          <p className="text-base">
            Le site est hébergé par <strong>Vercel Inc.</strong>
            <br />
            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            <br />
            Site : <a href="https://vercel.com" className="text-primary hover:underline">vercel.com</a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3">3. Propriété intellectuelle</h2>
          <p className="text-base">
            L'ensemble des éléments présents sur le site (textes, images, photos, logos, graphismes, vidéos)
            sont protégés par le droit d'auteur et le droit des marques. Toute reproduction, représentation,
            modification, publication ou adaptation totale ou partielle est interdite sans autorisation écrite préalable.
          </p>
          <p className="text-base">
            Les marques DAMTEC®, KRAITEC®, VIBRAFOAM®, SPORTEC®, PROFIMAT® sont des marques déposées
            de leurs propriétaires respectifs.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3">4. Données personnelles (RGPD)</h2>
          <p className="text-base">
            Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés modifiée,
            les données personnelles que vous nous transmettez via les formulaires de contact (nom, prénom,
            email, téléphone, message) sont collectées pour répondre à vos demandes commerciales et techniques.
          </p>
          <p className="text-base">
            <strong>Responsable du traitement :</strong> NPS Acoustique
            <br />
            <strong>Finalité :</strong> traitement de votre demande de contact ou de devis
            <br />
            <strong>Base légale :</strong> intérêt légitime / consentement
            <br />
            <strong>Durée de conservation :</strong> 3 ans à compter du dernier contact
            <br />
            <strong>Destinataires :</strong> personnel autorisé de NPS Acoustique uniquement
          </p>
          <p className="text-base">
            Vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation
            et de portabilité de vos données. Pour exercer ces droits, contactez-nous à
            {" "}<a href="mailto:contact@nps-france.com" className="text-primary hover:underline">contact@nps-france.com</a>.
          </p>
          <p className="text-base">
            Vous pouvez également déposer une réclamation auprès de la
            {" "}<a href="https://www.cnil.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CNIL</a>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3">5. Cookies</h2>
          <p className="text-base">
            Le site utilise uniquement des cookies strictement nécessaires à son fonctionnement
            (préférences d'affichage, sécurité). Aucun cookie publicitaire ou de mesure d'audience
            tiers n'est déposé sans votre consentement.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3">6. Limitation de responsabilité</h2>
          <p className="text-base">
            NPS Acoustique s'efforce de fournir des informations exactes sur le site. Toutefois, nous ne
            pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées.
            Les performances acoustiques mentionnées sont indicatives et dépendent des conditions de mise en œuvre.
            Pour tout projet, nous recommandons de demander un devis personnalisé.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3">7. Liens externes</h2>
          <p className="text-base">
            Le site peut contenir des liens vers des sites tiers. NPS Acoustique ne saurait être tenu
            responsable du contenu de ces sites externes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3">8. Droit applicable</h2>
          <p className="text-base">
            Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut
            de résolution amiable, les tribunaux français seront seuls compétents.
          </p>

          <p className="mt-12">
            <Link href="/" className="text-primary hover:underline">
              ← Retour à l'accueil
            </Link>
          </p>
        </article>
      </div>
    </main>
  );
}

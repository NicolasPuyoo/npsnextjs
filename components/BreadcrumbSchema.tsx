import { breadcrumbList, type Crumb } from "@/lib/jsonLd";

interface BreadcrumbSchemaProps {
  /** Liste des crumbs (incluant racine "Accueil"). URL relative ou absolue. */
  crumbs: Crumb[];
}

/**
 * Server-component qui émet un JSON-LD BreadcrumbList.
 * À insérer sur toutes les pages de profondeur ≥ 2 (hubs catégorie, fiches produit,
 * sous-hubs sport). Google utilise ce schema pour afficher le fil d'Ariane dans
 * la SERP (boost CTR + clarification structure du site).
 *
 * Usage:
 *   <BreadcrumbSchema crumbs={[
 *     { name: "Accueil", url: "/" },
 *     { name: "Bâtiment", url: "/batiment" },
 *     { name: "Isolation sous chape", url: "/batiment/isolation-sous-chape" },
 *   ]} />
 */
const BreadcrumbSchema = ({ crumbs }: BreadcrumbSchemaProps) => {
  const jsonLd = breadcrumbList(crumbs);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default BreadcrumbSchema;

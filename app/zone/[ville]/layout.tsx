import type { Metadata } from "next";
import { allZoneSlugs, getZoneBySlug } from "@/data/zones";
import { breadcrumbList } from "@/lib/jsonLd";

const SITE_URL = "https://nps-france.com";
const BRAND = "NPS Acoustique";

export async function generateStaticParams() {
  return allZoneSlugs().map((ville) => ({ ville }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville } = await params;
  const zone = getZoneBySlug(ville);

  if (!zone) {
    return {
      title: `Zone non trouvée | ${BRAND}`,
      robots: { index: false, follow: false },
    };
  }

  const title = zone.isHQ
    ? `Distributeur acoustique ${zone.city} | ${BRAND} (siège)`
    : `Isolation acoustique ${zone.city} | ${BRAND}`;
  const description = `Distributeur officiel Kraiburg à proximité de ${zone.city}. Livraison 24-48h, conseil acoustique pour bâtiment, salle de sport, hôtel et industrie. ${zone.serviceArea.length} départements desservis.`;

  return {
    title,
    description: description.slice(0, 160),
    alternates: { canonical: `${SITE_URL}/zone/${ville}` },
    openGraph: {
      title,
      description: description.slice(0, 160),
      url: `${SITE_URL}/zone/${ville}`,
    },
  };
}

// Service JSON-LD with areaServed → helps Google associate the page with the
// city and surrounding département.
function serviceJsonLd(city: string, region: string, postalCode: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Distribution de solutions acoustiques et anti-vibratoires",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: BRAND,
      telephone: "+33-5-58-77-55-89",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mont-de-Marsan",
        postalCode: "40000",
        addressRegion: "Nouvelle-Aquitaine",
        addressCountry: "FR",
      },
    },
    areaServed: {
      "@type": "City",
      name: city,
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        postalCode,
        addressRegion: region,
        addressCountry: "FR",
      },
    },
    url: `${SITE_URL}/zone/${slug}`,
  };
}

export default async function ZoneLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ ville: string }>;
}) {
  const { ville } = await params;
  const zone = getZoneBySlug(ville);
  if (!zone) return <>{children}</>;

  const breadcrumbs = breadcrumbList([
    { name: "Accueil", url: "/" },
    { name: "Zones desservies", url: "/zone" },
    { name: zone.city, url: `/zone/${ville}` },
  ]);

  const service = serviceJsonLd(zone.city, zone.region, zone.postalCode, ville);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      {children}
    </>
  );
}

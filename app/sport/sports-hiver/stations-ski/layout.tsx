import type { Metadata } from "next";
import { metaForRoute } from "@/lib/seo";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { breadcrumbsFor } from "@/lib/breadcrumbs";

export const metadata: Metadata = metaForRoute("/sport/sports-hiver/stations-ski");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema crumbs={breadcrumbsFor("/sport/sports-hiver/stations-ski")} />
      {children}
    </>
  );
}

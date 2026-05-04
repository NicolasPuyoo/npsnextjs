import type { Metadata } from "next";
import { metaForRoute } from "@/lib/seo";

export const metadata: Metadata = metaForRoute("/mentions-legales");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

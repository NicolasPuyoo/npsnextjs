import type { Metadata } from "next";
import { metaForRoute } from "@/lib/seo";

export const metadata: Metadata = metaForRoute("/sport/outdoor/sports-terrain");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

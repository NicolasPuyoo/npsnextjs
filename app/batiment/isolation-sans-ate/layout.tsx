import type { Metadata } from "next";
import { metaForRoute } from "@/lib/seo";

export const metadata: Metadata = metaForRoute("/batiment/isolation-sans-ate");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

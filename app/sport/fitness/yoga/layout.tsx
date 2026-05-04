import type { Metadata } from "next";
import { metaForRoute } from "@/lib/seo";

export const metadata: Metadata = metaForRoute("/sport/fitness/yoga");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

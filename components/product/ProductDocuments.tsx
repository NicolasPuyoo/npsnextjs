"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/tracking";

interface ProductDocumentsProps {
  brochureUrl?: string;
  dataSheetUrl?: string;
  /** slug produit pour tracking download_pdf (optionnel, mais recommandé). */
  productSlug?: string;
  variant?: "dark" | "light";
}

const ProductDocuments = ({ brochureUrl, dataSheetUrl, productSlug, variant = "dark" }: ProductDocumentsProps) => {
  if (!dataSheetUrl && !brochureUrl) return null;

  const isDark = variant === "dark";
  const buttonClassName = isDark
    ? "gap-2 rounded-full border-panel-foreground/30 bg-transparent text-panel-foreground hover:bg-panel-foreground/10 hover:text-panel-foreground"
    : "gap-2 rounded-full";
  const wrapperClassName = isDark
    ? "mt-8 border-t border-panel-foreground/20 pt-6"
    : "rounded-2xl border border-border bg-card p-6";
  const titleClassName = isDark ? "text-lg font-semibold text-panel-foreground" : "text-lg font-semibold text-foreground";
  const textClassName = isDark ? "text-panel-foreground/70" : "text-muted-foreground";

  const onDataSheet = () => {
    if (dataSheetUrl) {
      trackEvent("download_pdf", {
        product_id: productSlug ?? "unknown",
        file_name: dataSheetUrl.split("/").pop() ?? "data_sheet",
        doc_type: "datasheet",
      });
    }
  };

  const onBrochure = () => {
    if (brochureUrl) {
      trackEvent("download_pdf", {
        product_id: productSlug ?? "unknown",
        file_name: brochureUrl.split("/").pop() ?? "brochure",
        doc_type: "brochure",
      });
    }
  };

  return (
    <div className={wrapperClassName}>
      <h3 className={titleClassName}>Documents</h3>
      <div className="mt-4 flex flex-col gap-3">
        {dataSheetUrl && (
          <Button variant="outline" className={buttonClassName} asChild>
            <a href={dataSheetUrl} target="_blank" rel="noopener noreferrer" download onClick={onDataSheet}>
              <Download className="h-5 w-5" />
              Télécharger la fiche technique
            </a>
          </Button>
        )}

        {brochureUrl && (
          <Button variant="outline" className={buttonClassName} asChild>
            <a href={brochureUrl} target="_blank" rel="noopener noreferrer" download onClick={onBrochure}>
              <Download className="h-5 w-5" />
              Brochure architectes & urbanistes
            </a>
          </Button>
        )}
      </div>
      <p className={`mt-3 text-sm ${textClassName}`}>
        Les documents s’ouvrent dans un nouvel onglet pour une consultation rapide.
      </p>
    </div>
  );
};

export default ProductDocuments;

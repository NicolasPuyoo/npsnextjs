import Link from "next/link";
import { Phone, FileText } from "lucide-react";

const MobileCTABar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background border-t border-border shadow-[0_-4px_12px_-2px_rgb(0_0_0_/_0.08)]">
      <div className="grid grid-cols-2 divide-x divide-border">
        <a
          href="tel:0558775589"
          className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          aria-label="Appeler NPS Acoustique"
        >
          <Phone className="h-4 w-4 text-primary" />
          <span>Appeler</span>
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity"
        >
          <FileText className="h-4 w-4" />
          <span>Devis gratuit</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileCTABar;

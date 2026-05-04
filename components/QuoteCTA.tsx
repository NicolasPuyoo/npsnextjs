import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

interface QuoteCTAProps {
  title?: string;
  description?: string;
  variant?: "dark" | "light";
}

const QuoteCTA = ({
  title = "Un projet, une question ?",
  description = "Décrivez votre besoin, on vous répond sous 24h avec un conseil expert et un devis adapté.",
  variant = "dark",
}: QuoteCTAProps) => {
  const isDark = variant === "dark";
  return (
    <section className={isDark ? "py-16 bg-foreground/95" : "py-16 bg-muted/30"}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-foreground"}`}>
          {title}
        </h2>
        <p className={`mb-6 max-w-2xl mx-auto ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact" className="inline-flex items-center gap-2">
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className={`rounded-full ${isDark ? "bg-transparent text-white border-white hover:bg-white hover:text-foreground" : ""}`}
          >
            <a href="tel:0558775589" className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              05 58 77 55 89
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuoteCTA;

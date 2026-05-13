"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface VibraProduct {
  name: string;
  slug: string;
  pressureMin: string;
  pressureMax: string;
  bgColor: string;
  textColor: string;
}

// Palette pensée pour différencier visuellement chaque variante du gamme vibra,
// du plus léger (haut, light beige) au plus dense (bas, foreground sombre).
// Les beiges/vert sont des accents designés ; le reste est dérivé du foreground.
const vibraProducts: VibraProduct[] = [
  { name: "DAMTEC® vibra 30", slug: "damtec-vibra-30", pressureMin: "0,03", pressureMax: "0,07", bgColor: "bg-[#e8e4d9]", textColor: "text-foreground" },
  { name: "DAMTEC® vibra 50", slug: "damtec-vibra-50", pressureMin: "0,05", pressureMax: "0,15", bgColor: "bg-foreground/70", textColor: "text-white" },
  { name: "DAMTEC® vibra 100", slug: "damtec-vibra-100", pressureMin: "0,10", pressureMax: "0,30", bgColor: "bg-primary/80", textColor: "text-white" },
  { name: "DAMTEC® vibra 170", slug: "damtec-vibra-170", pressureMin: "0,07", pressureMax: "0,70", bgColor: "bg-[#d4cfc4]", textColor: "text-foreground" },
  { name: "DAMTEC® vibra 280", slug: "damtec-vibra-280", pressureMin: "0,28", pressureMax: "1,50", bgColor: "bg-foreground/85", textColor: "text-white" },
  { name: "DAMTEC® vibra 700", slug: "damtec-vibra-700", pressureMin: "0,70", pressureMax: "3,00", bgColor: "bg-foreground/95", textColor: "text-white" },
  { name: "DAMTEC® vibra 1500", slug: "damtec-vibra-1500", pressureMin: "1,50", pressureMax: "4,00", bgColor: "bg-foreground", textColor: "text-white" },
];

// Bars represent pressure thresholds on a log scale (0,1 → 4 N/mm²).
// A bar is highlighted when its threshold falls inside the product's
// [min, max] pressure window. Height scales with the threshold value
// (log) so the visualization is meaningful instead of decorative.
const PRESSURE_THRESHOLDS = [0.1, 0.2, 0.4, 0.8, 1.5, 3, 4];
const MAX_HEIGHT = 56; // px
const MIN_HEIGHT = 12;

const PressureChart = ({ min, max, isLight }: { min: string; max: string; isLight: boolean }) => {
  const minVal = parseFloat(min.replace(",", "."));
  const maxVal = parseFloat(max.replace(",", "."));

  return (
    <div className="flex items-end gap-1 h-16" role="img" aria-label={`Pression admissible ${min} à ${max} N/mm²`}>
      {PRESSURE_THRESHOLDS.map((threshold, index) => {
        const isInRange = threshold >= minVal && threshold <= maxVal;
        // Log-scale heights so 0.1 → 4 spreads visually.
        const logFactor = Math.log10(threshold * 10 + 1) / Math.log10(41);
        const height = Math.round(MIN_HEIGHT + (MAX_HEIGHT - MIN_HEIGHT) * logFactor);
        const dimClass = isLight ? "bg-foreground/25" : "bg-background/30";
        return (
          <div
            key={index}
            className={`w-3 rounded-t transition-all ${
              isInRange ? "bg-primary" : dimClass
            }`}
            style={{ height: `${height}px` }}
          />
        );
      })}
    </div>
  );
};

const VibraProductSchema = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Gamme DAMTEC® vibra
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Découvrez notre gamme complète de solutions anti-vibratoires, adaptées à différentes plages de pression selon vos besoins.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {vibraProducts.map((product, index) => {
            const isLight = product.bgColor.includes("[#e8e4d9]") || product.bgColor.includes("[#d4cfc4]");

            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/produit/${product.slug}`}
                  className={`block ${product.bgColor} rounded-2xl p-6 h-full hover:scale-[1.02] transition-transform duration-300 group`}
                >
                  <h3 className={`text-lg font-semibold ${product.textColor} mb-4`}>
                    {product.name}
                  </h3>

                  <div className="mb-4">
                    <PressureChart min={product.pressureMin} max={product.pressureMax} isLight={isLight} />
                  </div>

                  <div className={`text-sm ${isLight ? "text-gray-600" : "text-gray-300"}`}>
                    <span className="block mb-1">Pression:</span>
                    <span className={`font-medium ${product.textColor}`}>
                      {product.pressureMin} N/mm² à {product.pressureMax} N/mm²
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VibraProductSchema;

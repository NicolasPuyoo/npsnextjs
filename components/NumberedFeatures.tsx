"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export type NumberedItem = {
  title: string;
  description: string;
  href?: string;
};

interface NumberedFeaturesProps {
  items: NumberedItem[];
  variant?: "dark" | "light";
  eyebrow?: string;
  heading?: string;
  ctaLabel?: string;
}

const NumberedFeatures = ({
  items,
  variant = "dark",
  eyebrow,
  heading,
  ctaLabel = "Découvrir",
}: NumberedFeaturesProps) => {
  const isDark = variant === "dark";

  return (
    <section className={isDark ? "py-20 bg-[#1f1f1f]" : "py-20 bg-background"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || heading) && (
          <div className="mb-14 max-w-3xl">
            {eyebrow && (
              <p className={`text-sm uppercase tracking-[0.2em] mb-4 ${isDark ? "text-white/50" : "text-muted-foreground"}`}>
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${isDark ? "text-white" : "text-foreground"}`}>
                {heading}
              </h2>
            )}
          </div>
        )}

        <div className="space-y-12 lg:space-y-16">
          {items.map((item, index) => {
            const num = String(index + 1).padStart(2, "0");
            const isClickable = !!item.href;

            const inner = (
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-baseline border-t pt-8 lg:pt-10 ${isClickable ? "transition-colors duration-300 group-hover:bg-white/[0.02] -mx-4 px-4 lg:-mx-6 lg:px-6 rounded-2xl" : ""}`}
                style={{ borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
              >
                <div className="lg:col-span-2">
                  <span className={`block text-5xl md:text-6xl font-light tabular-nums transition-colors ${isDark ? "text-white/25 group-hover:text-white/50" : "text-foreground/15 group-hover:text-foreground/30"}`}>
                    {num}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className={`text-xl md:text-2xl font-semibold leading-tight transition-colors ${isDark ? "text-white" : "text-foreground"}`}>
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className={`text-base md:text-lg leading-relaxed ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
                    {item.description}
                  </p>
                  {isClickable && (
                    <span className={`mt-4 inline-block text-sm font-medium transition-all ${isDark ? "text-white/80 group-hover:text-primary" : "text-primary"}`}>
                      {ctaLabel}{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  )}
                </div>
              </div>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={index === 0 ? "first:[&>*]:border-t-0 first:[&>*]:pt-0" : ""}
              >
                {isClickable ? (
                  <Link href={item.href!} className="block group">
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NumberedFeatures;

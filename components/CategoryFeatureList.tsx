"use client";

import { motion } from "framer-motion";

// Sober numbered feature list. Replaces the icon-card grid pattern that was
// rejected as "AI slop" — no icons-in-circles, no centered text, no equal-height
// cards. Numbered "01 / 02 / 03" in primary, title in display weight, description
// in body. Two columns on desktop, stacks on mobile.

export type FeatureItem = {
  title: string;
  description: string;
};

type Props = {
  items: FeatureItem[];
  /**
   * "dark" → sombre (foreground bg, text inverse) pour les pages catégories
   * "light" → fond clair / muted (par défaut)
   */
  tone?: "dark" | "light";
  /** Optional eyebrow + heading above the list */
  eyebrow?: string;
  heading?: string;
  intro?: string;
};

const CategoryFeatureList = ({
  items,
  tone = "dark",
  eyebrow,
  heading,
  intro,
}: Props) => {
  const isDark = tone === "dark";
  return (
    <section
      className={`py-20 lg:py-28 ${
        isDark ? "bg-foreground text-background" : "bg-muted/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || heading || intro) && (
          <div className="max-w-2xl mb-12 lg:mb-16">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
                  isDark ? "text-background" : "text-foreground"
                }`}
              >
                {heading}
              </h2>
            )}
            {intro && (
              <p
                className={`text-lg leading-relaxed ${
                  isDark ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {intro}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 lg:gap-y-14">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            >
              <p className="text-primary font-bold text-sm tracking-[0.25em] mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3
                className={`text-xl lg:text-2xl font-semibold mb-3 leading-tight ${
                  isDark ? "text-background" : "text-foreground"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  isDark ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFeatureList;

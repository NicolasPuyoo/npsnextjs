"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

// Sober feature card grid replacing the centered "icon-in-circle" AI-slop pattern.
//
// Design intent (calibrated against the home page DNA):
// - 2-col grid, not 3 → handles 6-7 features cleanly + larger cards = readable
// - Left-aligned text → no centered-everything AI slop
// - Icon inline next to title, no decorative circle background
// - Subtle border + low-alpha background → cards exist without screaming
// - first-letter:capitalize → presents lowercase data ("anti-glisse")
//   as "Anti-glisse" without touching the underlying content
// - Optional section heading + intro to give the section a job

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = {
  items: FeatureItem[];
  /** Optional eyebrow shown above the heading */
  eyebrow?: string;
  /** Optional section heading */
  heading?: string;
  /** Optional intro paragraph */
  intro?: string;
};

const FeatureCardGrid = ({ items, eyebrow, heading, intro }: Props) => {
  return (
    <section className="py-20 lg:py-28 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || heading || intro) && (
          <div className="max-w-2xl mb-12 lg:mb-16">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {heading}
              </h2>
            )}
            {intro && (
              <p className="text-lg text-white/70 leading-relaxed">{intro}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-7 hover:bg-white/[0.06] hover:border-white/15 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon
                    className="h-5 w-5 text-primary flex-shrink-0"
                    strokeWidth={1.75}
                  />
                  <h3 className="text-white font-semibold text-lg lg:text-xl tracking-tight first-letter:capitalize leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed first-letter:capitalize">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardGrid;

"use client";

import { useEffect, useState } from "react";

// Sticky table of contents for guide pages on desktop.
// - Generates anchor links from H2 headings (slugified).
// - Highlights the current section based on scroll position.
// - Hidden on mobile to avoid clutter (mobile UX uses scroll instead).

type Props = {
  sections: { heading: string }[];
};

const slugify = (s: string): string =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const StickyTOC = ({ sections }: Props) => {
  const [activeSlug, setActiveSlug] = useState<string>("");

  useEffect(() => {
    const slugs = sections.map((s) => slugify(s.heading));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the topmost visible
          const topmost = visible.reduce((acc, cur) =>
            cur.boundingClientRect.top < acc.boundingClientRect.top ? cur : acc,
          );
          setActiveSlug(topmost.target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 },
    );

    for (const slug of slugs) {
      const el = document.getElementById(slug);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Table des matières"
      className="hidden lg:block sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto pr-4"
    >
      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-3">
        Sommaire
      </p>
      <ul className="space-y-2 text-sm">
        {sections.map((s, i) => {
          const slug = slugify(s.heading);
          const isActive = slug === activeSlug;
          return (
            <li key={i}>
              <a
                href={`#${slug}`}
                className={`block py-1 border-l-2 pl-3 transition-colors ${
                  isActive
                    ? "border-primary text-foreground font-medium"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {s.heading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { slugify };
export default StickyTOC;

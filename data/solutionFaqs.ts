// FAQ entries per solution. EMPTIED pending acousticien validation.
// When ready, fill each solution key with verified Q&A pairs.
//
// Each FAQ becomes both visible UI on the solution page AND FAQPage
// JSON-LD for Google rich snippets — so the content must be 100% accurate.

export type FaqEntry = { question: string; answer: string };

export const solutionFaqs: Record<string, FaqEntry[]> = {
  "fitness-gym": [],
  hotels: [],
  "toitures-terrasses": [],
  piscine: [],
  supermarches: [],
  desolidarisation: [],
};

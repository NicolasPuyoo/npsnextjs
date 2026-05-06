// Author byline shown at the top and bottom of each guide.
// Important for E-E-A-T (Google's quality signal): articles signed by a
// named expert rank better than anonymous corporate content.
//
// Default author = "Équipe NPS Acoustique" — placeholder until the user
// sets a real author name (acousticien, BET, ingénieur).

import { Calendar } from "lucide-react";

const formatDate = (iso: string): string => {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return iso;
  }
};

type Props = {
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  authorName?: string;
  authorRole?: string;
};

const AuthorByline = ({
  publishedAt,
  updatedAt,
  readingMinutes,
  authorName = "Équipe NPS Acoustique",
  authorRole = "Conseil acoustique technique",
}: Props) => {
  const isUpdated = updatedAt && updatedAt !== publishedAt;
  return (
    <div className="flex items-center gap-4 py-4 border-y border-border my-8">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <span className="text-primary font-bold text-sm">
          {authorName.split(" ").slice(0, 2).map((s) => s[0]).join("").toUpperCase()}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground">{authorName}</p>
        <p className="text-xs text-muted-foreground">{authorRole}</p>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap">
        <Calendar className="h-3.5 w-3.5" />
        <span>
          {isUpdated ? `Mis à jour le ${formatDate(updatedAt!)}` : formatDate(publishedAt)}
          {" · "}
          {readingMinutes} min
        </span>
      </div>
    </div>
  );
};

export default AuthorByline;

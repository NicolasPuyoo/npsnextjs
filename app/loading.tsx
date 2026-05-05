// Skeleton minimaliste affiché instantanément pendant qu'une page se charge.
// Évite l'effet "écran blanc" entre 2 navigations.

export default function Loading() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero skeleton */}
        <div className="space-y-4 mb-12">
          <div className="h-4 w-32 bg-muted rounded animate-pulse" />
          <div className="h-12 md:h-16 lg:h-20 w-3/4 bg-muted rounded-lg animate-pulse" />
          <div className="h-5 w-2/3 bg-muted rounded animate-pulse" />
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-3">
              <div className="aspect-square bg-muted rounded-2xl animate-pulse" />
              <div className="h-4 w-1/3 bg-muted rounded animate-pulse" />
              <div className="h-5 w-2/3 bg-muted rounded animate-pulse" />
              <div className="h-4 w-full bg-muted rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

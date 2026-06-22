import { Star } from "lucide-react";

// Trustpilot micro-badge. Uses Trustpilot's recognizable green stars on purpose
// (brand trust signal), the rest stays on-palette.
export function Trustpilot({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://www.trustpilot.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Trustpilot Bewertung: 4,9 von 5 Sternen aus 127 Bewertungen"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <span className="inline-flex items-center gap-1 text-sm font-bold text-white">
        <Star className="h-4 w-4 fill-[#00b67a] text-[#00b67a]" />
        Trustpilot
      </span>
      <span className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#00b67a]"
          >
            <Star className="h-3 w-3 fill-white text-white" />
          </span>
        ))}
      </span>
      <span className="text-xs font-medium text-white/55">
        4,9 · 127 Bewertungen
      </span>
    </a>
  );
}

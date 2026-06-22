import Image from "next/image";
import type { LucideIcon } from "lucide-react";

// On-brand generated cover art. Deterministic per `seed` so each post/case
// study gets a distinct but consistent look. Swap to a real photo any time by
// passing `image` (a /public path or remote URL configured in next.config).

const PALETTES = [
  { from: "#ef0b50", glow: "rgba(239,11,80,0.55)", glow2: "rgba(255,77,125,0.35)" },
  { from: "#ff4d7d", glow: "rgba(255,77,125,0.5)", glow2: "rgba(239,11,80,0.4)" },
  { from: "#b00638", glow: "rgba(239,11,80,0.5)", glow2: "rgba(255,77,125,0.3)" },
  { from: "#8a0a31", glow: "rgba(255,77,125,0.45)", glow2: "rgba(239,11,80,0.45)" },
];

const POSITIONS = [
  { a: "-10% -20%", b: "80% 90%" },
  { a: "90% -10%", b: "10% 100%" },
  { a: "50% -30%", b: "60% 110%" },
];

function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

type CoverProps = {
  seed: string;
  icon: LucideIcon;
  image?: string;
  alt?: string;
  className?: string;
  /** Tailwind object-position utility for the photo crop (e.g. "object-top"). */
  imagePos?: string;
};

export function Cover({ seed, icon: Icon, image, alt = "", className = "", imagePos = "" }: CoverProps) {
  if (image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={image} alt={alt} fill className={`object-cover ${imagePos}`} sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
      </div>
    );
  }

  const h = hash(seed);
  const p = PALETTES[h % PALETTES.length];
  const pos = POSITIONS[(h >>> 3) % POSITIONS.length];

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-ink ${className}`}
      style={{
        backgroundImage: `radial-gradient(60% 80% at ${pos.a}, ${p.glow}, transparent 70%), radial-gradient(55% 70% at ${pos.b}, ${p.glow2}, transparent 70%), linear-gradient(135deg, ${p.from}22, #0a0a0a 65%)`,
      }}
    >
      {/* dot texture */}
      <div className="absolute inset-0 bg-grid-fade [background-size:18px_18px] opacity-50" />
      {/* oversized motif icon */}
      <Icon
        className="absolute -bottom-5 -right-4 h-32 w-32 text-white/10"
        strokeWidth={1.2}
      />
      {/* watermark */}
      <span className="absolute bottom-3 left-4 font-display text-sm font-bold text-white/80">
        FameGrowth<span className="text-brand-500">.</span>
      </span>
    </div>
  );
}

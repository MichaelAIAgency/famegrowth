// Seamless logo/wordmark marquee of the major adult creator platforms.
// Pure CSS (animate-marquee), no client JS. Respects reduced motion.

const PLATFORMS = [
  "OnlyFans",
  "Fanvue",
  "Fansly",
  "MYM",
  "Maloum",
  "4Based",
  "LoyalFans",
  "ManyVids",
  "FanCentro",
  "JustForFans",
];

export function PlatformMarquee() {
  // Render the list twice so translateX(-50%) loops seamlessly.
  const items = [...PLATFORMS, ...PLATFORMS];

  return (
    <div className="mt-16 sm:mt-20">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
        Wir skalieren Creator auf allen großen Plattformen
      </p>

      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {items.map((name, i) => (
            <span
              key={i}
              aria-hidden={i >= PLATFORMS.length}
              className="flex shrink-0 items-center whitespace-nowrap px-8 font-display text-2xl font-semibold tracking-tight text-white/45 transition-colors hover:text-white sm:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

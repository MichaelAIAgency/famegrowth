import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { to: 650000, suffix: " €", decimals: 0, label: "Umsatz für Creator im letzten Monat" },
  { to: 50, suffix: " Mio.+", decimals: 0, label: "Video Views generiert" },
  { to: 6, suffix: " Mio.+", decimals: 0, label: "Follower aufgebaut" },
  { to: 8, suffix: "+ Jahre", decimals: 0, label: "Branchenerfahrung" },
];

export function Stats() {
  return (
    <section
      id="erfolge"
      aria-label="Ergebnisse in Zahlen"
      className="scroll-mt-24 border-y border-white/10 bg-white/[0.03]"
    >
      <div className="container grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <div className="font-display text-3xl font-bold text-white sm:text-5xl">
              <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} />
            </div>
            <p className="mt-2 text-sm text-white/55">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

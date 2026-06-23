import { Check, X, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Cell = "yes" | "no" | "partial";

const rows: { label: string; alone: Cell; others: Cell; fame: Cell }[] = [
  { label: "24/7 professionelles Chatting", alone: "no", others: "partial", fame: "yes" },
  { label: "Erfolgsbasiert, keine Vorabkosten", alone: "partial", others: "no", fame: "yes" },
  { label: "Anonymität vertraglich abgesichert", alone: "no", others: "partial", fame: "yes" },
  { label: "Datenbasierte Skalierung", alone: "no", others: "partial", fame: "yes" },
  { label: "Einsatz von Künstlicher Intelligenz", alone: "no", others: "partial", fame: "yes" },
  { label: "Fester persönlicher Ansprechpartner", alone: "no", others: "no", fame: "yes" },
  { label: "Begrenzte Creator pro Monat", alone: "no", others: "no", fame: "yes" },
];

function CellIcon({ v }: { v: Cell }) {
  if (v === "yes")
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white sm:h-7 sm:w-7">
        <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </span>
    );
  if (v === "partial")
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white/80 sm:h-7 sm:w-7">
        <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </span>
    );
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-white/40 sm:h-7 sm:w-7">
      <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
    </span>
  );
}

export function Comparison() {
  return (
    <section id="unterschied" className="section">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Der Unterschied</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Warum Creator zu FameGrowth wechseln
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-card">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/[0.03] text-xs sm:text-sm">
                  <th className="p-3 font-semibold text-white/70 sm:p-4">&nbsp;</th>
                  <th className="p-2 text-center font-semibold text-white/50 sm:p-4">
                    Alleine
                  </th>
                  <th className="p-2 text-center font-semibold text-white/50 sm:p-4">
                    <span className="sm:hidden">Andere</span>
                    <span className="hidden sm:inline">Andere Agenturen</span>
                  </th>
                  <th className="bg-brand-500/10 p-2 text-center font-bold text-brand-300 sm:p-4">
                    FameGrowth
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                {rows.map((r) => (
                  <tr key={r.label}>
                    <td className="p-3 font-medium text-white/80 sm:p-4">{r.label}</td>
                    <td className="p-2 text-center sm:p-4">
                      <div className="flex justify-center">
                        <CellIcon v={r.alone} />
                      </div>
                    </td>
                    <td className="p-2 text-center sm:p-4">
                      <div className="flex justify-center">
                        <CellIcon v={r.others} />
                      </div>
                    </td>
                    <td className="bg-brand-500/[0.06] p-2 text-center sm:p-4">
                      <div className="flex justify-center">
                        <CellIcon v={r.fame} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal className="mx-auto mt-16 max-w-4xl text-center">
          <h3 className="text-2xl font-bold sm:text-3xl">Echte Ergebnisse</h3>
          <p className="mt-3 text-white/60">
            Wir sprechen nicht nur von Skalierung, wir beweisen sie.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { month: "Monat 1", amount: "9.800 €", percent: "+115%" },
              { month: "Monat 3", amount: "31.000 €", percent: "+579%" },
              { month: "Monat 6", amount: "62.461 €", percent: "+1.268%" },
            ].map((stat, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-6 text-left shadow-card"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00AFF0] opacity-10 blur-3xl"></div>
                <p className="text-sm font-medium text-white/50">{stat.month}</p>
                <p className="mt-2 text-3xl font-bold text-white">{stat.amount}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex rounded-full bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-400">
                    {stat.percent}
                  </span>
                  <span className="text-xs text-white/40">vs. Start</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/40">
            Dokumentierter Verlauf einer betreuten Creatorin – Ausgangswert
            4.564 €/Monat, nach 6 Monaten 62.461 €/Monat.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

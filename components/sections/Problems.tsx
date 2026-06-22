import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const problems = [
  {
    problem: "Ich poste täglich, aber mein Umsatz stagniert.",
    consequence: "Reichweite allein bringt kein Geld. Ohne System dahinter bleibt das meiste Potenzial ungenutzt.",
  },
  {
    problem: "Ich kann nicht 24/7 im Chat sein und verliere dadurch Verkäufe.",
    consequence: "Jede unbeantwortete Nachricht ist Geld, das liegen bleibt. Fans springen ab, wenn sie warten müssen.",
  },
  {
    problem: "Ich mache alles selbst: Content, Chat, Marketing, Buchhaltung.",
    consequence: "Creator-Burnout ist real. Wer alles gleichzeitig managt, macht nichts davon richtig gut.",
  },
  {
    problem: "Ich weiss nicht, was ich verlangen soll oder wie PPV richtig geht.",
    consequence: "Falsche Preise kosten mehr als ein schlechter Content-Tag. Ohne Strategie verschenkst du Marge.",
  },
  {
    problem: "Mein Einkommen ist jeden Monat anders, ich kann nichts planen.",
    consequence: "Ohne Retention-System und feste Abläufe bleibt Erfolg reiner Zufall statt planbares Business.",
  },
  {
    problem: "Ich will anonym bleiben, weiss aber nicht wie ich trotzdem wachse.",
    consequence: "Diskretion und Wachstum schliessen sich nicht aus, wenn man weiss, wie man beides kombiniert.",
  },
];

export function Problems() {
  return (
    <section className="section bg-white/[0.02]">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Die Realität</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Klingt das <span className="text-gradient">bekannt?</span>
          </h2>
          <p className="mt-4 text-lg text-white/60 text-pretty">
            Die häufigsten Gründe, warum Creator trotz gutem Content nicht skalieren.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 0.07}>
              <article
                className="flex h-full flex-col gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6"
                style={{ borderLeft: "3px solid #ef0b50" }}
              >
                <p className="text-base font-semibold leading-snug text-white">
                  &bdquo;{item.problem}&ldquo;
                </p>
                <p className="text-sm leading-relaxed text-white/55">
                  {item.consequence}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* pivot line into Leistungen */}
        <Reveal className="mt-16 text-center">
          <p className="text-xl font-bold text-white sm:text-2xl">
            Genau dafür gibt es{" "}
            <span className="text-gradient">FameGrowth.</span>
          </p>
          <p className="mt-3 text-white/55">
            Wir übernehmen alles, was dich vom Wachstum abhält.
          </p>
          <Link
            href="#leistungen"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition hover:text-brand-300"
          >
            Unsere Leistungen ansehen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

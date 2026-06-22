import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { getCaseStudies } from "@/lib/caseStudies";
import { Reveal } from "@/components/ui/Reveal";
import { Cover } from "@/components/ui/Cover";
import { caseIcon } from "@/components/ui/coverIcons";

export function CaseStudyTeaser() {
  const studies = getCaseStudies();

  return (
    <section id="fallstudie" className="section">
      <div className="container">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Fallstudie</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Echte Zahlen, echte Wachstumskurven
            </h2>
            <p className="mt-4 text-lg text-white/60 text-pretty">
              Kein Marketing-Gerede. Hier siehst du Schritt für Schritt, wie wir
              Creator-Accounts skaliert haben.
            </p>
          </div>
          <Link href="/fallstudie" className="btn-ghost shrink-0 text-sm">
            Alle Fallstudien
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {studies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link
                href={`/fallstudie/${c.slug}`}
                className="card group flex h-full flex-col overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <Cover
                  seed={c.slug}
                  icon={caseIcon(c.niche)}
                  image={c.image}
                  alt={c.headline}
                  imagePos={c.coverPos}
                  className="-mx-7 -mt-7 mb-6 aspect-[16/9]"
                />
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/60">
                    {c.niche}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/10 px-3 py-1 text-sm font-bold text-brand-300">
                    <TrendingUp className="h-4 w-4" />
                    {c.heroStat}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold leading-snug">
                  {c.headline}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                  {c.excerpt}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                  {c.metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-xl font-bold text-white">
                        {m.value}
                      </p>
                      <p className="text-xs text-white/50">{m.label}</p>
                    </div>
                  ))}
                </div>


                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-300">
                  Fallstudie lesen
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

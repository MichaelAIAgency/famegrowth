import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { getCaseStudies } from "@/lib/caseStudies";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { Reveal } from "@/components/ui/Reveal";
import { Cover } from "@/components/ui/Cover";
import { caseIcon } from "@/components/ui/coverIcons";

export const metadata = buildMetadata({
  title: "OnlyFans Fallstudien – Echte Wachstumskurven von Creatorn",
  description:
    "Detaillierte OnlyFans Fallstudien von FameGrowth: Wie wir Creator von wenigen hundert auf fünfstellige Monatsumsätze skaliert haben, transparent mit echten Zahlen.",
  path: "/fallstudie",
});

export default function FallstudieIndex() {
  const studies = getCaseStudies();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Start", path: "/" },
              { name: "Fallstudie", path: "/fallstudie" },
            ]),
          ),
        }}
      />
      <section className="section pt-32">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Fallstudien</span>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Echte Ergebnisse, transparent dokumentiert
            </h1>
            <p className="mt-4 text-lg text-white/60 text-pretty">
              Jede Fallstudie zeigt Ausgangslage, Strategie und Zahlen. So siehst
              du genau, wie wir Creator-Accounts skaliert haben.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
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
                  <h2 className="mt-5 text-xl font-bold leading-snug">
                    {c.headline}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                    {c.excerpt}
                  </p>
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
    </>
  );
}

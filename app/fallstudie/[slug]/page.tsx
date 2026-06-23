import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";
import Image from "next/image";
import {
  getCaseStudy,
  getCaseStudySlugs,
  getCaseStudies,
} from "@/lib/caseStudies";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { RevenueChart } from "@/components/ui/RevenueChart";
import { Reveal } from "@/components/ui/Reveal";
import { AudioTestimonial } from "@/components/ui/AudioTestimonial";

const pub = (filename: string) => `/${encodeURIComponent(filename)}`;

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return buildMetadata({ title: "Fallstudie nicht gefunden", noIndex: true });
  return buildMetadata({
    title: study.headline,
    description: study.excerpt,
    path: `/fallstudie/${study.slug}`,
    type: "article",
    publishedTime: study.publishedAt,
  });
}

export default function CaseStudyPage({ params }: Params) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const more = getCaseStudies().filter((c) => c.slug !== study.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Start", path: "/" },
              { name: "Fallstudie", path: "/fallstudie" },
              { name: study.niche, path: `/fallstudie/${study.slug}` },
            ]),
          ),
        }}
      />

      <article className="pt-32">
        <div className="container max-w-4xl">
          <Link
            href="/fallstudie"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle Fallstudien
          </Link>

          <header className="mt-6">
            <span className="eyebrow">{study.niche}</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              {study.headline}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/60 text-pretty">
              {study.excerpt}
            </p>
          </header>

          {/* cover image — banner across mobile and desktop */}
          {study.image && (
            <div className="mt-10 flex flex-col items-stretch gap-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[16/9]">
                <Image
                  src={study.image}
                  alt={study.headline}
                  fill
                  className={`object-cover ${study.heroPos ?? "object-top"}`}
                  sizes="(max-width: 768px) 100vw, 720px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>
            </div>
          )}

          {/* metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {study.metrics.map((m) => (
              <div key={m.label} className="card p-5">
                <p className="font-display text-2xl font-bold text-white">
                  {m.value}
                </p>
                <p className="mt-1 text-xs font-medium text-white/50">{m.label}</p>
                {m.sub && (
                  <p className="mt-1 text-[11px] text-white/35">{m.sub}</p>
                )}
              </div>
            ))}
          </div>

          {/* chart */}
          <Reveal className="mt-10">
            <div className="card p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Umsatzentwicklung</h2>
                <span className="rounded-full bg-brand-500/10 px-3 py-1 text-sm font-bold text-brand-300">
                  {study.heroStat}
                </span>
              </div>
              <RevenueChart data={study.revenueSeries} className="mt-6" />
            </div>
          </Reveal>

          {/* body */}
          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-bold">Die Ausgangslage</h2>
              <p className="mt-3 leading-relaxed text-white/70">{study.challenge}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">Unser Vorgehen</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {study.approach.map((a, i) => (
                  <div key={a.title} className="card p-5">
                    <span className="font-display text-sm font-bold text-brand-500">
                      Schritt {i + 1}
                    </span>
                    <h3 className="mt-1 text-lg font-bold">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {a.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* nachweis proof — after Schritt cards */}
            {study.proof && (
              <div className="mx-auto flex w-full max-w-[240px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 sm:mx-0 sm:max-w-none sm:w-44">
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.06] px-2.5 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-white/40">
                    Nachweis
                  </span>
                </div>
                <img
                  src={pub(study.proof)}
                  alt="Nachweis"
                  className="block h-auto w-full object-contain sm:h-full sm:object-cover sm:object-top"
                />
              </div>
            )}

            <section>
              <h2 className="text-2xl font-bold">Das Ergebnis</h2>
              <p className="mt-3 leading-relaxed text-white/70">{study.result}</p>

            </section>

            <figure className="rounded-2xl bg-ink p-8 text-white">
              <Quote className="h-8 w-8 text-brand-400" />
              <blockquote className="mt-4 text-xl font-medium leading-relaxed">
                &bdquo;{study.quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-white/50">
                {study.quote.author}
              </figcaption>
              {study.audio && (
                <div className="mt-6">
                  <AudioTestimonial
                    file={study.audio}
                    author={study.quote.author}
                  />
                </div>
              )}
            </figure>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-8 text-center">
            <h2 className="text-2xl font-bold">Soll deine Kurve als Nächstes so aussehen?</h2>
            <p className="max-w-md text-white/60">
              Wir nehmen jeden Monat nur eine begrenzte Anzahl Creator auf. Sichere
              dir dein kostenloses Strategiegespräch.
            </p>
            <Link href="/#bewerbung" className="btn-primary">
              Jetzt bewerben
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* more case studies */}
        {more.length > 0 && (
          <div className="container max-w-4xl py-16">
            <h2 className="text-xl font-bold">Weitere Fallstudien</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {more.map((c) => (
                <Link
                  key={c.slug}
                  href={`/fallstudie/${c.slug}`}
                  className="card group p-6 transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="text-xs font-medium text-brand-300">
                    {c.heroStat}
                  </span>
                  <h3 className="mt-1 font-bold leading-snug">{c.headline}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}

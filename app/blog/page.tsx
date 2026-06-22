import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { getBlogPosts, formatDate } from "@/lib/blog";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { Reveal } from "@/components/ui/Reveal";
import { Cover } from "@/components/ui/Cover";
import { blogIcon } from "@/components/ui/coverIcons";

export const metadata = buildMetadata({
  title: "OnlyFans Blog – Strategien, Sicherheit & Insider-Wissen",
  description:
    "Der FameGrowth Blog: Ratgeber rund um OnlyFans Agentur, Umsatz steigern, anonym arbeiten und nachhaltig wachsen. Ehrliches Wissen für Creator.",
  path: "/blog",
});

export default function BlogIndex() {
  const posts = getBlogPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Start", path: "/" },
              { name: "Blog", path: "/blog" },
            ]),
          ),
        }}
      />
      <section className="section pt-32">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Blog</span>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Wissen für ambitionierte Creator
            </h1>
            <p className="mt-4 text-lg text-white/60 text-pretty">
              Strategien, Sicherheit und Insider-Wissen rund um OnlyFans, ehrlich
              und ohne Bullshit.
            </p>
          </Reveal>

          {/* featured */}
          {featured && (
            <Reveal className="mt-14">
              <Link
                href={`/blog/${featured.slug}`}
                className="card group grid gap-6 overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft md:grid-cols-2 md:p-0"
              >
                <Cover
                  seed={featured.slug}
                  icon={blogIcon(featured.category)}
                  image={featured.image}
                  alt={featured.title}
                  className="aspect-[16/10]"
                />
                <div className="flex flex-col justify-center md:p-8">
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span className="rounded-full bg-brand-500/10 px-2.5 py-1 font-semibold text-brand-300">
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featured.readingMinutes} Min
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold leading-snug">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-white/60">{featured.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-300">
                    Artikel lesen
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* rest */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="card group flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <Cover
                    seed={p.slug}
                    icon={blogIcon(p.category)}
                    image={p.image}
                    alt={p.title}
                    className="-mx-6 -mt-6 mb-5 aspect-[16/9]"
                  />
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span className="rounded-full bg-brand-500/10 px-2.5 py-1 font-semibold text-brand-300">
                      {p.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {p.readingMinutes} Min
                    </span>
                  </div>
                  <h2 className="mt-4 text-lg font-bold leading-snug">{p.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                    {p.description}
                  </p>
                  <span className="mt-5 border-t border-white/10 pt-4 text-xs text-white/50">
                    {formatDate(p.publishedAt)}
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

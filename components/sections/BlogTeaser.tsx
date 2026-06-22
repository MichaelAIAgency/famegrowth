import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { getBlogPosts, formatDate } from "@/lib/blog";
import { Reveal } from "@/components/ui/Reveal";
import { Cover } from "@/components/ui/Cover";
import { blogIcon } from "@/components/ui/coverIcons";

export function BlogTeaser() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <section id="blog" className="section bg-white/[0.03]">
      <div className="container">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Blog</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Wissen für ambitionierte Creator
            </h2>
            <p className="mt-4 text-lg text-white/60 text-pretty">
              Strategien, Sicherheit und Insider-Wissen rund um OnlyFans, ehrlich
              und ohne Bullshit.
            </p>
          </div>
          <Link href="/blog" className="btn-ghost shrink-0 text-sm">
            Alle Artikel
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
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
                <h3 className="mt-4 text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                  {p.description}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
                  <span>{formatDate(p.publishedAt)}</span>
                  <ArrowUpRight className="h-4 w-4 text-brand-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

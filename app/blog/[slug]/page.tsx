import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import {
  getBlogPost,
  getBlogSlugs,
  getBlogPosts,
  formatDate,
  type BlogBlock,
} from "@/lib/blog";
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { Cover } from "@/components/ui/Cover";
import { blogIcon } from "@/components/ui/coverIcons";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return buildMetadata({ title: "Artikel nicht gefunden", noIndex: true });
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
  });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 text-2xl font-bold">{block.text}</h2>;
    case "p":
      return (
        <p className="mt-4 leading-relaxed text-white/75">{block.text}</p>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((it) => (
            <li key={it} className="flex gap-3 text-white/75">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span className="leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 border-l-4 border-brand-500 bg-white/[0.03] py-4 pl-6 pr-4 text-lg font-medium italic text-white/80">
          {block.text}
        </blockquote>
      );
  }
}

export default function BlogPostPage({ params }: Params) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const related = getBlogPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: post.title,
              description: post.description,
              path: `/blog/${post.slug}`,
              datePublished: post.publishedAt,
              author: post.author,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Start", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]),
          ),
        }}
      />

      <article className="pt-32">
        <div className="container max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle Artikel
          </Link>

          <header className="mt-6">
            <div className="flex items-center gap-3 text-xs text-white/50">
              <span className="rounded-full bg-brand-500/10 px-2.5 py-1 font-semibold text-brand-300">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readingMinutes} Min Lesezeit
              </span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-white/60 text-pretty">
              {post.description}
            </p>
          </header>

          <Cover
            seed={post.slug}
            icon={blogIcon(post.category)}
            image={post.image}
            alt={post.title}
            className="mt-8 aspect-[21/9] rounded-2xl border border-white/10"
          />

          <div className="mt-8 border-t border-white/10 pt-2">
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {/* inline CTA */}
          <div className="mt-12 flex flex-col items-start gap-3 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-bold">
                Bereit, dein OnlyFans-Business zu skalieren?
              </p>
              <p className="text-sm text-white/60">
                Sichere dir ein kostenloses, diskretes Strategiegespräch.
              </p>
            </div>
            <Link href="/#bewerbung" className="btn-primary shrink-0">
              Jetzt bewerben
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="container max-w-3xl py-16">
            <h2 className="text-xl font-bold">Das könnte dich auch interessieren</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="card group p-6 transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="text-xs font-semibold text-brand-300">
                    {p.category}
                  </span>
                  <h3 className="mt-1 font-bold leading-snug">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}

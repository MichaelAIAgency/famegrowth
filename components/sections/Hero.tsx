import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Star, Zap } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { HeroDashboard } from "./HeroDashboard";
import { PlatformMarquee } from "./PlatformMarquee";
import { Trustpilot } from "@/components/site/Trustpilot";
import { CreatorAvatars } from "@/components/ui/CreatorAvatars";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      {/* soft background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div 
          className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full"
          style={{ background: 'radial-gradient(closest-side, rgba(239, 11, 80, 0.2), transparent)' }}
        />
        <div className="absolute inset-0 bg-grid-fade [background-size:26px_26px] opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      <div className="container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT: copy */}
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                </span>
                Nur noch {siteConfig.slotsLeft} Plätze für {siteConfig.slotsMonth}
              </span>
              <Trustpilot />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Die <span className="text-gradient">OnlyFans Agentur</span>, die
              deinen Umsatz planbar skaliert.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65 text-pretty">
              FameGrowth übernimmt Management, Content-Strategie, Chatting und
              Marketing, datengetrieben und 100 % anonym. Du machst deinen
              Content, wir bauen das Business dahinter.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/#bewerbung" className="btn-primary text-base">
                Kostenloses Strategiegespräch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-base"
              >
                Auf WhatsApp schreiben
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8">
              <CreatorAvatars />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
              <li className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-600" />
                100 % diskret & anonym
              </li>
              <li className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4 text-brand-600" />
                Erfolgsbasiert, keine Vorabkosten
              </li>
              <li className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-brand-600" />
                Bewerbung statt Massengeschäft
              </li>
            </ul>
          </Reveal>
        </div>

        {/* RIGHT: animated dashboard */}
        <Reveal delay={0.1} className="lg:pl-6">
          <HeroDashboard />
        </Reveal>
      </div>

      {/* platform logo marquee */}
      <Reveal delay={0.15} className="container">
        <PlatformMarquee />
      </Reveal>
    </section>
  );
}

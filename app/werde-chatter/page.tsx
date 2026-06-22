import {
  Globe2,
  Clock,
  Wallet,
  GraduationCap,
  Users,
  TrendingUp,
  Check,
} from "lucide-react";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig, absoluteUrl } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { ChatterForm } from "@/components/sections/ChatterForm";

export const metadata = buildMetadata({
  title: "Werde OnlyFans Chatter (m/w/d) – Remote Job bei FameGrowth",
  description:
    "Werde Chatter bei FameGrowth: 100 % remote, flexible Zeiten, faire Vergütung mit Provision und Training inklusive. Jetzt in 2 Minuten als OnlyFans Chatter bewerben.",
  path: "/werde-chatter",
});

const perks = [
  { icon: Globe2, title: "100 % Remote", body: "Arbeite von überall, alles was du brauchst ist Laptop und Internet." },
  { icon: Clock, title: "Flexible Zeiten", body: "Schichten in Teilzeit, Vollzeit oder flexibel als Nebenjob." },
  { icon: Wallet, title: "Faire Vergütung", body: "Fixe Bezahlung plus Provision auf den Umsatz, den du erzielst." },
  { icon: GraduationCap, title: "Training inklusive", body: "Onboarding, Skripte und laufendes Coaching, auch für Einsteiger." },
  { icon: Users, title: "Starkes Team", body: "Du bist nie allein, ein erfahrenes Team unterstützt dich jederzeit." },
  { icon: TrendingUp, title: "Aufstiegschancen", body: "Entwickle dich zum Senior-Chatter oder Team-Lead weiter." },
];

const requirements = [
  "Sehr gutes Schreibgefühl und Empathie im Chat",
  "Verkaufstalent oder die Motivation, es zu lernen",
  "Zuverlässigkeit und absolute Diskretion",
  "Gute Deutsch- und/oder Englischkenntnisse",
  "Stabile Internetverbindung",
];

function jobPostingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "OnlyFans Chatter (m/w/d)",
    description:
      "Remote Chatter-Position bei FameGrowth: Fans betreuen, Beziehungen aufbauen und Inhalte verkaufen, im Tonfall der Creator-Marke. Flexible Zeiten, faire Vergütung mit Provision, Training inklusive.",
    datePosted: "2026-06-01",
    employmentType: ["PART_TIME", "FULL_TIME", "CONTRACTOR"],
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "DE",
    },
    directApply: true,
    url: absoluteUrl("/werde-chatter"),
  };
}

export default function WerdeChatterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Start", path: "/" },
              { name: "Werde Chatter", path: "/werde-chatter" },
            ]),
          ),
        }}
      />

      {/* hero */}
      <section className="relative overflow-hidden pt-32 pb-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[130px]"
        />
        <div className="container max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">Karriere · Remote</span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
              Werde <span className="text-gradient">OnlyFans Chatter</span> bei
              FameGrowth
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/65 text-pretty">
              Verdiene remote und flexibel als Chatter. Du betreust Fans, baust
              Beziehungen auf und verkaufst, mit Training, Skripten und einem Team
              im Rücken. Auch für Einsteiger.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs font-medium text-white/70">
              {["100 % Remote", "Flexible Zeiten", "Faire Bezahlung + Provision", "Training inklusive"].map(
                (b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5"
                  >
                    {b}
                  </span>
                ),
              )}
            </div>
            <a href="#bewerbung" className="btn-primary mt-8">
              Jetzt bewerben
            </a>
          </Reveal>
        </div>
      </section>

      {/* perks */}
      <section className="section pt-8">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Deine Vorteile</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08}>
                <article className="card h-full p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* requirements + form */}
      <section id="bewerbung" className="section bg-white/[0.03]">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Bewerbung</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Das solltest du mitbringen
            </h2>
            <ul className="mt-6 space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-white/80">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500">
                    <Check className="h-3 w-3" />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/55">
              Keine Erfahrung? Kein Problem. Wir bilden dich aus, wichtiger sind
              Sprachgefühl, Zuverlässigkeit und Motivation.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ChatterForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

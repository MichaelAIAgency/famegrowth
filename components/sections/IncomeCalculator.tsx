"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Lock, Sparkles, ShieldCheck } from "lucide-react";
import { buildWhatsappLink, siteConfig } from "@/lib/site";

// --- model ------------------------------------------------------------------
const OPENNESS = [
  { key: "Zu", mult: 0.5 },
  { key: "Leicht", mult: 0.8 },
  { key: "Mittel", mult: 1.14 },
  { key: "Viel", mult: 1.6 },
  { key: "Offen", mult: 2.2 },
] as const;

const euro = (n: number) =>
  n.toLocaleString("de-DE", { maximumFractionDigits: 0 });

export function IncomeCalculator() {
  const [followers, setFollowers] = useState(0);
  const [activity, setActivity] = useState(3);
  const [hours, setHours] = useState(10);
  const [openness, setOpenness] = useState(2); // index into OPENNESS (Mittel)
  const [revealed, setRevealed] = useState(false);

  const { monthly, weekly, daily } = useMemo(() => {
    const base = hours * 500;
    const fanRevenue = followers * (activity / 100) * 0.45;
    const raw = (base + fanRevenue) * OPENNESS[openness].mult;
    const m = Math.min(Math.round(raw / 100) * 100, 250000);
    return {
      monthly: m,
      weekly: Math.round(m / 4.33),
      daily: Math.round(m / 30),
    };
  }, [followers, activity, hours, openness]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.currentTarget).entries(),
    ) as Record<string, string>;

    const message = `Hi FameGrowth! Ich habe euren Einkommensrechner genutzt.
Name: ${data.name ?? ""}
Kontakt: ${data.contact ?? ""}
Instagram Follower: ${euro(followers)}
Community-Aktivität: ${activity} %
Zeit pro Woche: ${hours} h
Sichtbarkeit: ${OPENNESS[openness].key}
Geschätztes Potenzial: ca. ${euro(monthly)} € / Monat
Ich möchte dazu ein kostenloses Strategiegespräch.`;

    // Reveal immediately so the result always shows, even if popups are blocked.
    setRevealed(true);

    // Send the lead straight to the owner's WhatsApp.
    try {
      window.open(buildWhatsappLink(message), "_blank", "noopener,noreferrer");
    } catch {
      /* popups blocked — user can still tap the CTA button below */
    }

    // Best-effort server backup (logs in deployment logs).
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        contact: data.contact,
        source: "income-calculator",
        followers,
        activity,
        hours,
        openness: OPENNESS[openness].key,
        estimate: monthly,
      }),
    }).catch(() => {});
  }

  const ctaLink = buildWhatsappLink(
    `Hi FameGrowth! Mein geschätztes Potenzial laut Rechner: ca. ${euro(
      monthly,
    )} € / Monat. Ich möchte ein kostenloses Strategiegespräch.`,
  );

  return (
    <section id="rechner" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Einkommensrechner</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Finde heraus, wie viel du mit{" "}
            <span className="text-gradient">FameGrowth</span> verdienen kannst
          </h2>
          <p className="mt-4 text-lg text-white/60 text-pretty">
            Gib deine aktuellen Zahlen ein. Wir zeigen dir dein realistisches
            Potenzial.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* INPUTS */}
          <div className="card p-6 sm:p-8">
            <Slider
              label="Instagram Follower"
              hint="(optional – Bonus)"
              value={euro(followers)}
              min={0}
              max={500000}
              step={1000}
              raw={followers}
              onChange={setFollowers}
              minLabel="0"
              maxLabel="500k"
            />
            <Slider
              className="mt-7"
              label="Wie aktiv ist deine Community? (%)"
              value={`${activity}`}
              min={0.1}
              max={30}
              step={0.1}
              raw={activity}
              onChange={setActivity}
              minLabel="0,1 %"
              maxLabel="30 %"
            />
            <Slider
              className="mt-7"
              label="Zeitaufwand pro Woche (Stunden)"
              value={`${hours}`}
              min={1}
              max={40}
              step={1}
              raw={hours}
              onChange={setHours}
              minLabel="1h"
              maxLabel="40h"
            />

            <div className="mt-7">
              <p className="mb-2 text-sm font-medium text-white/80">
                Wie viel willst du zeigen?
              </p>
              <div className="grid grid-cols-5 gap-2">
                {OPENNESS.map((o, i) => {
                  const active = openness === i;
                  return (
                    <button
                      key={o.key}
                      type="button"
                      onClick={() => setOpenness(i)}
                      aria-pressed={active}
                      className={`rounded-xl border px-1 py-3 text-xs font-semibold transition ${
                        active
                          ? "border-brand-500 bg-brand-500/15 text-brand-300"
                          : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/25"
                      }`}
                    >
                      {o.key}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RESULT */}
          <div className="relative card overflow-hidden p-6 sm:p-8">
            <span className="eyebrow">Prognose</span>
            <p className="mt-6 text-sm text-white/50">Geschätzter Monatsumsatz</p>

            <div className={revealed ? "" : "select-none blur-md"}>
              <p className="mt-2 font-display text-5xl font-bold text-brand-500">
                € {euro(monthly)}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/50">pro Woche (Ø)</p>
                  <p className="mt-1 text-xl font-bold">€ {euro(weekly)}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/50">pro Tag (Ø)</p>
                  <p className="mt-1 text-xl font-bold">€ {euro(daily)}</p>
                </div>
              </div>
            </div>

            {revealed ? (
              <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">
                Jetzt Termin vereinbaren
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Lock className="h-4 w-4 text-brand-400" />
                  Ergebnis freischalten
                </p>
                <p className="mt-1 text-xs text-white/50">
                  Trag dich kurz ein, wir senden dir dein Ergebnis und einen
                  konkreten Plan diskret per WhatsApp.
                </p>
                <form onSubmit={onSubmit} className="mt-4 space-y-3">
                  <input
                    name="name"
                    required
                    placeholder="Dein Name / Künstlername"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                  <input
                    name="contact"
                    required
                    placeholder="WhatsApp-Nummer oder E-Mail"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                  <button type="submit" className="btn-primary w-full">
                    <Sparkles className="h-4 w-4" />
                    Ergebnis anzeigen
                  </button>
                </form>
                <p className="mt-3 flex items-center gap-1.5 text-[11px] text-white/40">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  100 % diskret. Keine Weitergabe deiner Daten.
                </p>
              </div>
            )}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-white/40">
          Der Einkommensrechner basiert auf Erfahrungswerten aus der Betreuung
          unserer Creator als seriöse OnlyFans Agentur in Deutschland. Wir nutzen
          ein breites Multi-Channel-Setup, Instagram-Follower sind daher nur ein
          optionaler Bonus, kein Pflichtfaktor. Die Schätzungen sind Richtwerte,
          viele individuelle Faktoren beeinflussen das Ergebnis. Wir machen keine
          Einkommensversprechen. Dein genaues Potenzial klären wir im
          persönlichen Gespräch über {siteConfig.name}.
        </p>
      </div>
    </section>
  );
}

function Slider({
  label,
  hint,
  value,
  min,
  max,
  step,
  raw,
  onChange,
  minLabel,
  maxLabel,
  className = "",
}: {
  label: string;
  hint?: string;
  value: string;
  min: number;
  max: number;
  step: number;
  raw: number;
  onChange: (v: number) => void;
  minLabel: string;
  maxLabel: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-white/80">
        {label}{" "}
        {hint && <span className="font-normal text-brand-400">{hint}</span>}
      </label>
      <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-display text-2xl font-bold">
        {value}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={raw}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-brand-500"
        aria-label={label}
      />
      <div className="mt-1 flex justify-between text-xs text-white/40">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

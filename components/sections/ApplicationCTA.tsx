"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { siteConfig, whatsappLink, buildWhatsappLink } from "@/lib/site";

const revenueOptions = [
  "Noch kein OnlyFans",
  "0 – 1.000 € / Monat",
  "1.000 – 5.000 € / Monat",
  "5.000 – 20.000 € / Monat",
  "20.000 €+ / Monat",
];

type Status = "idle" | "loading" | "success" | "error";

export function ApplicationCTA() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    const message = `Hi FameGrowth! Ich möchte mich für ein kostenloses Strategiegespräch bewerben.
Name: ${data.name ?? ""}
E-Mail: ${data.email ?? ""}
Handle: ${data.handle ?? "-"}
Aktueller Umsatz: ${data.revenue ?? ""}`;

    setStatus("success");

    // Primary channel: open WhatsApp with the application prefilled.
    try {
      window.open(buildWhatsappLink(message), "_blank", "noopener,noreferrer");
    } catch {
      /* popups blocked — success screen offers a direct WhatsApp button */
    }

    // Best-effort server backup.
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source: "application-form" }),
    }).catch(() => {});

    form.reset();
  }

  return (
    <section id="bewerbung" className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
          {/* glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full"
            style={{ background: 'radial-gradient(closest-side, rgba(239, 11, 80, 0.3), transparent)' }}
          />
          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* left: pitch + scarcity */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
                </span>
                Nur noch {siteConfig.slotsLeft} Plätze für {siteConfig.slotsMonth}
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Bewirb dich für dein kostenloses Strategiegespräch
              </h2>
              <p className="mt-4 max-w-md text-white/60">
                Wir arbeiten bewusst nur mit einer begrenzten Anzahl Creator pro
                Monat. So bekommt jeder Account die volle Aufmerksamkeit. Bewirb
                dich in 2 Minuten, wir melden uns diskret zurück.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "100 % unverbindlich & diskret",
                  "Ehrliche Einschätzung deines Potenzials",
                  "Konkreter Plan für die ersten 90 Tage",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/80">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-500">
                      <Check className="h-3 w-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-2 text-xs text-white/40">
                <ShieldCheck className="h-4 w-4" />
                Deine Daten werden vertraulich behandelt und nicht weitergegeben.
              </div>
            </div>

            {/* right: form / success */}
            <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 text-white sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-500/10 text-brand-300">
                    <Check className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">Bewerbung erhalten!</h3>
                  <p className="mt-2 text-sm text-white/60">
                    Wir melden uns innerhalb von 24 Stunden diskret bei dir. Für
                    den schnellsten Draht schreib uns direkt auf WhatsApp.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6"
                  >
                    Jetzt auf WhatsApp schreiben
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Name / Künstlername"
                      name="name"
                      placeholder="z. B. Luna"
                      required
                    />
                    <Field
                      label="E-Mail"
                      name="email"
                      type="email"
                      placeholder="du@email.com"
                      required
                    />
                  </div>
                  <Field
                    label="Instagram / OnlyFans Handle (optional)"
                    name="handle"
                    placeholder="@deinhandle"
                  />
                  <div>
                    <label
                      htmlFor="revenue"
                      className="mb-1.5 block text-sm font-medium text-white/80"
                    >
                      Aktueller Monatsumsatz
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    >
                      <option value="" disabled>
                        Bitte wählen
                      </option>
                      {revenueOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Jetzt bewerben & durchstarten
                    <ArrowUpRight className="h-4 w-4" />
                  </button>

                  {status === "error" && (
                    <p className="text-center text-sm text-brand-600">
                      Etwas ist schiefgelaufen. Schreib uns einfach direkt auf{" "}
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline"
                      >
                        WhatsApp
                      </a>
                      .
                    </p>
                  )}
                  <p className="text-center text-xs text-white/40">
                    Mit dem Absenden stimmst du unserer{" "}
                    <a href="/datenschutz" className="underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-white/80"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  );
}

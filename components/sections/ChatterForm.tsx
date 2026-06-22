"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { buildWhatsappLink, whatsappLink } from "@/lib/site";

const experienceOptions = [
  "Keine Erfahrung",
  "Etwas Erfahrung",
  "Erfahrener Chatter",
];
const availabilityOptions = ["Teilzeit", "Vollzeit", "Flexibel / Nebenbei"];

export function ChatterForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    const message = `Hi FameGrowth! Ich möchte mich als Chatter bewerben.
Name: ${d.name ?? ""}
Kontakt: ${d.contact ?? ""}
Erfahrung: ${d.experience ?? ""}
Verfügbarkeit: ${d.availability ?? ""}
Sprachen: ${d.languages ?? "-"}
Nachricht: ${d.message ?? "-"}`;

    setDone(true);
    try {
      window.open(buildWhatsappLink(message), "_blank", "noopener,noreferrer");
    } catch {
      /* popups blocked — success screen has a WhatsApp button */
    }
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...d, source: "chatter-application" }),
    }).catch(() => {});
    form.reset();
  }

  if (done) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-ink-800 p-8 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-500/10 text-brand-300">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-bold">Bewerbung erhalten!</h3>
        <p className="mt-2 max-w-sm text-sm text-white/60">
          Wir melden uns innerhalb von 24 Stunden bei dir. Für den schnellsten
          Draht schreib uns direkt auf WhatsApp.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6"
        >
          Auf WhatsApp schreiben
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-white/10 bg-ink-800 p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Dein Name" required />
        <Field
          label="WhatsApp / E-Mail"
          name="contact"
          placeholder="Nummer oder E-Mail"
          required
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select label="Erfahrung" name="experience" options={experienceOptions} />
        <Select
          label="Verfügbarkeit"
          name="availability"
          options={availabilityOptions}
        />
      </div>
      <Field
        label="Sprachen"
        name="languages"
        placeholder="z. B. Deutsch, Englisch"
      />
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-white/80"
        >
          Nachricht (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Erzähl uns kurz etwas über dich."
          className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Jetzt als Chatter bewerben
        <ArrowUpRight className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-white/40">
        Mit dem Absenden stimmst du unserer{" "}
        <a href="/datenschutz" className="underline">
          Datenschutzerklärung
        </a>{" "}
        zu.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-white/80">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={options[0]}
        className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

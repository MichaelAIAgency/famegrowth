import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "Ihr wart immer für mich da, auch als es nicht nur um Zahlen ging!",
    author: "Creator @L.",
    niche: "Lifestyle",
    result: "Von 4.564 € auf 62.461 € / Monat",
  },
  {
    quote: "Ich kann nur sagen, dass ich super zufrieden bin!",
    author: "Creator @M.",
    niche: "Fitness",
    result: "+1.000 % in 8 Monaten",
  },
  {
    quote: "Ich bin so zufrieden mit dem Management!",
    author: "Creator @N.",
    niche: "Glamour",
    result: "Konstant 10.000 € / Monat",
  },
];

export function Testimonials() {
  return (
    <section id="kundenstimmen" className="section bg-white/[0.03]">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Kundenstimmen</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Creator, die mit uns skaliert haben
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Namen anonymisiert, Ergebnisse echt. Diskretion gilt auch für unsere
            erfolgreichsten Partner.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <figure className="card flex h-full flex-col p-6">
                <Quote className="h-7 w-7 text-brand-500/40" />
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-white/80">
                  &bdquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <figcaption>
                    <p className="text-sm font-bold">{t.author}</p>
                    <p className="text-xs text-white/50">{t.niche}</p>
                  </figcaption>
                  <span className="rounded-full bg-brand-500/10 px-2.5 py-1 text-xs font-semibold text-brand-300">
                    {t.result}
                  </span>
                </div>
                <div className="mt-3 flex">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-brand-500 text-brand-500"
                    />
                  ))}
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

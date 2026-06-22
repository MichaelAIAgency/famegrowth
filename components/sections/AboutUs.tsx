import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Cover } from "@/components/ui/Cover";
import { Sparkles } from "lucide-react";

const values = [
  "100 % diskret und anonym, auf Wunsch komplett faceless",
  "Ausschließlich auf Erfolgsbeteiligung, keine Vorabkosten",
  "Persönlicher Success-Manager statt anonymer Hotline",
  "In der Probezeit täglich kündbar",
];

const facts = [
  { value: "8+", label: "Jahre Erfahrung" },
  { value: "40", label: "aktive Creator" },
  { value: "6 Mio.+", label: "Follower aufgebaut" },
];

export function AboutUs() {
  return (
    <section id="ueber-uns" className="section">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        {/* text */}
        <Reveal>
          <span className="eyebrow">Über uns</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Wer hinter <span className="text-gradient">FameGrowth</span> steht
          </h2>
          <div className="mt-5 space-y-4 text-white/65">
            <p>
              FameGrowth ist eine spezialisierte OnlyFans Agentur aus Deutschland
              mit über 8 Jahren Branchenerfahrung. Wir betreuen aktuell rund 40
              Creator:innen, haben gemeinsam über 6 Millionen Follower aufgebaut
              und mehr als 50 Millionen Video Views generiert.
            </p>
            <p>
              Hinter den Zahlen steht ein eingespieltes Team aus Marketing,
              Content-Strategie, Chatting und Management. Unsere Mission: aus
              deinem Account ein planbares, diskretes Business machen, während du
              dich voll auf deinen Content konzentrierst.
            </p>
          </div>

          <ul className="mt-7 space-y-3">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3 text-sm text-white/80">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500">
                  <Check className="h-3 w-3" />
                </span>
                {v}
              </li>
            ))}
          </ul>

          <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {f.value}
                </dt>
                <dd className="mt-1 text-xs text-white/50">{f.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* image */}
        <Reveal delay={0.1}>
          <Cover
            seed="ueber-uns-famegrowth"
            icon={Sparkles}
            image="/about.jpg"
            alt="FameGrowth – diskrete OnlyFans Agentur aus Deutschland"
            className="aspect-[4/3] rounded-3xl border border-white/10"
          />
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Setup & Strategie",
    body: "Wir richten deinen Account professionell ein und erstellen einen individuellen Content-Plan.",
  },
  {
    n: "02",
    title: "Traffic & Marketing",
    body: "Gezielte Werbekampagnen auf Social Media (TikTok, IG, Reddit) bringen dir täglich neue Fans.",
  },
  {
    n: "03",
    title: "Content & KI",
    body: "Du lieferst Basis-Bilder, wir skalieren deinen Output mit täuschend echtem KI-Content.",
  },
  {
    n: "04",
    title: "Chatting & Sales",
    body: "Unser Team chattet rund um die Uhr mit deinen Fans und verkauft proaktiv Pay-Per-View Inhalte.",
  },
  {
    n: "05",
    title: "Skalierung",
    body: "Wir optimieren Preise, analysieren Daten und sorgen für sichere, wachsende Auszahlungen.",
  },
];

export function Process() {
  return (
    <section id="ablauf" className="section bg-white/[0.03]">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Dein Weg</span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Der FameGrowth{" "}
            <span className="italic text-gradient">Blueprint</span>
          </h2>
          <p className="mt-4 text-lg text-white/55">Einfach und effektiv.</p>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.07}>
              <div className="flex items-center">
                <span className="bg-gradient-to-b from-brand-300 via-brand-500 to-brand-500/0 bg-clip-text font-display text-6xl font-bold leading-none text-transparent sm:text-7xl">
                  {s.n}
                </span>
                {i < steps.length - 1 && (
                  <span className="ml-4 hidden h-px flex-1 bg-gradient-to-r from-white/25 to-white/5 lg:block" />
                )}
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

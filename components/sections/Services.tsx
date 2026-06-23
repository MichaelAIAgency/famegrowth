import {
  Megaphone,
  Settings2,
  MessagesSquare,
  TrendingUp,
  UserCheck,
  Receipt,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    icon: Megaphone,
    title: "OnlyFans Promotion & Traffic",
    body: "Wir bringen über ein breites Multi-Channel-Setup täglich neue Fans auf deinen Account, statt dich auf einen einzigen Kanal zu verlassen.",
  },
  {
    icon: Settings2,
    title: "OnlyFans Account Betreuung",
    body: "Aufbau, Pflege und Optimierung deines Accounts. Content-Plan, Feed und Funnel werden professionell aufgesetzt und laufend verbessert.",
  },
  {
    icon: MessagesSquare,
    title: "24/7 Betreuung & Chatting",
    body: "Unser Team betreut deine Fans rund um die Uhr und verkauft im Tonfall deiner Marke. Der größte Umsatzhebel, komplett übernommen.",
  },
  {
    icon: Sparkles,
    title: "KI-Content Erstellung",
    body: "Wir erstellen auf Wunsch täuschend echten KI-Content für deinen Account. So kannst du skalieren, ohne 24/7 shooten zu müssen.",
    cta: {
      text: "Beispiele per WhatsApp anfragen",
      href: "https://wa.me/4915100000000?text=Hey,%20ich%20h%C3%A4tte%20gerne%20Beispiele%20zu%20eurem%20KI-Content!",
    }
  },
  {
    icon: TrendingUp,
    title: "Einnahmen-Optimierung",
    body: "Datenbasierte Preis- und Angebotsstrategie über PPV, Bundles und Tipps. Nachweislich steigende Umsätze statt Bauchgefühl.",
  },
  {
    icon: UserCheck,
    title: "Persönlicher Success-Manager",
    body: "Ein fester Ansprechpartner, der dein Business kennt und mit dir wächst. Keine Hotline, keine Warteschleife.",
  },
  {
    icon: Receipt,
    title: "Abrechnung & Struktur",
    body: "Wir bringen Ordnung in Auszahlungen, Abrechnung und Struktur, damit du den Überblick behältst und dich auf Content konzentrieren kannst.",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="section">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Leistungen</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Alles, was dein OnlyFans-Business braucht, an einem Ort
          </h2>
          <p className="mt-4 text-lg text-white/60 text-pretty">
            Du konzentrierst dich auf deinen Content. Wir übernehmen das komplette
            Business dahinter, von der ersten Nachricht bis zur Auszahlung.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <article className="card group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 transition group-hover:bg-brand-500 group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {s.body}
                </p>
                {s.cta && (
                  <a
                    href={s.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-brand-300 hover:text-brand-400"
                  >
                    {s.cta.text} &rarr;
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

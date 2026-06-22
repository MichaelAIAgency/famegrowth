import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der FanGrowth GmbH (FameGrowth).",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <div className="container max-w-3xl pb-24 pt-32">
      <h1 className="text-4xl font-bold">Impressum</h1>

      <div className="mt-8 space-y-6 text-white/75">
        <section>
          <h2 className="text-xl font-bold text-white">Angaben gemäß § 5 DDG</h2>
          <p className="mt-2">
            FanGrowth GmbH
            <br />
            c/o Source Art
            <br />
            Tuttlingerstr. 45
            <br />
            78333 Stockbach
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Vertreten durch</h2>
          <p className="mt-2">Julian Rotermund</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Kontakt</h2>
          <p className="mt-2">E-Mail: {siteConfig.email}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Umsatzsteuer-ID</h2>
          <p className="mt-2">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG:
            <br />
            DE461392405
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">
            Verantwortlich i.S.d. § 18 Abs. 2 MStV
          </h2>
          <p className="mt-2">
            FanGrowth GmbH
            <br />
            c/o Source Art, Tuttlingerstr. 45, 78333 Stockbach, Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">EU-Streitschlichtung</h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-300 underline"
            >
              https://ec.europa.eu/odr
            </a>
            . Unsere E-Mail-Adresse findest du oben im Impressum.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="mt-2">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <p className="pt-4 text-sm text-white/40">Stand: 26.01.2026</p>
      </div>
    </div>
  );
}

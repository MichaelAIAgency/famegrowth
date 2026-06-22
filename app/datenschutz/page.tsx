import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der FanGrowth GmbH (FameGrowth) gemäß DSGVO.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <div className="container max-w-3xl pb-24 pt-32">
      <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>
      <p className="mt-3 rounded-xl border border-brand-500/20 bg-brand-500/10 p-4 text-sm text-white/70">
        Hinweis: Diese Erklärung beschreibt die Datenverarbeitung dieser Website.
        Bitte vor dem Livegang anwaltlich prüfen lassen und bei Einsatz weiterer
        Tools (z. B. Analyse, Karten, Pixel) entsprechend ergänzen.
      </p>

      <div className="mt-8 space-y-8 text-white/75">
        <section>
          <h2 className="text-xl font-bold text-white">
            1. Verantwortliche Stelle
          </h2>
          <p className="mt-2">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            FanGrowth GmbH, c/o Source Art, Tuttlingerstr. 45, 78333 Stockbach,
            Deutschland
            <br />
            E-Mail: {siteConfig.email}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">2. Hosting</h2>
          <p className="mt-2">
            Diese Website wird bei der Vercel Inc. gehostet. Beim Aufruf der
            Website werden technisch notwendige Daten (z. B. IP-Adresse,
            Zeitpunkt des Zugriffs, Browsertyp) in Server-Logfiles verarbeitet.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (sicherer und
            stabiler Betrieb der Website). Es besteht ein Vertrag zur
            Auftragsverarbeitung (AVV) mit dem Hosting-Anbieter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">
            3. SSL-/TLS-Verschlüsselung
          </h2>
          <p className="mt-2">
            Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-
            Verschlüsselung. Eine verschlüsselte Verbindung erkennst du am
            „https://" in der Adresszeile deines Browsers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">4. Server-Logfiles</h2>
          <p className="mt-2">
            Der Provider erhebt und speichert automatisch Informationen in
            Server-Logfiles, die dein Browser automatisch übermittelt
            (Browsertyp und -version, Betriebssystem, Referrer-URL, Uhrzeit der
            Serveranfrage, IP-Adresse). Diese Daten werden nicht mit anderen
            Datenquellen zusammengeführt und dienen der technischen
            Bereitstellung.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">
            5. Kontaktaufnahme, Bewerbungsformular & WhatsApp
          </h2>
          <p className="mt-2">
            Wenn du unser Bewerbungs- bzw. Kontaktformular oder den
            Einkommensrechner nutzt, verarbeiten wir die von dir angegebenen
            Daten (z. B. Name, E-Mail, WhatsApp-Nummer, Handle, Umsatzangaben)
            ausschließlich zur Bearbeitung deiner Anfrage. Kontaktierst du uns
            über WhatsApp, werden deine Nachricht und Telefonnummer an die Meta
            Platforms Ireland Ltd. übermittelt und nach deren
            Datenschutzbestimmungen verarbeitet. Rechtsgrundlage ist Art. 6 Abs.
            1 lit. b und f DSGVO. Die Daten werden gelöscht, sobald sie für den
            Zweck nicht mehr erforderlich sind.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">6. Cookies</h2>
          <p className="mt-2">
            Diese Website verwendet nur technisch notwendige Cookies, die für den
            Betrieb erforderlich sind. Ein Einsatz von Analyse- oder
            Marketing-Cookies erfolgt nur nach deiner ausdrücklichen Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO). Du kannst Cookies in deinen
            Browsereinstellungen jederzeit verwalten oder löschen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">7. Schriftarten</h2>
          <p className="mt-2">
            Diese Website nutzt Schriftarten, die lokal vom eigenen Server
            ausgeliefert werden. Es findet dabei keine Verbindung zu Servern
            Dritter (z. B. Google) statt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">
            8. Deine Rechte als betroffene Person
          </h2>
          <p className="mt-2">
            Du hast jederzeit das Recht auf Auskunft (Art. 15 DSGVO),
            Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
            Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie ein
            Widerspruchsrecht (Art. 21). Außerdem steht dir ein Beschwerderecht
            bei einer Aufsichtsbehörde zu. Wende dich dazu an {siteConfig.email}.
          </p>
        </section>
      </div>
    </div>
  );
}

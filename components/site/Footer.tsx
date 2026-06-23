import Link from "next/link";
import { Instagram, Mail, Headphones, ArrowUpRight } from "lucide-react";
import { siteConfig, nav, whatsappLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="font-display text-xl font-bold text-white">
              FameGrowth<span className="text-brand-500">.</span>
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Die diskrete OnlyFans Agentur aus Deutschland. Wir managen, vermarkten
              und skalieren Creator-Accounts, datengetrieben und 100 % anonym.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-brand-400 hover:text-brand-400"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="E-Mail"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-brand-400 hover:text-brand-400"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-2.5 text-sm font-semibold text-brand-300 transition hover:bg-brand-500 hover:text-white"
            >
              <Headphones className="h-4 w-4" />
              Werde Chatter auf WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <nav aria-label="Footer Navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigation
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Kontakt & Recht
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition hover:text-white"
                >
                  WhatsApp Beratung
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/70 transition hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-white/70 transition hover:text-white"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-white/70 transition hover:text-white"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.legalName}. Alle Rechte vorbehalten.
          </p>
          <p>
            Kein Bezug zu OnlyFans / Fenix International Limited. OnlyFans ist eine
            Marke der jeweiligen Rechteinhaber.
          </p>
        </div>
      </div>
    </footer>
  );
}

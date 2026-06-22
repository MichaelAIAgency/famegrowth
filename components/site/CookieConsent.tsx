"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "fg-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const choose = (value: "all" | "necessary") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-4 bottom-4 z-[60] sm:left-5 sm:right-auto sm:max-w-sm"
    >
      <div className="rounded-2xl border border-white/10 bg-ink-800/95 p-5 shadow-soft backdrop-blur-xl">
        <p className="flex items-center gap-2 text-sm font-semibold text-white">
          <Cookie className="h-4 w-4 text-brand-400" />
          Cookies &amp; Datenschutz
        </p>
        <p className="mt-2 text-xs leading-relaxed text-white/60">
          Wir verwenden nur technisch notwendige Cookies, um die Website
          bereitzustellen. Optionale Cookies setzen wir ausschließlich mit deiner
          Einwilligung. Mehr dazu in unserer{" "}
          <Link href="/datenschutz" className="text-brand-300 underline">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="btn-ghost flex-1 px-3 py-2.5 text-xs"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="btn-primary flex-1 px-3 py-2.5 text-xs"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

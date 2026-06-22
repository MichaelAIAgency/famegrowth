"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Headphones } from "lucide-react";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Hauptnavigation"
        className="container flex h-16 items-center justify-between gap-6"
      >
        <Logo />

        <ul className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/[0.03] hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2.5 xl:flex">
          <Link href="/werde-chatter" className="btn-ghost text-sm">
            <Headphones className="h-4 w-4" />
            Werde Chatter
          </Link>
          <Link href="/#bewerbung" className="btn-primary text-sm">
            Jetzt bewerben
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white xl:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* mobile drawer */}
      {open && (
        <div className="xl:hidden">
          <div className="container flex flex-col gap-1 border-t border-white/10 bg-ink/95 pb-6 pt-3 backdrop-blur-xl">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:bg-white/[0.03]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/werde-chatter"
              onClick={() => setOpen(false)}
              className="btn-ghost mt-2"
            >
              <Headphones className="h-4 w-4" />
              Werde Chatter
            </Link>
            <Link
              href="/#bewerbung"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Jetzt bewerben
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

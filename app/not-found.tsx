import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] max-w-xl flex-col items-center justify-center py-32 text-center">
      <span className="font-display text-7xl font-bold text-brand-500/30">404</span>
      <h1 className="mt-4 text-3xl font-bold">Seite nicht gefunden</h1>
      <p className="mt-3 text-white/60">
        Diese Seite gibt es nicht (mehr). Zurück zur Startseite, dort wartet alles
        Wichtige auf dich.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Zur Startseite
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

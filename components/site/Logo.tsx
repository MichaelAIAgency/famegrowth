import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} Startseite`}
      className={`group inline-flex items-center ${className}`}
    >
      <span className="font-display text-xl font-bold tracking-tight text-white">
        FameGrowth<span className="text-brand-500">.</span>
      </span>
    </Link>
  );
}

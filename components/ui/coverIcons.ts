import {
  BookOpen,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Dumbbell,
  Rocket,
  Crown,
  Headphones,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export function blogIcon(category: string): LucideIcon {
  switch (category) {
    case "Sicherheit":
      return ShieldCheck;
    case "Wachstum":
      return TrendingUp;
    case "Ratgeber":
      return BookOpen;
    case "Karriere":
      return Headphones;
    case "Finanzen":
      return Wallet;
    default:
      return Sparkles;
  }
}

export function caseIcon(niche: string): LucideIcon {
  switch (niche) {
    case "Fitness & Coaching":
      return Dumbbell;
    case "Neustart":
      return Rocket;
    case "Skalierung":
      return Crown;
    case "Lifestyle":
      return Sparkles;
    default:
      return TrendingUp;
  }
}

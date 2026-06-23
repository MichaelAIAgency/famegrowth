import { ArrowUpRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function InlineCTA({ title, description }: { title?: string, description?: string }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 text-center shadow-card sm:p-12">
          <h3 className="text-2xl font-bold sm:text-3xl">
            {title || "Bereit für den nächsten Schritt?"}
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-white/60">
            {description || "Lass uns unverbindlich über dein Potenzial sprechen. Schreib uns direkt auf WhatsApp für eine erste Einschätzung."}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mx-auto mt-8 inline-flex items-center"
          >
            Auf WhatsApp schreiben
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

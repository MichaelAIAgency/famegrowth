"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { whatsappLink } from "@/lib/site";

/** Sticky WhatsApp launcher, bottom-right. Opens a direct chat with the owner. */
export function WhatsAppWidget() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setShowBubble(true), 3500);
    // auto-hide after a while so it never permanently blocks content (esp. mobile)
    const hide = setTimeout(() => setShowBubble(false), 11000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBubble && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-[240px] rounded-2xl rounded-br-sm bg-ink-800 p-4 pr-8 shadow-soft ring-1 ring-white/10"
          >
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Hinweis schließen"
              className="absolute right-2 top-2 text-white/30 transition hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-sm font-semibold text-white">
              Fragen zum Start? 💬
            </p>
            <p className="mt-1 text-xs leading-relaxed text-white/60">
              Schreib uns direkt auf WhatsApp, wir antworten meist in wenigen
              Minuten.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat auf WhatsApp starten"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-ink shadow-[0_12px_30px_-8px_rgba(10,10,10,0.55)] transition-transform hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500/40" />
        <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white" aria-hidden="true">
          <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.13 6.74 3.05 9.38L1.06 31.05l5.86-1.873A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.826 32 16S24.83 0 16.004 0Zm9.31 22.59c-.387 1.09-1.92 1.997-3.143 2.262-.836.178-1.928.32-5.604-1.204-4.703-1.948-7.73-6.728-7.965-7.038-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.205-3.425 1.632-3.894.353-.388.77-.563 1.04-.563.297 0 .55.003.79.014.252.012.59-.096.922.704.342.82 1.16 2.836 1.262 3.043.102.207.17.45.034.76-.13.31-.196.503-.387.773-.193.27-.405.603-.578.81-.193.227-.394.473-.17.86.226.387 1.005 1.66 2.16 2.69 1.485 1.323 2.738 1.733 3.126 1.927.387.193.612.16.836-.097.226-.258.965-1.127 1.222-1.514.252-.388.51-.323.86-.193.353.13 2.24 1.057 2.625 1.25.387.194.645.29.74.45.097.16.097.93-.29 2.02Z" />
        </svg>
      </a>
    </div>
  );
}

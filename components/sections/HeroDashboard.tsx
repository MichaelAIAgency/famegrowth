"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { TrendingUp, Bell, ArrowUpRight } from "lucide-react";

// --- chart geometry ---------------------------------------------------------
const W = 280;
const H = 96;
const DATA = [18, 30, 26, 45, 54, 70, 92];

const points = DATA.map((v, i) => {
  const x = (i / (DATA.length - 1)) * W;
  const y = H - (v / 100) * (H - 14) - 6;
  return [x, y] as const;
});

const linePath = points
  .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
  .join(" ");

const areaPath = `${linePath} L${W},${H} L0,${H} Z`;

// --- cycling notifications --------------------------------------------------
const NOTIFICATIONS = [
  { title: "Neuer Abonnent", amount: "+25 €", tone: "from-brand-400 to-brand-600" },
  { title: "Trinkgeld erhalten", amount: "+120 €", tone: "from-brand-500 to-brand-700" },
  { title: "PPV verkauft", amount: "+49 €", tone: "from-brand-300 to-brand-500" },
  { title: "Bundle gekauft", amount: "+89 €", tone: "from-brand-400 to-brand-600" },
];

const TARGET = 38420;

export function HeroDashboard() {
  const reduce = useReducedMotion();
  const [balance, setBalance] = useState(reduce ? TARGET : 0);
  const [notif, setNotif] = useState(0);

  // count up the balance on mount
  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / 1600, 1);
      const eased = 1 - Math.pow(2, -10 * t);
      setBalance(Math.round(TARGET * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  // cycle notifications
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setNotif((n) => (n + 1) % NOTIFICATIONS.length),
      2600,
    );
    return () => clearInterval(id);
  }, [reduce]);

  const active = NOTIFICATIONS[notif];

  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(239,11,80,0.35),transparent)] blur-2xl"
      />

      {/* floating growth badge */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.3 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -left-4 top-[46%] z-20 hidden rounded-2xl bg-white p-3 shadow-soft ring-1 ring-black/5 sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <TrendingUp className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wide text-ink/40">
              30-Tage-Wachstum
            </p>
            <p className="text-sm font-bold text-ink">+312 %</p>
          </div>
        </div>
      </motion.div>

      {/* floating payout card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.5 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -right-3 bottom-20 z-20 hidden rounded-2xl bg-white p-3 shadow-soft ring-1 ring-black/5 sm:block"
      >
        <p className="text-[10px] font-medium uppercase tracking-wide text-ink/40">
          Auszahlung heute
        </p>
        <p className="text-sm font-bold text-ink">1.284,00 €</p>
        <div className="mt-1 h-1.5 w-24 overflow-hidden rounded-full bg-ink/5">
          <motion.div
            className="h-full rounded-full bg-brand-500"
            initial={{ width: reduce ? "82%" : 0 }}
            animate={{ width: "82%" }}
            transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* phone */}
      <div className="relative rounded-[2.6rem] border border-white/10 bg-ink p-2.5 shadow-[0_40px_90px_-30px_rgba(7,13,11,0.7)]">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-ink-900">
          {/* dynamic island */}
          <div className="absolute left-1/2 top-3 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

          <div className="px-5 pb-6 pt-10 text-white">
            {/* header row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium text-white/40">
                  Umsatz diesen Monat
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold tabular-nums">
                    {balance.toLocaleString("de-DE")} €
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/15 px-2 py-1 text-[11px] font-semibold text-brand-300">
                <ArrowUpRight className="h-3 w-3" /> +24 %
              </span>
            </div>

            {/* area chart */}
            <div className="mt-5">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="h-24 w-full overflow-visible"
                role="img"
                aria-label="Umsatzentwicklung steigend"
              >
                <defs>
                  <linearGradient id="fg-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f54078" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#f54078" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={areaPath}
                  fill="url(#fg-area)"
                  initial={{ opacity: reduce ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />
                <motion.path
                  d={linePath}
                  fill="none"
                  stroke="#f54078"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.circle
                  cx={points[points.length - 1][0]}
                  cy={points[points.length - 1][1]}
                  r={4}
                  fill="#fff"
                  stroke="#f54078"
                  strokeWidth={2}
                  initial={{ scale: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
                />
              </svg>
            </div>

            {/* bars */}
            <div className="mt-5 flex items-end justify-between gap-1.5">
              {[40, 55, 48, 70, 62, 85, 100].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-full rounded-md bg-gradient-to-t from-brand-600/40 to-brand-400"
                  style={{ height: 56, transformOrigin: "bottom" }}
                  initial={{ scaleY: reduce ? h / 100 : 0 }}
                  animate={{ scaleY: h / 100 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + i * 0.07,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            <div className="mt-3 flex justify-between text-[9px] text-white/30">
              {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>

          {/* live notification inside the screen */}
          <div className="relative h-20 px-4 pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={notif}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${active.tone} text-white`}
                >
                  <Bell className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-white">
                    {active.title}
                  </p>
                  <p className="text-[10px] text-white/40">gerade eben</p>
                </div>
                <span className="text-sm font-bold text-brand-300">
                  {active.amount}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

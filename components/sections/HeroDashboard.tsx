"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Lock, ArrowLeft, ChevronDown, User, CheckCircle2 } from "lucide-react";

// --- chart geometry ---------------------------------------------------------
const W = 400;
const H = 120;
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
  { user: "User9482", action: "hat dein Profil abonniert", amount: "+ 24,99 €" },
  { user: "FanXYZ", action: "hat ein Trinkgeld gesendet", amount: "+ 100,00 €" },
  { user: "LoverBoy", action: "hat eine Nachricht gekauft", amount: "+ 49,00 €" },
  { user: "BigSpender", action: "hat ein Trinkgeld gesendet", amount: "+ 250,00 €" },
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
      3000,
    );
    return () => clearInterval(id);
  }, [reduce]);

  const active = NOTIFICATIONS[notif];

  return (
    <div className="relative mx-auto w-full max-w-[360px] font-sans">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(0,175,240,0.3),transparent)]"
      />

      {/* Floating OF Brand Tag */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute -right-4 -top-6 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-lg backdrop-blur-md sm:-right-8"
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00AFF0] text-white">
          <CheckCircle2 className="h-4 w-4" />
        </div>
        <span className="text-sm font-semibold text-white">OnlyFans Creator</span>
      </motion.div>

      {/* Browser frame */}
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white shadow-[0_20px_50px_-10px_rgba(0,175,240,0.2)]">
        
        {/* Browser Header (Mac style) */}
        <div className="flex items-center justify-between border-b border-[#e8e8e8] bg-[#f5f5f5] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="flex flex-1 justify-center px-4">
            <div className="flex w-full max-w-[240px] items-center justify-center gap-1.5 rounded-md border border-[#ddd] bg-white px-2 py-1 text-[11px] text-[#888]">
              <Lock className="h-3 w-3" />
              <span>onlyfans.com/dein-profil</span>
            </div>
          </div>
          <div className="w-[42px]" /> {/* Spacer for symmetry */}
        </div>

        {/* OF UI Content */}
        <div className="relative bg-[#f6f9fc]">
          
          {/* OF Header */}
          <div className="flex items-center justify-between bg-white px-4 pb-3 pt-4 shadow-sm">
            <div className="flex items-center gap-3">
              <ArrowLeft className="h-5 w-5 text-[#8A96A3]" />
              <span className="text-lg font-bold tracking-tight text-[#242529]">Kontoauszug</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[#e8e8e8] bg-[#f6f9fc] text-[#8A96A3]">
              <User className="h-4 w-4" />
            </div>
          </div>

          <div className="p-3 sm:p-4">
            {/* Date Range Selector */}
            <div className="flex w-max cursor-pointer items-center gap-1.5 rounded-full border border-[#e8e8e8] bg-white px-4 py-1.5 shadow-sm transition hover:bg-gray-50">
              <span className="text-xs font-semibold text-[#8A96A3]">Letzte 30 Tage</span>
              <ChevronDown className="h-3 w-3 text-[#8A96A3]" />
            </div>

            {/* Stat Boxes */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#e8e8e8] bg-white p-3.5 shadow-sm transition hover:shadow-md">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#8A96A3]">
                  Brutto
                </p>
                <p className="mt-0.5 text-xl font-black text-[#242529]">
                  {balance.toLocaleString("de-DE")} €
                </p>
              </div>
              <div className="rounded-2xl border border-[#e8e8e8] bg-white p-3.5 shadow-sm transition hover:shadow-md">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#8A96A3]">
                  Netto
                </p>
                <p className="mt-0.5 text-xl font-black text-[#00AFF0]">
                  {Math.round(balance * 0.8).toLocaleString("de-DE")} €
                </p>
              </div>
            </div>

            {/* Chart Box */}
            <div className="mt-3 rounded-2xl border border-[#e8e8e8] bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#242529]">Umsatz über die Zeit</p>
                <span className="text-[10px] font-semibold text-[#00AFF0]">+24%</span>
              </div>
              
              <div className="mt-4 h-24 w-full">
                <svg
                  viewBox={`0 0 ${W} ${H}`}
                  className="h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                  role="img"
                >
                  <defs>
                    <linearGradient id="of-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00AFF0" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#00AFF0" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d={areaPath}
                    fill="url(#of-area)"
                    initial={{ opacity: reduce ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  />
                  <motion.path
                    d={linePath}
                    fill="none"
                    stroke="#00AFF0"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: reduce ? 1 : 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
                  />
                  <motion.circle
                    cx={points[points.length - 1][0]}
                    cy={points[points.length - 1][1]}
                    r={5}
                    fill="#fff"
                    stroke="#00AFF0"
                    strokeWidth={2.5}
                    initial={{ scale: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
                  />
                </svg>
              </div>
              <div className="mt-3 flex justify-between px-1 text-[11px] font-semibold text-[#8A96A3]">
                <span>1. Okt</span>
                <span>15. Okt</span>
                <span>31. Okt</span>
              </div>
            </div>

            {/* Live Notifications */}
            <div className="mt-4">
              <p className="mb-3 px-1 text-xs font-bold text-[#242529]">Kürzliche Aktivitäten</p>
              <div className="relative h-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={notif}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute w-full flex items-center gap-3 rounded-2xl border border-[#e8e8e8] bg-white p-3 shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f6f9fc] text-[#8A96A3]">
                       <User className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-[#242529]">
                        {active.user}
                      </p>
                      <p className="truncate text-[10px] text-[#8A96A3]">{active.action}</p>
                    </div>
                    <span className="text-sm font-black text-[#00AFF0]">
                      {active.amount}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

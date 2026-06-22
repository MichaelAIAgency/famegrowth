"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const AVATARS = ["/1.png", "/2.png", "/3.png"];

export function CreatorAvatars() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(1);
  const [gen, setGen] = useState(0); // bumped to force remount on each loop

  useEffect(() => {
    if (reduce) return;

    if (count < 3) {
      // reveal next avatar after 700 ms
      const t = setTimeout(() => setCount((c) => c + 1), 700);
      return () => clearTimeout(t);
    } else {
      // all 3 visible — pause 3 s then restart the loop
      const t = setTimeout(() => {
        setGen((g) => g + 1); // remounts avatars so they reset to initial (x=40)
        setCount(1);
      }, 3000);
      return () => clearTimeout(t);
    }
  }, [count, reduce]);

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 backdrop-blur-sm">
      {/* avatar stack + badge — all in one -space-x-3 row */}
      <div key={gen} className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <motion.div
            key={i}
            initial={{ x: 36, opacity: 0 }}
            animate={{ x: i < count ? 0 : 36, opacity: i < count ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            style={{ zIndex: AVATARS.length - i }}
            className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-brand-500 ring-2 ring-ink"
          >
            <Image
              src={src}
              alt="Creator"
              fill
              sizes="36px"
              priority
              className="object-cover object-top"
            />
          </motion.div>
        ))}
        {/* badge sits as the 4th circle in the stack */}
        <div
          style={{ zIndex: 0 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-brand-500/50 bg-brand-500/20 text-[10px] font-bold text-brand-300 ring-2 ring-ink"
        >
          50+
        </div>
      </div>

      <p className="text-sm text-white/70">
        Für Creatorinnen,{" "}
        <span className="font-semibold text-white">die wachsen wollen</span>
      </p>
    </div>
  );
}

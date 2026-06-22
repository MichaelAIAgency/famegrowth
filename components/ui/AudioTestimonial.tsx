"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const pub = (filename: string) => `/${encodeURIComponent(filename)}`;

const fmt = (s: number) => {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

export function AudioTestimonial({
  file,
  author,
}: {
  file: string;
  author: string;
}) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onTime = () => setCurrent(el.currentTime);
    const onMeta = () => setDuration(el.duration);
    const onEnd = () => {
      setPlaying(false);
      setCurrent(0);
    };
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("ended", onEnd);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      void el.play();
      setPlaying(true);
    }
  };

  const pct = duration ? (current / duration) * 100 : 0;

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
      <audio ref={ref} src={pub(file)} preload="metadata" />

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause" : "Abspielen"}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white transition hover:bg-brand-400"
      >
        {playing ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Play className="ml-0.5 h-5 w-5" />
        )}
      </button>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-white">
            Stimme der Creatorin
          </p>
          <span className="shrink-0 text-xs tabular-nums text-white/40">
            {fmt(current)} / {fmt(duration)}
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-brand-500 transition-[width] duration-150"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-1.5 text-xs text-white/40">{author}</p>
      </div>
    </div>
  );
}

"use client";

import { useCallback, useMemo, useState, useSyncExternalStore } from "react";
import { CheckCircle, Circle, ArrowCounterClockwise } from "@phosphor-icons/react";
import roadmaps from "@/data/roadmaps.json";

type Key = "shopify" | "amazon";
const STORE = "bdh-roadmap-progress-v1";

// Tiny external store over localStorage so SSR and hydration stay consistent.
const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
};
const readRaw = () => {
  try {
    return localStorage.getItem(STORE) ?? "{}";
  } catch {
    return "{}";
  }
};
const writeRaw = (value: Record<string, boolean>) => {
  try {
    localStorage.setItem(STORE, JSON.stringify(value));
  } catch {}
  listeners.forEach((l) => l());
};

/** Full roadmaps with a tick-as-you-go tracker. Progress stays in this browser (localStorage). */
export function RoadmapTracker() {
  const [track, setTrack] = useState<Key>("shopify");
  const [open, setOpen] = useState<number>(0);

  const raw = useSyncExternalStore(subscribe, readRaw, () => "{}");
  const done = useMemo<Record<string, boolean>>(() => {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }, [raw]);
  const setDone = useCallback((fn: (d: Record<string, boolean>) => Record<string, boolean>) => writeRaw(fn(done)), [done]);

  const phases = roadmaps[track];
  const total = useMemo(() => phases.reduce((t, p) => t + p.steps.length, 0), [phases]);
  const count = useMemo(
    () => phases.reduce((t, p, pi) => t + p.steps.filter((_, si) => done[`${track}-${pi}-${si}`]).length, 0),
    [phases, done, track],
  );
  const pct = total ? Math.round((count / total) * 100) : 0;

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div role="tablist" aria-label="Choose a roadmap" className="inline-flex rounded-full border border-line bg-white p-1.5">
          {([["shopify", "Shopify"], ["amazon", "Amazon"]] as const).map(([k, l]) => (
            <button
              key={k}
              role="tab"
              type="button"
              aria-selected={track === k}
              onClick={() => { setTrack(k); setOpen(0); }}
              className={`min-h-11 rounded-full px-7 text-[0.95rem] font-semibold transition-colors ${track === k ? "bg-ink text-white" : "text-ink-2 hover:text-ink"}`}
            >
              {l}
            </button>
          ))}
        </div>
        <div className="w-full max-w-md">
          <div className="flex items-baseline justify-between">
            <p className="text-[0.9rem] font-semibold text-ink">Your progress</p>
            <p className="num-mono text-[0.9rem] text-ink-2">{count}/{total} steps · {pct}%</p>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper-2" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Roadmap progress">
            <div className="h-full rounded-full bg-green transition-[width] duration-500" style={{ width: `${pct}%` }} />
          </div>
          <button
            type="button"
            onClick={() => setDone((d) => Object.fromEntries(Object.entries(d).filter(([k]) => !k.startsWith(track + "-"))))}
            className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-[0.85rem] font-medium text-mute hover:text-ink"
          >
            <ArrowCounterClockwise size={15} aria-hidden="true" /> Reset this roadmap
          </button>
        </div>
      </div>

      <ol className="mt-10 border-t border-ink">
        {phases.map((p, pi) => {
          const n = p.steps.filter((_, si) => done[`${track}-${pi}-${si}`]).length;
          const isOpen = open === pi;
          return (
            <li key={`${track}-${p.n}`} className="border-b border-line">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`ph-${track}-${pi}`}
                  onClick={() => setOpen(isOpen ? -1 : pi)}
                  className="grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 py-6 text-left sm:grid-cols-[4.5rem_1fr_auto] sm:py-8"
                >
                  <span className="num-mono font-display text-[1.6rem] font-bold tracking-[-0.04em] text-green-deep sm:text-[2.4rem]">{String(p.n).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.025em] sm:text-[1.65rem]">{p.title}</span>
                    <span className="mt-1 block text-[0.9rem] text-mute">{p.subtitle} · {p.duration}</span>
                  </span>
                  <span className="num-mono rounded-full bg-mint px-3 py-1 text-[0.78rem] font-semibold text-green-ink">{n}/{p.steps.length}</span>
                </button>
              </h3>
              <div id={`ph-${track}-${pi}`} className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-expo)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className={`pb-10 sm:pl-[4.5rem] ${isOpen ? "" : "invisible"}`}>
                    <p className="mb-6 max-w-2xl rounded-2xl border border-green/35 bg-mint/60 px-5 py-4 text-[0.95rem] font-medium text-green-ink">Goal: {p.goal}</p>
                    <ul className="grid gap-3">
                      {p.steps.map((s, si) => {
                        const id = `${track}-${pi}-${si}`;
                        const on = !!done[id];
                        return (
                          <li key={id}>
                            <label htmlFor={id} className={`flex cursor-pointer gap-3.5 rounded-2xl border p-5 transition-colors ${on ? "border-green/50 bg-mint/50" : "border-line bg-white hover:border-ink/40"}`}>
                              <span className="relative -m-1.5 grid h-10 w-10 shrink-0 place-items-center text-green-deep">
                                <input id={id} type="checkbox" aria-label={s.title} className="peer absolute inset-0 h-10 w-10 cursor-pointer opacity-0" checked={on} onChange={() => setDone((d) => ({ ...d, [id]: !d[id] }))} />
                                <span className="grid place-items-center peer-focus-visible:rounded-full peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-green-deep" aria-hidden="true">
                                  {on ? <CheckCircle size={26} weight="fill" /> : <Circle size={26} className="text-mute" />}
                                </span>
                              </span>
                              <span className="min-w-0">
                                <span className="flex flex-wrap items-baseline gap-x-3">
                                  <span className={`font-display text-[1.1rem] font-semibold tracking-[-0.02em] ${on ? "text-ink/60 line-through decoration-green-deep/50" : ""}`}>{s.title}</span>
                                  <span className="num-mono text-[0.75rem] text-mute">{s.time}</span>
                                </span>
                                <span className="mt-2 block text-[0.95rem] leading-relaxed text-ink-2">{s.details}</span>
                              </span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

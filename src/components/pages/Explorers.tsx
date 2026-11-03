"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, SealCheck, MapPin, MagnifyingGlass } from "@phosphor-icons/react";
import { TOOLS, TOOL_CATEGORIES, VENDORS, VENDOR_CATEGORIES } from "@/data/content";

function Chips<T extends string>({ items, value, onChange, label }: { items: readonly T[]; value: T; onChange: (v: T) => void; label: string }) {
  return (
    <div role="group" aria-label={label} className="no-scrollbar -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
      {items.map((c) => (
        <button
          key={c}
          type="button"
          aria-pressed={value === c}
          onClick={() => onChange(c)}
          className={`min-h-11 shrink-0 rounded-full border px-5 text-[0.92rem] font-semibold transition-colors ${
            value === c ? "border-ink bg-ink text-white" : "border-line bg-white text-ink-2 hover:border-ink"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

export function ToolsExplorer() {
  const [cat, setCat] = useState<(typeof TOOL_CATEGORIES)[number]>("All");
  const list = useMemo(() => (cat === "All" ? TOOLS : TOOLS.filter((t) => t.category === cat)), [cat]);
  return (
    <div>
      <Chips items={TOOL_CATEGORIES} value={cat} onChange={setCat} label="Filter tools by category" />
      <p className="mt-6 text-[0.9rem] text-mute" aria-live="polite">
        Showing {list.length} {list.length === 1 ? "tool" : "tools"}
      </p>
      <ul className="mt-4 grid gap-x-10 border-t border-line sm:grid-cols-2">
        {list.map((t) => (
          <li key={t.name} className="border-b border-line">
            <a href={t.url} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-5 py-6">
              <span>
                <span className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-[1.35rem] font-semibold tracking-[-0.025em] text-ink group-hover:text-green-deep">{t.name}</span>
                  <span className={`num-mono rounded-full px-2.5 py-0.5 text-[0.7rem] ${t.free ? "bg-mint text-green-ink" : "bg-paper-2 text-ink-2"}`}>{t.free ? "FREE" : "PAID"}</span>
                </span>
                <span className="mt-1 block text-[0.8rem] font-semibold uppercase tracking-wider text-green-deep">{t.category}</span>
                <span className="mt-2 block max-w-[44ch] text-[0.95rem] text-ink-2">{t.description}</span>
              </span>
              <ArrowUpRight size={20} className="mt-1.5 shrink-0 text-mute transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green-deep" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function VendorsExplorer() {
  const [cat, setCat] = useState<(typeof VENDOR_CATEGORIES)[number]>("All");
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return VENDORS.filter((v) => (cat === "All" || v.category === cat) && (!s || (v.name + v.description + v.location).toLowerCase().includes(s)));
  }, [cat, q]);
  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-[1fr_20rem] lg:items-end">
        <Chips items={VENDOR_CATEGORIES} value={cat} onChange={setCat} label="Filter vendors by category" />
        <div className="field">
          <label htmlFor="vendor-search">Search vendors</label>
          <div className="relative">
            <MagnifyingGlass size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mute" aria-hidden="true" />
            <input id="vendor-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Name, city or service" className="input pl-11" />
          </div>
        </div>
      </div>
      <p className="mt-6 text-[0.9rem] text-mute" aria-live="polite">
        {list.length} {list.length === 1 ? "vendor" : "vendors"} found
      </p>
      {list.length === 0 ? (
        <div className="surface mt-4 p-10 text-center">
          <p className="font-display text-xl font-semibold">No vendor matches that search.</p>
          <p className="mt-2 text-ink-2">Try a different word, or clear the category filter.</p>
          <button type="button" className="btn btn-ink btn-noicon btn-sm mt-6" onClick={() => { setQ(""); setCat("All"); }}>
            Reset filters
          </button>
        </div>
      ) : (
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {list.map((v) => (
            <li key={v.name} className="grid gap-3 py-7 md:grid-cols-[1fr_1.4fr_9rem] md:items-start md:gap-10">
              <div>
                <h3 className="display-sm">{v.name}</h3>
                <p className="mt-1.5 text-[0.82rem] font-semibold uppercase tracking-wider text-green-deep">{v.category}</p>
              </div>
              <p className="text-[0.98rem] text-ink-2">{v.description}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.9rem] md:flex-col md:items-start">
                <span className="flex items-center gap-1.5 text-ink-2">
                  <MapPin size={16} aria-hidden="true" /> {v.location}
                </span>
                {v.verified && (
                  <span className="flex items-center gap-1.5 font-semibold text-green-deep">
                    <SealCheck size={18} weight="fill" aria-hidden="true" /> Verified
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

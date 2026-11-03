"use client";

import { useId, useState, type ReactNode } from "react";
import { Plus } from "@phosphor-icons/react";

export type AccordionItem = { id?: string; title: ReactNode; meta?: ReactNode; content: ReactNode };

/** Accessible single-open accordion with animated height (no layout shift on reflow). */
export function Accordion({ items, defaultOpen = 0, variant = "plain" }: { items: AccordionItem[]; defaultOpen?: number | null; variant?: "plain" | "boxed" }) {
  const uid = useId();
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={variant === "boxed" ? "grid gap-3" : "divide-y divide-line border-y border-line"}>
      {items.map((it, i) => {
        const isOpen = open === i;
        const btnId = `${uid}-b-${i}`;
        const panelId = `${uid}-p-${i}`;
        return (
          <div
            key={i}
            className={variant === "boxed" ? `surface overflow-hidden transition-colors ${isOpen ? "border-green-deep/40" : ""}` : ""}
          >
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-6 px-1 py-5 text-left sm:py-6 data-[boxed=true]:px-5 sm:data-[boxed=true]:px-7"
                data-boxed={variant === "boxed"}
              >
                <span className="min-w-0">
                  <span className="block font-display text-[1.15rem] font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-[1.3rem]">{it.title}</span>
                  {it.meta && <span className="mt-1.5 block text-[0.85rem] text-mute">{it.meta}</span>}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 ${
                    isOpen ? "rotate-45 border-green bg-green text-green-ink" : "bg-white text-ink"
                  }`}
                >
                  <Plus size={16} weight="bold" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-expo)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className={`pb-6 ${variant === "boxed" ? "px-5 sm:px-7" : "px-1"} ${isOpen ? "" : "invisible"}`}>{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

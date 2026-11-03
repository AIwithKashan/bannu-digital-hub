"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { BgVideo } from "@/components/ui/BgVideo";
import { Button } from "@/components/ui/Button";
import { TLink } from "@/components/ui/TLink";
import { DISCIPLINES } from "@/data/disciplines";

/**
 * Video-backed discipline rail. Native scroll-snap (touch friendly, no scroll
 * hijacking) with buttons, keyboard support and a progress indicator.
 */
export function DisciplinesRail() {
  const track = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);
    setEdge({ start: el.scrollLeft < 4, end: el.scrollLeft > max - 4 });
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = (card?.getBoundingClientRect().width ?? 360) + 24;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="relative isolate overflow-hidden py-[var(--section-y)]" aria-labelledby="disc-title">
      <BgVideo name="studio" position="center" sizes="100vw" />
      <div className="absolute inset-0 -z-0 bg-[linear-gradient(180deg,var(--color-paper)_0%,rgba(244,247,243,0.8)_16%,rgba(244,247,243,0.8)_84%,var(--color-paper)_100%)]" />

      <div className="wrap relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="disc-title" className="display-lg" data-split>
              Six disciplines, one community.
            </h2>
            <p className="lede mt-5" data-reveal>
              Pick a craft, find the people already working in it, and learn with real projects.
            </p>
          </div>
          <div className="flex items-center gap-3" data-reveal>
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={edge.start}
              aria-label="Previous discipline"
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/20 bg-white/85 text-ink backdrop-blur transition enabled:hover:bg-ink enabled:hover:text-white disabled:opacity-35"
            >
              <ArrowLeft size={18} weight="bold" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={edge.end}
              aria-label="Next discipline"
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/20 bg-white/85 text-ink backdrop-blur transition enabled:hover:bg-ink enabled:hover:text-white disabled:opacity-35"
            >
              <ArrowRight size={18} weight="bold" />
            </button>
            <Button href="/disciplines" variant="ink" small className="ml-2 hidden sm:inline-flex">
              All disciplines
            </Button>
          </div>
        </div>
      </div>

      <ul
        ref={track}
        onScroll={update}
        tabIndex={0}
        aria-label="Disciplines, scroll horizontally"
        className="no-scrollbar relative z-10 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[var(--gutter)] pb-4 sm:gap-6 lg:mt-16"
        style={{ scrollPaddingInline: "var(--gutter)" }}
      >
        {DISCIPLINES.map((d, i) => (
          <li key={d.slug} className="w-[min(82vw,22.5rem)] shrink-0 snap-start sm:w-[24rem]">
            <TLink
              href={`/disciplines/${d.slug}`}
              className="group surface flex h-full flex-col overflow-hidden bg-white/92 backdrop-blur-sm transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[0_40px_60px_-34px_rgba(10,28,19,0.4)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.alt}
                  fill
                  sizes="(max-width: 640px) 82vw, 384px"
                  quality={70}
                  className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
                />
                <span className="num-mono absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.78rem] font-medium text-ink backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="display-sm">{d.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{d.line}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Skills">
                  {d.skills.slice(0, 3).map((s) => (
                    <li key={s} className="rounded-full bg-mint px-3 py-1 text-[0.78rem] font-medium text-green-ink">
                      {s}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.92rem] font-semibold text-green-deep">
                  Explore
                  <ArrowUpRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </TLink>
          </li>
        ))}
        <li aria-hidden="true" className="w-1 shrink-0" />
      </ul>

      <div className="wrap relative z-10 mt-6">
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-ink/10" role="presentation">
          <div className="h-full origin-left rounded-full bg-green transition-transform duration-200" style={{ transform: `scaleX(${0.12 + progress * 0.88})` }} />
        </div>
      </div>
    </section>
  );
}

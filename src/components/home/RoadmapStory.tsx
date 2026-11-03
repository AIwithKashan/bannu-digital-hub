"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { useMotion } from "@/components/motion/MotionProvider";
import roadmaps from "@/data/roadmaps.json";

gsap.registerPlugin(ScrollTrigger);

const phases = roadmaps.shopify;
const totalSteps = phases.reduce((t, p) => t + p.steps.length, 0);

/**
 * Scroll-based storytelling. On large screens the section pins and scrolling
 * advances through the seven Shopify phases. Elsewhere (touch, small screens,
 * reduced motion) the same content is a simple accordion.
 */
export function RoadmapStory() {
  const pinRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  const motion = useMotion();

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      if (!pinRef.current) return;
      const st = ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: () => `+=${phases.length * 70}%`,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const i = Math.min(phases.length - 1, Math.floor(self.progress * phases.length));
          setActive((prev) => (prev === i ? prev : i));
        },
      });
      stRef.current = st;
      return () => {
        st.kill();
        stRef.current = null;
      };
    });
    return () => mm.revert();
  }, []);

  const goTo = (i: number) => {
    const st = stRef.current;
    if (st) {
      motion.scrollTo(st.start + ((i + 0.5) / phases.length) * (st.end - st.start) + 1);
    } else {
      setActive(i);
    }
  };

  const phase = phases[active];

  return (
    <section aria-label="Shopify roadmap" className="relative">
      {/* Desktop pinned story */}
      <div ref={pinRef} className="hidden min-h-[100dvh] items-center pt-[var(--header-h)] lg:flex">
        <div className="wrap grid w-full grid-cols-[0.78fr_1.22fr] items-center gap-20 py-12">
          <div>
            <p className="label" data-reveal="fade">
              Free Shopify roadmap
            </p>
            <h2 id="road-title" className="display-lg mt-4" data-split>
              From first niche to scaling, in seven phases.
            </h2>
            <p className="lede mt-5 text-[1.02rem]">
              {totalSteps} actionable steps written in Roman Urdu. The final phase targets Rs. 300,000+ a month in revenue as a goal, not a promise.
            </p>

            <ol className="relative mt-10 space-y-1 pl-7" aria-label="Roadmap phases">
              <span className="absolute bottom-3 left-[7px] top-3 w-px bg-line" aria-hidden="true" />
              <span
                className="absolute left-[7px] top-3 w-px origin-top bg-green-deep transition-transform duration-500 ease-[var(--ease-out-expo)]"
                style={{ height: "calc(100% - 1.5rem)", transform: `scaleY(${(active + 0.001) / (phases.length - 1)})` }}
                aria-hidden="true"
              />
              {phases.map((p, i) => (
                <li key={p.n} className="relative">
                  <span
                    className={`absolute -left-7 top-1/2 h-[15px] w-[15px] -translate-y-1/2 rounded-full border-2 bg-paper transition-all duration-500 ${
                      i <= active ? "border-green-deep bg-green" : "border-line"
                    }`}
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={i === active ? "step" : undefined}
                    className={`flex min-h-11 w-full items-center justify-between gap-3 py-1.5 text-left text-[1.02rem] font-medium transition-colors ${
                      i === active ? "text-ink" : "text-mute hover:text-ink"
                    }`}
                  >
                    <span>
                      <span className="num-mono mr-3 text-[0.8rem]">{String(p.n).padStart(2, "0")}</span>
                      {p.title}
                    </span>
                    <span className="num-mono text-[0.78rem] text-mute">{p.duration}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div key={active} className="phase-in relative">
            <div className="surface relative overflow-hidden p-10 xl:p-12">
              <span
                aria-hidden="true"
                className="num-mono pointer-events-none absolute -right-2 -top-8 font-display text-[clamp(9rem,15vw,15rem)] font-bold leading-none tracking-[-0.06em] text-mint-2/70"
              >
                {String(phase.n).padStart(2, "0")}
              </span>
              <div className="relative">
                <p className="inline-flex rounded-full bg-mint px-3 py-1 text-[0.78rem] font-semibold text-green-ink">{phase.duration}</p>
                <h3 className="display-md mt-5 max-w-[16ch]">{phase.title}</h3>
                <p className="mt-2 text-ink-2">{phase.subtitle}</p>
                <p className="mt-6 rounded-2xl border border-green/35 bg-mint/60 px-5 py-4 text-[0.95rem] font-medium text-green-ink">Goal: {phase.goal}</p>

                <ul className="mt-7 divide-y divide-line border-y border-line">
                  {phase.steps.map((s, i) => (
                    <li key={s.title} className="flex items-baseline justify-between gap-6 py-3.5">
                      <span className="flex gap-4 text-[0.98rem] text-ink">
                        <span className="num-mono text-[0.8rem] text-mute">{String(i + 1).padStart(2, "0")}</span>
                        {s.title}
                      </span>
                      <span className="num-mono shrink-0 text-[0.78rem] text-mute">{s.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/roadmaps" variant="ink" small>
                    Open the full roadmap
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile + tablet fallback */}
      <div className="section lg:hidden">
        <div className="wrap">
          <p className="label" data-reveal="fade">
            Free Shopify roadmap
          </p>
          <h2 className="display-lg mt-4" data-split>
            From first niche to scaling, in seven phases.
          </h2>
          <p className="lede mt-5">
            {totalSteps} actionable steps written in Roman Urdu. The final phase targets Rs. 300,000+ a month in revenue as a goal, not a promise.
          </p>
          <div className="mt-10" data-reveal>
            <Accordion
              defaultOpen={0}
              items={phases.map((p) => ({
                title: (
                  <>
                    <span className="num-mono mr-3 text-[0.85rem] text-green-deep">{String(p.n).padStart(2, "0")}</span>
                    {p.title}
                  </>
                ),
                meta: `${p.duration} · ${p.steps.length} steps`,
                content: (
                  <div>
                    <p className="rounded-2xl bg-mint/70 px-4 py-3 text-[0.92rem] font-medium text-green-ink">Goal: {p.goal}</p>
                    <ol className="mt-4 space-y-3">
                      {p.steps.map((s, i) => (
                        <li key={s.title} className="flex gap-3 text-[0.95rem] text-ink">
                          <span className="num-mono pt-0.5 text-[0.8rem] text-mute">{String(i + 1).padStart(2, "0")}</span>
                          <span>
                            {s.title}
                            <span className="num-mono ml-2 text-[0.75rem] text-mute">{s.time}</span>
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ),
              }))}
            />
          </div>
          <div className="mt-8">
            <Button href="/roadmaps" variant="ink">
              Open the full roadmap
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

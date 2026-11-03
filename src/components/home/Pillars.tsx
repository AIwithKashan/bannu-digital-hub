"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { TLink } from "@/components/ui/TLink";
import { PILLARS } from "@/data/content";

/**
 * Desktop: list on the left, sticky photo on the right that cross-fades with the
 * active pillar (hover, focus or tap). Mobile: an accordion where the photo sits
 * inside the open item, so no hover is ever required.
 */
export function Pillars() {
  const [active, setActive] = useState(0);

  return (
    <section className="section relative bg-paper-2" style={{ ["--battlement-color" as string]: "var(--color-paper-2)" }} aria-labelledby="pillars-title">
      <div className="battlement absolute inset-x-0 -top-[13px]" aria-hidden="true" />
      <div className="wrap">
        <div className="max-w-3xl">
          <h2 id="pillars-title" className="display-lg" data-split>
            What we do at Bannu Digital Hub
          </h2>
          <p className="lede mt-5" data-reveal>
            We provide the framework, peer mentorship and collaborative space to take digital talent from Bannu to national and international markets.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <ol className="border-t border-line" data-stagger="0.07">
            {PILLARS.map((p, i) => {
              const isActive = active === i;
              return (
                <li
                  key={p.key}
                  data-reveal-item
                  className="border-b border-line"
                  onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setActive(i)}
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`pillar-${p.key}`}
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group flex w-full items-baseline gap-4 py-5 text-left sm:gap-6 sm:py-6"
                  >
                    <span className={`num-mono w-8 shrink-0 text-[0.85rem] transition-colors ${isActive ? "text-green-deep" : "text-mute"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-[clamp(1.35rem,1rem+1.6vw,2.2rem)] font-semibold leading-tight tracking-[-0.03em] transition-colors duration-300 ${
                        isActive ? "text-ink" : "text-ink/55 group-hover:text-ink"
                      }`}
                    >
                      {p.title}
                    </span>
                  </button>

                  <div
                    id={`pillar-${p.key}`}
                    className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-expo)] ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <div className={`pb-7 pl-12 sm:pl-14 ${isActive ? "" : "invisible"}`}>
                        {/* Mobile photo lives inside the item */}
                        <div className="media-frame relative mb-5 aspect-[4/3] lg:hidden">
                          <Image src={p.image} alt={p.alt} width={800} height={600} sizes="(max-width: 1023px) 90vw, 400px" className="h-full w-full object-cover" quality={70} />
                        </div>
                        <p className="body-copy">{p.body}</p>
                        <TLink href={p.href} className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-semibold text-green-deep">
                          <span className="link-u">{p.cta}</span>
                          <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                        </TLink>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Desktop sticky stage */}
          <div className="relative hidden lg:block">
            <div className="sticky top-[calc(var(--header-h)+2rem)]">
              <div className="media-frame relative aspect-[4/5]" aria-hidden="true">
                {PILLARS.map((p, i) => (
                  <Image
                    key={p.key}
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 38vw, 400px"
                    quality={75}
                    className={`object-cover transition-[opacity,transform] duration-[900ms] ease-[var(--ease-out-expo)] ${
                      active === i ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


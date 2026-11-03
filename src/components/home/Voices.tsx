import { Button } from "@/components/ui/Button";
import { TESTIMONIALS } from "@/data/content";

/** Existing community stories from the current website, shown as large quotes (no cards). */
export function Voices() {
  return (
    <section className="section" aria-labelledby="voices-title">
      <div className="wrap">
        <h2 id="voices-title" className="display-lg max-w-3xl" data-split>
          In the community&apos;s words
        </h2>
        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-0" data-stagger="0.15">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.quote}
              data-reveal-item
              className={`flex flex-col justify-between gap-10 lg:min-h-[19rem] ${i === 0 ? "lg:border-r lg:border-line lg:pr-14" : "lg:pl-14"}`}
            >
              <blockquote className="font-display text-[clamp(1.45rem,1rem+1.5vw,2.25rem)] font-semibold leading-[1.18] tracking-[-0.03em] text-ink">
                <span aria-hidden="true" className="mr-1 text-green">
                  “
                </span>
                {t.quote}
                <span aria-hidden="true" className="ml-0.5 text-green">
                  ”
                </span>
              </blockquote>
              <figcaption className="text-[0.95rem]">
                <span className="block font-semibold text-ink">{t.who}</span>
                <span className="text-mute">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap gap-3" data-reveal>
          <Button href="/impact" variant="ink">
            See our impact
          </Button>
        </div>
      </div>
    </section>
  );
}

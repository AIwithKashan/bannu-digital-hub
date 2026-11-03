import { Button } from "@/components/ui/Button";
import { MANIFESTO, STATS } from "@/data/content";

export function Manifesto() {
  return (
    <section id="story" className="section">
      <div className="wrap">
        <p
          data-scrub-words
          className="max-w-[26ch] font-display text-[clamp(1.75rem,0.9rem+3.1vw,3.75rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-ink sm:max-w-[34ch] lg:max-w-[40ch]"
        >
          {MANIFESTO}
        </p>

        <div className="mt-14 flex flex-wrap items-center gap-4 sm:mt-16">
          <Button href="/about" variant="ink">
            Read our story
          </Button>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-t border-line lg:mt-24 lg:grid-cols-4" data-stagger="0.1">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              data-reveal-item
              className={`flex flex-col justify-between gap-6 border-line py-8 pr-4 sm:py-10 ${i % 2 === 0 ? "" : "pl-5 sm:pl-8"} ${
                i < 2 ? "border-b lg:border-b-0" : ""
              } ${i % 2 === 1 ? "border-l" : ""} lg:border-l lg:pl-8 ${i === 0 ? "lg:border-l-0 lg:pl-0" : ""}`}
            >
              <dd className="num-mono order-1 font-display text-[clamp(2.75rem,1.6rem+4.4vw,5.5rem)] font-bold leading-none tracking-[-0.05em] text-ink">
                <span data-counter data-to={s.value} data-suffix={s.suffix}>
                  {s.value}
                  {s.suffix}
                </span>
              </dd>
              <dt className="order-2 max-w-[20ch] text-[0.92rem] leading-snug text-mute">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

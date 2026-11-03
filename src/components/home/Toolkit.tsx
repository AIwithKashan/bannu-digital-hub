import { TLink } from "@/components/ui/TLink";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { TOOLS } from "@/data/content";

/** The only marquee on the site. It carries breadth (16 tools) that does not need individual attention. */
export function Toolkit() {
  const row = TOOLS.map((t) => (
    <li key={t.name} className="flex shrink-0 items-center gap-3 pr-10 sm:pr-14">
      <span className="font-display text-[clamp(1.75rem,1.1rem+2.4vw,3.25rem)] font-semibold tracking-[-0.035em] text-ink">{t.name}</span>
      <span className="num-mono rounded-full border border-line bg-white px-2.5 py-1 text-[0.7rem] text-mute">{t.free ? "FREE" : "PAID"}</span>
    </li>
  ));
  return (
    <section className="section-tight border-y border-line bg-white" aria-labelledby="toolkit-title">
      <div className="wrap mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 id="toolkit-title" className="display-md max-w-[22ch]" data-split>
            The toolkit the community already uses
          </h2>
        </div>
        <TLink href="/tools" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-green-deep">
          <span className="link-u">Browse all 16 tools</span>
          <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
        </TLink>
      </div>
      <div className="marquee overflow-hidden" role="group" aria-label="Community tools">
        <ul className="marquee-track" aria-hidden="false">
          {row}
          {/* duplicate set for the seamless loop, hidden from assistive tech */}
          <li aria-hidden="true" className="contents">
            <ul className="contents">{row}</ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

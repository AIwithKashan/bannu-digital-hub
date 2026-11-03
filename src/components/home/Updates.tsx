import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { TLink } from "@/components/ui/TLink";
import { NEWS } from "@/data/content";

const fmt = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });

export function Updates() {
  const news = [...NEWS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <section className="section" aria-labelledby="updates-title">
      <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
          <h2 id="updates-title" className="display-lg" data-split>
            Latest from the hub
          </h2>
          <div className="mt-10 rounded-[var(--radius-card)] bg-mint p-7 sm:p-9" data-reveal>
            <p className="num-mono text-[0.82rem] text-green-deep">20 Oct 2026 · Amir Marriage Hall, Bannu City</p>
            <p className="mt-5 font-display text-[clamp(4rem,2.4rem+7vw,8rem)] font-bold leading-[0.85] tracking-[-0.06em] text-ink">
              <span data-counter data-to="67" data-suffix="+">
                67+
              </span>
            </p>
            <p className="mt-4 max-w-[22ch] text-[1.05rem] leading-snug text-ink-2">members at our first community meetup.</p>
            <p className="mt-6 border-t border-green/30 pt-5 text-[0.92rem] text-ink-2">
              No upcoming event is announced right now. Join the WhatsApp community to hear first.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/events" variant="ink" small>
                See events
              </Button>
            </div>
          </div>
        </div>

        <ol className="border-t border-ink" data-stagger="0.1">
          {news.map((n) => (
            <li key={n.title} data-reveal-item className="border-b border-line">
              <TLink href={n.href} className="group grid gap-x-8 gap-y-3 py-7 sm:grid-cols-[8.5rem_1fr_auto] sm:items-start sm:py-9">
                <div className="flex items-center gap-3 sm:block">
                  <time dateTime={n.date} className="num-mono text-[0.82rem] text-mute">
                    {fmt(n.date)}
                  </time>
                  <span className="rounded-full bg-mint px-2.5 py-0.5 text-[0.75rem] font-semibold text-green-ink sm:mt-3 sm:inline-block">{n.tag}</span>
                </div>
                <div>
                  <h3 className="display-sm transition-colors group-hover:text-green-deep">{n.title}</h3>
                  <p className="mt-2 max-w-[52ch] text-[0.98rem] leading-relaxed text-ink-2">{n.body}</p>
                </div>
                <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 group-hover:border-green group-hover:bg-green sm:grid">
                  <ArrowUpRight size={18} weight="bold" className="transition-transform duration-500 group-hover:rotate-45" />
                </span>
              </TLink>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

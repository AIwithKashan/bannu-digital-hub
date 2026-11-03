import { pageMeta } from "@/lib/seo";
import { HeroTint } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import constitution from "@/data/constitution.json";

export const metadata = pageMeta({
  title: "Constitution and Policies",
  description: "The official Bannu Digital Hub constitution, policies, rules and code of conduct: 25 sections, version 1.0, effective 20 October 2026.",
  path: "/policy",
});

type Block = { t: string; x: string; n?: string };
type Clause = { n: number; title: string; tag: string; blocks: Block[] };
const clauses = constitution as Clause[];

const renderBlocks = (blocks: Block[]) => {
  const out: React.ReactNode[] = [];
  let list: Block[] = [];
  const flush = (k: number) => {
    if (list.length) {
      out.push(
        <ol key={`l${k}`} className="my-4 space-y-3">
          {list.map((b, i) => (
            <li key={i} className="flex gap-4">
              <span className="num-mono grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mint text-[0.78rem] font-semibold text-green-ink">{i + 1}</span>
              <span className="pt-0.5">{b.x}</span>
            </li>
          ))}
        </ol>,
      );
      list = [];
    }
  };
  blocks.forEach((b, i) => {
    if (b.t === "li") return void list.push(b);
    flush(i);
    if (b.t === "sub") out.push(<h3 key={i} className="mt-8 font-display text-[1.15rem] font-semibold tracking-[-0.02em]"><span className="num-mono mr-2 text-[0.85rem] text-green-deep">{b.n}</span>{b.x}</h3>);
    else out.push(<p key={i} className="mt-4">{b.x}</p>);
  });
  flush(999);
  return out;
};

export default function PolicyPage() {
  return (
    <>
      <HeroTint
        crumbs={[{ name: "About", href: "/about" }, { name: "Constitution", href: "/policy" }]}
        eyebrow="Version 1.0 · Effective 20 October 2026"
        title={
          <>
            Constitution, policies and <span className="italic-accent">code of conduct.</span>
          </>
        }
        lede="The founding rules of Bannu Digital Hub. A non-profit community initiative built on shared knowledge and equal opportunity for digital talent."
      />

      <section className="section-tight">
        <div className="wrap grid gap-12 lg:grid-cols-[17rem_1fr] lg:gap-20">
          <nav aria-label="Constitution sections" className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:max-h-[calc(100dvh-var(--header-h)-4rem)] lg:self-start lg:overflow-y-auto">
            <details className="group rounded-2xl border border-line bg-white p-5 lg:border-0 lg:bg-transparent lg:p-0" open>
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between font-display text-lg font-semibold lg:pointer-events-none">
                Table of contents <span className="num-mono text-[0.8rem] text-mute">25 sections</span>
              </summary>
              <ol className="mt-3 space-y-0.5 text-[0.92rem]">
                {clauses.map((c) => (
                  <li key={c.n}>
                    <a href={`#section-${c.n}`} className="flex min-h-10 items-center gap-3 py-1.5 text-ink-2 transition-colors hover:text-green-deep">
                      <span className="num-mono w-6 shrink-0 text-mute">{String(c.n).padStart(2, "0")}</span>
                      {c.title}
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          </nav>

          <div className="min-w-0 max-w-3xl wrap-anywhere">
            {clauses.map((c) => (
              <article key={c.n} id={`section-${c.n}`} className="scroll-mt-[calc(var(--header-h)+1rem)] border-t border-line py-10 text-[1.02rem] leading-relaxed text-ink-2 first:border-t-0 first:pt-0">
                <header className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="num-mono font-display text-[1.6rem] font-bold tracking-[-0.04em] text-green-deep">{String(c.n).padStart(2, "0")}</span>
                  <h2 className="display-md text-ink">{c.title}</h2>
                  <span className="rounded-full bg-paper-2 px-3 py-0.5 text-[0.75rem] font-semibold text-ink-2">{c.tag}</span>
                </header>
                <div>{renderBlocks(c.blocks)}</div>
              </article>
            ))}
            <p className="mt-6 rounded-2xl border border-line bg-white p-6 text-[0.92rem] text-ink-2">
              Document ID BDH-CONST-2026, version 1.0, 20 October 2026. This is the official founding policy document of Bannu Digital Hub. All members, attendees, organizers and volunteers agree to abide by these provisions.
            </p>
          </div>
        </div>
      </section>
      <CtaBand title="Questions about the rules?" body="The organizers are happy to explain any section." image="/media/img/mentorship.webp" primary={{ label: "Contact organizers", href: "/contact" }} secondary={{ label: "About the hub", href: "/about" }} />
    </>
  );
}

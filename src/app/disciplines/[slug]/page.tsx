import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { HeroSplit } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { TLink } from "@/components/ui/TLink";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { DISCIPLINES, getDiscipline } from "@/data/disciplines";

type Params = { slug: string };

export function generateStaticParams() {
  return DISCIPLINES.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const d = getDiscipline((await params).slug);
  if (!d) return {};
  return pageMeta({ title: d.title, description: d.summary, path: `/disciplines/${d.slug}` });
}

export default async function DisciplinePage({ params }: { params: Promise<Params> }) {
  const d = getDiscipline((await params).slug);
  if (!d) notFound();
  const idx = DISCIPLINES.findIndex((x) => x.slug === d.slug);
  const next = DISCIPLINES[(idx + 1) % DISCIPLINES.length];

  return (
    <>
      <HeroSplit
        crumbs={[
          { name: "Disciplines", href: "/disciplines" },
          { name: d.title, href: `/disciplines/${d.slug}` },
        ]}
        title={d.title}
        lede={d.summary}
        image={d.image}
        alt={d.alt}
        actions={
          <>
            <Button href="/join">Join the community</Button>
            <Button href="/members" variant="ghost">
              Find talent
            </Button>
          </>
        }
      />

      <section className="section-tight">
        <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <h2 className="display-md" data-split>
              Skills in this discipline
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2" data-stagger="0.06">
              {d.skills.map((s) => (
                <li key={s} data-reveal-item className="rounded-full bg-mint px-5 py-2.5 font-semibold text-green-ink">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display-md" data-split>
              What you can do here
            </h2>
            <ol className="mt-8 divide-y divide-line border-y border-line" data-stagger="0.1">
              {d.outcomes.map((o, i) => (
                <li key={o} data-reveal-item className="flex gap-6 py-6">
                  <span className="num-mono pt-1 text-[0.85rem] text-green-deep">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[1.1rem] leading-snug text-ink">{o}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display-md" data-split>
            Start with these resources
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3" data-stagger="0.1">
            {d.related.map((r) => (
              <li key={r.label} data-reveal-item>
                <TLink href={r.href} className="surface group flex h-full flex-col justify-between gap-10 p-7 transition-colors hover:border-green-deep">
                  <p className="display-sm">{r.label}</p>
                  <p className="flex items-end justify-between gap-4 text-[0.95rem] text-ink-2">
                    {r.note}
                    <ArrowUpRight size={20} weight="bold" className="shrink-0 text-green-deep transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </p>
                </TLink>
              </li>
            ))}
          </ul>
          <p className="mt-10 rounded-2xl bg-paper-2 px-6 py-5 text-[0.95rem] text-ink-2" data-reveal>
            A detailed curriculum for this discipline is still being prepared. Mentors and project guides will be added as the community confirms them.
          </p>
        </div>
      </section>

      <section className="section-tight border-t border-line">
        <div className="wrap">
          <TLink href={`/disciplines/${next.slug}`} className="group flex items-center justify-between gap-6">
            <span>
              <span className="label">Next discipline</span>
              <span className="display-lg mt-2 block transition-colors group-hover:text-green-deep">{next.title}</span>
            </span>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 group-hover:border-green group-hover:bg-green">
              <ArrowUpRight size={22} weight="bold" aria-hidden="true" />
            </span>
          </TLink>
        </div>
      </section>

      <CtaBand title="Learn it with people who do it." image="/media/img/workshop-training.webp" />
    </>
  );
}

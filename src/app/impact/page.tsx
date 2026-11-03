import { pageMeta } from "@/lib/seo";
import { HeroTint } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { STATS, TESTIMONIALS } from "@/data/content";

export const metadata = pageMeta({
  title: "Our Impact",
  description: "Real numbers and community stories from Bannu Digital Hub: 67+ members at the first meetup, 16+ supporting brands and six learning disciplines.",
  path: "/impact",
});

export default function ImpactPage() {
  return (
    <>
      <HeroTint
        crumbs={[{ name: "Impact", href: "/impact" }]}
        title={
          <>
            Real impact, <span className="italic-accent">real people.</span>
          </>
        }
        lede="The numbers and stories that show what Bannu Digital Hub is changing. We only list what has actually happened."
      />
      <section className="section">
        <div className="wrap">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] bg-line lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-paper p-7 sm:p-10">
                <dd className="num-mono font-display text-[clamp(3rem,1.8vw+2rem,6rem)] font-bold leading-none tracking-[-0.05em]">
                  <span data-counter data-to={s.value} data-suffix={s.suffix} data-pad={s.value < 10 ? 2 : 0}>
                    {s.value}
                    {s.suffix}
                  </span>
                </dd>
                <dt className="mt-4 text-[0.92rem] text-mute">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-tight bg-paper-2">
        <div className="wrap">
          <h2 className="display-lg" data-split>
            Community stories
          </h2>
          <div className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.quote} data-reveal className="border-t border-ink pt-8">
                <blockquote className="font-display text-[clamp(1.35rem,1rem+1.2vw,2rem)] font-semibold leading-[1.2] tracking-[-0.028em]">“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-[0.95rem]">
                  <span className="block font-semibold">{t.who}</span>
                  <span className="text-mute">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-14" data-reveal>
            <p className="lede">Has Bannu Digital Hub made a difference for you? Tell the organizers and we may share your story.</p>
            <div className="mt-6">
              <Button href="/contact" variant="ink">
                Share your story
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CtaBand title="Be the next story." image="/media/img/team-laugh.webp" />
    </>
  );
}

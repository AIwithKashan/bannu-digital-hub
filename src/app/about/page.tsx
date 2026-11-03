import { pageMeta } from "@/lib/seo";
import { HeroStack } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { Ridgeline } from "@/components/ui/Ridgeline";
import { GOALS, STATS, VALUES } from "@/data/content";
import { SITE } from "@/data/site";

export const metadata = pageMeta({
  title: "About Us",
  description:
    "Bannu Digital Hub is an independent grassroots community founded by Ali Qureshi to connect and empower freelancers, developers, designers and students across Bannu, Khyber Pakhtunkhwa.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <HeroStack
        crumbs={[{ name: "About", href: "/about" }]}
        title={
          <>
            Building Bannu&apos;s tech and <span className="italic-accent">freelance</span> ecosystem.
          </>
        }
        lede="A community-driven movement founded by local digital practitioners to foster learning, professional connection and economic empowerment through technology."
        image="/media/img/fort-mountains.webp"
        alt="A historic fort with crenellated walls on a hill in Khyber Pakhtunkhwa, with rugged mountains behind"
        position="center 40%"
      />

      {/* Mission and vision: oversized statements, no cards */}
      <section className="section">
        <div className="wrap grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div data-reveal>
            <p className="label">Our mission</p>
            <p className="mt-5 font-display text-[clamp(1.5rem,1rem+1.8vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
              Connect and empower the digital talent of Bannu through opportunities for learning, networking, collaboration and professional growth in global digital markets.
            </p>
          </div>
          <div data-reveal data-delay="0.12">
            <p className="label">Our vision</p>
            <p className="mt-5 font-display text-[clamp(1.5rem,1rem+1.8vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-green-deep">
              A strong local digital ecosystem where talent can develop, businesses can access digital skills, and professionals can collaborate on meaningful projects.
            </p>
          </div>
        </div>
      </section>

      {/* Story: scroll-scrubbed text with portrait photo */}
      <section className="section bg-paper-2 relative" style={{ ["--battlement-color" as string]: "var(--color-paper-2)" }}>
        <div className="battlement absolute inset-x-0 -top-[13px]" aria-hidden="true" />
        <div className="wrap grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <h2 className="display-lg" data-split>
              Our story
            </h2>
            <Photo
              src="/media/img/mentorship.webp"
              alt="Two colleagues collaborating at a laptop in a sunlit shared office"
              ratio="aspect-[4/3] lg:aspect-[4/5]"
              className="mt-10"
              reveal
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
          </div>
          <div className="space-y-8">
            <p data-scrub-words className="font-display text-[clamp(1.35rem,1rem+1.4vw,2.1rem)] font-semibold leading-[1.22] tracking-[-0.028em]">
              Bannu has a deep pool of ambitious youth, university graduates and self-taught freelancers. Yet for years, digital practitioners in Bannu worked in isolation, handling international client payments, account verification, mentorship and market trends alone.
            </p>
            <p className="body-copy text-[1.05rem]" data-reveal>
              Recognizing this gap, a dedicated cohort of local freelancers, developers and creators convened to build a single platform. Founded by <strong>{SITE.founder}</strong>, Bannu Digital Hub was born as an independent, grassroots community initiative that brings everyone under one umbrella.
            </p>
            <p className="body-copy text-[1.05rem]" data-reveal>
              By organizing regular meetups, sharing practical guides and celebrating members&apos; milestones, the community is working to make Bannu a centre of digital innovation in Khyber Pakhtunkhwa.
            </p>
            <aside className="rounded-2xl border border-green/40 bg-white p-6" data-reveal>
              <p className="font-semibold text-ink">Status notice</p>
              <p className="mt-2 text-[0.95rem] text-ink-2">
                Bannu Digital Hub is an independent community initiative organized by local practitioners. It does not claim official government affiliation or formal NGO registration.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Values: numbered list on a ridgeline */}
      <section className="section relative overflow-hidden">
        <Ridgeline className="pointer-events-none absolute inset-x-0 top-6 h-40 w-full text-green/45" />
        <div className="wrap relative">
          <h2 className="display-lg max-w-3xl" data-split>
            What we stand for
          </h2>
          <ol className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2" data-stagger="0.1">
            {VALUES.map((v, i) => (
              <li key={v.title} data-reveal-item className="border-t border-ink pt-6">
                <span className="num-mono text-[0.85rem] text-green-deep">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-md mt-3">{v.title}</h3>
                <p className="body-copy mt-3">{v.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Goals + proof */}
      <section className="section bg-ink text-white" style={{ ["--battlement-color" as string]: "var(--color-ink)" }}>
        <div className="wrap grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <h2 className="display-lg" data-split>
              Where we are headed
            </h2>
            <dl className="mt-12 grid grid-cols-2 gap-8">
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <dd className="num-mono font-display text-[clamp(2.5rem,1.6rem+3vw,4.25rem)] font-bold leading-none tracking-[-0.05em] text-green">
                    <span data-counter data-to={s.value} data-suffix={s.suffix}>{s.value}{s.suffix}</span>
                  </dd>
                  <dt className="mt-2 text-[0.88rem] text-white/70">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
          <ol className="divide-y divide-white/15 border-y border-white/15" data-stagger="0.1">
            {GOALS.map((g, i) => (
              <li key={g} data-reveal-item className="flex gap-6 py-6">
                <span className="num-mono pt-1 text-[0.85rem] text-green">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-display text-[clamp(1.15rem,1rem+0.7vw,1.5rem)] font-medium leading-snug tracking-[-0.02em] text-white">{g}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership: honest empty state */}
      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <h2 className="display-lg" data-split>
              Community leadership
            </h2>
            <p className="lede mt-5" data-reveal>
              Senior developers, freelancers and designers volunteer their time to guide the hub.
            </p>
          </div>
          <div className="surface-mint p-8 sm:p-10" data-reveal>
            <p className="font-display text-xl font-semibold tracking-[-0.02em]">Profiles coming soon</p>
            <p className="mt-3 text-ink-2">
              Volunteer organizers and mentors are still finalizing working groups. Profiles will appear here as appointments are confirmed. The founder is {SITE.founder}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/policy" variant="ink" small>
                Read the constitution
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to help build it?"
        body="Join as a member, mentor, volunteer or supporter. The community grows through the people who show up."
        image="/media/img/meetup-hall.webp"
      />
    </>
  );
}

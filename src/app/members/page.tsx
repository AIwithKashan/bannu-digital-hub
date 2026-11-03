import { pageMeta } from "@/lib/seo";
import { HeroSplit } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { MEMBER_DISCIPLINES } from "@/data/content";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";

export const metadata = pageMeta({
  title: "Talent Directory",
  description: "A directory of freelancers, developers, designers and digital specialists from Bannu, Khyber Pakhtunkhwa. Get listed or hire local talent.",
  path: "/members",
});

export default function MembersPage() {
  return (
    <>
      <HeroSplit
        crumbs={[{ name: "Talent directory", href: "/members" }]}
        title={
          <>
            Bannu&apos;s digital <span className="italic-accent">talent,</span> in one place.
          </>
        }
        lede="Profiles of software engineers, Shopify specialists, marketers and designers from Bannu."
        image="/media/img/talent-directory.webp"
        alt="A laptop on a bright desk showing a grid of abstract profile cards"
        actions={
          <>
            <Button href="/join">Get listed</Button>
            <Button href="/contact" variant="ghost">
              Hire talent
            </Button>
          </>
        }
      />

      <section className="section-tight">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <h2 className="display-lg" data-split>
              The directory is opening.
            </h2>
            <p className="body-copy mt-6 text-[1.05rem]" data-reveal>
              No public profiles are published yet. Members apply to be listed, and organizers review portfolios before adding a verified badge. Community profiles are self-submitted.
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-mint p-5" data-reveal>
              <SealCheck size={24} weight="fill" className="mt-0.5 shrink-0 text-green-deep" aria-hidden="true" />
              <p className="text-[0.95rem] text-green-ink">
                A verified badge means the organizers have checked identity and portfolio. Self-submitted profiles are shown without it.
              </p>
            </div>
          </div>
          <div data-reveal data-delay="0.1">
            <h3 className="label">Directory disciplines</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {MEMBER_DISCIPLINES.map((d) => (
                <li key={d} className="rounded-full border border-line bg-white px-4 py-2 text-[0.92rem] font-medium text-ink">
                  {d}
                </li>
              ))}
            </ul>
            <ol className="mt-10 divide-y divide-line border-y border-line">
              {["Join the community", "Submit your profile and portfolio", "Organizers review and add a verified badge"].map((s, i) => (
                <li key={s} className="flex gap-5 py-4">
                  <span className="num-mono text-[0.85rem] text-green-deep">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-ink">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBand title="Showcase your skills." body="Get in front of clients and collaborators looking for talent in Bannu." image="/media/img/desk-freelancer.webp" primary={{ label: "Join the community", href: "/join" }} secondary={{ label: "Ask about listing", href: "/contact" }} />
    </>
  );
}

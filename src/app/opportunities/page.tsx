import { pageMeta } from "@/lib/seo";
import { HeroTint } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { OPPORTUNITY_TYPES } from "@/data/content";
import { SITE } from "@/data/site";

export const metadata = pageMeta({
  title: "Opportunities Board",
  description: "Hand-verified remote jobs, freelance contracts, internships and training for talent in Bannu. See what the board covers and how to hear first.",
  path: "/opportunities",
});

export default function OpportunitiesPage() {
  return (
    <>
      <HeroTint
        crumbs={[{ name: "Opportunities", href: "/opportunities" }]}
        title={
          <>
            Curated leads and <span className="italic-accent">openings.</span>
          </>
        }
        lede="Hand-verified remote roles, freelance contracts, internships and training programs for talent in Bannu."
      />
      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <h2 className="display-lg" data-split>
              Six kinds of openings
            </h2>
            <ol className="mt-10 divide-y divide-line border-y border-ink" data-stagger="0.07">
              {OPPORTUNITY_TYPES.map((t, i) => (
                <li key={t} data-reveal-item className="flex gap-6 py-5">
                  <span className="num-mono pt-1 text-[0.85rem] text-green-deep">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[1.35rem] font-semibold tracking-[-0.02em]">{t}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="surface-mint self-start p-8 sm:p-12" data-reveal>
            <p className="font-display text-[clamp(1.5rem,1rem+1.4vw,2.2rem)] font-semibold leading-tight tracking-[-0.03em]">There are no active opportunities posted today.</p>
            <p className="body-copy mt-4 text-[1.05rem]">Leads are shared in the WhatsApp community as soon as they are verified. If you have an opening to share, send it to the organizers.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={SITE.links.whatsapp}>Hear first on WhatsApp</Button>
              <Button href="/contact" variant="ghost">
                Post an opening
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CtaBand title="Build a profile clients can trust." image="/media/img/hands-typing.webp" primary={{ label: "Get listed", href: "/members" }} secondary={{ label: "Join the community", href: "/join" }} />
    </>
  );
}

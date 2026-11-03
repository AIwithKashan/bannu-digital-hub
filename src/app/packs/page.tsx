import { pageMeta } from "@/lib/seo";
import { HeroTint } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { PACKS } from "@/data/content";

export const metadata = pageMeta({
  title: "Free Resource Packs",
  description: "Templates, checklists and starter kits for freelancers and creators: Freelancer Starter Pack, Canva design templates and a Reels editing pack.",
  path: "/packs",
});

export default function PacksPage() {
  return (
    <>
      <HeroTint
        crumbs={[{ name: "Resources", href: "/resources" }, { name: "Packs", href: "/packs" }]}
        title={
          <>
            Download and start <span className="italic-accent">today.</span>
          </>
        }
        lede="Templates, checklists and starter kits made for the community."
      />
      <section className="section">
        <div className="wrap">
          <ol className="divide-y divide-line border-y border-ink" data-stagger="0.1">
            {PACKS.map((p, i) => (
              <li key={p.title} data-reveal-item className="grid gap-6 py-10 md:grid-cols-[4rem_1.2fr_1fr_auto] md:items-center md:gap-10">
                <span className="num-mono font-display text-[2rem] font-bold tracking-[-0.04em] text-green-deep">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="display-md">{p.title}</h2>
                  <p className="body-copy mt-2">{p.desc}</p>
                </div>
                <p className="num-mono text-[0.9rem] text-ink-2">{p.items}</p>
                <Button href={p.locked ? "/join" : "/contact"} variant={p.locked ? "ink" : "primary"} small>
                  {p.locked ? "Register to download" : "Request this pack"}
                </Button>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-[0.92rem] text-mute">
            Downloads are shared by the organizers on request while the file library is being finalized. Message us and we will send the pack.
          </p>
        </div>
      </section>
      <CtaBand title="Want a pack that is not here?" body="Tell us what would save you time and we will make it for the community." image="/media/img/design-tablet.webp" primary={{ label: "Request a pack", href: "/contact" }} />
    </>
  );
}

import { pageMeta } from "@/lib/seo";
import { HeroSplit } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/data/content";

export const metadata = pageMeta({
  title: "Projects",
  description: "Community projects from Bannu Digital Hub: the community website, the October 2026 meetup, the female community group and the Shopify A-to-Z roadmap.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <HeroSplit
        crumbs={[{ name: "Projects", href: "/projects" }]}
        title={
          <>
            What we&apos;re <span className="italic-accent">building.</span>
          </>
        }
        lede="Some projects are live, some are in progress. Anyone in the community can take part."
        image="/media/img/dashboard-desk.webp"
        alt="A woman working at a desk with a laptop showing dashboards"
        position="30% center"
      />

      <section className="section-tight">
        <div className="wrap space-y-24 lg:space-y-32">
          {PROJECTS.map((p, i) => (
            <article key={p.title} className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${i % 2 ? "" : ""}`}>
              <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                <Photo src={p.image} alt={p.alt} ratio="aspect-[4/3] lg:aspect-[16/11]" reveal parallax={0.06} sizes="(min-width: 1024px) 56vw, 100vw" />
              </div>
              <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`} data-reveal>
                <div className="flex items-center gap-3">
                  <span className="num-mono text-[0.85rem] text-green-deep">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`rounded-full px-3 py-1 text-[0.78rem] font-semibold ${p.status === "Live" ? "bg-green text-green-ink" : "bg-paper-2 text-ink-2"}`}>{p.status}</span>
                </div>
                <h2 className="display-md mt-4">{p.title}</h2>
                <p className="body-copy mt-4 text-[1.05rem]">{p.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Topics">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-[0.8rem] text-ink-2">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button href={p.href} variant="ink" small>
                    Learn more
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Have a project idea?" body="Build it with the community. We will help find collaborators and support it where we can." image="/media/img/collab-laptop.webp" primary={{ label: "Propose a project", href: "/contact" }} secondary={{ label: "Join the community", href: "/join" }} />
    </>
  );
}

import { pageMeta } from "@/lib/seo";
import { HeroTint } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Photo } from "@/components/ui/Photo";
import { TLink } from "@/components/ui/TLink";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { DISCIPLINES } from "@/data/disciplines";

export const metadata = pageMeta({
  title: "Disciplines",
  description:
    "Six digital disciplines at Bannu Digital Hub: web and mobile development, Shopify and e-commerce, UI/UX and graphic design, performance marketing, video editing and AI productivity tools.",
  path: "/disciplines",
});

export default function DisciplinesIndex() {
  return (
    <>
      <HeroTint
        crumbs={[{ name: "Disciplines", href: "/disciplines" }]}
        title={
          <>
            Six crafts. One <span className="italic-accent">community.</span>
          </>
        }
        lede="Choose a discipline to see what it covers, which skills it builds, and where to start inside the hub."
      />

      <section className="section">
        <div className="wrap">
          <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-12">
            {DISCIPLINES.map((d, i) => (
              <li key={d.slug} className={i % 2 === 1 ? "md:mt-24" : ""} data-reveal>
                <TLink href={`/disciplines/${d.slug}`} className="group block">
                  <Photo src={d.image} alt={d.alt} ratio="aspect-[4/3]" sizes="(min-width: 768px) 46vw, 100vw" className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:-translate-y-1" />
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="num-mono text-[0.82rem] text-green-deep">{String(i + 1).padStart(2, "0")}</p>
                      <h2 className="display-md mt-1.5">{d.title}</h2>
                      <p className="mt-2 max-w-[42ch] text-ink-2">{d.line}</p>
                    </div>
                    <span className="mt-6 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 group-hover:border-green group-hover:bg-green">
                      <ArrowUpRight size={20} weight="bold" className="transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                    </span>
                  </div>
                </TLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Not sure where to start?" body="Tell us what you want to learn or earn from, and the community will point you to the right people and roadmap." image="/media/img/desk-freelancer.webp" primary={{ label: "Join the community", href: "/join" }} />
    </>
  );
}

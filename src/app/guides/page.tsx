import { pageMeta } from "@/lib/seo";
import { HeroSplit } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Accordion } from "@/components/ui/Accordion";
import { GUIDES } from "@/data/content";

export const metadata = pageMeta({
  title: "Guides",
  description: "Practical guides from the Bannu Digital Hub community: your first Upwork client, Fiverr gig ranking, Payoneer setup, COD e-commerce and client communication.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <HeroSplit
        crumbs={[{ name: "Resources", href: "/resources" }, { name: "Guides", href: "/guides" }]}
        title={
          <>
            Learn from real <span className="italic-accent">experience.</span>
          </>
        }
        lede="Step-by-step guides the community has tested in practice: freelancing, payments and e-commerce."
        image="/media/img/notes-phone.webp"
        alt="A person from behind using a phone and notebook at a table"
      />
      <section className="section-tight">
        <div className="wrap max-w-4xl">
          <Accordion
            variant="boxed"
            defaultOpen={0}
            items={GUIDES.map((g) => ({
              title: g.title,
              meta: (
                <>
                  <span className="mr-3 rounded-full bg-mint px-2.5 py-0.5 text-[0.75rem] font-semibold text-green-ink">{g.category}</span>
                  {g.time}
                </>
              ),
              content: (
                <div>
                  <p className="body-copy">{g.intro}</p>
                  <ol className="mt-6 space-y-4">
                    {g.steps.map((s, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="num-mono grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-[0.78rem] font-semibold text-white">{i + 1}</span>
                        <p className="pt-0.5 text-[1rem] leading-relaxed text-ink">{s}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              ),
            }))}
          />
        </div>
      </section>
      <CtaBand title="Need a guide that is missing?" body="Ask in the community. We will answer, or turn the answer into a guide." image="/media/img/collab-tablet.webp" primary={{ label: "Join the community", href: "/join" }} />
    </>
  );
}

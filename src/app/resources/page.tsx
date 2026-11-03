import { pageMeta } from "@/lib/seo";
import { HeroSplit } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { TLink } from "@/components/ui/TLink";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { GUIDES, PACKS, TOOLS, VENDORS } from "@/data/content";
import roadmaps from "@/data/roadmaps.json";

export const metadata = pageMeta({
  title: "Learning Resources",
  description: "Free roadmaps, guides, tools, resource packs and trusted vendors for freelancers and e-commerce sellers in Bannu and Pakistan.",
  path: "/resources",
});

const items = [
  { href: "/roadmaps", title: "Roadmaps", note: `Shopify (${roadmaps.shopify.length} phases) and Amazon (${roadmaps.amazon.length} phases), with a progress tracker`, big: true },
  { href: "/guides", title: "Guides", note: `${GUIDES.length} practical guides on Upwork, Fiverr, payments and COD` },
  { href: "/tools", title: "Tools", note: `${TOOLS.length} community-tested tools` },
  { href: "/packs", title: "Resource packs", note: `${PACKS.length} downloadable packs` },
  { href: "/vendors", title: "Vendors", note: `${VENDORS.length} printing, courier and sourcing vendors` },
];

export default function ResourcesPage() {
  return (
    <>
      <HeroSplit
        crumbs={[{ name: "Resources", href: "/resources" }]}
        title={
          <>
            Learn from what already <span className="italic-accent">worked.</span>
          </>
        }
        lede="Practical material from the community, written for how work really happens in Pakistan: COD, wallets, Payoneer and WhatsApp."
        image="/media/img/hands-typing.webp"
        alt="Hands typing on a laptop keyboard"
      />
      <section className="section-tight">
        <div className="wrap grid gap-4 md:grid-cols-6" data-stagger="0.08">
          {items.map((it, i) => (
            <TLink
              key={it.href}
              href={it.href}
              data-reveal-item
              className={`group relative flex min-h-[15rem] flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border p-7 transition-colors ${
                i === 0 ? "md:col-span-4 md:row-span-2 border-transparent bg-green text-green-ink" : i === 1 ? "md:col-span-2 border-line bg-mint" : "md:col-span-2 border-line bg-white hover:border-ink"
              } ${i >= 3 ? "md:col-span-3" : ""}`}
            >
              <span className="num-mono text-[0.85rem] opacity-70">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className={i === 0 ? "display-lg" : "display-md"}>{it.title}</h2>
                <p className={`mt-3 max-w-[38ch] ${i === 0 ? "text-green-ink/80" : "text-ink-2"}`}>{it.note}</p>
              </div>
              <ArrowUpRight size={26} weight="bold" className="absolute right-6 top-6 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
            </TLink>
          ))}
        </div>
      </section>
      <CtaBand title="Need something that is not here?" body="Ask the community. If enough people need it, we will write the guide or build the pack." image="/media/img/notes-phone.webp" primary={{ label: "Join the community", href: "/join" }} />
    </>
  );
}

import { pageMeta } from "@/lib/seo";
import { HeroTint } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { RoadmapTracker } from "@/components/pages/RoadmapTracker";

export const metadata = pageMeta({
  title: "Shopify and Amazon Roadmaps",
  description: "Step-by-step Shopify and Amazon roadmaps in Roman Urdu: seven phases each, realistic timelines, and a progress tracker saved in your browser.",
  path: "/roadmaps",
});

export default function RoadmapsPage() {
  return (
    <>
      <HeroTint
        crumbs={[{ name: "Resources", href: "/resources" }, { name: "Roadmaps", href: "/roadmaps" }]}
        title={
          <>
            Seven phases. <span className="italic-accent">One step</span> at a time.
          </>
        }
        lede="Roman Urdu roadmaps for Shopify and Amazon. Tick each step as you finish it. Income figures are goals the community aims for, not guarantees."
      />
      <section className="section">
        <div className="wrap">
          <RoadmapTracker />
        </div>
      </section>
      <CtaBand title="Follow the roadmap, but do not walk alone." body="Ask questions, share progress and learn from other sellers in the community." image="/media/img/ecommerce-packing.webp" primary={{ label: "Join the community", href: "/join" }} />
    </>
  );
}

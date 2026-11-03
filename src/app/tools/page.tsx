import { pageMeta } from "@/lib/seo";
import { HeroTint } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { ToolsExplorer } from "@/components/pages/Explorers";

export const metadata = pageMeta({
  title: "Tools for Freelancers and Sellers",
  description: "Sixteen community-tested tools for design, video, AI, marketing, payments, web and e-commerce. Most are free.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <>
      <HeroTint
        crumbs={[{ name: "Resources", href: "/resources" }, { name: "Tools", href: "/tools" }]}
        title={
          <>
            Tools that get <span className="italic-accent">work done.</span>
          </>
        }
        lede="Design, video editing, AI, marketing, payments and web tools the community uses. Most are free."
      />
      <section className="section">
        <div className="wrap">
          <ToolsExplorer />
        </div>
      </section>
      <CtaBand title="Using a tool we missed?" body="Tell the community. The best tips become part of this list." image="/media/img/design-tablet.webp" primary={{ label: "Contact us", href: "/contact" }} secondary={{ label: "Join the community", href: "/join" }} />
    </>
  );
}

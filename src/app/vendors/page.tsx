import { pageMeta } from "@/lib/seo";
import { HeroSplit } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { VendorsExplorer } from "@/components/pages/Explorers";

export const metadata = pageMeta({
  title: "Trusted Vendors Directory",
  description: "Community-verified printing, courier and product sourcing vendors for Bannu's digital sellers and creators.",
  path: "/vendors",
});

export default function VendorsPage() {
  return (
    <>
      <HeroSplit
        crumbs={[{ name: "Resources", href: "/resources" }, { name: "Vendors", href: "/vendors" }]}
        title={
          <>
            Trusted <span className="italic-accent">suppliers</span> and service providers.
          </>
        }
        lede="Printing, courier and product sourcing, recommended by people who have used them."
        image="/media/img/local-business.webp"
        alt="A shop owner in a Pakistani bazaar using a tablet beside stacked shelves"
      />
      <section className="section-tight">
        <div className="wrap">
          <VendorsExplorer />
        </div>
      </section>
      <CtaBand title="Are you a vendor?" body="Get listed in the directory and reach Bannu's digital community." image="/media/img/ecommerce-packing.webp" primary={{ label: "Apply for listing", href: "/contact" }} secondary={{ label: "Advertise with us", href: "/advertise" }} />
    </>
  );
}

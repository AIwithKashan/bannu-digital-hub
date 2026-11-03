import { pageMeta } from "@/lib/seo";
import { HeroSplit } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { AD_TIERS, MEMBER_DEALS } from "@/data/content";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

export const metadata = pageMeta({
  title: "Advertise and Partner",
  description: "Reach Bannu's digital audience through community posts, brand partnerships and event sponsorship. Rates start at Rs. 1,000 per post.",
  path: "/advertise",
});

export default function AdvertisePage() {
  return (
    <>
      <HeroSplit
        crumbs={[{ name: "Advertise", href: "/advertise" }]}
        title={
          <>
            Reach Bannu&apos;s digital <span className="italic-accent">audience.</span>
          </>
        }
        lede="Bring your brand to the community through the website, the feed and live events."
        image="/media/img/marketing-analytics.webp"
        alt="A clean desk with a laptop and phone showing abstract growth charts"
      />

      <section className="section-tight">
        <div className="wrap">
          <ul className="grid items-stretch gap-4 lg:grid-cols-3" data-stagger="0.1">
            {AD_TIERS.map((t) => (
              <li key={t.name} data-reveal-item className={`relative flex flex-col rounded-[var(--radius-card)] border p-8 ${t.featured ? "border-transparent bg-ink text-white" : "border-line bg-white"}`}>
                {t.featured && <span className="absolute right-6 top-6 rounded-full bg-green px-3 py-1 text-[0.72rem] font-bold text-green-ink">MOST POPULAR</span>}
                <h2 className="display-sm">{t.name}</h2>
                <p className="mt-6 font-display text-[clamp(2.4rem,1.6rem+2vw,3.5rem)] font-bold leading-none tracking-[-0.04em]">{t.price}</p>
                <p className={`mt-1 text-[0.9rem] ${t.featured ? "text-white/65" : "text-mute"}`}>{t.unit}</p>
                <ul className="mt-8 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[0.98rem]">
                      <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-green" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <Button href="/contact" variant={t.featured ? "primary" : "ink"} small>
                    Get started
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.9rem] text-mute">Prices are set for the community. Contact us for custom packages.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display-lg" data-split>
            Member-exclusive deals
          </h2>
          <ul className="mt-12 divide-y divide-line border-y border-ink">
            {MEMBER_DEALS.map((d) => (
              <li key={d.title} data-reveal className="grid gap-5 py-9 md:grid-cols-[1fr_1.5fr_auto] md:items-center md:gap-12">
                <div>
                  <p className="label">{d.brand}</p>
                  <h3 className="display-sm mt-2">{d.title}</h3>
                </div>
                <div>
                  <p className="body-copy">{d.desc}</p>
                  <p className="num-mono mt-2 text-[0.8rem] text-mute">{d.valid}</p>
                </div>
                <Button href={d.href} variant="ghost" small>
                  Claim offer
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Put your brand in front of Bannu." image="/media/img/meeting-top.webp" primary={{ label: "Talk to us", href: "/contact" }} secondary={{ label: "See our impact", href: "/impact" }} />
    </>
  );
}

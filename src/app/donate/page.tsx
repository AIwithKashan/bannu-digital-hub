import { pageMeta } from "@/lib/seo";
import { HeroSplit } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/data/site";

export const metadata = pageMeta({
  title: "Donate",
  description: "Keep Bannu Digital Hub meetups free. Donations pay for halls, sound systems, refreshments, student workshops and community tools.",
  path: "/donate",
});

const uses = [
  { t: "Free meetups", b: "Hall, sound system and refreshments for every event." },
  { t: "Student workshops", b: "Free training sessions and learning material." },
  { t: "Community growth", b: "Website, tools and outreach that help the community grow." },
];

export default function DonatePage() {
  return (
    <>
      <HeroSplit
        crumbs={[{ name: "Donate", href: "/donate" }]}
        title={
          <>
            Keep meetups free, <span className="italic-accent">forever.</span>
          </>
        }
        lede="Every rupee goes to free events, workshops and learning opportunities for Bannu's youth."
        image="/media/img/meetup-hall.webp"
        alt="Attendees in a bright hall at a community meetup"
        position="40% center"
      />

      <section className="section-tight">
        <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <h2 className="display-lg" data-split>
              Where it goes
            </h2>
            <ol className="mt-10 divide-y divide-line border-y border-ink" data-stagger="0.1">
              {uses.map((u, i) => (
                <li key={u.t} data-reveal-item className="flex gap-6 py-6">
                  <span className="num-mono pt-1 text-[0.85rem] text-green-deep">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="display-sm">{u.t}</h3>
                    <p className="body-copy mt-1">{u.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="surface self-start p-8 sm:p-12" data-reveal>
            <h2 className="display-md">Donate by Easypaisa</h2>
            <p className="body-copy mt-3">The easiest way. After you transfer, send the screenshot on WhatsApp so it can be added to the community accounts.</p>
            <dl className="mt-8 grid gap-6 rounded-2xl bg-mint p-6 sm:grid-cols-2">
              <div>
                <dt className="label">Easypaisa account</dt>
                <dd className="num-mono mt-2 break-all font-display text-[clamp(1.5rem,1.1rem+1.2vw,2rem)] font-bold tracking-[-0.02em]">{SITE.donation.easypaisaNumber}</dd>
              </div>
              <div>
                <dt className="label">Account title</dt>
                <dd className="mt-2 font-display text-[clamp(1.25rem,1rem+1vw,1.75rem)] font-semibold tracking-[-0.02em]">{SITE.donation.accountTitle}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`https://wa.me/${SITE.phoneTel.replace("+", "")}?text=${encodeURIComponent("Assalam o Alaikum, I donated to Bannu Digital Hub. Screenshot attached.")}`}>Send screenshot</Button>
              <Button href="/contact" variant="ghost">
                Ask for bank details
              </Button>
            </div>
            <div className="mt-10 border-t border-line pt-8">
              <h3 className="display-sm">100% transparent</h3>
              <p className="body-copy mt-2">
                Every donation and expense is recorded in the community fund. BDH is a community initiative: donations are never one person&apos;s profit. They are for everyone&apos;s benefit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand title="Can't donate? You can still help." body="Share the community, mentor a beginner or volunteer at the next meetup." image="/media/img/team-laugh.webp" primary={{ label: "Join the community", href: "/join" }} />
    </>
  );
}

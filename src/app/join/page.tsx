import { pageMeta } from "@/lib/seo";
import { HeroSplit } from "@/components/ui/PageHero";
import { HandoffForm } from "@/components/pages/HandoffForm";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/data/site";

export const metadata = pageMeta({
  title: "Join the Community",
  description: "Join Bannu Digital Hub for free: connect with mentors, get listed in the talent directory, attend meetups and find client work in Bannu, Khyber Pakhtunkhwa.",
  path: "/join",
});

const perks = ["Connect with mentors and peers", "Get listed in the talent directory", "Attend free meetups and workshops", "Hear about leads and opportunities first"];

export default function JoinPage() {
  return (
    <>
      <HeroSplit
        crumbs={[{ name: "Join", href: "/join" }]}
        title={
          <>
            Connect with Bannu&apos;s tech <span className="italic-accent">community.</span>
          </>
        }
        lede="Free to join. Say hello on WhatsApp right now, or send an introduction to the organizers."
        image="/media/img/team-laugh.webp"
        alt="A group of colleagues laughing together around a laptop"
        actions={<Button href={SITE.links.whatsapp}>Join on WhatsApp</Button>}
      />
      <section className="section-tight">
        <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <h2 className="display-md" data-split>
              What you get
            </h2>
            <ul className="mt-8 divide-y divide-line border-y border-ink" data-stagger="0.08">
              {perks.map((p, i) => (
                <li key={p} data-reveal-item className="flex gap-5 py-5">
                  <span className="num-mono pt-0.5 text-[0.85rem] text-green-deep">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[1.08rem] text-ink">{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-2xl bg-mint p-5 text-[0.92rem] text-green-ink">
              Membership does not guarantee a salary, client or income. BDH helps you become capable of earning for yourself. See the <a href="/policy" className="inline-block py-0.5 font-semibold underline">community constitution</a>.
            </p>
          </div>
          <div className="surface p-7 sm:p-10" data-reveal>
            <h2 className="display-md">Introduce yourself</h2>
            <div className="mt-6">
              <HandoffForm
                subject="Join Bannu Digital Hub"
                cta="Send"
                fields={[
                  { name: "name", label: "Full name", required: true, autoComplete: "name" },
                  { name: "email", label: "Email address", type: "email", required: true, autoComplete: "email" },
                  { name: "phone", label: "Phone or WhatsApp", type: "tel", autoComplete: "tel" },
                  { name: "skill", label: "Your main skill or interest", required: true, help: "For example: web development, Shopify, graphic design, video editing." },
                  { name: "goal", label: "What do you want from the community?", textarea: true },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

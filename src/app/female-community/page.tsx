import { pageMeta } from "@/lib/seo";
import { HeroSplit } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/data/site";

export const metadata = pageMeta({
  title: "Women's Community",
  description: "A women-only WhatsApp community for women in Bannu learning freelancing, digital skills and online earning, with mentorship and support.",
  path: "/female-community",
});

const points = [
  { t: "A safe and supportive space", b: "Ask questions freely, share wins and learn without hesitation." },
  { t: "Learn digital skills", b: "Guidance on freelancing, online earning, design, content creation and other remote skills, from zero to income." },
  { t: "Grow together", b: "Connect with other women from Bannu and Southern KP who are building digital careers." },
  { t: "Mentorship and support", b: "Get help from experienced members on clients, payments, portfolios and staying consistent." },
];

export default function FemalePage() {
  return (
    <>
      <HeroSplit
        crumbs={[{ name: "Women's community", href: "/female-community" }]}
        title={
          <>
            Learn, earn and grow <span className="italic-accent">together.</span>
          </>
        }
        lede="A dedicated WhatsApp community for the women of Bannu learning freelancing, digital skills and online earning."
        image="/media/img/women-learning.webp"
        alt="Women's hands typing on a laptop and taking notes in a bright study space"
        actions={<Button href={SITE.links.whatsappWomen}>Join on WhatsApp</Button>}
      />
      <section className="section-tight">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
            <h2 className="display-lg" data-split>
              Why women join
            </h2>
            <Photo src="/media/img/collab-tablet.webp" alt="Colleagues at a table working on a laptop and tablet" ratio="aspect-[4/3]" className="mt-10 hidden lg:block" reveal sizes="40vw" />
          </div>
          <ol className="lg:col-span-7 divide-y divide-line border-y border-ink" data-stagger="0.1">
            {points.map((p, i) => (
              <li key={p.t} data-reveal-item className="grid gap-4 py-9 sm:grid-cols-[4rem_1fr]">
                <span className="num-mono font-display text-[2rem] font-bold tracking-[-0.04em] text-green-deep">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="display-sm">{p.t}</h3>
                  <p className="body-copy mt-2 text-[1.02rem]">{p.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand title="Ready to start your digital journey?" body="Join the women's WhatsApp group and introduce yourself. The community is waiting to welcome you." image="/media/img/women-learning.webp" primary={{ label: "Join the group", href: SITE.links.whatsappWomen }} secondary={{ label: "Ask a question", href: "/contact" }} />
    </>
  );
}

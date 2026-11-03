import { pageMeta } from "@/lib/seo";
import { HeroStack } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/data/site";

export const metadata = pageMeta({
  title: "Events and Meetups",
  description: "Hands-on workshops, freelancing meetups and code masterclasses in Bannu. See what happened at the first community meetup in October 2026.",
  path: "/events",
});

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Bannu Digital Hub Community Meetup",
  startDate: "2026-10-20",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: { "@type": "Place", name: "Amir Marriage Hall", address: { "@type": "PostalAddress", addressLocality: "Bannu City", addressRegion: "Khyber Pakhtunkhwa", addressCountry: "PK" } },
  description: "First community meetup with sessions on freelancing, e-commerce and networking. 67+ members attended.",
  organizer: { "@type": "Organization", name: SITE.name, url: SITE.url },
};

export default function EventsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <HeroStack
        crumbs={[{ name: "Events", href: "/events" }]}
        title={
          <>
            Meetups, workshops and <span className="italic-accent">masterclasses.</span>
          </>
        }
        lede="Practical, hands-on learning, freelancing meetups and tech sessions held in Bannu. Community events are free."
        image="/media/img/meetup-hall.webp"
        alt="Attendees seated in a bright hall facing a presentation screen"
        position="center 55%"
      />

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <h2 className="display-lg" data-split>
              Upcoming
            </h2>
          </div>
          <div className="surface-mint p-8 sm:p-12" data-reveal>
            <p className="font-display text-[clamp(1.5rem,1rem+1.6vw,2.4rem)] font-semibold leading-tight tracking-[-0.03em]">No event is announced right now.</p>
            <p className="body-copy mt-4 text-[1.05rem]">
              New dates are shared first in the WhatsApp community. Join to get them as soon as they are confirmed.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={SITE.links.whatsapp}>Join the WhatsApp community</Button>
              <Button href="/advertise" variant="ghost">
                Sponsor an event
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ink text-white" style={{ ["--battlement-color" as string]: "var(--color-ink)" }}>
        <div className="wrap">
          <h2 className="display-lg max-w-3xl" data-split>
            Past session
          </h2>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <Photo src="/media/img/workshop-training.webp" alt="A training room with attendees working on laptops" ratio="aspect-[4/3]" reveal sizes="(min-width: 1024px) 52vw, 100vw" />
            <div data-reveal>
              <p className="num-mono text-[0.85rem] text-green">20 October 2026</p>
              <h3 className="display-md mt-3 text-white">Bannu Digital Hub community meetup</h3>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-white/75">
                The first big community event, held at Amir Marriage Hall, Bannu City. Sessions covered freelancing, e-commerce and networking.
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
                {[
                  ["67+", "members attended"],
                  ["16+", "supporting brands"],
                  ["96", "event cards printed locally"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dd className="num-mono font-display text-[clamp(1.8rem,1.2rem+2vw,3rem)] font-bold leading-none tracking-[-0.04em] text-green">{v}</dd>
                    <dt className="mt-2 text-[0.82rem] text-white/65">{l}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <p className="mt-12 text-[0.9rem] text-white/60">Event photos are shared on the community&apos;s social channels.</p>
        </div>
      </section>

      <CtaBand title="Never miss the next meetup." image="/media/img/team-laugh.webp" primary={{ label: "Join the community", href: "/join" }} secondary={{ label: "Contact organizers", href: "/contact" }} />
    </>
  );
}

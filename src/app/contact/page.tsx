import { pageMeta } from "@/lib/seo";
import { HeroTint } from "@/components/ui/PageHero";
import { HandoffForm } from "@/components/pages/HandoffForm";
import { SITE, SOCIALS } from "@/data/site";
import { EnvelopeSimple, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export const metadata = pageMeta({
  title: "Contact Us",
  description: "Visit Bannu Digital Hub at Asmatullah Plaza, Railway Road, Bannu City, or reach the team by WhatsApp, phone or email.",
  path: "/contact",
});

const a = SITE.address;
const mapQ = encodeURIComponent(`${a.lat},${a.lng}`);

export default function ContactPage() {
  return (
    <>
      <HeroTint
        crumbs={[{ name: "Contact", href: "/contact" }]}
        title={
          <>
            Get in touch with the <span className="italic-accent">hub.</span>
          </>
        }
        lede="Questions about events, interested in speaking, or want to collaborate with local talent? Messages go straight to the organizer team."
      />

      <section className="section-tight">
        <div className="wrap grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="surface p-7 sm:p-10" data-reveal>
            <h2 className="display-md">Send a message</h2>
            <div className="mt-6">
              <HandoffForm
                subject="Message to Bannu Digital Hub"
                cta="Send"
                fields={[
                  { name: "name", label: "Your full name", required: true, autoComplete: "name" },
                  { name: "email", label: "Email address", type: "email", required: true, autoComplete: "email" },
                  { name: "phone", label: "Phone or WhatsApp", type: "tel", autoComplete: "tel" },
                  { name: "subject", label: "Subject", required: true },
                  { name: "message", label: "Your message", required: true, textarea: true },
                ]}
              />
            </div>
          </div>

          <div data-reveal data-delay="0.1">
            <h2 className="display-md">Hub contacts</h2>
            <ul className="mt-8 divide-y divide-line border-y border-ink">
              <li className="flex gap-4 py-6">
                <MapPin size={24} weight="duotone" className="mt-1 shrink-0 text-green-deep" aria-hidden="true" />
                <div>
                  <p className="label">Physical hub</p>
                  <address className="mt-2 not-italic text-[1.05rem] text-ink">
                    {a.street}
                    <br />
                    {a.locality}, {a.region} {a.postal}
                    <br />
                    {a.country}
                  </address>
                  <a className="link-u mt-3 inline-flex min-h-11 items-center font-semibold text-green-deep" href={`https://www.google.com/maps/search/?api=1&query=${mapQ}`} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </li>
              <li className="flex gap-4 py-6">
                <EnvelopeSimple size={24} weight="duotone" className="mt-1 shrink-0 text-green-deep" aria-hidden="true" />
                <div>
                  <p className="label">Official email</p>
                  <a className="link-u mt-2 inline-block break-all text-[1.05rem]" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </li>
              <li className="flex gap-4 py-6">
                <Phone size={24} weight="duotone" className="mt-1 shrink-0 text-green-deep" aria-hidden="true" />
                <div>
                  <p className="label">Direct phone</p>
                  <a className="link-u mt-2 inline-block text-[1.05rem]" href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>
                </div>
              </li>
              <li className="flex gap-4 py-6">
                <WhatsappLogo size={24} weight="duotone" className="mt-1 shrink-0 text-green-deep" aria-hidden="true" />
                <div>
                  <p className="label">Official community links</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {[...SOCIALS, { key: "wa-women", label: "Women's community", href: SITE.links.whatsappWomen }].map((s) => (
                      <li key={s.key}>
                        <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 text-[0.9rem] font-medium transition-colors hover:border-ink">
                          {s.label}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

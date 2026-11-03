import { EnvelopeSimple, MapPin, Phone, WhatsappLogo, FacebookLogo, InstagramLogo, TiktokLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import { TLink } from "@/components/ui/TLink";
import { Logo } from "@/components/layout/SiteHeader";
import { FOOTER_GROUPS, SITE } from "@/data/site";

const SOCIAL = [
  { label: "WhatsApp community", href: SITE.links.whatsapp, Icon: WhatsappLogo },
  { label: "Facebook page", href: SITE.links.facebook, Icon: FacebookLogo },
  { label: "Instagram profile", href: SITE.links.instagram, Icon: InstagramLogo },
  { label: "TikTok channel", href: SITE.links.tiktok, Icon: TiktokLogo },
  { label: "X (Twitter) profile", href: SITE.links.x, Icon: XLogo },
];

export function SiteFooter() {
  const a = SITE.address;
  return (
    <footer className="relative mt-auto bg-paper-2" style={{ ["--battlement-color" as string]: "var(--color-paper-2)" }}>
      <div className="battlement absolute inset-x-0 -top-[13px]" aria-hidden="true" />

      <div className="wrap grid gap-14 pt-20 pb-10 lg:grid-cols-[1.25fr_2fr] lg:gap-20 lg:pt-24">
        <div className="max-w-sm">
          <TLink href="/" aria-label="Bannu Digital Hub, home" className="inline-flex min-h-11 items-center rounded-lg">
            <Logo />
          </TLink>
          <p className="mt-6 text-[0.98rem] leading-relaxed text-ink-2">
            A grassroots community connecting freelancers, developers, designers, e-commerce sellers and students across Bannu and Southern Khyber Pakhtunkhwa.
          </p>
          <p className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-ink">{SITE.tagline}</p>

          <ul className="mt-8 space-y-2 text-[0.95rem] text-ink-2">
            <li className="flex gap-3">
              <MapPin size={20} weight="duotone" className="mt-1 shrink-0 text-green-deep" />
              <address className="not-italic">
                {a.street}, {a.locality}, {a.region} {a.postal}, {a.country}
              </address>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} weight="duotone" className="shrink-0 text-green-deep" />
              <a href={`tel:${SITE.phoneTel}`} className="link-u inline-flex min-h-10 items-center py-1">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <EnvelopeSimple size={20} weight="duotone" className="shrink-0 text-green-deep" />
              <a href={`mailto:${SITE.email}`} className="link-u inline-flex min-h-10 items-center break-all py-1">
                {SITE.email}
              </a>
            </li>
          </ul>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Social media">
            {SOCIAL.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white"
                >
                  <Icon size={19} weight="fill" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {FOOTER_GROUPS.map((g) => (
            <div key={g.title}>
              <h2 className="font-display text-base font-bold tracking-[-0.01em] text-ink">{g.title}</h2>
              <ul className="mt-4 space-y-0.5">
                {g.items.map((i) => (
                  <li key={i.href}>
                    <TLink href={i.href} className="inline-flex min-h-10 min-w-10 items-center py-1.5 text-[0.95rem] text-ink-2 transition-colors hover:text-green-deep">
                      {i.label}
                    </TLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="wrap border-t border-line py-6">
        <div className="flex flex-col gap-3 text-[0.85rem] text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Bannu Digital Hub. An independent community initiative. Not affiliated with any government body.
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <TLink href="/policy" className="link-u inline-flex min-h-10 min-w-10 items-center py-1">
              Constitution and policies
            </TLink>
            <TLink href="/contact" className="link-u inline-flex min-h-10 min-w-10 items-center py-1">
              Contact
            </TLink>
          </p>
        </div>
      </div>
    </footer>
  );
}

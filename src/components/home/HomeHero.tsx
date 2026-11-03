import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { BgVideo } from "@/components/ui/BgVideo";
import { Button } from "@/components/ui/Button";
import { Ridgeline } from "@/components/ui/Ridgeline";
import { TLink } from "@/components/ui/TLink";

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[100dvh] flex-col justify-end overflow-hidden" aria-labelledby="hero-title">
      <BgVideo name="hero" priority control position="62% center" sizes="100vw" />

      {/* Readability overlays: left wash on desktop, vertical wash on mobile */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(244,247,243,0.96)_0%,rgba(244,247,243,0.84)_34%,rgba(244,247,243,0.28)_66%,rgba(244,247,243,0.06)_100%)] max-md:bg-[linear-gradient(180deg,rgba(244,247,243,0.82)_0%,rgba(244,247,243,0.1)_22%,rgba(244,247,243,0.1)_38%,rgba(244,247,243,0.9)_58%,rgba(244,247,243,0.95)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-36 bg-gradient-to-b from-paper/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-paper to-transparent" />

      <Ridgeline draw={false} className="pointer-events-none absolute inset-x-0 bottom-12 z-[1] h-32 w-full text-ink/12 sm:h-44" />

      <div className="wrap relative z-[2] pt-[calc(var(--header-h)+3.5rem)] pb-[clamp(4.5rem,9vh,7rem)]">
        <div className="max-w-[58rem]">
          <p className="label mb-5 inline-flex items-center gap-2" data-reveal="fade" data-delay="0.1">
            <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
            Bannu, Khyber Pakhtunkhwa
          </p>
          <h1 id="hero-title" className="display-xl" data-split data-delay="0.2">
            Bannu&apos;s home for <span className="italic-accent">digital talent.</span>
          </h1>
          <p className="lede mt-6 max-w-[34rem] text-ink" data-reveal data-delay="0.75">
            A grassroots community of freelancers, developers, designers and students across Bannu and Southern KP.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3" data-reveal data-delay="0.95">
            <Button href="/join">Join the community</Button>
            <Button href="/members" variant="ghost">
              Meet the talent
            </Button>
          </div>
        </div>
      </div>

      {/* Foreground ring: rotating tagline that doubles as a scroll cue (desktop) */}
      <TLink
        href="/#story"
        aria-label="Scroll to our story"
        className="group absolute z-[3] bottom-[clamp(5rem,12vh,8rem)] right-[var(--gutter)] hidden h-36 w-36 place-items-center rounded-full md:grid"
      >
        <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <path id="ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <text fontSize="15" letterSpacing="3.4" className="fill-ink font-mono uppercase" fontWeight="500">
            <textPath href="#ring">Connect Â· Learn Â· Collaborate Â· Grow Â· </textPath>
          </text>
        </svg>
        <span className="grid h-14 w-14 place-items-center rounded-full bg-green text-green-ink transition-transform duration-500 group-hover:translate-y-1">
          <ArrowDown size={22} weight="bold" />
        </span>
      </TLink>

      <div className="battlement-wrap" aria-hidden="true">
        <div className="battlement" />
      </div>
    </section>
  );
}


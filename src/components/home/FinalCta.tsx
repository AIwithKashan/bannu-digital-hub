import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { BgVideo } from "@/components/ui/BgVideo";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/data/site";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="final-title" style={{ ["--battlement-color" as string]: "var(--color-paper-2)" }}>
      <BgVideo name="join" position="center" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,247,243,0.96)_0%,rgba(244,247,243,0.86)_45%,rgba(244,247,243,0.35)_100%)] max-md:bg-[linear-gradient(180deg,rgba(244,247,243,0.9)_0%,rgba(244,247,243,0.86)_100%)]" />
      <div className="battlement absolute inset-x-0 top-0 rotate-180" aria-hidden="true" />

      <div className="wrap relative py-[calc(var(--section-y)*1.05)]">
        <div className="max-w-[52rem]">
          <h2 id="final-title" className="display-xl" data-split>
            Be part of Bannu&apos;s digital future.
          </h2>
          <p className="lede mt-6 text-ink" data-reveal>
            Free to join. Learn, find clients and meet the people building Bannu&apos;s digital economy.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3" data-reveal data-delay="0.1">
            <Button href="/join">Join the community</Button>
            <Button href={SITE.links.whatsapp} variant="ghost" icon={false} className="gap-2.5">
              <WhatsappLogo size={20} weight="fill" className="-ml-1 text-green-deep" aria-hidden="true" />
              Open WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

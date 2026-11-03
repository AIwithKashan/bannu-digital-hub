import type { ReactNode } from "react";
import { TLink } from "@/components/ui/TLink";
import { Photo } from "@/components/ui/Photo";
import { Ridgeline } from "@/components/ui/Ridgeline";
import { breadcrumbJsonLd } from "@/lib/seo";

type Crumb = { name: string; href: string };

type Common = {
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  crumbs?: Crumb[];
  eyebrow?: string;
  meta?: ReactNode;
};

type WithImage = Common & { image: string; alt: string; position?: string };

const topPad = "pt-[calc(var(--header-h)+clamp(2rem,5vw,4.5rem))]";

function Crumbs({ crumbs }: { crumbs?: Crumb[] }) {
  if (!crumbs?.length) return null;
  const all = [{ name: "Home", href: "/" }, ...crumbs];
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6 text-[0.85rem] text-mute" data-reveal="fade">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((c, i) => (
            <li key={c.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === all.length - 1 ? (
                <span aria-current="page" className="font-medium text-ink">
                  {c.name}
                </span>
              ) : (
                <TLink href={c.href} className="link-u inline-flex min-h-10 min-w-10 items-center py-1">
                  {c.name}
                </TLink>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(all.map((c) => ({ name: c.name, path: c.href })))) }}
      />
    </>
  );
}

function Text({ title, lede, actions, crumbs, eyebrow, meta }: Common) {
  return (
    <div>
      <Crumbs crumbs={crumbs} />
      {eyebrow && (
        <p className="label mb-4" data-reveal="fade">
          {eyebrow}
        </p>
      )}
      <h1 className="display-hero" data-split data-delay="0.15">
        {title}
      </h1>
      {lede && (
        <p className="lede mt-6" data-reveal data-delay="0.45">
          {lede}
        </p>
      )}
      {actions && (
        <div className="mt-8 flex flex-wrap items-center gap-3" data-reveal data-delay="0.6">
          {actions}
        </div>
      )}
      {meta && (
        <div className="mt-10" data-reveal data-delay="0.7">
          {meta}
        </div>
      )}
    </div>
  );
}

/** Text left, tall photo right. */
export function HeroSplit(p: WithImage) {
  return (
    <section className={`relative ${topPad} pb-[clamp(3rem,7vw,6rem)]`}>
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <Text {...p} />
        <Photo
          src={p.image}
          alt={p.alt}
          priority
          reveal
          delay={0.2}
          parallax={0.07}
          position={p.position}
          ratio="aspect-[4/3] lg:aspect-[4/5]"
          sizes="(min-width: 1024px) 44vw, 100vw"
        />
      </div>
    </section>
  );
}

/** Big headline, then a cinematic wide image that overlaps the section below. */
export function HeroStack(p: WithImage) {
  return (
    <section className={`relative ${topPad}`}>
      <div className="wrap">
        <div className="max-w-5xl">
          <Text {...p} />
        </div>
        <Photo
          src={p.image}
          alt={p.alt}
          priority
          reveal
          delay={0.25}
          parallax={0.08}
          position={p.position}
          ratio="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
          className="mt-12 lg:mt-16"
          sizes="(min-width: 1360px) 1360px, 100vw"
        />
      </div>
    </section>
  );
}

/** Tinted panel with the ridgeline motif. For utility pages with no hero image. */
export function HeroTint(p: Common) {
  return (
    <section className={`relative overflow-hidden bg-mint ${topPad} pb-[clamp(3.5rem,8vw,7rem)]`}>
      <Ridgeline className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] w-full text-green/55" />
      <div className="wrap relative">
        <div className="max-w-4xl">
          <Text {...p} />
        </div>
      </div>
      <div className="battlement-wrap" aria-hidden="true">
        <div className="battlement" />
      </div>
    </section>
  );
}

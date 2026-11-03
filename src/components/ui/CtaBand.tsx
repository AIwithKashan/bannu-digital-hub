import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/data/site";

type Props = {
  title: ReactNode;
  body?: ReactNode;
  image: string;
  alt?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

/** Photo-backed closing section for inner pages. */
export function CtaBand({
  title,
  body,
  image,
  alt = "",
  primary = { label: "Join the community", href: "/join" },
  secondary = { label: "Message us", href: "/contact" },
}: Props) {
  return (
    <section className="section-tight">
      <div className="wrap">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-paper-2">
          <Image src={image} alt={alt} fill sizes="(min-width: 1360px) 1360px, 100vw" className="-z-10 object-cover" quality={70} />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(244,247,243,0.97)_0%,rgba(244,247,243,0.9)_45%,rgba(244,247,243,0.25)_100%)] max-sm:bg-[linear-gradient(180deg,rgba(244,247,243,0.96)_0%,rgba(244,247,243,0.88)_70%,rgba(244,247,243,0.7)_100%)]" />
          <div className="max-w-2xl px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <h2 className="display-lg" data-split>
              {title}
            </h2>
            {body && (
              <p className="lede mt-5" data-reveal>
                {body}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3" data-reveal data-delay="0.15">
              <Button href={primary.href}>{primary.label}</Button>
              <Button href={secondary.href} variant="ghost">
                {secondary.label}
              </Button>
            </div>
            <p className="mt-6 text-[0.85rem] text-mute">
              Or write to{" "}
              <a className="link-u inline-block py-1 text-ink" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

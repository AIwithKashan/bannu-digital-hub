"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { usePageTransition } from "@/components/layout/TransitionProvider";

type Props = Omit<ComponentProps<"a">, "href"> & { href: string; prefetch?: boolean };

const isExternal = (href: string) => /^(https?:|mailto:|tel:|\/\/)/i.test(href);

/** next/link that plays the curtain transition for internal navigation. */
export function TLink({ href, onClick, children, target, rel, prefetch, ...rest }: Props) {
  const { go } = usePageTransition();

  if (isExternal(href)) {
    const web = /^https?:|^\/\//i.test(href);
    return (
      <a
        href={href}
        target={target ?? (web ? "_blank" : undefined)}
        rel={rel ?? (web ? "noopener noreferrer" : undefined)}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || target === "_blank") return;
    e.preventDefault();
    go(href);
  };

  return (
    <Link href={href} onClick={handle} target={target} rel={rel} prefetch={prefetch} {...rest}>
      {children}
    </Link>
  );
}

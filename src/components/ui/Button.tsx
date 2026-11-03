"use client";

import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { TLink } from "@/components/ui/TLink";

type Variant = "primary" | "ink" | "ghost";

const cls = (variant: Variant, small?: boolean, icon = true) =>
  ["btn", `btn-${variant}`, small ? "btn-sm" : "", icon ? "" : "btn-noicon"].filter(Boolean).join(" ");

type LinkProps = {
  href: string;
  variant?: Variant;
  small?: boolean;
  icon?: boolean;
  magnetic?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function Button({ href, variant = "primary", small, icon = true, magnetic = true, className = "", children, ...rest }: LinkProps) {
  return (
    <TLink href={href} className={`${cls(variant, small, icon)} ${className}`} {...(magnetic ? { "data-magnetic": "" } : {})} {...rest}>
      <span>{children}</span>
      {icon && (
        <span className="btn-arrow" aria-hidden="true">
          <ArrowRight size={16} weight="bold" />
        </span>
      )}
    </TLink>
  );
}

type BtnProps = {
  variant?: Variant;
  small?: boolean;
  icon?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "className" | "children">;

export function ButtonEl({ variant = "primary", small, icon = true, className = "", children, type = "button", ...rest }: BtnProps) {
  return (
    <button type={type} className={`${cls(variant, small, icon)} ${className}`} {...rest}>
      <span>{children}</span>
      {icon && (
        <span className="btn-arrow" aria-hidden="true">
          <ArrowRight size={16} weight="bold" />
        </span>
      )}
    </button>
  );
}

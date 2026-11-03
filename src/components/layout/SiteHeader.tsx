"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CaretDown, List, X, WhatsappLogo, FacebookLogo, InstagramLogo, TiktokLogo, XLogo, ArrowUpRight } from "@phosphor-icons/react";
import { TLink } from "@/components/ui/TLink";
import { Button } from "@/components/ui/Button";
import { COMMUNITY_NAV, PRIMARY_NAV, SITE } from "@/data/site";
import { useMotion } from "@/components/motion/MotionProvider";

const GROUPS: Record<string, string[]> = {
  "/resources": ["/resources", "/roadmaps", "/guides", "/tools", "/vendors", "/packs"],
  "/disciplines": ["/disciplines"],
  "/projects": ["/projects"],
  "/events": ["/events"],
  "/about": ["/about", "/policy"],
};
const COMMUNITY_PATHS = COMMUNITY_NAV.map((c) => c.href).concat(["/join"]);

const isIn = (path: string, bases: string[]) => bases.some((b) => path === b || path.startsWith(b + "/"));

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/logo-mark.png" alt="" width={640} height={320} className="h-8 w-auto sm:h-9" />
      <span className="font-display text-[1.02rem] font-bold leading-none tracking-[-0.025em] text-ink sm:text-[1.12rem]">
        Bannu Digital <span className="text-green-deep">Hub</span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const motion = useMotion();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [community, setCommunity] = useState(false);
  const lastY = useRef(0);
  const burger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const commRef = useRef<HTMLDivElement>(null);

  // Scroll state
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 16);
        const delta = y - lastY.current;
        if (y > 520 && delta > 6) setHidden(true);
        else if (delta < -6 || y < 520) setHidden(false);
        lastY.current = y;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Close menus on navigation (adjust state during render, not in an effect)
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
    setCommunity(false);
  }

  // Mobile menu: scroll lock + focus handling + Escape
  const closeMenu = useCallback(() => {
    setOpen(false);
    burger.current?.focus();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      root.classList.add("menu-open");
      motion.lock();
      const first = menu.current?.querySelector<HTMLElement>("a,button");
      window.setTimeout(() => first?.focus(), 60);
    } else {
      root.classList.remove("menu-open");
      motion.unlock();
    }
    return () => {
      root.classList.remove("menu-open");
    };
  }, [open, motion]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (open) closeMenu();
        if (community) setCommunity(false);
      }
      if (e.key === "Tab" && open) {
        const nodes = [burger.current, ...(menu.current?.querySelectorAll<HTMLElement>("a,button") ?? [])].filter(Boolean) as HTMLElement[];
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onDown = (e: PointerEvent) => {
      if (community && commRef.current && !commRef.current.contains(e.target as Node)) setCommunity(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open, community, closeMenu]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,box-shadow] duration-500 ease-[var(--ease-out-expo)] ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${solid ? "border-b border-line/80 bg-paper/85 shadow-[0_8px_30px_-22px_rgba(10,28,19,0.35)] backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="wrap flex items-center justify-between gap-4" style={{ height: "var(--header-h)" }}>
          <TLink href="/" aria-label="Bannu Digital Hub, home" className="inline-flex min-h-11 shrink-0 items-center rounded-lg">
            <Logo />
          </TLink>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
            {PRIMARY_NAV.map((item) => {
              const active = isIn(pathname, GROUPS[item.href] ?? [item.href]);
              return (
                <TLink
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="group relative inline-flex min-h-11 items-center px-3 py-2 text-[0.92rem] font-medium text-ink-2 transition-colors hover:text-ink aria-[current=page]:text-ink"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-[2px] origin-left rounded-full bg-green transition-transform duration-500 ease-[var(--ease-out-expo)] ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </TLink>
              );
            })}

            <div
              ref={commRef}
              className="relative"
              onMouseEnter={(e) => (e as unknown as PointerEvent).pointerType !== "touch" && setCommunity(true)}
              onMouseLeave={() => setCommunity(false)}
            >
              <button
                type="button"
                aria-expanded={community}
                aria-controls="community-menu"
                onClick={() => setCommunity((v) => !v)}
                className={`group relative inline-flex min-h-11 items-center gap-1 px-3 py-2 text-[0.92rem] font-medium transition-colors hover:text-ink ${
                  isIn(pathname, COMMUNITY_PATHS) ? "text-ink" : "text-ink-2"
                }`}
              >
                Community
                <CaretDown size={13} weight="bold" className={`transition-transform duration-300 ${community ? "rotate-180" : ""}`} />
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-0.5 h-[2px] origin-left rounded-full bg-green transition-transform duration-500 ${
                    isIn(pathname, COMMUNITY_PATHS) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
              <div
                id="community-menu"
                className={`absolute right-0 top-full w-[22rem] pt-3 transition-[opacity,transform,visibility] duration-300 ease-[var(--ease-out-expo)] ${
                  community ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <ul className="surface grid gap-1 p-2 shadow-[0_30px_60px_-30px_rgba(10,28,19,0.35)]">
                  {COMMUNITY_NAV.map((c) => (
                    <li key={c.href}>
                      <TLink
                        href={c.href}
                        tabIndex={community ? 0 : -1}
                        className="group flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-colors hover:bg-mint"
                      >
                        <span>
                          <span className="block text-[0.95rem] font-semibold text-ink">{c.label}</span>
                          <span className="block text-[0.82rem] text-mute">{c.desc}</span>
                        </span>
                        <ArrowUpRight size={16} className="shrink-0 text-green-deep opacity-0 transition group-hover:opacity-100" />
                      </TLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/join" small className="hidden lg:inline-flex">
              Join the community
            </Button>
            <button
              ref={burger}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => (open ? closeMenu() : setOpen(true))}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/80 text-ink backdrop-blur transition active:scale-95 lg:hidden"
            >
              {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menu}
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-paper transition-[opacity,visibility,transform] duration-500 ease-[var(--ease-out-expo)] lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
        style={{ paddingTop: "calc(var(--header-h) + env(safe-area-inset-top) + 0.75rem)" }}
      >
        <div className="wrap flex min-h-full flex-col pb-safe">
          <nav aria-label="Mobile primary">
            <ul className="divide-y divide-line border-y border-line">
              {[{ label: "Home", href: "/" }, ...PRIMARY_NAV].map((item, i) => {
                const active = item.href === "/" ? pathname === "/" : isIn(pathname, GROUPS[item.href] ?? [item.href]);
                return (
                  <li
                    key={item.href}
                    className={`transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                    style={{ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" }}
                  >
                    <TLink
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className="flex min-h-[3.75rem] items-center justify-between font-display text-[1.65rem] font-semibold tracking-[-0.03em] text-ink aria-[current=page]:text-green-deep"
                    >
                      {item.label}
                      <ArrowUpRight size={20} className="text-mute" />
                    </TLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className={`mt-8 transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: open ? "480ms" : "0ms" }}
          >
            <p className="label mb-3">Community</p>
            <ul className="grid grid-cols-2 gap-2">
              {COMMUNITY_NAV.map((c) => (
                <li key={c.href}>
                  <TLink
                    href={c.href}
                    className="flex min-h-12 items-center rounded-2xl border border-line bg-white px-4 text-[0.92rem] font-medium text-ink active:bg-mint"
                  >
                    {c.label}
                  </TLink>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`mt-auto pt-10 transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: open ? "560ms" : "0ms" }}
          >
            <Button href="/join" className="w-full justify-between" magnetic={false}>
              Join the community
            </Button>
            <div className="mt-6 flex items-center justify-between gap-4">
              <a href={`mailto:${SITE.email}`} className="link-u min-h-11 content-center text-[0.9rem] text-ink-2">
                {SITE.email}
              </a>
              <div className="flex gap-2">
                {[
                  { l: "WhatsApp", h: SITE.links.whatsapp, I: WhatsappLogo },
                  { l: "Facebook", h: SITE.links.facebook, I: FacebookLogo },
                  { l: "Instagram", h: SITE.links.instagram, I: InstagramLogo },
                  { l: "TikTok", h: SITE.links.tiktok, I: TiktokLogo },
                  { l: "X", h: SITE.links.x, I: XLogo },
                ].map(({ l, h, I }) => (
                  <a
                    key={l}
                    href={h}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={l}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink"
                  >
                    <I size={18} weight="fill" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

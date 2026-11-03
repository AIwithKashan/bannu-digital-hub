"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { beginTransition, markRevealed, prefersReducedMotion } from "@/lib/transition";
import { useMotion } from "@/components/motion/MotionProvider";

type Api = { go: (href: string) => void };
const Ctx = createContext<Api>({ go: () => {} });
export const usePageTransition = () => useContext(Ctx);

/** Curtain wipe between routes. Falls back to a plain push for reduced motion. */
export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const motion = useMotion();
  const curtain = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLImageElement>(null);
  const pending = useRef<string | null>(null);
  const busy = useRef(false);
  const safety = useRef<number | undefined>(undefined);
  const lastPath = useRef(pathname);

  useEffect(() => {
    if (curtain.current) gsap.set(curtain.current, { yPercent: 100, y: 0 });
  }, []);

  const reveal = useCallback(() => {
    const el = curtain.current;
    if (!el) return;
    window.clearTimeout(safety.current);
    markRevealed();
    gsap.to(markRef.current, { opacity: 0, scale: 0.9, duration: 0.25, ease: "power2.in" });
    gsap.to(el, {
      yPercent: -100,
      duration: 0.75,
      ease: "power3.inOut",
      delay: 0.12,
      onComplete: () => {
        gsap.set(el, { visibility: "hidden", yPercent: 100 });
        busy.current = false;
        pending.current = null;
      },
    });
  }, []);

  // New route committed: jump to top under the curtain, then open it.
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    if (!pending.current) return;
    motion.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    const t = window.setTimeout(reveal, 120);
    return () => window.clearTimeout(t);
  }, [pathname, motion, reveal]);

  const go = useCallback(
    (href: string) => {
      const url = new URL(href, window.location.href);
      const samePage = url.pathname === window.location.pathname && url.search === window.location.search;

      if (samePage) {
        if (url.hash) {
          motion.scrollTo(url.hash);
          history.pushState(null, "", url.hash);
        } else {
          motion.scrollTo(0);
        }
        return;
      }
      if (prefersReducedMotion() || busy.current) {
        router.push(href);
        return;
      }

      busy.current = true;
      beginTransition();
      const el = curtain.current!;
      gsap.set(el, { visibility: "visible", yPercent: 100 });
      gsap.set(markRef.current, { opacity: 0, scale: 0.9 });
      gsap.to(el, {
        yPercent: 0,
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => {
          pending.current = href;
          router.push(href);
          // Never leave the user stuck behind the curtain.
          safety.current = window.setTimeout(reveal, 4500);
        },
      });
      gsap.to(markRef.current, { opacity: 1, scale: 1, duration: 0.45, delay: 0.25, ease: "power3.out" });
    },
    [router, motion, reveal],
  );

  const api = useMemo(() => ({ go }), [go]);

  return (
    <Ctx.Provider value={api}>
      {children}
      <div ref={curtain} className="curtain" aria-hidden="true">
        <div className="battlement absolute inset-x-0 -top-[13px]" />
        <div className="battlement absolute inset-x-0 -bottom-[13px] rotate-180" />
        <div className="grid h-full place-items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={markRef} src="/brand/logo-mark.png" alt="" width={160} height={80} className="h-auto w-32 sm:w-40" />
        </div>
      </div>
    </Ctx.Provider>
  );
}

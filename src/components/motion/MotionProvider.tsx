"use client";

import { createContext, useContext, useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { prefersReducedMotion, whenRevealed } from "@/lib/transition";

gsap.registerPlugin(ScrollTrigger, SplitText);

type Api = {
  scrollTo: (target: string | number | HTMLElement, opts?: { offset?: number; immediate?: boolean }) => void;
  lock: () => void;
  unlock: () => void;
};

const MotionCtx = createContext<Api>({
  scrollTo: () => {},
  lock: () => {},
  unlock: () => {},
});

export const useMotion = () => useContext(MotionCtx);

/**
 * One place owns smooth scrolling and every attribute-driven animation, so
 * server components stay static and animation never needs per-component JS.
 *
 * Attributes:
 *  data-reveal[="up|left|right|fade"] data-delay      single element reveal
 *  data-stagger > [data-reveal-item]                   staggered children
 *  data-split[data-delay]                              line-mask text reveal
 *  data-scrub-words                                    words fill with scroll
 *  data-img-reveal > [data-img-inner]                  wipe + settle scale
 *  data-parallax="0.12"                                scrubbed y drift
 *  data-counter data-to data-suffix                    animated count
 *  data-magnetic                                       cursor-attracted CTA
 *  data-draw                                           SVG path draw on scroll
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  /* ---------- Smooth scrolling ---------- */
  useEffect(() => {
    const root = document.documentElement;
    if (prefersReducedMotion()) return;
    root.classList.add("motion");

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      anchors: false,
    });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  /* ---------- Content animations, re-run per route ---------- */
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion")) return;

    let ctx: gsap.Context | undefined;
    const cleanups: Array<() => void> = [];

    const cancelWait = whenRevealed(() => {
      const coarse = window.matchMedia("(pointer: coarse)").matches;
      const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      ctx = gsap.context(() => {
        const q = gsap.utils.toArray;

        // Simple reveals
        q<HTMLElement>("[data-reveal]").forEach((el) => {
          const variant = el.dataset.reveal || "up";
          const delay = parseFloat(el.dataset.delay || "0");
          const from: gsap.TweenVars = { opacity: 0 };
          if (variant === "up" || variant === "") from.y = 28;
          if (variant === "left") from.x = -40;
          if (variant === "right") from.x = 40;
          gsap.fromTo(el, from, {
            opacity: 1, x: 0, y: 0, duration: 1, delay, ease: "power3.out", clearProps: "transform",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        // Staggered groups
        q<HTMLElement>("[data-stagger]").forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>("[data-reveal-item]");
          if (!items.length) return;
          const each = parseFloat(group.dataset.stagger || "0.09");
          gsap.fromTo(items, { opacity: 0, y: 28 }, {
            opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: each, clearProps: "transform",
            scrollTrigger: { trigger: group, start: "top 88%", once: true },
          });
        });

        // Split text, masked line reveal
        q<HTMLElement>("[data-split]").forEach((el) => {
          const delay = parseFloat(el.dataset.delay || "0");
          gsap.set(el, { visibility: "visible" });
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            linesClass: "split-line",
            onSplit(self) {
              return gsap.from(self.lines, {
                yPercent: 110, duration: 1.1, delay, ease: "power4.out", stagger: 0.09,
                scrollTrigger: { trigger: el, start: "top 90%", once: true },
              });
            },
          });
        });

        // Words that fill in as you scroll (scroll-based storytelling)
        q<HTMLElement>("[data-scrub-words]").forEach((el) => {
          gsap.set(el, { visibility: "visible" });
          const split = SplitText.create(el, { type: "words" });
          gsap.fromTo(split.words, { opacity: 0.28 }, {
            opacity: 1, ease: "none", stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 88%", end: "top 35%", scrub: 0.5 },
          });
        });

        // Image wipe reveals
        q<HTMLElement>("[data-img-reveal]").forEach((el) => {
          const inner = el.querySelector<HTMLElement>("[data-img-inner]");
          const delay = parseFloat(el.dataset.delay || "0");
          const tl = gsap.timeline({
            delay,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
          tl.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "power4.inOut", clearProps: "clipPath" });
          if (inner) tl.fromTo(inner, { scale: 1.22 }, { scale: 1, duration: 1.6, ease: "power3.out" }, 0);
        });

        // Parallax drift
        q<HTMLElement>("[data-parallax]").forEach((el) => {
          const base = parseFloat(el.dataset.parallax || "0.1");
          const s = coarse ? base * 0.55 : base;
          gsap.fromTo(el, { yPercent: -s * 100 }, {
            yPercent: s * 100, ease: "none",
            scrollTrigger: { trigger: el.parentElement || el, start: "top bottom", end: "bottom top", scrub: true },
          });
        });

        // Counters
        q<HTMLElement>("[data-counter]").forEach((el) => {
          const to = parseFloat(el.dataset.to || el.textContent || "0");
          const suffix = el.dataset.suffix || "";
          const pad = parseInt(el.dataset.pad || "0", 10);
          const obj = { v: 0 };
          const fmt = (n: number) => String(Math.round(n)).padStart(pad, "0") + suffix;
          el.textContent = fmt(0);
          gsap.to(obj, {
            v: to, duration: 1.8, ease: "power2.out",
            onUpdate: () => (el.textContent = fmt(obj.v)),
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          });
        });

        // SVG line drawing
        q<SVGGeometryElement>("[data-draw]").forEach((path) => {
          const len = path.getTotalLength?.() ?? 0;
          if (!len) return;
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
          gsap.to(path, {
            strokeDashoffset: 0, ease: "none",
            scrollTrigger: { trigger: path.closest("[data-draw-scope]") || path, start: "top 80%", end: "bottom 55%", scrub: 0.5 },
          });
        });
      });

      // Magnetic buttons (pointer devices only, kept outside gsap.context)
      if (canHover) {
        document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
          const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
          const move = (e: PointerEvent) => {
            const r = el.getBoundingClientRect();
            const dx = e.clientX - (r.left + r.width / 2);
            const dy = e.clientY - (r.top + r.height / 2);
            xTo(dx * 0.22);
            yTo(dy * 0.32);
          };
          const leave = () => { xTo(0); yTo(0); };
          el.addEventListener("pointermove", move);
          el.addEventListener("pointerleave", leave);
          cleanups.push(() => {
            el.removeEventListener("pointermove", move);
            el.removeEventListener("pointerleave", leave);
            gsap.set(el, { clearProps: "x,y" });
          });
        });
      }

      root.classList.add("motion-ready");
      const refresh = () => ScrollTrigger.refresh();
      const t = window.setTimeout(refresh, 500);
      document.fonts?.ready.then(refresh);
      window.addEventListener("load", refresh, { once: true });
      cleanups.push(() => window.clearTimeout(t));
    });

    return () => {
      cancelWait();
      cleanups.forEach((fn) => fn());
      ctx?.revert();
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  const api = useMemo<Api>(
    () => ({
      scrollTo: (target, opts) => {
        const lenis = lenisRef.current;
        const el = typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
        const header = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 64;
        if (lenis) {
          lenis.scrollTo(el ?? (target as number), { offset: -(header + 16) + (opts?.offset ?? 0), immediate: opts?.immediate, duration: 1.3 });
        } else if (el instanceof HTMLElement) {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - header - 16, behavior: "auto" });
        } else if (typeof target === "number") {
          window.scrollTo(0, target);
        }
      },
      lock: () => lenisRef.current?.stop(),
      unlock: () => lenisRef.current?.start(),
    }),
    [],
  );

  return <MotionCtx.Provider value={api}>{children}</MotionCtx.Provider>;
}

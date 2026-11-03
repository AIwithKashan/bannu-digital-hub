"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Pause, Play } from "@phosphor-icons/react";

type Props = {
  /** File stem inside /media/video, e.g. "hero" */
  name: "hero" | "studio" | "community" | "join";
  /** Poster alt is empty because the video is purely decorative. */
  priority?: boolean;
  /** CSS object-position for cropping on narrow screens */
  position?: string;
  /** Show an accessible pause / play control */
  control?: boolean;
  className?: string;
  sizes?: string;
};

type NavigatorWithConnection = Navigator & { connection?: { saveData?: boolean; effectiveType?: string } };

const noopSubscribe = () => () => {};
const canPlayMotion = () => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const conn = (navigator as NavigatorWithConnection).connection;
  const slow = conn?.saveData || /(^|-)2g$/.test(conn?.effectiveType ?? "");
  return !reduce && !slow;
};

/**
 * Optimised decorative background video:
 *  - poster image is the LCP element and the fallback
 *  - mobile gets a 640px encode, desktop gets WebM when supported
 *  - disabled for reduced motion and Save-Data
 *  - lazy sources + auto pause when off screen
 *  - user pause control (WCAG 2.2.2)
 */
export function BgVideo({ name, priority, position = "center", control, className = "", sizes = "100vw" }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  // false on the server and during hydration, then the real client value
  const enabled = useSyncExternalStore(noopSubscribe, canPlayMotion, () => false);
  const [playing, setPlaying] = useState(true);
  const userPaused = useRef(false);
  const visible = useRef(false);

  const load = useCallback(() => {
    const v = video.current;
    if (!v || v.dataset.loaded) return;
    v.dataset.loaded = "1";
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const webm = !mobile && v.canPlayType('video/webm; codecs="vp9"') !== "";
    v.src = mobile ? `/media/video/${name}-m.mp4` : `/media/video/${name}.${webm ? "webm" : "mp4"}`;
    v.load();
  }, [name]);

  useEffect(() => {
    if (!enabled || !wrap.current) return;
    const el = wrap.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting;
        const v = video.current;
        if (!v) return;
        if (entry.isIntersecting) {
          load();
          if (!userPaused.current) v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: priority ? "0px" : "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled, load, priority]);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
    } else {
      userPaused.current = true;
      v.pause();
    }
  };

  return (
    <div ref={wrap} className={`absolute inset-0 overflow-hidden bg-paper-2 ${className}`} aria-hidden={control ? undefined : true}>
      <Image
        src={`/media/video/${name}-poster.jpg`}
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        quality={70}
        className="object-cover"
        style={{ objectPosition: position }}
      />
      {enabled && (
        <video
          ref={video}
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
          aria-hidden="true"
          onPlaying={() => {
            setReady(true);
            setPlaying(true);
          }}
          onPause={() => setPlaying(false)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
          style={{ objectPosition: position }}
        />
      )}
      {control && enabled && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause background video" : "Play background video"}
          className="absolute bottom-4 right-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white/80 text-ink backdrop-blur-md transition hover:bg-white sm:bottom-6 sm:right-6"
        >
          {playing ? <Pause size={16} weight="fill" /> : <Play size={16} weight="fill" />}
        </button>
      )}
    </div>
  );
}

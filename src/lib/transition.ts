/**
 * Tiny shared state between the page-transition curtain and the scroll/motion
 * engine, so on-page reveals wait until the curtain starts opening.
 */
type Cb = () => void;

const state = {
  active: false,
  waiting: [] as Cb[],
};

export function beginTransition() {
  state.active = true;
}

export function markRevealed() {
  state.active = false;
  const q = state.waiting.splice(0);
  q.forEach((cb) => cb());
}

/** Run `cb` once the curtain is opening (or immediately when no transition). */
export function whenRevealed(cb: Cb): () => void {
  if (!state.active) {
    cb();
    return () => {};
  }
  state.waiting.push(cb);
  return () => {
    const i = state.waiting.indexOf(cb);
    if (i >= 0) state.waiting.splice(i, 1);
  };
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

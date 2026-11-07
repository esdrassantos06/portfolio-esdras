export const PRELOADER_SEEN_KEY = "preloader-seen";

/**
 * Inline script for the document head. Marks <html data-preloaded> before
 * first paint when the intro already played in this browser session.
 */
export const PRELOADER_SKIP_SCRIPT = `try{if(sessionStorage.getItem("${PRELOADER_SEEN_KEY}"))document.documentElement.dataset.preloaded=""}catch(e){}`;

let ready = false;
const waiters = new Set<() => void>();

export function markAppReady() {
  if (ready) return;
  ready = true;
  waiters.forEach((cb) => cb());
  waiters.clear();
}

export function isAppReady() {
  return ready;
}

export function onAppReady(cb: () => void) {
  if (ready) {
    cb();
    return () => {};
  }
  waiters.add(cb);

  requestAnimationFrame(() => {
    if (!ready && !document.querySelector("[data-preloader]")) {
      markAppReady();
    }
  });

  return () => waiters.delete(cb);
}

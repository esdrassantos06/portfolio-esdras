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

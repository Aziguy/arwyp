import type { QuoteId } from '@/config/quotes';

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

function ensureManifest(enabled: boolean) {
  const existing = document.querySelector('link[rel="manifest"]');
  if (enabled && !existing) {
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = `${base}manifest.webmanifest`;
    document.head.append(link);
  } else if (!enabled && existing) {
    existing.remove();
  }
}

export async function syncPwa(quote: QuoteId) {
  const enabled = quote === 'b';
  ensureManifest(enabled);
  if (!('serviceWorker' in navigator)) return;
  try {
    if (enabled) {
      await navigator.serviceWorker.register(`${base}sw.js`, { scope: base });
    } else {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((r) => r.unregister()));
    }
  } catch {}
}

let deferred: (Event & { prompt: () => Promise<void> }) | null = null;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferred = event as typeof deferred;
  document.querySelectorAll<HTMLElement>('[data-pwa-install]').forEach((el) => (el.hidden = false));
});

document.addEventListener('click', async (event) => {
  const trigger = (event.target as Element).closest('[data-pwa-install]');
  if (!trigger || !deferred) return;
  await deferred.prompt();
  deferred = null;
  document.querySelectorAll<HTMLElement>('[data-pwa-install]').forEach((el) => (el.hidden = true));
});

import { QUOTE_STORAGE_KEY, type QuoteId } from '@/config/quotes';
import { syncPwa } from './pwa';

const root = document.documentElement;

export const currentQuote = (): QuoteId => (root.dataset.quote === 'a' ? 'a' : 'b');

function render(quote: QuoteId) {
  document.querySelectorAll<HTMLElement>('[data-set-quote]').forEach((el) => {
    el.setAttribute('aria-pressed', String(el.dataset.setQuote === quote));
  });
  document.querySelectorAll<HTMLScriptElement>('script[data-ld-quote]').forEach((el) => {
    el.type = el.dataset.ldQuote === quote ? 'application/ld+json' : 'text/plain';
  });
}

export function setQuote(quote: QuoteId) {
  root.dataset.quote = quote;
  try {
    localStorage.setItem(QUOTE_STORAGE_KEY, quote);
  } catch {}
  const params = new URL(location.href);
  if (params.searchParams.has('quote')) {
    params.searchParams.delete('quote');
    history.replaceState(null, '', params);
  }
  render(quote);
  syncPwa(quote);
  window.dispatchEvent(new CustomEvent('quotechange', { detail: quote }));
}

document.addEventListener('click', (event) => {
  const trigger = (event.target as Element).closest<HTMLElement>('[data-set-quote]');
  if (!trigger) return;
  event.preventDefault();
  setQuote(trigger.dataset.setQuote === 'a' ? 'a' : 'b');
});

render(currentQuote());
syncPwa(currentQuote());

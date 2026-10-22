const chevron = (d: string) =>
  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;

export function pageList(page: number, pages: number): (number | 'gap')[] {
  if (pages <= 7) return Array.from({ length: pages }, (_, i) => i + 1);
  const set = new Set([1, pages, page - 1, page, page + 1].filter((n) => n >= 1 && n <= pages));
  if (page <= 3) [2, 3, 4].forEach((n) => set.add(n));
  if (page >= pages - 2) [pages - 3, pages - 2, pages - 1].forEach((n) => set.add(n));
  const sorted = [...set].sort((a, b) => a - b);
  return sorted.flatMap((n, i): (number | 'gap')[] => (i && n - sorted[i - 1] > 1 ? ['gap', n] : [n]));
}

export function renderPager(nav: HTMLElement, page: number, pages: number) {
  nav.hidden = pages <= 1;
  if (pages <= 1) {
    nav.innerHTML = '';
    return;
  }
  const numbers = pageList(page, pages)
    .map((p) =>
      p === 'gap'
        ? '<span class="pager__gap" aria-hidden="true">&hellip;</span>'
        : `<button type="button" class="pager__btn" data-goto="${p}" aria-label="Page ${p}"${p === page ? ' aria-current="page"' : ''}>${p}</button>`,
    )
    .join('');
  nav.innerHTML = `
    <button type="button" class="pager__btn pager__nav" aria-label="Previous page" data-goto="${page - 1}"${page === 1 ? ' disabled' : ''}>${chevron('m15 18-6-6 6-6')}<span>Previous</span></button>
    <span class="pager__pages">${numbers}</span>
    <span class="pager__compact" aria-hidden="true">${page} / ${pages}</span>
    <button type="button" class="pager__btn pager__nav" aria-label="Next page" data-goto="${page + 1}"${page === pages ? ' disabled' : ''}><span>Next</span>${chevron('m9 18 6-6-6-6')}</button>`;
}

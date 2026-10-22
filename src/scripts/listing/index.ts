import { readState, writeState, type ListingState } from './url-state';
import { renderPager } from './pager';

const normalise = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim();

const escape = (value: string) => value.replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);

function compare(a: string, b: string) {
  const [x, y] = [Number(a), Number(b)];
  if (a !== '' && b !== '' && !Number.isNaN(x) && !Number.isNaN(y)) return x - y;
  return a.localeCompare(b, 'en-ZA', { sensitivity: 'base' });
}

function init(root: HTMLElement) {
  const list = root.querySelector<HTMLElement>('[data-items]') ?? root;
  const items = [...root.querySelectorAll<HTMLElement>('[data-item]')];
  const chips = [...root.querySelectorAll<HTMLButtonElement>('[data-facet]')];
  const selects = [...root.querySelectorAll<HTMLSelectElement>('[data-facet-select]')];
  const checks = [...root.querySelectorAll<HTMLInputElement>('[data-facet-check]')];
  const search = root.querySelector<HTMLInputElement>('[data-search]');
  const sorter = root.querySelector<HTMLSelectElement>('[data-sort]');
  const pager = root.querySelector<HTMLElement>('[data-pager]');
  const active = root.querySelector<HTMLElement>('[data-active]');
  const empty = root.querySelector<HTMLElement>('[data-empty]');
  const anchor = root.querySelector<HTMLElement>('[data-scroll-anchor]') ?? root;
  const size = Number(root.dataset.pageSize) || Infinity;
  const keys = [
    ...new Set([...chips.map((c) => c.dataset.facet!), ...selects.map((s) => s.dataset.facetSelect!), ...checks.map((c) => c.dataset.facetCheck!)]),
  ];

  items.forEach((item, i) => (item.dataset.index = String(i)));
  const state: ListingState = readState(keys);

  function sync() {
    if (search && document.activeElement !== search) search.value = state.query;
    selects.forEach((s) => (s.value = state.facets.get(s.dataset.facetSelect!) ?? ''));
    checks.forEach((c) => (c.checked = state.facets.get(c.dataset.facetCheck!) === c.value));
    chips.forEach((c) => c.setAttribute('aria-pressed', String((state.facets.get(c.dataset.facet!) ?? '') === (c.dataset.value ?? ''))));
    if (sorter) sorter.value = state.sort;
  }

  function labelFor(key: string, value: string) {
    const chip = chips.find((c) => c.dataset.facet === key && c.dataset.value === value);
    if (chip) return chip.dataset.label ?? chip.textContent?.replace(/\d+\s*$/, '').trim() ?? value;
    const select = selects.find((s) => s.dataset.facetSelect === key);
    if (select) return [...select.options].find((o) => o.value === value)?.text ?? value;
    return checks.find((c) => c.dataset.facetCheck === key)?.dataset.label ?? value;
  }

  function renderActive() {
    if (!active) return;
    const entries = [...state.facets].filter(([, v]) => v).map(([k, v]) => [k, labelFor(k, v)]);
    if (state.query) entries.push(['q', `“${state.query}”`]);
    active.hidden = !entries.length;
    active.innerHTML = entries.length
      ? `<span class="active__label">Active filters</span>${entries
          .map(
            ([k, label]) =>
              `<button type="button" class="chip chip--active" data-remove="${k}" aria-label="Remove filter ${escape(label)}">${escape(label)}<span aria-hidden="true">&times;</span></button>`,
          )
          .join('')}<button type="button" class="active__clear" data-reset>Clear all</button>`
      : '';
  }

  function apply(scroll = false) {
    const matches = (item: HTMLElement) =>
      [...state.facets].every(([k, v]) => !v || (item.dataset[k] ?? '').split('|').includes(v)) &&
      (!state.query || normalise(item.dataset.text ?? item.textContent ?? '').includes(normalise(state.query)));

    const [field, dir] = state.sort.split(':');
    const key = field ? `sort${field[0].toUpperCase()}${field.slice(1)}` : 'index';
    const ordered = [...items].sort((a, b) => compare(a.dataset[key] ?? '', b.dataset[key] ?? '') * (dir === 'desc' ? -1 : 1));
    list.append(...ordered);

    const visible = ordered.filter(matches);
    const pages = Math.max(1, Math.ceil(visible.length / size));
    state.page = Math.min(state.page, pages);
    const start = (state.page - 1) * size;
    const shown = new Set(visible.slice(start, start + size));
    items.forEach((item) => {
      item.hidden = !shown.has(item);
      item.toggleAttribute('data-lead', item === visible[start] && state.page === 1);
    });

    root.querySelectorAll('[data-count]').forEach((el) => (el.textContent = String(visible.length)));
    root.querySelectorAll('[data-range]').forEach((el) => {
      el.textContent = visible.length ? `${start + 1}-${Math.min(start + size, visible.length)}` : '0';
    });
    if (empty) empty.hidden = visible.length > 0;
    if (pager) renderPager(pager, state.page, pages);
    renderActive();
    sync();
    writeState(state, keys);

    if (scroll && anchor.getBoundingClientRect().top < 0) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const update = (mutate: () => void) => {
    mutate();
    state.page = 1;
    apply();
  };

  chips.forEach((c) => c.addEventListener('click', () => update(() => state.facets.set(c.dataset.facet!, c.dataset.value ?? ''))));
  selects.forEach((s) => s.addEventListener('change', () => update(() => state.facets.set(s.dataset.facetSelect!, s.value))));
  checks.forEach((c) => c.addEventListener('change', () => update(() => state.facets.set(c.dataset.facetCheck!, c.checked ? c.value : ''))));
  sorter?.addEventListener('change', () => update(() => (state.sort = sorter.value)));

  let timer: number | undefined;
  search?.addEventListener('input', () => {
    clearTimeout(timer);
    timer = window.setTimeout(() => update(() => (state.query = search.value.trim())), 120);
  });
  search?.closest('form')?.addEventListener('submit', (e) => e.preventDefault());

  root.addEventListener('click', (e) => {
    const target = e.target as Element;
    const goto = target.closest<HTMLButtonElement>('[data-goto]');
    if (goto && !goto.disabled) {
      state.page = Number(goto.dataset.goto);
      apply(true);
      return;
    }
    const remove = target.closest<HTMLElement>('[data-remove]');
    if (remove) {
      const k = remove.dataset.remove!;
      update(() => (k === 'q' ? (state.query = '') : state.facets.delete(k)));
      return;
    }
    if (target.closest('[data-reset]')) {
      update(() => {
        state.facets.clear();
        state.query = '';
        state.sort = '';
      });
    }
  });

  function syncQuoteOptions() {
    const quote = document.documentElement.dataset.quote;
    sorter?.querySelectorAll<HTMLOptionElement>('option[data-quote]').forEach((o) => {
      o.hidden = o.disabled = o.dataset.quote !== quote;
    });
    if (sorter?.querySelector<HTMLOptionElement>(`option[value="${CSS.escape(state.sort)}"]`)?.disabled) state.sort = '';
  }

  window.addEventListener('quotechange', () => {
    syncQuoteOptions();
    apply();
  });
  syncQuoteOptions();
  root.setAttribute('data-ready', '');
  apply();
}

document.querySelectorAll<HTMLElement>('[data-listing]').forEach(init);

export {};

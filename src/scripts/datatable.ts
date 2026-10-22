import { openRecord } from './app';
import { renderPager } from './listing/pager';

function init(root: HTMLElement) {
  if (root.dataset.ready) return;
  root.dataset.ready = '1';

  const body = root.querySelector('tbody')!;
  const rows = [...body.querySelectorAll<HTMLTableRowElement>('tr[data-row]')];
  let size = Number(root.dataset.pageSize) || 10;
  const search = root.querySelector<HTMLInputElement>('[data-table-search]');
  const filter = root.querySelector<HTMLSelectElement>('[data-table-filter]');
  const countEl = root.querySelector('[data-table-count]')!;
  const empty = root.querySelector<HTMLElement>('[data-table-empty]')!;
  const pager = root.querySelector<HTMLElement>('[data-table-pager]')!;
  const sizer = root.querySelector<HTMLSelectElement>('[data-table-size]');
  let page = 0;

  const matches = () => {
    const q = search?.value.trim().toLowerCase() ?? '';
    const f = filter?.value ?? '';
    return rows.filter((r) => (!f || r.dataset.filter === f) && (!q || r.textContent!.toLowerCase().includes(q)));
  };

  const render = () => {
    const visible = matches();
    const pages = Math.max(1, Math.ceil(visible.length / size));
    page = Math.min(page, pages - 1);
    const start = page * size;
    rows.forEach((r) => (r.hidden = true));
    visible.slice(start, start + size).forEach((r) => (r.hidden = false));
    empty.hidden = visible.length > 0;
    countEl.textContent = visible.length
      ? `Showing ${start + 1}-${Math.min(start + size, visible.length)} of ${visible.length}`
      : '0 records';
    renderPager(pager, page + 1, pages);
  };

  search?.addEventListener('input', () => ((page = 0), render()));
  filter?.addEventListener('change', () => ((page = 0), render()));
  sizer?.addEventListener('change', () => ((size = Number(sizer.value)), (page = 0), render()));
  pager.addEventListener('click', (e) => {
    const btn = (e.target as Element).closest<HTMLButtonElement>('[data-goto]');
    if (!btn || btn.disabled) return;
    page = Number(btn.dataset.goto) - 1;
    render();
  });

  root.querySelectorAll<HTMLButtonElement>('[data-sort-col]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const th = btn.closest('th')!;
      const col = Number(btn.dataset.sortCol);
      const dir = th.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
      root.querySelectorAll('th').forEach((t) => t.setAttribute('aria-sort', 'none'));
      th.setAttribute('aria-sort', dir);
      const numeric = rows.every((r) => !isNaN(Number(r.cells[col].dataset.sort)));
      rows.sort((a, b) => {
        const x = a.cells[col].dataset.sort ?? '';
        const y = b.cells[col].dataset.sort ?? '';
        const cmp = numeric ? Number(x) - Number(y) : x.localeCompare(y);
        return dir === 'ascending' ? cmp : -cmp;
      });
      body.append(...rows);
      page = 0;
      render();
    });
  });

  const open = (row: HTMLTableRowElement) =>
    openRecord(row.dataset.recordTitle ?? '', row.dataset.recordKicker ?? '', JSON.parse(row.dataset.record ?? '{}'));

  body.addEventListener('click', (e) => {
    const row = (e.target as Element).closest<HTMLTableRowElement>('tr[data-row]');
    if (row && !(e.target as Element).closest('a')) open(row);
  });
  body.addEventListener('keydown', (e) => {
    const row = (e.target as Element).closest<HTMLTableRowElement>('tr[data-row]');
    if (row && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      open(row);
    }
  });

  render();
}

document.querySelectorAll<HTMLElement>('[data-table]').forEach(init);

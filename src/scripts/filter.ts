type State = { facets: Map<string, string>; query: string };

const normalise = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim();

function init(root: HTMLElement) {
  const items = [...root.querySelectorAll<HTMLElement>('[data-item]')];
  const chips = [...root.querySelectorAll<HTMLButtonElement>('[data-facet]')];
  const search = root.querySelector<HTMLInputElement>('[data-search]');
  const selects = [...root.querySelectorAll<HTMLSelectElement>('[data-facet-select]')];
  const counter = root.querySelector<HTMLElement>('[data-count]');
  const empty = root.querySelector<HTMLElement>('[data-empty]');
  const groups = [...root.querySelectorAll<HTMLElement>('[data-group]')];
  const state: State = { facets: new Map(), query: '' };

  const params = new URLSearchParams(location.search);
  if (search && params.get('q')) search.value = params.get('q')!;
  state.query = normalise(search?.value ?? '');
  selects.forEach((s) => {
    const preset = params.get(s.dataset.facetSelect!);
    if (preset) s.value = preset;
    if (s.value) state.facets.set(s.dataset.facetSelect!, s.value);
  });

  function apply() {
    let visible = 0;
    items.forEach((item) => {
      const matchFacets = [...state.facets].every(([key, value]) => !value || (item.dataset[key] ?? '').split('|').includes(value));
      const matchQuery = !state.query || normalise(item.dataset.text ?? item.textContent ?? '').includes(state.query);
      const show = matchFacets && matchQuery;
      item.hidden = !show;
      if (show) visible++;
    });
    groups.forEach((g) => (g.hidden = !g.querySelector('[data-item]:not([hidden])')));
    if (counter) counter.textContent = String(visible);
    if (empty) empty.hidden = visible > 0;
    chips.forEach((chip) => {
      const [key, value] = [chip.dataset.facet!, chip.dataset.value ?? ''];
      chip.setAttribute('aria-pressed', String((state.facets.get(key) ?? '') === value));
    });
  }

  chips.forEach((chip) =>
    chip.addEventListener('click', () => {
      state.facets.set(chip.dataset.facet!, chip.dataset.value ?? '');
      apply();
    }),
  );

  selects.forEach((s) =>
    s.addEventListener('change', () => {
      state.facets.set(s.dataset.facetSelect!, s.value);
      apply();
    }),
  );

  search?.addEventListener('input', () => {
    state.query = normalise(search.value);
    apply();
  });

  root.querySelectorAll('[data-reset]').forEach((btn) =>
    btn.addEventListener('click', () => {
      state.facets.clear();
      state.query = '';
      if (search) search.value = '';
      selects.forEach((s) => (s.value = ''));
      apply();
    }),
  );

  apply();
}

document.querySelectorAll<HTMLElement>('[data-filter]').forEach(init);

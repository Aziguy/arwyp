export type ListingState = { facets: Map<string, string>; query: string; sort: string; page: number };

export function readState(keys: string[]): ListingState {
  const params = new URLSearchParams(location.search);
  const facets = new Map<string, string>();
  keys.forEach((k) => params.get(k) && facets.set(k, params.get(k)!));
  return {
    facets,
    query: params.get('q') ?? '',
    sort: params.get('sort') ?? '',
    page: Math.max(1, Number(params.get('page')) || 1),
  };
}

export function writeState(state: ListingState, keys: string[]) {
  const url = new URL(location.href);
  [...keys, 'q', 'sort', 'page'].forEach((k) => url.searchParams.delete(k));
  state.facets.forEach((v, k) => v && url.searchParams.set(k, v));
  if (state.query) url.searchParams.set('q', state.query);
  if (state.sort) url.searchParams.set('sort', state.sort);
  if (state.page > 1) url.searchParams.set('page', String(state.page));
  history.replaceState(history.state, '', url);
}

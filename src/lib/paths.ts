const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '/'): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const [pathname, hash] = path.split('#');
  const clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const withSlash = clean.endsWith('/') || clean.includes('.') ? clean : `${clean}/`;
  return `${BASE}${withSlash}${hash ? `#${hash}` : ''}`;
}

export function isActive(current: string, href: string): boolean {
  const target = url(href);
  if (target === url('/')) return current === target;
  return current.startsWith(target);
}

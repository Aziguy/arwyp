const zar = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 });
const num = new Intl.NumberFormat('en-ZA');
const dateLong = new Intl.DateTimeFormat('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });
const dateShort = new Intl.DateTimeFormat('en-ZA', { day: '2-digit', month: 'short' });

export const money = (value: number) => zar.format(value).replace(/ /g, ' ');
export const count = (value: number) => num.format(value).replace(/ /g, ' ');
export const longDate = (iso: string) => dateLong.format(new Date(iso));
export const shortDate = (iso: string) => dateShort.format(new Date(iso));

export function compact(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
  return String(value);
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function initials(name: string): string {
  return name
    .replace(/^(Dr|Prof|Mr|Mrs|Ms)\.?\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

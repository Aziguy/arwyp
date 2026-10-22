import lucide from '@iconify-json/lucide/icons.json';

type IconSet = { icons: Record<string, { body: string }>; aliases?: Record<string, { parent: string }> };
const set = lucide as IconSet;

export function iconBody(name: string): string {
  const icon = set.icons[name] ?? set.icons[set.aliases?.[name]?.parent ?? ''];
  if (!icon) throw new Error(`Unknown icon: ${name}`);
  return icon.body;
}

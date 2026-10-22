const items = [...document.querySelectorAll<HTMLElement>('[data-nav-item]')].filter((el) =>
  el.querySelector('[data-nav-trigger]'),
);
const hoverable = matchMedia('(hover: hover) and (pointer: fine)');

function setOpen(item: HTMLElement, open: boolean) {
  item.toggleAttribute('data-open', open);
  item.querySelector('[data-nav-trigger]')?.setAttribute('aria-expanded', String(open));
}

const closeAll = (except?: HTMLElement) => items.forEach((i) => i !== except && setOpen(i, false));

items.forEach((item) => {
  let timer: number | undefined;
  const trigger = item.querySelector<HTMLButtonElement>('[data-nav-trigger]')!;

  trigger.addEventListener('click', () => {
    const open = !item.hasAttribute('data-open');
    closeAll(item);
    setOpen(item, open);
  });

  item.addEventListener('pointerenter', () => {
    if (!hoverable.matches) return;
    clearTimeout(timer);
    closeAll(item);
    setOpen(item, true);
  });

  item.addEventListener('pointerleave', () => {
    if (!hoverable.matches) return;
    timer = window.setTimeout(() => setOpen(item, false), 120);
  });

  item.addEventListener('focusout', (e) => {
    if (!item.contains(e.relatedTarget as Node)) setOpen(item, false);
  });
});

document.addEventListener('click', (e) => {
  if (!(e.target as Element).closest('[data-nav-item]')) closeAll();
});

const drawer = document.querySelector<HTMLElement>('[data-drawer]');
const opener = document.querySelector<HTMLButtonElement>('[data-drawer-open]');

function setDrawer(open: boolean) {
  if (!drawer || !opener) return;
  drawer.hidden = !open;
  opener.setAttribute('aria-expanded', String(open));
  document.documentElement.style.overflow = open ? 'hidden' : '';
  if (open) drawer.querySelector<HTMLElement>('[data-drawer-close]')?.focus();
  else opener.focus();
}

opener?.addEventListener('click', () => setDrawer(true));
drawer?.querySelector('[data-drawer-close]')?.addEventListener('click', () => setDrawer(false));

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeAll();
  if (drawer && !drawer.hidden) setDrawer(false);
});

const header = document.querySelector<HTMLElement>('[data-header]');
const onScroll = () => header?.toggleAttribute('data-scrolled', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

export {};

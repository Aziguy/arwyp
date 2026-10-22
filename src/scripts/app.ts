const root = document.documentElement;

export function toast(message: string) {
  const host = document.querySelector('[data-toasts]');
  if (!host) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
  el.append(message);
  host.append(el);
  setTimeout(() => el.remove(), 2800);
}

function setSidebar(open: boolean) {
  root.toggleAttribute('data-sb-open', open);
  document.querySelector<HTMLElement>('.sb-scrim')?.toggleAttribute('hidden', !open);
}

function openPanel(panel: HTMLElement) {
  panel.hidden = false;
  root.style.overflow = 'hidden';
  panel.querySelector<HTMLElement>('input, select, textarea, button')?.focus();
}

function closePanels() {
  document.querySelectorAll<HTMLElement>('[data-drawer-panel]').forEach((p) => {
    if (p.hidden) return;
    p.hidden = true;
    p.querySelectorAll<HTMLFormElement>('form[data-sent]').forEach((f) => {
      delete f.dataset.sent;
      f.reset();
    });
  });
  root.style.overflow = '';
}

export function openRecord(title: string, kicker: string, fields: Record<string, string>) {
  const panel = document.getElementById('record-drawer');
  if (!panel) return;
  panel.querySelector('[data-record-title]')!.textContent = title;
  panel.querySelector('[data-record-kicker]')!.textContent = kicker;
  const body = panel.querySelector('[data-record-body]')!;
  body.replaceChildren(
    ...Object.entries(fields).map(([k, v]) => {
      const row = document.createElement('div');
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      dt.textContent = k;
      dd.textContent = v;
      row.append(dt, dd);
      return row;
    }),
  );
  openPanel(panel);
}

function closePops(except?: Element) {
  document.querySelectorAll<HTMLElement>('[data-pop]').forEach((pop) => {
    if (pop === except) return;
    pop.querySelector('[data-pop-panel]')?.setAttribute('hidden', '');
    pop.querySelector('[data-pop-trigger]')?.setAttribute('aria-expanded', 'false');
  });
}

document.addEventListener('click', (event) => {
  const target = event.target as Element;

  if (target.closest('[data-sidebar-open]')) return setSidebar(true);
  if (target.closest('[data-sidebar-close]')) return setSidebar(false);

  if (target.closest('[data-sidebar-collapse]')) {
    const collapsed = root.dataset.sb === 'collapsed';
    if (collapsed) delete root.dataset.sb;
    else root.dataset.sb = 'collapsed';
    try {
      localStorage.setItem('arwyp.sidebar', collapsed ? 'open' : 'collapsed');
    } catch {}
    return;
  }

  const trigger = target.closest('[data-pop-trigger]');
  if (trigger) {
    const pop = trigger.closest('[data-pop]')!;
    const panel = pop.querySelector<HTMLElement>('[data-pop-panel]')!;
    const open = panel.hidden;
    closePops(pop);
    panel.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
    return;
  }
  if (!target.closest('[data-pop-panel]')) closePops();

  const opener = target.closest<HTMLElement>('[data-open]');
  if (opener) {
    const panel = document.getElementById(opener.dataset.open!);
    if (panel) {
      event.preventDefault();
      const title = opener.dataset.title;
      if (title) panel.querySelector('[data-panel-title]')?.replaceChildren(title);
      openPanel(panel);
    }
    return;
  }

  if (target.closest('[data-drawer-dismiss]')) return closePanels();

  const toastTrigger = target.closest<HTMLElement>('[data-toast-click]');
  if (toastTrigger) {
    event.preventDefault();
    toast(toastTrigger.dataset.toastClick!);
    if (toastTrigger.closest('[data-drawer-panel]')) closePanels();
    return;
  }

  const tab = target.closest<HTMLElement>('[role="tab"][data-tab]');
  if (tab) {
    const list = tab.closest('[data-tabs]')!;
    const scope = list.closest('[data-tabs-scope]') ?? document;
    list.querySelectorAll('[role="tab"]').forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
    scope.querySelectorAll<HTMLElement>('[data-tab-panel]').forEach((p) => (p.hidden = p.dataset.tabPanel !== tab.dataset.tab));
  }
});

document.addEventListener('demo:sent', (event) => {
  const form = event.target as HTMLFormElement;
  if (!form.dataset.toast) return;
  toast(form.dataset.toast);
  if (form.closest('[data-drawer-panel]')) setTimeout(closePanels, 600);
  const next = form.dataset.redirect;
  if (next) setTimeout(() => location.assign(next), 700);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closePanels();
    closePops();
    setSidebar(false);
  }
  const field = event.target as HTMLElement;
  if (event.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(field.tagName)) {
    event.preventDefault();
    document.querySelector<HTMLInputElement>('.tb__input')?.focus();
  }
});

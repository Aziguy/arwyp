document.addEventListener('submit', (event) => {
  const form = (event.target as Element).closest<HTMLFormElement>('form[data-demo-form]');
  if (!form) return;
  event.preventDefault();
  form.dataset.sent = '';
  form.querySelector<HTMLElement>('.form-success')?.focus();
  form.dispatchEvent(new CustomEvent('demo:sent', { bubbles: true }));
});

export {};

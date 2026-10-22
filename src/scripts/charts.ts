type ChartData = { top: number; labels: string[]; series: { name: string; color: string; values: number[]; text: string[] }[] };

function init(fig: HTMLElement) {
  if (fig.dataset.ready) return;
  fig.dataset.ready = '1';
  const data: ChartData = JSON.parse(fig.dataset.lineChart!);
  const plot = fig.querySelector<HTMLElement>('[data-plot]')!;
  const cross = plot.querySelector<HTMLElement>('[data-cross]')!;
  const tip = plot.querySelector<HTMLElement>('[data-tip]')!;
  const dots = [...plot.querySelectorAll<HTMLElement>('[data-dot]')];
  const n = data.labels.length;
  const { top } = data;

  const show = (clientX: number) => {
    const rect = plot.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const i = Math.round(ratio * (n - 1));
    const left = n === 1 ? 50 : (i / (n - 1)) * 100;
    cross.hidden = false;
    cross.style.left = `${left}%`;
    dots.forEach((d, s) => {
      d.hidden = false;
      d.style.left = `${left}%`;
      d.style.top = `${100 - (data.series[s].values[i] / top) * 100}%`;
    });
    tip.innerHTML = `<p>${data.labels[i]}</p>${data.series
      .map((s) => `<p><i style="background:${s.color}"></i>${s.name}<b>${s.text[i]}</b></p>`)
      .join('')}`;
    tip.hidden = false;
    const w = tip.offsetWidth;
    const px = (left / 100) * rect.width;
    tip.style.left = `${px + 14 + w > rect.width ? px - w - 14 : px + 14}px`;
  };

  const hide = () => {
    cross.hidden = true;
    tip.hidden = true;
    dots.forEach((d) => (d.hidden = true));
  };

  plot.addEventListener('pointermove', (e) => show(e.clientX));
  plot.addEventListener('pointerdown', (e) => show(e.clientX));
  plot.addEventListener('pointerleave', hide);
}

document.querySelectorAll<HTMLElement>('[data-line-chart]').forEach(init);

export {};

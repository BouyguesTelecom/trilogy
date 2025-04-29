export const initTabs = (): void => {
  const tabList = document.getElementById('tablist') as HTMLDivElement;
  const tabs = tabList.querySelectorAll<HTMLButtonElement>('.tab');
  const arrowPrev = tabList.querySelector<HTMLSpanElement>('.arrow-prev');
  const arrowNext = tabList.querySelector<HTMLSpanElement>('.arrow-next');
  const scrollAmount = 100;

  const updateArrows = (): void => {
    if (!arrowPrev || !arrowNext) return;

    const scrollLeft = tabList.scrollLeft;
    const scrollWidth = tabList.scrollWidth;
    const clientWidth = tabList.clientWidth;

    arrowPrev.classList.toggle('hidden', scrollLeft <= 0);
    arrowNext.classList.toggle('hidden', scrollWidth <= scrollLeft + clientWidth);
  }

  const scrollTabs = (direction: number): void => {
    tabList.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    updateArrows();
  }

  if (arrowPrev) {
    arrowPrev.addEventListener('click', () => {
      scrollTabs(-1);
    });
  }

  if (arrowNext) {
    arrowNext.addEventListener('click', () => {
      scrollTabs(1);
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      const panels = document.querySelectorAll<HTMLDivElement>('.tab-panel');
      panels.forEach(panel => panel.classList.remove('is-active'));
      const activePanel = document.querySelector<HTMLDivElement>(`.tab-panel[data-index="${index}"]`);
      if (activePanel) activePanel.classList.add('is-active');
    });
  });

  tabList.addEventListener('scroll', updateArrows);

  window.addEventListener('resize', updateArrows);

  updateArrows();
}

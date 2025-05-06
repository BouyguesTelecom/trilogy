export const initTabs = (): void => {
  const tabList = document.querySelector('[data-tablist]') as HTMLDivElement;
  const tabs = tabList.querySelectorAll<HTMLButtonElement>('[data-tab-navigation]');
  const arrowPrev = tabList.querySelector<HTMLSpanElement>('[data-arrow-prev]');
  const arrowNext = tabList.querySelector<HTMLSpanElement>('[data-arrow-next]');

  const updateArrows = (): void => {
    if (!arrowPrev || !arrowNext) return;

    const scrollLeft = tabList.scrollLeft;
    const scrollWidth = tabList.scrollWidth;
    const clientWidth = tabList.clientWidth;

    arrowPrev.classList.toggle('hidden', scrollLeft <= 0);
    arrowNext.classList.toggle('hidden', scrollWidth <= scrollLeft + clientWidth);
  }

  const scrollTabsToNext = (direction: 1 | -1): void => {
    const tabsArray = Array.from(tabs);
    const currentScrollLeft = tabList.scrollLeft;
    let targetTab: HTMLButtonElement | undefined;

    if (direction === 1) {
      targetTab = tabsArray.find(tab => tab.offsetLeft > currentScrollLeft);
    } else {
      targetTab = tabsArray.slice().reverse().find(tab => tab.offsetLeft < currentScrollLeft);
    }

    if (targetTab) {
      tabList.scrollTo({ left: targetTab.offsetLeft, behavior: 'smooth' });
    } else if (direction === -1) {
      // If we're scrolling left and no targetTab found, scroll to the very start
      tabList.scrollTo({ left: 0, behavior: 'smooth' });
    }

    updateArrows();
  }

  if (arrowPrev) {
    arrowPrev.addEventListener('click', () => {
      scrollTabsToNext(-1);
    });
  }

  if (arrowNext) {
    arrowNext.addEventListener('click', () => {
      scrollTabsToNext(1);
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      const panels = document.querySelectorAll<HTMLDivElement>('[data-tab-panel]');
      panels.forEach(panel => panel.classList.remove('is-active'));
      const activePanel = document.querySelector<HTMLDivElement>(`[data-tab-panel][data-index="${index}"]`);
      if (activePanel) activePanel.classList.add('is-active');
    });
  });

  tabList.addEventListener('scroll', updateArrows);

  window.addEventListener('resize', updateArrows);

  updateArrows();
}

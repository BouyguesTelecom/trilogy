export const initTabs = () => {
  const tabContexts = document.querySelectorAll('[data-tabs-context]')

  const styleCusto =
    'right: 0;' +
    'padding-left: 16px;' +
    'width: 4.5rem !important;' +
    'background: linear-gradient(90deg, rgba(256,256,256, 0) -25%, white 30%);\n' +
    'background-attachment: local, local, scroll, scroll;'

  const styledTabs = `
    .tabs {
        padding-right: 2rem;
    }
`

  const styleTabAttr = document.createElement('style')
  styleTabAttr.innerText = styledTabs

  tabContexts.forEach((tabContext) => {
    const tabContextWidth = tabContext.clientWidth
    let tabs = tabContext.querySelector('.tabs')
    if(!tabs) {
      tabs = tabContext.querySelector('[data-real-class*="tabs"]')
    }
    const tabsWidth = tabs.scrollWidth

    if (tabsWidth > tabContextWidth) {
      if (!tabs.innerHTML.includes('icon is-small is-absolute')) {
        const arrowIcon = `<span class="icon is-small is-absolute" style="${styleCusto}"><i class="tri-arrow-right" aria-hidden=\'true\'></i></span>`
        tabs.innerHTML += arrowIcon
        tabs.appendChild(styleTabAttr)
      }
    }
  })

  let tabsContext = document.querySelectorAll('[data-tabs-context]')
  for (let i = 0; i < tabsContext.length; i++) {
    let tabContext = tabsContext[i]
    let tabs: NodeListOf<HTMLElement> = tabContext.querySelectorAll('[data-tab-navigation]')
    let tabsContent: NodeListOf<HTMLElement> = tabContext.querySelectorAll('[data-tab-content]')
    for (let j = 0; j < tabs.length; j++) {
      let tabElement: HTMLElement = tabs[j]
      let tabContent: HTMLElement = tabsContent[j]
      tabElement.addEventListener('click', function () {
        makeTabActive(tabElement, tabContent)
      })
      tabElement.addEventListener('keyup', (e: KeyboardEvent) => {
        e.preventDefault()
        switch (e.keyCode) {
          case 35: // end key
            makeTabActive(tabs[tabs.length - 1], tabsContent[tabs.length - 1])
            break
          case 36: // home key
            makeTabActive(tabs[0], tabsContent[0])
            break
          case 37: // left arrow
            let previous = (j - 1) % tabs.length
            makeTabActive(tabs[previous], tabsContent[previous])
            break
          case 39: // right arrow
            let next = (j + 1) % tabs.length
            makeTabActive(tabs[next], tabsContent[next])
            break
        }
      })
    }

    /**
     * Make an element inactive
     */
    const makeAllTabsInactive = () => {
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('is-active')
        tabs[i].setAttribute('aria-selected', 'false')
        tabs[i].setAttribute('tabindex', '-1')
      }

      for (let j = 0; j < tabsContent.length; j++) {
        tabsContent[j].classList.remove('is-active')
        tabsContent[j].setAttribute('aria-expanded', 'false')
      }
    }

    /**
     * Make an element active
     * @param { Element } tabElementToMakeActive element to be made active
     * @param tabContentToMakeActive
     */
    const makeTabActive = (tabElementToMakeActive: HTMLElement, tabContentToMakeActive: HTMLElement) => {
      makeAllTabsInactive()
      tabElementToMakeActive.classList.add('is-active')
      tabElementToMakeActive.setAttribute('aria-selected', 'true')
      tabElementToMakeActive.setAttribute('tabindex', '0')
      tabElementToMakeActive.focus()
      tabContentToMakeActive.classList.add('is-active')
      tabContentToMakeActive.setAttribute('aria-expanded', 'true')
    }

    tabContext.setAttribute(`data-tab-initialized`, 'true')
  }
}

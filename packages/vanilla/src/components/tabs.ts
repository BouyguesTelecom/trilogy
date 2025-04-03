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
    const tabs = tabContext.querySelector('.tab-list')

    if (!tabs) {
      console.error('Tabs element not found in tab context', tabContext)
      return
    }

    const tabsWidth = tabs.scrollWidth

    if (tabsWidth > tabContextWidth) {
      if (!tabs.innerHTML.includes('icon is-small is-absolute')) {
        const arrowIcon = `<span class="icon is-small is-absolute" style="${styleCusto}"><i class="tri-arrow-right" aria-hidden='true'></i></span>`
        tabs.innerHTML += arrowIcon
        tabs.appendChild(styleTabAttr)
      }
    }
  })

  tabContexts.forEach((tabContext) => {
    const tabs = tabContext.querySelectorAll('[data-tab-navigation]')
    const tabsContent = tabContext.querySelectorAll('.tab-panel')

    if (!tabs.length || !tabsContent.length) {
      console.error('Tab elements or content panels not found in tab context', tabContext)
      return
    }

    tabs.forEach((tabElement, j) => {
      const tabContent = tabsContent[j]

      tabElement.addEventListener('click', () => {
        makeTabActive(tabElement, tabContent)
      })

      tabElement.addEventListener('keyup', (e) => {
        e.preventDefault()
        switch (e.key) {
          case 'End':
            makeTabActive(tabs[tabs.length - 1], tabsContent[tabs.length - 1])
            break
          case 'Home':
            makeTabActive(tabs[0], tabsContent[0])
            break
          case 'ArrowLeft':
            const previous = (j - 1 + tabs.length) % tabs.length
            makeTabActive(tabs[previous], tabsContent[previous])
            break
          case 'ArrowRight':
            const next = (j + 1) % tabs.length
            makeTabActive(tabs[next], tabsContent[next])
            break
        }
      })
    })

    const makeAllTabsInactive = () => {
      tabs.forEach(tab => {
        tab.classList.remove('is-active')
        tab.setAttribute('aria-selected', 'false')
        tab.setAttribute('tabindex', '-1')
      })

      tabsContent.forEach(content => {
        content.classList.remove('is-active')
        content.setAttribute('aria-expanded', 'false')
      })
    }

    const makeTabActive = (tabElementToMakeActive, tabContentToMakeActive) => {
      makeAllTabsInactive()
      tabElementToMakeActive.classList.add('is-active')
      tabElementToMakeActive.setAttribute('aria-selected', 'true')
      tabElementToMakeActive.setAttribute('tabindex', '0')
      tabElementToMakeActive.focus()
      tabContentToMakeActive.classList.add('is-active')
      tabContentToMakeActive.setAttribute('aria-expanded', 'true')
    }

    tabContext.setAttribute('data-tab-initialized', 'true')
  })
}

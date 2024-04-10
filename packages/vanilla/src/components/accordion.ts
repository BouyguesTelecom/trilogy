const _closeAccordionContexts = (accordionsContexts: NodeListOf<HTMLElement>) => {
  if (accordionsContexts.length) {
    accordionsContexts.forEach((accordionContext: HTMLElement) => {
      const accordionButton = accordionContext.querySelector('button.toggle')
      accordionContext.classList.remove('is-active')
      accordionButton.setAttribute('aria-expanded', 'false')
    })
  }
}

const _loadAccordion = (accordion: HTMLElement) => {
  const accordionsContexts: NodeListOf<HTMLElement> = accordion.querySelectorAll('[data-accordion-context]')
  accordionsContexts.forEach((context) => {
    const toggle = context.querySelector('[data-accordion-toggle]')
    const accordionButton = context.querySelector('button.toggle')
    toggle.addEventListener('click', () => {
      if (!context.classList.contains('is-disabled')) {
        if (context.classList.contains('is-active')) {
          context.classList.remove('is-active')
          accordionButton.setAttribute('aria-expanded', 'false')
        } else {
          _closeAccordionContexts(accordionsContexts)
          context.classList.toggle('is-active')
          accordionButton.setAttribute('aria-expanded', 'true')
        }
      }
    })
  })
  accordion.setAttribute('data-accordion-initialized', 'true')
}

export const initAccordions = () => {
  const allAccordions = document.querySelectorAll('[data-accordion], .accordions')
  allAccordions.forEach((accordion: HTMLElement) => {
    _loadAccordion(accordion)
  })
}

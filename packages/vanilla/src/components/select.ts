export const initSelects = () => {
  const HTMLSelects = document.querySelectorAll('[data-select-name]')

  if (HTMLSelects) {
    HTMLSelects.forEach((HTMLSelect: HTMLDivElement) => {
      const HTMLLabel = HTMLSelect.querySelector('label')
      if (!HTMLSelect.classList.contains('select-disabled')) {
        const HTMLParentOfSelect = HTMLSelect.parentNode as HTMLElement
        let HTMLOptions = HTMLParentOfSelect.querySelector('[data-is-open-options]')

        HTMLSelect.addEventListener('click', () => {
          const isOpenOptions = HTMLOptions.getAttribute('data-is-open-options')
          if (isOpenOptions === 'true') HTMLOptions.setAttribute('data-is-open-options', 'false')
          if (isOpenOptions === 'false') HTMLOptions.setAttribute('data-is-open-options', 'true')
        })

        HTMLSelect.addEventListener('blur', () => {
          HTMLOptions.setAttribute('data-is-open-options', 'false')
        })

        const options = HTMLOptions.querySelectorAll('[data-option-name]')
        options.forEach((option: HTMLElement) => {
          if (!option.classList.contains('select-options-option-disabled')) {
            option.addEventListener('mousedown', () => {
              // select option
              options.forEach((opt: HTMLElement) => opt.classList.remove('select-options-option-activated'))
              option.classList.add('select-options-option-activated')

              // insert/update otp
              let HTMLSpan: HTMLSpanElement = HTMLSelect.querySelector('[data-option-selected]')
              if (!HTMLSpan) {
                HTMLSpan = document.createElement('span')
                HTMLSpan.classList.add('select-value')
                if (!HTMLLabel || HTMLLabel === null) HTMLSpan.classList.add('no-label')
                HTMLSelect.appendChild(HTMLSpan)
              }
              HTMLSelect.setAttribute('data-option-selected', option.getAttribute('data-option-name'))
              HTMLSpan.setAttribute('data-option-selected', option.getAttribute('data-option-name'))
              HTMLSpan.textContent = option.getAttribute('data-option-name')
              HTMLParentOfSelect.classList.add('has-dynamic-placeholder')
            })
          }
        })
      }
      HTMLSelect.setAttribute(`data-selects-initialized`, 'true')
    })
  }
}

export const initAutocomplete = () => {
  const autocompleteContainer = document.querySelectorAll('[data-autocomplete-context]')

  autocompleteContainer.forEach((autocompleteConainterElmt: HTMLDivElement) => {
    const inputAutocomplete: HTMLInputElement = autocompleteConainterElmt.querySelector('[data-autocomplete-input]')
    const autocompleteMenu: HTMLDivElement = autocompleteConainterElmt.querySelector('[data-autocomplete-menu]')
    const autocompleteItems = autocompleteMenu.querySelectorAll('.autocomplete-item')

    let currentItems = -1
    let itemSelected = ''

    const onBlur = () => {
      currentItems = -1
      document.body.classList.remove('autocomplete-close')
      autocompleteConainterElmt.classList.remove('is-active')
      inputAutocomplete.blur()
      autocompleteItems.forEach((item: HTMLDivElement) => {
        item.removeAttribute('data-autocomplete-item-hover')
      })
    }

    // add data attributte on items
    const itemsList = autocompleteMenu.querySelectorAll('.autocomplete-item')
    itemsList.forEach((item: HTMLDivElement, index: number) => {
      item.setAttribute('data-autocomplete-item-index', String(index))
    })

    // Open suggestions
    inputAutocomplete.addEventListener('focus', (eventFocus: FocusEvent) => {
      eventFocus.stopPropagation()
      autocompleteConainterElmt.closest('.is-autocomplete').classList.add('is-active')
      document.body.classList.add('autocomplete-close')
      const items: HTMLDivElement[] = []

      // open with suggestions filtered
      autocompleteItems.forEach((item: HTMLDivElement) => {
        if (item.textContent.trim().toLocaleLowerCase().includes(inputAutocomplete.value.trim().toLocaleLowerCase())) {
          item.style.display = 'block'
          items.push(item)
        } else {
          item.style.display = 'none'
        }
        item.removeAttribute('data-autocomplete-item-index')
      })

      items.forEach((item: HTMLDivElement, index: number) => {
        item.setAttribute('data-autocomplete-item-index', String(index))
      })
    })

    // on hover and blur item
    autocompleteItems.forEach((autocompleteItem: HTMLDivElement) => {
      autocompleteItem.addEventListener('mousemove', () => {
        autocompleteItems.forEach((i: HTMLDivElement) => {
          i.removeAttribute('data-autocomplete-item-hover')
        })

        const index = autocompleteItem.getAttribute('data-autocomplete-item-index')
        currentItems = Number(index)
        autocompleteItem.setAttribute('data-autocomplete-item-hover', 'true')
        itemSelected = ''
      })

      autocompleteItem.addEventListener('mouseout', () => {
        autocompleteItem.removeAttribute('data-autocomplete-item-hover')
      })

      autocompleteItem.addEventListener('click', (eventClick: MouseEvent) => {
        const targetItem = eventClick.target as HTMLInputElement
        inputAutocomplete.value = targetItem.textContent
        onBlur()
      })
    })

    // filter suggestions
    inputAutocomplete.addEventListener('input', (eventInput: InputEvent) => {
      const target = eventInput.target as HTMLInputElement
      if (currentItems !== -1) currentItems = -1
      const items: HTMLDivElement[] = []

      autocompleteItems.forEach((item: HTMLDivElement) => {
        if (item.textContent.trim().toLocaleLowerCase().includes(target.value.trim().toLocaleLowerCase())) {
          item.style.display = 'block'
          items.push(item)
        } else {
          item.style.display = 'none'
        }
        item.removeAttribute('data-autocomplete-item-index')
        item.removeAttribute('data-autocomplete-item-hover')
      })

      items.forEach((item: HTMLDivElement, index: number) => {
        item.setAttribute('data-autocomplete-item-index', String(index))
      })
    })

    // on select items with keyboard
    inputAutocomplete.addEventListener('keydown', (eventKeyboard: KeyboardEvent) => {
      const itemsList = autocompleteMenu.querySelectorAll('[data-autocomplete-item-index]')

      if (eventKeyboard.key === 'ArrowDown') {
        currentItems = currentItems + 1
        if (currentItems === itemsList.length) currentItems = 0
      }

      if (eventKeyboard.key === 'ArrowUp') {
        currentItems = currentItems - 1
        if (currentItems < 0) currentItems = itemsList.length - 1
      }

      if (['ArrowDown', 'ArrowUp'].includes(eventKeyboard.key)) {
        itemsList.forEach((item: HTMLDivElement) => {
          item.removeAttribute('data-autocomplete-item-hover')
        })
        itemsList[currentItems].setAttribute('data-autocomplete-item-hover', 'true')
        itemSelected = itemsList[currentItems].textContent
      }

      if (eventKeyboard.key === 'Enter' && itemSelected.trim().length > 0) {
        inputAutocomplete.value = itemSelected
        onBlur()
      }
    })

    // on blur
    // set timeout for click item before blur input
    inputAutocomplete.addEventListener('blur', () => {
      setTimeout(() => onBlur(), 100)
    })
    
    autocompleteConainterElmt.setAttribute(`data-autocomplete-initialized`, 'true')
  })
}

import clsx from 'clsx'
import React from 'react'

import { Item } from '@/components/autocomplete/AutoCompleteProps'
import { AutoCompleteItemProps } from '@/components/autocomplete/item/AutoCompleteItemProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * AutoCompleteItem Component
 * @param suggestionSelected {Function} select item
 * @param active {boolean} isActive
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 */
const AutoCompleteItem = <T extends string | Item<unknown>>({
  children,
  suggestionSelected,
  testId,
  item,
  active,
}: AutoCompleteItemProps<T>): JSX.Element => {
  const { styled } = useTrilogyContext()
  const [isActive, setIsActive] = React.useState(false)

  return (
    <div
      onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
      role='listitem'
      data-testid={testId}
      className={hashClass(clsx('autocomplete-item', active && is('active'), isActive && is('active')))}
      onClick={() => (suggestionSelected ? suggestionSelected(item) : '')}
    >
      {children}
    </div>
  )
}

export default AutoCompleteItem

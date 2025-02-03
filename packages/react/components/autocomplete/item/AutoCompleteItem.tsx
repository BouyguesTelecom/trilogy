import { Item } from '@/components/autocomplete/AutoCompleteProps'
import { AutoCompleteItemProps } from '@/components/autocomplete/item/AutoCompleteItemProps'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import React from 'react'

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
  id,
}: AutoCompleteItemProps<T>): JSX.Element => {
  return (
    <div
      id={id}
      role='listitem'
      data-testid={testId}
      className={hashClass(clsx('autocomplete-item', active && is('active')))}
      onClick={suggestionSelected ? () => suggestionSelected(item) : undefined}
    >
      {children}
    </div>
  )
}

export default AutoCompleteItem

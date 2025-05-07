import { Item } from '@/components/autocomplete/AutoCompleteProps'
import { AutoCompleteItemProps } from '@/components/autocomplete/item/AutoCompleteItemProps'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { useAutocompleteItem } from '../hooks/useAutocompleteItem'

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
  const { isActive, onMouseOut, onMouseOver } = useAutocompleteItem()

  return (
    <div
      id={id}
      role='listitem'
      data-testid={testId}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={hashClass(clsx('autocomplete-item', active && is('active'), isActive && is('active')))}
      onClick={suggestionSelected ? () => suggestionSelected(item) : undefined}
    >
      {children}
    </div>
  )
}

export default AutoCompleteItem

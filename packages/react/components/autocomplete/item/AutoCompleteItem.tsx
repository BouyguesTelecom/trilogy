import clsx from 'clsx'
import * as React from 'react'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import { Item } from '../AutoCompleteProps'
import { AutoCompleteItemProps } from './AutoCompleteItemProps'

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
      className={hashClass(styled, clsx('autocomplete-item', active && is('active'), isActive && is('active')))}
      onClick={() => (suggestionSelected ? suggestionSelected(item) : '')}
    >
      {children}
    </div>
  )
}

export default AutoCompleteItem

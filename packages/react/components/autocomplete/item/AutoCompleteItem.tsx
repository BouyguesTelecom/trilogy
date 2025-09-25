import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import { is } from '@/services/index'
import clsx from 'clsx'
import * as React from 'react'
import { Item } from '../AutoCompleteProps'
import { AutoCompleteItemProps } from './AutoCompleteItemProps'

/**
 * AutoCompleteItem Component
 * @param suggestionSelected {Function} select item
 * @param active {boolean} isActive
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additional CSS Classes
 */
const AutoCompleteItem = <T extends string | Item<unknown>>({
  children,
  suggestionSelected,
  testId,
  item,
  active,
  id,
}: AutoCompleteItemProps<T>): JSX.Element => {
  const { styled } = useTrilogyContext()
  const [isActive, setIsActive] = React.useState(false)

  return (
    <div
      id={id}
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

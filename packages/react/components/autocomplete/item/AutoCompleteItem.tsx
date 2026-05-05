import clsx from 'clsx'
import * as React from 'react'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import { Item } from '../AutoCompleteProps'
import { AutoCompleteItemProps } from './AutoCompleteItemProps'

/**
 * AutoCompleteItem Component
 * @param item {string | Item} item value
 * @param testId {string} Test Id for Test Integration
 * - ------------------ WEB PROPERTIES -----------------------
 * @param suggestionSelected {Function} select item
 * @param active {boolean} isActive
 * @param children {ReactNode} Children
 * @param id {string} Custom id attribute
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param onSelect {Function} Callback when selecting an item
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

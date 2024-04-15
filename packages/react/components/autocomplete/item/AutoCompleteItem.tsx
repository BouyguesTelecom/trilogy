import React from 'react'
import { AutoCompleteItemProps } from './AutoCompleteItemProps'
import clsx from 'clsx'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../../context/index'
import { is } from '../../../services/classify'
import { Item } from '../AutoCompleteProps'

/**
 * AutoCompleteItem Component
 * @param suggestionSelected {Function} select item
 * @param active {boolean} isActive
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 */
const AutoCompleteItem = <T extends string | Item<unknown>>({
  key,
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
      key={key}
      className={hashClass(styled, clsx('autocomplete-item', active && is('active'), isActive && is('active')))}
      onClick={() => (suggestionSelected ? suggestionSelected(item) : '')}
    >
      {children}
    </div>
  )
}

export default AutoCompleteItem

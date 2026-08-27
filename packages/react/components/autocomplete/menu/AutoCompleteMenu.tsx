import clsx from 'clsx'
import * as React from 'react'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/helpers/classify'
import { AutoCompleteMenuProps } from '@/components/autocomplete/menu/AutoCompleteMenuProps'

/**
 * AutoCompleteMenu Component
 * @param children {ReactNode} Children
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additional CSS Classes
 * @param absolute {boolean} Absolute position for Menu
 * @param fullwidth {boolean} Fullwidth size for Menu
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param suggestions {Array} Suggestions list for AutoComplete
 * @param handleSelectItem {Function} Callback when selecting an item
 */
const AutoCompleteMenu = ({
  children,
  className,
  id,
  absolute,
  fullwidth,
  testId,
}: AutoCompleteMenuProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div
      id={id}
      role='list'
      data-testid={testId}
      className={hashClass(
        styled,
        clsx('autocomplete-menu', absolute && is('absolute'), fullwidth && is('fullwidth'), className),
      )}
    >
      {children}
    </div>
  )
}

export default AutoCompleteMenu

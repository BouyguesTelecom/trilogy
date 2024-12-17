import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { AutoCompleteMenuProps } from './AutoCompleteMenuProps'

/**
 * AutoCompleteMenu Component
 * @param children {ReactNode} Children
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param absolute {boolean} Absolute position for Menu
 * @param fullwidth {boolean} Fullwidth size for Menu
 */
const AutoCompleteMenu = ({
  children,
  className,
  id,
  absolute,
  fullwidth,
  testId,
}: AutoCompleteMenuProps): JSX.Element => {
  return (
    <div
      id={id}
      role='list'
      data-testid={testId}
      className={hashClass(
        clsx('autocomplete-menu', absolute && is('absolute'), fullwidth && is('fullwidth'), className),
      )}
    >
      {children}
    </div>
  )
}

export default AutoCompleteMenu

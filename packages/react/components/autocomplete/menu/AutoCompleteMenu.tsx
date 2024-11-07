import clsx from 'clsx'
import * as React from 'react'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import { AutoCompleteMenuProps } from './AutoCompleteMenuProps'

/**
 * AutoCompleteMenu Component
 * @param children {ReactNode} Children
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param absolute {boolean} Absolute position for Menu
 * @param fullwidth {boolean} Fullwidth size for Menu
 */
const AutoCompleteMenu = ({ children, className, id, absolute, fullwidth, testId }: AutoCompleteMenuProps): JSX.Element => {
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

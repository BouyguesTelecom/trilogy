import React from 'react'
import { AutoCompleteMenuProps } from './AutoCompleteMenuProps'
import clsx from 'clsx'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../../context/index'
import { is } from '../../../services/classify'

/**
 * AutoCompleteMenu Component
 * @param children {ReactNode} Children
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param absolute {boolean} Absolute position for Menu
 * @param fullwidth {boolean} Fullwidth size for Menu
 */
const AutoCompleteMenu = ({ children, className, absolute, fullwidth, testId }: AutoCompleteMenuProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div
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

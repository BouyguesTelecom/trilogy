import clsx from 'clsx'
import React from 'react'

import { AutoCompleteMenuProps } from '@/components/autocomplete/menu/AutoCompleteMenuProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'

/**
 * AutoCompleteMenu Component
 * @param children {ReactNode} Children
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param absolute {boolean} Absolute position for Menu
 * @param fullwidth {boolean} Fullwidth size for Menu
 */
const AutoCompleteMenu = ({ children, className, absolute, fullwidth, testId }: AutoCompleteMenuProps): JSX.Element => {
  return (
    <div
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

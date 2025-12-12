import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { DropdownProps, DropdownRef } from './DropdownProps'

/**
 * Dropdown Component - Wrapper for dropdown menu
 * @param children {React.ReactNode} Children (DropdownItem and DropdownGroup)
 * @param isActive {boolean} Dropdown active/open state
 * @param className {string} Additional CSS classes
 * @param testId {string} Test ID
 */
const Dropdown = React.forwardRef<DropdownRef, DropdownProps>(
  (
    {
      children,
      isActive,
      className,
      testId,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
      clsx(
        'dropdown',
        isActive && is('active'),
        className,
      ),
    )

    return (
      <div
        ref={ref}
        className={classes}
        data-testid={testId}
        {...others}
      >
        <div className={hashClass(styled, 'dropdown-menu')}>
          <div className={hashClass(styled, 'dropdown-content')}>
            {children}
          </div>
        </div>
      </div>
    )
  },
)

Dropdown.displayName = ComponentName.Dropdown
export default Dropdown

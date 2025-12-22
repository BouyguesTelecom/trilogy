import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { DropdownGroupProps, DropdownGroupRef } from './DropdownGroupProps'

/**
 * DropdownGroup Component
 * @param children {React.ReactNode} Children
 * @param hideSeparator {boolean} Hide separator at the top of the group
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param testId {string} Test id
 */
const DropdownGroup = React.forwardRef<DropdownGroupRef, DropdownGroupProps>(
  (
    {
      className,
      id,
      children,
      hideSeparator,
      testId,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
      clsx(
        'dropdown-group',
        hideSeparator && is('no-separator'),
        className,
      ),
    )

    return (
      <div
        ref={ref}
        id={id}
        className={classes}
        role="group"
        data-testid={testId}
        {...others}
      >
        {children}
      </div>
    )
  },
)

DropdownGroup.displayName = ComponentName.DropdownGroup
export default DropdownGroup

import * as React from 'react'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import { DropdownTriggerProps, DropdownTriggerRef } from './DropdownTriggerProps'

/**
 * DropdownTrigger Component
 * Wrapper component that makes its children clickable to trigger dropdown toggle
 * @param children {React.ReactNode} Children - The trigger element (Button, etc.)
 * @param onClick {Function} Click handler for toggling dropdown
 * @param className {string} Additional CSS classes
 * @param testId {string} Test ID
 */
const DropdownTrigger = React.forwardRef<DropdownTriggerRef, DropdownTriggerProps>(
  (
    {
      children,
      onClick,
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
        className,
      ),
    )

    return (
      <div
        ref={ref}
        className={classes}
        onClick={onClick}
        data-testid={testId}
        {...others}
      >
        {children}
      </div>
    )
  },
)

DropdownTrigger.displayName = ComponentName.DropdownTrigger
export default DropdownTrigger

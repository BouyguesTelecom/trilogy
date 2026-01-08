import * as React from 'react'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import { useDropdownContext } from '../context'
import { DropdownTriggerProps, DropdownTriggerRef } from './DropdownTriggerProps'

/**
 * DropdownTrigger Component
 * Wrapper component that makes its children clickable to trigger dropdown toggle
 * Automatically manages the dropdown state when used within a DropdownProvider
 * @param children {React.ReactNode} Children - The trigger element (Button, etc.)
 * @param onClick {Function} Optional additional click handler
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

    let contextState: ReturnType<typeof useDropdownContext> | null = null

    try {
      contextState = useDropdownContext()
    } catch {
      contextState = null
    }

    const classes = hashClass(
      styled,
      clsx(
        'dropdown-trigger',
        className,
      ),
    )

    const handleClick = (event: React.MouseEvent) => {
      if (contextState) {
        contextState.toggle()
      }
      onClick?.(event as any)
    }

    const enhancedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        if (!child.props.onClick) {
          return React.cloneElement(child, {
            onClick: (e: React.MouseEvent) => {
              e.preventDefault()
              e.stopPropagation()
              handleClick(e)
            }
          })
        }
        return React.cloneElement(child, {
          onClick: (e: React.MouseEvent) => {
            child.props.onClick?.(e)
            if (!e.defaultPrevented) {
              handleClick(e)
            }
          }
        })
      }
      return child
    })

    return (
      <div
        ref={ref}
        className={classes}
        onClick={handleClick}
        data-testid={testId}
        {...others}
      >
        {enhancedChildren}
      </div>
    )
  },
)

DropdownTrigger.displayName = ComponentName.DropdownTrigger
export default DropdownTrigger

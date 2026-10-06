import { Children, MouseEvent as ReactMouseEvent, ReactElement, cloneElement, forwardRef, isValidElement } from 'react'
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
 * @param children {ReactNode} Children - The trigger element (Button, etc.)
 * @param onClick {Function} Optional additional click handler
 * @param className {string} Additional CSS classes
 * @param testId {string} Test ID
 */
const DropdownTrigger = forwardRef<DropdownTriggerRef, DropdownTriggerProps>(
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

    const handleClick = (event: ReactMouseEvent) => {
      if (contextState) {
        contextState.toggle()
      }
      onClick?.(event as any)
    }

    const enhancedChildren = Children.map(children, (child) => {
      if (isValidElement(child)) {
        if (!child.props.onClick) {
          return cloneElement(child as ReactElement<any>, {
            onClick: (e: ReactMouseEvent) => {
              e.preventDefault()
              e.stopPropagation()
              handleClick(e)
            }
          } as any)
        }
        return cloneElement(child as ReactElement<any>, {
          onClick: (e: ReactMouseEvent) => {
            child.props.onClick?.(e)
            if (!e.defaultPrevented) {
              handleClick(e)
            }
          }
        } as any)
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


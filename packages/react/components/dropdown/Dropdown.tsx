import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { DropdownProvider, useDropdownContext } from './context'
import { DropdownProps, DropdownRef } from './DropdownProps'
import DropdownTrigger from './trigger/DropdownTrigger'

/**
 * Dropdown Component - Wrapper for dropdown menu with automatic state management
 * @param children {React.ReactNode} Children (DropdownTrigger, DropdownItem and DropdownGroup)
 * @param isActive {boolean} Dropdown active/open state (for manual control)
 * @param defaultOpen {boolean} Initial open state (for automatic control)
 * @param onToggle {Function} Callback when dropdown state changes (for automatic control)
 * @param className {string} Additional CSS classes
 * @param testId {string} Test ID
 */
const Dropdown = React.forwardRef<DropdownRef, DropdownProps>(
  (
    {
      children,
      isActive,
      defaultOpen,
      onToggle,
      className,
      testId,
      ...others
    },
    ref,
  ): JSX.Element => {
    const hasDropdownTrigger = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === DropdownTrigger
    )
    const useAutomaticTrigger = defaultOpen !== undefined || onToggle !== undefined || hasDropdownTrigger

    if (useAutomaticTrigger) {
      const triggerChildren: React.ReactNode[] = []
      const contentChildren: React.ReactNode[] = []

      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type === DropdownTrigger) {
          triggerChildren.push(child)
        } else {
          contentChildren.push(child)
        }
      })

      return (
        <DropdownProvider defaultOpen={defaultOpen} onToggle={onToggle}>
          <div ref={ref} className={className} data-testid={testId} {...others}>
            {triggerChildren}
            <DropdownContent>
              {contentChildren}
            </DropdownContent>
          </div>
        </DropdownProvider>
      )
    }

    // Without provider
    return (
      <DropdownContent
        ref={ref}
        isActive={isActive}
        className={className}
        testId={testId}
        {...others}
      >
        {children}
      </DropdownContent>
    )
  },
)

/**
 * Internal Dropdown Content Component
 */
const DropdownContent = React.forwardRef<DropdownRef, DropdownProps>(
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

    // Try to get context state, fallback to prop if not in provider
    let contextState: ReturnType<typeof useDropdownContext> | null = null
    try {
      contextState = useDropdownContext()
    } catch {
      // Not in a DropdownProvider, use prop
      contextState = null
    }

    const finalIsActive = contextState ? contextState.isOpen : isActive


    const classes = hashClass(
      styled,
      clsx(
        'dropdown',
        finalIsActive && is('active'),
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

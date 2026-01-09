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
 * Internal Dropdown Content Component that uses the context
 */
const DropdownContent = React.forwardRef<DropdownRef, Omit<DropdownProps, 'defaultOpen' | 'onToggle'>>(
  (
    {
      children,
      className,
      testId,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()
    const dropdownRef = React.useRef<HTMLDivElement>(null)
    const menuRef = React.useRef<HTMLDivElement>(null)

    const hasDropdownTrigger = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === DropdownTrigger
    )

    const { isOpen } = useDropdownContext()

    React.useEffect(() => {
      if (!isOpen || !dropdownRef.current || !menuRef.current) return

      const dropdown = dropdownRef.current
      const menu = menuRef.current

      const checkPosition = () => {
        const rect = dropdown.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const spaceBelow = viewportHeight - rect.bottom - 8
        const spaceAbove = rect.top - 8
        const menuHeight = 300

        if (spaceBelow < menuHeight && spaceAbove >= menuHeight) {
          menu.setAttribute('data-position', 'upward')
        } else {
          menu.removeAttribute('data-position')
        }
      }

      requestAnimationFrame(checkPosition)
    }, [isOpen])

    const classes = hashClass(
      styled,
      clsx(
        'dropdown',
        isOpen && is('active'),
        className,
      ),
    )

    const triggerChildren: React.ReactNode[] = []
    const contentChildren: React.ReactNode[] = []

    if (hasDropdownTrigger) {
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type === DropdownTrigger) {
          triggerChildren.push(child)
        } else {
          contentChildren.push(child)
        }
      })
    }

    return (
      <div
        ref={(node) => {
          if (dropdownRef.current !== node) {
            (dropdownRef as React.MutableRefObject<HTMLDivElement | null>).current = node
          }
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
          }
        }}
        className={classes}
        data-testid={testId}
        {...others}
      >
        {hasDropdownTrigger ? triggerChildren : null}
        <div ref={menuRef} className={hashClass(styled, 'dropdown-menu')}>
          <div className={hashClass(styled, 'dropdown-content')}>
            {hasDropdownTrigger ? contentChildren : children}
          </div>
        </div>
      </div>
    )
  },
)

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
    const useTrigger = defaultOpen !== undefined || onToggle !== undefined || hasDropdownTrigger
    const isManualMode = !useTrigger && isActive !== undefined

    const providerDefaultOpen = isManualMode ? isActive : defaultOpen

    return (
      <DropdownProvider defaultOpen={providerDefaultOpen} onToggle={onToggle}>
        <DropdownContent
          ref={ref}
          className={className}
          testId={testId}
          {...others}
        >
          {children}
        </DropdownContent>
      </DropdownProvider>
    )
  },
)

Dropdown.displayName = ComponentName.Dropdown
export default Dropdown

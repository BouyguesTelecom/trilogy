import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { ComponentName } from '../enumsComponentsName'
import { DropdownProps, DropdownRef } from './DopdownProps'

const Dropdown = React.forwardRef<DropdownRef, DropdownProps>(
  ({ className, id, trigger, children, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    const [visible, setVisible] = useState<boolean>(false)
    const classes = hashClass(styled, clsx('dropdown', className))
    const classesContent = hashClass(styled, clsx('dropdown-content', visible && 'open'))
    const portalClasses = hashClass(styled, 'dropdown-portal')

    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (visible) {
        const focusableElements = getFocusableElements(contentRef.current)
        if (focusableElements.length > 0) {
          focusableElements[0].focus()
        }

        let currentIndex = 0

        const handleKeyDown = (event: KeyboardEvent) => {
          switch (event.key) {
            case 'ArrowDown':
              event.preventDefault()
              currentIndex = (currentIndex + 1) % focusableElements.length
              focusableElements[currentIndex].focus()
              break
            case 'ArrowUp':
              event.preventDefault()
              currentIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length
              focusableElements[currentIndex].focus()
              break
            case 'Enter':
            case ' ':
              event.preventDefault()
              focusableElements[currentIndex].click()
              break
            case 'Tab':
            case 'Escape':
              setVisible(false)
              break
            default:
              break
          }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
          document.removeEventListener('keydown', handleKeyDown)
        }
      }
    }, [visible])

    const getFocusableElements = (element: HTMLElement | null): HTMLElement[] => {
      if (!element) return []
      return Array.from(
        element.querySelectorAll(
          'a:not(:disabled), button:not(:disabled), input:not(:disabled), [tabindex]:not([tabindex="-1"])',
        ),
      ) as HTMLElement[]
    }

    return (
      <>
        <div ref={ref} id={id} className={classes} {...others}>
          {trigger && React.cloneElement(trigger as React.ReactElement, { onClick: () => setVisible(true) })}
          <div ref={contentRef} className={classesContent}>
            {children}
          </div>
        </div>
        {visible &&
          ReactDOM.createPortal(
            <div role='presentation' className={portalClasses} onClick={() => setVisible(false)} />,
            document.body,
          )}
      </>
    )
  },
)

Dropdown.displayName = ComponentName.Dropdown
export default Dropdown

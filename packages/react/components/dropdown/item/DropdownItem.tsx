import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { DropdownItemProps, DropdownItemRef } from './DropdownItemProps'

/**
 * DropdownItem Component
 * @param children {React.ReactNode} Children
 * @param iconName {string} Icon displayed on the left of the text
 * @param active {boolean} Active/selected item state
 * @param disabled {boolean} Disabled item state
 * @param onSelect {Function} Callback called when item is selected
 */
const DropdownItem = React.forwardRef<DropdownItemRef, DropdownItemProps>(
  (
    {
      children,
      iconName,
      active,
      disabled,
      onSelect,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
      clsx(
        'dropdown-item',
        active && is('active'),
        disabled && is('disabled'),
      ),
    )

    const handleClick = (e: React.MouseEvent) => {
      if (disabled) {
        e.preventDefault()
        return
      }

      if (onSelect) {
        onSelect()
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        if (onSelect) {
          onSelect()
        }
      }
    }

    return (
      <button
        ref={ref as React.RefObject<HTMLButtonElement>}
        type="button"
        className={classes}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-disabled={disabled}
        role="menuitem"
        tabIndex={disabled ? -1 : 0}
        {...others}
      >
        {iconName && (
          <span className={hashClass(styled, clsx('icon', 'is-smaller'))}>
            <i className={`tri-${iconName}`} />
          </span>
        )}
        {children}
      </button>
    )
  },
)

DropdownItem.displayName = ComponentName.DropdownItem
export default DropdownItem

import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/index'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { ChipsProps, ChipsRef } from './ChipsProps'

/**
 * Chips Component - has to be in a ChipsList component
 * @param children {string} Chips content
 * @param id {string} Chips id
 * @param onClick {Function} onClick Event for all Chips
 * @param active {boolean} active Render Chips Active
 * @param disabled {boolean} Disabled chips
 *  * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param testId {string} Test Id for Test Integration
 * @param others
 */
const Chips = React.forwardRef<ChipsRef, ChipsProps>(
  ({ className, onClick, children, active, disabled, id, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('chips', active && is('active'), className))

    return (
      <button
        ref={ref}
        {...{ disabled: disabled }}
        aria-disabled={disabled}
        id={id}
        aria-pressed={!!active}
        className={classes}
        onClick={(e) => {
          onClick?.(e)
        }}
        {...others}
      >
        {children}
      </button>
    )
  },
)

Chips.displayName = ComponentName.Chips
export default Chips

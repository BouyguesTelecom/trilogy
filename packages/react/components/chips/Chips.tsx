import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'
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
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 * @param others
 */
const Chips = React.forwardRef<ChipsRef, ChipsProps>(
  ({ className, children, active, disabled, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('chips', active && is('active'), className))

    return (
      <button
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        aria-pressed={!!active}
        className={classes}
        {...others}
      >
        {children}
      </button>
    )
  },
)

Chips.displayName = ComponentName.Chips
export default Chips

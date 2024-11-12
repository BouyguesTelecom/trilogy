import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { ChipsProps } from './ChipsProps'

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
const Chips = ({ className, onClick, children, active, disabled, id, testId, ...others }: ChipsProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(clsx('chips', active && is('active'), className))

  return (
    <button
      {...{ disabled: disabled }}
      aria-disabled={disabled}
      data-testid={testId}
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
}

export default Chips

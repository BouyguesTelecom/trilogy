import clsx from 'clsx'
import React from 'react'

import { ChipsProps } from '@/components/chips/ChipsProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

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
const Chips = (
  { className, onClick, children, active, disabled, id, testId, ...others }: ChipsProps,
  ref: React.Ref<HTMLButtonElement>,
): JSX.Element => {
  const classes = hashClass(clsx('chips', active && is('active'), className))

  return (
    <button
      {...{ disabled: disabled }}
      aria-disabled={disabled}
      data-testid={testId}
      id={id}
      aria-pressed={!!active}
      className={classes}
      onClick={onClick && onClick}
      ref={ref}
      {...others}
    >
      {children}
    </button>
  )
}

export default React.forwardRef(Chips)

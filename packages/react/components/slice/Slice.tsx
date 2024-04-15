import React from 'react'
import { SliceProps } from './SliceProps'
import { has, is } from '../../services/classify'
import { hashClass } from '../../helpers/hashClassesHelpers'
import clsx from 'clsx'
import { useTrilogyContext } from '../../context/index'

/**
 * Slice Component
 * @param children {React.ReactNode} Children for Slice
 * @param onClick {Function} onClick Event Slice
 * ------------------ WEB PROPERTIES ---------------------
 * @param disabled {boolean} Disabled Slice
 * @param longCta {boolean} Change to the CTA line
 * @param selectable {boolean} Apply Field, Control classes wrapped
 * @param className {string} Additionnal CSS Classes
 */
const Slice = ({
  children,
  className,
  onClick,
  disabled,
  longCta,
  selectable,
  testId,
  ...others
}: SliceProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('slice', disabled && is('disabled'), longCta && has('long-cta'), className))

  if (selectable) {
    return (
      <div data-testid={testId} onClick={onClick && onClick} className={classes} {...others}>
        <div className={hashClass(styled, clsx('field'))}>
          <div className={hashClass(styled, clsx('control'))}>{children}</div>
        </div>
      </div>
    )
  }

  return (
    <div onClick={onClick && onClick} className={classes} {...others}>
      {children}
    </div>
  )
}

export default Slice

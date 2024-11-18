import * as React from 'react'
import { RadioListWebProps } from './RadioListProps'
import { is } from '@/services'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { getJustifiedClassName } from '@/objects'

/**
 * Radio List Component
 * @param children {ReactNode} RadioList children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param align {boolean} align radios
 * @param verticalDesktop {boolean} Verical radios
 * @param horizontalMobile {boolean} espect mobile screen
 */
const RadioList = ({
  className,
  id,
  align,
  horizontalMobile,
  verticalDesktop,
  ...others
}: RadioListWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div
      id={id}
      className={hashClass(
        styled,
        clsx(
          'radios',
          className,
          align && is(getJustifiedClassName(align)),
          horizontalMobile && is('horizontal-mobile'),
          verticalDesktop && is('vertical-desktop'),
        ),
      )}
      {...others}
    />
  )
}

export default RadioList

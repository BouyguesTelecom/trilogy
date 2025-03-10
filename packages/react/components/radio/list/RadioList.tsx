import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getJustifiedClassName } from '@/objects'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { RadioListRef, RadioListWebProps } from './RadioListProps'

/**
 * Radio List Component
 * @param children {ReactNode} RadioList children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param align {boolean} align radios
 * @param verticalDesktop {boolean} Verical radios
 * @param horizontalMobile {boolean} espect mobile screen
 */
const RadioList = React.forwardRef<RadioListRef, RadioListWebProps>(
  ({ className, id, align, horizontalMobile, verticalDesktop, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()

    return (
      <div
        ref={ref}
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
  },
)

export default RadioList

import { RadioListWebProps } from '@/components/radio/list/RadioListProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getJustifiedClassName } from '@/objects/facets/Justifiable'
import { is } from '@/services'
import clsx from 'clsx'
import React from 'react'

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
  return (
    <div
      id={id}
      className={hashClass(
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

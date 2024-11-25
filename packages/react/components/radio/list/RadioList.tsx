import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { RadioListWebProps } from '@/components/radio/list/RadioListProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/services/classify'

/**
 * Radio List Component
 * @param children {ReactNode} RadioList children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param centered {boolean} Centered radios
 * @param vertical {boolean} Verical radios
 * @param isMobile {boolean} espect mobile screen
 */
const RadioList = React.forwardRef(
  (
    { className, centered, isMobile, vertical, ...others }: RadioListWebProps,
    ref: React.Ref<HTMLDivElement>,
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        className={hashClass(
          clsx(
            'radios',
            className,
            centered && has('text-centered'),
            isMobile && is('mobile'),
            vertical && is('vertical'),
          ),
        )}
        {...others}
      />
    )
  },
)

RadioList.displayName = ComponentName.RadioList
export default RadioList

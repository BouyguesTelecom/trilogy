import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers'
import { isRequiredChild } from '@/helpers/require'
import { getJustifiedClassName } from '@/objects'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { RadioListRef, RadioListWebProps } from './RadioListProps'

/**
 * RadioList Component
 * @param children {ReactNode} CheckboxList children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param align {boolean} align radios
 * @param verticalDesktop {boolean} Vertical radios
 * @param horizontalMobile {boolean} Expect mobile screen
 * @param accessibilityLabelledBy {string} aria-labelledby attribute
 */
const RadioList = React.forwardRef<RadioListRef, RadioListWebProps>(
  (
    { className, id, align, horizontalMobile, verticalDesktop, accessibilityLabelledBy, children, ...others },
    ref,
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        id={id}
        role='radiogroup'
        aria-labelledby={accessibilityLabelledBy}
        aria-required={isRequiredChild(children) ? 'true' : undefined}
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
      >
        {children}
      </div>
    )
  },
)

RadioList.displayName = ComponentName.RadioList
export default RadioList

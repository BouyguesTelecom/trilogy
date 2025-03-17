import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getJustifiedClassName } from '@/objects'
import { is } from '@/services'
import { isRequiredChild } from '@/helpers/require'
import clsx from 'clsx'
import * as React from 'react'
import { CheckboxListRef, CheckboxListWebProps } from './CheckboxListProps'

/**
 * Checkbox List Component
 * @param children {ReactNode} CheckboxList children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param align {boolean} align Checkboxes
 * @param verticalDesktop {boolean} Vertical Checkboxes
 * @param horizontalMobile {boolean} Expect mobile screen
 * @param accessibilityLabelledBy {string} aria-labelledby attribute
 */
const CheckboxList = React.forwardRef<CheckboxListRef, CheckboxListWebProps>(
  ({ className, id, align, horizontalMobile, verticalDesktop, accessibilityLabelledBy, children, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()

    return (
      <div
        ref={ref}
        id={id}
        role="group"
        aria-labelledby={accessibilityLabelledBy}
        aria-required={isRequiredChild(children) ? 'true' : undefined}
        className={hashClass(
          styled,
          clsx(
            'checkboxes',
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

CheckboxList.displayName = ComponentName.CheckboxList
export default CheckboxList

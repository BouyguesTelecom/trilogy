import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getJustifiedClassName } from '@/objects'
import { is } from '@/services'
import { isRequiredChild } from '@/helpers/require'
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
  ({ className, id, align, horizontalMobile, verticalDesktop, accessibilityLabelledBy, children, label, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    const groupLabelClasses = hashClass(styled, 'group-label')

    return (
      <>
        {label && (
          <p className={groupLabelClasses}>
            {label}
          </p>
        )}
        <div
          ref={ref}
          id={id}
          role="radiogroup"
          aria-labelledby={accessibilityLabelledBy}
          aria-required={isRequiredChild(children) ? 'true' : undefined}
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
        >
          {children}
        </div>
      </>
    )
  },
)

RadioList.displayName = ComponentName.RadioList
export default RadioList

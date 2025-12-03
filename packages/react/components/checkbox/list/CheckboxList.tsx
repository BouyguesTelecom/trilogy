import { ComponentName } from '@/components/enumsComponentsName'
import { Text, TextMarkup } from '@/components/text'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import { isRequiredChild } from '@/helpers/require'
import { getJustifiedClassName } from '@/objects/index'
import { TypographyColor } from '@/objects/Typography'
import { is } from '@/services/index'
import clsx from 'clsx'
import * as React from 'react'
import { CheckboxListRef, CheckboxListWebProps } from './CheckboxListProps'

/**
 * Checkbox List Component
 * @param children {ReactNode} CheckboxList children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param align {boolean} align Checkboxes
 * @param verticalDesktop {boolean} Vertical Checkboxes
 * @param horizontalMobile {boolean} Expect mobile screen
 * @param accessibilityLabelledBy {string} aria-labelledby attribute
 */
const CheckboxList = React.forwardRef<CheckboxListRef, CheckboxListWebProps>(
  (
    { className, id, align, horizontalMobile, verticalDesktop, accessibilityLabelledBy, children, label, ...others },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()
    const groupLabelClasses = hashClass(styled, 'group-label')

    return (
      <>
        {label && (
          <p className={groupLabelClasses}>
            {label}
            {isRequiredChild(children) && (
              <Text markup={TextMarkup.SPAN} typo={TypographyColor.TEXT_ERROR}>
                {' '}
                *
              </Text>
            )}
          </p>
        )}
        <div
          ref={ref}
          id={id}
          role='group'
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
      </>
    )
  },
)

CheckboxList.displayName = ComponentName.CheckboxList
export default CheckboxList

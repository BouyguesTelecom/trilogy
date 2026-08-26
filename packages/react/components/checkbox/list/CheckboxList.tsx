import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/helpers/classify'
import { isRequiredChild } from '@/helpers/require'
import clsx from 'clsx'
import * as React from 'react'
import { CheckboxListRef, CheckboxListWebProps } from '@/components/checkbox/list/CheckboxListProps'
import { Text, TextMarkup } from '@/components/text'
import { getJustifiedClassName } from "@/helpers/justifiable";
import { TypographyColor } from "@/interfaces/TypographyColor";

/**
 * Checkbox List Component
 * @param children {ReactNode} CheckboxList children
 * @param label {string} Label for the CheckboxList group
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param align {boolean} align Checkboxes
 * @param verticalDesktop {boolean} Vertical Checkboxes
 * @param horizontalMobile {boolean} Expect mobile screen
 * @param accessibilityLabelledBy {string} aria-labelledby attribute
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const CheckboxList = React.forwardRef<CheckboxListRef, CheckboxListWebProps>(
  (
    {
      className,
      id,
      align,
      horizontalMobile,
      verticalDesktop,
      accessibilityLabelledBy,
      children,
      label,
      testId,
      ...others
    },
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
          data-testid={testId}
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

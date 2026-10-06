import { ComponentName } from '@/components/enumsComponentsName'
import { Text, TextMarkup } from '@/components/text'
import { useTrilogyContext } from '@/context/TrilogyContext'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { isRequiredChild } from '@/helpers/require'
import { getJustifiedClassName } from '@/objects/facets/Justifiable'
import { TypographyColor } from '@/objects/Typography/TypographyColor'
import { is } from '@/services/classify'
import clsx from 'clsx'
import { forwardRef } from 'react'
import { RadioListRef, RadioListWebProps } from '@/components/radio/list/RadioListProps'

/**
 * RadioList Component
 * @param children {ReactNode} RadioList children
 * @param id {string} Custom id attribute
 * @param label {string} Group label
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param align {boolean} Align radios
 * @param verticalDesktop {boolean} Vertical radios
 * @param horizontalMobile {boolean} Expect mobile screen
 * @param accessibilityLabelledBy {string} aria-labelledby attribute
 */
const RadioList = forwardRef<RadioListRef, RadioListWebProps>(
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
          role='radiogroup'
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

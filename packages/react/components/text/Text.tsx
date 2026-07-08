import * as React from 'react'
import clsx from 'clsx'
import { TextProps, TextRef } from './TextProps'
import { TextLevels, TextMarkup, TextMarkupValues } from './TextEnum'
import { is } from '@/services/classify'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { useTrilogyContext } from '@/context/index'
import { ComponentName } from '../enumsComponentsName'

/**
 * Text Component
 * @param children {string} Text content
 * @param level {TextLevels} Text size level (1-4)
 * @param typo {TypographyColor | TypographyTransform | TypographyBold | TypographyAlign} Typography variant(s)
 * @param inverted {boolean} Inverted text color (white)
 * @param skeleton {boolean} Text loading skeleton
 * @param marginless {boolean} Remove margin after text
 * @param numberOfLines {number} Max number of lines before ellipsis
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 * @param markup {TextMarkup} HTML markup element
 */
const Text = React.forwardRef<TextRef, TextProps>(({
  level,
  markup,
  children,
  className,
  id,
  typo,
  inverted,
  skeleton,
  accessibilityLabel,
  marginless,
  numberOfLines,
  testId,
  ...others
}, ref): JSX.Element => {
  const { styled } = useTrilogyContext()

  const levelText = () => {
    if (level) {
      switch (level) {
        case TextLevels.ONE:
          return is('level-1')
        case TextLevels.TWO:
          return is('level-2')
        case TextLevels.THREE:
          return is('level-3')
        case TextLevels.FOUR:
          return is('level-4')
        default:
          return is(`level-${level}`)
      }
    }
  }

  const classes = hashClass(
    styled,
    clsx(
      'text',
      level && levelText(),
      inverted && is('inverted'),
      typo,
      skeleton && is('loading'),
      marginless && is('marginless'),
      numberOfLines && is('text-ellipsis'),
      className,
    ),
  )

  /**
   * If no markup return p with default level 1
   */
  const isCorrectMarkup = (stringMarkup: TextMarkup | TextMarkupValues) => {
    if (stringMarkup in TextMarkup || Object.values(TextMarkup).includes(stringMarkup as TextMarkup)) return true
  }

  const Tag = markup && isCorrectMarkup(markup) ? markup : 'p'

  return (
    <Tag
      data-testid={testId}
      ref={ref}
      id={id}
      style={numberOfLines ? { WebkitLineClamp: numberOfLines } : {}}
      aria-label={accessibilityLabel}
      className={classes}
      {...others}
    >
      {children}
    </Tag>
  )
})

Text.displayName = ComponentName.Text
export default Text

import * as React from 'react'
import clsx from 'clsx'
import { TextProps, TextRef } from './TextProps'
import { TextLevels, TextMarkup, TextMarkupValues } from './TextEnum'
import { is } from '@/services/classify'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { useTrilogyContext } from '@/context/index'
import { ComponentName } from '../enumsComponentsName'

/**
 * Text component
 * @param children {string} Text child
 * @param inverted {Boolean} Text white color
 * @param level {TextLevels | number} Text size : 1-4
 * @param typo {TypographyColor | TypographyTransform | TypographyBold | TypographyAlign} Typos
 * @param skeleton {Boolean} Text Skeleton
 * @param accessibilityLabel {string} Accessibility label
 * @param marginless {boolean} Removes margin after Text
 * @param numberOfLines {number} Ellipsis after limit number of lines
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param className {string} Additional css classes
 * @param markup {TextMarkup} Text markup
 * - --------------- NATIVE PROPERTIES ----------------------------------
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

import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { TitleLevels, TitleLevelValues, TitleMarkup, TitleMarkupValues } from './TitleEnum'
import { TitleProps, TitleRef } from './TitleProps'

const getTitleLevel = (level: TitleLevelValues | TitleLevels) => {
  if (level) {
    switch (level) {
      case TitleLevels.ONE:
        return is(`level-1`)
      case TitleLevels.TWO:
        return is(`level-2`)
      case TitleLevels.THREE:
        return is(`level-3`)
      case TitleLevels.FOUR:
        return is(`level-4`)
      case TitleLevels.FIVE:
        return is(`level-5`)
      case TitleLevels.SIX:
        return is(`level-6`)
      default:
        return is(`level-${level}`)
    }
  }
}

/**
 * If no markup return div with default level 1
 * key in Enum works only in TS or with number enum for JS
 * for string enum (as in this case) we need to use Object.values.includes for JS usage
 * string enum aren't reverse mapped so the first solution doesn't work
 */
const isCorrectMarkup = (stringMarkup: TitleMarkup | TitleMarkupValues) => {
  return stringMarkup in TitleMarkup || Object.values(TitleMarkup).includes(stringMarkup as TitleMarkup)
}

/**
 * Title component
 * @param children {ReactNode} Title child
 * @param level {TitleLevels | TitleLevel | number} Title size : 1-3
 * @param inverted {Boolean} Title white color
 * @param typo {TypographyColor | TypographyTransform | TypographyBold | TypographyAlign} Typos
 * @param onClick {Function} onClick Event
 * @param skeleton {Boolean} Title Skeleton
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
 * @param subtitle {boolean} Subtitle below title
 * @param overline {boolean} Overline above title
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param markup {string} h1 | h2 | h3 | h4 | h5 | h6 | p | span | div
 * @param className {string} Additionnal css classes
 * @param marginless {boolean} delete margin
 * @param htmlContent {string} Content Html In Title Component
 * - --------------- NATIVE PROPERTIES ----------------------------------
 * @param style {object} Additional styles
 */
const Title = React.forwardRef<TitleRef, TitleProps>(
  (
    {
      level = TitleLevels.ONE,
      markup,
      children,
      className,
      id,
      typo,
      skeleton,
      inverted,
      onClick,
      accessibilityLabel,
      subtitle,
      overline,
      marginless,
      ...others
    },
    ref,
  ): JSX.Element => {
    const classes = hashClass(
      clsx(
        'title',
        level && getTitleLevel(level),
        typo,
        skeleton && is('loading'),
        inverted && is('inverted'),
        marginless && is('marginless'),
        className,
      ),
    )

    const subtitleClasses = hashClass(clsx('subtitle', typo, className))
    const overlineClasses = hashClass(clsx('overline', typo, className))

    const Tag = markup && isCorrectMarkup(markup) ? markup : 'p'

    const getClassname = () => {
      if (subtitle) return subtitleClasses
      if (overline) return overlineClasses
      return classes
    }

    return (
      <Tag ref={ref} id={id} aria-label={accessibilityLabel} onClick={onClick} className={getClassname()} {...others}>
        {children}
      </Tag>
    )
  },
)

Title.displayName = ComponentName.Title
export default Title

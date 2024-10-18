import clsx from 'clsx'
import React, { forwardRef, LegacyRef } from 'react'

import { TitleLevels, TitleLevelValues, TitleMarkup, TitleMarkupValues } from '@/components/title/TitleEnum'
import { TitleProps } from '@/components/title/TitleProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

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

const TitleBase = (
  {
    level = TitleLevels.ONE,
    markup,
    children,
    className,
    typo,
    skeleton,
    inverted,
    onClick,
    testId,
    accessibilityLabel,
    subtitle,
    overline,
    marginless,
    htmlContent,
    styled,
    ...others
  }: TitleProps,
  ref?: LegacyRef<any>,
): JSX.Element => {
  const subtitleClasses = hashClass(styled, clsx('subtitle', typo, className))
  const overlineClasses = hashClass(styled, clsx('overline', typo, className))
  const Tag = markup && isCorrectMarkup(markup) ? markup : 'div'

  const classes = hashClass(
    styled,
    clsx(
      'title',
      level && getTitleLevel(level),
      typo,
      inverted && is('inverted'),
      marginless && is('marginless'),
      className,
    ),
  )

  const getClassname = () => {
    if (subtitle) return subtitleClasses
    if (overline) return overlineClasses
    return classes
  }

  return (
    <Tag
      ref={ref}
      data-testid={testId}
      aria-label={accessibilityLabel}
      onClick={onClick}
      className={getClassname()}
      {...(htmlContent && { dangerouslySetInnerHTML: { __html: htmlContent } })}
      {...others}
    >
      {children}
    </Tag>
  )
}

export default forwardRef(TitleBase)

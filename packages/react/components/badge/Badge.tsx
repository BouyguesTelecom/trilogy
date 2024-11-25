import clsx from 'clsx'
import React from 'react'

import { BadgeProps } from '@/components/badge/BadgeProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { Text, TextMarkup } from '@/components/text'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Badge Component
 * @param children {React.ReactNode} If no content add children (Icon for example)
 * @param textContent {string} Content text for badge with text, if textContent props, it will display badge with text
 * @param content {string|number} Badge content text
 * @param inverted {boolean} Inverted style for Badge
 * @param reversed {boolean} Text reversed for Badge
 * @param onClick {Function} onClick Event for Badge
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes (ONLY FOR WEB)
 */
const Badge = React.forwardRef(
  (
    { children, className, textContent, content, inverted, reversed, onClick, testId, ...others }: BadgeProps,
    ref: React.Ref<HTMLDivElement>,
  ): JSX.Element => {
    const classes = hashClass(clsx(textContent ? 'badge-and-text' : 'badge', className))

    if (textContent) {
      return (
        <div data-testid={testId} onClick={onClick} className={classes} ref={ref} {...others}>
          {!reversed && <Text markup={TextMarkup.P}>{textContent}</Text>}
          <span className={hashClass(clsx('badge', inverted && is('inverted')))}>{content || children}</span>
          {reversed && <Text markup={TextMarkup.P}>{textContent}</Text>}
        </div>
      )
    }

    return (
      <div data-testid={testId} onClick={onClick} ref={ref}>
        <Text
          className={clsx(textContent ? 'badge-and-text' : 'badge', inverted && is('inverted'), className)}
          markup={TextMarkup.SPAN}
          {...others}
        >
          {content || children}
        </Text>
      </div>
    )
  },
)
Badge.displayName = ComponentName.Badge
export default Badge

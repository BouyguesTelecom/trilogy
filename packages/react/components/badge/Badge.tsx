import * as React from 'react'
import { BadgeProps } from './BadgeProps'
import { Text, TextMarkup } from '@/components/text'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { is } from '@/services'

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
const Badge = ({
  children,
  className,
  id,
  textContent,
  content,
  inverted,
  reversed,
  onClick,
  ...others
}: BadgeProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx(textContent ? 'badge-and-text' : 'badge', className))

  if (textContent) {
    return (
      <div
        id={id}
        onClick={(e) => {
          onClick?.(e)
          e.stopPropagation()
        }}
        className={classes}
        {...others}
      >
        {!reversed && <Text markup={TextMarkup.P}>{textContent}</Text>}
        <span className={hashClass(styled, clsx('badge', inverted && is('inverted')))}>{content || children}</span>
        {reversed && <Text markup={TextMarkup.P}>{textContent}</Text>}
      </div>
    )
  }

  return (
    <div
      id={id}
      onClick={(e) => {
        onClick?.(e)
        e.stopPropagation()
      }}
    >
      <Text
        className={clsx(textContent ? 'badge-and-text' : 'badge', inverted && is('inverted'), className)}
        markup={TextMarkup.SPAN}
        {...others}
      >
        {content || children}
      </Text>
    </div>
  )
}

export default Badge

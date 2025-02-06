import React, { createContext } from 'react'
import clsx from 'clsx'
import { CardProps } from './CardProps'
import { is } from '@/services/classify'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

export const CardContext = createContext({ horizontal: false })

/**
 * Card Component
 * @param flat {boolean} Adding border for Card content
 * @param horizontal {boolean} Horizontal Card orientation
 * @param floating {boolean} Floating card
 * @param onClick {Function} onClick Event
 * @param skeleton {boolean} Loading card
 * @param reversed {boolean} Reversed card
 * @param active {boolean} Activated card
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param fullheight
 */
const Card = ({
  className,
  flat,
  horizontal,
  floating,
  skeleton,
  onClick,
  reversed,
  markup: CardComponent = 'div',
  fullheight,
  active,
  ...others
}: CardProps) => {
  const { styled } = useTrilogyContext()

  if (CardComponent === 'div' && (others.href || others.to)) {
    CardComponent = 'a'
  }

  const classes = hashClass(
    styled,
    clsx(
      'card',
      flat && !floating && is('flat'),
      horizontal && [is('horizontal'), is('vcentered')],
      floating && !flat && is('floating'),
      skeleton && is('loading'),
      reversed && is('reversed'),
      className,
      fullheight && is('fullheight'),
      active && is('active'),
      onClick && is('cursor-pointer'),
    ),
  )

  return <CardComponent onClick={onClick} className={classes} {...others} />
}
export default Card

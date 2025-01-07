import { CardProps } from '@/components/card/CardProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

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
  id,
  flat,
  horizontal,
  floating,
  skeleton,
  onClick,
  reversed,
  href,
  fullheight,
  active,
  ...others
}: CardProps) => {
  const hoverStyle: React.CSSProperties = {
    cursor: onClick ? 'pointer' : 'default',
  }

  const classes = hashClass(
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
    ),
  )

  if (href) {
    return <a id={id} href={href} onClick={onClick} {...others} className={classes} />
  }

  return <div id={id} onClick={onClick} className={classes} style={hoverStyle} {...others} />
}
export default Card

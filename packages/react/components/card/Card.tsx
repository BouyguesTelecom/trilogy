import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React, { createContext } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { CardProps, CardRef } from './CardProps'

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
const Card = React.forwardRef<CardRef, CardProps>(
  (
    {
      className,
      flat,
      horizontal,
      floating,
      skeleton,
      reversed,
      markup: CardComponent = 'div',
      fullheight,
      active,
      ...others
    },
    ref,
  ) => {
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
        others.onClick && is('cursor-pointer'),
      ),
    )

    return (
      <CardComponent ref={ref as React.Ref<HTMLDivElement>} className={classes} {...others} />
    )
  },
)

Card.displayName = ComponentName.Card
export default Card

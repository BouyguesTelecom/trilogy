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
 * @param className {string} Additional CSS Classes
 * @param fullheight
 */
const Card = React.forwardRef<CardRef, CardProps>(
  ({ className, id, flat, horizontal, floating, skeleton, reversed, fullheight, active, ...others }, ref) => {
    const { styled } = useTrilogyContext()

    const Tag = others.href || others.to ? 'a' : 'div'

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
      <Tag
        ref={ref as React.RefObject<HTMLAnchorElement> & React.RefObject<HTMLDivElement>}
        id={id}
        className={classes}
        {...others}
      />
    )
  },
)

Card.displayName = ComponentName.Card
export default Card

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
 * @param backgroundColor {TrilogyColor} Card Background Color
 * @param inverted {boolean} Inverted Card Color
 * @param floating {boolean} Floating card
 * @param onClick {Function} onClick Event
 * @param children {React.ReactNode}
 * @param skeleton {boolean} Loading card
 * @param reversed {boolean} Reversed card
 * @param active {boolean} Activated card
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param to {string} Card link
 * @param fullheight
 * @param markup {BoxMarkup} Clickable Card => CardMarkup.A Not clickable box => CardMarkup.DIV || null
 * @param backgroundSrc {string} Source of background Image
 * @param align { Alignable | AlignableValues} align content
 * @param justify {JustifiableProps.justify?} Justifiable | "JUSTIFIED_CENTER" | "JUSTIFIED_START" | "JUSTIFIED_END" | "SPACE_BETWEEN" | undefined
 * @param testId {string} Test Id for Test Integration
 */
const Card = React.forwardRef((props: CardProps) => {
  const {
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
  } = props

  const { styled } = useTrilogyContext()

  const hoverStyle: React.CSSProperties = {
    cursor: 'pointer',
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
    ),
  )

  if (href) {
    return (
      <a
        id={id}
        href={href}
        onClick={(e) => {
          // eslint-disable-next-line no-unused-expressions
          onClick?.(e)
          e.stopPropagation()
        }}
        {...others}
        className={classes}
      />
    )
  }

  return (
    <div
      id={id}
      onClick={onClick && onClick}
      className={classes}
      style={onClick && { ...hoverStyle }}
      {...others}
    />
  )
})
export default Card

import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getAlignClassName, getBackgroundClassName } from '@/objects'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import React, { createContext, useEffect, useState } from 'react'
import { CardMarkup, CardProps } from './CardProps'

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
const Card = React.forwardRef((props: CardProps, ref: React.LegacyRef<HTMLElement>) => {
  const {
    className,
    backgroundColor,
    backgroundSrc,
    inverted,
    flat,
    horizontal,
    floating,
    align,
    justify,
    skeleton,
    onClick,
    reversed,
    testId,
    markup,
    to,
    fullheight,
    active,
    ...others
  } = props

  const [isLoading, setIsLoading] = useState<boolean>(skeleton || false)
  const { styled } = useTrilogyContext()

  useEffect(() => {
    setIsLoading(skeleton || false)
  }, [skeleton])

  const hoverStyle: React.CSSProperties = {
    cursor: 'pointer',
  }

  const classes = hashClass(
    clsx(
      'card',
      backgroundColor && has(getBackgroundClassName(backgroundColor)),
      backgroundSrc && has('background'),
      (inverted && is('inverted')) || is('base'),

      flat && !floating && is('flat'),
      horizontal && [is('horizontal'), is('vcentered')],
      floating && !flat && is('floating'),
      align && is(getAlignClassName(align)),
      justify && is(justify),
      isLoading ? is('loading') : is('loaded'),
      reversed && is('reversed'),
      className,
      fullheight && is('fullheight'),
      active && is('active'),
    ),
  )

  if (markup === CardMarkup.A) {
    return (
      <a
        data-testid={testId}
        href={to}
        onClick={(e) => {
          // eslint-disable-next-line no-unused-expressions
          onClick?.(e)
          e.stopPropagation()
        }}
        {...others}
        className={classes}
        ref={ref as React.LegacyRef<HTMLAnchorElement>}
      />
    )
  }

  return (
    <div
      data-testid={testId}
      onClick={onClick && onClick}
      className={classes}
      style={onClick && { ...hoverStyle }}
      {...others}
      ref={ref as React.LegacyRef<HTMLDivElement>}
    />
  )
})
export default Card

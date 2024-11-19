import clsx from 'clsx'
import React from 'react'

import { BoxMarkup, BoxProps } from '@/components/box/BoxProps'
import { useBox } from '@/components/box/hook/useBox'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getColorClassName } from '@/objects/facets/Color'
import { has, is } from '@/services/classify'

/**
 * Box Component
 * @param children {React.ReactNode} Box child
 * @param onClick {Function} onClick Event
 * @param skeleton {boolean} Box skeleton
 * @param backgroundColor {TrilogyColor} Box Content Background Color
 * @param inverted {boolean} Inverted Box Color
 * @param highlighted {TrilogyColor} Add Left Highlight Border With Semantic Color
 * @param shadowless {boolean} Remove box shadow
 * @param flat {boolean} Flat box remove shadow and add plain border
 * @param backgroundSrc {string} Source of background Image
 * @param testId {string} Test id
 * @param hat {boolean} Box with a component Sticker props:hat
 * @param active {boolean} Activated box
 * @param headerOffset {boolean} Auto adjust height size if others box has hat
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param markup {BoxMarkup} Clickable Box => BoxMarkup.A Not clickable box => BoxMarkup.DIV || null
 * @param to {string} Box link
 * @param fullheight
 * @param others
 */
const Box = (
  {
    inverted,
    children,
    className,
    onClick,
    markup,
    skeleton,
    to,
    backgroundColor,
    highlighted,
    shadowless,
    backgroundSrc,
    testId,
    flat,
    hat,
    fullheight,
    active,
    headerOffset,
    ...others
  }: BoxProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element => {
  const { isLoading } = useBox({ skeleton })

  const classes = hashClass(
    clsx(
      'box',
      shadowless && is('shadowless'),
      className,
      backgroundColor && has(getBackgroundClassName(backgroundColor)),
      backgroundSrc && has('background'),
      inverted && is('inverted'),
      isLoading ? is('loading') : is('loaded'),
      highlighted && `${is('highlighted')} ${is(getColorClassName(highlighted))}`,
      flat && is('flat'),
      hat && has('hat'),
      headerOffset && is('header-offset'),
      fullheight && is('fullheight'),
      active && is('active'),
    ),
  )

  if (markup === BoxMarkup.A || to) {
    return (
      <a data-testid={testId} href={to} onClick={onClick && onClick} className={classes} {...others}>
        {children}
      </a>
    )
  }

  const hoverStyle: React.CSSProperties = {
    cursor: 'pointer',
  }

  return (
    <div
      ref={ref}
      style={onClick && { ...hoverStyle }}
      data-testid={testId}
      onClick={onClick && onClick}
      className={classes}
      {...others}
      {...(backgroundSrc && {
        style: {
          backgroundImage: `url(${backgroundSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: '50%',
        },
      })}
    >
      {children}
    </div>
  )
}

export default React.forwardRef(Box)

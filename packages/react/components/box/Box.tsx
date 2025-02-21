import React from 'react'
import { BoxProps } from './BoxProps'
import { has, is } from '@/services/classify'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getColorClassName } from '@/objects'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { OnClickEvent } from '@/events/OnClickEvent'

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
 * @param active {boolean} Activated box
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param fullheight
 * @param others
 */
const Box = ({
  inverted,
  children,
  className,
  onClick,
  skeleton,
  markup: BoxComponent = 'div',
  backgroundColor,
  highlighted,
  shadowless,
  backgroundSrc,
  flat,
  headerOffset,
  fullheight,
  active,
  ...others
}: BoxProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(
    styled,
    clsx(
      'box',
      shadowless && is('shadowless'),
      className,
      backgroundColor && has(getBackgroundClassName(backgroundColor)),
      backgroundSrc && has('background'),
      inverted && is('inverted'),
      skeleton && is('loading'),
      highlighted && `${is('highlighted')} ${is(getColorClassName(highlighted))}`,
      flat && is('flat'),
      headerOffset && is('offset-header'),
      fullheight && is('fullheight'),
      active && is('active'),
      onClick && is('cursor-pointer'),
    ),
  )

  if (BoxComponent === 'div' && (others.href || others.to)) {
    BoxComponent = 'a'
  }

  return (
    <BoxComponent
      onClick={onClick}
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
    </BoxComponent>
  )
}

export default Box

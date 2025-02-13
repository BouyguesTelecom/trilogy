import { hashClass } from '@/helpers'
import { getColorClassName } from '@/objects'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { BoxProps } from './BoxProps'

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
  id,
  onClick,
  skeleton,
  href,
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
  const classes = hashClass(
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
    ),
  )

  if (href) {
    return (
      <a
        id={id}
        href={href}
        onClick={onClick && onClick}
        className={classes}
        {...others}
      >
        {children}
      </a>
    )
  }

  const hoverStyle: React.CSSProperties = {
    cursor: 'pointer',
  }

  return (
    <div
      id={id}
      style={onClick && { ...hoverStyle }}
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

export default Box

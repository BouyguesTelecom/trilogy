import { hashClass } from '@/helpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getColorClassName } from '@/objects/facets/Color'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { BoxProps, BoxRef } from './BoxProps'

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
 * @param blank If href && blank : target Blank
 * @param others
 */
const Box = React.forwardRef<BoxRef, BoxProps>(
  (
    {
      inverted,
      children,
      className,
      id,
      onClick,
      skeleton,
      href,
      blank,
      backgroundColor,
      highlighted,
      shadowless,
      backgroundSrc,
      flat,
      headerOffset,
      fullheight,
      active,
      ...others
    },
    ref,
  ): JSX.Element => {
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

    const Tag = href ? 'a' : 'div'

    const hoverStyle: React.CSSProperties = {
      cursor: 'pointer',
    }

    return (
      <Tag
        ref={ref as React.RefObject<HTMLAnchorElement> & React.RefObject<HTMLDivElement>}
        id={id}
        style={onClick && { ...hoverStyle }}
        href={href}
        onClick={
          onClick
            ? (e) => {
                // eslint-disable-next-line no-unused-expressions
                onClick?.(e)
              }
            : undefined
        }
        className={classes}
        {...others}
        {...(backgroundSrc && {
          style: {
            backgroundImage: `url(${backgroundSrc})`,
          },
          ...(href &&
            blank && {
              target: '_blank',
            }),
        })}
      >
        {children}
      </Tag>
    )
  },
)
Box.displayName = ComponentName.Box
export default Box

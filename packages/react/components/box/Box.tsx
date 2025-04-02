import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getColorClassName } from '@/objects/facets/Color'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { BoxProps, BoxRef } from './BoxProps'
import {TitleMarkup, TitleMarkupValues} from "@/components/title";

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
        onClick={(e) => {
          // eslint-disable-next-line no-unused-expressions
          onClick?.(e)
        }}
        className={classes}
        {...others}
        {...(backgroundSrc && {
          style: {
            backgroundImage: `url(${backgroundSrc})`,
          },
        })}
      >
        {children}
      </Tag>
    )
  },
)
Box.displayName = ComponentName.Box
export default Box

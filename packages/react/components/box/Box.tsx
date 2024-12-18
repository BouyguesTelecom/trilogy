import React from 'react'
import { BoxProps } from './BoxProps'
import { has, is } from '@/services/classify'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getColorClassName } from '@/objects'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

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
  const { styled } = useTrilogyContext()

  const BoxComponent = href ? 'a' : 'div'

  return (
    <BoxComponent
      className={hashClass(
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
      )}
      id={id}
      style={{
        cursor: onClick ? 'pointer' : 'default',
      }}
      href={href}
      onClick={onClick}
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

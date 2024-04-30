import React, { useEffect, useState } from 'react'
import { BoxMarkup, BoxProps } from './BoxProps'
import { has, is } from '../../services/classify'
import { getBackgroundClassName } from '../../objects/atoms/Background'
import { getColorClassName } from '../../objects'
import clsx from 'clsx'
import { hashClass } from '../../helpers'
import { useTrilogyContext } from '../../context'
import {invert} from "react-native-svg/lib/typescript/elements/Shape";

/**
 * Box Component
 * @param children {React.ReactNode} Box child
 * @param onClick {Function} onClick Event
 * @param skeleton {boolean} Box skeleton
 * @param background {TrilogyColor} Box Content Background Color
 * @param leftBorder {TrilogyColor} Add Left Highlight Border With Semantic Color
 * @param shadowless {boolean} Remove box shadow
 * @param flat {boolean} Flat box remove shadow and add plain border
 * @param backgroundSrc {string} Source of background Image
 * @param testId {string} Test id
 * @param hat {boolean} Box with a component Sticker props:hat
 * @param active {boolean} Activated box
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param markup {BoxMarkup} Clickable Box => BoxMarkup.A Not clickable box => BoxMarkup.DIV || null
 * @param to {string} Box link
 * @param fullheight
 * @param others
 */
const Box = ({
  inverted,
  children,
  className,
  onClick,
  markup,
  skeleton,
  to,
  background,
  leftBorder,
  shadowless,
  backgroundSrc,
  testId,
  flat,
  hat,
  fullheight,
  active,
  ...others
}: BoxProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const [isLoading, setIsLoading] = useState<boolean>(skeleton || false)
  const classes = hashClass(
    styled,
    clsx(
      'box',
      inverted && is('inverted'),
      shadowless && is('shadowless'),
      className,
      background && has(getBackgroundClassName(background)),
      isLoading ? is('loading') : is('loaded'),
      backgroundSrc && has('background'),
      leftBorder && `${is('highlighted')} ${is(getColorClassName(leftBorder))}`,
      flat && is('flat'),
      hat && has('hat'),
      fullheight && is('fullheight'),
      active && is('active')
    ),
  )

  useEffect(() => {
    setIsLoading(skeleton || false)
  }, [skeleton])

  if (markup === BoxMarkup.A || to) {
    return (
      <a
        data-testid={testId}
        href={to}
        onClick={(e) => {
          // eslint-disable-next-line no-unused-expressions
          onClick?.(e)
        }}
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
      style={onClick && { ...hoverStyle }}
      data-testid={testId}
      onClick={(e) => {
        // eslint-disable-next-line no-unused-expressions
        onClick?.(e)
      }}
      className={classes}
      {...others}
      {...(backgroundSrc && {
        style: { backgroundImage: `url(${backgroundSrc})`, backgroundSize: 'cover', backgroundPosition: '50%' },
      })}
    >
      {children}
    </div>
  )
}

export default Box

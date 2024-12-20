import { hashClass } from '@/helpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getColorClassName, TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { has, is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { IconProps } from './IconProps'

/**
 * Icon Component
 * @param size Size of Icon
 * @param name IconName
 * @param status SUCCESS|ERROR If CircleIcon or not
 * @param circled true-false if CircleIcon
 * @param content If TextIcon use it for text
 * @param badgeContent {string} Icon with bage content
 * @param stretched {boolean} Stretched icon
 * @param color {IconColor} Custom Icon Color
 * @param backgroundColor {TrilogyColor} Custom Background color only if circled
 * @param onClick {Function} onClick Event Icon
 * @param skeleton {boolean} Icon Skeleton
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className Additionnal css classes
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 */

const Icon = ({
  className,
  id,
  size,
  name,
  circled,
  stretched,
  color,
  backgroundColor,
  onClick,
  skeleton,
  ...others
}: IconProps): JSX.Element => {
  const background =
    (backgroundColor && has(getBackgroundClassName(backgroundColor))) ||
    (circled && has(getBackgroundClassName(TrilogyColor.MAIN))) ||
    ''

  const classes = hashClass(
    clsx(
      'icon',
      stretched && is('stretched'),
      size && is(size),
      circled && is('circled'),
      circled && !color && has('text-white'),
      color && is(`${getColorClassName(color as TrilogyColorValues | TrilogyColor)}`),
      skeleton && is('loading'),
      background,
      className,
    ),
  )

  return (
    <span id={id} onClick={onClick && onClick} className={classes} {...others}>
      <i className={hashClass(clsx(name))} aria-hidden='true' />
    </span>
  )
}

export default Icon

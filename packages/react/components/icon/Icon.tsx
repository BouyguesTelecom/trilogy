import * as React from 'react'
import clsx from 'clsx'
import { IconProps } from './IconProps'
import { is } from '@/services/classify'
import { getColorClassName, TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

/**
 * Icon Component
 * @param size Size of Icon
 * @param name IconName
 * @param status SUCCESS|ERROR If CircleIcon or not
 * @param circled true-false if CircleIcon
 * @param content If TextIcon use it for text
 * @param badgeContent {string} Icon with bage content
 * @param statusPosition {IconStatusPosition} Position for icon with status (TOP|BOTTOM)
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
  status,
  circled,
  badgeContent,
  statusPosition,
  stretched,
  color,
  backgroundColor,
  onClick,
  skeleton,
  ...others
}: IconProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'icon',
      stretched && is('stretched'),
      size && is(size),
      color && is(`${getColorClassName(color as TrilogyColorValues | TrilogyColor)}`),
      skeleton && is('loading'),
      badgeContent && is('stacked'),
      className,
    ),
  )

  // Icon with badge + badge content
  if (badgeContent) {
    return (
      <span id={id} onClick={onClick && onClick} className={classes} {...others}>
        <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
        <span className={hashClass(styled, clsx('badge', is('up')))}>{badgeContent}</span>
      </span>
    )
  }

  // Stretched icon
  if (stretched) {
    return (
      <span id={id} onClick={onClick && onClick} className={classes} {...others}>
        <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
      </span>
    )
  }

  // Custom Colored Icon
  if (color) {
    return (
      <span id={id} onClick={onClick && onClick} className={classes} {...others}>
        <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
      </span>
    )
  }

  // Static default Icon
  return (
    <span id={id} onClick={onClick && onClick} className={classes} {...others}>
      <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
    </span>
  )
}

export default Icon

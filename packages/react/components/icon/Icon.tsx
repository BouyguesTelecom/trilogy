import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getColorClassName, TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { IconProps, IconRef } from './IconProps'
import { getJustifySelfClassName } from '@/objects/facets/Justifiable'

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
 * @param className Additional css classes
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 */

const Icon = React.forwardRef<IconRef, IconProps>(
  (
    { className, id, size, name, circled, stretched, color, backgroundColor, onClick, skeleton, align, ...others },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const background =
      (backgroundColor && has(getBackgroundClassName(backgroundColor))) ||
      (circled && has(getBackgroundClassName(TrilogyColor.MAIN))) ||
      ''

    const classes = hashClass(
      styled,
      clsx(
        'icon',
        stretched && is('stretched'),
        size && is(size),
        circled && is('circled'),
        circled && !color && has('text-white'),
        color && is(`${getColorClassName(color as TrilogyColorValues | TrilogyColor)}`),
        skeleton && is('loading'),
        align && clsx(is('flex'), is(getJustifySelfClassName(align))),
        background,
        className,
      ),
    )

    return (
      <span id={id} onClick={onClick && onClick} className={classes} {...others} ref={ref}>
        <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
      </span>
    )
  },
)

Icon.displayName = ComponentName.Icon
export default Icon

import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { has, is } from '@/helpers/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '@/components/enumsComponentsName'
import { IconProps, IconRef } from '@/components/icon/IconProps'
import { getBackgroundClassName } from '@/helpers/background'
import { getColorClassName } from '@/helpers/color'
import { getJustifySelfClassName } from '@/helpers/justifiable'
import { TrilogyColor, TrilogyColorValues } from '@/interfaces/Color'

/**
 * Icon Component
 * @param name {IconName} Icon name
 * @param size {IconSize} Size of Icon
 * @param circled {boolean} Display icon with circular background
 * @param stretched {boolean} Stretched icon
 * @param color {IconColor} Custom Icon Color
 * @param backgroundColor {TrilogyColor} Custom Background color (only if circled)
 * @param badgeContent {string} Icon with badge content
 * @param onClick {Function} onClick Event Icon
 * @param skeleton {boolean} Icon Skeleton
 * @param testId {string} Test Id for Test Integration
 * @param align { Alignable | AlignableValues} align content
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 */
const Icon = React.forwardRef<IconRef, IconProps>(
  (
    {
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
      align,
      testId,
      ...others
    },
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
      <span id={id} onClick={onClick && onClick} className={classes} data-testid={testId} {...others} ref={ref}>
        <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
      </span>
    )
  },
)

Icon.displayName = ComponentName.Icon
export default Icon

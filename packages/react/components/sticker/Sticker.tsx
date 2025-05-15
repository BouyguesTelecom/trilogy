import React from 'react'
import clsx from 'clsx'
import { StickerProps, StickerRef } from './StickerProps'
import { is } from '@/services/classify'
import { getVariantClassName } from '@/objects'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { Icon, IconSize } from '@/components/icon'
import { ComponentName } from '../enumsComponentsName'

/**
 * Sticker component
 * @param children {ReactNode} Sticker child
 * @param variant {StatusState} Sticker variant : primary only
 * @param small {boolean} Small Sticker
 * @param id
 * @param outlined {boolean} Outlined sticker
 * @param iconName {IconName} Icon
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional css classes
 * @param others
 */
const Sticker = React.forwardRef<StickerRef, StickerProps>(({
  className,
  id,
  variant,
  small,
  label,
  outlined,
  iconName,
  accessibilityLabel,
  ...others
}, ref): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'sticker',
      variant && is(getVariantClassName(variant)),
      small && is('small'),
      className,
      outlined && is('outlined'),
      is('vcentered'),
    ),
  )

  return (
    <p ref={ref} id={id} className={classes} aria-label={accessibilityLabel} {...others}>
      {iconName && <Icon size={small ? IconSize.SMALLER : IconSize.SMALL} name={iconName} />}
      {label}
    </p>
  )
})

Sticker.displayName = ComponentName.Sticker
export default Sticker

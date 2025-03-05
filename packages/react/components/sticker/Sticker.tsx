import { Icon, IconSize } from '@/components/icon'
import { hashClass } from '@/helpers'
import { getVariantClassName } from '@/objects'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { StickerProps, StickerRef } from './StickerProps'

/**
 * Sticker component
 * @param children {ReactNode} Sticker child
 * @param variant {StatusState} Sticker variant : primary only
 * @param small {boolean} Small Sticker
 * @param id
 * @param outlined {boolean} Outlined sticker
 * @param iconName {IconName} Icon
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param others
 */
const Sticker = React.forwardRef<StickerRef, StickerProps>(
  ({ className, id, variant, small, label, outlined, iconName, accessibilityLabel, ...others }, ref): JSX.Element => {
    const classes = hashClass(
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
  },
)

Sticker.displayName = ComponentName.Sticker
export default Sticker

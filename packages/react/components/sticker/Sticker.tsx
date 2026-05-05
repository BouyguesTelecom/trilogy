import { Icon, IconSize } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getVariantClassName } from '@/objects'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { StickerProps, StickerRef } from './StickerProps'

/**
 * Sticker Component
 * @param label {string} Sticker label text
 * @param variant {VariantState} Sticker color variant
 * @param small {boolean} Small sticker
 * @param outlined {boolean} Outlined sticker style
 * @param iconName {IconName} Icon displayed in sticker
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 */
const Sticker = React.forwardRef<StickerRef, StickerProps>(
  (
    { className, id, variant, small, label, outlined, iconName, accessibilityLabel, testId, ...others },
    ref,
  ): JSX.Element => {
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
      <p ref={ref} id={id} className={classes} aria-label={accessibilityLabel} data-testid={testId} {...others}>
        {iconName && <Icon size={small ? IconSize.SMALLER : IconSize.SMALL} name={iconName} />}
        {label}
      </p>
    )
  },
)

Sticker.displayName = ComponentName.Sticker
export default Sticker

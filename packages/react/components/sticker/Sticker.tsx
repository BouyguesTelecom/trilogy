import React from 'react'
import clsx from 'clsx'
import { StickerProps } from './StickerProps'
import { is } from '@/services/classify'
import { getVariantClassName } from '@/objects'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

/**
 * Sticker component
 * @param children {ReactNode} Sticker child
 * @param variant {StatusState} Sticker variant : primary only
 * @param small {boolean} Small Sticker
 * @param id
 * @param outlined {boolean} Outlined sticker
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param others
 */
const Sticker = ({ className, id, variant, small, label, outlined, ...others }: StickerProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'sticker',
      variant && is(getVariantClassName(variant)),
      small && is('small'),
      className,
      outlined && is('outlined'),
    ),
  )

  return (
    <p id={id} className={classes} {...others}>
      {label}
    </p>
  )
}

export default Sticker

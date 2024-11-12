import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getVariantClassName } from '@/objects'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { StickerMarkup, StickerMarkupValues } from './StickerEnum'
import { StickerProps } from './StickerProps'

/**
 * Sticker component
 * @param children {ReactNode} Sticker child
 * @param variant {StatusState} Sticker variant : primary only
 * @param small {boolean} Small Sticker
 * @param hat {boolean} Hat Sticker ( for box )
 * @param outlined {boolean} Outlined sticker
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {StickerMarkup} HTML element : p|span|div
 * @param className {string} Additionnal css classes
 * @param others
 */
const Sticker = ({
  className,
  children,
  variant,
  small,
  hat,
  markup,
  outlined,
  ...others
}: StickerProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    clsx(
      'sticker',
      variant && is(getVariantClassName(variant)),
      small && is('small'),
      hat && is('hat'),
      className,
      outlined && is('outlined'),
    ),
  )

  const isCorrectMarkup = (stringMarkup: StickerMarkup | StickerMarkupValues) => {
    if (stringMarkup in StickerMarkup || Object.values(StickerMarkup).includes(stringMarkup as StickerMarkup))
      return true
  }

  const Tag = markup && isCorrectMarkup(markup) ? markup : 'div'

  return (
    <Tag className={classes} {...others}>
      {children}
    </Tag>
  )
}

export default Sticker

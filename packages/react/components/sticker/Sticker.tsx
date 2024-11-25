import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { StickerMarkup, StickerMarkupValues } from '@/components/sticker/StickerEnum'
import { StickerProps } from '@/components/sticker/StickerProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getVariantClassName } from '@/objects/facets/Variant'
import { is } from '@/services/classify'

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
const Sticker = React.forwardRef(
  (
    { className, children, variant, small, hat, markup, outlined, ...others }: StickerProps,
    ref: React.Ref<HTMLDivElement>,
  ): JSX.Element => {
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
      <Tag className={classes} ref={ref} {...others}>
        {children}
      </Tag>
    )
  },
)

Sticker.displayName = ComponentName.Sticker
export default Sticker

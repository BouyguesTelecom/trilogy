import clsx from 'clsx'
import React from 'react'

import { CardImageProps } from '@/components/card/image/CardImageProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
/**
 * Card Image Component
 * @param src Image source
 * @param alt Alt attribute
 * @param size Image Card size on horizontal align
 * @param onClick {Function} onClick Event
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param contain {boolean} Resize mode contain
 * - -------------------------- WEB PROPERTIES ----------------------------------
 * @param className Additionnal CSS Classes
 */
const CardImage = React.forwardRef(
  ({ src, alt, className, size, onClick, ...others }: CardImageProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
    const classes = hashClass(clsx('card-image', size && is(`${size}`), className))

    return (
      <div onClick={onClick && onClick} className={classes} ref={ref}>
        <figure className={hashClass(clsx('image'))} {...others}>
          <img {...{ src: typeof src === 'string' ? src : '' }} alt={alt} />
        </figure>
      </div>
    )
  },
)

CardImage.displayName = ComponentName.CardImage
export default CardImage

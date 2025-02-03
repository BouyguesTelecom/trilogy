import { CardImageProps } from '@/components/card/image/CardImageProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

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
const CardImage = ({ src, alt, className, id, size, onClick, ...others }: CardImageProps): JSX.Element => {
  const classes = hashClass(clsx('card-image', size && is(`${size}`), className))

  return (
    <div id={id} onClick={onClick} className={classes}>
      <figure className={hashClass(clsx('image'))} {...others}>
        <img {...{ src: typeof src === 'string' ? src : '' }} alt={alt} />
      </figure>
    </div>
  )
}

export default CardImage

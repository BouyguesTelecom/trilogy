import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { CardImageProps, CardImageRef } from './CardImageProps'

/**
 * Card Image Component
 * @param src Image source
 * @param alt Alt attribute
 * @param size Image Card size on horizontal align
 * @param onClick {Function} onClick Event
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param contain {boolean} Resize mode contain
 * - -------------------------- WEB PROPERTIES ----------------------------------
 * @param className Additional CSS Classes
 */
const CardImage = React.forwardRef<CardImageRef, CardImageProps>(
  ({ src, alt = '', className, id, size, onClick, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('card-image', size && is(`${size}`), className))

    return (
      <div
        ref={ref}
        id={id}
        onClick={(e) => {
          // eslint-disable-next-line no-unused-expressions
          onClick?.(e)
          e.stopPropagation()
        }}
        className={classes}
      >
        <figure className={hashClass(styled, clsx('image'))} {...others}>
          <img {...{ src: typeof src === 'string' ? src : '' }} alt={alt} />
        </figure>
      </div>
    )
  },
)

CardImage.displayName = ComponentName.CardImage
export default CardImage

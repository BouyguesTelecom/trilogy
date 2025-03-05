import { hashClass } from '@/helpers/hashClassesHelpers'
import { getJustifiedClassName } from '@/objects/facets/Justifiable'
import { has, is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { ImageProps, ImageRef } from './ImageProps'

/**
 * Image Component
 * @param src {string} Image source
 * @param alt {string} Image alt
 * @param rounded {boolean} Image rounded
 * @param width {number|string} Image width (Number if not percent else string)
 * @param height {number|string} Image height (Number if not percent else string)
 * @param onClick {Function} onClick Event
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes (ONLY FOR WEB)
 */
const Image = React.forwardRef<ImageRef, ImageProps>(
  ({ src, alt = '', className, id, circled, width, height, onClick, radius, align, ...others }, ref): JSX.Element => {
    const classes = hashClass(clsx('image', className, align && is(getJustifiedClassName(align))))

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const styles: React.CSSProperties | any = {
      image: {
        width: width,
        height: height,
      },
    }

    return (
      <figure ref={ref} id={id} onClick={onClick} className={classes} {...others}>
        <img
          style={styles.image}
          className={hashClass(clsx(radius && has(`border-radius-${radius}`), circled ? is('circled') : ''))}
          src={typeof src === 'string' ? src : ''}
          alt={alt}
        />
      </figure>
    )
  },
)

Image.displayName = ComponentName.Image
export default Image

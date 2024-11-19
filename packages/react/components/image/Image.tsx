import clsx from 'clsx'
import React from 'react'

import { ImageProps } from '@/components/image/ImageProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

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
const Image = (
  { src, alt, className, rounded, width, height, onClick, ...others }: ImageProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element => {
  const classes = hashClass(clsx('image', className))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styles: React.CSSProperties | any = {
    image: {
      width: width,
      height: height,
    },
  }

  return (
    <figure onClick={onClick && onClick} className={classes} ref={ref} {...others}>
      <img
        style={styles.image}
        className={hashClass(clsx(rounded ? is('rounded') : ''))}
        src={typeof src === 'string' ? src : ''}
        alt={alt}
      />
    </figure>
  )
}

export default React.forwardRef(Image)

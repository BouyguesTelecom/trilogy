import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import { getJustifiedClassName } from '@/objects/index'
import { has, is } from '@/services/index'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { ImageProps, ImageRef } from './ImageProps'

/**
 * Image Component
 * @param src {string} Image source
 * @param alt {string} Image alt
 * @param radius {RadiusValues} Image border radius size
 * @param width {number|string} Image width (Number if not percent else string)
 * @param height {number|string} Image height (Number if not percent else string)
 * @param onClick {Function} onClick Event
 * @param align {Alignable} Align Image
 * @param circled {boolean} Circled Image
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes (ONLY FOR WEB)
 */
const Image = React.forwardRef<ImageRef, ImageProps>(
  ({ src, alt = '', className, id, circled, width, height, onClick, radius, align, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('image', className, align && is(getJustifiedClassName(align))))

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const styles: React.CSSProperties | any = {
      image: {
        width: width,
        height: height,
      },
    }

    return (
      <figure
        ref={ref}
        id={id}
        onClick={(e) => {
          onClick?.(e)
          e.stopPropagation()
        }}
        className={classes}
        {...others}
      >
        <img
          style={styles.image}
          className={hashClass(styled, clsx(radius && has(`border-radius-${radius}`), circled ? is('circled') : ''))}
          src={typeof src === 'string' ? src : ''}
          alt={alt}
        />
      </figure>
    )
  },
)

Image.displayName = ComponentName.Image
export default Image

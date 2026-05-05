import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getJustifiedClassName } from '@/objects'
import { has, is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { ImageProps, ImageRef } from './ImageProps'

/**
 * Image Component
 * @param src {string} Image source
 * @param alt {string} Image alt
 * @param radius {RadiusValues} Image border radius size
 * @param width {number|string} Image width (number for px, string for %)
 * @param height {number|string} Image height (number for px, string for %)
 * @param onClick {Function} onClick Event
 * @param align {Alignable} Image alignment
 * @param circled {boolean} Circled Image
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param cache {ImageCache} Caching strategy for the image
 */
const Image = React.forwardRef<ImageRef, ImageProps>(
  (
    { src, alt = '', className, id, circled, width, height, onClick, radius, align, testId, ...others },
    ref,
  ): JSX.Element => {
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
        data-testid={testId}
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

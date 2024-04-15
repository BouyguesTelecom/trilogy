import React from 'react'
import { SliceImageProps } from './SliceImageProps'
import { is } from '../../../services/classify'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import clsx from 'clsx'
import { useTrilogyContext } from '../../../context/index'

/**
 * Slice Image Component
 * @param children {ReactNode} Custom children for Slice Image
 * @param src {string} Image source
 * @param alt {string} Image alt
 * ------------------ WEB PROPERTIES ---------------------
 * @param rounded {boolean} Rounded Slice Image
 * @param className {string} Additionnal CSS Classes
 */
const SliceImage = ({ children, className, src, alt, rounded, ...others }: SliceImageProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('slice-image', className))

  if (children) {
    return (
      <div className={classes} {...others}>
        {children}
      </div>
    )
  }

  return (
    <div className={classes} {...others}>
      <div className={hashClass(styled, clsx('image'))}>
        <img
          className={hashClass(styled, clsx(rounded && is('rounded')) || '')}
          src={typeof src === 'string' ? src : ''}
          alt={alt}
        />
      </div>
    </div>
  )
}

export default SliceImage

import * as React from 'react'
import { BoxHeaderProps } from './BoxHeaderProps'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { has, is } from '@/services'
import { getAlignClassName, getBackgroundClassName, getJustifiedClassName } from '@/objects'

/**
 * Box Header Component
 * @param children {React.ReactNode} Children
 * @param help {string} Box Header Help Sticker
 * @param variant {TrilogyColor} Box Header backgroundColor
 * @param others
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */

const BoxHeader = ({ children, className, id, align, variant, ...others }: BoxHeaderProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(
    styled,
    clsx(
      'box-header',
      className,
      variant && has(getBackgroundClassName(variant)),
      align && is(getJustifiedClassName(align)),
    ),
  )

  return (
    <div id={id} className={classes} {...others}>
      {children && typeof children.valueOf() === 'string' ? <p>{children}</p> : children}
    </div>
  )
}

export default BoxHeader

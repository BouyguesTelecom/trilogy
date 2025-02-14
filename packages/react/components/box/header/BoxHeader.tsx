import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { BoxHeaderProps, BoxHeaderRef } from './BoxHeaderProps'
import { has, is } from '@/services'
import { getBackgroundClassName, getJustifiedClassName } from '@/objects'

/**
 * Box Header Component
 * @param children {React.ReactNode} Children
 * @param help {string} Box Header Help Sticker
 * @param variant {TrilogyColor} Box Header backgroundColor
 * @param align
 * @param id
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const BoxHeader = React.forwardRef<BoxHeaderRef, BoxHeaderProps>(
  ({ children, className, id, align, variant, ...others }, ref): JSX.Element => {
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
      <div ref={ref} id={id} className={classes} {...others}>
        {children && typeof children.valueOf() === 'string' ? <p>{children}</p> : children}
      </div>
    )
  },
)
BoxHeader.displayName = ComponentName.BoxHeader
export default BoxHeader

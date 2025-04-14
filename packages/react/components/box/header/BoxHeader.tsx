import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers'
import { getAlignClassName, getBackgroundClassName } from '@/objects'
import { has, is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { BoxHeaderProps, BoxHeaderRef } from './BoxHeaderProps'

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
    let alignClass = null
    if (align) {
      alignClass =
        (getAlignClassName(align) === 'aligned-start' && is('justified-start')) ||
        (getAlignClassName(align) === 'aligned-center' && is('justified-center')) ||
        (getAlignClassName(align) === 'aligned-end' && is('justified-end')) ||
        null
    }
    const classes = hashClass(
      clsx('box-header', className, variant && has(getBackgroundClassName(variant)), align && alignClass),
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

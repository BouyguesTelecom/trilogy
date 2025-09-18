import * as React from 'react'
import { StickyProps } from './StickyProps'
import clsx from 'clsx'
import { is } from '@/services'
import { getStickyClassName } from '@/objects'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

/**
 * Sticky Component (DIV EQUIVALENT)
 * @param {React.ReactNode} children - Sticky child
 * @param sticky {StickyPosition} - Sticky position
 */
const Sticky = ({ children, className, sticky, ...others }: StickyProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx(sticky && is(getStickyClassName(sticky)), className))

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default Sticky

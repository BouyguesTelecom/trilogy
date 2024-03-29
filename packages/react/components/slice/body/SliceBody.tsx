import React from 'react'
import clsx from 'clsx'
import { SliceBodyProps } from './SliceBodyProps'
import { hashClass } from '../../../helpers'
import { useTrilogyContext } from '../../../context'

/**
 * Slice Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Children for Slice
 */
const SliceBody = ({ children, className, ...others }: SliceBodyProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('slice-body', className))

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default SliceBody

import React from 'react'
import clsx from 'clsx'
import { SliceCtaProps } from './SliceCtaProps'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../../context/index'

/**
 * Slice Cta Component
 * @param children {ReactNode} Children for Slice Cta
 * ------------ WEB PROPERTIES ---------------
 * @param className {string} Additionnal CSS Classes
 */
const SliceCta = ({ children, className, ...others }: SliceCtaProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('slice-call-to-action', className))

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default SliceCta

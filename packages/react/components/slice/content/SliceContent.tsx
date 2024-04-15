import React from 'react'
import clsx from 'clsx'
import { SliceContentProps } from './SliceContentProps'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../../context/index'

/**
 * Slice Content Component
 * @param children {ReactNode} Children for Slice Content
 * ------------------ WEB PROPERTIES ---------------------
 * @param className {string} Additionnal CSS Classes
 */
const SliceContent = ({ children, className, ...others }: SliceContentProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('slice-content', className))

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default SliceContent

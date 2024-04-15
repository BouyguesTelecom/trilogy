import React from 'react'
import { SliceListProps } from './SliceListProps'
import { is } from '../../../services/classify'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import clsx from 'clsx'
import { useTrilogyContext } from '../../../context/index'

/**
 * Slice List Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Children for SliceList (Slice)
 * @param transparent {boolean} Apply transparent on Slices container
 * @param selectable {boolean} List of checkable Slice
 */
const SliceList = ({ children, className, transparent, selectable, ...others }: SliceListProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx('slices', transparent && is('transparent'), selectable && 'slice-select', className),
  )

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default SliceList

import React from 'react'
import { RowsProps } from './RowsProps'
import { hashClass } from '../../helpers/hashClassesHelpers'
import clsx from 'clsx'
import { useTrilogyContext } from '../../context/index'

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 * - ------------------- WEB PROPERTIES -------------------------
 * @param className {string} additionnal CSS Classes
 */
const Rows = ({ className, ...others }: RowsProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  return <div className={hashClass(styled, clsx('rows', className))} {...others} />
}

export default Rows

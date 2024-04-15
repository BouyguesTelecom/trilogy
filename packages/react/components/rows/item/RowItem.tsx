import React from 'react'
import { RowsItemProps } from './RowItemProps'
import { is } from '../../../services/classify'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import clsx from 'clsx'
import { useTrilogyContext } from '../../../context/index'

/**
 * Rows Item Component
 * @param narrow {boolean} Align same elements horizontaly
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------
 *  @param className {string} additionnal CSS Classes
 */
const RowItem = ({ className, narrow, ...others }: RowsItemProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('row', narrow && is('narrow'), className))
  return <div className={classes} {...others} />
}

export default RowItem

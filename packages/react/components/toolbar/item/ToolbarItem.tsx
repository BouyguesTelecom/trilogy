import React from 'react'
import clsx from 'clsx'
import { ToolbarItemWebProps } from './ToolbarItemProps'
import { is } from '../../../services/classify'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../../context/index'

/**
 * Toolbar Item Component
 * @param children {ReactNode}
 * @param className {string} Additionnal CSS Classes
 * @param clippedToBottom {boolean} Is clipped to bottom
 */
const ToolbarItem = ({ className, clippedToBottom, ...others }: ToolbarItemWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('toolbar-item', clippedToBottom && is('clipped-to-bottom'), className))
  return <div className={classes} {...others} />
}

export default ToolbarItem

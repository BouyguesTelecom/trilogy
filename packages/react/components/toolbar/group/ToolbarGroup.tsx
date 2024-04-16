import React from 'react'
import clsx from 'clsx'
import { ToolbarGroupWebProps } from './ToolbarGroupProps'
import { is } from '../../../services/classify'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../../context/index'

/**
 * Toolbar Group
 * @param children {ReactNode}
 * @param className {string} Additionnal CSS Classes
 * @param elastic {boolean} Is elastic
 */
const ToolbarGroup = ({ className, elastic, ...others }: ToolbarGroupWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('toolbar-group', elastic && is('elastic'), className))
  return <div className={classes} {...others} />
}

export default ToolbarGroup

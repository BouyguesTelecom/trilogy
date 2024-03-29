import React from 'react'
import { DropdownMenuWebProps } from './DropdownMenuProps'
import clsx from 'clsx'
import { hashClass } from '../../../helpers'
import { useTrilogyContext } from '../../../context'

/**
 * Dropdown Menu Component
 * @param children {React.ReactNode} Children for Dropdown menu (Dropdown item)
 * @param className {string} Additionnal CSS Classes
 */
const DropdownMenu = ({ children, className, ...others }: DropdownMenuWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('dropdown-menu', className))

  return (
    <div className={classes} {...others}>
      <div className={hashClass(styled, clsx('dropdown-content'))}>{children}</div>
    </div>
  )
}

export default DropdownMenu

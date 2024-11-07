import * as React from 'react'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context/index'
import { PopoverContentProps } from '@/components/popover/content/PopoverContentProps'

/**
 * Popover Component
 * @param children {ReactNode} Popover children
 * @param direction {PopoverDirection} Popover direction (DOWN|LEFT|RIGHT)
 * - -------------------------- WEB PROPERTIES -------------------------------
 */
const PopoverContent = ({ children, className, id, ...others }: PopoverContentProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('popover-content', className))

  return (
    <div id={id} className={classes} {...others}>
      {children}
    </div>
  )
}

export default PopoverContent

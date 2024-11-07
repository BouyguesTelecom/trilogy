import * as React from 'react'
import { BoxItemProps } from './BoxItemProps'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

/**
 * Box Item Component
 * @param children {React.ReactNode} Children
 * @param size {BoxItemSize} SMALL|MEDIUM|LARGE|HUGE
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const BoxItem = ({ className, id, children, ...others }: BoxItemProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div id={id} className={hashClass(styled, clsx('box-item', className))} {...others}>
      {children}
    </div>
  )
}

export default BoxItem

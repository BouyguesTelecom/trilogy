import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { ModalHeaderProps } from './ModalHeaderProps'

/**
 * Modal Title Component
 * @param children {string}
 * @param iconName {IconName} IconName for icon title
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 */
const ModalHeader = ({ children, className, ...others }: ModalHeaderProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div className={hashClass(styled, clsx('modal-header', className))} {...others}>
      {children}
    </div>
  )
}

export default ModalHeader

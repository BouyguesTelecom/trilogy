import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { ModalFooterProps } from './ModalFooterProps'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 */
const ModalFooter = ({ children, className }: ModalFooterProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  return <div className={hashClass(clsx('modal-footer', className))}>{children}</div>
}

export default ModalFooter

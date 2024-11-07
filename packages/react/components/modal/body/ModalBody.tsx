import * as React from 'react'
import { ModalBodyProps } from './ModalBodyProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 */
const ModalBody = ({ children, className }: ModalBodyProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  return <div className={hashClass(styled, clsx('modal-body', className))}>{children}</div>
}

export default ModalBody

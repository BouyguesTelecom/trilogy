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
 * @param id
 */
const ModalFooter = ({ children, className, id }: ModalFooterProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  return (
    <div data-modal-footer='' id={id} className={hashClass(styled, clsx('modal-footer', className))}>
      {children}
    </div>
  )
}

export default ModalFooter

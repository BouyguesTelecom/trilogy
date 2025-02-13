import { ModalFooterProps } from '@/components/modal/footer/ModalFooterProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param id
 */
const ModalFooter = ({ children, className, id }: ModalFooterProps): JSX.Element => {
  return (
    <div data-modal-footer='' id={id} className={hashClass(clsx('modal-footer', className))}>
      {children}
    </div>
  )
}

export default ModalFooter

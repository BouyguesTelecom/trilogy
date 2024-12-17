import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { ModalBodyProps } from './ModalBodyProps'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param id
 */
const ModalBody = ({ children, className, id }: ModalBodyProps): JSX.Element => {
  return (
    <div id={id} className={hashClass(clsx('modal-body', className))}>
      {children}
    </div>
  )
}

export default ModalBody

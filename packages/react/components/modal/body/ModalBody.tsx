import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import React from 'react'
import { ModalBodyProps, ModalBodyRef } from './ModalBodyProps'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param id
 */
const ModalBody = React.forwardRef<ModalBodyRef, ModalBodyProps>(({ children, className, id }, ref): JSX.Element => {
  return (
    <div ref={ref} id={id} className={hashClass(clsx('modal-body', className))}>
      {children}
    </div>
  )
})

ModalBody.displayName = ComponentName.ModalBody
export default ModalBody

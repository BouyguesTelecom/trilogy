import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { ModalFooterProps, ModalFooterRef } from './ModalFooterProps'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param id
 */
const ModalFooter = React.forwardRef<ModalFooterRef, ModalFooterProps>(
  ({ children, className, id }, ref): JSX.Element => {
    return (
      <div ref={ref} data-modal-footer='' id={id} className={hashClass(clsx('modal-footer', className))}>
        {children}
      </div>
    )
  },
)

ModalFooter.displayName = ComponentName.ModalFooter
export default ModalFooter

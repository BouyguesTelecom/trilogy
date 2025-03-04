import * as React from 'react'
import { ModalBodyProps, ModalBodyRef } from './ModalBodyProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param id
 */
const ModalBody = React.forwardRef<ModalBodyRef, ModalBodyProps>(({ children, className, id }, ref): JSX.Element => {
  const { styled } = useTrilogyContext()
  return (
    <div ref={ref} id={id} className={hashClass(styled, clsx('modal-body', className))}>
      {children}
    </div>
  )
})

ModalBody.displayName = ComponentName.ModalBody
export default ModalBody

import * as React from 'react'
import { ModalBodyProps, ModalBodyRef } from './ModalBodyProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Modal Body Component
 * @param children {React.ReactNode}
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional css classes
 */
const ModalBody = React.forwardRef<ModalBodyRef, ModalBodyProps>(({ children, className, id, testId }, ref): JSX.Element => {
  const { styled } = useTrilogyContext()
  return (
    <div ref={ref} id={id} className={hashClass(styled, clsx('modal-body', className))} data-testid={testId}>
      {children}
    </div>
  )
})

ModalBody.displayName = ComponentName.ModalBody
export default ModalBody

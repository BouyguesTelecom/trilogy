import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { ModalFooterProps, ModalFooterRef } from './ModalFooterProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional css classes
 */
const ModalFooter = React.forwardRef<ModalFooterRef, ModalFooterProps>(({ children, className, id, testId }, ref): JSX.Element => {
  const { styled } = useTrilogyContext()
  return (
    <div ref={ref} data-modal-footer='' id={id} className={hashClass(styled, clsx('modal-footer', className))} data-testid={testId}>
      {children}
    </div>
  )
})

ModalFooter.displayName = ComponentName.ModalFooter
export default ModalFooter

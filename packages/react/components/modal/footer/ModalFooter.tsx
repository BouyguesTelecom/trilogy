import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { ModalFooterProps, ModalFooterRef } from './ModalFooterProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional css classes
 * @param id
 */
const ModalFooter = React.forwardRef<ModalFooterRef, ModalFooterProps>(({ children, className, id }, ref): JSX.Element => {
  const { styled } = useTrilogyContext()
  return (
    <div ref={ref} data-modal-footer='' id={id} className={hashClass(styled, clsx('modal-footer', className))}>
      {children}
    </div>
  )
})

ModalFooter.displayName = ComponentName.ModalFooter
export default ModalFooter

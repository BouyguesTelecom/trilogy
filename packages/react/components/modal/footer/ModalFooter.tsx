import clsx from 'clsx'
import React from 'react'

import { ModalFooterProps } from '@/components/modal/footer/ModalFooterProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 */
const ModalFooter = ({ children, className }: ModalFooterProps): JSX.Element => {
  return <div className={hashClass(clsx('modal-footer', className))}>{children}</div>
}

export default ModalFooter
